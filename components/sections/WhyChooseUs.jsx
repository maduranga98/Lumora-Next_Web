// components/sections/WhyChooseUs.jsx
"use client";

export default function WhyChooseUs() {
  const serviceGuarantees = [
    "Dedicated account manager for personalized support",
    "100% transparent reporting and communication",
    "Regular optimization updates based on performance",
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
        >
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
        "Our team are Google Business Profile specialists with years of digital marketing experience. We know what works.",
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
        "We have a track record of helping businesses like yours improve their local search rankings and attract more customers.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
        "Managing GBP can be time-consuming. Let us handle the complexities so you can focus on running your business.",
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
        "We use analytics and best practices to continuously optimize your GBP for maximum performance.",
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
        "We tailor our approach to your specific business needs and goals. You're not just another number to us.",
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
        "From initial setup to ongoing management, we offer everything you need for GBP success.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      description:
        "We learn about your business goals and current GBP situation",
    },
    {
      number: "2",
      title: "Setup & Optimization",
      description: "We implement best practices to maximize your visibility",
    },
    {
      number: "3",
      title: "Ongoing Management",
      description: "We maintain and continuously improve your GBP presence",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stop Struggling with GBP - Let Lumora Ventures Take the Lead
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We Make Google Business Profile Management Simple, Effective, and
            Results-Driven.
          </p>
        </div>

        {/* Our Expert Team card */}
        <div className="bg-teal-600 text-white rounded-2xl p-8 mb-16 text-center">
          <div className="flex items-center justify-center gap-8">
            <TeamIllustration />
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Our Expert Team</h3>
              <p className="text-lg">
                GBP specialists with deep local search experience
              </p>
            </div>
          </div>
        </div>

        {/* Service Guarantees */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Service Guarantees
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {serviceGuarantees.map((guarantee, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-teal-50 p-4 rounded-lg"
              >
                <svg
                  className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-700">{guarantee}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages grid */}
        <div className="mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition duration-300"
              >
                <div className="mb-4">{advantage.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h4>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Simple Process
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to maximize your local presence?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our experts handle your Google Business Profile so you can focus
            on running your business.
          </p>
          <button className="bg-teal-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}

// Team Illustration Component
function TeamIllustration() {
  return (
    <svg
      viewBox="0 0 80 40"
      className="w-20 h-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
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
