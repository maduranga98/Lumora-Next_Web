// components/HeroSection.jsx
"use client";
import React, { useState, useEffect } from "react";

// Add animation delay CSS
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
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slideInLeft {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slideInRight {
  animation: slideInRight 0.8s ease-out forwards;
}

.animate-slideInUp {
  animation: slideInUp 0.8s ease-out forwards;
}

.animate-scaleIn {
  animation: scaleIn 0.8s ease-out forwards;
}

.animation-delay-100 {
  animation-delay: 100ms;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-700 {
  animation-delay: 700ms;
}

@media (min-width: 1920px) {
  .text-4xl\\:leading-tight {
    line-height: 1.1;
  }
  
  .text-5xl\\:leading-tight {
    line-height: 1.1;
  }
}

@media (min-width: 2560px) {
  .text-7xl\\:leading-tight {
    line-height: 1.1;
  }
}
`;

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Add styles to head
  useEffect(() => {
    setIsMounted(true);
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    // Set initial width
    setWindowWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.head.removeChild(styleSheet);
      window.removeEventListener("resize", handleResize);
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

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "radial-gradient(circle at top left, #3B82F6 0%, #1E3A8A 50%, #0F172A 100%)",
      }}
      role="banner"
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
          {/* Content with slide-in animation */}
          <div className="text-center lg:text-left max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-none mx-auto lg:mx-0 lg:pr-4 xl:pr-8 2xl:pr-12">
            <h1
              className={`font-montserrat text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight ${
                isMounted ? "animate-slideInLeft" : "opacity-0"
              }`}
              style={{ animationDelay: "300ms" }}
            >
              Transform Your Business with
              <span
                className={`block text-cyan-300 mt-1 sm:mt-2 ${
                  isMounted ? "animate-slideInLeft" : "opacity-0"
                }`}
                style={{ animationDelay: "500ms" }}
              >
                Digital Excellence
              </span>
            </h1>

            <p
              className={`font-inter text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl text-blue-100 mb-6 sm:mb-7 md:mb-8 lg:mb-8 xl:mb-10 2xl:mb-12 leading-relaxed max-w-xl lg:max-w-2xl 2xl:max-w-3xl ${
                isMounted ? "animate-slideInLeft" : "opacity-0"
              }`}
              style={{ animationDelay: "700ms" }}
            >
              Boost your local presence, streamline operations, and drive
              sustainable growth with our innovative automation solutions.
            </p>

            <button
              onClick={() => scrollToSection("services")}
              className={`group inline-flex items-center px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-3.5 lg:px-8 lg:py-4 xl:px-10 xl:py-5 2xl:px-12 2xl:py-6 bg-white text-blue-600 font-montserrat font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl tracking-wide ${
                isMounted ? "animate-slideInUp" : "opacity-0"
              }`}
              style={{ animationDelay: "900ms" }}
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
          </div>

          {/* Illustration with slide-in animation */}
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

              {/* Hero illustration image */}
              <img
                src="/hero.png"
                alt="Digital business transformation and automation illustration showing growth and efficiency"
                className={`relative z-10 w-full h-auto ${
                  isMounted ? "animate-fadeIn" : "opacity-0"
                }`}
                style={{ animationDelay: "900ms" }}
                width="600"
                height="450"
              />

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
                  isMounted ? "animate-ping animation-delay-2000" : "opacity-0"
                }`}
                style={{ animationDelay: "1500ms" }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
