"use client";
import React, { useState, useEffect } from "react";

const AnimatedElement = ({
  children,
  delay = 0,
  className = "",
  type = "fadeInUp",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = React.useRef(null);

  // First handle mounting to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Then handle visibility based on intersection
  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, isMounted]);

  // Initial style when server-rendered or not yet mounted
  // Changed from opacity: 0 to opacity: 1 for server rendering
  const baseStyle = {
    opacity: 1, // Make content visible by default
  };

  // Style for client-side only after mounting
  const getAnimationStyle = () => {
    if (!isMounted) return baseStyle;

    // Only apply animation transitions after mounting
    if (!isVisible) {
      // Starting animation state
      switch (type) {
        case "slideInLeft":
          return {
            opacity: 0,
            transform: "translateX(-50px)",
            transition: "all 0.8s ease-out",
          };
        case "slideInRight":
          return {
            opacity: 0,
            transform: "translateX(50px)",
            transition: "all 0.8s ease-out",
          };
        case "fadeInUp":
        default:
          return {
            opacity: 0,
            transform: "translateY(30px)",
            transition: "all 0.8s ease-out",
          };
      }
    }

    // Ending animation state (when visible)
    return {
      opacity: 1,
      transform: "translate(0)",
      transition: "all 0.8s ease-out",
    };
  };

  return (
    <div ref={ref} className={className} style={{ opacity: 1 }}>
      {/* Display children always, but with different animations */}
      {isMounted ? (
        <div style={getAnimationStyle()}>{children}</div>
      ) : (
        // Ensure content is visible on server render
        <div>{children}</div>
      )}
    </div>
  );
};

const AboutUsSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 min-h-screen flex items-center py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 px-4 sm:px-6 lg:px-8"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Overlay pattern for texture */}
        <div className="absolute inset-0 bg-blue-900/10"></div>

        <div
          className="absolute top-10 right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 bg-white/10 rounded-full backdrop-blur-md"
          style={{
            animation: isMounted ? "float 6s ease-in-out infinite" : "none",
          }}
        />
        <div
          className="absolute bottom-10 left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 bg-white/10 rounded-full backdrop-blur-md"
          style={{
            animation: isMounted ? "float 8s ease-in-out infinite" : "none",
          }}
        />

        {/* Additional floating shapes */}
        <div
          className="absolute top-1/3 left-1/4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 2xl:w-32 2xl:h-32 bg-white/5 rounded-lg transform rotate-45 backdrop-blur-sm"
          style={{
            animation: isMounted ? "float 7s ease-in-out infinite" : "none",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-28 lg:h-28 2xl:w-36 2xl:h-36 bg-white/5 rounded-lg transform -rotate-12 backdrop-blur-sm"
          style={{
            animation: isMounted ? "float 9s ease-in-out infinite" : "none",
          }}
        />
      </div>

      <div className="relative max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto w-full z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-16 2xl:gap-24 items-center">
          {/* Content Section */}
          <AnimatedElement
            type="slideInLeft"
            className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-none mx-auto lg:mx-0 lg:pr-6 xl:pr-10 2xl:pr-16"
          >
            <h2 className="font-montserrat text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-blue-900 mb-4 lg:mb-6 2xl:mb-8">
              About Lumora Ventures
            </h2>

            <p className="font-inter text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl text-blue-700 mb-6 md:mb-8 lg:mb-10 2xl:mb-12 font-normal">
              Driving Business Growth Through Innovation
            </p>

            <div className="space-y-6 md:space-y-8 lg:space-y-10 2xl:space-y-12">
              <AnimatedElement delay={200} type="fadeInUp">
                <h3 className="font-montserrat text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-semibold text-blue-800 mb-2 lg:mb-3 2xl:mb-4">
                  Our Mission
                </h3>
                <p className="font-inter text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl text-gray-800 leading-relaxed">
                  To empower businesses with scalable, user-friendly digital and
                  automation tools.
                </p>
              </AnimatedElement>

              <AnimatedElement delay={400} type="fadeInUp">
                <h3 className="font-montserrat text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-semibold text-blue-800 mb-2 lg:mb-3 2xl:mb-4">
                  Our Vision
                </h3>
                <p className="font-inter text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl text-gray-800 leading-relaxed">
                  To be the leading partner for businesses seeking
                  transformative growth through innovation.
                </p>
              </AnimatedElement>
            </div>

            <AnimatedElement
              delay={600}
              type="fadeInUp"
              className="mt-8 lg:mt-10 2xl:mt-12"
            >
              <button
                className="group inline-flex items-center px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 lg:px-8 lg:py-4 xl:px-10 xl:py-5 2xl:px-12 2xl:py-5 bg-blue-600 text-white font-montserrat font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl tracking-wide shadow-lg hover:shadow-xl"
                onClick={() => scrollToSection("services")}
              >
                Learn More About Our Journey
                <svg
                  className="ml-2 w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </AnimatedElement>
          </AnimatedElement>

          {/* Illustration Section */}
          <AnimatedElement
            delay={200}
            type="slideInRight"
            className="mt-12 lg:mt-0 relative lg:pl-6 xl:pl-10 2xl:pl-16"
          >
            <div className="relative z-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto">
              {/* Glowing background effect */}
              <div className="absolute -inset-10 lg:-inset-20 2xl:-inset-32 bg-gradient-to-br from-blue-300/10 to-blue-500/10 rounded-full blur-3xl" />

              {/* Show placeholder div during SSR to maintain layout */}
              {!isMounted ? (
                <div className="relative z-10 w-full aspect-[4/3] bg-blue-100/20 rounded-lg flex items-center justify-center">
                  <div className="text-blue-400">Loading image...</div>
                </div>
              ) : (
                <img
                  src="/about.png"
                  alt="About Lumora Ventures illustration"
                  className="relative z-10 w-full h-auto"
                />
              )}

              {/* Floating decorative elements around the image */}
              <div
                className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 2xl:-top-16 2xl:-right-16 w-12 h-12 lg:w-16 lg:h-16 2xl:w-24 2xl:h-24 bg-blue-400/10 rounded-full"
                style={{
                  animation: isMounted
                    ? "float 6s ease-in-out infinite"
                    : "none",
                }}
              />
              <div
                className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 2xl:-bottom-16 2xl:-left-16 w-8 h-8 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16 bg-blue-400/10 rounded-full"
                style={{
                  animation: isMounted
                    ? "float 6s ease-in-out infinite"
                    : "none",
                }}
              />
            </div>
          </AnimatedElement>
        </div>
      </div>

      {isMounted && (
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
        `}</style>
      )}
    </section>
  );
};

export default AboutUsSection;
