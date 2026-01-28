"use client";

import Navbar from "@/components/homepage/Navbar";
import HeroSection from "@/components/curlcipher/HeroSection";
import StatsSection from "@/components/curlcipher/StatsSection";
import FeaturesGrid from "@/components/curlcipher/FeaturesGrid";
import PricingSection from "@/components/curlcipher/PricingSection";
import FAQSection from "@/components/curlcipher/FAQSection";
import CTASection from "@/components/curlcipher/CTASection";
import MobileAppsSection from "@/components/curlcipher/MobileAppsSection"; // Import new section

export default function CurlCipherPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-cyan-100 selection:text-cyan-900">
      <Navbar />

      <main className="pt-20">
        <HeroSection />
        <StatsSection />
        <FeaturesGrid />
        <MobileAppsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  );
}
