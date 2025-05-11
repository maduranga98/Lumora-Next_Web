// components/industrialautomatiom/IndustrialAutomationNavBar.jsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  // Only run client-side code after mount
  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [windowWidth, setWindowWidth] = useState(0);

  // Handle scroll with throttling to improve performance
  useEffect(() => {
    if (!mounted) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;

          // Determine active section based on scroll position
          const sections = document.querySelectorAll("section[id], div[id]");
          if (sections.length === 0) return;

          // Create an array to store all section positions
          let activeSectionFound = false;
          const scrollPosition = window.scrollY + 100; // Adding offset for navbar height

          // Check sections from top to bottom
          Array.from(sections).forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (
              !activeSectionFound &&
              scrollPosition >= sectionTop &&
              scrollPosition < sectionTop + sectionHeight
            ) {
              setActiveSection(sectionId);
              activeSectionFound = true;
            }
          });

          // If we're at the very top of the page, set home as active
          if (window.scrollY < 100) {
            setActiveSection("home");
          }

          // If we're at the bottom of the page, set the last section as active
          if (
            window.scrollY + window.innerHeight >=
            document.body.offsetHeight - 100
          ) {
            const lastSection = sections[sections.length - 1];
            if (lastSection) {
              setActiveSection(lastSection.getAttribute("id"));
            }
          }
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Automation", href: "#automation", id: "automation" },
    { label: "R&D", href: "#rd", id: "rd" },
    { label: "Maintenance", href: "#maintenance", id: "maintenance" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  // Improved scroll to section function
  const scrollToSection = useCallback(
    (href) => {
      if (!mounted) return;

      // Close mobile menu
      setIsMobileMenuOpen(false);

      // Handle hash navigation
      if (href.startsWith("#")) {
        const sectionId = href.substring(1);
        const element = document.getElementById(sectionId);

        if (element) {
          const navHeight = windowWidth >= 1280 ? 80 : 64; // Adjust based on screen size
          const offsetPosition = element.offsetTop - navHeight;

          setTimeout(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }, 100);
        }
      }
    },
    [mounted, windowWidth]
  );

  // Render a static version for server-side rendering
  if (!mounted) {
    return (
      <nav className="fixed w-full z-50 h-16 md:h-20 bg-black/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 overflow-hidden">
                {/* Placeholder for logo image */}
                <div className="w-8 h-8 bg-blue-500/50 rounded-full" />
              </div>
              <span className="text-white font-semibold text-base md:text-xl">
                Lumora Ventures
              </span>
            </a>

            {/* Mobile menu button placeholder */}
            <div className="md:hidden">
              <button className="text-gray-400 hover:text-white focus:outline-none">
                <span className="sr-only">Open main menu</span>
                <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                  <span className="block w-6 h-0.5 bg-white"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-blue-400/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Lumora Ventures Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-white font-semibold text-base md:text-xl">
                Lumora Ventures
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors duration-300 text-sm font-medium relative ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Improved implementation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-blue-400/10">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left transition-colors duration-300 py-2 ${
                  activeSection === item.id ? "text-white" : "text-gray-400"
                }`}
              >
                <div className="flex items-center">
                  {activeSection === item.id && (
                    <span className="w-1 h-5 bg-blue-400 rounded-full mr-2"></span>
                  )}
                  {item.label}
                </div>
              </button>
            ))}
            <Link
              href="/"
              className="block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
