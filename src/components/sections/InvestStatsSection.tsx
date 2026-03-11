"use client";

import Image from "next/image";
import type { RefObject } from "react";
import { useScrollStaggerIn } from "@/animations/scrollAnimations";
import Invest_1_Svg from "@/assets/images/invest-page/momo-invest-7.svg";
import Invest_2_Svg from "@/assets/images/invest-page/momo-invest-8.svg";
import Invest_3_Svg from "@/assets/images/invest-page/momo-invest-9.svg";
import Invest_4_Svg from "@/assets/images/invest-page/momo-invest-10.svg";

const stats = [
  {
    label: "MARCHÉ EN CROISSANCE DE +30%/AN",
    icon: Invest_1_Svg,
  },
  {
    label: "20% DE RENTABILITÉ LOCATIVE NETTE PAR MAISON",
    icon: Invest_2_Svg,
  },
  {
    label: "UN ACCÈS VIP AUX BIENS POUR LES INVESTISSEURS",
    icon: Invest_3_Svg,
  },
  {
    label: "AVANTAGES FISCAUX (150-0 B TER, EXONÉRATION D’IFI…)",
    icon: Invest_4_Svg,
  },
];

const InvestStatsSection = () => {
  const desktopRef = useScrollStaggerIn(0.12);
  const mobileRef = useScrollStaggerIn(0.12);

  return (
    <section aria-label="Indicateurs d’investissement" className="w-full bg-gray-green overflow-hidden">
      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4 md:py-[64px] py-[40px]">
        <div
          className="hidden md:grid grid-cols-4 gap-[46px]"
          ref={desktopRef as RefObject<HTMLDivElement>}
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-[16px] items-center text-center"
            >
              <Image
                src={item.icon}
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
                className="w-[32px] h-[32px] pointer-events-none"
                loading="lazy"
              />
              <p className="text-black-green font-nichrome font-bold uppercase text-[24px] leading-tight">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div
          className="md:hidden flex flex-col gap-[24px]"
          ref={mobileRef as RefObject<HTMLDivElement>}
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-[16px]"
            >
              <Image
                src={item.icon}
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
                className="w-[32px] h-[32px] mt-1 pointer-events-none"
                loading="lazy"
              />
              <p className="text-black-green font-nichrome font-bold uppercase text-[20px] leading-tight">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestStatsSection;
