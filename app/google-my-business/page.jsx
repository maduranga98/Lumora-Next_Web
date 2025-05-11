// app/google-my-business/page.jsx - Fixed navigation
"use client";

import Navbar from "@/components/common/Navbar";
import AboutGMB from "@/components/sections/AboutGMB";
import WhyItMatters from "@/components/sections/WhyItMatters";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesGMB from "@/components/sections/ServicesGMB";
import QASection from "@/components/sections/QASection";
import HeroSectionGMB from "@/components/gmb/Hero";
import ContactSection from "@/components/sections/ContactSection";
import { useLoading } from "@/components/LoadingProvider";
import { useEffect } from "react";

export default function GMBPage() {
  const { setIsLoading } = useLoading();

  // Signal that page has loaded
  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return (
    <main>
      <Navbar />

      <div id="overview">
        <HeroSectionGMB />
      </div>

      <div id="about">
        <AboutGMB />
      </div>

      <div id="why-matters">
        <WhyItMatters />
      </div>

      <div id="why-choose">
        <WhyChooseUs />
      </div>

      <div id="services">
        <ServicesGMB />
      </div>

      <div id="qa">
        <QASection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
