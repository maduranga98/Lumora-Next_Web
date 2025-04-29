"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect and section tracking
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = ["home", "about", "services", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset to trigger earlier

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", sectionId: "home" },
    { href: "#about", label: "About", sectionId: "about" },
    { href: "#services", label: "Services", sectionId: "services" },

    { href: "#contact", label: "Contact", sectionId: "contact" },
  ];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu if open
      if (isOpen) setIsOpen(false);

      // Calculate the offset based on navbar height
      const navbarHeight = 80; // Approximate navbar height
      const offsetPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Animation variants
  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const textVariants = {
    initial: { opacity: 0, x: -10 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.1 },
    },
  };

  const linkVariants = {
    initial: { opacity: 0, y: -5 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.1 * i,
      },
    }),
    hover: {
      y: -2,
      color: "#2563EB", // blue-600
      transition: { duration: 0.2 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-sm py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={logoVariants}
          >
            <a
              href="#home"
              className="flex items-center"
              onClick={(e) => scrollToSection(e, "home")}
            >
              <Image
                src="/logo.png"
                alt="Lumora Ventures Logo"
                width={45}
                height={45}
                className="h-10 w-auto"
                priority
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMi41IiBjeT0iMjIuNSIgcj0iMjAiIGZpbGw9IiMxRTQwQUYiLz48dGV4dCB4PSIxNSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IndoaXRlIj5MPC90ZXh0Pjwvc3ZnPg==";
                }}
              />
            </a>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={textVariants}
            className="ml-3"
          >
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="text-blue-950 font-bold text-xl md:text-2xl"
            >
              Lumora Ventures
            </a>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              custom={index}
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={linkVariants}
            >
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.sectionId)}
                className={`font-medium transition-colors ${
                  activeSection === link.sectionId
                    ? "text-blue-600"
                    : "text-blue-950 hover:text-blue-600"
                }`}
              >
                {link.label}
                {activeSection === link.sectionId && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="h-1 bg-blue-500 rounded-full mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Get Consultation
            </a>
          </motion.div>
        </nav>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? (
            <X size={24} className="text-blue-950" />
          ) : (
            <Menu size={24} className="text-blue-950" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white py-4 px-6 shadow-md overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={mobileItemVariants}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.sectionId)}
                    className={`block py-2 font-medium transition-colors ${
                      activeSection === link.sectionId
                        ? "text-blue-600"
                        : "text-blue-950 hover:text-blue-600"
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
              <motion.div variants={mobileItemVariants}>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-colors inline-block text-center mt-2 shadow-md"
                >
                  Get Consultation
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
