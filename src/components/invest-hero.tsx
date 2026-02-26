import Image from "next/image";
import { InfiniteMovingLogo } from "@/components/ui/infinite-moving-logo";
import { Input } from "@/components/ui/input";

import Airbnb_Svg from "@/assets/images/logos/airbnb.svg";
import Alan_Svg from "@/assets/images/logos/alan.svg";
import Amazon_Svg from "@/assets/images/logos/amazon.svg";
import Clubmed_Svg from "@/assets/images/logos/clubmed.svg";
import Doctolib_Svg from "@/assets/images/logos/doctolib.svg";
import Evian_Svg from "@/assets/images/logos/evian.svg";
import Google_Svg from "@/assets/images/logos/google.svg";
import Kpmg_Svg from "@/assets/images/logos/kpmg.svg";
import Loreal_Svg from "@/assets/images/logos/loreal.svg";
import Lvmh_Svg from "@/assets/images/logos/lvmh.svg";
import Microsoft_Svg from "@/assets/images/logos/microsoft.svg";
import Netflix_Svg from "@/assets/images/logos/netflix.svg";
import Payfit_Svg from "@/assets/images/logos/payfit.svg";
import Qonto_Svg from "@/assets/images/logos/qonto.svg";
import Sncf_Svg from "@/assets/images/logos/sncf.svg";
import Swile_Svg from "@/assets/images/logos/swile.svg";
import Uber_Svg from "@/assets/images/logos/uber.svg";

const logos = [
  { img: Airbnb_Svg, width: 103, height: 32 },
  { img: Alan_Svg, width: 103, height: 21 },
  { img: Amazon_Svg, width: 103, height: 32 },
  { img: Clubmed_Svg, width: 103, height: 32 },
  { img: Doctolib_Svg, width: 98, height: 29 },
  { img: Evian_Svg, width: 90, height: 32 },
  { img: Google_Svg, width: 62, height: 59 },
  { img: Kpmg_Svg, width: 90, height: 32 },
  { img: Loreal_Svg, width: 90, height: 25 },
  { img: Lvmh_Svg, width: 90, height: 32 },
  { img: Microsoft_Svg, width: 90, height: 30 },
  { img: Netflix_Svg, width: 92, height: 25 },
  { img: Payfit_Svg, width: 90, height: 32 },
  { img: Qonto_Svg, width: 92, height: 25 },
  { img: Sncf_Svg, width: 90, height: 32 },
  { img: Swile_Svg, width: 90, height: 32 },
  { img: Uber_Svg, width: 90, height: 32 },
];

const valueProps = [
  "TRI Cible 10-14%",
  "Un opérateur unique",
  "Un marché explosif",
];

const InvestHero = () => {
  return (
    <section aria-label="Hero Invest" className="w-full bg-offsite-main">
      <div className="max-w-[1360px] mx-auto w-full md:pt-8 pt-6">
        <header className="w-full xl:px-14 px-4">
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center">
            <nav className="flex items-center gap-6" aria-label="Réseaux sociaux">
              <a
                href="https://www.instagram.com/momoamo_places/"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase leading-none tracking-wider font-nichrome text-offsite-secondary text-[18px] font-bold no-underline cursor-pointer"
              >
                INSTAGRAM
              </a>
              <a
                href="https://www.linkedin.com/company/momoamo/"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase leading-none tracking-wider font-nichrome text-offsite-secondary text-[18px] font-bold no-underline cursor-pointer"
              >
                LINKEDIN
              </a>
            </nav>
            <div className="text-center">
              <span className="text-offsite-secondary font-nichrome font-bold uppercase tracking-wider text-[28px]">
                MOMOAMO
              </span>
            </div>
            <div className="flex justify-end items-center gap-3">
              <button
                type="button"
                className="uppercase leading-none tracking-wider font-nichrome font-bold text-offsite-secondary text-[18px] w-[159px] h-[44px] border-[1px] bg-transparent border-offsite-secondary transition-all duration-300 ease-in hover:!bg-offsite-secondary hover:!text-offsite-main"
              >
                CONNEXION
              </button>
              <button
                type="button"
                className="uppercase leading-none tracking-wider font-nichrome font-bold text-offsite-main text-[18px] w-[176px] h-[44px] border-[1px] bg-offsite-secondary border-offsite-secondary transition-all duration-300 ease-in hover:!bg-offsite-main hover:!text-offsite-secondary"
              >
                PRÉ-RÉSERVER
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center justify-between">
            <span className="text-offsite-secondary font-nichrome font-bold uppercase tracking-wider text-[22px]">
              MOMOAMO
            </span>
            <button
              type="button"
              aria-label="Ouvrir le menu"
              className="w-[44px] h-[44px] flex items-center justify-center border border-offsite-secondary"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  className="text-offsite-secondary"
                />
              </svg>
            </button>
          </div>
        </header>

        <div className="w-full xl:px-14 px-4 md:mt-[72px] mt-[40px]">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
            <div className="w-full">
              <h1 className="text-offsite-secondary font-nichrome font-bold uppercase leading-none md:text-[86px] text-[58px]">
                Participez à la
                <br />
                naissance d&apos;une
                <br />
                collection de
                <br />
                maisons d&apos;exception
              </h1>
              <p className="text-offsite-secondary font-general font-light text-[18px] leading-[1.3] mt-6 max-w-[520px]">
                Investissez dans nos projets immobiliers uniques et contribuez à
                la création d&apos;espaces inspirants pour séjours professionnels.
              </p>

              <div className="mt-8 w-full max-w-[420px]">
                <label
                  htmlFor="invest-email"
                  className="block text-offsite-secondary font-general font-light md:text-[16px] text-[14px]"
                >
                  Inscrivez vous à notre webinar de lancement :
                </label>
                <form className="mt-3 w-full" aria-label="Inscription webinar">
                  <div className="flex w-full">
                    <Input
                      id="invest-email"
                      type="email"
                      placeholder="Votre email"
                      className="h-[52px] rounded-none border-offsite-secondary text-offsite-secondary placeholder:text-offsite-secondary/70 border-r-0"
                      aria-label="Votre email"
                    />
                    <button
                      type="submit"
                      className="w-[52px] h-[52px] flex items-center justify-center bg-offsite-secondary text-offsite-main border border-offsite-secondary"
                      aria-label="Envoyer"
                    >
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
                </form>
              </div>

              <ul className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-3">
                {valueProps.map((item, index) => (
                  <li key={item} className="flex items-center">
                    <span className="text-offsite-secondary font-nichrome font-bold uppercase md:text-[16px] text-[14px] leading-none">
                      {item}
                    </span>
                    {index < valueProps.length - 1 && (
                      <span className="hidden md:inline-block mx-3 text-offsite-secondary">
                        •
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:mt-2 mt-8">
              <div className="relative w-full md:h-[520px] h-[340px]">
                <div
                  className="absolute inset-0 bg-black-green"
                  data-todo="TODO: remplacer par l'image hero principale"
                  aria-hidden="true"
                />
                <div
                  className="absolute left-[6%] top-[18%] md:w-[46%] w-[52%] bg-gray-green border border-offsite-secondary px-4 py-3"
                  data-todo="TODO: remplacer par la carte TRI"
                >
                  <p className="text-offsite-main font-general text-[12px] uppercase">
                    TRI cible annuel
                  </p>
                  <p className="text-offsite-main font-nichrome font-bold text-[28px] leading-none mt-1">
                    12%
                  </p>
                </div>
                <div
                  className="absolute left-[18%] md:left-[32%] bottom-[8%] md:w-[48%] w-[64%] bg-gray-green border border-offsite-secondary px-4 py-4"
                  data-todo="TODO: remplacer par la carte investissement"
                >
                  <p className="text-offsite-main font-general text-[12px] uppercase">
                    Mortagne-au-Perche
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-offsite-main font-nichrome font-bold text-[24px] leading-none">
                      20 000 €
                    </p>
                    <div className="w-[36px] h-[2px] bg-offsite-main" />
                  </div>
                  <button
                    type="button"
                    className="mt-3 uppercase text-offsite-main bg-offsite-secondary font-bold font-nichrome text-[14px] w-full h-[36px] flex items-center justify-center"
                    aria-label="Investir"
                  >
                    Investir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4 md:mt-[88px] mt-[56px] pb-[64px]">
        <div className="text-center">
          <h2 className="text-offsite-secondary font-nichrome font-bold uppercase md:text-[24px] text-[20px] leading-none">
            ILS NOUS FONT CONFIANCE
          </h2>
          <p className="text-offsite-secondary font-general font-light text-[18px] mt-2">
            300+ séminaires organisés
          </p>
        </div>
        <div className="mt-6">
          <InfiniteMovingLogo speed="fast" aria-roledescription="carousel">
            {logos.map((item, i) => (
              <Image
                key={i}
                src={item.img}
                alt=""
                aria-hidden="true"
                width={item.width}
                height={item.height}
                className="mx-8 object-contain w-[103px] h-[29px] md:w-auto md:h-auto pointer-events-none"
                loading="lazy"
              />
            ))}
          </InfiniteMovingLogo>
        </div>
      </div>
    </section>
  );
};

export default InvestHero;
