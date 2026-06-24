"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cpu, Monitor, Zap, Settings } from "lucide-react";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/AnimatedSection";

const IndustrialAutomationControl = () => {
  const features = [
    {
      icon: Cpu,
      title: "PLC Programming",
      description:
        "Advanced ladder logic with modular programming and remote diagnostics capabilities",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      icon: Monitor,
      title: "HMI Programming",
      description:
        "Context-aware interfaces with augmented reality integration",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      icon: Zap,
      title: "VFD Optimization",
      description: "AI-driven motor control with energy consumption analytics",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      icon: Settings,
      title: "Panel Engineering",
      description: "IIoT-ready control panels with embedded diagnostics",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
    },
  ];

  const plcBrands = [
    {
      name: "Siemens",
      icon: "/images/siemens-logo.webp",
      description:
        "Expert programming for Siemens S7-1200, S7-1500, and TIA Portal systems.",
      accent: "from-blue-500 to-teal-400",
      border: "hover:border-blue-500/50",
    },
    {
      name: "Allen-Bradley",
      icon: "/images/allen-bradley-logo.webp",
      description:
        "Services for ControlLogix and CompactLogix PLCs with Studio 5000.",
      accent: "from-red-500 to-orange-400",
      border: "hover:border-red-500/40",
    },
    {
      name: "Mitsubishi",
      icon: "/images/mitsubishi-logo.webp",
      description:
        "Support for Mitsubishi FX and Q-series PLCs using GX Works.",
      accent: "from-red-600 to-indigo-500",
      border: "hover:border-red-500/40",
    },
    {
      name: "Schneider Electric",
      icon: "/images/schneider-logo.webp",
      description: "Programming for Modicon M580 and M340 with EcoStruxure.",
      accent: "from-green-500 to-emerald-400",
      border: "hover:border-green-500/40",
    },
  ];

  const additionalServices = [
    {
      title: "SCADA Systems",
      description:
        "Real-time monitoring and control with advanced SCADA solutions.",
      icon: "📡",
    },
    {
      title: "IoT Integration",
      description: "Smart automation through IoT device integration.",
      icon: "🔗",
    },
  ];

  return (
    <section
      id="automation"
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #1e40af 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-5">
              Automation & Control
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
              Precision Automation{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Engineered for Peak Performance
              </span>
            </h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto mb-8">
              Transform your industrial operations with cyber-physical systems
              that combine cutting-edge automation with intelligent control
              architectures.
            </p>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
            >
              Optimize Your Systems Now
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
            </Link>
          </div>
        </AnimatedSection>

        {/* Control Mastery — split layout */}
        <div className="mb-20 lg:mb-24">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
            <AnimatedSection variant="slideLeft" className="lg:w-2/5 mb-10 lg:mb-0">
              <div className="sticky top-24">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  Industrial Control Mastery
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  We architect automation ecosystems that merge OT and IT,
                  delivering cyber-secure solutions with real-time analytics and
                  predictive maintenance capabilities.
                </p>
                {/* Visual accent */}
                <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mb-6" />
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Request a custom solution
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>

            <StaggerContainer className="lg:w-3/5 grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <StaggerItem key={index}>
                    <div className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md hover:bg-white transition-all duration-300">
                      <div
                        className={`w-11 h-11 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}
                      >
                        <Icon className={`w-5 h-5 ${feature.color}`} />
                      </div>
                      <h4 className="text-base font-semibold text-slate-900 mb-1.5">
                        {feature.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>

        {/* PLC Brands */}
        <div className="mb-16 lg:mb-20">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Supported PLC Brands & Automation Services
              </h3>
              <p className="text-slate-500 max-w-2xl mx-auto text-sm lg:text-base">
                Lumora Ventures specializes in programming and servicing leading
                PLC brands with advanced automation solutions tailored to your
                industry.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-5 mb-6">
            {plcBrands.map((brand, index) => (
              <StaggerItem key={index}>
                <div
                  className={`group relative bg-white border border-slate-200 rounded-2xl p-6 ${brand.border} hover:shadow-lg transition-all duration-300 overflow-hidden`}
                >
                  {/* Top gradient accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${brand.accent}`}
                    aria-hidden="true"
                  />

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center p-2 relative flex-shrink-0">
                      <Image
                        src={brand.icon}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <h5 className="text-lg font-bold text-slate-900">
                      {brand.name}
                    </h5>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {brand.description}
                  </p>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Get a quote
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mb-12">
            <p className="text-slate-500 text-sm">
              We offer programming and integration for these and many more PLC brands.{" "}
              <span className="text-blue-600 font-medium">Contact us for any platform.</span>
            </p>
          </div>

          {/* Additional Services */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-5">
            {additionalServices.map((service, index) => (
              <StaggerItem key={index}>
                <div className="group relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-7 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" aria-hidden="true" />
                  <div className="relative z-10">
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h5 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h5>
                    <p className="text-blue-100 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white font-medium transition-colors"
                    >
                      Learn more
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="flex justify-center mt-10">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              Discuss Your Automation Needs
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialAutomationControl;
