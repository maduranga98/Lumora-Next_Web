// components/common/Navbar.jsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import Script from "next/script";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  // Set mounted state and initialize window dimensions
  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile menu on resize to desktop
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll with throttling for better performance
  useEffect(() => {
    if (!isMounted) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  // Improved scroll function with better offset calculation
  const scrollToSection = useCallback(
    (sectionId, e) => {
      if (e) e.preventDefault();
      if (!isMounted) return;

      const element = document.getElementById(sectionId);
      if (element) {
        // Adjust navbar height based on screen size
        const navbarHeight =
          windowWidth >= 1280 ? 80 : windowWidth >= 768 ? 72 : 64;

        // More accurate position calculation
        const yOffset = -navbarHeight;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });

        // Close mobile menu
        setIsMobileMenuOpen(false);

        // Update URL with hash for better SEO and sharing
        window.history.pushState(null, "", `#${sectionId}`);
      }
    },
    [isMounted, windowWidth]
  );

  // Navigate to main site
  const navigateToMainSite = useCallback(() => {
    router.push("/");
  }, [router]);

  const navLinks = [
    { id: "overview", label: "Overview" },
    { id: "about", label: "About GBP" },
    { id: "why-matters", label: "Why It Matters" },
    { id: "why-choose", label: "Why Choose Us" },
    { id: "services", label: "Services" },
    { id: "qa", label: "Q&A" },
    { id: "contact", label: "Contact" },
  ];

  // Schema.org structured data for navigation
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: navLinks.map((link) => link.label),
    url: navLinks.map((link) => `https://www.lumoraventures.com/#${link.id}`),
  };

  // Return early if not mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <nav
        className="fixed w-full z-50 bg-white/80 h-16 sm:h-18 md:h-20"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-full">{/* Placeholder */}</div>
        </div>
      </nav>
    );
  }

  return (
    <>
      {/* Structured data for navigation - helps search engines understand site structure */}
      <Script
        id="navigation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
      />

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-md"
            : "bg-white/80 backdrop-blur-sm"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
            {/* Logo - Clickable to go to main site */}
            <div className="flex items-center">
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToMainSite();
                }}
                className="flex items-center gap-2 sm:gap-3 group transition-all duration-300"
                aria-label="Go to Lumora Ventures homepage"
              >
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/logo.webp"
                    alt="Lumora Ventures Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span
                  className={`font-montserrat font-bold text-base sm:text-lg md:text-xl hidden sm:block group-hover:text-blue-600 transition-colors ${
                    isScrolled ? "text-gray-900" : "text-gray-800"
                  }`}
                >
                  Lumora Ventures
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - Semantic HTML with ul/li structure */}
            <div className="hidden lg:flex items-center">
              <ul className="flex space-x-5 xl:space-x-8" role="menu">
                {navLinks.map((link) => (
                  <li key={link.id} role="none">
                    <Link
                      href={`#${link.id}`}
                      onClick={(e) => scrollToSection(link.id, e)}
                      className={`font-inter text-sm xl:text-base font-medium transition-colors ${
                        isScrolled
                          ? "text-gray-700 hover:text-blue-600"
                          : "text-gray-800 hover:text-blue-600"
                      }`}
                      role="menuitem"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md ${
                  isScrolled ? "text-gray-700" : "text-gray-800"
                } hover:bg-gray-100/50 transition-colors`}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation - With semantic HTML structure */}
          <div
            id="mobile-menu"
            className={`lg:hidden fixed inset-x-0 top-[64px] sm:top-[72px] md:top-[80px] z-40 transform transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0 pointer-events-none"
            }`}
            aria-hidden={!isMobileMenuOpen}
          >
            <nav
              className="py-3 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100"
              aria-label="Mobile navigation"
            >
              <ul role="menu">
                {navLinks.map((link) => (
                  <li key={link.id} role="none">
                    <Link
                      href={`#${link.id}`}
                      onClick={(e) => scrollToSection(link.id, e)}
                      className="block w-full text-left px-4 py-3 font-inter text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      role="menuitem"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                {/* Back to main site in mobile menu */}
                <li role="none" className="mt-2 border-t border-gray-100">
                  <Link
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToMainSite();
                    }}
                    className="flex items-center w-full text-left px-4 py-3 font-inter text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    role="menuitem"
                  >
                    Back to Home
                  </Link>
                </li>

                <li role="none" className="px-4 pt-4 pb-2">
                  <Link
                    href="#contact"
                    onClick={(e) => scrollToSection("contact", e)}
                    className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-montserrat font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
                    role="menuitem"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}
