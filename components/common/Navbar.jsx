// components/common/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, ChevronLeft } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

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

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Adjust navbar height based on screen size
      const navbarHeight = windowWidth >= 1280 ? 80 : 64;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "overview", label: "Overview" },
    { id: "about", label: "About GBP" },
    { id: "why-matters", label: "Why It Matters" },
    { id: "why-choose", label: "Why Choose Us" },
    { id: "services", label: "Services" },
    { id: "qa", label: "Q&A" },
    { id: "contact", label: "Contact" },
  ];

  // Navigate back to main site
  const navigateToMainSite = () => {
    router.push("/");
  };

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
          {/* Logo with Back Button */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={navigateToMainSite}
              className="flex items-center justify-center p-1.5 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 mr-1"
              aria-label="Back to main site"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scrollToSection("overview")}
              className="flex items-center gap-2 sm:gap-3"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
                <Image
                  src="/logo.png"
                  alt="Lumora Ventures"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span
                className={`font-montserrat font-bold text-base sm:text-lg md:text-xl hidden sm:block ${
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
              }`}
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

        {/* Mobile Navigation - Improved with slide animation */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[64px] sm:top-[72px] md:top-[80px] z-40 transform transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
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
              <ChevronLeft className="w-4 h-4 mr-2" />
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
