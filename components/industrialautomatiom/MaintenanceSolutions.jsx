import React from "react";

const MaintenanceSolutions = () => {
  const maintenanceFramework = [
    {
      icon: "📈",
      title: "Predictive HMI Care",
      description: "AI-optimized interface health monitoring",
      stat: "60% fewer failures",
      gradient: "from-green-600 to-emerald-400",
    },
    {
      icon: "⚡",
      title: "VFD Longevity Programs",
      description: "Motor control optimization cycles",
      stat: "35% longer lifespan",
      gradient: "from-blue-600 to-cyan-400",
    },
    {
      icon: "🔍",
      title: "Panel Integrity Checks",
      description: "Thermal imaging & connection diagnostics",
      stat: "99.9% connection reliability",
      gradient: "from-indigo-600 to-violet-400",
    },
  ];

  const responseMetrics = [
    {
      value: "2h",
      title: "Critical Response",
      description: "Avg. Onsite Time",
      icon: "🚀",
    },
    {
      value: "15m",
      title: "Remote Support",
      description: "First Response",
      icon: "⏱️",
    },
    {
      value: "365",
      title: "Days/Year",
      description: "Coverage",
      icon: "🛡️",
    },
  ];

  return (
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Zero Downtime Guarantee
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Proactive Maintenance for Continuous Operations
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto mb-8">
            Our predictive maintenance ecosystem ensures 99.95% system
            availability through AI-driven monitoring and rapid-response
            engineering support.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group">
            Secure Your Operations Now
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

        {/* Smart Maintenance Framework */}
        <div className="mb-24">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-16 text-center">
            Smart Maintenance Framework
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {maintenanceFramework.map((item, index) => (
              <div
                key={index}
                className="relative group bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-lg p-8 hover:border-green-400/50 transition-all duration-300"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="inline-flex items-center gap-2 text-green-400 font-semibold">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    {item.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Performance */}
        <div className="mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 text-center">
            Response Performance
          </h3>
          <p className="text-gray-400 text-center mb-16">
            Our commitment to continuous operations
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {responseMetrics.map((metric, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-blue-400/30 rounded-lg p-8 text-center overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{metric.icon}</div>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-blue-400 mb-1">
                    {metric.title}
                  </div>
                  <div className="text-gray-400">{metric.description}</div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-blue-500/10 transform translate-x-12 -translate-y-12" />
              </div>
            ))}
          </div>
        </div>

        {/* Availability Guarantee Visualization */}
        <div className="relative bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-400/30 rounded-lg p-8 lg:p-12 mt-24 overflow-hidden">
          <div className="relative z-10 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              99.95% System Availability
            </h3>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-2 w-full max-w-2xl bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full w-[99.95%] bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" />
              </div>
            </div>
            <p className="text-gray-400 text-lg">
              That means less than 22 hours of downtime per year
            </p>
          </div>

          {/* Background elements */}
          <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-green-400/5 blur-xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-emerald-400/5 blur-2xl" />
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[120px]" />

      {/* Heartbeat Pattern */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        viewBox="0 0 1200 1200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,600 L200,600 C220,600 240,580 260,560 C280,540 300,560 320,580 C340,600 360,620 380,620 L600,620"
          className="stroke-green-400"
          strokeWidth="6"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M600,620 L800,620 C820,620 840,600 860,580 C880,560 900,580 920,600 C940,620 960,640 980,640 L1200,640"
          className="stroke-emerald-400"
          strokeWidth="6"
          fill="none"
          opacity="0.7"
        />
      </svg>
    </section>
  );
};

export default MaintenanceSolutions;
