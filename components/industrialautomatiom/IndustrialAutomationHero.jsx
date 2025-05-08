import React from "react";

const IndustrialAutomationHero = () => {
  const scrollToSection = (sectionId) => {
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-[100px]" />
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Industrial Evolution Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Smart Automation
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-8 max-w-2xl lg:max-w-none">
              Lumora Ventures delivers cutting-edge industrial automation
              solutions that redefine productivity and operational excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
              >
                Revolutionize Your Plant
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
                className="px-8 py-4 border border-blue-500 text-blue-500 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Explore Solutions
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative hidden lg:block h-[600px]">
            {/* Bar Chart Dashboard */}
            <div className="absolute top-0 left-0 w-64 h-48 bg-black/40 backdrop-blur-lg border border-blue-400/30 rounded-lg p-4 transform -rotate-6 transition-transform hover:rotate-3">
              <div className="flex justify-between items-end h-full">
                {[65, 85, 70, 95, 80].map((height, i) => (
                  <div
                    key={i}
                    className="w-8 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Network Visualization */}
            <div className="absolute top-20 right-0 w-72 h-72 rounded-full border-2 border-blue-400/40 flex items-center justify-center animate-pulse">
              <div className="absolute w-full h-full">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-8 h-8 bg-blue-500/40 rounded-full backdrop-blur-sm border border-blue-400/60"
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
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50" />
            </div>

            {/* Performance Metrics Card */}
            <div className="absolute bottom-0 left-10 w-64 h-40 bg-black/50 backdrop-blur-lg border border-cyan-400/30 rounded-lg p-4 transform rotate-3 transition-transform hover:-rotate-2">
              <div className="flex gap-2 mb-3">
                {[40, 60, 45, 80, 65, 90, 75].map((height, i) => (
                  <div
                    key={i}
                    className="w-6 bg-cyan-400/70 rounded"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="text-white/60 text-sm mb-2">
                Overall Performance
              </div>
              <div className="text-3xl font-bold text-white mb-1">89%</div>
              <div className="h-2 w-full bg-gray-700 rounded overflow-hidden">
                <div className="h-full w-[89%] bg-gradient-to-r from-blue-500 to-cyan-400" />
              </div>
            </div>

            {/* IoT Device Icons */}
            <div className="absolute bottom-32 right-32 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-400"
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
      <div className="absolute top-20 left-10 -z-10 opacity-20">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 border-2 border-blue-500 rounded-lg transform -rotate-12" />
          <div className="absolute inset-4 border-2 border-cyan-400 rounded-lg transform rotate-12" />
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
