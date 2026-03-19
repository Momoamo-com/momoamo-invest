"use client";

import Image from "next/image";
import type { RefObject } from "react";

import {
  useScrollSlideUp,
  useScrollStaggerIn,
} from "@/animations/scrollAnimations";
import TeamImage from "@/assets/images/invest-page/invest-about-team.webp";

const InvestAboutSection = () => {
  const titleRef = useScrollSlideUp();
  const contentRef = useScrollStaggerIn(0.12);
  const mobileRef = useScrollSlideUp(0.1);
  return (
    <section
      aria-label="About us Momoamo"
      className="w-full bg-offsite-main md:py-[100px] py-[40px] overflow-hidden"
    >
      <div
        className="max-w-[1360px] xl:px-14 px-4 mx-auto"
        ref={titleRef as RefObject<HTMLDivElement>}
      >
        <h2 className="text-offsite-secondary font-nichrome font-bold uppercase leading-none md:text-[80px] text-[58px]">
          ABOUT US
        </h2>
        <p className="mt-[16px] md:mt-[24px] text-offsite-secondary font-normal font-nichrome md:text-[32px] text-[26px] tracking-normal text-start leading-[1.1] max-w-full w-[650px]">
          Investissez aux côtés d&apos;entrepreneurs aguerris et experts de leur
          domaine
        </p>
      </div>

      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4">
        {/* Desktop: image left, bios right */}
        <div
          className="mt-[32px] md:mt-[50px] hidden md:grid md:grid-cols-2 gap-8"
          ref={contentRef as RefObject<HTMLDivElement>}
        >
          <div className="w-full overflow-hidden bg-[#0f1c3d]">
            <Image
              src={TeamImage}
              alt="Olivier et Aissa, co-fondateurs"
              width={684}
              height={570}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center gap-10">
            <div>
              <h3 className="text-offsite-secondary font-nichrome font-bold uppercase text-[32px] leading-tight">
                OLIVIER, KYMONO
              </h3>
              <p className="mt-[16px] text-offsite-secondary/80 font-general font-light text-[16px] md:text-[18px] leading-[1.4]">
                En quelques années Olivier, a créé un empire de la culture
                d&apos;entreprise avec Kymono. L&apos;entreprise totalise
                aujourd&apos;hui plus de 10 000 clients et plus 300 séminaires
                organisés dont certains sur des concepts vus à la télé.
              </p>
            </div>
            <div>
              <h3 className="text-offsite-secondary font-nichrome font-bold uppercase text-[32px] leading-tight">
                AISSA, ENKY
              </h3>
              <p className="mt-[16px] text-offsite-secondary/80 font-general font-light text-[16px] md:text-[18px] leading-[1.4]">
                En 2013, Aissa cofonde Edebex, une fintech qui totalise
                aujourd&apos;hui plus d&apos;1Md€+ de volume d&apos;affaires. Il
                crée en 2019 Enky une entreprise à la frontière de la fintech et
                du FaaS (Mobilier par abonnement) qui a déjà séduit plus de 180
                clients et 4700 investisseurs.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: stacked vertically */}
        <div
          className="mt-12 md:hidden flex flex-col"
          ref={mobileRef as RefObject<HTMLDivElement>}
        >
          <div className="w-full overflow-hidden bg-[#0f1c3d]">
            <Image
              src={TeamImage}
              alt="Olivier et Aissa, co-fondateurs"
              width={684}
              height={570}
              className="w-full aspect-[684/570] object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-[32px]">
            <h3 className="text-offsite-secondary font-nichrome font-bold uppercase text-[32px] leading-tight">
              OLIVIER, KYMONO
            </h3>
            <p className="mt-[16px] text-offsite-secondary/80 font-general font-light text-[16px] leading-[1.4]">
              En quelques années Olivier, a créé un empire de la culture
              d&apos;entreprise avec Kymono. L&apos;entreprise totalise
              aujourd&apos;hui plus de 10 000 clients et plus 300 séminaires
              organisés dont certains sur des concepts vus à la télé.
            </p>
          </div>
          <div className="mt-[24px]">
            <h3 className="text-offsite-secondary font-nichrome font-bold uppercase text-[32px] leading-tight">
              AISSA, ENKY
            </h3>
            <p className="mt-[16px] text-offsite-secondary/80 font-general font-light text-[16px] leading-[1.4]">
              En 2013, Aissa cofonde Edebex, une fintech qui totalise
              aujourd&apos;hui plus d&apos;1Md€+ de volume d&apos;affaires. Il
              crée en 2019 Enky une entreprise à la frontière de la fintech et
              du FaaS (Mobilier par abonnement) qui a déjà séduit plus de 180
              clients et 4700 investisseurs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestAboutSection;
