"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive state
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initially
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    // Set initial scroll state
    setScrolled(window.scrollY > 20);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 50,
        transition: "all 0.3s",
        background: scrolled ? "rgba(15, 23, 42, 0.9)" : "rgba(0, 0, 0, 0.03)",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        padding: scrolled ? "12px 0" : "20px 0",
        borderBottom: scrolled ? "1px solid rgba(99, 102, 241, 0.1)" : "none",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo and Company Name */}
        <Link
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "36px",
              width: "36px",
            }}
          >
            <Image
              src="/logo.png"
              alt="Lumora Ventures Logo"
              fill
              style={{
                objectFit: "contain",
                // Removed the filter to show original logo colors
              }}
              priority
            />
          </div>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: scrolled ? "white" : "white",
              transition: "color 0.3s",
              letterSpacing: "0.5px",
            }}
          >
            Lumora Ventures
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: isMobile ? "none" : "flex",
            gap: "40px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontWeight: "500",
                color: "white",
                transition: "color 0.2s",
                textDecoration: "none",
                position: "relative",
                paddingBottom: "5px",
              }}
            >
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                  zIndex: 1,
                  padding: "0 4px",
                }}
              >
                {link.label}
                <span
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: 0,
                    width: "100%",
                    height: "2px",
                    background: "linear-gradient(to right, #6366f1, #4f46e5)",
                    transform: "scaleX(0)",
                    transformOrigin: "right",
                    transition: "transform 0.3s ease",
                    opacity: 0.8,
                  }}
                ></span>
              </span>
            </Link>
          ))}
          <Link
            href="#contact"
            style={{
              background: "linear-gradient(to right, #6366f1, #4f46e5)",
              color: "white",
              padding: "8px 20px",
              borderRadius: "6px",
              fontWeight: "500",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 10px rgba(99, 102, 241, 0.3)",
            }}
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          style={{
            color: "white",
            display: isMobile ? "block" : "none",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "rgba(15, 23, 42, 0.95)",
              backdropFilter: "blur(8px)",
              padding: "20px 0",
              display: isMobile ? "block" : "none",
              borderTop: "1px solid rgba(99, 102, 241, 0.1)",
              borderBottom: "1px solid rgba(99, 102, 241, 0.1)",
            }}
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "0 20px",
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontWeight: "500",
                    color: "white",
                    textDecoration: "none",
                    fontSize: "18px",
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                style={{
                  background: "linear-gradient(to right, #6366f1, #4f46e5)",
                  color: "white",
                  padding: "12px 20px",
                  borderRadius: "6px",
                  fontWeight: "500",
                  textAlign: "center",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
