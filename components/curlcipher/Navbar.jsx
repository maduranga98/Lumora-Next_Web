"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Home,
  Shield,
  Crown,
  Star,
  DollarSign,
  MessageSquare,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Overview", href: "#overview", icon: Shield },
    { name: "Features", href: "#features", icon: Star },
    { name: "Pricing", href: "#pricing", icon: DollarSign },
    { name: "Contact", href: "#contact", icon: MessageSquare },
  ];

  const scrollToSection = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Account for navbar height
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section - Adjusted size */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 rounded-full border border-yellow-300 p-1 transition-all duration-300 group-hover:border-yellow-200">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black to-gray-900"></div>
                <div className="relative z-10 w-full h-full rounded-full flex items-center justify-center">
                  <Image
                    src="/app-logo.webp"
                    alt="App Logo"
                    width={24}
                    height={24}
                    className="object-contain md:w-6 md:h-6 xl:w-8 xl:h-8"
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl xl:text-3xl font-serif text-white group-hover:text-yellow-300 transition-colors duration-300">
                  Curl Cipher
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Increased font size */}
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="relative group"
              >
                <span className="flex items-center gap-2 text-base md:text-lg xl:text-xl text-gray-300 group-hover:text-white transition-colors duration-300 py-2">
                  {item.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Right Section - Removed "Start Free Trial" button */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Increased font size and removed "Start Free Trial" button */}
      <div
        className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-x-0 top-full bg-black/95 backdrop-blur-lg border-t border-yellow-300/10">
          <div className="px-4 py-6 space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="flex items-center gap-3 text-base md:text-lg xl:text-xl text-gray-300 hover:text-white transition-colors duration-300"
              >
                <item.icon className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 text-yellow-300" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
