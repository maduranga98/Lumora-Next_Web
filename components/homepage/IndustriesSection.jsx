"use client";

import { useState, useEffect, useRef } from "react";
import {
  Dumbbell,
  Sparkles,
  Factory,
  ShoppingBag,
  Heart,
  Zap,
  Building,
  Palette,
  Leaf,
} from "lucide-react";

const IndustriesSection = () => {
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

  const industries = [
    {
      icon: Dumbbell,
      name: "Fitness & Wellness",
      services: [
        "Mobile Apps (member apps)",
        "Web Platforms (booking systems)",
        "IoT (face recognition, equipment tracking)",
        "Analytics (member insights)",
      ],
      products: "PulsedGym, GymNex",
      metric: "30+ gyms automated, 60% operational efficiency increase",
      color: "blue",
    },
    {
      icon: Sparkles,
      name: "Beauty & Personal Care",
      services: [
        "Web Development (booking platforms)",
        "Mobile Apps (customer apps)",
        "Analytics (customer insights)",
      ],
      products: "Curl Cipher",
      metric: "20+ salons optimized, 35% booking efficiency improvement",
      color: "purple",
    },
    {
      icon: Factory,
      name: "Manufacturing",
      services: [
        "Computer Vision (quality control)",
        "IoT (equipment monitoring)",
        "Predictive Maintenance (downtime reduction)",
        "Automation (production optimization)",
      ],
      products: null,
      solutions: "Quality control systems, digital twins, predictive maintenance",
      metric: "67% downtime reduction, 85% defect improvement, $2.4M average annual savings",
      color: "green",
    },
    {
      icon: ShoppingBag,
      name: "Retail & E-Commerce",
      services: [
        "Web Apps (e-commerce platforms)",
        "Mobile Apps (shopping apps)",
        "Data Analytics (customer behavior)",
        "Computer Vision (visual search)",
      ],
      products: null,
      solutions: "E-commerce platforms, inventory management, customer analytics",
      metric: "28% sales increase, 35% inventory improvement",
      color: "orange",
    },
    {
      icon: Heart,
      name: "Healthcare",
      services: [
        "Mobile Apps (patient portals)",
        "Web Platforms (telemedicine)",
        "Computer Vision (medical imaging)",
        "Data Analytics (patient insights)",
      ],
      products: null,
      solutions: "Telemedicine platforms, patient management, medical image analysis",
      metric: "99.2% diagnostic accuracy support",
      color: "red",
    },
    {
      icon: Zap,
      name: "Energy & Utilities",
      services: [
        "IoT (smart grid monitoring)",
        "Predictive Maintenance (equipment health)",
        "Data Analytics (consumption patterns)",
      ],
      products: null,
      solutions: "Equipment monitoring, energy optimization, asset management",
      metric: "30% efficiency improvement, 60% fewer equipment failures",
      color: "yellow",
    },
    {
      icon: Building,
      name: "Corporate & Enterprise",
      services: [
        "Web/Mobile Apps (employee platforms)",
        "AI/ML (business intelligence)",
        "Automation (workflow optimization)",
      ],
      products: "VoxWel",
      solutions: "Employee platforms, business intelligence, compliance tools",
      metric: "100+ enterprise projects delivered",
      color: "indigo",
    },
    {
      icon: Palette,
      name: "Creative & Media",
      services: [
        "Web Development (content platforms)",
        "Mobile Apps (creator tools)",
        "Analytics (audience insights)",
      ],
      products: "VerseWing",
      solutions: "Content platforms, community building, creator tools",
      metric: "Growing creator community with engagement tools",
      color: "pink",
    },
    {
      icon: Leaf,
      name: "Agriculture & Food",
      services: [
        "IoT (crop monitoring)",
        "Computer Vision (quality grading)",
        "Data Analytics (yield prediction)",
      ],
      products: null,
      solutions: "Crop monitoring, quality control, supply chain tracking",
      metric: "40% yield prediction improvement",
      color: "emerald",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        border: "border-blue-200 hover:border-blue-400",
      },
      purple: {
        bg: "bg-purple-50",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        border: "border-purple-200 hover:border-purple-400",
      },
      green: {
        bg: "bg-green-50",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        border: "border-green-200 hover:border-green-400",
      },
      orange: {
        bg: "bg-orange-50",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
        border: "border-orange-200 hover:border-orange-400",
      },
      red: {
        bg: "bg-red-50",
        iconBg: "bg-red-100",
        iconColor: "text-red-600",
        border: "border-red-200 hover:border-red-400",
      },
      yellow: {
        bg: "bg-yellow-50",
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-600",
        border: "border-yellow-200 hover:border-yellow-400",
      },
      indigo: {
        bg: "bg-indigo-50",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        border: "border-indigo-200 hover:border-indigo-400",
      },
      pink: {
        bg: "bg-pink-50",
        iconBg: "bg-pink-100",
        iconColor: "text-pink-600",
        border: "border-pink-200 hover:border-pink-400",
      },
      emerald: {
        bg: "bg-emerald-50",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        border: "border-emerald-200 hover:border-emerald-400",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="industries"
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
            Trusted Across Industries
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering technology solutions that understand your sector
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            const colors = getColorClasses(industry.color);
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 border-2 ${colors.border} hover:shadow-lg transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 75 + 200}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 ${colors.iconBg} rounded-lg flex items-center justify-center`}
                  >
                    <IconComponent className={`w-5 h-5 ${colors.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {industry.name}
                  </h3>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Services Applied:
                  </p>
                  <ul className="space-y-1">
                    {industry.services.map((service, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <span className={`${colors.iconColor} mt-0.5`}>•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products/Solutions */}
                {industry.products && (
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Products:</span>{" "}
                    {industry.products}
                  </p>
                )}
                {industry.solutions && (
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">Solutions:</span>{" "}
                    {industry.solutions}
                  </p>
                )}

                {/* Success Metric */}
                <div className={`${colors.bg} rounded-lg p-3 mt-auto`}>
                  <p className="text-xs text-gray-700">
                    <span className="font-semibold">Success:</span>{" "}
                    {industry.metric}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
