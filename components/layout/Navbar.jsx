"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

const Navbar = ({
  variant = "default",
  scrollBackground = true,
  customLinks = null,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Ensure component is mounted before accessing window
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if we're on the home page
  const isHomePage = mounted ? pathname === "/" : false;

  // Handle scroll
  useEffect(() => {
    if (mounted) {
      const handleScroll = () => {
        if (scrollBackground) {
          setScrolled(window.scrollY > 20);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [scrollBackground, mounted]);

  // Get navbar styling based on variant
  const getNavbarStyle = () => {
    const base = "fixed w-full z-50 transition-all duration-300";

    if (variant === "transparent") {
      return `${base} ${
        scrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`;
    }
    if (variant === "dark") {
      return `${base} bg-gray-900 border-b border-gray-800`;
    }
    if (variant === "premium") {
      return `${base} ${
        scrolled ? "bg-black/90 backdrop-blur-lg" : "bg-black"
      } text-white`;
    }
    return `${base} ${scrolled ? "bg-white shadow-lg" : "bg-transparent"}`;
  };

  // Scroll to section function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    if (!mounted) return;

    if (!isHomePage) {
      // Navigate to home page and then scroll
      router.push(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const offsetPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  // Default navigation links
  const defaultNavLinks = [
    { href: "/", label: "Home" },
    {
      href: "#services",
      label: "Services",
      isScroll: true,
      dropdown: [
        { href: "/services/google-my-business", label: "Google My Business" },
        { href: "/services/curl-cipher", label: "Curl Cipher" },
        {
          href: "/services/industrial-automation",
          label: "Industrial Automation",
        },
        {
          href: "/services/social-media-marketing",
          label: "Social Media Marketing",
        },
      ],
    },
    { href: "#about", label: "About", isScroll: true },
    { href: "#contact", label: "Contact", isScroll: true },
  ];

  const navLinks = customLinks || defaultNavLinks;

  // Animation variants
  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: {
        duration: 0.2,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -5 },
    open: { opacity: 1, y: 0 },
  };

  // Handle link click
  const handleLinkClick = (e, link) => {
    if (link.isScroll) {
      const sectionId = link.href.replace("#", "");
      scrollToSection(e, sectionId);
    }
  };

  // Render link component
  const renderLink = (link, className) => {
    if (link.isScroll) {
      return (
        <a
          href={link.href}
          onClick={(e) => handleLinkClick(e, link)}
          className={className}
        >
          {link.label}
        </a>
      );
    }
    return (
      <Link href={link.href} className={className}>
        {link.label}
      </Link>
    );
  };

  // Handle dropdown hover with a slight delay for better UX
  const handleDropdownHover = (index, isEntering) => {
    if (isEntering) {
      setActiveDropdown(index);
    } else {
      // Add a small delay before closing to allow moving mouse between elements
      setTimeout(() => {
        setActiveDropdown(null);
      }, 100);
    }
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <nav className={getNavbarStyle()}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.png"
                  alt="Lumora Ventures"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg text-gray-900">
                Lumora Ventures
              </span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={getNavbarStyle()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.png"
                alt="Lumora Ventures"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span
              className={`font-bold text-lg ${
                variant === "premium" ? "text-white" : "text-gray-900"
              }`}
            >
              Lumora Ventures
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() =>
                  link.dropdown && handleDropdownHover(index, true)
                }
                onMouseLeave={() =>
                  link.dropdown && handleDropdownHover(index, false)
                }
              >
                <div className="inline-flex items-center">
                  {renderLink(
                    link,
                    `inline-flex items-center px-1 py-2 text-sm font-medium transition-colors duration-300 ${
                      variant === "premium"
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-700 hover:text-blue-600"
                    }`
                  )}
                  {link.dropdown && (
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === index && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className={`absolute left-0 mt-0 w-56 rounded-lg shadow-lg overflow-hidden ${
                        variant === "premium" ? "bg-gray-900" : "bg-white"
                      }`}
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => handleDropdownHover(index, false)}
                    >
                      <div className="py-1">
                        {link.dropdown.map((item, idx) => (
                          <motion.div key={idx} variants={itemVariants}>
                            <Link
                              href={item.href}
                              className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                                variant === "premium"
                                  ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                              }`}
                            >
                              {item.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="/contact"
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                variant === "premium"
                  ? "bg-white text-black hover:bg-gray-100"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {renderLink(
                    link,
                    "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  )}
                  {link.dropdown && (
                    <div className="ml-4 space-y-1">
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="block w-full text-center px-3 py-2 mt-4 rounded-full bg-blue-600 text-white font-medium"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
