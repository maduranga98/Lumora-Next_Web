"use client";

import { useState, useEffect, useRef } from "react";
import {
  Layers,
  Award,
  Zap,
  Lightbulb,
  Clock,
  Shield,
} from "lucide-react";

const WhyChooseUsSection = () => {
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

  const benefits = [
    {
      icon: Layers,
      title: "Full-Stack Expertise",
      description:
        "From frontend to AI - we handle it all. One team, one partner, complete solutions. No need to coordinate multiple vendors.",
      color: "blue",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "250+ successful projects delivered across software, mobile, AI, and IoT. 99% client satisfaction rate. Real results across industries.",
      color: "purple",
    },
    {
      icon: Zap,
      title: "Modern Technology",
      description:
        "Latest frameworks and tools. Cloud-native architecture. Scalable, maintainable code. Future-proof solutions.",
      color: "orange",
    },
    {
      icon: Lightbulb,
      title: "R&D Investment",
      description:
        "Continuous innovation. 15+ active research projects. Cutting-edge capabilities in AI, ML, and computer vision.",
      color: "green",
    },
    {
      icon: Clock,
      title: "Agile Delivery",
      description:
        "2-week sprint cycles. Regular demos and feedback. Transparent communication. On-time, on-budget delivery.",
      color: "cyan",
    },
    {
      icon: Shield,
      title: "Long-Term Support",
      description:
        "Not just build and leave. Maintenance and updates. Partnership approach. We grow with your business.",
      color: "indigo",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        iconBg: "bg-blue-100 group-hover:bg-blue-600",
        iconColor: "text-blue-600 group-hover:text-white",
      },
      purple: {
        iconBg: "bg-purple-100 group-hover:bg-purple-600",
        iconColor: "text-purple-600 group-hover:text-white",
      },
      orange: {
        iconBg: "bg-orange-100 group-hover:bg-orange-600",
        iconColor: "text-orange-600 group-hover:text-white",
      },
      green: {
        iconBg: "bg-green-100 group-hover:bg-green-600",
        iconColor: "text-green-600 group-hover:text-white",
      },
      cyan: {
        iconBg: "bg-cyan-100 group-hover:bg-cyan-600",
        iconColor: "text-cyan-600 group-hover:text-white",
      },
      indigo: {
        iconBg: "bg-indigo-100 group-hover:bg-indigo-600",
        iconColor: "text-indigo-600 group-hover:text-white",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-20 md:py-24 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Ideal Technology Partner
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            What makes Lumora Ventures different
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const colors = getColorClasses(benefit.color);
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-6 transition-colors duration-300`}
                >
                  <IconComponent
                    className={`w-7 h-7 ${colors.iconColor} transition-colors duration-300`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
