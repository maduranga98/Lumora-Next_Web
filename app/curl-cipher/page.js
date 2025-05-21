// app/curl-cipher/page.js
"use client";

import { useEffect } from "react";
import Script from "next/script";
import AppOverviewSection from "@/components/curlcipher/AppOverviewSection";
import ContactSection from "@/components/curlcipher/ContactSection";
import HeroSection from "@/components/curlcipher/CurlCipherHero";
import FeaturesSection from "@/components/curlcipher/FeaturesSection";
import Navbar from "@/components/curlcipher/Navbar";
import PricingSection from "@/components/curlcipher/PricingSection";

export default function CurlCipherPage() {
  // Schema.org structured data for SaaS product
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CURL CIPHER",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  // Track page views for analytics
  useEffect(() => {
    // Track page view - this is a common analytics pattern
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_path: "/curl-cipher",
        page_title: "CURL CIPHER - Secure API Request Management Tool",
      });
    }
  }, []);

  return (
    <>
      {/* Add structured data for search engines */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Navbar />

      <main id="main-content">
        <section id="home" aria-labelledby="hero-heading">
          <HeroSection />
        </section>

        <section id="overview" aria-labelledby="overview-heading">
          <AppOverviewSection />
        </section>

        <section id="features" aria-labelledby="features-heading">
          <FeaturesSection />
        </section>

        <section id="pricing" aria-labelledby="pricing-heading">
          <PricingSection />
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
