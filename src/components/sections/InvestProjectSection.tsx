import Image from "next/image";
import HouseImage from "@/assets/images/house/house-2.jpg";

const projectDetails = [
  { label: "Lieu", value: "Normandie" },
  { label: "Projet global", value: "6m€" },
  { label: "Acquisition", value: "Mars 2024" },
  { label: "Ouverture", value: "Mars 2025" },
  { label: "Rendement locatif net", value: "20% (900k€/an)" },
];

const InvestProjectSection = () => {
  return (
    <section aria-label="Projet Momoamo" className="w-full bg-gray-green">
      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4 md:py-[120px] py-[64px]">
        <h2 className="text-center text-black-green font-nichrome font-bold uppercase leading-none md:text-[86px] text-[58px]">
          NOTRE PREMIER PROJET
        </h2>

        <div className="relative mt-10 md:mt-12">
          <Image
            src={HouseImage}
            alt=""
            aria-hidden="true"
            width={1360}
            height={560}
            className="w-full h-[420px] md:h-[560px] object-cover"
            loading="lazy"
          />

          <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[88%] md:w-[46%] md:left-[6%] md:top-[18%] md:translate-x-0 md:bottom-auto backdrop-blur-md bg-black/40 border border-white/15 shadow-lg">
            <div className="p-6 md:p-8">
              <h3 className="text-lime-green font-nichrome font-bold uppercase md:text-[28px] text-[24px] leading-none">
                DOMAINE DE COURTIGIS
              </h3>

              <div className="mt-6 border-t border-white/15">
                {projectDetails.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[1fr_auto] gap-6 py-4 border-b border-white/15"
                  >
                    <p className="text-lime-green font-nichrome font-bold uppercase text-[16px] leading-tight">
                      {item.label}
                    </p>
                    <p className="text-right text-lime-green/90 font-general font-light text-[16px] leading-tight">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-[1fr_auto] gap-6 pt-4">
                <p className="text-lime-green font-nichrome font-bold uppercase text-[16px] leading-tight">
                  TRI cible opération
                </p>
                <span className="inline-flex items-center justify-center rounded-full bg-lime-green text-dark-green font-nichrome font-bold uppercase text-[16px] px-4 py-1">
                  12%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestProjectSection;
