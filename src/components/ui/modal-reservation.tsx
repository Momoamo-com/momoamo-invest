"use client";
import { title } from "process";
import ReservationForm from "./reservation-form";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


const ModalReservation = ({
  isOpen,
  onClose,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}) =>  <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        useEnterprise={true}
      ><ReservationForm isOpen={isOpen} onClose={onClose} title={title} className={className} /></GoogleReCaptchaProvider>;

export default ModalReservation;
