"use client";

import Image from "next/image";
import type { RefObject } from "react";

import {
  useScrollSlideUp,
  useScrollStaggerIn,
} from "@/animations/scrollAnimations";
import CtaImage from "@/assets/images/house/house-1.jpg";
import { useInvestWaitlistModal } from "@/components/modals/InvestWaitlistModalProvider";

const InvestCtaSection = () => {
  const { openModal } = useInvestWaitlistModal();
  const contentRef = useScrollSlideUp();
  const imagesRef = useScrollStaggerIn(0.1, 0.1);
  return (
    <section className="w-full bg-gray-green">
      <div className="relative overflow-hidden max-w-[1360px] mx-auto w-full xl:px-14 px-4 md:py-[140px] py-[96px]">
        <div
          className="relative z-10 flex flex-col items-center text-center max-w-[760px] mx-auto"
          ref={contentRef as RefObject<HTMLDivElement>}
        >
          <h2 className="text-black-green font-nichrome font-bold uppercase leading-none md:text-[86px] text-[58px]">
            REJOIGNEZ MOMOAMO
          </h2>
          <p className="mt-4 text-black-green font-general font-light md:text-[22px] text-[18px] leading-[1.4]">
            Devenez acteur de notre projet immobilier unique et participez à la
            création d’espaces inspirants pour séjours professionnels en vous
            inscrivant dès maintenant.
          </p>
          <button
            type="button"
            onClick={openModal}
            className="mt-6 inline-flex items-center justify-center gap-3 uppercase text-[#EEE5D7] bg-[#292222] font-bold font-nichrome md:text-[20px] text-[18px] md:px-10 px-8 md:h-[56px] h-[52px] transition-all duration-300 ease-in hover:opacity-90"
          >
            BE FIRST TO JOIN
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        <div ref={imagesRef as RefObject<HTMLDivElement>}>
          <div className="absolute left-4 top-6 md:left-10 md:top-8 w-[120px] md:w-[180px]">
            <Image
              src={CtaImage}
              alt=""
              aria-hidden="true"
              width={220}
              height={220}
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute right-6 top-10 md:right-12 md:top-10 w-[110px] md:w-[170px]">
            <Image
              src={CtaImage}
              alt=""
              aria-hidden="true"
              width={210}
              height={210}
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute left-6 bottom-8 md:left-16 md:bottom-10 w-[130px] md:w-[200px]">
            <Image
              src={CtaImage}
              alt=""
              aria-hidden="true"
              width={240}
              height={240}
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute right-4 bottom-6 md:right-12 md:bottom-12 w-[140px] md:w-[210px]">
            <Image
              src={CtaImage}
              alt=""
              aria-hidden="true"
              width={260}
              height={260}
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestCtaSection;
