import React from "react";

const IndustrialAutomationControl = () => {
  const features = [
    {
      icon: "🔄",
      title: "PLC Programming",
      description:
        "Advanced ladder logic with modular programming and remote diagnostics capabilities",
    },
    {
      icon: "💻",
      title: "HMI Programming",
      description:
        "Context-aware interfaces with augmented reality integration",
    },
    {
      icon: "⚡",
      title: "VFD Optimization",
      description: "AI-driven motor control with energy consumption analytics",
    },
    {
      icon: "🔧",
      title: "Panel Engineering",
      description: "IIoT-ready control panels with embedded diagnostics",
    },
  ];

  const plcBrands = [
    {
      name: "Siemens",
      description:
        "Expert programming for Siemens S7-1200, S7-1500, and TIA Portal systems.",
      gradient: "from-blue-600 to-teal-500",
    },
    {
      name: "Allen-Bradley",
      description:
        "Services for ControlLogix and CompactLogix PLCs with Studio 5000.",
      gradient: "from-red-600 to-red-500",
    },
    {
      name: "Mitsubishi",
      description:
        "Support for Mitsubishi FX and Q-series PLCs using GX Works.",
      gradient: "from-red-600 to-indigo-600",
    },
    {
      name: "Schneider Electric",
      description: "Programming for Modicon M580 and M340 with EcoStruxure.",
      gradient: "from-green-600 to-emerald-500",
    },
  ];

  const additionalServices = [
    {
      title: "SCADA Systems",
      description:
        "Real-time monitoring and control with advanced SCADA solutions.",
    },
    {
      title: "IoT Integration",
      description: "Smart automation through IoT device integration.",
    },
  ];

  return (
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Precision Automation Engineered for Peak Performance
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Transform your industrial operations with cyber-physical systems
            that combine cutting-edge automation with intelligent control
            architectures.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group">
            Optimize Your Systems Now
            <svg
              className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
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

        {/* Control Mastery Section */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 mb-16">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Industrial Control Mastery
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                We architect automation ecosystems that merge OT and IT,
                delivering cyber-secure solutions with real-time analytics and
                predictive maintenance capabilities.
              </p>
            </div>

            <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PLC Brands Section */}
        <div className="mb-24">
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-16">
            Supported PLC Brands and Automation Services
          </h3>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Lumora Ventures specializes in programming and servicing leading PLC
            brands and offers advanced automation solutions tailored to your
            industry.
          </p>

          <h4 className="text-xl font-semibold text-white mb-8 text-center">
            PLC Brands
          </h4>

          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            {plcBrands.map((brand, index) => (
              <div
                key={index}
                className="relative bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-lg p-8 hover:border-blue-400/50 transition-all duration-300 overflow-hidden group"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${brand.gradient}`}
                />

                {/* Brand Logo Placeholder */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-xl font-bold text-white">
                    {brand.name.charAt(0)}
                  </div>
                  <h5 className="text-xl font-bold text-white">{brand.name}</h5>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-semibold text-white mb-8 text-center">
            Additional Services
          </h4>

          <div className="grid sm:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-400/20 rounded-lg p-8 hover:border-blue-400/50 transition-all duration-300"
              >
                <h5 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h5>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      {/* Circuit Pattern */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        viewBox="0 0 1200 1200"
        preserveAspectRatio="none"
      >
        <pattern
          id="circuit-pattern"
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 30h30m0 0h30M30 0v30m0 0v30"
            stroke="currentColor"
            strokeWidth="1"
            className="text-blue-400/50"
            fill="none"
          />
          <circle cx="30" cy="30" r="3" className="fill-cyan-400/50" />
          <circle cx="0" cy="0" r="2" className="fill-blue-400/50" />
          <circle cx="60" cy="60" r="2" className="fill-blue-400/50" />
        </pattern>
        <rect
          x="0"
          y="0"
          width="1200"
          height="1200"
          fill="url(#circuit-pattern)"
        />
      </svg>
    </section>
  );
};

export default IndustrialAutomationControl;
