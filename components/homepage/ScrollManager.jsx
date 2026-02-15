"use client";

import { useEffect, useCallback } from "react";

/**
 * Client component to handle scroll behavior and hash navigation
 */
export default function ScrollManager() {
  // Scroll to section helper function
  const scrollToSection = useCallback((sectionId) => {
    const cleanId = sectionId.replace("#", "");
    const element = document.getElementById(cleanId);

    if (element) {
      const navbarHeight = window.innerWidth >= 1280 ? 80 : 64;
      const offsetPosition =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight -
        20;

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

  // This component doesn't render anything visible
  return null;
}
