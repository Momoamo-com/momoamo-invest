"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import PortraitImage from "@/assets/images/house/house-1.jpg";

const aboutCards = [
  {
    image: PortraitImage,
    title: "OLIVIER, KYMONO",
    description:
      "CEO & fondateur de Kymono, Forbes 30under30 (2019), 10k+ clients & 300+ séminaires organisés.",
  },
  {
    image: PortraitImage,
    title: "AISSA, ENKY",
    description:
      "Fondateur d’Edebex (fintech - 1Md€+ de volume d’affaires), puis CEO & fondateur d’Enky, solution de mobilier haut de gamme et durable, par abonnement.",
  },
];

const InvestAboutSection = () => {
  return (
    <section
      aria-label="About us Momoamo"
      className="w-full bg-offsite-main md:py-[120px] py-[64px]"
    >
      <div className="max-w-[1360px] xl:px-14 px-4 mx-auto">
        <h2 className="text-offsite-secondary font-nichrome font-bold uppercase leading-none md:text-[86px] text-[58px]">
          ABOUT US
        </h2>
        <p className="mt-4 text-offsite-secondary font-general font-light md:text-[24px] text-[20px] leading-[1.3] max-w-[720px]">
          Investissez aux côtés d’entrepreneurs aguerris et experts de leur
          domaine
        </p>
      </div>

      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4">
        <div className="mt-12 md:grid hidden md:grid-cols-2 gap-8">
          {aboutCards.map((card) => (
            <article key={card.title} className="flex flex-col">
              <div className="w-full overflow-hidden bg-[#0f1c3d]">
                <Image
                  src={card.image}
                  alt=""
                  aria-hidden="true"
                  width={684}
                  height={570}
                  className="w-full aspect-[684/570] object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 text-offsite-secondary font-nichrome font-bold uppercase text-[28px] leading-tight">
                {card.title}
              </h3>
              <p className="mt-3 text-offsite-secondary/80 font-general font-light text-[16px] leading-[1.4]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-12 md:hidden">
          <Swiper
            slidesPerView="auto"
            spaceBetween={16}
            style={{ paddingRight: "0px", overflow: "visible" }}
          >
            {aboutCards.map((card) => (
              <SwiperSlide key={card.title} className="!w-[80vw]">
                <article className="flex flex-col">
                  <div className="w-full overflow-hidden bg-[#0f1c3d]">
                    <Image
                      src={card.image}
                      alt=""
                      aria-hidden="true"
                      width={684}
                      height={570}
                      className="w-full aspect-[684/570] object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-5 text-offsite-secondary font-nichrome font-bold uppercase text-[28px] leading-tight">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-offsite-secondary/80 font-general font-light text-[16px] leading-[1.4]">
                    {card.description}
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default InvestAboutSection;
