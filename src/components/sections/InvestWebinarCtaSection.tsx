"use client";

import Image from "next/image";

import { useInvestWaitlistModal } from "@/components/modals/InvestWaitlistModalProvider";
import CtaImage from "@/assets/images/invest-page/invest-cta.jpg";

const InvestWebinarCtaSection = () => {
  const { openModal } = useInvestWaitlistModal();
  return (
    <section
      aria-label="Inscription webinar"
      className="w-full bg-lime-green overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto w-full py-[32px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
          <div className="w-full flex justify-center md:justify-start w-[180px] md:w-[231px]">
            <div className="relative w-full max-w-[180px] md:max-w-[231px] aspect-[231/88]">
              <Image
                src={CtaImage}
                alt="Participants au webinar"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 210px, 180px"
                loading="lazy"
              />
            </div>
          </div>
          <p className="text-dark-green font-nichrome font-bold uppercase text-[18px] md:text-[24px] leading-[1.2] text-center md:flex-1">
            INSCRIVEZ VOUS POUR LE WEBINAR DE LANCEMENT DE NOTRE SECONDE OPÉRATION
          </p>
          <div className="flex justify-center md:justify-end">
            <button
              type="button"
              onClick={openModal}
              className="uppercase text-lime-green bg-dark-green font-nichrome font-bold text-[16px] md:text-[20px] px-[24px] py-[10px]"
            >
              JE M&apos;INSCRIS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestWebinarCtaSection;
