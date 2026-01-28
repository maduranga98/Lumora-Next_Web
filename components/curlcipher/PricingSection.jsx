"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/animation/AnimatedSection";

const plans = [
  {
    name: "Starter",
    desc: "For independent stylists and booth renters.",
    price: "29",
    features: [
      "1 Staff Member",
      "Unlimited Appointments",
      "Basic Client Profiles",
      "Email Reminders",
      "Mobile App Access",
    ],
    notIncluded: ["Inventory Management", "Payroll", "Custom Branding"],
  },
  {
    name: "Growth",
    desc: "Perfect for growing salons with a small team.",
    price: "79",
    popular: true,
    features: [
      "Up to 5 Staff Members",
      "Advanced Inventory Tracking",
      "SMS & WhatsApp Reminders",
      "Commission Calculation",
      "Online Booking Portal",
      "Basic Reporting",
    ],
    notIncluded: ["Multi-Location Support"],
  },
  {
    name: "Enterprise",
    desc: "For multi-location chains and luxury spas.",
    price: "149",
    features: [
      "Unlimited Staff",
      "Multi-Location Management",
      "White-label Mobile App",
      "API Access",
      "Dedicated Account Manager",
      "Advanced Analytics & HQ Dashboard",
      "24/7 Priority Support",
    ],
    notIncluded: [],
  },
];

const PricingSection = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Toggle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Choose the plan that fits your business size. No hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span
                className={`text-sm font-medium ${!annual ? "text-blue-900" : "text-gray-500"}`}
              >
                Monthly
              </span>
              <button
                onClick={() => setAnnual(!annual)}
                className="relative w-14 h-8 rounded-full bg-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span
                  className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-transform transform ${annual ? "translate-x-6" : "translate-x-0"}`}
                />
              </button>
              <span
                className={`text-sm font-medium ${annual ? "text-blue-900" : "text-gray-500"}`}
              >
                Yearly{" "}
                <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full ml-1">
                  Save 20%
                </span>
              </span>
            </div>
          </AnimatedSection>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={index} delay={index * 0.1} className="h-full">
              <div
                className={`relative h-full p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl flex flex-col ${plan.popular ? "bg-white border-cyan-500 shadow-blue-lg scale-105 z-10" : "bg-white border-gray-200 hover:border-blue-200"}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 h-10">{plan.desc}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      ${annual ? plan.price : Math.round(plan.price * 1.2)}
                    </span>
                    <span className="text-gray-500">/mo</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    {annual ? "Billed annually" : "Billed monthly"}
                  </p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <Check className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-400"
                    >
                      <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-colors ${plan.popular ? "bg-blue-900 text-white hover:bg-blue-800 shadow-lg" : "bg-blue-50 text-blue-900 hover:bg-blue-100"}`}
                >
                  Choose {plan.name}
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
