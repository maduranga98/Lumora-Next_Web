"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Linkedin, Github, Facebook } from "lucide-react";

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

  const aboutLinks = [
    { name: "Who We Are", href: "#about", isScroll: true },
    { name: "Our Team", href: "#about", isScroll: true },
    { name: "Careers", href: "#contact", isScroll: true },
    { name: "Products", href: "#products", isScroll: true },
  ];

  const serviceLinks = [
    { name: "Software Dev", href: "#services", isScroll: true },
    { name: "Mobile Apps", href: "#services", isScroll: true },
    { name: "AI/ML Solutions", href: "#services", isScroll: true },
    { name: "Automation", href: "#services", isScroll: true },
  ];

  const contactInfo = [
    { label: "info@lumoraventures.com", href: "mailto:info@lumoraventures.com" },
    { label: "+94 77 986 1174", href: "tel:+94779861174" },
    { label: "Kandy, Sri Lanka", href: null },
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
      name: "Facebook",
      url: "https://web.facebook.com/profile.php?id=61575034203203",
      icon: Facebook,
    },
  ];

  return (
    <footer
      className="bg-gray-100 text-gray-700"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Logo */}
        <div className="mb-10">
          <Link
            href="/"
            className="flex items-center space-x-3 group"
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
              className="font-bold text-lg text-blue-900 group-hover:text-blue-700 transition-colors"
              itemProp="name"
            >
              LUMORA VENTURES
            </span>
          </Link>
        </div>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* About Us */}
          <div>
            <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wider mb-5">
              About Us
            </h3>
            <nav aria-label="Footer about links">
              <ul className="space-y-3">
                {aboutLinks.map((link) => (
                  <li key={link.name}>
                    {link.isScroll ? (
                      <a
                        href={link.href}
                        onClick={(e) =>
                          scrollToSection(e, link.href.replace("#", ""))
                        }
                        className="text-gray-600 hover:text-blue-900 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-blue-900 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wider mb-5">
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
                      className="text-gray-600 hover:text-blue-900 transition-colors text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wider mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.label}>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-600 hover:text-blue-900 transition-colors text-sm"
                    >
                      {info.label}
                    </a>
                  ) : (
                    <span className="text-gray-600 text-sm">{info.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Lumora Ventures. All rights reserved.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="text-gray-400 hover:text-blue-900 transition-colors"
                    aria-label={`Follow us on ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            <nav aria-label="Legal links">
              <ul className="flex items-center gap-6">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-gray-500 hover:text-blue-900 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-sm text-gray-500 hover:text-blue-900 transition-colors"
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
