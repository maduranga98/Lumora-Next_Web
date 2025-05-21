"use client";

import { useState, useEffect, useRef } from "react";
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
  const [windowWidth, setWindowWidth] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  const navRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isHomePage = mounted ? pathname === "/" : false;

  useEffect(() => {
    if (mounted) {
      let ticking = false;

      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (scrollBackground) {
              setScrolled(window.scrollY > 20);
            }
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [scrollBackground, mounted]);

  useEffect(() => {
    if (mounted) {
      const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
          setActiveDropdown(null);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [mounted]);

  const getNavbarStyle = () => {
    const base = "fixed w-full z-50 transition-all duration-300";

    if (variant === "transparent") {
      return `${base} ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent text-white"
      }`;
    }
    if (variant === "dark") {
      return `${base} bg-gray-900 border-b border-gray-800 text-white`;
    }
    if (variant === "premium") {
      return `${base} ${
        scrolled ? "bg-black/90 backdrop-blur-lg" : "bg-black"
      } text-white`;
    }
    return `${base} ${
      scrolled ? "bg-white shadow-lg" : "bg-transparent text-white"
    }`;
  };

  const getTextColor = () => {
    if (variant === "premium") {
      return "text-white";
    }
    if (variant === "dark") {
      return "text-white";
    }

    return scrolled ? "text-gray-700" : "text-white";
  };

  const getHoverTextColor = () => {
    if (variant === "premium") {
      return "hover:text-white";
    }
    return "hover:text-blue-600";
  };

  // Scroll to section function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    if (!mounted) return;

    if (!isHomePage) {
      router.push(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = windowWidth >= 1280 ? 80 : 64;
      e;
      const offsetPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  const defaultNavLinks = [
    { href: "/", label: "Home", ariaLabel: "Navigate to homepage" },
    {
      href: "#about",
      label: "About",
      isScroll: true,
      ariaLabel: "Learn about Lumora Ventures",
    },
    {
      href: "#services",
      label: "Services",
      isScroll: true,
      ariaLabel: "Explore our services",
      dropdown: [
        {
          href: "/services/google-my-business",
          label: "Google My Business",
          ariaLabel: "Learn about our Google My Business services",
        },
        {
          href: "/services/curl-cipher",
          label: "Curl Cipher",
          ariaLabel: "Explore our Curl Cipher salon management system",
        },
        {
          href: "/services/industrial-automation",
          label: "Industrial Automation",
          ariaLabel: "Discover our industrial automation solutions",
        },
      ],
    },
    {
      href: "#contact",
      label: "Contact",
      isScroll: true,
      ariaLabel: "Contact Lumora Ventures",
    },
  ];

  const navLinks = customLinks || defaultNavLinks;

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

  const handleLinkClick = (e, link) => {
    if (link.isScroll) {
      const sectionId = link.href.replace("#", "");
      scrollToSection(e, sectionId);
    } else {
      setIsOpen(false);
    }
  };

  const renderLink = (link, className) => {
    if (link.isScroll) {
      return (
        <a
          href={link.href}
          onClick={(e) => handleLinkClick(e, link)}
          className={className}
          aria-label={link.ariaLabel || link.label}
        >
          {link.label}
        </a>
      );
    }
    return (
      <Link
        href={link.href}
        className={className}
        onClick={() => setIsOpen(false)}
        aria-label={link.ariaLabel || link.label}
      >
        {link.label}
      </Link>
    );
  };

  const handleDropdownHover = (index, isEntering) => {
    if (isEntering) {
      setActiveDropdown(index);
    } else {
      setTimeout(() => {
        setActiveDropdown(null);
      }, 100);
    }
  };

  const handleDropdownClick = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  if (!mounted) {
    return (
      <header>
        <nav
          className={getNavbarStyle()}
          aria-label="Main Navigation"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link
                href="/"
                className={`flex items-center space-x-2 sm:space-x-3 group`}
                aria-label="Lumora Ventures - Home"
              >
                <div className="relative w-8 h-8">
                  <Image
                    src="/logo.webp"
                    alt="Lumora Ventures Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="font-bold text-base sm:text-lg text-white">
                  Lumora Ventures
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  // Determine logo and text sizes based on screen width
  const getLogoSize = () => {
    if (windowWidth >= 1536) return { size: 40, width: 10, height: 10 }; // 2xl
    if (windowWidth >= 1280) return { size: 36, width: 9, height: 9 }; // xl
    if (windowWidth >= 1024) return { size: 32, width: 8, height: 8 }; // lg
    if (windowWidth >= 768) return { size: 28, width: 7, height: 7 }; // md
    return { size: 24, width: 6, height: 6 }; // sm and below
  };

  const logoSize = getLogoSize();

  // Determine text sizes based on screen width
  const getTextSize = () => {
    if (windowWidth >= 1536) return "text-2xl"; // 2xl
    if (windowWidth >= 1280) return "text-xl"; // xl
    if (windowWidth >= 1024) return "text-lg"; // lg
    if (windowWidth >= 768) return "text-base"; // md
    return "text-sm"; // sm and below
  };

  const getNavTextSize = () => {
    if (windowWidth >= 1536) return "text-lg"; // 2xl
    if (windowWidth >= 1280) return "text-base"; // xl
    if (windowWidth >= 768) return "text-sm"; // md
    return "text-xs"; // sm and below
  };

  return (
    <header>
      <nav
        className={getNavbarStyle()}
        ref={navRef}
        aria-label="Main Navigation"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo with structured data */}
            <Link
              href="/"
              className="flex items-center space-x-2 sm:space-x-3 group"
              aria-label="Lumora Ventures - Home"
              itemProp="url"
            >
              <div
                className={`relative w-${logoSize.width} h-${logoSize.height}`}
              >
                <Image
                  src="/logo.webp"
                  alt="Lumora Ventures Logo"
                  width={logoSize.size}
                  height={logoSize.size}
                  className="object-contain"
                  priority
                />
              </div>
              <span
                className={`font-bold font-montserrat tracking-tight ${getTextSize()} ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
                itemProp="name"
              >
                Lumora Ventures
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div
              className="hidden md:flex items-center space-x-3 lg:space-x-6 xl:space-x-8"
              role="menubar"
            >
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
                  role="none"
                  itemProp="name"
                >
                  <div className="inline-flex items-center" role="menuitem">
                    {renderLink(
                      link,
                      `inline-flex items-center px-1 py-2 ${getNavTextSize()} font-poppins font-medium tracking-wide transition-colors duration-300 ${
                        variant === "premium"
                          ? "text-gray-300 hover:text-white"
                          : scrolled
                          ? "text-gray-700 hover:text-blue-600"
                          : "text-white hover:text-blue-200"
                      }`
                    )}
                    {link.dropdown && (
                      <button
                        onClick={(e) => handleDropdownClick(e, index)}
                        className="ml-1 focus:outline-none"
                        aria-expanded={activeDropdown === index}
                        aria-label={`${link.label} submenu`}
                        aria-haspopup="true"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === index ? "rotate-180" : ""
                          } ${scrolled ? "text-gray-700" : "text-white"}`}
                          aria-hidden="true"
                        />
                      </button>
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
                        className={`absolute left-0 mt-0 w-48 sm:w-56 rounded-lg shadow-lg overflow-hidden z-50 ${
                          variant === "premium" ? "bg-gray-900" : "bg-white"
                        }`}
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => handleDropdownHover(index, false)}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby={`${link.label}-menu`}
                      >
                        <div className="py-1">
                          {link.dropdown.map((item, idx) => (
                            <motion.div
                              key={idx}
                              variants={itemVariants}
                              role="none"
                            >
                              <Link
                                href={item.href}
                                className={`block px-4 py-2 sm:py-3 ${getNavTextSize()} font-inter transition-colors duration-200 ${
                                  variant === "premium"
                                    ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                }`}
                                onClick={() => setActiveDropdown(null)}
                                role="menuitem"
                                aria-label={item.ariaLabel || item.label}
                                itemProp="url"
                              >
                                <span itemProp="name">{item.label}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
                aria-controls="mobile-menu"
              >
                <span className="sr-only">
                  {isOpen ? "Close menu" : "Open menu"}
                </span>
                {isOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
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
              className="md:hidden overflow-hidden bg-white shadow-lg"
              id="mobile-menu"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="mobile-menu-button"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link, index) => (
                  <div key={index} role="none">
                    <div className="flex items-center justify-between">
                      {renderLink(
                        link,
                        "block px-3 py-2 rounded-md text-sm font-poppins font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full"
                      )}
                      {link.dropdown && (
                        <button
                          onClick={(e) => handleDropdownClick(e, index)}
                          className="px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                          aria-expanded={activeDropdown === index}
                          aria-controls={`mobile-submenu-${index}`}
                          aria-label={`${link.label} submenu`}
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              activeDropdown === index ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {link.dropdown && activeDropdown === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 space-y-1 mt-1 overflow-hidden"
                          id={`mobile-submenu-${index}`}
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby={`mobile-submenu-button-${index}`}
                        >
                          {link.dropdown.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              className="block px-3 py-2 rounded-md text-xs sm:text-sm font-inter text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsOpen(false);
                              }}
                              role="menuitem"
                              aria-label={item.ariaLabel || item.label}
                              itemProp="url"
                            >
                              <span itemProp="name">{item.label}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <Link
                  href="/#contact"
                  className="block w-full text-center px-3 py-2 mt-4 rounded-full bg-blue-600 text-white text-sm font-montserrat font-semibold tracking-wide shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                  aria-label="Start a project with Lumora Ventures"
                  itemProp="url"
                >
                  <span itemProp="name">Get Started</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
