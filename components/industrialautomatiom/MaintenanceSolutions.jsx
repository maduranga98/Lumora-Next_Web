"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

const MaintenanceSolutions = () => {
  // Add mounted state to control hydration
  const [isMounted, setIsMounted] = useState(false);

  // Schema.org structured data for maintenance services
  const maintenanceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Industrial Automation Maintenance Solutions",
    description:
      "Proactive maintenance ecosystem with 99.95% system availability through AI-driven monitoring and rapid-response engineering support for industrial automation systems.",
    provider: {
      "@type": "Organization",
      name: "Lumora Ventures",
      url: "https://www.lumoraventures.com",
    },
    serviceType: "Industrial Maintenance",
    areaServed: "Manufacturing and industrial facilities",
    serviceOutput: {
      "@type": "Thing",
      name: "99.95% System Availability",
      description:
        "Less than 22 hours of downtime per year for industrial automation systems",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Industrial Maintenance Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Predictive HMI Care",
            description:
              "AI-optimized interface health monitoring for industrial control systems with 60% fewer failures.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "VFD Longevity Programs",
            description:
              "Motor control optimization cycles for industrial automation with 35% longer lifespan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Panel Integrity Checks",
            description:
              "Thermal imaging & connection diagnostics for industrial control panels with 99.9% connection reliability.",
          },
        },
      ],
    },
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const maintenanceFramework = [
    {
      icon: "📈",
      title: "Predictive HMI Care for Industrial Controls",
      description:
        "AI-optimized interface health monitoring for manufacturing automation systems",
      stat: "60% fewer system failures",
      gradient: "from-green-600 to-emerald-400",
      ariaLabel: "Predictive HMI Care statistics",
    },
    {
      icon: "⚡",
      title: "VFD Longevity Programs for Manufacturing",
      description:
        "Motor control optimization cycles for industrial equipment maintenance",
      stat: "35% longer equipment lifespan",
      gradient: "from-blue-600 to-cyan-400",
      ariaLabel: "VFD Longevity Programs statistics",
    },
    {
      icon: "🔍",
      title: "Panel Integrity Checks for Control Systems",
      description:
        "Thermal imaging & connection diagnostics for industrial automation reliability",
      stat: "99.9% connection reliability rate",
      gradient: "from-indigo-600 to-violet-400",
      ariaLabel: "Panel Integrity Checks statistics",
    },
  ];

  const responseMetrics = [
    {
      value: "2h",
      title: "Critical Response for Industrial Systems",
      description: "Avg. Onsite Time for Manufacturing Equipment",
      icon: "🚀",
      ariaLabel: "Critical Response Time icon",
    },
    {
      value: "15m",
      title: "Remote Support for Automation Issues",
      description: "First Response to Industrial Control Failures",
      icon: "⏱️",
      ariaLabel: "Remote Support Time icon",
    },
    {
      value: "365",
      title: "Days/Year Industrial Coverage",
      description: "Complete Manufacturing Maintenance Coverage",
      icon: "🛡️",
      ariaLabel: "Year-round Coverage icon",
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

  // Define CSS classes for static and interactive elements
  const frameItemBaseClass =
    "relative bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300";
  const frameItemHoverClass = isMounted
    ? "hover:border-green-400 hover:shadow-lg group"
    : "";
  const frameItemClass = `${frameItemBaseClass} ${frameItemHoverClass}`;

  // Group hover class for button
  const buttonBaseClass =
    "inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg transition-all duration-300";
  const buttonHoverClass = isMounted
    ? "hover:bg-green-700 hover:scale-105"
    : "";
  const buttonClass = `${buttonBaseClass} ${buttonHoverClass}`;

  // Group hover class for button SVG
  const buttonSvgClass = `w-5 h-5 ml-2 transition-transform ${
    isMounted ? "group-hover:translate-x-1" : ""
  }`;

  return (
    <>
      {/* Add structured data for search engines */}
      {isMounted && (
        <Script
          id="maintenance-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(maintenanceSchema),
          }}
        />
      )}

      <section
        id="maintenance"
        className="relative bg-white py-20 lg:py-32 overflow-hidden"
        aria-labelledby="maintenance-heading"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          {/* Hero Section */}
          <header className="text-center mb-16 lg:mb-24">
            <h2
              id="maintenance-heading"
              className="text-3xl lg:text-5xl font-bold text-blue-900 mb-6"
            >
              Zero Downtime Guarantee for Industrial Automation
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                Proactive Maintenance for Continuous Manufacturing Operations
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Our predictive maintenance ecosystem ensures 99.95% system
              availability through AI-driven monitoring and rapid-response
              engineering support for industrial control systems and
              manufacturing equipment.
            </p>
            <Link
              href="#contact"
              onClick={(e) => scrollToSection("contact", e)}
              className={`${buttonClass} ${isMounted ? "group" : ""}`}
              aria-label="Contact us to secure your industrial operations with our maintenance solutions"
            >
              Secure Your Manufacturing Operations Now
              <svg
                className={buttonSvgClass}
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
          </header>

          {/* Smart Maintenance Framework */}
          <section aria-labelledby="framework-heading" className="mb-24">
            <h3
              id="framework-heading"
              className="text-2xl lg:text-3xl font-bold text-blue-900 mb-16 text-center"
            >
              Industrial Automation Smart Maintenance Framework
            </h3>

            <ul className="grid md:grid-cols-3 gap-8" role="list">
              {maintenanceFramework.map((item, index) => (
                <li key={index} className={frameItemClass} role="listitem">
                  {/* Gradient background - controlled visibility based on mounted state */}
                  <div
                    className={`absolute inset-0 rounded-lg bg-gradient-to-br ${
                      item.gradient
                    } ${
                      isMounted
                        ? "opacity-0 group-hover:opacity-10"
                        : "opacity-0"
                    } transition-opacity duration-300`}
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <span
                      className="text-4xl mb-4 block"
                      role="img"
                      aria-label={item.ariaLabel}
                    >
                      {item.icon}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="inline-flex items-center gap-2 text-green-600 font-semibold mb-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
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

                    <div className="mt-2">
                      <Link
                        href="#contact"
                        onClick={(e) => scrollToSection("contact", e)}
                        className="inline-flex items-center text-sm text-green-600 hover:text-green-700 transition-colors"
                        aria-label={`Get industrial maintenance plan for ${
                          item.title.split(" ")[0]
                        } ${item.title.split(" ")[1]}`}
                      >
                        Get industrial maintenance plan
                        <svg
                          className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
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
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Response Performance */}
          <section aria-labelledby="performance-heading" className="mb-12">
            <h3
              id="performance-heading"
              className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4 text-center"
            >
              Industrial Automation Response Performance
            </h3>
            <p className="text-gray-600 text-center mb-16">
              Our commitment to continuous manufacturing operations and
              minimizing downtime
            </p>

            <ul className="grid sm:grid-cols-3 gap-8" role="list">
              {responseMetrics.map((metric, index) => (
                <li
                  key={index}
                  className="relative bg-blue-900 rounded-xl p-8 text-center overflow-hidden"
                  role="listitem"
                >
                  <div className="relative z-10">
                    <span
                      className="text-4xl mb-4 block"
                      role="img"
                      aria-label={metric.ariaLabel}
                    >
                      {metric.icon}
                    </span>
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                      {metric.value}
                    </div>
                    <div className="text-lg font-semibold text-blue-200 mb-1">
                      {metric.title}
                    </div>
                    <div className="text-blue-300 mb-4">
                      {metric.description}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="text-center mt-10">
              <Link
                href="#contact"
                onClick={(e) => scrollToSection("contact", e)}
                className="inline-flex items-center px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 group text-sm"
                aria-label="Schedule an industrial automation maintenance consultation"
              >
                Schedule Industrial Maintenance Consultation
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

          {/* Availability Guarantee */}
          <section
            aria-labelledby="availability-heading"
            className="relative bg-green-50 border border-green-200 rounded-xl p-8 lg:p-12 mt-24 overflow-hidden"
          >
            <div className="relative z-10 text-center">
              <h3
                id="availability-heading"
                className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6"
              >
                99.95% Industrial Automation System Availability
              </h3>
              <div
                className="flex items-center justify-center gap-4 mb-8"
                role="progressbar"
                aria-valuenow="99.95"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="System availability percentage"
              >
                <div className="h-2 w-full max-w-2xl bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[99.95%] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                </div>
              </div>
              <p className="text-gray-600 text-lg mb-8">
                That means less than 22 hours of manufacturing downtime per year
                for your industrial control systems
              </p>

              <Link
                href="#contact"
                onClick={(e) => scrollToSection("contact", e)}
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 group"
                aria-label="Contact us to get your industrial automation availability guarantee"
              >
                Get Your Industrial System Availability Guarantee
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

            {/* Background elements - marked as decorative */}
            <div
              className="absolute top-0 left-0 w-32 h-32 rounded-full bg-green-400/5 blur-xl"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-emerald-400/5 blur-2xl"
              aria-hidden="true"
            />
          </section>
        </div>
      </section>
    </>
  );
};

export default MaintenanceSolutions;
