"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const navbarRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll
  useEffect(() => {
    if (!mounted) return;

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
  }, [mounted]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isHomePage = mounted ? pathname === "/" : false;

  // Scroll to section
  const scrollToSection = useCallback(
    (e, sectionId) => {
      e.preventDefault();

      if (!mounted) return;

      const cleanSectionId = sectionId.replace(/#/g, "");

      if (!isHomePage) {
        router.push(`/#${cleanSectionId}`);
        return;
      }

      const element = document.getElementById(cleanSectionId);

      if (element) {
        const navbarHeight = navbarRef.current
          ? navbarRef.current.offsetHeight
          : 80;
        const offsetPosition =
          element.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        window.history.pushState(null, "", `#${cleanSectionId}`);
      }

      setIsOpen(false);
      setActiveDropdown(null);
    },
    [mounted, isHomePage, router]
  );

  const navLinks = [
    { href: "#services", label: "Services", isScroll: true },
    { href: "#products", label: "Products", isScroll: true },
    { href: "#industries", label: "Industries", isScroll: true },
    { href: "#about", label: "About", isScroll: true },
    { href: "#contact", label: "Contact", isScroll: true },
  ];

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

  if (!mounted) {
    return (
      <nav className="fixed w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.webp"
                  alt="Lumora Ventures"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-bold text-xl text-white">
                Lumora Ventures
              </span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            prefetch={true}
          >
            <div className="relative w-10 h-10">
              <Image
                src="/logo.webp"
                alt="Lumora Ventures"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`font-bold text-xl tracking-tight transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Lumora Ventures
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-colors rounded-lg ${
                    scrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      : "text-white hover:text-blue-200"
                  }`}
                >
                  {link.label}
                </a>
              </div>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="ml-4 px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white shadow-lg px-4 py-4 space-y-1">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="block w-full text-center mt-4 px-4 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
