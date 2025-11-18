import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";
import { google } from "googleapis";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

type RecaptchaVerificationRequest = {
  token: string;
};

type RecaptchaVerificationResponse = {
  success: boolean;
  message?: string;
};

const getGoogleClient = () => {
  const credentials = JSON.parse(process.env.GOOGLE_API_CREDENTIALS!);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });

  const client = new RecaptchaEnterpriseServiceClient({
    auth,
  });

  return client;
};

const reCaptchaHandler: NextApiHandler<RecaptchaVerificationResponse> = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const { token }: RecaptchaVerificationRequest = req.body;

    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "Token is required" });
    }

    const client = getGoogleClient();
    const projectPath = client.projectPath("momoamo");

    const assessmentRequest = {
      parent: projectPath,
      assessment: {
        event: {
          token: token,
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        },
      },
    };

    const [response] = await client.createAssessment(assessmentRequest);

    if (!response.tokenProperties?.valid) {
      return res.status(400).json({
        success: false,
        message: "Invalid token",
      });
    }

    const score = response.riskAnalysis?.score ?? 0;
    const threshold = 0.5;

    if (score < threshold) {
      return res.status(400).json({
        success: false,
        message: "Low confidence score",
      });
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return res.status(500).json({
      success: false,
      message: "Verification failed",
    });
  }
};

export default reCaptchaHandler;
