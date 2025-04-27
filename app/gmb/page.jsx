"use client";

import HeroSection from "@/components/gmb/Hero";
import WhatIsGMB from "@/components/gmb/WhatIsGMB";
import WhyItMatters from "@/components/gmb/WhyItMatters";
import WhyChooseUs from "@/components/gmb/WhyChooseUs";
import ServicesSection from "@/components/gmb/ServicesSection";
import FAQSection from "@/components/gmb/FAQSection";
import CTASection from "@/components/gmb/CTASection";

const GMBPage = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <WhatIsGMB />
      <WhyItMatters />
      <ServicesSection />
      <WhyChooseUs />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default GMBPage;
