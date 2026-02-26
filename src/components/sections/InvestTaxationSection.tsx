const taxationItems = [
  {
    label: "150-0 B TER",
    text: "Le réinvestissement d'une plus-value dans un de nos projets permet un report d’imposition via le remploi prévu par l'article 150-0 B ter.",
  },
  {
    label: "EXONÉRÉ D’IFI",
    text: "Nos projets peuvent être structurés pour rester hors assiette IFI selon la configuration retenue par l'investisseur.",
  },
  {
    label: "RÉGIME MÈRE-FILLE",
    text: "En investissant au moins 5 % du montant levé via votre holding soumise à l'IS, vous bénéficiez du régime mère-fille (quote-part 5 %).",
  },
];

const InvestTaxationSection = () => {
  return (
    <section aria-label="Fiscalité Momoamo" className="w-full bg-[#5a2c2b]">
      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4 md:py-[120px] py-[64px]">
        <div className="w-[820px] max-w-full">
          <h2 className="text-[#ff7a5a] font-nichrome font-bold uppercase leading-none md:text-[86px] text-[58px]">
            OPTIMISEZ VOTRE FISCALITÉ GRÂCE À MOMOAMO
          </h2>
          <p className="text-[#ff7a5a] font-normal font-nichrome md:text-[36px] text-[26px] tracking-normal text-start leading-[1.1] mt-6">
            Nos projets concilient rendement et dispositifs fiscaux adaptés pour structurer votre patrimoine.
          </p>
        </div>

        <div className="mt-10 border-t border-[#ff7a5a]/60">
          {taxationItems.map((item) => (
            <div
              key={item.label}
              className="grid gap-6 py-8 border-b border-[#ff7a5a]/60 md:grid-cols-[220px_1fr]"
            >
              <p className="text-[#ff7a5a] font-nichrome font-bold uppercase text-[28px] leading-tight">
                {item.label}
              </p>
              <p className="text-[#ff7a5a] font-normal font-nichrome text-[24px] tracking-normal text-start leading-[1.35]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[#ff7a5a]/80 font-general font-light text-[20px] leading-[1.35] italic w-[1070px] max-w-full">
          Les informations ci-dessus sont fournies à titre indicatif et ne constituent pas un conseil fiscal ou juridique personnalisé. Le traitement fiscal dépend de la situation individuelle de chaque client et est susceptible d’évoluer dans le temps.
        </p>
      </div>
    </section>
  );
};

export default InvestTaxationSection;
