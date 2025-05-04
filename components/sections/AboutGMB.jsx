// components/sections/AboutGMB.jsx
"use client";

export default function AboutGMB() {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
        >
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
        >
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
        >
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
        >
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
        >
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
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Understanding Google Business Profile: Your Free Business Listing
            Powerhouse
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Think of Google Business Profile as your enhanced online business
            card, but on Google! It's a free tool that lets you control how your
            business appears on Google Search and Maps when customers are
            looking for businesses like yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              When someone searches "coffee shop near me" or your business name,
              your GBP shows your location, contact info, hours, photos,
              reviews, and more. If you want to be found locally, GBP is
              essential.
            </p>

            <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg mb-8">
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
            </div>
          </div>

          <div className="relative">
            <GBPIllustration />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What GBP Includes
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-teal-50 rounded-lg p-3">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// GBP Illustration Component
function GBPIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full max-w-lg mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Mobile Phone Frame */}
      <rect x="100" y="30" width="200" height="360" rx="20" fill="#1F2937" />
      <rect x="110" y="40" width="180" height="320" rx="16" fill="white" />

      {/* Top Bar */}
      <rect x="110" y="40" width="180" height="32" rx="16" fill="#F3F4F6" />
      <path d="M280 56 L285 62 L275 62 Z" fill="#9CA3AF" />

      {/* Google Maps Background */}
      <rect x="110" y="72" width="180" height="120" fill="#E5E7EB" />
      <path d="M130 100 c10-20 30-20 40 0 s-10 40-40 0" fill="#0F766E" />
      <circle cx="150" cy="100" r="8" fill="white" />

      {/* Business Card */}
      <rect x="125" y="160" width="150" height="180" rx="12" fill="white" />

      {/* Business Header */}
      <rect x="135" y="170" width="60" height="60" rx="8" fill="#FED7AA" />
      <circle cx="165" cy="200" r="16" fill="#0F766E" />
      <text x="205" y="195" fontSize="14" fontWeight="bold" fill="#111827">
        Coffee Casa
      </text>
      <text x="205" y="210" fontSize="12" fill="#6B7280">
        4.8
      </text>

      {/* Star Rating */}
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M${230 + i * 10} 205 L${232 + i * 10} 209 L${236 + i * 10} 209 L${
            233 + i * 10
          } 212 L${234 + i * 10} 216 L${230 + i * 10} 213 L${
            226 + i * 10
          } 216 L${227 + i * 10} 212 L${224 + i * 10} 209 L${
            228 + i * 10
          } 209 Z`}
          fill="#EAB308"
        />
      ))}

      {/* Business Info Icons */}
      <rect x="135" y="245" width="10" height="8" rx="1" fill="#D1D5DB" />
      <text x="155" y="252" fontSize="11" fill="#111827">
        123 Main St...
      </text>

      <circle cx="140" cy="265" r="5" fill="#D1D5DB" />
      <text x="155" y="270" fontSize="11" fill="#111827">
        Open now
      </text>

      <rect x="135" y="280" width="10" height="8" rx="1" fill="#D1D5DB" />
      <text x="155" y="287" fontSize="11" fill="#111827">
        Website
      </text>

      {/* Action Buttons */}
      <rect x="135" y="305" width="62" height="24" rx="4" fill="#0F766E" />
      <text x="145" y="319" fontSize="10" fill="white">
        Call
      </text>

      <rect x="208" y="305" width="62" height="24" rx="4" fill="#0F766E" />
      <text x="216" y="319" fontSize="10" fill="white">
        Directions
      </text>

      {/* Decorative Elements */}
      <circle cx="60" cy="60" r="30" fill="#0F766E" opacity="0.1" />
      <circle cx="340" cy="250" r="40" fill="#EAB308" opacity="0.1" />
    </svg>
  );
}
