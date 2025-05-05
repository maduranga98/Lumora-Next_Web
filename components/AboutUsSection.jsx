"use client";
import React from "react";

const AnimatedElement = ({
  children,
  delay = 0,
  className = "",
  type = "fadeInUp",
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
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
  }, [delay]);

  const getAnimationStyle = () => {
    if (!isVisible) return { opacity: 0 };

    const baseStyle = {
      opacity: 1,
      transition: "all 0.8s ease-out",
    };

    switch (type) {
      case "slideInLeft":
        return {
          ...baseStyle,
          transform: isVisible ? "translateX(0)" : "translateX(-50px)",
        };
      case "slideInRight":
        return {
          ...baseStyle,
          transform: isVisible ? "translateX(0)" : "translateX(50px)",
        };
      case "fadeInUp":
      default:
        return {
          ...baseStyle,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
        };
    }
  };

  return (
    <div ref={ref} className={className} style={getAnimationStyle()}>
      {children}
    </div>
  );
};

const AboutUsSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8 2xl:py-24 4xl:py-32"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute top-10 right-10 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 4xl:w-96 4xl:h-96 bg-blue-300 rounded-full opacity-20"
          style={{
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-10 left-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 4xl:w-64 4xl:h-64 bg-blue-200 rounded-full opacity-20"
          style={{
            animation: "float 6s ease-in-out infinite",
          }}
        />

        {/* Additional floating shapes */}
        <div
          className="absolute top-1/3 left-1/4 w-16 h-16 lg:w-24 lg:h-24 2xl:w-32 2xl:h-32 bg-blue-400/10 rounded-lg transform rotate-45"
          style={{
            animation: "float 6s ease-in-out infinite 1s",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-20 h-20 lg:w-28 lg:h-28 2xl:w-36 2xl:h-36 bg-blue-400/10 rounded-lg transform -rotate-12"
          style={{
            animation: "float 6s ease-in-out infinite 2s",
          }}
        />
      </div>

      <div className="relative max-w-7xl lg:max-w-[90rem] 2xl:max-w-[1600px] 4xl:max-w-[1800px] mx-auto w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 2xl:gap-24 4xl:gap-32 items-center">
          {/* Content Section */}
          <AnimatedElement
            type="slideInLeft"
            className="max-w-2xl lg:max-w-3xl 2xl:max-w-4xl 4xl:max-w-6xl mx-auto lg:mx-0"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl 4xl:text-6xl font-bold text-blue-900 mb-4 lg:mb-6 2xl:mb-8 4xl:mb-8">
              About Lumora Ventures
            </h2>

            <p className="text-lg sm:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl 4xl:text-2xl text-blue-700 mb-4 lg:mb-6 2xl:mb-6 4xl:mb-8 font-normal">
              Driving Business Growth Through Innovation
            </p>

            <div className="space-y-6 lg:space-y-8 2xl:space-y-10 4xl:space-y-12">
              <AnimatedElement delay={200} type="fadeInUp">
                <h3 className="text-base sm:text-lg lg:text-lg xl:text-xl 2xl:text-xl 4xl:text-xl font-semibold text-blue-800 mb-2 lg:mb-2 2xl:mb-3 4xl:mb-3">
                  Our Mission
                </h3>
                <p className="text-base sm:text-lg lg:text-lg xl:text-lg 2xl:text-lg 4xl:text-xl text-gray-800 leading-relaxed">
                  To empower businesses with scalable, user-friendly digital and
                  automation tools.
                </p>
              </AnimatedElement>

              <AnimatedElement delay={400} type="fadeInUp">
                <h3 className="text-base sm:text-lg lg:text-lg xl:text-xl 2xl:text-xl 4xl:text-xl font-semibold text-blue-800 mb-2 lg:mb-2 2xl:mb-3 4xl:mb-3">
                  Our Vision
                </h3>
                <p className="text-base sm:text-lg lg:text-lg xl:text-lg 2xl:text-lg 4xl:text-xl text-gray-800 leading-relaxed">
                  To be the leading partner for businesses seeking
                  transformative growth through innovation.
                </p>
              </AnimatedElement>
            </div>

            <AnimatedElement
              delay={600}
              type="fadeInUp"
              className="mt-8 lg:mt-10 2xl:mt-12 4xl:mt-16"
            >
              <button className="group inline-flex items-center px-6 py-3 lg:px-8 lg:py-4 xl:px-8 xl:py-4 2xl:px-8 2xl:py-4 4xl:px-10 4xl:py-5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm lg:text-base xl:text-base 2xl:text-base 4xl:text-base shadow-lg hover:shadow-xl">
                Learn More About Our Journey
                <svg
                  className="ml-2 w-4 h-4 lg:w-5 lg:h-5 2xl:w-5 2xl:h-5 4xl:w-5 4xl:h-5 transition-transform duration-300 group-hover:translate-x-1"
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
            className="mt-12 lg:mt-0 relative"
          >
            <div className="relative z-10 max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl 4xl:max-w-6xl mx-auto">
              {/* Glowing background effect */}
              <div className="absolute -inset-10 lg:-inset-20 2xl:-inset-32 bg-gradient-to-br from-blue-300/10 to-blue-500/10 rounded-full blur-3xl" />

              <img
                src="/about.png"
                alt="About Lumora Ventures illustration"
                className="relative z-10 w-full h-auto"
              />

              {/* Floating decorative elements around the image */}
              <div
                className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 2xl:-top-16 2xl:-right-16 w-12 h-12 lg:w-16 lg:h-16 2xl:w-24 2xl:h-24 bg-blue-400/10 rounded-full"
                style={{
                  animation: "float 6s ease-in-out infinite",
                }}
              />
              <div
                className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 2xl:-bottom-16 2xl:-left-16 w-8 h-8 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16 bg-blue-400/10 rounded-full"
                style={{
                  animation: "float 6s ease-in-out infinite 1s",
                }}
              />
            </div>
          </AnimatedElement>
        </div>
      </div>

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
    </section>
  );
};

export default AboutUsSection;
