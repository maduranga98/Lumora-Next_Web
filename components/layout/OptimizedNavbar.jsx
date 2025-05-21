"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const OptimizedNavbar = ({
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
  const navbarRef = useRef(null);

  // Ensure component is mounted before accessing window
  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close mobile menu when resizing to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check if we're on the home page
  const isHomePage = mounted ? pathname === "/" : false;

  // Handle scroll with throttling to improve performance
  useEffect(() => {
    if (!mounted || !scrollBackground) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollBackground, mounted]);

  // Get navbar styling based on variant
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

  // Get text color based on variant and scroll state
  const getTextColor = () => {
    if (variant === "premium") {
      return "text-white";
    }
    if (variant === "dark") {
      return "text-white";
    }
    // For default and transparent variants
    return scrolled ? "text-gray-700" : "text-white";
  };

  // IMPROVED: Scroll to section with reliable method
  const scrollToSection = useCallback(
    (e, sectionId) => {
      e.preventDefault();

      if (!mounted) return;

      // Clean any hash symbols
      const cleanSectionId = sectionId.replace(/#/g, "");

      if (!isHomePage) {
        // Navigate to home page with hash
        router.push(`/#${cleanSectionId}`);
        return;
      }

      // Special handling for contact section
      if (
        cleanSectionId === "contact" &&
        typeof window.scrollToContact === "function"
      ) {
        // Use the global function defined in Home component
        window.scrollToContact();
        setIsOpen(false); // Close mobile menu
        setActiveDropdown(null); // Close dropdowns

        // Update URL hash for SEO and sharing without triggering another scroll
        const originalScrollRestoration = history.scrollRestoration;
        history.scrollRestoration = "manual";
        window.history.pushState(null, "", `#${cleanSectionId}`);
        history.scrollRestoration = originalScrollRestoration;

        return;
      }

      // For other sections, use standard approach
      try {
        const element = document.getElementById(cleanSectionId);

        if (element) {
          const navbarHeight = navbarRef.current
            ? navbarRef.current.offsetHeight
            : windowWidth >= 1280
            ? 80
            : 64;

          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navbarHeight - 20;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Update URL without triggering a scroll event
          window.history.pushState(null, "", `#${cleanSectionId}`);

          // Close mobile menu and dropdowns
          setIsOpen(false);
          setActiveDropdown(null);
        } else {
          console.warn(`Element with ID "${cleanSectionId}" not found`);
        }
      } catch (error) {
        console.error("Error scrolling to section:", error);
      }
    },
    [mounted, isHomePage, router, windowWidth]
  );

  // Default navigation links
  const defaultNavLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About", isScroll: true },
    {
      href: "#services",
      label: "Services",
      isScroll: true,
      dropdown: [
        { href: "/google-my-business", label: "Google My Business" },
        { href: "/curl-cipher", label: "Curl Cipher" },
        {
          href: "/industrial-automation",
          label: "Industrial Automation",
        },
      ],
    },
    { href: "#contact", label: "Contact", isScroll: true },
  ];

  const navLinks = customLinks || defaultNavLinks;

  // Handle link click - memoized for better performance
  const handleLinkClick = useCallback(
    (e, link) => {
      if (link.isScroll) {
        const sectionId = link.href.replace("#", "");
        scrollToSection(e, sectionId);
      } else {
        setIsOpen(false); // Close mobile menu on regular link click
      }
    },
    [scrollToSection]
  );

  // Handle dropdown hover with debouncing for better performance
  const handleDropdownHover = useCallback((index, isEntering) => {
    if (isEntering) {
      setActiveDropdown(index);
    } else {
      const timer = setTimeout(() => {
        setActiveDropdown(null);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle dropdown click for touch devices
  const handleDropdownClick = useCallback((e, index) => {
    e.preventDefault();
    setActiveDropdown((prev) => (prev === index ? null : index));
  }, []);

  // Render link component - memoized for better performance
  const renderLink = useCallback(
    (link, className) => {
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
        <Link
          href={link.href}
          className={className}
          onClick={() => setIsOpen(false)}
          prefetch={true}
        >
          {link.label}
        </Link>
      );
    },
    [handleLinkClick]
  );

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <nav className={getNavbarStyle()}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className={`flex items-center space-x-2 sm:space-x-3 group`}
              prefetch={true}
            >
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.webp"
                  alt="Lumora Ventures"
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
    );
  }

  // Determine logo and text sizes based on screen width
  const logoSize = { size: 32, width: 8, height: 8 };
  if (windowWidth >= 1536) logoSize.size = 40;
  else if (windowWidth >= 1280) logoSize.size = 36;
  else if (windowWidth >= 1024) logoSize.size = 32;
  else if (windowWidth >= 768) logoSize.size = 28;
  else logoSize.size = 24;

  // Determine text sizes based on screen width
  const textSize =
    windowWidth >= 1536
      ? "text-2xl"
      : windowWidth >= 1280
      ? "text-xl"
      : windowWidth >= 1024
      ? "text-lg"
      : windowWidth >= 768
      ? "text-base"
      : "text-sm";

  const navTextSize =
    windowWidth >= 1536
      ? "text-lg"
      : windowWidth >= 1280
      ? "text-base"
      : windowWidth >= 768
      ? "text-sm"
      : "text-xs";

  return (
    <nav className={getNavbarStyle()} ref={navbarRef}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 sm:space-x-3 group"
            prefetch={true}
          >
            <div className="relative w-8 h-8">
              <Image
                src="/logo.webp"
                alt="Lumora Ventures"
                width={logoSize.size}
                height={logoSize.size}
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`font-bold font-montserrat tracking-tight ${textSize} ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Lumora Ventures
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6 xl:space-x-8">
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
                    `inline-flex items-center px-1 py-2 ${navTextSize} font-medium tracking-wide transition-colors duration-300 ${
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
                      aria-label="Toggle dropdown menu"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        } ${scrolled ? "text-gray-700" : "text-white"}`}
                      />
                    </button>
                  )}
                </div>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === index && (
                  <div
                    className={`absolute left-0 mt-0 w-48 sm:w-56 rounded-lg shadow-lg overflow-hidden z-50 ${
                      variant === "premium" ? "bg-gray-900" : "bg-white"
                    }`}
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => handleDropdownHover(index, false)}
                  >
                    <div className="py-1">
                      {link.dropdown.map((item, idx) => (
                        <div key={idx}>
                          <Link
                            href={item.href}
                            className={`block px-4 py-2 sm:py-3 ${navTextSize} transition-colors duration-200 ${
                              variant === "premium"
                                ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                                : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            }`}
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsOpen(false);
                            }}
                            prefetch={true}
                          >
                            {item.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <div key={index}>
                <div className="flex items-center justify-between">
                  {renderLink(
                    link,
                    "block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full"
                  )}
                  {link.dropdown && (
                    <button
                      onClick={(e) => handleDropdownClick(e, index)}
                      className="px-3 py-2 text-gray-700 focus:outline-none"
                      aria-label="Toggle dropdown"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {link.dropdown && activeDropdown === index && (
                  <div className="ml-4 space-y-1 mt-1">
                    {link.dropdown.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-xs sm:text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                        onClick={() => {
                          setActiveDropdown(null);
                          setIsOpen(false);
                        }}
                        prefetch={true}
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
              className="block w-full text-center px-3 py-2 mt-4 rounded-full bg-blue-600 text-white text-sm font-semibold tracking-wide shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
              prefetch={true}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default OptimizedNavbar;
