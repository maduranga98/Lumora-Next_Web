"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  // Only run client-side code after mount
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
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
        setActiveSection(lastSection.getAttribute("id"));
      }
    };

    // Run once on initial load
    setTimeout(handleScroll, 500);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Automation", href: "#automation", id: "automation" },
    { label: "R&D", href: "#rd", id: "rd" },
    { label: "Maintenance", href: "#maintenance", id: "maintenance" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Set active section when clicking nav item
      const sectionId = href.replace("#", "");
      setActiveSection(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  // Don't render anything on server-side
  if (!mounted) {
    return (
      <nav className="fixed w-full z-50 h-16 md:h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Minimal placeholder content */}
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
            <a href="/" className="flex items-center gap-2">
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
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors duration-300 text-sm font-medium relative group ${
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-black/90 backdrop-blur-lg border-t border-blue-400/10">
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
          <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 mt-4">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
