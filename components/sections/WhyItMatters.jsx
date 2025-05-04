// components/sections/WhyItMatters.jsx
"use client";

export default function WhyItMatters() {
  const benefits = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5 7 1 12 1C17 1 21 5 21 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Increase Visibility in Local Search",
      description:
        "Be seen by customers actively searching for your products or services in your area. Appear prominently in Google Maps and local search results.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 13C10 14.1046 10.8954 15 12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M2 7L12 2L22 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13V22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Drive More Website Traffic & Inquiries",
      description:
        "GBP listing prominently displays your website link and phone number, making it easy for customers to connect and convert.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M9 12L12 15L15 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Build Trust and Credibility",
      description:
        "Showcase positive customer reviews and build social proof, influencing potential customers' decisions in your favor.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
        </svg>
      ),
      title: "Stand Out From Competitors",
      description:
        "A fully optimized GBP makes your business more attractive and informative than basic listings, helping you capture market share.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="9"
            y1="9"
            x2="15"
            y2="15"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="15"
            y1="9"
            x2="9"
            y2="15"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Control Your Online Story",
      description:
        "Manage your business information, photos, and respond to reviews, actively shaping your online reputation.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2V8H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="16"
            y1="13"
            x2="8"
            y2="13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="16"
            y1="17"
            x2="8"
            y2="17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="10"
            y1="9"
            x2="8"
            y2="9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Boost Local SEO",
      description:
        "GBP is a key factor in ranking higher in local search results, improving your overall SEO strategy and digital presence.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="12" r="1" fill="currentColor" />
          <circle cx="15" cy="12" r="1" fill="currentColor" />
          <path
            d="M20 21V19C20 17.1362 18.7252 15.5701 17.0005 15M14 13C16.2091 13 18 11.2091 18 9C18 6.79086 16.2091 5 14 5M8 13H3C2.44772 13 2 13.4477 2 14V19C2 19.5523 2.44772 20 3 20H8C8.55228 20 9 19.5523 9 19V14C9 13.4477 8.55228 13 8 13Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Engage Directly with Customers",
      description:
        "Respond to reviews and questions, fostering customer loyalty and building lasting relationships that drive repeat business.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 9L12 2L21 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 22H3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 22V9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 22V9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22V5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Free Marketing Powerhouse",
      description:
        "GBP is a free platform offering incredible marketing reach and customer engagement opportunities with measurable ROI.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-600 to-teal-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full border-8 border-white"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full border-8 border-white"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-yellow-400 text-teal-900 font-bold mb-6">
            Don't Get Left Behind!
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unlock a Flood of Local Customers: The Undeniable Importance of GBP
          </h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            A strong GBP is your 24/7 online storefront and customer magnet.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition duration-300"
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 text-white">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="bg-yellow-400 text-teal-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-105">
            Get Your GBP Optimized Now
          </button>
        </div>

        {/* Illustration */}
        <div className="mt-16 flex justify-center">
          <MarketingIllustration />
        </div>
      </div>
    </section>
  );
}

// Marketing Illustration Component - Fixed with hardcoded values
function MarketingIllustration() {
  return (
    <svg
      viewBox="0 0 400 200"
      className="w-full max-w-2xl"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Globe */}
      <circle cx="200" cy="100" r="60" fill="#E6F7F7" />
      <path
        d="M140 100 C160 70 240 70 260 100 M140 100 C160 130 240 130 260 100"
        stroke="#0F766E"
        strokeWidth="2"
      />
      <line
        x1="200"
        y1="40"
        x2="200"
        y2="160"
        stroke="#0F766E"
        strokeWidth="2"
      />
      <line
        x1="140"
        y1="100"
        x2="260"
        y2="100"
        stroke="#0F766E"
        strokeWidth="2"
      />

      {/* Satellites/Icons orbiting - using fixed values instead of calculations */}
      <g>
        <circle cx="200" cy="18" r="12" fill="#FED7AA" />
        <text
          x="200"
          y="23"
          fontSize="16"
          textAnchor="middle"
          fill="#0F766E"
          fontWeight="bold"
        >
          $
        </text>
      </g>
      <g>
        <circle cx="135" cy="53" r="12" fill="#FED7AA" />
        <text
          x="135"
          y="58"
          fontSize="16"
          textAnchor="middle"
          fill="#0F766E"
          fontWeight="bold"
        >
          📱
        </text>
      </g>
      <g>
        <circle cx="265" cy="53" r="12" fill="#FED7AA" />
        <text
          x="265"
          y="58"
          fontSize="16"
          textAnchor="middle"
          fill="#0F766E"
          fontWeight="bold"
        >
          ⭐
        </text>
      </g>
      <g>
        <circle cx="135" cy="147" r="12" fill="#FED7AA" />
        <text
          x="135"
          y="152"
          fontSize="16"
          textAnchor="middle"
          fill="#0F766E"
          fontWeight="bold"
        >
          🔍
        </text>
      </g>
      <g>
        <circle cx="265" cy="147" r="12" fill="#FED7AA" />
        <text
          x="265"
          y="152"
          fontSize="16"
          textAnchor="middle"
          fill="#0F766E"
          fontWeight="bold"
        >
          🌐
        </text>
      </g>

      {/* Arrow pointing up */}
      <path d="M200 20 L190 30 L210 30 Z" fill="#EAB308" />
      <line x1="200" y1="20" x2="200" y2="0" stroke="#EAB308" strokeWidth="2" />

      {/* Small floating elements */}
      <circle cx="100" cy="50" r="4" fill="#EAB308" />
      <circle cx="300" cy="150" r="4" fill="#FED7AA" />
      <circle cx="320" cy="60" r="4" fill="#EAB308" />
    </svg>
  );
}
