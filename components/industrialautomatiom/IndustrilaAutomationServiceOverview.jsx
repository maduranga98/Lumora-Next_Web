import React from "react";
import Link from "next/link";
import Script from "next/script";

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
      icon: "⚡",
      title: "Industrial Automation & Control Systems",
      description:
        "Custom automation solutions with advanced PLC programming, HMI implementation, VFD integration, and comprehensive control panel design and wiring for manufacturing facilities.",
      gradient: "from-blue-600 to-blue-400",
      link: "#automation",
      ariaLabel: "Learn more about our Industrial Automation & Control Systems",
    },
    {
      icon: "🔬",
      title: "R&D Innovation Labs",
      description:
        "Future-proof industrial automation technologies and system optimization research and development for improved manufacturing efficiency and productivity.",
      gradient: "from-cyan-600 to-cyan-400",
      link: "#rd",
      ariaLabel: "Learn more about our R&D Innovation Labs",
    },
    {
      icon: "🛡️",
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
        className="relative bg-black py-20 lg:py-32 overflow-hidden"
        aria-labelledby="services-heading"
      >
        {/* Background Elements - marked as decorative */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <header className="mb-12 text-center">
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Industrial Automation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive automation solutions designed to transform
              manufacturing operations and drive operational excellence.
            </p>
          </header>

          {/* Services Grid with semantic list structure */}
          <ul className="grid md:grid-cols-3 gap-8 mb-20" role="list">
            {services.map((service, index) => (
              <li
                key={index}
                className="group relative bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-lg p-8 hover:border-blue-400/50 transition-all duration-300 hover:translate-y-[-4px]"
                role="listitem"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <span
                    className="text-4xl mb-4"
                    role="img"
                    aria-label={`${service.title} icon`}
                  >
                    {service.icon}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    onClick={(e) =>
                      scrollToSection(service.link.substring(1), e)
                    }
                    className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
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

                {/* Corner Decorations */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 overflow-hidden"
                  aria-hidden="true"
                >
                  <div className="absolute top-[-8px] right-[-8px] w-8 h-8 bg-blue-400/10 rounded-full transform rotate-45" />
                </div>
              </li>
            ))}
          </ul>

          {/* CTA Section with better semantic structure */}
          <div className="relative bg-gradient-to-br from-blue-900/80 via-indigo-900/60 to-black/80 backdrop-blur-sm border border-blue-400/30 rounded-lg p-8 lg:p-12 overflow-hidden">
            {/* Decorative Elements */}
            <div
              className="absolute top-0 left-0 w-32 h-32 overflow-hidden"
              aria-hidden="true"
            >
              <div className="absolute top-[-16px] left-[-16px] w-16 h-16 bg-cyan-400/10 rounded-full" />
            </div>
            <div
              className="absolute bottom-0 right-0 w-48 h-48 overflow-hidden"
              aria-hidden="true"
            >
              <div className="absolute bottom-[-24px] right-[-24px] w-24 h-24 bg-blue-400/10 rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-8 lg:mb-0">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Ready for Industry 5.0 Automation Transformation?
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl">
                  Partner with Lumora Ventures to implement industrial
                  automation solutions that deliver up to 200% ROI within 18
                  months for your manufacturing facility.
                </p>
              </div>

              <Link
                href="#contact"
                onClick={(e) => scrollToSection("contact", e)}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group"
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
        </div>

        {/* Circuit Pattern - marked as decorative */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <title>Circuit Pattern Background</title>
          <desc>
            Decorative circuit board pattern representing industrial automation
            technology
          </desc>
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
    </>
  );
};

export default ServiceOverview;
