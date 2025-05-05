"use client";
import React from "react";

const styles = `
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

.animation-slideUp {
  animation: slideUp 0.8s ease-out forwards;
}

.animation-float {
  animation: float 3s ease-in-out infinite;
}

.animation-fadeIn {
  animation: fadeIn 0.6s ease-out forwards;
}

.animation-delay-100 {
  animation-delay: 0.1s;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}
`;

const ServiceCard = ({
  title,
  description,
  icon,
  isComingSoon = false,
  delay = 0,
}) => {
  return (
    <div
      className={`relative opacity-0 animation-slideUp animation-delay-${delay}`}
    >
      <div className="group bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-blue-100/80 rounded-xl" />
        </div>

        <div className="relative z-10">
          {/* Icon container with floating animation */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm group-hover:shadow">
                <div className="animation-float">
                  {React.cloneElement(icon, {
                    className:
                      "w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:scale-110",
                  })}
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-blue-400/20 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-sm text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>

          {isComingSoon && (
            <div className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full group-hover:bg-yellow-200 transition-colors duration-300">
              <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2 animate-pulse" />
              Coming Soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ServiceOverview = () => {
  // Add styles to head
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
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

  return (
    <section
      id="services"
      className="py-16 lg:py-24 2xl:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative">
        {/* Header with animation */}
        <div className="text-center mb-16 lg:mb-20 2xl:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4 2xl:mb-6 opacity-0 animation-fadeIn">
            Our Services
          </h2>
          <p className="text-lg lg:text-xl 2xl:text-2xl text-gray-600 max-w-3xl 2xl:max-w-4xl mx-auto opacity-0 animation-fadeIn animation-delay-100">
            Transform your business with our comprehensive suite of digital
            solutions
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 2xl:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              isComingSoon={service.isComingSoon}
              delay={100 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
