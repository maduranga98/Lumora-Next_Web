"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

// Optimize the ServiceCard component
const ServiceCard = ({
  id,
  title,
  description,
  icon,
  isComingSoon = false,
  delay = 0,
  isMounted = false,
  learnMoreUrl,
}) => {
  // Use the react-intersection-observer hook for better performance
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Only apply animation classes after mounting
  const animationClass =
    isMounted && (inView || typeof window === "undefined")
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-12";
  const transitionClass = isMounted
    ? "transition-all duration-800 ease-out"
    : "";

  return (
    <div
      ref={ref}
      className={`${animationClass} ${transitionClass}`}
      style={{ transitionDelay: `${delay}ms` }}
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="group bg-white/90 backdrop-blur-md rounded-xl shadow-md border border-blue-50 p-5 sm:p-6 md:p-7 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-indigo-50/90 rounded-xl" />
        </div>

        <div className="relative z-10">
          {/* Icon container with semantic meaning */}
          <div className="flex justify-center mb-5" aria-hidden="true">
            <div className="relative">
              <div className="p-3 sm:p-4 md:p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl group-hover:from-blue-600 group-hover:to-indigo-700 transition-all duration-300 shadow-md group-hover:shadow-lg">
                {React.cloneElement(icon, {
                  className:
                    "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white transition-transform duration-300 group-hover:scale-110",
                  "aria-hidden": "true",
                })}
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-indigo-400/30 blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
            </div>
          </div>

          {/* Service title with proper heading level */}
          <h3
            className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl font-montserrat font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300"
            itemProp="name"
          >
            {title}
          </h3>

          {/* Service description with microdata */}
          <p
            className="text-xs sm:text-xs md:text-sm lg:text-sm font-inter text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300 px-1"
            itemProp="description"
          >
            {description}
          </p>

          {/* Conditional rendering for Coming Soon badge or Learn More link */}
          {isComingSoon ? (
            <div className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full group-hover:bg-orange-200 transition-colors duration-300">
              <span
                className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-1.5 animate-pulse"
                aria-hidden="true"
              />
              Coming Soon
            </div>
          ) : (
            <Link
              href={learnMoreUrl || `/services/${id}`}
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors duration-300"
              itemProp="url"
              aria-label={`Learn more about our ${title} services`}
            >
              Learn More
              <svg
                className="w-3.5 h-3.5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const ServiceOverview = () => {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const styleRef = useRef(null);

  // Set mounted state after hydration and track window width with throttling
  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    let resizeTimer;
    const handleResize = () => {
      if (!resizeTimer) {
        resizeTimer = setTimeout(() => {
          setWindowWidth(window.innerWidth);
          resizeTimer = null;
        }, 100);
      }
    };

    window.addEventListener("resize", handleResize);

    // Add animation styles to the document head after mounting - only once
    if (typeof document !== "undefined" && !styleRef.current) {
      const styleEl = document.createElement("style");
      styleEl.textContent = `
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animation-float { animation: float 3s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .dark-overlay-gradient { background: linear-gradient(to bottom, rgba(30, 58, 138, 0.03), rgba(30, 58, 138, 0.08)); }

        /* Add reduced motion preference support */
        @media (prefers-reduced-motion: reduce) {
          .animation-float, .animate-fadeIn {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `;
      document.head.appendChild(styleEl);
      styleRef.current = styleEl;

      return () => {
        if (styleRef.current) {
          document.head.removeChild(styleRef.current);
          styleRef.current = null;
        }
        window.removeEventListener("resize", handleResize);
      };
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Enhanced service data with IDs, slugs, and improved descriptions for SEO
  const services = [
    {
      id: "google-my-business",
      title: "Google Business Profile Management",
      description:
        "Elevate your local SEO with professionally managed Google Business Profile. We optimize your listings for improved visibility, customer reviews, and local search rankings.",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      learnMoreUrl: "/services/google-my-business",
    },
    {
      id: "curl-cipher",
      title: "Curl Cipher Salon Management",
      description:
        "Streamline your salon operations with our comprehensive salon management software. Manage appointments, inventory, staff schedules, and client relationships all in one platform.",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      learnMoreUrl: "/services/curl-cipher",
    },
    {
      id: "industrial-automation",
      title: "Industrial Automation Solutions",
      description:
        "Transform your manufacturing and production processes with cutting-edge industrial automation solutions. Increase efficiency, reduce costs, and improve product quality through smart systems.",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      learnMoreUrl: "/services/industrial-automation",
    },
    {
      id: "social-media-marketing",
      title: "Social Media Marketing",
      description:
        "Elevate your brand's digital presence with strategic social media marketing campaigns, content creation, and audience engagement strategies.",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      ),
      isComingSoon: true,
    },
  ];

  // JSON-LD structured data for services
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: service.isComingSoon
          ? "https://www.lumoraventures.com/services"
          : `https://www.lumoraventures.com/services/${service.id}`,
        provider: {
          "@type": "Organization",
          name: "Lumora Ventures",
          url: "https://www.lumoraventures.com/",
        },
      },
    })),
  };

  // Determine the grid columns based on screen width
  const getGridCols = () => {
    if (windowWidth >= 1024) return "grid-cols-4";
    if (windowWidth >= 640) return "grid-cols-2";
    return "grid-cols-1";
  };

  return (
    <>
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData),
        }}
      />

      <section
        className="py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #EBF5FF 0%, #F5F7FA 100%)",
        }}
        aria-label="Our business solutions and services"
      >
        {/* Background elements */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />

          {/* Subtle grid pattern - optimized SVG */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231E40AF' fill-opacity='0.2'%3E%3Cpath d='M0 0h6v6H0V0zm10 0h6v6h-6V0zM0 10h6v6H0v-6zm10 0h6v6h-6v-6zM0 20h6v6H0v-6zm10 0h6v6h-6v-6zM0 30h6v6H0v-6zm10 0h6v6h-6v-6zM0 40h6v6H0v-6zm10 0h6v6h-6v-6zM0 50h6v6H0v-6zm10 0h6v6h-6v-6z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>
        </div>

        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto relative">
          {/* Header with animation and semantic structure */}
          <header className="text-center mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20">
            <h2
              className={`font-montserrat text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-5 ${
                mounted ? "animate-fadeIn" : "opacity-0"
              }`}
              style={{ animationDelay: "0ms" }}
              id="services-heading"
            >
              Our Solutions & Services
            </h2>
            <div
              className="w-16 h-1 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36 mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              aria-hidden="true"
            ></div>
            <p
              className={`font-inter text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-700 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto ${
                mounted ? "animate-fadeIn" : "opacity-0"
              }`}
              style={{ animationDelay: "100ms" }}
            >
              Innovative digital solutions designed to streamline your business
              operations and drive sustainable growth
            </p>
          </header>

          {/* Service cards grid with proper aria labeling */}
          <div
            className={`grid ${
              mounted ? getGridCols() : "grid-cols-1"
            } gap-4 sm:gap-5 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-8`}
            aria-labelledby="services-heading"
            role="list"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                isComingSoon={service.isComingSoon}
                delay={100 + index * 100}
                isMounted={mounted}
                learnMoreUrl={service.learnMoreUrl}
              />
            ))}
          </div>

          {/* Call to action section for better conversion */}
          {mounted && (
            <div
              className="mt-10 lg:mt-14 xl:mt-16 text-center animate-fadeIn"
              style={{ animationDelay: "800ms" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-blue-600 text-white font-montserrat font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-xs md:text-sm"
                aria-label="Contact us for a personalized solution"
                id="contact"
              >
                Get a Personalized Solution
                <svg
                  className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1"
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
          )}
        </div>

        {/* Decorative floating elements - optimized with aria-hidden */}
        <div
          className="absolute top-1/4 left-8 w-3 h-3 bg-blue-400 rounded-full opacity-30 animation-float"
          aria-hidden="true"
        ></div>
        <div
          className="absolute bottom-1/3 right-12 w-4 h-4 bg-blue-400 rounded-full opacity-30 animation-float"
          style={{ animationDelay: "1s" }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute top-2/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-20 animation-float"
          style={{ animationDelay: "1.5s" }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-20 animation-float"
          style={{ animationDelay: "0.5s" }}
          aria-hidden="true"
        ></div>
      </section>
    </>
  );
};

export default ServiceOverview;
