"use client";

import AutomationHeroSection from "@/components/automation/AutomationHeroSection";
import AutomationServicesSection from "@/components/automation/AutomationServicesSection";
import AutomationAboutSection from "@/components/automation/AutomationAboutSection";
import AutomationCTASection from "@/components/automation/AutomationCTASection";

const AutomationPage = () => {
  return (
    <div className="bg-[#050e1a] text-white min-h-screen font-sans">
      <AutomationHeroSection />
      <AutomationServicesSection />
      <AutomationAboutSection />
      <AutomationCTASection />
    </div>
  );
};

export default AutomationPage;
