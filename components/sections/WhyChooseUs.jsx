// components/sections/WhyChooseUs.jsx
"use client";

import { useCallback } from "react";
import Link from "next/link";
import Script from "next/script";

export default function WhyChooseUs() {
  // Schema.org structured data for service offering
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Google Business Profile Management Services by Lumora Ventures",
    description:
      "Expert Google Business Profile (GMB) management services with personalized support, data-driven strategies, and proven results for local businesses.",
    provider: {
      "@type": "Organization",
      name: "Lumora Ventures",
      url: "https://www.lumoraventures.com",
    },
    areaServed: "Local businesses",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Google Business Profile Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GBP Setup & Optimization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ongoing GBP Management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GBP Performance Analytics",
          },
        },
      ],
    },
  };

  // HowTo schema for the process steps
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How We Optimize Your Google Business Profile",
    description:
      "Our simple 3-step process for optimizing and managing your Google Business Profile to attract more local customers",
    step: [
      {
        "@type": "HowToStep",
        name: "Discovery",
        text: "We learn about your business goals and current Google Business Profile situation",
      },
      {
        "@type": "HowToStep",
        name: "Setup & Optimization",
        text: "We implement best practices to maximize your visibility in local search results",
      },
      {
        "@type": "HowToStep",
        name: "Ongoing Management",
        text: "We maintain and continuously improve your Google Business Profile presence",
      },
    ],
  };

  const serviceGuarantees = [
    "Dedicated account manager for personalized support",
    "100% transparent reporting and communication",
    "Regular optimization updates based on performance data",
    "Quick response times (24 hours or less)",
    "No long-term contracts — you stay because you want to",
    "Satisfaction guarantee or your money back",
  ];

  const advantages = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <title>Expertise & Experience Icon</title>
          <desc>
            Icon representing professional expertise in Google Business Profile
            management
          </desc>
          <path d="M12 14L9 11H15L12 14Z" fill="#0F766E" />
          <circle cx="12" cy="16" r="1" fill="#0F766E" />
          <circle cx="8" cy="8" r="3" fill="#0F766E" />
          <circle cx="16" cy="8" r="3" fill="#0F766E" />
          <path
            d="M7 11V21H17V11"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Expertise & Experience",
      description:
        "Our team are Google Business Profile specialists with years of digital marketing experience. We know what works for local SEO.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <title>Proven Results Icon</title>
          <desc>
            Icon representing measurable success with Google Business Profile
            management
          </desc>
          <path
            d="M9 12L12 15L15 10"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="10" stroke="#0F766E" strokeWidth="2" />
          <path
            d="M17 6L18 7"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 18L7 17"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Proven Results",
      description:
        "We have a track record of helping businesses like yours improve their local search rankings and attract more customers through optimized Google Business Profiles.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <title>Time Saving Icon</title>
          <desc>Clock icon representing time and effort savings</desc>
          <circle cx="12" cy="12" r="10" stroke="#0F766E" strokeWidth="2" />
          <path
            d="M12 6V12L16 14"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Save Time & Effort",
      description:
        "Managing Google Business Profile can be time-consuming. Let us handle the complexities so you can focus on running your business.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <title>Data-Driven Strategy Icon</title>
          <desc>Icon representing analytics and optimization strategies</desc>
          <path
            d="M14 14H9V9"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 9L9 15M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Data-Driven Strategies",
      description:
        "We use analytics and local SEO best practices to continuously optimize your Google Business Profile for maximum performance and visibility.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <title>Personalized Service Icon</title>
          <desc>Icon representing customized service approach</desc>
          <path
            d="M12 6V12M12 12V18M12 12H6M12 12H18"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="10" stroke="#0F766E" strokeWidth="2" />
        </svg>
      ),
      title: "Personalized Service",
      description:
        "We tailor our Google Business Profile management approach to your specific business needs and local market. You're not just another number to us.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <title>Comprehensive Service Icon</title>
          <desc>
            Icon representing complete service packages for Google Business
            Profile
          </desc>
          <rect
            x="4"
            y="5"
            width="16"
            height="15"
            rx="1"
            stroke="#0F766E"
            strokeWidth="2"
          />
          <path
            d="M12 9V13L14 15"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5"
            stroke="#0F766E"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Comprehensive Service Suite",
      description:
        "From initial setup to ongoing management, we offer everything you need for Google Business Profile success in local search results.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      description:
        "We learn about your business goals and current Google Business Profile situation",
    },
    {
      number: "2",
      title: "Setup & Optimization",
      description:
        "We implement best practices to maximize your visibility in local search results",
    },
    {
      number: "3",
      title: "Ongoing Management",
      description:
        "We maintain and continuously improve your Google Business Profile presence",
    },
  ];

  // Function to handle scroll with better SEO via URL updates
  const scrollToSection = (sectionId, e) => {
    if (e) e.preventDefault();

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = window.innerWidth >= 1280 ? 100 : 80;
      const offsetPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash for better SEO and analytics tracking
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <>
      {/* Add structured data for search engines */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <section
        id="why-choose"
        className="py-16 lg:py-24 bg-white"
        aria-labelledby="why-choose-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with semantic HTML */}
          <header className="text-center mb-16">
            <h2
              id="why-choose-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Stop Struggling with Google Business Profile - Let Lumora Ventures
              Take the Lead
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We Make Google Business Profile Management Simple, Effective, and
              Results-Driven for Local Businesses.
            </p>
          </header>

          {/* Our Expert Team card */}
          <div className="bg-teal-600 text-white rounded-2xl p-8 mb-16 text-center">
            <div className="flex items-center justify-center gap-8">
              <div aria-hidden="true">
                <TeamIllustration />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Our Expert Team</h3>
                <p className="text-lg">
                  Google Business Profile specialists with deep local search
                  experience
                </p>
              </div>
            </div>
          </div>

          {/* Service Guarantees with semantic list structure */}
          <section aria-labelledby="guarantees-heading" className="mb-20">
            <h3
              id="guarantees-heading"
              className="text-2xl font-bold text-gray-900 mb-8 text-center"
            >
              Our Service Guarantees
            </h3>
            <ul className="grid md:grid-cols-3 gap-6" role="list">
              {serviceGuarantees.map((guarantee, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-teal-50 p-4 rounded-lg"
                  role="listitem"
                >
                  <svg
                    className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-700">{guarantee}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Advantages grid with semantic article elements */}
          <section aria-labelledby="advantages-heading" className="mb-20">
            <h3
              id="advantages-heading"
              className="text-2xl font-bold text-gray-900 mb-8 text-center"
            >
              Why Choose Our Google Business Profile Management
            </h3>
            <div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              role="list"
            >
              {advantages.map((advantage, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition duration-300"
                  role="listitem"
                >
                  <div className="mb-4">{advantage.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-600">{advantage.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Process section with semantic ordered list */}
          <section
            aria-labelledby="process-heading"
            className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16"
          >
            <h3
              id="process-heading"
              className="text-3xl font-bold text-gray-900 mb-12 text-center"
            >
              Our Simple Process
            </h3>
            <ol className="grid md:grid-cols-3 gap-8" role="list">
              {processSteps.map((step, index) => (
                <li key={index} className="text-center" role="listitem">
                  <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600">{step.description}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* CTA section with proper link element */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to maximize your local search presence?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our Google Business Profile experts handle your local SEO
              optimization so you can focus on running your business and serving
              your customers.
            </p>
            <Link
              href="#services"
              onClick={(e) => scrollToSection("services", e)}
              className="inline-block bg-teal-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              aria-label="Go to our Google Business Profile services"
            >
              <span className="inline-flex items-center">
                Get Started Today
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// Team Illustration Component with improved accessibility
function TeamIllustration() {
  return (
    <svg
      viewBox="0 0 80 40"
      className="w-20 h-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of Google Business Profile specialists team"
    >
      <title>Team of GBP Specialists</title>
      <desc>
        Illustration showing a team of Google Business Profile experts with
        checkmarks indicating expertise
      </desc>

      {/* Group of people */}
      <circle cx="20" cy="16" r="8" fill="#FFF7ED" />
      <path d="M10 24 Q15 20 25 20 Q30 24 30 28" fill="#FED7AA" />
      <circle cx="40" cy="16" r="8" fill="#FED7AA" />
      <path d="M30 24 Q35 20 45 20 Q50 24 50 28" fill="#FFF7ED" />
      <circle cx="60" cy="16" r="8" fill="#FFF7ED" />
      <path d="M50 24 Q55 20 65 20 Q70 24 70 28" fill="#FED7AA" />

      {/* Check marks above */}
      <path
        d="M18 8 L20 10 L24 6"
        stroke="#34D399"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 8 L40 10 L44 6"
        stroke="#34D399"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58 8 L60 10 L64 6"
        stroke="#34D399"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
