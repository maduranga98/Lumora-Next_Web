import React from "react";
import Link from "next/link";

const ServiceSection = () => {
  const services = [
    {
      title: "Google My Business Profile Management",
      description:
        "Maximize your local search visibility and attract more customers with our expert GMB profile management.",
      benefits: [
        "Improved local search ranking",
        "Enhanced customer engagement",
        "Increased foot traffic",
        "Better online reputation",
        "Higher conversions",
      ],
      icon: (
        <svg
          className="w-16 h-16 text-blue-600"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
      link: "/services/google-my-business",
      enabled: true,
      buttonClass: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "Curl Cipher – Salon Management System",
      description:
        "Revolutionize your salon operations with our comprehensive, cloud-based management system.",
      benefits: [
        "Streamlined appointment scheduling",
        "Efficient inventory management",
        "Role-based staff controls",
        "Detailed customer profiles",
        "Financial insights",
        "Improved customer experience",
      ],
      icon: (
        <svg
          className="w-16 h-16 text-purple-600"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
      link: "/services/curl-cipher",
      enabled: true,
      buttonClass: "bg-purple-600 hover:bg-purple-700",
    },
    {
      title: "Industrial Automation",
      description:
        "Streamline your industrial processes with our bespoke automation solutions.",
      benefits: [
        "Seamless PLC/SCADA integration",
        "IoT-enabled monitoring",
        "Enhanced safety",
        "Increased efficiency",
        "Reduced operational costs",
        "Improved productivity",
      ],
      icon: (
        <svg
          className="w-16 h-16 text-green-600"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
      link: "/services/industrial-automation",
      enabled: true,
      buttonClass: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Social Media Marketing",
      description:
        "Coming soon: Elevate your brand's online presence with our strategic social media marketing services.",
      isComingSoon: true,
      icon: (
        <svg
          className="w-16 h-16 text-orange-600"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
      link: "/services/social-media-marketing",
      enabled: false,
      buttonClass: "bg-orange-600 hover:bg-orange-700",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <div className="w-20 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Lumora Ventures, we're dedicated to delivering solutions that
            drive real business value and help you acquire and retain customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl p-8 ${
                service.isComingSoon
                  ? "bg-gradient-to-br from-orange-50 to-orange-50 border-2 border-dashed border-orange-300"
                  : "bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              }`}
            >
              {service.isComingSoon && (
                <div className="absolute -top-4 right-8 px-6 py-2 bg-orange-600 text-white text-sm font-semibold rounded-full transform rotate-12">
                  Coming Soon
                </div>
              )}

              <div className="flex items-start space-x-6">
                <div
                  className={`flex-shrink-0 ${
                    service.isComingSoon ? "opacity-50" : ""
                  }`}
                >
                  {service.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  {service.benefits && (
                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-center text-gray-700"
                        >
                          <svg
                            className={`w-5 h-5 mr-3 text-${service.color}-600`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}

                  {!service.isComingSoon ? (
                    <Link
                      href={service.link}
                      className={`inline-flex items-center px-6 py-3 rounded-full font-semibold text-white ${service.buttonClass} transition-colors duration-300 group`}
                    >
                      Learn More
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  ) : service.enabled ? (
                    <Link
                      href={service.link}
                      className={`inline-flex items-center px-6 py-3 rounded-full font-semibold text-white ${service.buttonClass} transition-colors duration-300 group`}
                    >
                      Request Early Access
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-gray-400 bg-gray-200 cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
