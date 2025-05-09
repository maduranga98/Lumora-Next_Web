"use client";
import React, { useState, useEffect } from "react";

const ServiceCard = ({
  title,
  description,
  icon,
  isComingSoon = false,
  delay = 0,
  isMounted = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);

  // Only set up intersection observer after mounting
  useEffect(() => {
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

  // Only apply animation classes after mounting
  const animationClass =
    isMounted && isVisible
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
    >
      <div className="group bg-white/90 backdrop-blur-md rounded-xl shadow-md border border-blue-50 p-6 sm:p-7 md:p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-indigo-50/90 rounded-xl" />
        </div>

        <div className="relative z-10">
          {/* Icon container */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="p-4 sm:p-5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl group-hover:from-blue-600 group-hover:to-indigo-700 transition-all duration-300 shadow-md group-hover:shadow-lg">
                {React.cloneElement(icon, {
                  className:
                    "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white transition-transform duration-300 group-hover:scale-110",
                })}
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-indigo-400/30 blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
            </div>
          </div>

          <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-montserrat font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-xs sm:text-sm md:text-sm lg:text-base font-inter text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300 px-1">
            {description}
          </p>

          {isComingSoon && (
            <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full group-hover:bg-orange-200 transition-colors duration-300">
              <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2 animate-pulse" />
              Coming Soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ServiceOverview = () => {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Set mounted state after hydration and track window width
  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Add animation styles to the document head after mounting
    if (typeof document !== "undefined") {
      const styleEl = document.createElement("style");
      styleEl.textContent = `
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animation-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .dark-overlay-gradient {
          background: linear-gradient(to bottom, rgba(30, 58, 138, 0.03), rgba(30, 58, 138, 0.08));
        }
      `;
      document.head.appendChild(styleEl);

      return () => {
        document.head.removeChild(styleEl);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const services = [
    {
      title: "Google My Business",
      description: "Boost local visibility and grow your customer base",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    },
    {
      title: "Curl Cipher",
      description: "Complete salon management in one powerful platform",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Industrial Automation",
      description: "Smart automation solutions for modern manufacturing",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    },
    {
      title: "Social Media Marketing",
      description: "Elevate your brand's digital presence",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

  // Determine the grid columns based on screen width
  const getGridCols = () => {
    if (windowWidth >= 1024) return "grid-cols-4";
    if (windowWidth >= 640) return "grid-cols-2";
    return "grid-cols-1";
  };

  return (
    <section
      id="solutions"
      className="py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #EBF5FF 0%, #F5F7FA 100%)",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />

        {/* Subtle grid pattern */}
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
        {/* Header with animation */}
        <div className="text-center mb-12 md:mb-14 lg:mb-16 xl:mb-20 2xl:mb-24">
          <h2
            className={`font-montserrat text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4 md:mb-5 lg:mb-6 ${
              mounted ? "animate-fadeIn" : "opacity-0"
            }`}
            style={{ animationDelay: "0ms" }}
          >
            Our Solutions
          </h2>
          <div className="w-20 h-1 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40 xl:h-1.5 mx-auto mb-6 sm:mb-7 md:mb-8 lg:mb-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <p
            className={`font-inter text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-gray-700 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto ${
              mounted ? "animate-fadeIn" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Innovative digital tools designed to streamline your business
            operations
          </p>
        </div>

        {/* Service cards grid */}
        <div
          className={`grid ${
            mounted ? getGridCols() : "grid-cols-1"
          } gap-5 sm:gap-6 md:gap-6 lg:gap-8 xl:gap-8 2xl:gap-10`}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              isComingSoon={service.isComingSoon}
              delay={100 + index * 100}
              isMounted={mounted}
            />
          ))}
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-1/4 left-8 w-3 h-3 bg-blue-400 rounded-full opacity-30 animation-float"></div>
      <div
        className="absolute bottom-1/3 right-12 w-4 h-4 bg-blue-400 rounded-full opacity-30 animation-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-2/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-20 animation-float"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-20 animation-float"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </section>
  );
};

export default ServiceOverview;
