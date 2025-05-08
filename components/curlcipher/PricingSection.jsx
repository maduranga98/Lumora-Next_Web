"use client";

import React from "react";
import { Check, Crown, Star, Diamond, Shield, Sparkles } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      id: "basic",
      name: "Essential",
      subtitle: "Perfect for emerging salons",
      price: 150,
      duration: "month",
      icon: <Star className="w-6 h-6 text-blue-300" />,
      gradient: "from-blue-900 via-indigo-900 to-blue-900",
      borderColor: "border-blue-400/30",
      accentColor: "text-blue-300",
      buttonGradient: "from-blue-500 to-indigo-500",
      features: [
        "No initial fee",
        "Unlimited staff accounts",
        "Unlimited appointments",
        "Business management",
        "Website booking integration",
        "Customer feedback system",
        "5 promotional post designs",
        "24/7 Live chat & email support",
      ],
    },
    {
      id: "premium",
      name: "Professional",
      subtitle: "Ideal for growing salons",
      price: 250,
      duration: "month",
      icon: <Crown className="w-6 h-6 text-blue-200" />,
      gradient: "from-blue-800 via-blue-900 to-indigo-900",
      borderColor: "border-blue-300/40",
      accentColor: "text-blue-200",
      buttonGradient: "from-blue-400 to-blue-500",
      isPopular: true,
      features: [
        "All Essential Plan features",
        "Unlimited product postings",
        "7 promotional post designs",
        "5 product designs",
        "Inventory management",
        "Point of sale (POS) system",
        "Staff attendance tracking",
        "Enhanced Google analytics",
      ],
    },
    {
      id: "luxury",
      name: "Elite Enterprise",
      subtitle: "Ultimate sophistication",
      price: 300,
      duration: "month",
      setupFee: 1500,
      icon: <Diamond className="w-6 h-6 text-blue-100" />,
      gradient: "from-blue-700 via-indigo-800 to-blue-900",
      borderColor: "border-blue-200/50",
      accentColor: "text-blue-100",
      buttonGradient: "from-blue-300 to-blue-400",
      features: [
        "All Professional Plan features",
        "4 branded apps for your salon",
        "10 promotional & product designs",
        "Advanced analytics & reports",
        "Paysheet management",
        "Staff & sales reports",
        "Real-time bug resolution",
        "Proactive maintenance",
      ],
    },
  ];

  const keyFeatures = [
    {
      icon: <Sparkles className="w-5 h-5 text-yellow-300" />,
      title: "Essential Management Suite",
      description:
        "Comprehensive tools streamlining operations, appointments, and business management.",
    },
    {
      icon: <Shield className="w-5 h-5 text-yellow-300" />,
      title: "Premium Support",
      description:
        "24/7 live chat, email, and phone support through dedicated channels.",
    },
    {
      icon: <Star className="w-5 h-5 text-yellow-300" />,
      title: "Endless Scalability",
      description:
        "Unlimited locations, staff, and clients as your business grows.",
    },
  ];

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-black via-indigo-950 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 md:w-[600px] lg:w-[800px] h-96 md:h-[600px] lg:h-[800px] bg-blue-500 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 md:w-[500px] lg:w-[700px] h-96 md:h-[500px] lg:h-[700px] bg-indigo-500 rounded-full blur-[130px] transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-light text-white mb-4 md:mb-6">
            Investment Plans
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Choose the perfect plan to elevate your salon to unprecedented
            heights
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mb-16 md:mb-20 lg:mb-24">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
                plan.isPopular ? "lg:scale-105 z-10" : "hover:scale-105"
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-400 to-indigo-400 text-black px-4 md:px-6 py-1 rounded-bl-lg md:rounded-bl-xl text-xs md:text-sm font-medium">
                  MOST POPULAR
                </div>
              )}

              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-90`}
              ></div>

              {/* Border Effect */}
              <div
                className={`absolute inset-0 border ${plan.borderColor} rounded-xl md:rounded-2xl`}
              ></div>

              {/* Content */}
              <div className="relative p-5 md:p-6 lg:p-8 z-10">
                {/* Plan Header */}
                <div className="mb-5 md:mb-6 lg:mb-8">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div
                      className={`p-2 md:p-2.5 rounded-lg bg-black/30 border ${plan.borderColor}`}
                    >
                      {plan.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-lg md:text-xl lg:text-xl font-serif ${plan.accentColor}`}
                      >
                        {plan.name}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm">
                        {plan.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4 md:mb-5 lg:mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                        ${plan.price}
                      </span>
                      <span className="text-gray-400 text-sm">
                        / {plan.duration}
                      </span>
                    </div>
                    {plan.setupFee && (
                      <p className="text-yellow-300 text-xs mt-1 md:mt-2">
                        One-time setup fee: ${plan.setupFee}
                      </p>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 lg:mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check
                        className={`w-4 h-4 mt-0.5 ${plan.accentColor} flex-shrink-0`}
                      />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-2.5 md:py-3 rounded-lg bg-gradient-to-r ${plan.buttonGradient} text-white text-sm md:text-base font-medium hover:shadow-lg hover:scale-105 transition-all duration-300`}
                >
                  {plan.id === "luxury"
                    ? "Request Elite Access"
                    : "Start Free Trial"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-center text-white mb-8 md:mb-10 lg:mb-12">
            Essential Features for Every Plan
          </h3>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-5 md:p-6 lg:p-7 rounded-xl bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-yellow-300/30 transition-all duration-300"
              >
                <div className="mb-3">{feature.icon}</div>
                <h4 className="text-base md:text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Option */}
        <div className="text-center mt-16 md:mt-20 lg:mt-24">
          <div className="inline-block p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-900 to-black border border-indigo-600/30">
            <h3 className="text-lg md:text-xl lg:text-2xl font-serif text-white mb-3 md:mb-4">
              Enterprise Solutions
            </h3>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-5 md:mb-6 lg:mb-7">
              Tailored solutions for large-scale operations with multiple
              locations and complex needs.
            </p>
            <button className="px-6 md:px-8 lg:px-10 py-2.5 md:py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm md:text-base rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              Discuss Custom Requirements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
