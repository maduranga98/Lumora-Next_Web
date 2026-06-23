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
  // Schema.org structured data for services
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
          provider: {
            "@type": "Organization",
            name: "Lumora Ventures",
          },
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
          provider: {
            "@type": "Organization",
            name: "Lumora Ventures",
          },
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
          provider: {
            "@type": "Organization",
            name: "Lumora Ventures",
          },
          serviceType: "Industrial Maintenance",
        },
      },
    ],
  };

  const services = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Industrial Automation & Control Systems",
      description:
        "Custom automation solutions with advanced PLC programming, HMI implementation, VFD integration, and comprehensive control panel design and wiring for manufacturing facilities.",
      gradient: "from-blue-600 to-blue-400",
      link: "#automation",
      ariaLabel: "Learn more about our Industrial Automation & Control Systems",
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-cyan-600" />,
      title: "R&D Innovation Labs",
      description:
        "Future-proof industrial automation technologies and system optimization research and development for improved manufacturing efficiency and productivity.",
      gradient: "from-cyan-600 to-cyan-400",
      link: "#rd",
      ariaLabel: "Learn more about our R&D Innovation Labs",
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      title: "Proactive Maintenance Solutions",
      description:
        "24/7 industrial equipment monitoring, predictive maintenance agreements, and real-time diagnostics to minimize downtime and extend equipment lifespan.",
      gradient: "from-indigo-600 to-blue-400",
      link: "#maintenance",
      ariaLabel: "Learn more about our Proactive Maintenance Solutions",
    },
  ];

  // Handle smooth scrolling with URL hash updates
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
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <section
        id="service-overview"
        className="relative bg-white py-20 lg:py-32 overflow-hidden"
        aria-labelledby="services-heading"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <AnimatedSection>
            <header className="mb-12 text-center">
              <h2
                id="services-heading"
                className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              >
                Industrial Automation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive automation solutions designed to transform
                manufacturing operations and drive operational excellence.
              </p>
            </header>
          </AnimatedSection>

          {/* Services Grid with semantic list structure */}
          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <li
                  className="group relative bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
                  role="listitem"
                >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    onClick={(e) =>
                      scrollToSection(service.link.substring(1), e)
                    }
                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    aria-label={service.ariaLabel}
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
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
            ))}
          </StaggerContainer>

          {/* CTA Section */}
          <AnimatedSection variant="fadeUp" delay={0.2}>
          <div className="relative bg-blue-900 rounded-xl p-8 lg:p-12 overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-8 lg:mb-0">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-0">
                  Ready for Industry 5.0 Automation Transformation?
                </h2>
                <p className="text-lg text-blue-100 max-w-2xl">
                  Partner with Lumora Ventures to implement industrial
                  automation solutions that deliver up to 200% ROI within 18
                  months for your manufacturing facility.
                </p>
              </div>

              <Link
                href="#contact"
                onClick={(e) => scrollToSection("contact", e)}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 group"
                aria-label="Schedule a free industrial automation consultation"
              >
                Schedule Free Consultation
                <svg
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
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
