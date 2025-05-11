// app/industrial-automation/page.js
"use client";

import ContactUs from "@/components/industrialautomatiom/IndustrialAutomationcontactUs";
import IndustrialAutomationControl from "@/components/industrialautomatiom/IndustrialAutomationControl";
import IndustrialAutomationHero from "@/components/industrialautomatiom/IndustrialAutomationHero";
import Navigation from "@/components/industrialautomatiom/IndustrialAutomationNavBar";
import ServiceOverview from "@/components/industrialautomatiom/IndustrilaAutomationServiceOverview";
import MaintenanceSolutions from "@/components/industrialautomatiom/MaintenanceSolutions";
import RDDevelopment from "@/components/industrialautomatiom/RDDevelopment";
import { useLoading } from "@/components/LoadingProvider";
import { useEffect } from "react";

export default function IndustrialAutomationPage() {
  const { setIsLoading } = useLoading();

  // Signal that page has loaded
  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div id="home">
          <IndustrialAutomationHero />
          <ServiceOverview />
        </div>

        <div id="automation">
          <IndustrialAutomationControl />
        </div>
        <div id="rd">
          <RDDevelopment />
        </div>
        <div id="maintenance">
          <MaintenanceSolutions />
        </div>
        <div id="contact">
          <ContactUs />
        </div>
      </main>
    </>
  );
}
