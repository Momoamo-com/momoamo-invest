"use client";
import FAQSection from "@/components/faq";
import FooterSection from "@/components/footer";
import InvestHero from "@/components/invest-hero";
import InvestAdventureSection from "@/components/invest-adventure-section";
import InvestModelSection from "@/components/invest-model-section";
import InvestOpportunitySection from "@/components/invest-opportunity-section";
import InvestLogosSection from "@/components/sections/InvestLogosSection";
import InvestAboutSection from "@/components/sections/InvestAboutSection";
import InvestCtaSection from "@/components/sections/InvestCtaSection";
import InvestPerformanceSection from "@/components/sections/InvestPerformanceSection";
import InvestProjectSection from "@/components/sections/InvestProjectSection";
import InvestTaxationSection from "@/components/sections/InvestTaxationSection";
import InvestWaitlistModalProvider from "@/components/modals/InvestWaitlistModalProvider";
import { useEffect, useState } from "react";

const InvestPage = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !isScroll) {
        setIsScroll(true);
      } else if (window.scrollY <= 0 && isScroll) {
        setIsScroll(false);
      }
    };

    // Check initial scroll position when component mounts
    if (window.scrollY > 0 && !isScroll) {
      setIsScroll(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScroll]);
  
  return (
    <InvestWaitlistModalProvider>
      <main>
        <div className="bg-offsite-main overflow-hidden">
          <InvestHero />
          <InvestOpportunitySection />
          <InvestModelSection />
          <InvestAdventureSection />
          <InvestTaxationSection />
          <InvestProjectSection />
          <InvestLogosSection />
          <InvestPerformanceSection />
          <InvestAboutSection />

          <div className="bg-gray-green overflow-hidden">
            <FAQSection />
          </div>

          <InvestCtaSection />
          
          <div className="bg-dark-green overflow-hidden">
            <FooterSection setIsScroll={setIsScroll} setStop={setStop} showJoinCommunity={false} />
          </div>
        </div>
      </main>
    </InvestWaitlistModalProvider>
  );
};

export default InvestPage;
