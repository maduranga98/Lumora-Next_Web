// components/common/Navbar.jsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

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
    (sectionId) => {
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

        // Update URL with hash for better sharing (optional)
        // window.history.pushState(null, "", `#${sectionId}`);
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

  // Return early if not mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <nav className="fixed w-full z-50 bg-white/80 h-16 sm:h-18 md:h-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-full">{/* Placeholder */}</div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo - Clickable to go to main site */}
          <div className="flex items-center">
            <button
              onClick={navigateToMainSite}
              className="flex items-center gap-2 sm:gap-3 group transition-all duration-300"
              aria-label="Go to main site"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="Lumora Ventures"
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
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex space-x-5 xl:space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-inter text-sm xl:text-base font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
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
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - With slide animation and better positioning */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[64px] sm:top-[72px] md:top-[80px] z-40 transform transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="py-3 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 font-inter text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </button>
            ))}

            {/* Back to main site in mobile menu */}
            <button
              onClick={navigateToMainSite}
              className="flex items-center w-full text-left px-4 py-3 font-inter text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors mt-2 border-t border-gray-100"
            >
              Back to Home
            </button>

            <div className="px-4 pt-4 pb-2">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-montserrat font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
