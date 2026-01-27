"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const navbarRef = useRef(null);
  const productsRef = useRef(null);
  const productsTimeoutRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHomePage = mounted ? pathname === "/" : false;

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
      setProductsOpen(false);
    },
    [mounted, isHomePage, router]
  );

  const navLinks = [
    { href: "#services", label: "Services", isScroll: true },
    { href: "#products", label: "Products", isScroll: true, hasDropdown: true },
    { href: "#industries", label: "Industries", isScroll: true },
    { href: "#about", label: "About", isScroll: true },
    { href: "/blog", label: "Blog", isScroll: false },
    { href: "#contact", label: "Contact", isScroll: true },
  ];

  const productLinks = [
    {
      name: "Curl Cipher",
      desc: "Salon management platform",
      href: "/curl-cipher",
      color: "bg-amber-500",
    },
    {
      name: "Industrial Automation",
      desc: "Smart factory solutions",
      href: "/industrial-automation",
      color: "bg-emerald-500",
    },
  ];

  const handleProductsHover = (entering) => {
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
    }
    if (entering) {
      setProductsOpen(true);
    } else {
      productsTimeoutRef.current = setTimeout(() => {
        setProductsOpen(false);
      }, 150);
    }
  };

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
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/[0.03]"
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
              <div key={index} className="relative" ref={link.hasDropdown ? productsRef : null}>
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={() => handleProductsHover(true)}
                    onMouseLeave={() => handleProductsHover(false)}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-colors rounded-lg inline-flex items-center gap-1 ${
                        scrolled
                          ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                          : "text-white hover:text-blue-200"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
                    </a>

                    <AnimatePresence>
                      {productsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-xl shadow-black/[0.08] border border-gray-100 overflow-hidden"
                        >
                          <div className="p-2">
                            {productLinks.map((product) => (
                              <Link
                                key={product.name}
                                href={product.href}
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                onClick={() => setProductsOpen(false)}
                              >
                                <div className={`w-2 h-2 rounded-full mt-1.5 ${product.color}`} />
                                <div>
                                  <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {product.name}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-0.5">
                                    {product.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-gray-100 p-2">
                            <a
                              href="#products"
                              onClick={(e) => scrollToSection(e, "#products")}
                              className="flex items-center justify-center gap-1 p-2 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              View All Products
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.isScroll ? (
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
                ) : (
                  <Link
                    href={link.href}
                    className={`px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-colors rounded-lg ${
                      scrolled
                        ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        : "text-white hover:text-blue-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-white shadow-lg px-4 py-4 space-y-1">
              {navLinks.map((link, index) =>
                link.hasDropdown ? (
                  <div key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
                    >
                      {link.label}
                    </a>
                    <div className="pl-6 space-y-1">
                      {productLinks.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="block px-4 py-2 text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : link.isScroll ? (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={index}
                    href={link.href}
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="block w-full text-center mt-4 px-4 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
