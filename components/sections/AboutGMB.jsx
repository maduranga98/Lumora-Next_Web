// components/sections/AboutGMB.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function AboutGMB() {
  // Schema.org structured data for Google Business Profile service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Business Profile Management",
    description:
      "Professional Google Business Profile (formerly Google My Business) management service to improve your local SEO and attract more customers through Google Search and Maps.",
    provider: {
      "@type": "Organization",
      name: "Lumora Ventures",
      url: "https://www.lumoraventures.com",
    },
    areaServed: "Local businesses",
    serviceType: "Local SEO",
    category: "Digital Marketing",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
    },
  };

  // FAQ structured data for the features section
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is included in Google Business Profile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google Business Profile includes business information (name, address, phone, website), visual content (photos), customer engagement through reviews, updates & offers, business hours, and a Q&A section for potential customers' questions.",
        },
      },
      {
        "@type": "Question",
        name: "How effective is Google Business Profile for local businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Businesses with complete Google Business Profiles get 7x more clicks than those with incomplete listings, and are 70% more likely to attract location visits.",
        },
      },
    ],
  };

  const features = [
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
          <title>Business Information Icon</title>
          <desc>Icon representing business contact details</desc>
          <path
            d="M9 11H15M9 15H15M9 19L15 19M3 3L21 3V21L3 21C3 17.6667 3 13.3333 3 7C3 5.66667 3 4.33333 3 3Z"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Business Information",
      description: "Your business name, address, phone number, and website",
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
          <title>Visual Content Icon</title>
          <desc>Icon representing photos and images</desc>
          <rect
            x="3"
            y="4"
            width="18"
            height="14"
            rx="2"
            stroke="#0F766E"
            strokeWidth="2"
          />
          <circle cx="9" cy="9" r="2" stroke="#0F766E" strokeWidth="2" />
          <path
            d="M16 15L13 12L10 15"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Visual Content",
      description: "Photos of your business, products, and services",
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
          <title>Customer Engagement Icon</title>
          <desc>Icon representing customer reviews and responses</desc>
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Customer Engagement",
      description: "Customer reviews and your responses to them",
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
          <title>Updates & Offers Icon</title>
          <desc>Icon representing posts and updates about business offers</desc>
          <rect
            x="3"
            y="6"
            width="18"
            height="15"
            rx="2"
            stroke="#0F766E"
            strokeWidth="2"
          />
          <path d="M3 10H21" stroke="#0F766E" strokeWidth="2" />
          <path
            d="M8 6V3"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 6V3"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Updates & Offers",
      description: "Posts and updates about offers, events, and news",
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
          <title>Business Hours Icon</title>
          <desc>Icon representing business opening hours</desc>
          <circle cx="12" cy="12" r="9" stroke="#0F766E" strokeWidth="2" />
          <path
            d="M12 8V12L15 15"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Business Hours",
      description: "Business hours, including holiday schedules",
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
          <title>Q&A Icon</title>
          <desc>Icon representing questions and answers from customers</desc>
          <path
            d="M9 12H15M9 16H15M9 8H15"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="6" cy="8" r="1" fill="#0F766E" />
          <circle cx="6" cy="12" r="1" fill="#0F766E" />
          <circle cx="6" cy="16" r="1" fill="#0F766E" />
        </svg>
      ),
      title: "Q&A",
      description: "Questions & answers from potential customers",
    },
  ];

  return (
    <>
      {/* Add structured data for SEO */}
      <Script
        id="about-gmb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <section
        className="py-16 lg:py-24 bg-gray-50"
        id="about"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Understanding Google Business Profile: Your Free Business Listing
              Powerhouse
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Think of Google Business Profile (formerly Google My Business or
              GMB) as your enhanced online business card on Google. It's a free
              tool that lets you control how your business appears on Google
              Search and Maps when customers are looking for local businesses
              like yours.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                When someone searches for "
                <span className="font-medium">businesses near me</span>" or your
                specific business name, your Google Business Profile shows your
                location, contact information, hours of operation, photos,
                customer reviews, and more. For local SEO and visibility, a
                well-optimized GBP is essential.
              </p>

              <div className="bg-gradient-to-r from-teal-100 to-teal-200 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-xl text-teal-800 mb-2">
                  Did you know?
                </h3>
                <p className="text-teal-700 mb-4">
                  Businesses with complete Google Business Profiles get{" "}
                  <span className="font-bold">7x more clicks</span> than those
                  with incomplete listings, and are{" "}
                  <span className="font-bold">70% more likely</span> to attract
                  location visits.
                </p>
                <Link
                  href="#contact"
                  className="inline-block text-teal-800 font-medium hover:text-teal-900"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" });
                    // Update URL for better SEO
                    window.history.pushState(null, "", `#contact`);
                  }}
                >
                  Get your profile optimized →
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/gmb-about.webp"
                alt="Google Business Profile dashboard showing business information, reviews, and analytics that help improve local search visibility"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="eager"
              />
            </div>
          </div>

          <div>
            <h3
              className="text-2xl font-bold text-gray-900 mb-8 text-center"
              id="gmb-features"
            >
              Key Components of Google Business Profile
            </h3>
            <div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              role="list"
            >
              {features.map((feature, index) => (
                <article
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition duration-300"
                  role="listitem"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-teal-100 rounded-lg p-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-6">
                Ready to maximize your Google Business Profile's potential? Our
                team of local SEO experts can help you optimize every aspect of
                your profile to attract more customers and outrank competitors.
              </p>
              <Link
                href="#services"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" });
                  window.history.pushState(null, "", `#services`);
                }}
              >
                Explore Our GBP Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
