// components/sections/AboutGMB.jsx
"use client";

import Image from "next/image";

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
    <section className="py-16 lg:py-24 bg-gray-50" id="about">
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
              When someone searches "beauty salon near me" or your business
              name, your GBP shows your location, contact info, hours, photos,
              reviews, and more. If you want to be found locally, GBP is
              essential.
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
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/gmb-about.png"
              alt="Google Business Profile illustration showing a mobile phone with a business listing and a person using a laptop"
              fill
              className="object-contain"
              priority
            />
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
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition duration-300"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
