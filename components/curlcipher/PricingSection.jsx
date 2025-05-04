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
      icon: <Star className="w-8 h-8 text-blue-300" />,
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
      icon: <Crown className="w-8 h-8 text-blue-200" />,
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
      icon: <Diamond className="w-8 h-8 text-blue-100" />,
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
      icon: <Sparkles className="w-6 h-6 text-yellow-300" />,
      title: "Essential Management Suite",
      description:
        "Comprehensive tools streamlining operations, appointments, and business management.",
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-300" />,
      title: "Premium Support",
      description:
        "24/7 live chat, email, and phone support through dedicated channels.",
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-300" />,
      title: "Endless Scalability",
      description:
        "Unlimited locations, staff, and clients as your business grows.",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-indigo-950 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-blue-500 rounded-full blur-[200px] transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-500 rounded-full blur-[180px] transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-white mb-6">
            Investment Plans
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto">
            Choose the perfect plan to elevate your salon to unprecedented
            heights
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${
                plan.isPopular ? "lg:scale-105 z-10" : "hover:scale-105"
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-400 to-indigo-400 text-black px-8 py-1 rounded-bl-xl font-medium">
                  MOST POPULAR
                </div>
              )}

              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-90`}
              ></div>

              {/* Border Effect */}
              <div
                className={`absolute inset-0 border-2 ${plan.borderColor} rounded-3xl`}
              ></div>

              {/* Content */}
              <div className="relative p-10 z-10">
                {/* Plan Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 rounded-lg bg-black/30 border ${plan.borderColor}`}
                    >
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className={`text-2xl font-serif ${plan.accentColor}`}>
                        {plan.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{plan.subtitle}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">
                        ${plan.price}
                      </span>
                      <span className="text-gray-400">/ {plan.duration}</span>
                    </div>
                    {plan.setupFee && (
                      <p className="text-yellow-300 text-sm mt-2">
                        One-time setup fee: ${plan.setupFee}
                      </p>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 mt-1 ${plan.accentColor} flex-shrink-0`}
                      />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-lg bg-gradient-to-r ${plan.buttonGradient} text-white font-medium hover:shadow-xl hover:scale-105 transition-all duration-300`}
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
          <h3 className="text-3xl sm:text-4xl font-serif text-center text-white mb-16">
            Essential Features for Every Plan
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-yellow-300/30 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Option */}
        <div className="text-center mt-32">
          <div className="inline-block p-12 rounded-3xl bg-gradient-to-br from-indigo-900 to-black border border-indigo-600/30">
            <h3 className="text-2xl font-serif text-white mb-4">
              Enterprise Solutions
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Tailored solutions for large-scale operations with multiple
              locations and complex needs.
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300">
              Discuss Custom Requirements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
