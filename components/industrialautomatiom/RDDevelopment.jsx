import React from "react";

const RDDevelopment = () => {
  const advancedTechnologies = [
    {
      icon: "🧠",
      title: "Cognitive HMI Systems",
      description: "Self-optimizing interfaces with predictive analytics",
    },
    {
      icon: "🤖",
      title: "AI-Driven VFD Controllers",
      description: "Neural network-optimized motor control algorithms",
    },
    {
      icon: "🌐",
      title: "Cyber-Physical Prototypes",
      description: "Digital twin-integrated control architectures",
    },
  ];

  const innovationMetrics = [
    {
      value: "6-8 Weeks",
      label: "Rapid Prototyping Cycles",
      gradient: "from-blue-600 to-cyan-400",
    },
    {
      value: "150%",
      label: "ROI on R&D Investments",
      gradient: "from-green-600 to-emerald-400",
    },
    {
      value: "24",
      label: "Patents Filed",
      gradient: "from-indigo-600 to-blue-400",
    },
  ];

  const methodology = [
    {
      phase: "1.",
      title: "Discovery Phase",
      description: "Requirements analysis & technology scouting",
    },
    {
      phase: "2.",
      title: "Concept Design",
      description: "System architecture & simulation",
    },
    {
      phase: "3.",
      title: "Prototyping",
      description: "Hardware-in-loop testing",
    },
    {
      phase: "4.",
      title: "Validation",
      description: "Industrial environment trials",
    },
  ];

  const industryImpact = [
    {
      sector: "Manufacturing",
      solution: "Predictive QC Systems",
    },
    {
      sector: "Energy",
      solution: "Smart Grid Controllers",
    },
    {
      sector: "Robotics",
      solution: "Autonomous Navigation",
    },
    {
      sector: "Chemicals",
      solution: "Reactive Process Control",
    },
  ];

  return (
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Control Systems Innovation
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Where Industrial Automation Meets Tomorrow
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto">
            Pioneering next-generation control architectures through advanced
            R&D in industrial automation, cyber-physical systems, and
            intelligent process optimization.
          </p>
        </div>

        {/* Advanced Control Technologies */}
        <div className="mb-24">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 text-center">
            Advanced Control Technologies
          </h3>
          <p className="text-lg text-gray-400 text-center mb-12">
            Our R&D lab develops adaptive control systems featuring:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {advancedTechnologies.map((tech, index) => (
              <div
                key={index}
                className="relative group bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-lg p-8 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {tech.title}
                  </h4>
                  <p className="text-gray-400">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Metrics */}
        <div className="mb-24">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-16 text-center">
            Innovation Metrics
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {innovationMetrics.map((metric, index) => (
              <div
                key={index}
                className="relative bg-black/60 backdrop-blur-sm border border-blue-400/30 rounded-lg p-8 text-center overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-10`}
                />

                <div className="relative z-10">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-3">
                    {metric.value}
                  </div>
                  <div className="text-gray-400">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* R&D Methodology */}
        <div className="mb-24">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-16 text-center">
            R&D Methodology
          </h3>

          <div className="grid lg:grid-cols-4 gap-6">
            {methodology.map((step, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-400/20 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{step.phase}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Impact */}
        <div className="mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-16 text-center">
            Industry Impact
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryImpact.map((impact, index) => (
              <div
                key={index}
                className="group relative bg-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />

                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-white mb-3">
                    {impact.sector}
                  </h4>
                  <p className="text-gray-400">{impact.solution}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-cyan-400/5 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />

      {/* DNA Helix Pattern */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        viewBox="0 0 1200 1200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,600 C200,500 400,700 600,600 C800,500 1000,700 1200,600"
          fill="none"
          stroke="url(#helixGradient)"
          strokeWidth="40"
          className="stroke-blue-500"
        />
        <path
          d="M0,600 C200,700 400,500 600,600 C800,700 1000,500 1200,600"
          fill="none"
          stroke="url(#helixGradient)"
          strokeWidth="40"
          className="stroke-cyan-400"
          transform="translate(0, 100)"
        />
        <defs>
          <linearGradient id="helixGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default RDDevelopment;
