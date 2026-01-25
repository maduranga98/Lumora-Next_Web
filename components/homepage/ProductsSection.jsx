"use client";

import { useState, useEffect, useRef } from "react";
import {
  Dumbbell,
  Scissors,
  Shield,
  PenTool,
  Zap,
  Puzzle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const ProductsSection = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);
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

  const products = [
    {
      icon: Dumbbell,
      name: "PulsedGym",
      tagline: "Complete Gym Management System",
      description:
        "Comprehensive fitness center operations platform with member management, automated billing, face recognition attendance, and advanced analytics.",
      features: [
        "Member management & billing",
        "Face recognition attendance (ESP32-CAM)",
        "Analytics & reporting",
        "Mobile app integration",
        "Equipment tracking",
      ],
      tech: "Flutter, Firebase, Computer Vision, ESP32-CAM",
      target: "Gym owners, fitness centers",
      pricing: "Rs.80,000 setup + Rs.200/member monthly",
      color: "blue",
      link: "/pulsedgym",
    },
    {
      icon: Scissors,
      name: "Curl Cipher",
      tagline: "Salon Management Made Easy",
      description:
        "All-in-one beauty business solution streamlining appointments, inventory, customer relationships, and revenue tracking.",
      features: [
        "Appointment scheduling",
        "Customer database",
        "Inventory management",
        "Revenue tracking",
        "Multi-location support",
      ],
      tech: "React, Firebase, Cloud Functions",
      target: "Salons, spas, beauty centers",
      pricing: "Custom quote",
      color: "purple",
      link: "/curl-cipher",
    },
    {
      icon: Shield,
      name: "VoxWel",
      tagline: "Anonymous Workplace Reporting",
      description:
        "Secure platform for employees to report workplace concerns anonymously, fostering transparency and trust in organizations.",
      features: [
        "Anonymous reporting",
        "Secure communication",
        "Admin dashboard",
        "Case management",
        "Compliance ready (SOX, GDPR)",
      ],
      tech: "React, Firebase, End-to-end Encryption",
      target: "HR departments, enterprises",
      pricing: "Custom quote based on company size",
      color: "green",
      link: "/voxwel",
    },
    {
      icon: PenTool,
      name: "VerseWing",
      tagline: "Creative Writing Community",
      description:
        "Platform for writers to share their work, connect with readers, and grow their creative writing journey together.",
      features: [
        "Story publishing",
        "Community engagement",
        "Writer analytics",
        "Reader discovery",
        "Monetization tools",
      ],
      tech: "React, Firebase, ML Recommendation Engine",
      target: "Writers, content creators, literary communities",
      pricing: "Free/Premium model",
      color: "orange",
      link: "/versewing",
    },
    {
      icon: Zap,
      name: "GymNex",
      tagline: "Next-Generation Fitness Automation",
      description:
        "Advanced gym technology suite combining face recognition, IoT equipment tracking, AI workout analytics, and wearable integration.",
      features: [
        "Multi-camera face recognition",
        "Equipment tracking with IoT sensors",
        "AI workout recommendations",
        "Wearable device integration",
        "Personal trainer AI assistant",
      ],
      tech: "Flutter, Firebase, ESP32, IoT Sensors, ML Backend",
      target: "Premium fitness facilities",
      pricing: "Rs.150,000 setup + Rs.300/member monthly",
      color: "cyan",
      link: "/gymnex",
    },
    {
      icon: Puzzle,
      name: "Custom Solution",
      tagline: "Your Vision, Our Expertise",
      description:
        "Need something unique? We build custom solutions tailored to your specific business needs. From concept to deployment.",
      features: [
        "Tailored development",
        "Full-stack solutions",
        "Ongoing support",
        "Scalable architecture",
        "Dedicated team",
      ],
      tech: "Your choice of technology stack",
      target: "Businesses with unique requirements",
      pricing: "Custom quote",
      color: "gray",
      isCustom: true,
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        badge: "bg-blue-600",
        border: "border-blue-200 hover:border-blue-400",
      },
      purple: {
        bg: "bg-purple-50",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        badge: "bg-purple-600",
        border: "border-purple-200 hover:border-purple-400",
      },
      green: {
        bg: "bg-green-50",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        badge: "bg-green-600",
        border: "border-green-200 hover:border-green-400",
      },
      orange: {
        bg: "bg-orange-50",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
        badge: "bg-orange-600",
        border: "border-orange-200 hover:border-orange-400",
      },
      cyan: {
        bg: "bg-cyan-50",
        iconBg: "bg-cyan-100",
        iconColor: "text-cyan-600",
        badge: "bg-cyan-600",
        border: "border-cyan-200 hover:border-cyan-400",
      },
      gray: {
        bg: "bg-gray-50",
        iconBg: "bg-gray-100",
        iconColor: "text-gray-600",
        badge: "bg-gray-600",
        border: "border-gray-200 hover:border-gray-400",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-20 md:py-24 lg:py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready-to-Deploy Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Proven products serving diverse industries
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            const colors = getColorClasses(product.color);
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 lg:p-8 shadow-lg border-2 ${colors.border} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent
                      className={`w-6 h-6 ${colors.iconColor}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">{product.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className={`${colors.iconColor} mt-0.5`}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <p className="text-xs text-gray-500">
                    <span className="font-medium">Tech:</span> {product.tech}
                  </p>
                  <p className="text-xs text-gray-500">
                    <span className="font-medium">For:</span> {product.target}
                  </p>
                  <p className={`text-sm font-semibold ${colors.iconColor}`}>
                    {product.pricing}
                  </p>

                  {/* CTA Button */}
                  {product.isCustom ? (
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      Discuss Your Project
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => scrollToSection("contact")}
                      className={`w-full mt-4 inline-flex items-center justify-center gap-2 ${colors.badge} text-white px-4 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
