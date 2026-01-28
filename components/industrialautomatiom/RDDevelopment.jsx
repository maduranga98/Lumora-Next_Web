"use client";

import React from "react";
import Link from "next/link";
import Script from "next/script";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/AnimatedSection";

const RDDevelopment = () => {
  // Schema.org structured data for R&D services
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

  // Research methodologies structured data
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
      icon: "🧠",
      title: "Cognitive HMI Systems",
      description:
        "Self-optimizing interfaces with predictive analytics for manufacturing process optimization and operator efficiency",
      ariaLabel: "Cognitive HMI Systems icon",
    },
    {
      icon: "🤖",
      title: "AI-Driven VFD Controllers",
      description:
        "Neural network-optimized motor control algorithms for industrial efficiency and energy consumption reduction",
      ariaLabel: "AI-Driven VFD Controllers icon",
    },
    {
      icon: "🌐",
      title: "Cyber-Physical Prototypes",
      description:
        "Digital twin-integrated control architectures for advanced industrial automation and smart manufacturing",
      ariaLabel: "Cyber-Physical Prototypes icon",
    },
  ];

  const innovationMetrics = [
    {
      value: "6-8 Weeks",
      label: "Rapid Prototyping Cycles for Industrial Automation",
      gradient: "from-blue-600 to-cyan-400",
    },
    {
      value: "150%",
      label: "ROI on Industrial R&D Investments",
      gradient: "from-green-600 to-emerald-400",
    },
    {
      value: "24",
      label: "Industrial Automation Patents Filed",
      gradient: "from-indigo-600 to-blue-400",
    },
  ];

  const methodology = [
    {
      phase: "1.",
      title: "Discovery Phase",
      description:
        "Requirements analysis & technology scouting for industrial automation solutions",
    },
    {
      phase: "2.",
      title: "Concept Design",
      description:
        "System architecture & simulation for manufacturing process control",
    },
    {
      phase: "3.",
      title: "Prototyping",
      description: "Hardware-in-loop testing for industrial control systems",
    },
    {
      phase: "4.",
      title: "Validation",
      description:
        "Industrial environment trials and implementation verification",
    },
  ];

  const industryImpact = [
    {
      sector: "Manufacturing",
      solution: "Predictive Quality Control Systems",
    },
    {
      sector: "Energy",
      solution: "Smart Grid Controllers for Industrial Applications",
    },
    {
      sector: "Robotics",
      solution: "Autonomous Navigation for Industrial Operations",
    },
    {
      sector: "Chemicals",
      solution: "Reactive Process Control Systems for Manufacturing",
    },
  ];

  // Function to handle scrolling with SEO benefits
  const scrollToSection = (sectionId, e) => {
    if (e) e.preventDefault();

    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // navbar height
      const offsetPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash for better SEO and shareability
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <>
      {/* Add structured data for search engines */}
      <Script
        id="rd-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rdServicesSchema) }}
      />
      <Script
        id="research-method-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(researchMethodSchema),
        }}
      />

      <section
        id="rd"
        className="relative bg-black py-20 lg:py-32 overflow-hidden"
        aria-labelledby="rd-heading"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          {/* Hero Section with semantic HTML */}
          <AnimatedSection>
            <header className="text-center mb-20">
              <h2
                id="rd-heading"
                className="text-3xl lg:text-5xl font-bold text-white mb-6"
              >
                Industrial Control Systems Innovation
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Where Industrial Automation Meets Tomorrow's Manufacturing
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto">
                Pioneering next-generation control architectures through advanced
                research and development in industrial automation, cyber-physical
                systems, and intelligent process optimization for manufacturing
                excellence.
              </p>
            </header>
          </AnimatedSection>

          {/* Advanced Control Technologies - with semantic list structure */}
          <section aria-labelledby="advanced-tech-heading" className="mb-24">
            <AnimatedSection>
              <h3
                id="advanced-tech-heading"
                className="text-2xl lg:text-3xl font-bold text-white mb-4 text-center"
              >
                Advanced Industrial Control Technologies
              </h3>
              <p className="text-lg text-gray-400 text-center mb-12">
                Our industrial automation R&D lab develops adaptive control
                systems featuring:
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {advancedTechnologies.map((tech, index) => (
                <StaggerItem key={index}>
                <li
                  className="relative group bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-lg p-8 hover:border-blue-400/50 transition-all duration-300"
                  role="listitem"
                >
                  <div
                    className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <span
                      className="text-4xl mb-4"
                      role="img"
                      aria-label={tech.ariaLabel}
                    >
                      {tech.icon}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-3">
                      {tech.title}
                    </h4>
                    <p className="text-gray-400">{tech.description}</p>
                  </div>
                </li>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          {/* Innovation Metrics - with better semantic structure */}
          <section aria-labelledby="metrics-heading" className="mb-24">
            <h3
              id="metrics-heading"
              className="text-2xl lg:text-3xl font-bold text-white mb-16 text-center"
            >
              Industrial Automation Innovation Metrics
            </h3>

            <ul className="grid md:grid-cols-3 gap-8" role="list">
              {innovationMetrics.map((metric, index) => (
                <li
                  key={index}
                  className="relative bg-black/60 backdrop-blur-sm border border-blue-400/30 rounded-lg p-8 text-center overflow-hidden"
                  role="listitem"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-10`}
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-3">
                      {metric.value}
                    </div>
                    <div className="text-gray-400">{metric.label}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* R&D Methodology - with semantic list and proper labeling */}
          <section aria-labelledby="methodology-heading" className="mb-24">
            <h3
              id="methodology-heading"
              className="text-2xl lg:text-3xl font-bold text-white mb-16 text-center"
            >
              Industrial Automation R&D Methodology
            </h3>

            <ol className="grid lg:grid-cols-4 gap-6" role="list">
              {methodology.map((step, index) => (
                <li
                  key={index}
                  className="relative bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-400/20 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300"
                  role="listitem"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <span className="text-white font-bold">{step.phase}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Industry Impact - with better semantic structure and links */}
          <section aria-labelledby="industry-impact-heading" className="mb-12">
            <h3
              id="industry-impact-heading"
              className="text-2xl lg:text-3xl font-bold text-white mb-16 text-center"
            >
              Industrial Automation R&D Impact by Sector
            </h3>

            <ul
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              role="list"
            >
              {industryImpact.map((impact, index) => (
                <li
                  key={index}
                  className="group relative bg-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
                  role="listitem"
                >
                  <div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-white mb-3">
                      {impact.sector} Industrial Applications
                    </h4>
                    <p className="text-gray-400">{impact.solution}</p>
                    <Link
                      href="#contact"
                      onClick={(e) => scrollToSection("contact", e)}
                      className="mt-4 inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors"
                      aria-label={`Learn more about ${impact.solution} for ${impact.sector} applications`}
                    >
                      Explore {impact.sector} solutions
                      <svg
                        className="w-3 h-3 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>

                  {/* Hover Effect - marked as decorative */}
                  <div
                    className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-cyan-400/5 transform scale-0 group-hover:scale-100 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>

            <div className="flex justify-center mt-10">
              <Link
                href="#contact"
                onClick={(e) => scrollToSection("contact", e)}
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group text-sm lg:text-base"
                aria-label="Contact us to discuss your industrial automation R&D needs"
              >
                Discuss Your Industrial R&D Project
                <svg
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
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
          </section>
        </div>

        {/* Background Elements - marked as decorative */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        {/* DNA Helix Pattern - with accessibility attributes */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
          viewBox="0 0 1200 1200"
          preserveAspectRatio="none"
          aria-hidden="true"
          role="presentation"
        >
          <title>DNA Helix Pattern</title>
          <desc>
            Decorative DNA double helix pattern representing innovation and
            research in industrial automation
          </desc>
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
            <linearGradient
              id="helixGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </section>
    </>
  );
};

export default RDDevelopment;
