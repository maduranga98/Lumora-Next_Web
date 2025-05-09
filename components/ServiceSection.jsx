"use client";
import React from "react";
import Link from "next/link";

const AnimatedElement = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const ref = React.useRef(null);

  // Handle mounting to prevent hydration issues
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, isMounted]);

  return (
    <div
      ref={ref}
      className={`${className} ${
        isMounted ? "transition-all duration-800 ease-out" : ""
      }`}
      style={
        isMounted
          ? {
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(50px)",
            }
          : { opacity: 1 } // Avoid hydration mismatch
      }
    >
      {children}
    </div>
  );
};

const ServiceSection = () => {
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-blue-600"
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
      link: "/google-my-business",
      enabled: true,
      buttonClass: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "Curl Cipher – Salon Management",
      description:
        "Revolutionize your salon operations with our comprehensive management system.",
      benefits: [
        "Streamlined appointment scheduling",
        "Efficient inventory management",
        "Role-based staff controls",
        "Detailed customer profiles",
        "Financial insights dashboard",
        "Enhanced customer experience",
      ],
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-purple-600"
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
      link: "/curl-cipher",
      enabled: true,
      buttonClass: "bg-purple-600 hover:bg-purple-700",
    },
    {
      title: "Industrial Automation",
      description:
        "Streamline your industrial processes with our bespoke automation solutions.",
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
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-green-600"
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
      link: "/industrial-automation",
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
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-orange-600"
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
      link: "/social-media-marketing",
      enabled: false,
      buttonClass: "bg-orange-600 hover:bg-orange-700",
    },
  ];

  // Helper for responsive classes
  const getGridCols = () => {
    if (windowWidth >= 1536) return "grid-cols-2"; // 2xl and up
    if (windowWidth >= 1024) return "grid-cols-2"; // lg and up
    if (windowWidth >= 768) return "grid-cols-2"; // md and up
    return "grid-cols-1"; // Below md
  };

  return (
    <section
      id="services"
      className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(to bottom, #EBF5FF 0%, #F5F7FA 100%)",
      }}
    >
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            Our Services
          </h2>
          <div className="w-20 h-1 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40 xl:h-1.5 mx-auto mb-6 sm:mb-7 md:mb-8 lg:mb-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <p className="font-inter text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-gray-700 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
            At Lumora Ventures, we're dedicated to delivering solutions that
            drive real business value.
          </p>
        </div>

        <div
          className={`grid ${
            mounted ? getGridCols() : "grid-cols-1"
          } gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16`}
        >
          {services.map((service, index) => (
            <AnimatedElement key={index} delay={index * 100}>
              <div
                className={`group relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 ${
                  service.isComingSoon
                    ? "bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-dashed border-orange-300"
                    : "bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                }`}
              >
                {service.isComingSoon && (
                  <div className="absolute -top-3 sm:-top-4 right-4 sm:right-8 px-3 sm:px-4 py-1 sm:py-1.5 bg-orange-600 text-white text-xs sm:text-sm font-semibold rounded-full transform rotate-12">
                    Coming Soon
                  </div>
                )}

                <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  <div
                    className={`flex-shrink-0 ${
                      service.isComingSoon ? "opacity-50" : ""
                    }`}
                  >
                    {service.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-montserrat text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                      {service.title}
                    </h3>
                    <p className="font-inter text-sm sm:text-base md:text-base lg:text-lg xl:text-lg text-gray-600 mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {service.benefits && (
                      <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4 mb-6 sm:mb-7 md:mb-8 lg:mb-10">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="flex items-start sm:items-center text-xs sm:text-sm md:text-sm lg:text-base xl:text-base text-gray-700"
                          >
                            <svg
                              className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 mt-0.5 sm:mt-0 text-${service.color}-600 flex-shrink-0`}
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
                        className={`inline-flex items-center px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-lg font-montserrat font-semibold text-xs sm:text-sm md:text-sm lg:text-base text-white ${service.buttonClass} transition-all duration-300 shadow-md hover:shadow-lg group`}
                      >
                        Learn More
                        <svg
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
                        className={`inline-flex items-center px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-lg font-montserrat font-semibold text-xs sm:text-sm md:text-sm lg:text-base text-white ${service.buttonClass} transition-all duration-300 shadow-md hover:shadow-lg group`}
                      >
                        Request Early Access
                        <svg
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
                        className="inline-flex items-center px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-lg font-montserrat font-semibold text-xs sm:text-sm md:text-sm lg:text-base text-gray-400 bg-gray-200 cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
