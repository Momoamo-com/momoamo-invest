import type { NextApiRequest, NextApiResponse } from "next";

type SubscribePayload = {
  email?: string;
  firstName?: string;
  lastName?: string;
  capacity?: string;
  listid?: number | string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, firstName, lastName, capacity, listid } =
    req.body as SubscribePayload;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const apiUrl = process.env.ACTIVECAMPAIGN_API_URL;
  const apiKey = process.env.ACTIVECAMPAIGN_API_KEY;
  const capacityFieldId = process.env.ACTIVECAMPAIGN_CAPACITY_FIELD_ID;

  if (!apiUrl || !apiKey) {
    return res.status(500).json({ error: "ActiveCampaign is not configured" });
  }

  const baseUrl = apiUrl.replace(/\/$/, "");
  const contactPayload = {
    contact: {
      email,
      ...(firstName ? { firstName } : {}),
      ...(lastName ? { lastName } : {}),
      ...(capacityFieldId && capacity
        ? { fieldValues: [{ field: capacityFieldId, value: capacity }] }
        : {}),
    },
  };

  try {
    const response = await fetch(`${baseUrl}/api/3/contact/sync`, {
      method: "POST",
      headers: {
        "Api-Token": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(502).json({ error: errorText });
    }

    const data = (await response.json()) as { contact?: { id?: string } };
    const contactId = data.contact?.id;

    if (listid && contactId) {
      const listResponse = await fetch(`${baseUrl}/api/3/contactLists`, {
        method: "POST",
        headers: {
          "Api-Token": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactList: {
            list: String(listid),
            contact: String(contactId),
            status: 1,
          },
        }),
      });

      if (!listResponse.ok) {
        const listError = await listResponse.text();
        return res.status(502).json({ error: listError });
      }
    }

    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ error: "ActiveCampaign request failed" });
  }
}
