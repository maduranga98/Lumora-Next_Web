"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

// Optimized animated element component using react-intersection-observer
const AnimatedElement = ({ children, delay = 0, className = "", id = "" }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation styles with support for reduced motion
  const getAnimationStyle = () => {
    if (!isMounted) return { opacity: 1 }; // Prevent hydration mismatch

    // Check for reduced motion preference
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return { opacity: 1 };
    }

    return {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(50px)",
      transition: `opacity 0.8s ease-out, transform 0.8s ease-out`,
      transitionDelay: `${delay}ms`,
    };
  };

  return (
    <div ref={ref} className={className} style={getAnimationStyle()} id={id}>
      {children}
    </div>
  );
};

const ServiceSection = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [mounted, setMounted] = useState(false);
  const resizeTimerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    // Throttled resize handler for better performance
    const handleResize = () => {
      if (resizeTimerRef.current) return;

      resizeTimerRef.current = setTimeout(() => {
        setWindowWidth(window.innerWidth);
        resizeTimerRef.current = null;
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
    };
  }, []);

  // Enhanced services data with more detail for SEO
  const services = [
    {
      id: "google-my-business",
      title: "Google Business Profile Management",
      description:
        "Maximize your local search visibility and attract more customers with our expert Google Business Profile management services.",
      detailedDescription:
        "Our Google Business Profile management service helps businesses improve their local search rankings, engage with customers effectively, and establish a strong online presence. We optimize your profile with accurate information, respond to reviews, and implement strategies to increase visibility.",
      benefits: [
        "Improved local search ranking",
        "Enhanced customer engagement",
        "Increased foot traffic",
        "Better online reputation",
        "Higher conversions",
      ],
      icon: (
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-blue-600"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="4"
            y="8"
            width="56"
            height="48"
            rx="4"
            className="fill-blue-100"
          />
          <path
            d="M16 20h32M16 32h24"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="40" cy="40" r="8" className="fill-blue-600" />
          <path
            d="M37 40l3 3 6-6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: "blue",
      link: "/google-my-business",
      enabled: true,
      buttonClass: "bg-blue-600 hover:bg-blue-700",
      schema: {
        "@type": "Service",
        name: "Google Business Profile Management",
        description:
          "Maximize your local search visibility and attract more customers with our expert Google Business Profile management services.",
        offers: {
          "@type": "Offer",
          price: "Starting from",
          priceCurrency: "USD",
        },
      },
    },
    {
      id: "curl-cipher",
      title: "Curl Cipher – Salon Management",
      description:
        "Revolutionize your salon operations with our comprehensive management system designed specifically for beauty and wellness businesses.",
      detailedDescription:
        "Curl Cipher is a complete salon management solution that streamlines appointments, inventory, staff management, and customer relations. Our system includes mobile apps for both staff and clients, plus a free website to showcase your services.",
      benefits: [
        "Streamlined appointment scheduling",
        "Efficient inventory management",
        "Role-based staff controls",
        "Financial insights dashboard",
        "Enhanced customer experience",
        "Two Powerful Apps + a Free Website!",
      ],
      icon: (
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-purple-600"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="8"
            y="8"
            width="48"
            height="36"
            rx="6"
            className="fill-purple-100"
          />
          <circle cx="20" cy="26" r="6" className="fill-purple-600" />
          <circle cx="32" cy="26" r="6" className="fill-purple-600" />
          <circle cx="44" cy="26" r="6" className="fill-purple-600" />
          <path
            d="M12 52h40"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <rect
            x="24"
            y="48"
            width="16"
            height="12"
            className="fill-purple-600"
          />
        </svg>
      ),
      color: "purple",
      link: "/curl-cipher",
      enabled: true,
      buttonClass: "bg-purple-600 hover:bg-purple-700",
      schema: {
        "@type": "Service",
        name: "Curl Cipher Salon Management System",
        description:
          "Revolutionize your salon operations with our comprehensive management system designed specifically for beauty and wellness businesses.",
        offers: {
          "@type": "Offer",
          price: "Starting from",
          priceCurrency: "USD",
        },
      },
    },
    {
      id: "industrial-automation",
      title: "Industrial Automation Solutions",
      description:
        "Streamline your industrial processes with our bespoke automation solutions for manufacturing and production environments.",
      detailedDescription:
        "Our industrial automation solutions help businesses improve efficiency, reduce costs, and enhance productivity. We design and implement custom PLC/SCADA systems, IoT monitoring, and safety protocols tailored to your specific industrial requirements.",
      benefits: [
        "Seamless PLC/SCADA integration",
        "IoT-enabled monitoring systems",
        "Enhanced safety protocols",
        "Increased operational efficiency",
        "Reduced operational costs",
        "Improved overall productivity",
      ],
      icon: (
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-green-600"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="8"
            y="16"
            width="48"
            height="32"
            rx="4"
            className="fill-green-100"
          />
          <path
            d="M16 24h16M40 24h8M16 32h8M32 32h16M16 40h32"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="48" cy="40" r="4" className="fill-green-600" />
          <circle cx="56" cy="26" r="4" className="fill-green-600" />
        </svg>
      ),
      color: "green",
      link: "/industrial-automation",
      enabled: true,
      buttonClass: "bg-green-600 hover:bg-green-700",
      schema: {
        "@type": "Service",
        name: "Industrial Automation Solutions",
        description:
          "Streamline your industrial processes with our bespoke automation solutions for manufacturing and production environments.",
        offers: {
          "@type": "Offer",
          price: "Custom Quote",
          priceCurrency: "USD",
        },
      },
    },
    {
      id: "social-media-marketing",
      title: "Social Media Marketing",
      description:
        "Coming soon: Elevate your brand's online presence with our strategic social media marketing services and content creation.",
      detailedDescription:
        "Our upcoming social media marketing services will help businesses build brand awareness, engage with customers, and drive conversions through strategic content creation and campaign management across all major social platforms.",
      isComingSoon: true,
      icon: (
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-orange-600"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="32" cy="32" r="28" className="fill-orange-100" />
          <path
            d="M16 32h32M32 16v32"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="22" cy="22" r="4" className="fill-orange-600" />
          <circle cx="42" cy="22" r="4" className="fill-orange-600" />
          <circle cx="22" cy="42" r="4" className="fill-orange-600" />
          <circle cx="42" cy="42" r="4" className="fill-orange-600" />
        </svg>
      ),
      color: "orange",
      link: "/social-media-marketing",
      enabled: false,
      buttonClass: "bg-orange-600 hover:bg-orange-700",
      schema: {
        "@type": "Service",
        name: "Social Media Marketing",
        description:
          "Coming soon: Elevate your brand's online presence with our strategic social media marketing services and content creation.",
        offers: {
          "@type": "Offer",
          price: "Coming Soon",
          priceCurrency: "USD",
        },
      },
    },
  ];

  // Create complete JSON-LD schema for all services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lumora Ventures",
    url: "https://www.lumoraventures.com",
    logo: "https://www.lumoraventures.com/logo.webp",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "info@lumoraventures.com",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colombo",
      addressCountry: "LK",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lumora Ventures Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.detailedDescription || service.description,
          url: `https://www.lumoraventures.com${service.link}`,
        },
        position: index + 1,
      })),
    },
  };

  // Helper for responsive classes
  const getGridCols = () => {
    if (windowWidth >= 1536) return "grid-cols-2"; // 2xl and up
    if (windowWidth >= 1024) return "grid-cols-2"; // lg and up
    if (windowWidth >= 768) return "grid-cols-2"; // md and up
    return "grid-cols-1"; // Below md
  };

  return (
    <>
      {/* Add structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <section
        id="services"
        className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(to bottom, #EBF5FF 0%, #F5F7FA 100%)",
        }}
        aria-labelledby="services-heading"
      >
        <div className="max-w-6xl xl:max-w-7xl mx-auto">
          {/* Section header with enhanced semantics */}
          <header className="text-center mb-8 md:mb-12">
            <AnimatedElement delay={100}>
              <h2
                id="services-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-gray-900"
              >
                Our Digital Services & Solutions
              </h2>
              <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of innovative digital solutions
                to boost your business growth and efficiency.
              </p>
            </AnimatedElement>
          </header>

          {/* Service cards grid with proper ARIA and semantics */}
          <div
            className={`grid gap-4 sm:gap-6 md:gap-8 ${getGridCols()} max-w-7xl mx-auto`}
            role="list"
            aria-labelledby="services-heading"
          >
            {services.map((service, index) => {
              // Color classes map for checkmark icon text color
              const colorClasses = {
                blue: "text-blue-600",
                purple: "text-purple-600",
                green: "text-green-600",
                orange: "text-orange-600",
              };

              return (
                <AnimatedElement
                  key={service.id}
                  delay={index * 200 + 300}
                  className="flex flex-col h-full bg-white rounded-3xl shadow-lg p-4 sm:p-5 md:p-6"
                  id={`service-${service.id}`}
                >
                  <article
                    className="flex flex-col h-full"
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    {/* Service icon */}
                    <div className="mb-4">{service.icon}</div>

                    {/* Service title */}
                    <h3
                      className="text-lg sm:text-xl font-semibold mb-3"
                      itemProp="name"
                    >
                      {service.title}
                    </h3>

                    {/* Service description */}
                    <p
                      className="text-sm text-gray-600 mb-4"
                      itemProp="description"
                    >
                      {service.description}
                    </p>

                    {/* Benefits list */}
                    <ul
                      className="mb-6 space-y-2 flex-grow"
                      aria-label={`Benefits of ${service.title}`}
                    >
                      {service.benefits?.map((benefit) => (
                        <li key={benefit} className="flex items-start">
                          <svg
                            className={`w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2 mt-0.5 flex-shrink-0 ${
                              colorClasses[service.color] || "text-gray-600"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414L8.414 15 5.293 11.879a1 1 0 011.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-xs sm:text-sm text-gray-700">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      {service.enabled ? (
                        <Link
                          href={service.link}
                          className={`inline-block px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all duration-300 ${service.buttonClass} hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                          aria-label={`Learn more about ${service.title}`}
                          itemProp="url"
                        >
                          Learn More
                        </Link>
                      ) : (
                        <div className="inline-flex items-center gap-2">
                          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                          <span
                            className="inline-block px-4 py-2 rounded-lg bg-gray-400 text-white text-sm cursor-not-allowed"
                            aria-disabled="true"
                            aria-label={`${service.title} coming soon`}
                          >
                            Coming Soon
                          </span>
                        </div>
                      )}
                    </div>
                  </article>
                </AnimatedElement>
              );
            })}
          </div>

          {/* Added CTA section */}
          <AnimatedElement
            delay={800}
            className="mt-12 sm:mt-14 md:mt-16 text-center"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 sm:p-6 md:p-7 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Need a Customized Solution?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 max-w-2xl mx-auto">
                We offer tailored digital solutions for businesses of all sizes.
                Get in touch to discuss your specific requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Contact us for custom solutions"
                id="contact"
              >
                Contact Us
                <svg
                  className="ml-2 -mr-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
