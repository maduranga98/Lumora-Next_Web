// app/industrial-automation/page.js
"use client";

import { useEffect } from "react";
import Script from "next/script";
import ContactUs from "@/components/industrialautomatiom/IndustrialAutomationcontactUs";
import IndustrialAutomationControl from "@/components/industrialautomatiom/IndustrialAutomationControl";
import IndustrialAutomationHero from "@/components/industrialautomatiom/IndustrialAutomationHero";
import Navigation from "@/components/industrialautomatiom/IndustrialAutomationNavBar";
import ServiceOverview from "@/components/industrialautomatiom/IndustrilaAutomationServiceOverview";
import MaintenanceSolutions from "@/components/industrialautomatiom/MaintenanceSolutions";
import RDDevelopment from "@/components/industrialautomatiom/RDDevelopment";
import { useLoading } from "@/components/LoadingProvider";

export default function IndustrialAutomationPage() {
  const { setIsLoading } = useLoading();

  // Schema.org structured data for industrial automation services
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Industrial Automation Services",
    description:
      "Comprehensive industrial automation solutions including control systems, R&D development, and maintenance solutions for manufacturing and production facilities.",
    provider: {
      "@type": "Organization",
      name: "Lumora Ventures",
      url: "https://www.lumoraventures.com",
    },
    serviceType: "Industrial Automation",
    areaServed: "Manufacturing and production facilities",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Industrial Automation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automation Control Systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "R&D Development Services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Maintenance Solutions",
          },
        },
      ],
    },
  };

  // Breadcrumb structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.lumoraventures.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industrial Automation",
        item: "https://www.lumoraventures.com/industrial-automation",
      },
    ],
  };

  // Signal that page has loaded
  useEffect(() => {
    setIsLoading(false);

    // Track page view - this is a common analytics pattern
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_path: "/industrial-automation",
        page_title: "Industrial Automation Services",
      });
    }
  }, [setIsLoading]);

  return (
    <>
      {/* Add structured data for search engines */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navigation />

      <main id="main-content" className="min-h-screen">
        <section id="home" aria-labelledby="home-heading">
          <IndustrialAutomationHero />
          <ServiceOverview />
        </section>

        <section id="automation" aria-labelledby="automation-heading">
          <IndustrialAutomationControl />
        </section>

        <section id="rd" aria-labelledby="rd-heading">
          <RDDevelopment />
        </section>

        <section id="maintenance" aria-labelledby="maintenance-heading">
          <MaintenanceSolutions />
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <ContactUs />
        </section>
      </main>
    </>
  );
}
