// components/common/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("overview")}
              className="flex items-center gap-3"
            >
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Lumora Ventures"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span
                className={`font-bold text-lg hidden sm:block ${
                  isScrolled ? "text-gray-900" : "text-gray-800"
                }`}
              >
                Lumora Ventures
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-teal-600"
                      : "text-gray-800 hover:text-teal-600"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-8 bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? "text-gray-700" : "text-gray-800"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-4 bg-white rounded-b-lg shadow-lg">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-4 mx-4 w-[calc(100%-2rem)] bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
