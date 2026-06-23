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
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: "Cognitive HMI Systems",
      description:
        "Self-optimizing interfaces with predictive analytics for manufacturing process optimization and operator efficiency",
    },
    {
      icon: <Bot className="w-6 h-6 text-blue-600" />,
      title: "AI-Driven VFD Controllers",
      description:
        "Neural network-optimized motor control algorithms for industrial efficiency and energy consumption reduction",
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "Cyber-Physical Prototypes",
      description:
        "Digital twin-integrated control architectures for advanced industrial automation and smart manufacturing",
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
        className="relative bg-gray-50 py-20 lg:py-32 overflow-hidden"
        aria-labelledby="rd-heading"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          {/* Hero Section */}
          <AnimatedSection>
            <header className="text-center mb-20">
              <h2
                id="rd-heading"
                className="text-3xl lg:text-5xl font-bold text-blue-900 mb-6"
              >
                Industrial Control Systems Innovation
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Where Industrial Automation Meets Tomorrow's Manufacturing
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
                Pioneering next-generation control architectures through advanced
                research and development in industrial automation, cyber-physical
                systems, and intelligent process optimization for manufacturing
                excellence.
              </p>
            </header>
          </AnimatedSection>

          {/* Advanced Control Technologies */}
          <section aria-labelledby="advanced-tech-heading" className="mb-24">
            <AnimatedSection>
              <h3
                id="advanced-tech-heading"
                className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4 text-center"
              >
                Advanced Industrial Control Technologies
              </h3>
              <p className="text-lg text-gray-600 text-center mb-12">
                Our industrial automation R&D lab develops adaptive control
                systems featuring:
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {advancedTechnologies.map((tech, index) => (
                <StaggerItem key={index}>
                <li
                  className="relative group bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                  role="listitem"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                      {tech.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {tech.title}
                    </h4>
                    <p className="text-gray-600">{tech.description}</p>
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
              className="text-2xl lg:text-3xl font-bold text-blue-900 mb-16 text-center"
            >
              Industrial Automation Innovation Metrics
            </h3>

            <ul className="grid md:grid-cols-3 gap-8" role="list">
              {innovationMetrics.map((metric, index) => (
                <li
                  key={index}
                  className="relative bg-blue-900 rounded-xl p-8 text-center overflow-hidden"
                  role="listitem"
                >
                  <div className="relative z-10">
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-3">
                      {metric.value}
                    </div>
                    <div className="text-blue-200">{metric.label}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* R&D Methodology */}
          <section aria-labelledby="methodology-heading" className="mb-24">
            <h3
              id="methodology-heading"
              className="text-2xl lg:text-3xl font-bold text-blue-900 mb-16 text-center"
            >
              Industrial Automation R&D Methodology
            </h3>

            <ol className="grid lg:grid-cols-4 gap-6" role="list">
              {methodology.map((step, index) => (
                <li
                  key={index}
                  className="relative bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-300"
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
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Industry Impact */}
          <section aria-labelledby="industry-impact-heading" className="mb-12">
            <h3
              id="industry-impact-heading"
              className="text-2xl lg:text-3xl font-bold text-blue-900 mb-16 text-center"
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
                  className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-300 overflow-hidden"
                  role="listitem"
                >
                  <div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      {impact.sector} Industrial Applications
                    </h4>
                    <p className="text-gray-600">{impact.solution}</p>
                    <Link
                      href="#contact"
                      onClick={(e) => scrollToSection("contact", e)}
                      className="mt-4 inline-flex items-center text-xs text-blue-600 hover:text-blue-700 transition-colors"
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
      </section>
    </>
  );
};

export default RDDevelopment;
