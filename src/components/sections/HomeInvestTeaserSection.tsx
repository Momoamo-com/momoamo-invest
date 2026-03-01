"use client";

import Image from "next/image";
import type { RefObject } from "react";
import { useInvestWaitlistModal } from "@/components/modals/InvestWaitlistModalProvider";
import { useScrollSlideUp } from "@/animations/scrollAnimations";
import Img4 from "@/assets/images/house/house-new-1.webp";
import Button_Arrow_Svg from "@/assets/images/svgs/arrow_forward.svg";

const HomeInvestTeaserSection = () => {
  const { openModal } = useInvestWaitlistModal();
  const titleRef = useScrollSlideUp();
  const imageRef = useScrollSlideUp(0.1);
  const contentRef = useScrollSlideUp(0.2);

  return (
    <section aria-label="Projet immobilier Momoamo" className="w-full">
      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4 md:py-[120px] py-[64px]">
        <h2
          ref={titleRef as RefObject<HTMLHeadingElement>}
          className="text-black-green font-nichrome font-bold uppercase leading-none md:text-[90px] text-[58px] max-w-[860px]"
        >
          MOMOAMO C’EST AUSSI
          <br />
          UN PROJET IMMOBILIER
          <br />
          D’ENVERGURE.
        </h2>

        <div className="mt-10 md:mt-12 grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
          <div
            ref={imageRef as RefObject<HTMLDivElement>}
            className="relative w-full aspect-[4/3] overflow-hidden"
          >
            <Image
              src={Img4}
              alt=""
              aria-hidden="true"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          <div
            ref={contentRef as RefObject<HTMLDivElement>}
            className="flex flex-col justify-center max-w-[520px]"
          >
            <p className="font-nichrome font-bold md:text-[28px] text-[28px] text-black-green uppercase leading-tight">
              ET SI VOUS EN FAISIEZ PARTIE ?
            </p>
            <p className="mt-[32px] text-black-green font-normal font-nichrome md:text-[36px] text-[26px] tracking-normal leading-[1.1]">
              Accéder à notre plateforme pour investir dans nos maisons et
              rejoindre le club.
            </p>
            <p className="my-[32px] text-black-green font-nichrome font-normal text-[16px] md:text-[18px] leading-none">
              TRI Cible 10-14% • Durée 3-5 ans • Accès VIP aux maisons
            </p>
            <button
              type="button"
              onClick={openModal}
              className="group !border-[2px] uppercase hover:!bg-transparent hover:border hover:border-[#292222] hover:text-[#292222] text-[#EEE5D7] bg-[#292222] font-bold font-nichrome md:text-[28px] text-[28px] md:h-[64px] h-[60px] flex justify-center items-center gap-[10px] md:py-5 py-4 px-6 transition-all duration-300 ease-in border-[#292222] self-baseline"
            >
              REJOIGNEZ LE CLUB
              <Image
                src={Button_Arrow_Svg}
                alt=""
                width={20}
                height={20}
                loading="lazy"
                className="w-[20px] h-[20px] group-hover:invert transition-all duration-300 ease-in pointer-events-none"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInvestTeaserSection;
