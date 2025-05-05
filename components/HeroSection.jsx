"use client";
import React from "react";

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
`;

// This component also needs updated padding for large screens
const addedSpacing = "4xl:py-32 5xl:py-40";

const HeroSection = () => {
  // Add styles to head
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
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
      className="relative overflow-hidden min-h-screen flex items-center py-12 px-4 sm:px-6 lg:px-8 2xl:py-24 4xl:py-32"
      style={{
        background:
          "radial-gradient(circle at top left, #3B82F6 0%, #1E3A8A 50%, #0F172A 100%)",
      }}
    >
      {/* Background Geometric Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Cpath d='M8 8h64v64H8V8zM64 8H8h56zM8 72H8h56v-56z' /%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating Gradient Orbs - Responsive sizes */}
      <div className="absolute -top-40 -left-40 w-96 h-96 2xl:w-[800px] 2xl:h-[800px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 2xl:w-[800px] 2xl:h-[800px] bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl 2xl:max-w-[1600px] mx-auto w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 2xl:gap-24 items-center">
          {/* Content */}
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="block text-cyan-300 mt-2">
                Digital Excellence
              </span>
            </h1>

            <p className="text-lg sm:text-xl 2xl:text-2xl text-blue-100 mb-8 2xl:mb-12 leading-relaxed max-w-2xl">
              Boost your local presence, streamline operations, and drive
              sustainable growth with our innovative solutions.
            </p>

            <button
              onClick={() => scrollToSection("services")}
              className="group inline-flex items-center px-8 py-4 2xl:px-12 2xl:py-6 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base 2xl:text-lg"
            >
              Start Your Transformation
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
          </div>

          {/* Illustration */}
          <div className="mt-12 lg:mt-0 relative">
            <div className="relative max-w-lg 2xl:max-w-3xl mx-auto">
              {/* Background blur circle for depth */}
              <div className="absolute -inset-10 bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl" />

              {/* Hero illustration image */}
              <img
                src="/hero.png"
                alt="Digital transformation illustration"
                className="relative z-10 w-full h-auto"
              />

              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 2xl:w-24 2xl:h-24 rounded-lg bg-blue-300/20 backdrop-blur-sm transform rotate-12" />
              <div className="absolute -bottom-8 -left-8 w-20 h-20 2xl:w-28 2xl:h-28 rounded-lg bg-cyan-300/20 backdrop-blur-sm transform -rotate-12" />

              {/* Small floating elements */}
              <div className="absolute top-10 left-10 w-8 h-8 rounded-full bg-blue-400/30 animate-ping" />
              <div className="absolute bottom-10 right-10 w-6 h-6 rounded-full bg-cyan-400/30 animate-ping animation-delay-2000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
