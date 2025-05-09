import React, { useEffect, useState } from "react";

const IndustrialAutomationHero = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSection = (sectionId) => {
    if (!isMounted) return;

    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-blue-500/20 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-40 md:w-52 lg:w-64 h-32 sm:h-40 md:h-52 lg:h-64 bg-cyan-400/20 rounded-full blur-[80px] md:blur-[100px]" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(34, 197, 94, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgb(34, 197, 94, 0.1) 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Industrial Evolution Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Smart Automation
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl xl:text-2xl text-gray-400 mb-6 sm:mb-8 max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
              Lumora Ventures delivers cutting-edge industrial automation
              solutions that redefine productivity and operational excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium sm:font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group text-sm sm:text-base md:text-lg xl:text-xl"
              >
                Revolutionize Your Plant
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 transition-transform group-hover:translate-x-1"
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

              <button
                onClick={() => scrollToSection("automation")}
                className="px-6 sm:px-8 py-3 sm:py-4 border border-blue-500 text-blue-500 hover:bg-blue-500/10 font-medium sm:font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base md:text-lg xl:text-xl"
              >
                Explore Solutions
              </button>
            </div>
          </div>

          {/* Illustration - Visible on all screens now */}
          <div className="relative h-[280px] sm:h-[320px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] mx-auto lg:mx-0 max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] w-full mt-8 lg:mt-0">
            {/* Bar Chart Dashboard */}
            <div className="absolute top-0 left-0 w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 2xl:w-80 h-32 sm:h-36 md:h-40 lg:h-48 xl:h-52 2xl:h-56 bg-black/40 backdrop-blur-lg border border-blue-400/30 rounded-lg p-3 sm:p-4 transform -rotate-6 transition-transform hover:rotate-3">
              <div className="flex justify-between items-end h-full">
                {[65, 85, 70, 95, 80].map((height, i) => (
                  <div
                    key={i}
                    className="w-5 sm:w-6 md:w-7 lg:w-8 xl:w-9 2xl:w-10 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Network Visualization */}
            <div className="absolute top-12 sm:top-16 md:top-20 right-0 w-40 sm:w-48 md:w-56 lg:w-72 xl:w-80 2xl:w-96 h-40 sm:h-48 md:h-56 lg:h-72 xl:h-80 2xl:h-96 rounded-full border-2 border-blue-400/40 flex items-center justify-center animate-pulse">
              <div className="absolute w-full h-full">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-5 sm:w-6 md:w-7 lg:w-8 xl:w-9 2xl:w-10 h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 2xl:h-10 bg-blue-500/40 rounded-full backdrop-blur-sm border border-blue-400/60"
                    style={{
                      top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                      left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="absolute w-full h-full rounded-full border-2 border-cyan-400/40 animate-ping" />
                  </div>
                ))}
              </div>
              <div className="w-10 sm:w-12 md:w-14 lg:w-16 xl:w-20 2xl:w-24 h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50" />
            </div>

            {/* Performance Metrics Card */}
            <div className="absolute bottom-0 left-5 sm:left-8 md:left-10 w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 2xl:w-80 h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44 2xl:h-48 bg-black/50 backdrop-blur-lg border border-cyan-400/30 rounded-lg p-3 sm:p-4 transform rotate-3 transition-transform hover:-rotate-2">
              <div className="flex gap-1 sm:gap-1.5 md:gap-2 mb-2 sm:mb-3">
                {[40, 60, 45, 80, 65, 90, 75].map((height, i) => (
                  <div
                    key={i}
                    className="w-3 sm:w-4 md:w-5 lg:w-6 xl:w-7 2xl:w-8 bg-cyan-400/70 rounded"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="text-white/60 text-xs sm:text-sm xl:text-base 2xl:text-lg mb-1 sm:mb-2">
                Overall Performance
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-1">
                89%
              </div>
              <div className="h-1.5 sm:h-2 xl:h-2.5 2xl:h-3 w-full bg-gray-700 rounded overflow-hidden">
                <div className="h-full w-[89%] bg-gradient-to-r from-blue-500 to-cyan-400" />
              </div>
            </div>

            {/* IoT Device Icons */}
            <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 lg:bottom-32 right-20 sm:right-24 md:right-28 lg:right-32 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 sm:w-6 md:w-7 lg:w-8 h-5 sm:h-6 md:h-7 lg:h-8 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            {/* Connection Lines */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              viewBox="0 0 600 600"
            >
              <path
                d="M100,100 Q300,200 500,400"
                className="stroke-blue-400/30 fill-none"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <path
                d="M300,50 Q450,250 200,500"
                className="stroke-cyan-400/30 fill-none"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative 3D Elements */}
      <div className="absolute top-10 sm:top-16 md:top-20 left-4 sm:left-6 md:left-10 -z-10 opacity-20">
        <div className="relative w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32">
          <div className="absolute inset-0 border-2 border-blue-500 rounded-lg transform -rotate-12" />
          <div className="absolute inset-2 sm:inset-3 md:inset-4 border-2 border-cyan-400 rounded-lg transform rotate-12" />
        </div>
      </div>

      {/* Circuit Pattern */}
      <svg
        className="absolute bottom-0 right-0 w-1/3 opacity-5"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 200h50m50 0h50m0 0h50m0 0h50M200 0v50m0 50v50m0 0v50m0 0v50"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-500"
        />
        <circle cx="100" cy="200" r="10" className="fill-blue-500" />
        <circle cx="200" cy="100" r="10" className="fill-cyan-400" />
        <circle cx="300" cy="200" r="10" className="fill-blue-500" />
        <circle cx="200" cy="300" r="10" className="fill-cyan-400" />
      </svg>
    </section>
  );
};

export default IndustrialAutomationHero;
