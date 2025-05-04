import React from "react";

const ServiceOverview = () => {
  const services = [
    {
      icon: "⚡",
      title: "Industrial Automation & Control",
      description:
        "Custom solutions with PLC programming, HMI programming, VFD programming, and panel wiring.",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      icon: "🔬",
      title: "R&D Innovation Labs",
      description:
        "Future-proof automation technologies and system optimization R&D.",
      gradient: "from-cyan-600 to-cyan-400",
    },
    {
      icon: "🛡️",
      title: "Proactive Maintenance",
      description: "24/7 monitoring and predictive maintenance agreements.",
      gradient: "from-indigo-600 to-blue-400",
    },
  ];

  return (
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-lg p-8 hover:border-blue-400/50 transition-all duration-300 hover:translate-y-[-4px]"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 rounded-lg bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-[-8px] right-[-8px] w-8 h-8 bg-blue-400/10 rounded-full transform rotate-45" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-blue-900/80 via-indigo-900/60 to-black/80 backdrop-blur-sm border border-blue-400/30 rounded-lg p-8 lg:p-12 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 overflow-hidden">
            <div className="absolute top-[-16px] left-[-16px] w-16 h-16 bg-cyan-400/10 rounded-full" />
          </div>
          <div className="absolute bottom-0 right-0 w-48 h-48 overflow-hidden">
            <div className="absolute bottom-[-24px] right-[-24px] w-24 h-24 bg-blue-400/10 rounded-full" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready for Industry 5.0 Transformation?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl">
                Partner with Lumora Ventures to implement automation solutions
                that deliver up to 200% ROI within 18 months.
              </p>
            </div>

            <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group">
              Schedule Free Consultation
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
        </div>
      </div>

      {/* Circuit Pattern */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 50h50v50h50M50 0v50h50"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-400"
              fill="none"
            />
            <circle cx="50" cy="50" r="5" className="fill-cyan-400" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="1000" height="1000" fill="url(#circuit)" />
      </svg>
    </section>
  );
};

export default ServiceOverview;
