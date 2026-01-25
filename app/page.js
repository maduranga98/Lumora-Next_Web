"use client";

import { useEffect, useRef, useCallback } from "react";
import Navbar from "@/components/homepage/Navbar";
import HeroSection from "@/components/homepage/HeroSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import CapabilitiesSection from "@/components/homepage/CapabilitiesSection";
import TechnologySection from "@/components/homepage/TechnologySection";
import ProductsSection from "@/components/homepage/ProductsSection";
import SolutionsSection from "@/components/homepage/SolutionsSection";
import IndustriesSection from "@/components/homepage/IndustriesSection";
import WhyChooseUsSection from "@/components/homepage/WhyChooseUsSection";
import SuccessStoriesSection from "@/components/homepage/SuccessStoriesSection";
import AboutSection from "@/components/homepage/AboutSection";
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
      <HeroSection scrollToSection={scrollToSection} />

      {/* Section 2: Services Overview */}
      <ServicesSection scrollToSection={scrollToSection} />

      {/* Section 3: What We Do Best - Core Capabilities */}
      <CapabilitiesSection />

      {/* Section 4: Technology & Innovation */}
      <TechnologySection />

      {/* Section 5: Products Portfolio */}
      <ProductsSection scrollToSection={scrollToSection} />

      {/* Section 6: Solutions by Need */}
      <SolutionsSection scrollToSection={scrollToSection} />

      {/* Section 7: Industries We Serve */}
      <IndustriesSection />

      {/* Section 8: Why Choose Us */}
      <WhyChooseUsSection />

      {/* Section 9: Success Stories */}
      <SuccessStoriesSection scrollToSection={scrollToSection} />

      {/* Section 10: About Us */}
      <AboutSection />

      {/* Section 11: Get Started / Contact */}
      <div id="contact-wrapper" ref={contactRef}>
        <ContactSection />
      </div>
    </>
  );
}
