"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Linkedin, Github, Twitter, Facebook, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("2025");
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
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
    { name: "Blog", href: "/blog", isScroll: false },
    { name: "Contact", href: "#contact", isScroll: true },
  ];

  const productLinks = [
    { name: "Curl Cipher", href: "/curl-cipher", isScroll: false },
    { name: "Industrial Automation", href: "/industrial-automation", isScroll: false },
  ];

  const serviceLinks = [
    { name: "Software Development", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "AI & Machine Learning", href: "#services" },
    { name: "Industrial Automation", href: "#services" },
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
      className="bg-gray-950 text-white"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Company Info */}
          <div
            className="lg:col-span-2"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <Link
              href="/"
              className="flex items-center space-x-3 mb-5 group"
              itemProp="url"
            >
              <Image
                src="/logo.webp"
                alt="Lumora Ventures Logo"
                width={36}
                height={36}
                className="object-contain"
                itemProp="logo"
              />
              <span
                className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors"
                itemProp="name"
              >
                Lumora Ventures
              </span>
            </Link>
            <p
              className="text-gray-400 text-sm mb-6 leading-relaxed max-w-sm"
              itemProp="description"
            >
              Full-spectrum technology company delivering web apps, mobile applications, AI/ML solutions, and industrial automation.
            </p>
            {/* Social Links */}
            <div className="flex space-x-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-9 h-9 bg-gray-800/80 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                    aria-label={`Follow us on ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold mb-5 text-gray-300 uppercase tracking-widest">
              Company
            </h3>
            <nav aria-label="Footer company links">
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    {link.isScroll ? (
                      <a
                        href={link.href}
                        onClick={(e) =>
                          scrollToSection(e, link.href.replace("#", ""))
                        }
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold mb-5 text-gray-300 uppercase tracking-widest">
              Products
            </h3>
            <nav aria-label="Footer product links">
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <h3 className="text-xs font-semibold mt-8 mb-5 text-gray-300 uppercase tracking-widest">
              Services
            </h3>
            <nav aria-label="Footer services links">
              <ul className="space-y-3">
                {serviceLinks.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      onClick={(e) =>
                        scrollToSection(e, service.href.replace("#", ""))
                      }
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold mb-5 text-gray-300 uppercase tracking-widest">
              Connect
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {social.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Lumora Ventures PVT LTD. All rights
              reserved.
            </p>
            <nav aria-label="Legal links">
              <ul className="flex items-center gap-6">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    Terms of Service
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
