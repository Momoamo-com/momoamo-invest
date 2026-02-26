"use client";

import Image from "next/image";

import { useInvestWaitlistModal } from "@/components/modals/InvestWaitlistModalProvider";

import Bed_Svg from "@/assets/images/svgs/bed.svg";

const opportunityItems = [
  {
    label: "Rendement attractif et prévisible*",
    headline: "12% DE TRI ANNUEL NET DE FRAIS*",
    description: "Plus value foncière et forte rentabilité locative",
    footnote:
      "*Les prévisions ne constituent pas un indicateur fiable quant aux performances futures.",
  },
  {
    label: "Durée d’engagement",
    headline: "3 À 5 ANS",
    description:
      "Le temps d’optimiser les conditions du refinancement bancaire",
  },
  {
    label: "Revenus réguliers",
    headline: "JUSQU’À 8% D’INTÉRÊTS VERSÉ MENSUELLEMENT",
    description: "Directement issus des revenus de l’activité",
  },
  {
    label: "Des garanties solides",
    headline: "UNE DOUBLE PROTECTION",
    description:
      "Vous êtes actionnaire de la société d’exploitation et bénéficiez d’une hypothèque sur le bien",
  },
  {
    label: "Sortie claire dès le départ",
    headline: "C’EST NOUS QUI VOUS RACHETONS",
    description:
      "Refinancement bancaire avec rachat des investisseurs par l’opérateur.",
  },
  {
    label: "Des avantages en nature",
    headline: "REJOIGNEZ LE CLUB FERMÉ DES INVESTISSEURS",
    description: "Accès privilégié aux maisons et évènements exclusifs",
  },
];

const InvestOpportunitySection = () => {
  const { openModal } = useInvestWaitlistModal();
  return (
    <section
      aria-label="Opportunité d’investissement"
      className="w-full bg-gray-green"
    >
      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4 md:py-[120px] py-[64px]">
        <header className="max-w-[900px]">
          <p className="text-black-green font-nichrome font-bold uppercase text-[28px] tracking-wider">
            L’OPPORTUNITÉ D’INVESTISSEMENT
          </p>
          <h2 className="text-black-green font-nichrome font-bold uppercase leading-none md:text-[86px] text-[58px] mt-4">
            POURQUOI INVESTIR
            <br />
            AVEC MOMOAMO ?
          </h2>
          <p className="text-black-green font-general font-light md:text-[24px] text-[20px] leading-[1.3] mt-6">
            Participez à un projet unique par son approche intégré, qui mêle
            performance et sécurité
          </p>
        </header>

        <div className="mt-12 grid md:grid-cols-3 gap-x-10 gap-y-12">
          {opportunityItems.map((item, index) => (
            <article key={item.label} className="flex flex-col">
              <Image
                src={Bed_Svg}
                alt=""
                aria-hidden="true"
                width={28}
                height={28}
                className="w-[28px] h-[28px] pointer-events-none"
                loading="lazy"
              />
              <p className="mt-4 text-black-green font-general font-light text-[16px]">
                {item.label}
              </p>
              <h3 className="mt-3 text-black-green font-nichrome font-bold uppercase text-[28px] leading-tight">
                {item.headline}
              </h3>
              <p className="mt-3 text-black-green font-general font-light text-[16px] leading-[1.4]">
                {item.description}
              </p>
              {index === 0 && item.footnote ? (
                <p className="mt-3 text-black-green font-general italic text-[14px] leading-[1.4]">
                  {item.footnote}
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-black-green font-general font-light md:text-[22px] text-[20px] leading-[1.3]">
            Inscrivez vous pour le webinar de lancement de notre seconde
            opération
          </p>
          <button
            type="button"
            onClick={openModal}
            className="mt-6 inline-flex items-center justify-center gap-3 uppercase text-dark-green border-lime-green bg-lime-green font-bold font-nichrome md:text-[22px] text-[20px] md:px-10 px-8 md:h-[64px] h-[56px] transition-all duration-300 ease-in hover:!bg-dark-green hover:!text-lime-green hover:border-lime-green"
          >
            JE M’INSCRIS
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
      </div>
    </section>
  );
};

export default InvestOpportunitySection;
