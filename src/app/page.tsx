"use client";
import HeroSection from "@/components/hero";
import CastleSection from "@/components/castle";
import OffsiteSection from "@/components/offsite";
import VacationSection from "@/components/vacation";
import HouseSection from "@/components/house";
import PlaceSection from "@/components/place";
import PowerSection from "@/components/power";
import HomeInvestTeaserSection from "@/components/sections/HomeInvestTeaserSection";
import FAQSection from "@/components/faq";
import FooterSection from "@/components/footer";
import InvestWaitlistModalProvider from "@/components/modals/InvestWaitlistModalProvider";
import { useEffect, useState } from "react";

const Home = () => {
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
      <div className="bg-dark-green overflow-hidden">
        {/* Hero Section */}
        <HeroSection isScroll={isScroll} stop={stop} />
      </div>

      <div className="bg-gray-green overflow-hidden">
        {/* CastleSection */}
        <CastleSection />
      </div>

      <div className="bg-offsite-main offsite-section overflow-hidden">
        {/* OffsiteSection */}
        <OffsiteSection />
      </div>

      <div className="bg-gray-green">
        {/* VacationSection */}
        <VacationSection />
      </div>

      <div className="bg-house-main overflow-hidden">
        {/* HouseSection */}
        <HouseSection />
      </div>

      <div className="bg-gray-green overflow-hidden">
        {/* PlaceSection */}
        <PlaceSection />
      </div>

      <div className="bg-gray-green overflow-hidden">
        <HomeInvestTeaserSection />
      </div>

      <div className="bg-power-main overflow-hidden">
        {/* PowerSection */}
        <PowerSection />
      </div>

      <div className="bg-gray-green overflow-hidden">
        {/* FAQSection */}
        <FAQSection />
      </div>

      <div className="bg-dark-green overflow-hidden">
        {/* FooterSection */}
        <FooterSection setIsScroll={setIsScroll} setStop={setStop} />
      </div>
      </main>
    </InvestWaitlistModalProvider>
  );
};

export default Home;
