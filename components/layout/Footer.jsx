"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("2024");
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const resizeTimerRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);
    setCurrentYear(new Date().getFullYear().toString());

    // Throttled resize handler for better performance
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

  // Scroll to section function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    if (!isMounted) return;

    const element = document.getElementById(sectionId);
    if (element) {
      // Adjust navbar height based on screen size
      const navbarHeight = windowWidth >= 1280 ? 80 : 64;
      const offsetPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Our services list with proper SEO data
  const services = [
    {
      name: "Google Business Profile Management",
      shortName: "Google Business Profile",
      url: "/services/google-my-business",
      label: "Learn about our Google Business Profile management services",
    },
    {
      name: "Curl Cipher Salon Management System",
      shortName: "Salon Management System",
      url: "/services/curl-cipher",
      label: "Explore our Curl Cipher salon management software",
    },
    {
      name: "Industrial Automation Solutions",
      shortName: "Industrial Automation",
      url: "/services/industrial-automation",
      label: "Discover our industrial automation services and solutions",
    },
    {
      name: "Social Media Marketing Services",
      shortName: "Social Media Marketing",
      url: "/services/social-media-marketing",
      label: "Learn about our upcoming social media marketing services",
      comingSoon: true,
    },
  ];

  // Social media links with proper SEO attributes
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/lumoraventures",
      label: "Follow Lumora Ventures on LinkedIn",
      icon: (
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://twitter.com/lumoraventures",
      label: "Follow Lumora Ventures on Twitter",
      icon: (
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/lumoraventures",
      label: "Visit Lumora Ventures on Facebook",
      icon: (
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Company Info with Schema.org Organization markup */}
          <div
            className="col-span-1 sm:col-span-2 lg:col-span-1"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <Link
              href="/"
              className="flex items-center space-x-3 mb-4 sm:mb-6 group"
              itemProp="url"
            >
              <div className="flex items-center justify-center text-white">
                <Image
                  src="/logo.webp"
                  alt="Lumora Ventures Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  itemProp="logo"
                />
              </div>
              <span
                className="font-montserrat font-bold text-xl md:text-2xl text-white group-hover:text-blue-300 transition-colors"
                itemProp="name"
              >
                Lumora Ventures
              </span>
            </Link>
            <p
              className="font-inter text-gray-300 text-sm md:text-base mb-6 max-w-xs"
              itemProp="description"
            >
              Driving business growth through innovative digital transformation
              and automation solutions tailored for your specific needs.
            </p>

            {/* Social Media Links with proper accessibility */}
            <div className="flex space-x-5" itemProp="sameAs">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full p-1"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                  <meta itemProp="sameAs" content={social.url} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links with nav semantic element */}
          <div>
            <h2 className="font-montserrat text-lg font-semibold mb-4 sm:mb-6 text-white">
              Quick Links
            </h2>
            <nav aria-label="Footer quick links">
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => scrollToSection(e, "home")}
                    className="font-inter text-gray-300 hover:text-blue-300 transition-colors inline-block focus:outline-none focus:text-blue-300"
                    aria-label="Go to homepage"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => scrollToSection(e, "about")}
                    className="font-inter text-gray-300 hover:text-blue-300 transition-colors inline-block focus:outline-none focus:text-blue-300"
                    aria-label="Learn about Lumora Ventures"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    onClick={(e) => scrollToSection(e, "solutions")}
                    className="font-inter text-gray-300 hover:text-blue-300 transition-colors inline-block focus:outline-none focus:text-blue-300"
                    aria-label="Explore our solutions and services"
                  >
                    Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, "contact")}
                    className="font-inter text-gray-300 hover:text-blue-300 transition-colors inline-block focus:outline-none focus:text-blue-300"
                    aria-label="Contact Lumora Ventures"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Services with proper SEO-friendly links */}
          <div>
            <h2 className="font-montserrat text-lg font-semibold mb-4 sm:mb-6 text-white">
              Our Solutions
            </h2>
            <nav aria-label="Services navigation">
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.url}>
                    <Link
                      href={service.url}
                      className="font-inter text-gray-300 hover:text-blue-300 transition-colors inline-flex items-center focus:outline-none focus:text-blue-300"
                      aria-label={service.label}
                    >
                      {service.shortName}
                      {service.comingSoon && (
                        <span className="ml-2 text-xs font-medium px-2 py-0.5 bg-blue-900/50 text-blue-300 rounded-full uppercase">
                          Soon
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact with proper microdata */}
          <div itemScope itemType="https://schema.org/Organization">
            <h2 className="font-montserrat text-lg font-semibold mb-4 sm:mb-6 text-white">
              Contact Us
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:info@lumoraventures.com"
                  className="font-inter text-gray-300 hover:text-blue-300 transition-colors focus:outline-none focus:text-blue-300"
                  itemProp="email"
                >
                  info@lumoraventures.com
                </a>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <a
                  href="tel:+94123456789"
                  className="font-inter text-gray-300 hover:text-blue-300 transition-colors focus:outline-none focus:text-blue-300"
                  itemProp="telephone"
                >
                  +94 (12) 345-6789
                </a>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <div
                  className="font-inter text-gray-300"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <p itemProp="streetAddress">123 Galle Road</p>
                  <p>
                    <span itemProp="addressLocality">Colombo</span>,{" "}
                    <span itemProp="addressRegion">Western Province</span>
                  </p>
                  <p itemProp="addressCountry">Sri Lanka</p>
                  <p itemProp="postalCode">00100</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 sm:mt-12 md:mt-14 lg:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="font-inter text-sm text-gray-400">
              © {currentYear} Lumora Ventures. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <nav aria-label="Legal links">
                <ul className="flex space-x-6">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="font-inter text-sm text-gray-400 hover:text-blue-300 transition-colors focus:outline-none focus:text-blue-300"
                      aria-label="Read our privacy policy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-of-service"
                      className="font-inter text-sm text-gray-400 hover:text-blue-300 transition-colors focus:outline-none focus:text-blue-300"
                      aria-label="Read our terms of service"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
