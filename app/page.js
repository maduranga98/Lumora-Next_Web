"use client";

import { useEffect, useRef, useCallback } from "react";
import Navbar from "@/components/homepage/Navbar";
import HeroSection from "@/components/homepage/HeroSection";
import WhoWeAreSection from "@/components/homepage/WhoWeAreSection";
import WhatWeDoSection from "@/components/homepage/WhatWeDoSection";
import ProductsSection from "@/components/homepage/ProductsSection";
import IndustriesSection from "@/components/homepage/IndustriesSection";
import InnovationSection from "@/components/homepage/InnovationSection";
import CTASection from "@/components/homepage/CTASection";
import ContactSection from "@/components/homepage/ContactSection";

export default function Home() {
  const contactRef = useRef(null);

  // Scroll to section helper function
  const scrollToSection = useCallback((sectionId) => {
    const cleanId = sectionId.replace("#", "");
    const element = document.getElementById(cleanId);

    if (element) {
      const navbarHeight = window.innerWidth >= 1280 ? 80 : 64;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash
      window.history.pushState(null, "", `#${cleanId}`);
    }
  }, []);

  // Handle hash navigation on page load
  useEffect(() => {
    const handleHashNavigation = () => {
      if (typeof window === "undefined") return;

      const hash = window.location.hash.replace("#", "");

      if (hash) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          scrollToSection(hash);
        }, 500);
      }
    };

    // Run on initial page load
    handleHashNavigation();

    // Also run when hash changes
    window.addEventListener("hashchange", handleHashNavigation);

    // Expose global scrollToSection function for navbar
    window.scrollToSection = scrollToSection;

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
      delete window.scrollToSection;
    };
  }, [scrollToSection]);

  return (
    <>
      <Navbar />

      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Who We Are */}
      <WhoWeAreSection />

      {/* Section 3: What We Do */}
      <WhatWeDoSection />

      {/* Section 4: Our Products */}
      <ProductsSection />

      {/* Section 5: Industries We Serve */}
      <IndustriesSection />

      {/* Section 6: Innovation Highlights */}
      <InnovationSection />

      {/* Section 7: Call to Action */}
      <CTASection />

      {/* Section 8: Contact */}
      <div id="contact-wrapper" ref={contactRef}>
        <ContactSection />
      </div>
    </>
  );
}
