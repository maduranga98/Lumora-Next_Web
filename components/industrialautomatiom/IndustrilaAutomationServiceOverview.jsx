"use client";

import React from "react";
import Link from "next/link";
import Script from "next/script";
import { Zap, FlaskConical, Shield } from "lucide-react";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/AnimatedSection";

const ServiceOverview = () => {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Industrial Automation & Control Systems",
          description:
            "Custom industrial automation solutions with PLC programming, HMI programming, VFD programming, and panel wiring for manufacturing facilities.",
          provider: { "@type": "Organization", name: "Lumora Ventures" },
          serviceType: "Industrial Automation",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "R&D Innovation Labs",
          description:
            "Future-proof automation technologies and system optimization R&D services for industrial manufacturing operations.",
          provider: { "@type": "Organization", name: "Lumora Ventures" },
          serviceType: "Research & Development",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Proactive Maintenance Solutions",
          description:
            "24/7 industrial equipment monitoring and predictive maintenance agreements for manufacturing facilities.",
          provider: { "@type": "Organization", name: "Lumora Ventures" },
          serviceType: "Industrial Maintenance",
        },
      },
    ],
  };

  const services = [
    {
      icon: Zap,
      title: "Industrial Automation & Control Systems",
      description:
        "Custom automation solutions with advanced PLC programming, HMI implementation, VFD integration, and comprehensive control panel design for manufacturing facilities.",
      accent: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      borderHover: "hover:border-blue-500/50",
      shadowHover: "hover:shadow-blue-500/10",
      link: "#automation",
      ariaLabel: "Learn more about our Industrial Automation & Control Systems",
    },
    {
      icon: FlaskConical,
      title: "R&D Innovation Labs",
      description:
        "Future-proof industrial automation technologies and system optimization research and development for improved manufacturing efficiency and productivity.",
      accent: "from-cyan-500 to-teal-500",
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-400",
      borderHover: "hover:border-cyan-500/50",
      shadowHover: "hover:shadow-cyan-500/10",
      link: "#rd",
      ariaLabel: "Learn more about our R&D Innovation Labs",
    },
    {
      icon: Shield,
      title: "Proactive Maintenance Solutions",
      description:
        "24/7 industrial equipment monitoring, predictive maintenance agreements, and real-time diagnostics to minimize downtime and extend equipment lifespan.",
      accent: "from-indigo-500 to-blue-500",
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-400",
      borderHover: "hover:border-indigo-500/50",
      shadowHover: "hover:shadow-indigo-500/10",
      link: "#maintenance",
      ariaLabel: "Learn more about our Proactive Maintenance Solutions",
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
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <section
        id="service-overview"
        className="relative bg-slate-950 py-24 lg:py-32 overflow-hidden"
        aria-labelledby="services-heading"
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-5"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <AnimatedSection>
            <header className="mb-16 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-5">
                Our Core Services
              </span>
              <h2
                id="services-heading"
                className="text-3xl md:text-5xl font-bold text-white mb-5"
              >
                Industrial Automation{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Services
                </span>
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Comprehensive automation solutions designed to transform
                manufacturing operations and drive operational excellence.
              </p>
            </header>
          </AnimatedSection>

          {/* Services Grid */}
          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={index}>
                  <li
                    className={`group relative bg-slate-900/60 border border-slate-800 rounded-2xl p-8 ${service.borderHover} hover:shadow-xl ${service.shadowHover} transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm`}
                    role="listitem"
                  >
                    {/* Top gradient line */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl`}
                      aria-hidden="true"
                    />

                    <div className="relative z-10">
                      <div
                        className={`w-13 h-13 w-12 h-12 rounded-xl ${service.iconBg} border border-white/5 flex items-center justify-center mb-6`}
                      >
                        <Icon className={`w-6 h-6 ${service.iconColor}`} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm mb-5">
                        {service.description}
                      </p>
                      <Link
                        href={service.link}
                        onClick={(e) =>
                          scrollToSection(service.link.substring(1), e)
                        }
                        className={`inline-flex items-center gap-1.5 text-sm font-medium ${service.iconColor} opacity-80 hover:opacity-100 transition-opacity`}
                        aria-label={service.ariaLabel}
                      >
                        Learn more
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
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </li>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* CTA Banner */}
          <AnimatedSection variant="fadeUp" delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600" aria-hidden="true" />
              <div
                className="absolute inset-0 opacity-10"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" aria-hidden="true" />

              <div className="relative z-10 p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    Ready for Industry 5.0 Automation Transformation?
                  </h2>
                  <p className="text-blue-100 max-w-2xl">
                    Partner with Lumora Ventures to implement industrial
                    automation solutions that deliver up to 200% ROI within 18
                    months for your manufacturing facility.
                  </p>
                </div>

                <Link
                  href="#contact"
                  onClick={(e) => scrollToSection("contact", e)}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl transition-all duration-300 hover:bg-blue-50 hover:scale-105 shadow-lg whitespace-nowrap"
                  aria-label="Schedule a free industrial automation consultation"
                >
                  Schedule Free Consultation
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ServiceOverview;
