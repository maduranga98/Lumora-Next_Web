// components/HeroSection.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Optimize animations with reduced CSS footprint
const styles = `
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animation-delay-2000 {
  animation-delay: 2s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-100px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(100px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInUp {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
.animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
.animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
.animate-slideInUp { animation: slideInUp 0.8s ease-out forwards; }
.animate-scaleIn { animation: scaleIn 0.8s ease-out forwards; }

.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-300 { animation-delay: 300ms; }
.animation-delay-400 { animation-delay: 400ms; }
.animation-delay-500 { animation-delay: 500ms; }
.animation-delay-600 { animation-delay: 600ms; }
.animation-delay-700 { animation-delay: 700ms; }

@media (min-width: 1920px) {
  .text-4xl\\:leading-tight { line-height: 1.1; }
  .text-5xl\\:leading-tight { line-height: 1.1; }
}

@media (min-width: 2560px) {
  .text-7xl\\:leading-tight { line-height: 1.1; }
}

/* Add reduced motion preference support */
@media (prefers-reduced-motion: reduce) {
  .animate-fadeIn, 
  .animate-slideInLeft, 
  .animate-slideInRight, 
  .animate-slideInUp, 
  .animate-scaleIn {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
`;

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const styleRef = useRef(null);

  // Add styles to head with performance optimizations
  useEffect(() => {
    setIsMounted(true);

    // Only create and append stylesheet once
    if (!styleRef.current) {
      const styleSheet = document.createElement("style");
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);
      styleRef.current = styleSheet;
    }

    // Set initial width with throttling
    setWindowWidth(window.innerWidth);

    // Throttled resize handler for better performance
    let resizeTimer;
    const handleResize = () => {
      if (!resizeTimer) {
        resizeTimer = setTimeout(() => {
          setWindowWidth(window.innerWidth);
          resizeTimer = null;
        }, 100);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
        styleRef.current = null;
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
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

  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Business Transformation Services | Lumora Ventures",
    description:
      "Transform your business with digital excellence. Boost local presence, streamline operations, and drive sustainable growth with innovative automation solutions.",
    url: "https://www.lumoraventures.com/",
    mainEntity: {
      "@type": "Service",
      name: "Business Transformation Services",
      provider: {
        "@type": "Organization",
        name: "Lumora Ventures",
        url: "https://www.lumoraventures.com/",
      },
      description:
        "Digital business transformation and automation solutions to streamline operations and drive sustainable growth.",
    },
  };

  return (
    <>
      {/* Add structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section
        id="home"
        className="relative overflow-hidden min-h-screen flex items-center py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 px-4 sm:px-6 lg:px-8"
        style={{
          background:
            "radial-gradient(circle at top left, #3B82F6 0%, #1E3A8A 50%, #0F172A 100%)",
        }}
        aria-label="Business transformation solutions"
      >
        {/* Floating Gradient Orbs - Responsive sizes with animation */}
        <div
          className={`absolute -top-20 sm:-top-30 lg:-top-40 -left-20 sm:-left-30 lg:-left-40 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px] bg-blue-500/20 rounded-full blur-3xl ${
            isMounted ? "animate-fadeIn" : "opacity-0"
          }`}
          style={{ animationDelay: "200ms" }}
          aria-hidden="true"
        />
        <div
          className={`absolute -bottom-20 sm:-bottom-30 lg:-bottom-40 -right-20 sm:-right-30 lg:-right-40 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px] bg-indigo-500/20 rounded-full blur-3xl ${
            isMounted ? "animate-fadeIn" : "opacity-0"
          }`}
          style={{ animationDelay: "300ms" }}
          aria-hidden="true"
        />

        <div className="relative w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-6 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 2xl:gap-20 items-center">
            {/* Content with slide-in animation and enhanced SEO content */}
            <div className="text-center lg:text-left max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-none mx-auto lg:mx-0 lg:pr-4 xl:pr-8 2xl:pr-12">
              <h1
                className={`font-montserrat text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight ${
                  isMounted ? "animate-slideInLeft" : "opacity-0"
                }`}
                style={{ animationDelay: "300ms" }}
              >
                Transform Your Business with{" "}
                <span
                  className={`block text-cyan-300 mt-1 sm:mt-2 ${
                    isMounted ? "animate-slideInLeft" : "opacity-0"
                  }`}
                  style={{ animationDelay: "500ms" }}
                >
                  Digital Excellence by Lumora Ventures
                </span>
              </h1>

              <p
                className={`font-inter text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl text-blue-100 mb-6 sm:mb-7 md:mb-8 lg:mb-8 xl:mb-10 2xl:mb-12 leading-relaxed max-w-xl lg:max-w-2xl 2xl:max-w-3xl ${
                  isMounted ? "animate-slideInLeft" : "opacity-0"
                }`}
                style={{ animationDelay: "700ms" }}
              >
                Boost your local presence, streamline operations, and drive
                sustainable growth with our innovative digital transformation
                and automation solutions.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`group inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3 lg:px-7 lg:py-3.5 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 bg-white text-blue-600 font-montserrat font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg tracking-wide ${
                    isMounted ? "animate-slideInUp" : "opacity-0"
                  }`}
                  style={{ animationDelay: "1000ms" }}
                  aria-label="Explore our business automation solutions"
                >
                  Start Your Transformation
                  <svg
                    className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>

                {/* Add secondary CTA for better conversion options */}
                <button
                  onClick={() => scrollToSection("services")}
                  className={`group inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3 lg:px-7 lg:py-3.5 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 bg-transparent border-2 border-white text-white font-montserrat font-semibold rounded-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg tracking-wide ${
                    isMounted ? "animate-slideInUp" : "opacity-0"
                  }`}
                  style={{ animationDelay: "1000ms" }}
                  aria-label="Contact us about our solutions"
                >
                  Our Solutions
                </button>
              </div>
            </div>

            {/* Illustration with slide-in animation and optimized image */}
            <div
              className={`mt-10 sm:mt-12 md:mt-12 lg:mt-0 relative lg:pl-4 xl:pl-8 2xl:pl-12 ${
                isMounted ? "animate-slideInRight" : "opacity-0"
              }`}
              style={{ animationDelay: "600ms" }}
            >
              <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl mx-auto">
                {/* Background blur circle for depth */}
                <div
                  className={`absolute -inset-6 sm:-inset-8 md:-inset-10 bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl ${
                    isMounted ? "animate-scaleIn" : "opacity-0"
                  }`}
                  style={{ animationDelay: "800ms" }}
                  aria-hidden="true"
                />

                {/* Hero illustration image - Replaced with Next.js Image component */}
                <div className="relative z-10 w-full">
                  <Image
                    src="/hero.webp"
                    alt="Digital business transformation and automation illustration showing growth and efficiency"
                    width={600}
                    height={450}
                    priority={true}
                    className={`w-full h-auto ${
                      isMounted ? "animate-fadeIn" : "opacity-0"
                    }`}
                    style={{ animationDelay: "900ms" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </div>

                {/* Decorative elements - scaled based on screen size with animations */}
                <div
                  className={`absolute -top-4 -right-4 sm:-top-5 sm:-right-5 md:-top-6 md:-right-6 lg:-top-8 lg:-right-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-lg bg-blue-300/20 backdrop-blur-sm transform rotate-12 ${
                    isMounted ? "animate-fadeIn" : "opacity-0"
                  }`}
                  style={{ animationDelay: "1000ms" }}
                  aria-hidden="true"
                />
                <div
                  className={`absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 md:-bottom-6 md:-left-6 lg:-bottom-8 lg:-left-8 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 rounded-lg bg-cyan-300/20 backdrop-blur-sm transform -rotate-12 ${
                    isMounted ? "animate-fadeIn" : "opacity-0"
                  }`}
                  style={{ animationDelay: "1100ms" }}
                  aria-hidden="true"
                />

                {/* Small floating elements */}
                <div
                  className={`absolute top-6 left-6 sm:top-8 sm:left-8 md:top-10 md:left-10 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 rounded-full bg-blue-400/30 ${
                    isMounted ? "animate-ping" : "opacity-0"
                  }`}
                  style={{ animationDelay: "1300ms" }}
                  aria-hidden="true"
                />
                <div
                  className={`absolute bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 rounded-full bg-cyan-400/30 ${
                    isMounted
                      ? "animate-ping animation-delay-2000"
                      : "opacity-0"
                  }`}
                  style={{ animationDelay: "1500ms" }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Add trust badges/indicators for social proof */}
          {/* <div
            className={`mt-12 lg:mt-16 text-center ${
              isMounted ? "animate-fadeIn" : "opacity-0"
            }`}
            style={{ animationDelay: "1100ms" }}
          >
            <p className="text-blue-100 text-xs sm:text-xs mb-4 font-medium uppercase tracking-wide">
              Trusted by businesses across industries
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 opacity-80">
              <div className="w-16 h-8 sm:w-20 sm:h-10 bg-white/20 rounded-md"></div>
              <div className="w-16 h-8 sm:w-20 sm:h-10 bg-white/20 rounded-md"></div>
              <div className="w-16 h-8 sm:w-20 sm:h-10 bg-white/20 rounded-md"></div>
              <div className="w-16 h-8 sm:w-20 sm:h-10 bg-white/20 rounded-md"></div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
