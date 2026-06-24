"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { TrendingUp, Zap, Search, Activity, Clock, Shield } from "lucide-react";

const MaintenanceSolutions = () => {
  const [isMounted, setIsMounted] = useState(false);

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
      Icon: TrendingUp,
      title: "Predictive HMI Care",
      description:
        "AI-optimized interface health monitoring for manufacturing automation systems",
      stat: "60% fewer system failures",
      statColor: "text-emerald-400",
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10",
      accent: "from-emerald-500 to-green-400",
      border: "hover:border-emerald-500/40",
      ariaLabel: "Predictive HMI Care statistics",
    },
    {
      Icon: Zap,
      title: "VFD Longevity Programs",
      description:
        "Motor control optimization cycles for industrial equipment maintenance",
      stat: "35% longer equipment lifespan",
      statColor: "text-blue-400",
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10",
      accent: "from-blue-500 to-cyan-400",
      border: "hover:border-blue-500/40",
      ariaLabel: "VFD Longevity Programs statistics",
    },
    {
      Icon: Search,
      title: "Panel Integrity Checks",
      description:
        "Thermal imaging & connection diagnostics for industrial automation reliability",
      stat: "99.9% connection reliability",
      statColor: "text-violet-400",
      iconColor: "text-violet-400",
      iconBg: "bg-violet-500/10",
      accent: "from-violet-500 to-indigo-400",
      border: "hover:border-violet-500/40",
      ariaLabel: "Panel Integrity Checks statistics",
    },
  ];

  const responseMetrics = [
    {
      value: "2h",
      title: "Critical Response",
      description: "Avg. onsite time for manufacturing equipment",
      Icon: Activity,
      accent: "from-blue-600 to-blue-500",
      ariaLabel: "Critical Response Time icon",
    },
    {
      value: "15m",
      title: "Remote Support",
      description: "First response to industrial control failures",
      Icon: Clock,
      accent: "from-cyan-600 to-cyan-500",
      ariaLabel: "Remote Support Time icon",
    },
    {
      value: "365",
      title: "Days/Year Coverage",
      description: "Complete manufacturing maintenance coverage",
      Icon: Shield,
      accent: "from-indigo-600 to-indigo-500",
      ariaLabel: "Year-round Coverage icon",
    },
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
      {isMounted && (
        <Script
          id="maintenance-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(maintenanceSchema) }}
        />
      )}

      <section
        id="maintenance"
        className="relative bg-white py-24 lg:py-32 overflow-hidden"
        aria-labelledby="maintenance-heading"
      >
        {/* Decorative background */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full opacity-[0.025]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #16a34a 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-60" aria-hidden="true" />
        <div className="absolute top-1/2 -right-40 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          {/* Header */}
          <header className="text-center mb-16 lg:mb-24">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-medium mb-5">
              Proactive Maintenance
            </span>
            <h2
              id="maintenance-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight"
            >
              Zero Downtime Guarantee —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                Continuous Operations, Always
              </span>
            </h2>
            <p className="text-lg text-slate-500 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our predictive maintenance ecosystem ensures 99.95% system
              availability through AI-driven monitoring and rapid-response
              engineering support for industrial control systems.
            </p>
            <Link
              href="#contact"
              onClick={(e) => scrollToSection("contact", e)}
              className={`group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 ${isMounted ? "hover:scale-105" : ""}`}
              aria-label="Secure your manufacturing operations with our maintenance solutions"
            >
              Secure Your Manufacturing Operations
              <svg
                className={`w-5 h-5 transition-transform ${isMounted ? "group-hover:translate-x-1" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </header>

          {/* Smart Maintenance Framework */}
          <section aria-labelledby="framework-heading" className="mb-24">
            <h3
              id="framework-heading"
              className="text-2xl lg:text-3xl font-bold text-slate-900 mb-12 text-center"
            >
              Smart Maintenance Framework
            </h3>

            <ul className="grid md:grid-cols-3 gap-6" role="list">
              {maintenanceFramework.map((item, index) => {
                const { Icon } = item;
                return (
                  <li
                    key={index}
                    className={`group relative bg-slate-50 border border-slate-200 rounded-2xl p-8 ${item.border} hover:shadow-lg hover:bg-white transition-all duration-300 overflow-hidden`}
                    role="listitem"
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.accent}`}
                      aria-hidden="true"
                    />

                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-5`}>
                        <Icon className={`w-6 h-6 ${item.iconColor}`} />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-3">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Stat badge */}
                      <div className={`inline-flex items-center gap-1.5 text-sm font-semibold ${item.statColor} bg-white border border-current/20 px-3 py-1.5 rounded-full`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {item.stat}
                      </div>

                      <div className="mt-5">
                        <Link
                          href="#contact"
                          onClick={(e) => scrollToSection("contact", e)}
                          className={`inline-flex items-center gap-1 text-sm ${item.iconColor} hover:opacity-80 font-medium transition-opacity`}
                          aria-label={`Get maintenance plan for ${item.title}`}
                        >
                          Get maintenance plan
                          <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Response Performance */}
          <section aria-labelledby="performance-heading" className="mb-16">
            <h3
              id="performance-heading"
              className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 text-center"
            >
              Response Performance
            </h3>
            <p className="text-slate-500 text-center mb-12 text-sm">
              Our commitment to minimizing downtime and continuous manufacturing operations
            </p>

            <ul className="grid sm:grid-cols-3 gap-6" role="list">
              {responseMetrics.map((metric, index) => {
                const { Icon } = metric;
                return (
                  <li
                    key={index}
                    className="relative rounded-2xl overflow-hidden"
                    role="listitem"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${metric.accent}`} aria-hidden="true" />
                    <div className="relative border border-white/10 rounded-2xl p-8 text-center">
                      <div className="flex justify-center mb-4" aria-hidden="true">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="text-5xl lg:text-6xl font-black text-white mb-2 leading-none">
                        {metric.value}
                      </div>
                      <div className="text-base font-semibold text-white mb-1">
                        {metric.title}
                      </div>
                      <div className="text-white/60 text-sm">
                        {metric.description}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="text-center mt-10">
              <Link
                href="#contact"
                onClick={(e) => scrollToSection("contact", e)}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                aria-label="Schedule an industrial automation maintenance consultation"
              >
                Schedule Maintenance Consultation
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </section>

          {/* Availability Guarantee */}
          <section
            aria-labelledby="availability-heading"
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" aria-hidden="true" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative z-10 p-8 lg:p-12 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                Our Guarantee
              </span>
              <h3
                id="availability-heading"
                className="text-2xl lg:text-4xl font-bold text-white mb-6"
              >
                99.95% System Availability
              </h3>

              {/* Progress bar */}
              <div
                className="flex items-center justify-center gap-4 mb-6"
                role="progressbar"
                aria-valuenow={99.95}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="System availability percentage"
              >
                <div className="h-3 w-full max-w-2xl bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-[99.95%] bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg shadow-emerald-500/50" aria-hidden="true" />
                  </div>
                </div>
              </div>

              <p className="text-slate-400 text-lg mb-8">
                Less than{" "}
                <span className="text-white font-semibold">22 hours</span> of
                manufacturing downtime per year for your industrial control
                systems
              </p>

              <Link
                href="#contact"
                onClick={(e) => scrollToSection("contact", e)}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-105"
                aria-label="Get your industrial automation availability guarantee"
              >
                Get Your Availability Guarantee
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

export default MaintenanceSolutions;
