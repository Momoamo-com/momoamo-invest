"use client";

import { useVacationAnimations } from "@/animations/scrollAnimations";
import Image from "next/image";
import Img1 from "@/assets/images/vacation/img1.jpg";
import Img2 from "@/assets/images/vacation/img2.png";
import Img3 from "@/assets/images/vacation/img3.png";
import { useWindowSize } from "@/hooks/useWindowSize";

const cards = [
  {
    title: "MAKE IT MEMORABLE",
    image: { src: Img1.src, alt: "Make it memorable" },
    text: "On soigne les détails pour surprendre, marquer et créer de vrais souvenirs collectifs.",
  },
  {
    title: "GO off-script",
    image: { src: Img2.src, alt: "Effortless simplicity" },
    text: "On casse les codes du séminaire classique : Chaque séjour est personnalisé, à l’image de ceux qui l’habitent.",
  },
  {
    title: "Effortless simplicity",
    image: { src: Img3.src, alt: "Unforgettable experience" },
    text: "On pense à tout pour que nos invités n’aient plus qu’à profiter. Le confort d’un hôtel, la chaleur d’une maison, la liberté d’un lieu à soi.",
  },
];

const VacationSection = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const { titleRef } = useVacationAnimations(isMobile);

  return (
    <section
      id="valeurs"
      aria-label="Nos valeurs"
      className="max-w-[1360px] xl:px-14 px-4 trigger w-full mx-auto relative md:pt-[80px] py-[64px] md:pb-[80px]"
    >
      <h2
        ref={titleRef}
        className="max-w-full w-[530px] mx-auto uppercase text-center text-black-green md:text-[64px] text-[58px] font-nichrome font-bold tracking-normal leading-none pb-[40px]"
      >
        Nos valeurs donnent vie à votre séjour de rêve
      </h2>
      <div
        id="animation-cards"
        className="card-container md:mt-[40px] mt-8"
        aria-label="Our values"
      >
        <ul className="grid gap-[40px] position-relative list-none p-0">
          {cards.map((card, i) => (
            <li
              key={i}
              className={`sticky card-wrapper bg-[#EEE5D7] ${
                i === cards.length - 1 ? "" : ""
              }`}
              style={{ top: `${(isMobile ? 72 : 60) + i * 67}px` }}
            >
              <article className="card grid md:grid-cols-3 grid-cols-1 w-full pt-4 border-t border-[#292222]">
                <header className="flex items-start gap-4 mb-4 md:mb-0">
                  <h3 className="font-nichrome font-bold md:text-[28px] text-[28px] text-black-green uppercase leading-tight">
                    {card.title}
                  </h3>
                </header>
                <figure className="flex flex-col md:flex-row gap-4 m-0">
                  <Image
                    src={card.image.src}
                    width={429}
                    height={525}
                    alt={card.image.alt}
                    className="md:w-[429px] w-full h-[525px] max-h-[40vh] md:max-h-none object-cover rounded"
                    loading="lazy"
                  />
                </figure>
                <p className="text-black-green text-[18px] font-general font-normal md:ml-4 mt-2 md:mt-0 leading-[1.2]">
                  {card.text}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default VacationSection;
