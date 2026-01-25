"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Linkedin, Github, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("2025");
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const resizeTimerRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);
    setCurrentYear(new Date().getFullYear().toString());

    const handleResize = () => {
      if (resizeTimerRef.current) return;

      resizeTimerRef.current = setTimeout(() => {
        setWindowWidth(window.innerWidth);
        resizeTimerRef.current = null;
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
    };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    if (!isMounted) return;

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = windowWidth >= 1280 ? 80 : 64;
      const offsetPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const companyLinks = [
    { name: "About Us", href: "#about", isScroll: true },
    { name: "Services", href: "#services", isScroll: true },
    { name: "Products", href: "#products", isScroll: true },
    { name: "Industries", href: "#industries", isScroll: true },
    { name: "Case Studies", href: "#success", isScroll: true },
    { name: "Contact", href: "#contact", isScroll: true },
  ];

  const services = [
    { name: "Software Development", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "AI & Machine Learning", href: "#technology" },
    { name: "Computer Vision", href: "#technology" },
    { name: "Industrial Automation", href: "#services" },
    { name: "Data Analytics", href: "#technology" },
  ];

  const products = [
    { name: "PulsedGym", href: "#products" },
    { name: "Curl Cipher", href: "/curl-cipher" },
    { name: "VoxWel", href: "#products" },
    { name: "VerseWing", href: "#products" },
    { name: "GymNex", href: "#products" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/lumora-ventures-pvt-ltd/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/lumoraventures",
      icon: Github,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/lumoraventures",
      icon: Twitter,
    },
    {
      name: "Facebook",
      url: "https://web.facebook.com/profile.php?id=61575034203203",
      icon: Facebook,
    },
  ];

  return (
    <footer
      className="bg-gray-900 text-white"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info - Spans 2 columns on large screens */}
          <div
            className="lg:col-span-2"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <Link
              href="/"
              className="flex items-center space-x-3 mb-6 group"
              itemProp="url"
            >
              <Image
                src="/logo.webp"
                alt="Lumora Ventures Logo"
                width={40}
                height={40}
                className="object-contain"
                itemProp="logo"
              />
              <span
                className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors"
                itemProp="name"
              >
                Lumora Ventures
              </span>
            </Link>
            <p
              className="text-gray-400 text-sm mb-6 max-w-sm leading-relaxed"
              itemProp="description"
            >
              Complete technology solutions from apps to AI. We build software,
              mobile applications, and intelligent automation systems that drive
              real business results.
            </p>
            <p className="text-sm text-blue-400 font-medium mb-6">
              &quot;Innovation Through Implementation&quot;
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    aria-label={`Follow us on ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <nav aria-label="Footer company links">
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={link.isScroll ? (e) => scrollToSection(e, link.href.replace("#", "")) : undefined}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">What We Do</h3>
            <nav aria-label="Footer services links">
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      onClick={(e) => scrollToSection(e, service.href.replace("#", ""))}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Products</h3>
            <nav aria-label="Footer products links">
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.name}>
                    {product.href.startsWith("/") ? (
                      <Link
                        href={product.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                      >
                        {product.name}
                      </Link>
                    ) : (
                      <a
                        href={product.href}
                        onClick={(e) => scrollToSection(e, product.href.replace("#", ""))}
                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                      >
                        {product.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <a
                  href="mailto:info@lumoraventures.com"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                >
                  info@lumoraventures.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <a
                  href="tel:+94779861174"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                >
                  +94 77 986 1174
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="text-sm text-gray-300">
                  Kandy, Sri Lanka | Global Delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Lumora Ventures PVT LTD. All rights reserved.
            </p>
            <nav aria-label="Legal links">
              <ul className="flex items-center gap-6">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
