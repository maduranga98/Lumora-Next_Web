// app/google-my-business/page.jsx
"use client";

import { useEffect } from "react";
import Script from "next/script";
import Head from "next/head"; // This works differently in App Router, but we'll use Script instead
import Navbar from "@/components/common/Navbar";
import AboutGMB from "@/components/sections/AboutGMB";
import WhyItMatters from "@/components/sections/WhyItMatters";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesGMB from "@/components/sections/ServicesGMB";
import QASection from "@/components/sections/QASection";
import HeroSectionGMB from "@/components/gmb/Hero";
import ContactSection from "@/components/sections/ContactSection";
import { useLoading } from "@/components/LoadingProvider";

export default function GMBPage() {
  const { setIsLoading } = useLoading();

  // Schema.org structured data for the entire page
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Google Business Profile Management Services",
    description:
      "Expert Google Business Profile (GMB) management services to boost your local SEO, attract more customers, and grow your business.",
    provider: {
      "@type": "Organization",
      name: "Lumora Ventures",
      url: "https://www.lumoraventures.com",
    },
    serviceType: "Local SEO",
    serviceOutput: {
      "@type": "Thing",
      name: "Improved Local Search Visibility",
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "#overview",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.lumoraventures.com/gmb-hero.webp",
      caption: "Google Business Profile Management Services",
    },
    breadcrumb: {
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
          name: "Google Business Profile Management",
          item: "https://www.lumoraventures.com/google-my-business",
        },
      ],
    },
  };

  // Signal that page has loaded
  useEffect(() => {
    setIsLoading(false);

    // Track page view - this is a common analytics pattern
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_path: "/google-my-business",
        page_title: "Google Business Profile Management Services",
      });
    }
  }, [setIsLoading]);

  return (
    <>
      {/* Add structured data for search engines */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <Navbar />

      <main id="main-content">
        <section id="overview" aria-labelledby="overview-heading">
          <HeroSectionGMB />
        </section>

        <section id="about" aria-labelledby="about-heading">
          <AboutGMB />
        </section>

        <section id="why-matters" aria-labelledby="why-matters-heading">
          <WhyItMatters />
        </section>

        <section id="why-choose" aria-labelledby="why-choose-heading">
          <WhyChooseUs />
        </section>

        <section id="services" aria-labelledby="services-heading">
          <ServicesGMB />
        </section>

        <section id="qa" aria-labelledby="qa-heading">
          <QASection />
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
