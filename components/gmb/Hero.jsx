// components/gmb/Hero.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSectionGMB() {
  // Track component mount state to prevent hydration mismatches
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Set mounted state after hydration and track window size
  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Adjust navbar height based on screen size with extra padding for safety
      const navbarHeight = windowWidth >= 1280 ? 100 : 80;
      const offsetPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="overview"
      className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#FFF7ED] to-[#FED7AA] pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative background shapes with animation */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-0 -left-40 w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-teal-500/10 rounded-full blur-3xl transition-opacity duration-1000 ${
            isMounted ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 -right-40 w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-yellow-500/10 rounded-full blur-3xl transition-opacity duration-1000 delay-300 ${
            isMounted ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>

      {/* Background image with proper blending */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full h-full lg:w-1/2 opacity-10 lg:opacity-15">
        {isMounted && (
          <Image
            src="/gmb-hero.png"
            alt=""
            fill
            className="object-contain"
            priority
            aria-hidden="true"
          />
        )}
      </div>

      <div className="relative max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-4 md:py-8 lg:py-12 xl:py-16 min-h-[calc(100vh-140px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center w-full">
          {/* Content with animations */}
          <div className="text-center lg:text-left">
            <h1
              className={`font-montserrat text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-tight transition-all duration-700 ${
                isMounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Dominate Local Search with
              <span className="text-teal-600 block mt-2 transition-all duration-700 delay-300 transform">
                Google My Business
              </span>
            </h1>
            <p
              className={`font-inter text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl text-gray-700 mb-6 sm:mb-7 md:mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 transition-all duration-700 delay-500 ${
                isMounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Transform your local presence into a customer magnet. Our expert
              GMB management helps you rank higher, attract more customers, and
              grow your business effortlessly.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 lg:gap-6 items-center justify-center lg:justify-start transition-all duration-700 delay-700 ${
                isMounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-teal-600 text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-2.5 lg:px-7 lg:py-3 xl:px-9 xl:py-4 rounded-lg font-montserrat font-semibold text-xs sm:text-xs md:text-sm lg:text-sm xl:text-lg hover:bg-teal-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Get Started Today
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="border-2 border-teal-600 text-teal-600 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-2.5 lg:px-7 lg:py-3 xl:px-9 xl:py-4 rounded-lg font-montserrat font-semibold text-xs sm:text-xs md:text-sm lg:text-sm xl:text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Main visible Hero Image with animation - Conditionally rendered to prevent hydration mismatch */}
          <div
            className={`relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] transition-all duration-1000 ${
              isMounted
                ? "translate-x-0 opacity-100"
                : "translate-x-16 opacity-0"
            }`}
          >
            {isMounted && (
              <Image
                src="/gmb-hero.png"
                alt="Google My Business Management"
                fill
                className="object-contain z-10"
                priority
              />
            )}

            {/* Decorative elements around the image */}
            <div
              className={`absolute top-1/4 -left-6 w-12 h-12 bg-teal-400/20 rounded-full transition-all duration-1000 delay-300 ${
                isMounted ? "opacity-100 animate-pulse" : "opacity-0"
              }`}
            ></div>
            <div
              className={`absolute bottom-1/3 -right-4 w-10 h-10 bg-yellow-300/20 rounded-full transition-all duration-1000 delay-600 ${
                isMounted ? "opacity-100 animate-pulse" : "opacity-0"
              }`}
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className={`absolute top-1/2 right-1/4 w-8 h-8 bg-orange-200/20 rounded-full transition-all duration-1000 delay-900 ${
                isMounted ? "opacity-100 animate-pulse" : "opacity-0"
              }`}
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Add a subtle wave separator */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

// Separate the Globe Illustration component with its own mounting logic
export function GlobeIllustration() {
  // Use useEffect for client-side only code to prevent hydration mismatch
  const [rotation, setRotation] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Only start animations after component is mounted
    if (mounted) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 0.5) % 360);
      }, 50);

      return () => clearInterval(interval);
    }
  }, [mounted]);

  // Return a placeholder during server rendering
  if (!mounted) {
    return <div className="w-full h-64 md:h-80 lg:h-96"></div>;
  }

  // Icons orbiting the globe - only rendered client-side
  const icons = [
    { emoji: "🔍", label: "Search", color: "bg-yellow-400", delay: "0s" },
    { emoji: "⭐", label: "Reviews", color: "bg-orange-300", delay: "0.1s" },
    { emoji: "📱", label: "Contact", color: "bg-teal-300", delay: "0.2s" },
    { emoji: "💵", label: "Revenue", color: "bg-green-300", delay: "0.3s" },
    { emoji: "🌐", label: "Web", color: "bg-blue-300", delay: "0.4s" },
    { emoji: "💬", label: "Engage", color: "bg-purple-300", delay: "0.5s" },
  ];

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute w-16 h-16 bg-yellow-400/20 rounded-full top-10 left-10 animate-pulse"></div>
      <div
        className="absolute w-12 h-12 bg-teal-300/20 rounded-full bottom-12 right-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute w-8 h-8 bg-orange-300/20 rounded-full top-20 right-16 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Central globe with pulse effect */}
      <div className="relative">
        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-teal-100 rounded-full flex items-center justify-center relative">
          {/* Horizontal line */}
          <div className="absolute w-full h-0.5 bg-teal-500/50"></div>

          {/* Vertical line */}
          <div className="absolute w-0.5 h-full bg-teal-500/50"></div>

          {/* Curved lines */}
          <div
            className="absolute w-full h-full rounded-full border-t-2 border-b-2 border-teal-500/30"
            style={{ transform: `rotate(${rotation}deg)` }}
          ></div>
          <div
            className="absolute w-full h-full rounded-full border-t-2 border-b-2 border-teal-500/30"
            style={{ transform: `rotate(${rotation + 45}deg)` }}
          ></div>
          <div
            className="absolute w-full h-full rounded-full border-l-2 border-r-2 border-teal-500/30"
            style={{ transform: `rotate(${rotation + 22.5}deg)` }}
          ></div>

          {/* Pulse effect */}
          <div className="absolute w-full h-full rounded-full bg-teal-400/20 animate-ping opacity-30"></div>
        </div>

        {/* Orbiting icons */}
        {icons.map((icon, index) => {
          const angle = (360 / icons.length) * index + rotation;
          const radius = 120; // Distance from center
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <div
              key={index}
              className={`absolute flex items-center justify-center w-12 h-12 rounded-full ${icon.color} shadow-lg transition-transform duration-300 hover:scale-110`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
                animationDelay: icon.delay,
                zIndex: 10,
              }}
            >
              <span className="text-2xl" role="img" aria-label={icon.label}>
                {icon.emoji}
              </span>
            </div>
          );
        })}

        {/* Growth arrow */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-14 flex flex-col items-center">
            <div className="w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-yellow-400"></div>
            <div className="w-2 h-10 bg-yellow-400"></div>
          </div>
        </div>
      </div>

      {/* Small floating decorative elements */}
      <div
        className="absolute w-3 h-3 bg-yellow-400 rounded-full top-1/4 left-1/6 animate-bounce"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute w-2 h-2 bg-teal-300 rounded-full bottom-1/3 right-1/4 animate-bounce"
        style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute w-4 h-4 bg-orange-300 rounded-full top-1/3 right-1/5 animate-bounce"
        style={{ animationDuration: "4s", animationDelay: "1s" }}
      ></div>
    </div>
  );
}
