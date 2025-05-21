// components/sections/ServicesGMB.jsx
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Script from "next/script";

export default function ServicesGMB() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/gmb-service-payments");
  };

  // Schema.org structured data for service offering
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Business Profile Management Service",
    description:
      "Complete Google Business Profile management service including profile creation, optimization, and ongoing management to improve local SEO and attract more customers.",
    provider: {
      "@type": "Organization",
      name: "Lumora Ventures",
      url: "https://www.lumoraventures.com",
    },
    serviceType: "Local SEO",
    category: "Digital Marketing",
    offers: {
      "@type": "Offer",
      price: "150.00",
      priceCurrency: "USD",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      url: "https://www.lumoraventures.com/gmb-service-payments",
      seller: {
        "@type": "Organization",
        name: "Lumora Ventures",
      },
    },
    serviceOutput: {
      "@type": "Thing",
      name: "Improved Local Search Visibility",
    },
    areaServed: "Local businesses",
  };

  const initialSetup = [
    "Google Business Profile creation or claiming of pre-existing profile",
    "Profile verification and secure ownership transfer",
    "Comprehensive profile enhancement and optimization",
    "Professional photos and logo uploaded with proper alt text",
    "SEO-optimized business description with targeted keywords",
    "Strategic categorization and subcategorization for maximum visibility",
    "Integration with your website and appointment booking systems",
    "Competitive local market analysis and positioning",
    "Complete Google Business Profile management setup",
    "Q&A section optimization and monitoring",
    "Product & service catalog setup and optimization",
    "Mobile-friendly profile ensuring visibility across all devices",
  ];

  const monthlyServices = [
    "Weekly promotional posts optimized for local engagement",
    "New products or service listings with SEO-friendly descriptions",
    "Strategic Questions and Answers management for higher conversions",
    "Professional review responses and reputation management",
    "Regular image and video uploads to keep content fresh",
    "Prompt updates for business information changes",
    "24/7 profile monitoring and issue resolution",
    "Competitor analysis and spam reporting",
    "Detailed geogrid keyword ranking report for local search",
    "Comprehensive monthly performance analytics report",
    "Real-time reporting dashboard for instant insights",
    "Google Business Profile optimization scorecard with actionable recommendations",
  ];

  const results = [
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
          <title>Map Visibility Icon</title>
          <desc>Icon representing increased visibility in Google Maps</desc>
          <path
            d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5 7 1 12 1C17 1 21 5 21 10Z"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="3" stroke="#0F766E" strokeWidth="2" />
        </svg>
      ),
      title: "Increased Google Maps visibility",
      description: "Higher rankings in local map pack results",
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
          <title>Website Traffic Icon</title>
          <desc>Icon representing more website visits and phone calls</desc>
          <path
            d="M18 3H6C5.46957 3 4.96086 3.21071 4.58579 3.58579C4.21071 3.96086 4 4.46957 4 5V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V5C20 4.46957 19.7893 3.96086 19.4142 3.58579C19.0391 3.21071 18.5304 3 18 3Z"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 9H15"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 13H15"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 17H13"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "More website visits and calls",
      description: "Increased direct customer inquiries",
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
          <title>Conversion Rate Icon</title>
          <desc>Icon representing higher conversion rates</desc>
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#0F766E"
            strokeWidth="2"
          />
          <path
            d="M16 8L12 12L16 16"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 8L12 12L8 16"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Higher conversion rates",
      description: "More visitors becoming customers",
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
          <title>Lead Quality Icon</title>
          <desc>Icon representing better qualified leads</desc>
          <path
            d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z"
            stroke="#0F766E"
            strokeWidth="2"
          />
          <path
            d="M12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22Z"
            stroke="#0F766E"
            strokeWidth="2"
          />
          <path
            d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
            stroke="#0F766E"
            strokeWidth="2"
          />
          <path
            d="M18 12H14M10 12H6M4 4L12 18M18 12L20 10"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Better qualified leads",
      description: "Higher quality potential customers",
    },
  ];

  return (
    <>
      {/* Add structured data for search engines */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section
        id="services"
        className="py-16 lg:py-24 bg-gray-50"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main heading with semantic HTML */}
          <header className="text-center mb-16">
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Complete Google Business Profile Management
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              One simple service that handles every aspect of your Google
              Business Profile to maximize your local visibility, improve your
              local SEO rankings, and attract more customers to your business.
            </p>
          </header>

          {/* Pricing Card with proper semantic structure */}
          <section
            aria-labelledby="pricing-heading"
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Background decoration - marked as aria-hidden */}
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="text-center mb-8">
                  <h3 id="pricing-heading" className="text-2xl font-bold mb-2">
                    All-Inclusive Google Business Profile Service
                  </h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">$150</span>
                    <span className="text-2xl">/month</span>
                  </div>
                  <p className="text-lg mb-8">
                    Initial profile setup and ongoing management in one simple
                    package
                  </p>
                  <Link
                    href="/gmb-service-payments"
                    onClick={handleGetStarted}
                    className="inline-block bg-yellow-400 text-teal-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition"
                    aria-label="Get started with Google Business Profile management service"
                  >
                    Get Started Today
                  </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-center mt-12">
                  <div>
                    <svg
                      className="w-8 h-8 mx-auto mb-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <title>No Setup Fees Icon</title>
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 6V12L16 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 18L18 21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>No setup fees</p>
                  </div>
                  <div>
                    <svg
                      className="w-8 h-8 mx-auto mb-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <title>No Contracts Icon</title>
                      <path
                        d="M9 12L11 14L15 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <p>No long-term contracts</p>
                  </div>
                  <div>
                    <svg
                      className="w-8 h-8 mx-auto mb-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <title>Cancel Anytime Icon</title>
                      <path
                        d="M18 6L6 18M6 6L18 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>Cancel anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service details with semantic lists */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Initial Setup */}
            <section aria-labelledby="setup-heading">
              <h3
                id="setup-heading"
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                First, We Create & Optimize Your Google Business Profile
              </h3>
              <ul className="space-y-3" role="list">
                {initialSetup.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                    role="listitem"
                  >
                    <svg
                      className="w-5 h-5 text-teal-600 flex-shrink-0"
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
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Monthly Services */}
            <section aria-labelledby="monthly-heading">
              <h3
                id="monthly-heading"
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                After That, Each Month You'll Get These Local SEO Benefits
              </h3>
              <ul className="space-y-3" role="list">
                {monthlyServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                    role="listitem"
                  >
                    <svg
                      className="w-5 h-5 text-teal-600 flex-shrink-0"
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
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Results section with semantic HTML */}
          <section aria-labelledby="results-heading" className="mb-16">
            <h3
              id="results-heading"
              className="text-3xl font-bold text-gray-900 mb-6 text-center"
            >
              The Local Search Results You Can Expect
            </h3>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              Our clients typically see significant improvements in their local
              search performance and Google Business Profile metrics, including:
            </p>
            <div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              role="list"
            >
              {results.map((result, index) => (
                <article
                  key={index}
                  className="bg-teal-50 rounded-lg p-6 text-center"
                  role="listitem"
                >
                  <div className="mb-4 flex justify-center">{result.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {result.title}
                  </h4>
                  <p className="text-gray-700 text-sm">{result.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Final CTA with proper link */}
          <section aria-labelledby="cta-heading" className="text-center">
            <h3
              id="cta-heading"
              className="text-2xl font-bold text-gray-900 mb-4"
            >
              Ready to Transform Your Local Online Presence with Google Business
              Profile?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Get started today with our professional Google Business Profile
              management service and start seeing improved local search rankings
              and more customer inquiries in as little as 30 days.
            </p>
            <Link
              href="/gmb-service-payments"
              onClick={handleGetStarted}
              className="inline-block bg-teal-600 text-white px-12 py-5 rounded-lg font-bold text-lg hover:bg-teal-700 transition duration-300"
              aria-label="Get started with Google Business Profile management"
            >
              Get Started Today
            </Link>
          </section>
        </div>
      </section>
    </>
  );
}
