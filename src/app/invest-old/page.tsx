"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import FAQSection from "@/components/faq";
import FooterSection from "@/components/footer";

// Import images
import HeroImage from "@/assets/images/hero/new-hero-or-3.webp";
import HouseImg1 from "@/assets/images/house/house-new-1.webp";
import HouseImg2 from "@/assets/images/house/house-new-2.webp";
import HouseImg3 from "@/assets/images/house/house-new-3.webp";

// Logos
import AirbnbLogo from "@/assets/images/logos/airbnb.svg";
import AlanLogo from "@/assets/images/logos/alan.svg";
import DoctolibLogo from "@/assets/images/logos/doctolib.svg";
import QontoLogo from "@/assets/images/logos/qonto.svg";
import GoogleLogo from "@/assets/images/logos/google.svg";
import MicrosoftLogo from "@/assets/images/logos/microsoft.svg";
import LorealLogo from "@/assets/images/logos/loreal.svg";

// Animation variants (minimal per brief)
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// ============================================================
// SECTION 1: HERO (#172749) - 1512x1154
// ============================================================
const HeroSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#172749", minHeight: "1154px" }}
    >
      <div className="max-w-[1512px] mx-auto px-[56px] pt-[40px] pb-[60px] relative z-[2]">
        {/* HEADER ROW */}
        <div className="flex justify-between items-center mb-[134px]">
          {/* Social Links */}
          <div className="flex gap-[24px]">
            <a
              href="https://www.instagram.com/momoamo_places/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-nichrome text-[20px] font-bold leading-[20px] text-[#A0FFE8] uppercase hover:opacity-80 transition-opacity"
            >
              INStagram
            </a>
            <a
              href="https://www.linkedin.com/company/momoamo/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-nichrome text-[20px] font-bold leading-[20px] text-[#A0FFE8] uppercase hover:opacity-80 transition-opacity"
            >
              Linkedin
            </a>
          </div>

          {/* MOMOAMO Logo */}
          <div className="font-nichrome text-[32px] font-bold text-[#A0FFE8]">
            MOMOAMO
          </div>

          {/* Right buttons */}
          <div className="flex items-center gap-[16px]">
            <button className="font-nichrome text-[24px] font-bold text-[#A0FFE8] border border-[#A0FFE8] px-[20px] py-[10px] bg-transparent hover:bg-[#A0FFE8]/10 transition-colors">
              CONNEXION
            </button>
            <button
              className="font-nichrome text-[24px] font-bold text-[#172749] px-[20px] py-[10px] hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#DEFF4E" }}
            >
              PRÉ-RÉSERVER
            </button>
          </div>
        </div>

        {/* Hero content grid */}
        <div className="flex justify-between relative">
          {/* LEFT COLUMN */}
          <div className="w-[682px]">
            {/* Headline - Figma: MD Nichrome 700 80px #A0FFE8 uppercase */}
            <h1 className="font-nichrome text-[80px] font-bold leading-none text-[#A0FFE8] uppercase mb-[44px]">
              Participez à la naissance d&apos;une collection de maisons
              d&apos;exception
            </h1>

            {/* Subheadline - Figma: MD Nichrome 400 40px #A0FFE8 */}
            <p className="font-nichrome text-[40px] font-normal leading-[44px] text-[#A0FFE8] mb-[40px]">
              Investissez dans nos projets immobiliers uniques et contribuez à
              la création d&apos;espaces inspirants pour séjours professionnels.
            </p>

            {/* Tags - Figma: MD Nichrome 400 24px #A0FFE8 */}
            <div className="mb-[80px]">
              <p className="font-nichrome text-[24px] font-normal text-[#A0FFE8]">
                TRI Cible 10-14% • Un opérateur unique • Un marché explosif
              </p>
            </div>

            {/* Webinar text - Figma: General Sans 400 20px #A0FFE8 */}
            <p className="font-general text-[20px] font-normal leading-[24px] text-[#A0FFE8] mb-[16px]">
              Inscrivez vous à notre webinar de lancement :
            </p>

            {/* Email form */}
            <div className="flex items-center border border-[#A0FFE8] w-[440px]">
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent font-general text-[20px] text-[#A0FFE8] placeholder-[#A0FFE8]/50 px-[24px] py-[12px] outline-none"
              />
              <button className="px-[16px] py-[12px] hover:opacity-80 transition-opacity">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                    fill="#DEFF4E"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - Investment card */}
          <div className="relative w-[312px] mt-[100px]">
            {/* TRI cible annuel - Figma: General Sans 400 14.5px white + MD Nichrome 700 46.5px white */}
            <div className="mb-[24px]">
              <p className="font-general text-[14.5px] text-white mb-[4px]">
                TRI cible annuel
              </p>
              <p className="font-nichrome text-[46.5px] font-bold text-white">
                12%
              </p>
            </div>

            {/* Mortagne-au-Perche card - Figma: white bg */}
            <div className="bg-white px-[16px] py-[12px] mb-[16px] flex items-center justify-between">
              <div>
                <p className="font-nichrome text-[20px] font-bold text-[#292222]">
                  Mortagne-au-Perche
                </p>
                <p className="font-general text-[10px] text-[#292222]">
                  678 m2
                </p>
              </div>
              <div className="w-[40px] h-[40px] relative">
                <Image
                  src={HeroImage}
                  alt="Maison"
                  fill
                  className="object-cover rounded"
                />
              </div>
            </div>

            {/* 20 000 € + Slider - Figma: MD Nichrome 700 44px white */}
            <div className="text-right mb-[16px]">
              <span className="font-nichrome text-[44px] font-bold text-white">
                20 000 €
              </span>
            </div>
            <div className="w-full h-[4px] bg-white/30 mb-[24px] relative">
              <div className="absolute left-0 top-0 h-full w-[60%] bg-white"></div>
              <div className="absolute left-[60%] top-1/2 -translate-y-1/2 w-[16px] h-[16px] bg-white rounded-full"></div>
            </div>

            {/* INVESTIR Button - Figma: #DEFF4E bg, #273A1F text, MD Nichrome 700 26px */}
            <button
              className="w-full font-nichrome text-[26px] font-bold text-[#273A1F] py-[14px] hover:opacity-90 transition-opacity flex items-center justify-center gap-[8px]"
              style={{ backgroundColor: "#DEFF4E" }}
            >
              investir
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                  fill="#273A1F"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Trust section - Figma: MD Nichrome 700 32px #A0FFE8 + logos */}
        <div className="mt-[80px]">
          <div className="flex items-center justify-between mb-[24px]">
            <p className="font-nichrome text-[32px] font-bold text-[#A0FFE8]">
              ILS NOUS FONT CONFIANCE
            </p>
            <p className="font-general text-[20px] text-[#A0FFE8]">
              300+ séminaires organisés
            </p>
          </div>
          <div className="flex justify-between items-center opacity-60">
            <Image src={AirbnbLogo} alt="Airbnb" height={32} className="brightness-0 invert" />
            <Image src={AlanLogo} alt="Alan" height={22} className="brightness-0 invert" />
            <Image src={DoctolibLogo} alt="Doctolib" height={29} className="brightness-0 invert" />
            <Image src={QontoLogo} alt="Qonto" height={60} className="brightness-0 invert" />
            <Image src={GoogleLogo} alt="Google" height={30} className="brightness-0 invert" />
            <Image src={MicrosoftLogo} alt="Microsoft" height={20} className="brightness-0 invert" />
            <Image src={LorealLogo} alt="L'Oréal" height={15} className="brightness-0 invert" />
          </div>
        </div>
      </div>

      {/* Hero Image - positioned behind right column */}
      <div className="absolute right-[56px] top-[200px] w-[534px] h-[671px] z-[1]">
        <Image
          src={HeroImage}
          alt="Momoamo Investment"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Smaller overlay image */}
      <div className="absolute right-[170px] top-[278px] w-[312px] h-[440px] z-[1]">
        <Image
          src={HouseImg1}
          alt="Property"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </section>
  );
};

// ============================================================
// SECTION 2: STATS BAR (on beige bg) - 4 metric cards
// ============================================================
const StatsSection = () => {
  const stats = [
    {
      title: "Marché en croissance\nde +30%/an",
    },
    {
      title: "20% de rentabilité locative nette par maison",
    },
    {
      title: "Un accès VIP aux biens pour les investisseurs",
    },
    {
      title: "Avantages fiscaux (150-0 B Ter, exonération d'IFI…)",
    },
  ];

  return (
    <section style={{ backgroundColor: "#EEE5D7" }}>
      <div className="max-w-[1400px] mx-auto px-[56px] py-[56px]">
        <div className="grid grid-cols-4 gap-[24px]">
          {stats.map((stat, idx) => (
            <div key={idx} className="py-[24px] border-t border-[#292222]/20">
              <p className="font-nichrome text-[24px] font-bold text-[#292222] leading-tight whitespace-pre-line">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// SECTION 3: POURQUOI INVESTIR (#EEE5D7) - 1512x1370
// ============================================================
const WhyInvestSection = () => {
  const [webinarEmail, setWebinarEmail] = useState("");
  const benefits = [
    {
      label: "Rendement attractif et prévisible*",
      title: "12% de TRI annuel net de frais*",
      description: "Plus value foncière et forte rentabilité locative",
      note: "*Les prévisions ne constituent pas un indicateur fiable quant aux performances futures.",
    },
    {
      label: "Durée d'engagement",
      title: "3 à 5 ans",
      description:
        "Le temps d'optimiser les conditions du refinancement bancaire",
    },
    {
      label: "Revenus réguliers",
      title: "Jusqu'à 8% d'intérêts versé mensuellement",
      description: "Directement issus des revenus de l'activité",
    },
    {
      label: "Des garanties solides",
      title: "UNE DOUBLE PROTECTION",
      description:
        "Vous êtes actionnaire de la société d'exploitation et bénéficiez d'une hypothèque sur l'actif immobilier",
    },
    {
      label: "Sortie claire dès le départ",
      title: "C'est nous qui vous rachetons",
      description:
        "Refinancement bancaire avec rachat des investisseurs par l'opérateur.",
    },
    {
      label: "Des avantages en nature",
      title: "Rejoignez le club fermé des investisseurs",
      description:
        "Accès privilégié aux maisons et evènements exclusifs",
    },
  ];

  return (
    <section style={{ backgroundColor: "#EEE5D7" }}>
      <div className="max-w-[1400px] mx-auto px-[56px] py-[80px]">
        {/* Section label */}
        <p className="font-nichrome text-[32px] font-bold text-[#292222] mb-[24px]">
          L&apos;opportunité d&apos;Investissement
        </p>

        {/* Headline - Figma: MD Nichrome 700 96px #292222 */}
        <h2 className="font-nichrome text-[96px] font-bold leading-none text-[#292222] mb-[40px]">
          Pourquoi investir{" "}
          <br />
          avec Momoamo ?
        </h2>

        {/* Subtext - Figma: MD Nichrome 400 40px #292222 */}
        <p className="font-nichrome text-[40px] font-normal leading-[44px] text-[#292222] mb-[60px] max-w-[870px]">
          Participez à un projet unique par son approche intégrée, qui mêle
          performance et vision long-terme.
        </p>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 gap-[24px] mb-[60px]">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-[32px] border border-[#292222]/10"
              style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
            >
              {/* Label - Figma: MD Nichrome 400 24px #292222 */}
              <p className="font-nichrome text-[24px] font-normal text-[#292222] mb-[12px]">
                {b.label}
              </p>
              {/* Title - Figma: MD Nichrome 700 32px #292222 */}
              <h3 className="font-nichrome text-[32px] font-bold text-[#292222] mb-[12px] leading-tight">
                {b.title}
              </h3>
              {/* Description - Figma: General Sans 400 20px #292222 */}
              <p className="font-general text-[20px] text-[#292222] leading-relaxed">
                {b.description}
              </p>
              {b.note && (
                <p className="font-general text-[14px] text-[#292222]/60 mt-[12px]">
                  {b.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Webinar signup */}
        <div className="text-center">
          <p className="font-nichrome text-[40px] font-normal text-[#292222] mb-[24px]">
            Inscrivez vous pour le webinar de lancement de notre seconde
            opération
          </p>
          <div className="flex items-center border border-[#292222] w-[440px] mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              value={webinarEmail}
              onChange={(e) => setWebinarEmail(e.target.value)}
              className="flex-1 bg-transparent font-general text-[20px] text-[#292222] placeholder-[#292222]/50 px-[24px] py-[12px] outline-none"
            />
            <button
              className="font-nichrome text-[32px] font-bold text-[#273A1F] px-[24px] py-[12px] hover:opacity-80"
              style={{ backgroundColor: "#DEFF4E" }}
            >
              je m&apos;inscris
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// SECTION 4: VALUE ADD (#273A1F) - 1512x1553
// ============================================================
const ValueAddSection = () => {
  const columns = [
    {
      title: "La Performance du Value Add",
      items: [
        "Acquisition d'actifs sous-exploités",
        "Rénovation lourde ciblée et optimisation des espaces pour l'usage séminaire",
        "Modèle de travaux standardisé et coûts négociés (≈ -30% vs un projet isolé)",
      ],
    },
    {
      title: "La sécurité du locatif",
      items: [
        "Nous sommes l'exploitant : pas d'incertitude sur la recherche d'un locataire",
        "Remplissage assuré grâce à Kymono (300+ séminaires par an)",
        "20% de rendement locatif net*, avec positionnement prix/standing excellent",
      ],
    },
    {
      title: "Le Contrôle Total",
      items: [
        "Un modèle éprouvé et répliqué — vous investissez dans un opérateur unique, dominant son marché",
        "Sortie sécurisée dès le départ — pas d'acheteur à trouver, nous exploitons nous-mêmes",
        "100% passif pour vous — du financement à l'exploitation, nous gérons pour vous",
      ],
    },
  ];

  return (
    <section style={{ backgroundColor: "#273A1F" }}>
      <div className="max-w-[1400px] mx-auto px-[56px] py-[80px]">
        {/* Label - Figma: MD Nichrome 700 32px #DEFF4E */}
        <p className="font-nichrome text-[32px] font-bold text-[#DEFF4E] mb-[24px]">
          Un modèle unique
        </p>

        {/* Headline - Figma: MD Nichrome 700 96px #DEFF4E */}
        <h2 className="font-nichrome text-[96px] font-bold leading-none text-[#DEFF4E] mb-[40px] max-w-[900px]">
          Value Add + Gestion Locative : Le meilleur des deux mondes
        </h2>

        {/* Subtext - Figma: MD Nichrome 400 40px #DEFF4E */}
        <p className="font-nichrome text-[40px] font-normal leading-[44px] text-[#DEFF4E] mb-[24px] max-w-[693px]">
          Un modèle simple et inédit : ni pure marchand de biens, ni simple
          gestionnaire immobilier.
        </p>

        {/* CTA Button */}
        <button
          className="font-nichrome text-[28px] font-bold text-[#273A1F] px-[32px] py-[16px] mb-[60px] hover:opacity-90 transition-opacity flex items-center gap-[8px]"
          style={{ backgroundColor: "#DEFF4E" }}
        >
          Découvrir notre seconde opération
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
              fill="#273A1F"
            />
          </svg>
        </button>

        {/* 3-column grid */}
        <div className="grid grid-cols-3 gap-[24px]">
          {columns.map((col, idx) => (
            <div key={idx}>
              {/* Title - Figma: MD Nichrome 700 32px #DEFF4E */}
              <h3 className="font-nichrome text-[32px] font-bold text-[#DEFF4E] mb-[24px] leading-tight">
                {col.title}
              </h3>
              <div className="space-y-[16px]">
                {col.items.map((item, i) => (
                  <p
                    key={i}
                    className="font-general text-[20px] text-[#DEFF4E] leading-relaxed"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// SECTION 5: CRÉER UN ACTEUR (beige) - 1512x1639
// ============================================================
const ActeurSection = () => {
  const blocks = [
    {
      title: "Un marché qui explose, une offre qui manque",
      description:
        "Le séminaire d'entreprise se réinvente (+30%/an), mais rien n'existe pour les groupes premium de 20-50 personnes en dehors des hôtels classiques.",
    },
    {
      title: "Momoamo comble le vide",
      description:
        "Des domaines historiques d'exception, redesignés pour offrir l'expérience séminaire ultime — intimité, nature, et prestations 5 étoiles.",
    },
    {
      title: "Une équipe taillée pour l'exécution",
      description:
        "Les fondateurs cumulent plusieurs succès entrepreneuriaux, une expertise séminaire prouvée, et un réseau immobilier profond.",
    },
  ];

  return (
    <section style={{ backgroundColor: "#EEE5D7" }}>
      <div className="max-w-[1400px] mx-auto px-[56px] py-[80px]">
        {/* Label */}
        <p className="font-nichrome text-[32px] font-bold text-[#292222] mb-[24px]">
          une aventure ambitieuse
        </p>

        {/* Headline - Figma: MD Nichrome 700 96px #292222 */}
        <h2 className="font-nichrome text-[96px] font-bold leading-none text-[#292222] mb-[40px]">
          CRÉER UN ACTEUR D&apos;UN GENRE NOUVEAU, SUR UN MARCHE EN EBULLITION
        </h2>

        {/* Subtext - Figma: MD Nichrome 400 40px #292222 */}
        <p className="font-nichrome text-[40px] font-normal leading-[44px] text-[#292222] mb-[24px] max-w-[870px]">
          Nous ne menons pas de simples opérations immobilières. Momoamo
          c&apos;est une marque à part entière.
        </p>

        {/* CTA Button */}
        <button
          className="font-nichrome text-[28px] font-bold text-[#273A1F] px-[32px] py-[16px] mb-[60px] hover:opacity-90 transition-opacity flex items-center gap-[8px]"
          style={{ backgroundColor: "#DEFF4E" }}
        >
          Rejoignez-nous et investissez à nos côtés
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
              fill="#273A1F"
            />
          </svg>
        </button>

        {/* 3 blocks */}
        <div className="grid grid-cols-3 gap-[24px]">
          {blocks.map((block, idx) => (
            <div
              key={idx}
              className="p-[32px] border border-[#292222]/10"
              style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
            >
              <h3 className="font-nichrome text-[32px] font-bold text-[#292222] mb-[16px] leading-tight">
                {block.title}
              </h3>
              <p className="font-general text-[20px] text-[#292222] leading-relaxed">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// SECTION 6: FISCALITÉ (#603030) - 1512x1072
// ============================================================
const FiscaliteSection = () => {
  const items = [
    {
      title: "150-0 B ter",
      description:
        "Le réinvestissement d'une plus-value dans un de nos projets permet un report d'imposition sous conditions.",
    },
    {
      title: "Exonéré d'IFI",
      description:
        "Nos projets peuvent être structurés pour rester hors assiette IFI selon la configuration retenue.",
    },
    {
      title: "Régime mère-fille",
      description:
        "En investissant au moins 5 % du montant levé via votre holding soumise à l'IS, vous bénéficiez d'une exonération quasi-totale.",
    },
  ];

  return (
    <section style={{ backgroundColor: "#603030" }}>
      <div className="max-w-[1400px] mx-auto px-[56px] py-[80px]">
        {/* Headline - Figma: MD Nichrome 700 96px #FF6E4E */}
        <h2 className="font-nichrome text-[96px] font-bold leading-none text-[#FF6E4E] mb-[40px]">
          Optimisez votre fiscalité grâce à Momoamo
        </h2>

        {/* Subtext - Figma: MD Nichrome 400 40px #FF6E4E */}
        <p className="font-nichrome text-[40px] font-normal leading-[44px] text-[#FF6E4E] mb-[60px] max-w-[870px]">
          Nos projets concilient rendement et dispositifs fiscaux adaptés pour
          structurer votre investissement.
        </p>

        {/* 3 columns */}
        <div className="grid grid-cols-3 gap-[24px] mb-[40px]">
          {items.map((item, idx) => (
            <div key={idx}>
              <h3 className="font-nichrome text-[32px] font-bold text-[#FF6E4E] mb-[16px] leading-tight">
                {item.title}
              </h3>
              <p className="font-nichrome text-[26px] font-normal text-[#FF6E4E] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="font-general text-[20px] text-[#FF6E4E]/60 leading-relaxed">
          Les informations ci-dessus sont fournies à titre indicatif et ne
          constituent pas un conseil fiscal. Consultez votre conseiller.
        </p>
      </div>
    </section>
  );
};

// ============================================================
// SECTION 7: NOTRE PREMIER PROJET (beige) - 1512x1204
// ============================================================
const PremierProjetSection = () => {
  return (
    <section style={{ backgroundColor: "#EEE5D7" }}>
      <div className="max-w-[1400px] mx-auto px-[56px] py-[80px]">
        {/* Headline - Figma: MD Nichrome 700 96px #292222 */}
        <h2 className="font-nichrome text-[96px] font-bold leading-none text-[#292222] mb-[60px]">
          notre premier projet
        </h2>

        {/* Card with image */}
        <div className="flex gap-[40px]">
          <div className="w-1/2 relative h-[500px]">
            <Image
              src={HouseImg2}
              alt="Domaine de Courtigis"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-[24px] bg-gradient-to-t from-black/60 to-transparent">
              <p className="font-nichrome text-[32px] font-bold text-white">
                domaine de courtigis
              </p>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <p className="font-nichrome text-[32px] font-bold text-[#292222] mb-[24px]">
              une aventure ambitieuse
            </p>
            <p className="font-general text-[20px] text-[#292222] leading-relaxed">
              Le Domaine de Courtigis est notre première opération : un domaine
              de 90 hectares en Sologne, acquis et rénové pour devenir la
              première maison Momoamo. Une aventure qui prouve la solidité de
              notre modèle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// SECTION 8: ILS PARLENT DE NOUS (#273A1F) - 1512x484
// ============================================================
const PressSection = () => {
  return (
    <section style={{ backgroundColor: "#273A1F" }}>
      <div className="max-w-[1400px] mx-auto px-[56px] py-[80px]">
        {/* Headline - Figma: MD Nichrome 700 96px #DEFF4E */}
        <h2 className="font-nichrome text-[96px] font-bold leading-none text-[#DEFF4E] mb-[40px] lowercase">
          ils parlent de nous
        </h2>

        {/* Logo bar */}
        <div className="flex justify-between items-center opacity-60">
          <Image src={AirbnbLogo} alt="Airbnb" height={32} className="brightness-0 invert" />
          <Image src={AlanLogo} alt="Alan" height={22} className="brightness-0 invert" />
          <Image src={DoctolibLogo} alt="Doctolib" height={29} className="brightness-0 invert" />
          <Image src={QontoLogo} alt="Qonto" height={60} className="brightness-0 invert" />
          <Image src={GoogleLogo} alt="Google" height={30} className="brightness-0 invert" />
          <Image src={MicrosoftLogo} alt="Microsoft" height={20} className="brightness-0 invert" />
          <Image src={LorealLogo} alt="L'Oréal" height={15} className="brightness-0 invert" />
        </div>
      </div>
    </section>
  );
};

// ============================================================
// SECTION 9: AU-DELÀ DE LA PERFORMANCE (beige) - 1512x1266
// ============================================================
const BeyondPerformanceSection = () => {
  const perks = [
    {
      title: "Evènement VIP /Soirées de prestige bi-annuelles",
      description:
        "2 fois par an, nous réunissons l'ensemble des investisseurs pour une soirée de gala dans l'une de nos maisons.",
    },
    {
      title: "20% de réduction à vie",
      description:
        "En tant qu'investisseur, vous profitez de 20% de réduction, à vie, sur l'ensemble de nos maisons pour vos séjours personnels.",
    },
    {
      title: "20% sur les séminaires d'entreprise",
      description:
        "Que vous soyez dirigeant ou salarié, profitez de 20% de réduction sur votre séminaire d'entreprise dans nos maisons.",
    },
  ];

  return (
    <section style={{ backgroundColor: "#EEE5D7" }}>
      <div className="max-w-[1400px] mx-auto px-[56px] py-[80px]">
        {/* Headline - Figma: MD Nichrome 700 96px #292222 */}
        <h2 className="font-nichrome text-[96px] font-bold leading-none text-[#292222] mb-[60px]">
          Au-delà de la{" "}
          <br />
          performance financière
        </h2>

        {/* 3 perk cards */}
        <div className="grid grid-cols-3 gap-[24px]">
          {perks.map((perk, idx) => (
            <div
              key={idx}
              className="p-[32px]"
              style={{ backgroundColor: "#EEE5D7", border: "1px solid rgba(41,34,34,0.1)" }}
            >
              <div className="relative w-full h-[300px] mb-[24px]">
                <Image
                  src={[HouseImg1, HouseImg2, HouseImg3][idx]}
                  alt={perk.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-nichrome text-[32px] font-bold text-[#292222] mb-[16px] leading-tight">
                {perk.title}
              </h3>
              <p className="font-general text-[20px] text-[#292222] leading-relaxed">
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// SECTION 10: ABOUT US (#172749) - 1512x1177
// ============================================================
const AboutSection = () => {
  const team = [
    {
      name: "Aissa, Enky",
      bio: "Fondateur d'Edebex (fintech - 1Md€+ de volume d'affaires), puis CEO & Fondateur de Kymono, leader des séminaires d'entreprise.",
    },
    {
      name: "Co-fondateur",
      bio: "Expert en immobilier et hospitality, avec une vision unique de l'investissement dans les lieux d'exception.",
    },
  ];

  return (
    <section style={{ backgroundColor: "#172749" }}>
      <div className="max-w-[1400px] mx-auto px-[56px] py-[80px]">
        {/* Headline - Figma: MD Nichrome 700 96px #A0FFE8 */}
        <h2 className="font-nichrome text-[96px] font-bold leading-none text-[#A0FFE8] mb-[24px]">
          ABOUT US
        </h2>

        {/* Subtext - Figma: MD Nichrome 400 40px #A0FFE8 */}
        <p className="font-nichrome text-[40px] font-normal leading-[44px] text-[#A0FFE8] mb-[60px] max-w-[719px]">
          Investissez aux côtés d&apos;entrepreneurs aguerris et experts de leur
          domaine
        </p>

        {/* Team cards */}
        <div className="grid grid-cols-2 gap-[32px]">
          {team.map((member, idx) => (
            <div key={idx} className="flex gap-[24px]">
              <div className="w-[280px] h-[350px] relative flex-shrink-0">
                <Image
                  src={[HouseImg1, HouseImg3][idx]}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-end">
                <h3 className="font-nichrome text-[32px] font-bold text-[#A0FFE8] mb-[16px]">
                  {member.name}
                </h3>
                <p className="font-general text-[20px] text-[#A0FFE8] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// SECTION 11: FAQ (beige) - uses existing FAQSection component
// ============================================================

// ============================================================
// SECTION 12: REJOIGNEZ MOMOAMO CTA (beige) - 1513x965
// ============================================================
const JoinCTASection = () => {
  return (
    <section style={{ backgroundColor: "#EEE5D7" }}>
      <div className="max-w-[1400px] mx-auto px-[56px] py-[120px] text-center">
        {/* Headline - Figma: MD Nichrome 700 130px #292222 */}
        <h2 className="font-nichrome text-[130px] font-bold leading-none text-[#292222] mb-[40px]">
          Rejoignez
          <br />
          Momoamo
        </h2>

        {/* Subtext - Figma: MD Nichrome 400 40px #292222 */}
        <p className="font-nichrome text-[40px] font-normal leading-[44px] text-[#292222] mb-[40px] max-w-[1069px] mx-auto">
          Devenez acteur de notre projet immobilier unique et participez à la
          création d&apos;espaces inspirants pour séjours professionnels en vous
          inscrivant dès maintenant.
        </p>

        {/* CTA Button - Figma: #292222 bg, #EEE5D7 text */}
        <button
          className="font-nichrome text-[28px] font-bold px-[32px] py-[16px] hover:opacity-90 transition-opacity inline-flex items-center gap-[8px]"
          style={{ backgroundColor: "#292222", color: "#EEE5D7" }}
        >
          BE FIRST TO JOIN
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
              fill="#EEE5D7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

// ============================================================
// MAIN INVEST PAGE - All sections assembled
// ============================================================
export default function InvestPage() {
  const [isScroll, setIsScroll] = useState(false);
  const [stop, setStop] = useState(false);

  return (
    <main>
      {/* 1. Hero - #172749 */}
      <HeroSection />

      {/* 2. Stats bar - beige */}
      <StatsSection />

      {/* 3. Pourquoi investir - #EEE5D7 */}
      <WhyInvestSection />

      {/* 4. Value Add - #273A1F */}
      <ValueAddSection />

      {/* 5. Créer un acteur - beige */}
      <ActeurSection />

      {/* 6. Fiscalité - #603030 */}
      <FiscaliteSection />

      {/* 7. Notre premier projet - beige */}
      <PremierProjetSection />

      {/* 8. Ils parlent de nous - #273A1F */}
      <PressSection />

      {/* 9. Au-delà de la performance - beige */}
      <BeyondPerformanceSection />

      {/* 10. About Us - #172749 */}
      <AboutSection />

      {/* 11. FAQ - beige */}
      <div style={{ backgroundColor: "#EEE5D7" }}>
        <FAQSection />
      </div>

      {/* 12. Rejoignez CTA - beige */}
      <JoinCTASection />

      {/* 13. Footer - #273A1F */}
      <div style={{ backgroundColor: "#273A1F" }}>
        <FooterSection setIsScroll={setIsScroll} setStop={setStop} />
      </div>
    </main>
  );
}
