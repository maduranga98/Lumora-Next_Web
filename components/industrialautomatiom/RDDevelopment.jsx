"use client";

import React from "react";
import Link from "next/link";
import Script from "next/script";
import { Brain, Bot, Globe } from "lucide-react";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/AnimatedSection";

const RDDevelopment = () => {
  const rdServicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Industrial Automation Research & Development",
    description:
      "Pioneering next-generation control architectures through advanced R&D in industrial automation, cyber-physical systems, and intelligent process optimization for manufacturing facilities.",
    provider: {
      "@type": "Organization",
      name: "Lumora Ventures",
      url: "https://www.lumoraventures.com",
    },
    serviceType: "Research & Development",
    areaServed: "Manufacturing and industrial facilities",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "R&D Innovation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cognitive HMI Systems Development",
            description:
              "Self-optimizing interfaces with predictive analytics for industrial automation systems.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI-Driven VFD Controllers",
            description:
              "Neural network-optimized motor control algorithms for manufacturing equipment.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cyber-Physical Prototypes",
            description:
              "Digital twin-integrated control architectures for factory automation.",
          },
        },
      ],
    },
  };

  const researchMethodSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Industrial Automation R&D Methodology",
    description:
      "Our systematic approach to research and development in industrial automation systems",
    step: [
      {
        "@type": "HowToStep",
        name: "Discovery Phase",
        text: "Requirements analysis & technology scouting for industrial automation innovation",
      },
      {
        "@type": "HowToStep",
        name: "Concept Design",
        text: "System architecture & simulation for manufacturing control systems",
      },
      {
        "@type": "HowToStep",
        name: "Prototyping",
        text: "Hardware-in-loop testing for industrial automation solutions",
      },
      {
        "@type": "HowToStep",
        name: "Validation",
        text: "Industrial environment trials for control system implementation",
      },
    ],
  };

  const advancedTechnologies = [
    {
      Icon: Brain,
      title: "Cognitive HMI Systems",
      description:
        "Self-optimizing interfaces with predictive analytics for manufacturing process optimization and operator efficiency",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      glow: "group-hover:shadow-blue-500/10",
    },
    {
      Icon: Bot,
      title: "AI-Driven VFD Controllers",
      description:
        "Neural network-optimized motor control algorithms for industrial efficiency and energy consumption reduction",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      glow: "group-hover:shadow-cyan-500/10",
    },
    {
      Icon: Globe,
      title: "Cyber-Physical Prototypes",
      description:
        "Digital twin-integrated control architectures for advanced industrial automation and smart manufacturing",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      glow: "group-hover:shadow-indigo-500/10",
    },
  ];

  const innovationMetrics = [
    {
      value: "6–8 Weeks",
      label: "Rapid Prototyping Cycles",
      icon: "⚡",
      accent: "from-blue-500 to-cyan-400",
    },
    {
      value: "150%",
      label: "ROI on R&D Investments",
      icon: "📈",
      accent: "from-emerald-500 to-teal-400",
    },
    {
      value: "24",
      label: "Automation Patents Filed",
      icon: "🏆",
      accent: "from-indigo-500 to-blue-400",
    },
  ];

  const methodology = [
    {
      phase: "01",
      title: "Discovery Phase",
      description:
        "Requirements analysis & technology scouting for industrial automation solutions",
    },
    {
      phase: "02",
      title: "Concept Design",
      description:
        "System architecture & simulation for manufacturing process control",
    },
    {
      phase: "03",
      title: "Prototyping",
      description: "Hardware-in-loop testing for industrial control systems",
    },
    {
      phase: "04",
      title: "Validation",
      description:
        "Industrial environment trials and implementation verification",
    },
  ];

  const industryImpact = [
    { sector: "Manufacturing", solution: "Predictive Quality Control Systems", icon: "🏭" },
    { sector: "Energy", solution: "Smart Grid Controllers for Industrial Applications", icon: "⚡" },
    { sector: "Robotics", solution: "Autonomous Navigation for Industrial Operations", icon: "🤖" },
    { sector: "Chemicals", solution: "Reactive Process Control Systems", icon: "🧪" },
  ];

  const scrollToSection = (sectionId, e) => {
    if (e) e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      window.scrollTo({ top: element.offsetTop - navHeight, behavior: "smooth" });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <>
      <Script
        id="rd-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rdServicesSchema) }}
      />
      <Script
        id="research-method-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchMethodSchema) }}
      />

      <section
        id="rd"
        className="relative bg-slate-950 py-24 lg:py-32 overflow-hidden"
        aria-labelledby="rd-heading"
      >
        {/* Background decoration */}
        <div
          className="absolute inset-0 opacity-5"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" aria-hidden="true" />
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          {/* Header */}
          <AnimatedSection>
            <header className="text-center mb-20">
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
                Research & Development
              </span>
              <h2
                id="rd-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Industrial Control Systems Innovation —{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                  Where Tomorrow's Manufacturing Begins
                </span>
              </h2>
              <p className="text-lg text-slate-400 max-w-4xl mx-auto">
                Pioneering next-generation control architectures through advanced
                research and development in industrial automation, cyber-physical
                systems, and intelligent process optimization for manufacturing
                excellence.
              </p>
            </header>
          </AnimatedSection>

          {/* Advanced Technologies */}
          <section aria-labelledby="advanced-tech-heading" className="mb-24">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h3
                  id="advanced-tech-heading"
                  className="text-2xl lg:text-3xl font-bold text-white mb-4"
                >
                  Advanced Industrial Control Technologies
                </h3>
                <p className="text-slate-400">
                  Our R&D lab develops adaptive control systems featuring:
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {advancedTechnologies.map(({ Icon, title, description, color, bg, border, glow }, index) => (
                <StaggerItem key={index}>
                  <li
                    className={`group relative bg-slate-900/60 border border-slate-800 hover:border-opacity-60 ${border.replace('border-', 'hover:border-')} rounded-2xl p-8 hover:shadow-xl ${glow} transition-all duration-300 backdrop-blur-sm`}
                    role="listitem"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl ${bg} border ${border} flex items-center justify-center mb-5`}>
                        <Icon className={`w-6 h-6 ${color}`} />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3">
                        {title}
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </li>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          {/* Innovation Metrics */}
          <section aria-labelledby="metrics-heading" className="mb-24">
            <h3
              id="metrics-heading"
              className="text-2xl lg:text-3xl font-bold text-white mb-12 text-center"
            >
              Innovation Metrics
            </h3>

            <ul className="grid md:grid-cols-3 gap-6" role="list">
              {innovationMetrics.map((metric, index) => (
                <li
                  key={index}
                  className="relative rounded-2xl overflow-hidden"
                  role="listitem"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.accent} opacity-10`} aria-hidden="true" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.accent} opacity-5`} aria-hidden="true" />
                  <div className="relative border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm bg-slate-900/60">
                    <div className="text-4xl mb-3">{metric.icon}</div>
                    <div className={`text-4xl lg:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${metric.accent}`}>
                      {metric.value}
                    </div>
                    <div className="text-slate-300 text-sm font-medium">
                      {metric.label}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* R&D Methodology */}
          <section aria-labelledby="methodology-heading" className="mb-24">
            <h3
              id="methodology-heading"
              className="text-2xl lg:text-3xl font-bold text-white mb-12 text-center"
            >
              Our R&D Methodology
            </h3>

            <ol className="grid lg:grid-cols-4 gap-5" role="list">
              {methodology.map((step, index) => (
                <li
                  key={index}
                  className="relative bg-slate-900/60 border border-slate-800 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300 backdrop-blur-sm"
                  role="listitem"
                >
                  {/* Connector line on desktop */}
                  {index < methodology.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-8 left-full w-5 h-px bg-gradient-to-r from-blue-500/40 to-transparent z-10"
                      aria-hidden="true"
                    />
                  )}
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600/30 to-blue-400/10 mb-4 select-none leading-none">
                    {step.phase}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Industry Impact */}
          <section aria-labelledby="industry-impact-heading" className="mb-12">
            <h3
              id="industry-impact-heading"
              className="text-2xl lg:text-3xl font-bold text-white mb-12 text-center"
            >
              R&D Impact by Sector
            </h3>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
              {industryImpact.map((impact, index) => (
                <li
                  key={index}
                  className="group relative bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 overflow-hidden backdrop-blur-sm"
                  role="listitem"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60"
                    aria-hidden="true"
                  />
                  <div className="relative z-10">
                    <div className="text-3xl mb-3">{impact.icon}</div>
                    <h4 className="text-base font-bold text-white mb-2">
                      {impact.sector}
                    </h4>
                    <p className="text-slate-400 text-sm mb-4">
                      {impact.solution}
                    </p>
                    <Link
                      href="#contact"
                      onClick={(e) => scrollToSection("contact", e)}
                      className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      aria-label={`Explore solutions for ${impact.sector}`}
                    >
                      Explore solutions
                      <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-center mt-12">
              <Link
                href="#contact"
                onClick={(e) => scrollToSection("contact", e)}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-105"
                aria-label="Contact us to discuss your industrial automation R&D needs"
              >
                Discuss Your Industrial R&D Project
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default RDDevelopment;
