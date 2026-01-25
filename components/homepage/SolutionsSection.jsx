"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight, Clock, DollarSign } from "lucide-react";

const SolutionsSection = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      question: "I want to digitize my business",
      type: "Custom Web & Mobile Development",
      deliverables: [
        "Custom web application with admin panel",
        "Mobile app for customers (iOS & Android)",
        "Cloud hosting & deployment",
        "Training & support",
        "Ongoing maintenance",
      ],
      timeline: "8-12 weeks",
      investment: "Rs. 300,000",
      perfectFor:
        "Businesses moving online, service digitization, customer portals",
      color: "blue",
    },
    {
      question: "I want to automate quality control",
      type: "Computer Vision Quality Inspection",
      deliverables: [
        "Camera setup & installation",
        "Custom defect detection model",
        "Real-time alerts & reporting",
        "Integration with existing systems",
        "Accuracy: 98%+",
      ],
      timeline: "12-16 weeks",
      investment: "Rs. 500,000",
      roi: "85% defect reduction typical",
      perfectFor: "Manufacturing, production lines, quality assurance teams",
      color: "purple",
    },
    {
      question: "I want to reduce equipment downtime",
      type: "Predictive Maintenance System",
      deliverables: [
        "IoT sensor deployment",
        "ML model for failure prediction",
        "Digital twin implementation",
        "Maintenance dashboard",
        "90-95% prediction accuracy",
      ],
      timeline: "12-20 weeks",
      investment: "Rs. 750,000",
      roi: "30-40% maintenance cost reduction, 67% downtime reduction",
      perfectFor:
        "Manufacturing facilities, industrial operations, equipment-heavy businesses",
      color: "green",
    },
    {
      question: "I want a mobile app for my service",
      type: "Custom Mobile App Development",
      deliverables: [
        "iOS & Android apps",
        "Backend API development",
        "Payment gateway integration",
        "App store deployment",
        "User analytics",
      ],
      timeline: "6-10 weeks",
      investment: "Rs. 200,000",
      perfectFor: "Service businesses, delivery services, booking platforms",
      color: "orange",
    },
    {
      question: "I want to analyze my business data",
      type: "Data Analytics & BI Platform",
      deliverables: [
        "Data warehouse setup",
        "Custom dashboards",
        "Automated reporting",
        "Predictive insights",
        "Self-service analytics",
      ],
      timeline: "8-12 weeks",
      investment: "Rs. 400,000",
      perfectFor:
        "Enterprises, multi-location businesses, data-driven decision making",
      color: "cyan",
    },
    {
      question: "I want to monitor my factory remotely",
      type: "Industrial IoT System",
      deliverables: [
        "Sensor network design (200+ sensors capable)",
        "Real-time monitoring dashboard",
        "Mobile app for alerts",
        "Cloud data storage",
        "Historical analytics",
      ],
      timeline: "10-14 weeks",
      investment: "Rs. 600,000",
      perfectFor: "Manufacturers, remote facilities, multi-site operations",
      color: "indigo",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        activeBorder: "border-blue-500",
        icon: "text-blue-600",
        badge: "bg-blue-100 text-blue-700",
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        activeBorder: "border-purple-500",
        icon: "text-purple-600",
        badge: "bg-purple-100 text-purple-700",
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        activeBorder: "border-green-500",
        icon: "text-green-600",
        badge: "bg-green-100 text-green-700",
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        activeBorder: "border-orange-500",
        icon: "text-orange-600",
        badge: "bg-orange-100 text-orange-700",
      },
      cyan: {
        bg: "bg-cyan-50",
        border: "border-cyan-200",
        activeBorder: "border-cyan-500",
        icon: "text-cyan-600",
        badge: "bg-cyan-100 text-cyan-700",
      },
      indigo: {
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        activeBorder: "border-indigo-500",
        icon: "text-indigo-600",
        badge: "bg-indigo-100 text-indigo-700",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="py-20 md:py-24 lg:py-28 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Solutions for Every Business Challenge
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us your problem, we&apos;ll engineer the solution
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {solutions.map((solution, index) => {
            const colors = getColorClasses(solution.color);
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? colors.activeBorder : colors.border
                } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                {/* Question Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full flex items-center justify-between p-5 md:p-6 text-left ${
                    isOpen ? colors.bg : "bg-white"
                  } hover:bg-gray-50 transition-colors`}
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      &quot;{solution.question}&quot;
                    </h3>
                    <p className={`text-sm ${colors.icon} mt-1`}>
                      {solution.type}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className={`p-5 md:p-6 ${colors.bg} border-t ${colors.border}`}>
                    {/* Deliverables */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        What You Get:
                      </h4>
                      <ul className="space-y-2">
                        {solution.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <ArrowRight
                              className={`w-4 h-4 ${colors.icon} flex-shrink-0 mt-0.5`}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Meta Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className={`w-4 h-4 ${colors.icon}`} />
                        <div>
                          <p className="text-xs text-gray-500">Timeline</p>
                          <p className="text-sm font-medium text-gray-900">
                            {solution.timeline}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className={`w-4 h-4 ${colors.icon}`} />
                        <div>
                          <p className="text-xs text-gray-500">
                            Starting Investment
                          </p>
                          <p className="text-sm font-medium text-gray-900">
                            {solution.investment}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ROI if available */}
                    {solution.roi && (
                      <div
                        className={`${colors.badge} rounded-lg p-3 mb-6 text-sm`}
                      >
                        <span className="font-medium">Expected ROI:</span>{" "}
                        {solution.roi}
                      </div>
                    )}

                    {/* Perfect For */}
                    <p className="text-sm text-gray-500 mb-6">
                      <span className="font-medium">Perfect for:</span>{" "}
                      {solution.perfectFor}
                    </p>

                    {/* CTA */}
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
