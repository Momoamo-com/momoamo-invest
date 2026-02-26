import { InfiniteMovingLogo } from "@/components/ui/infinite-moving-logo";

import Airbnb_Svg from "@/assets/images/logos/airbnb.svg";
import Alan_Svg from "@/assets/images/logos/alan.svg";
import Doctolib_Svg from "@/assets/images/logos/doctolib.svg";
import Google_Svg from "@/assets/images/logos/google.svg";
import Loreal_Svg from "@/assets/images/logos/loreal.svg";
import Microsoft_Svg from "@/assets/images/logos/microsoft.svg";
import Netflix_Svg from "@/assets/images/logos/netflix.svg";
import Qonto_Svg from "@/assets/images/logos/qonto.svg";
import Konbini_Svg from "@/assets/images/power/konbini.svg";

const logos = [
  { img: Airbnb_Svg, width: 103, height: 32 },
  { img: Alan_Svg, width: 103, height: 21 },
  { img: Doctolib_Svg, width: 98, height: 29 },
  { img: Konbini_Svg, width: 64, height: 60 },
  { img: Qonto_Svg, width: 92, height: 25 },
  { img: Netflix_Svg, width: 92, height: 25 },
  { img: Google_Svg, width: 62, height: 59 },
  { img: Microsoft_Svg, width: 90, height: 30 },
  { img: Loreal_Svg, width: 90, height: 25 },
];

const InvestLogosSection = () => {
  return (
    <section aria-label="Logo presse Momoamo" className="w-full bg-dark-green">
      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4 md:py-[120px] py-[64px]">
        <h2 className="text-center text-lime-green font-nichrome font-bold uppercase leading-none md:text-[86px] text-[58px]">
          ILS PARLENT DE NOUS
        </h2>

        <div className="mt-10 md:mt-12">
          <InfiniteMovingLogo speed="fast" aria-roledescription="carousel">
            {logos.map((item, index) => (
              <span
                key={`${item.img.src}-${index}`}
                aria-hidden="true"
                className="mx-8 inline-block"
                style={{
                  width: item.width,
                  height: item.height,
                  backgroundColor: "#DEFF4E",
                  maskImage: `url(${item.img.src})`,
                  WebkitMaskImage: `url(${item.img.src})`,
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                }}
              />
            ))}
          </InfiniteMovingLogo>
        </div>
      </div>
    </section>
  );
};

export default InvestLogosSection;
