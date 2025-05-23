"use client";

import { Suspense, useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import ServiceOverview from "@/components/ServiceOverview";
import AboutUsSection from "@/components/AboutUsSection";
import ServiceSection from "@/components/ServiceSection";
import ContactPage from "@/components/Contact";
import OptimizedNavbar from "@/components/layout/OptimizedNavbar";
import Loading from "./loading";

export default function Home() {
  // Reference for the contact section wrapper
  const contactRef = useRef(null);

  // Handle hash navigation on page load and URL changes
  useEffect(() => {
    const handleHashNavigation = () => {
      if (typeof window === "undefined") return;

      // Get hash without # symbol
      const hash = window.location.hash.replace("#", "");

      if (hash === "contact") {
        // If contact section is the target, use our ref
        if (contactRef.current) {
          const navbarHeight = getNavbarHeight();
          const yOffset = -navbarHeight - 20; // 20px buffer

          const y =
            contactRef.current.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

          console.log("Scrolling to contact section:", y);

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        } else {
          console.warn("Contact section reference not found");
        }
      } else if (hash) {
        // For other sections, try to find them in the DOM
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const navbarHeight = getNavbarHeight();
            const yOffset = -navbarHeight - 20;

            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;

            window.scrollTo({
              top: y,
              behavior: "smooth",
            });
          } else {
            console.warn(`Element with ID "${hash}" not found`);
          }
        }, 300); // Small delay to ensure DOM is ready
      }
    };

    // Helper function to calculate navbar height based on screen width
    const getNavbarHeight = () => {
      const width = window.innerWidth;
      if (width >= 1280) return 80; // xl and up
      if (width >= 1024) return 72; // lg
      if (width >= 768) return 64; // md
      return 56; // sm and below
    };

    // Run on initial page load with a delay to ensure components mount
    setTimeout(handleHashNavigation, 500);

    // Also run when hash changes
    window.addEventListener("hashchange", handleHashNavigation);

    // Expose a global function that other components can call
    window.scrollToContact = () => {
      if (contactRef.current) {
        const navbarHeight = getNavbarHeight();
        const yOffset = -navbarHeight - 20;

        const y =
          contactRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        console.log("Scrolling to contact section (from global):", y);

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    };

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
      delete window.scrollToContact;
    };
  }, []);

  return (
    <>
      <OptimizedNavbar />
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <ServiceOverview />
        <AboutUsSection />
        <ServiceSection />

        {/* This is the contact section wrapper with our ref */}
        <div
          id="contact-wrapper"
          ref={contactRef}
          style={{
            scrollMarginTop: "100px", // Extra margin to ensure good positioning
            position: "relative",
            width: "100%",
          }}
        >
          <ContactPage />
        </div>
      </Suspense>
    </>
  );
}
