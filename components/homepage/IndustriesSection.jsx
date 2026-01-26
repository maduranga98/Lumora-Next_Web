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
  Leaf,
  Palette,
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
    { icon: Dumbbell, name: "Fitness & Wellness" },
    { icon: Sparkles, name: "Beauty & Spa" },
    { icon: Factory, name: "Manufacturing" },
    { icon: ShoppingBag, name: "Retail & E-commerce" },
    { icon: Heart, name: "Healthcare" },
    { icon: Zap, name: "Energy & Utilities" },
    { icon: Building, name: "Corporate & Enterprise" },
    { icon: Leaf, name: "Agriculture" },
    { icon: Palette, name: "Creative & Media" },
  ];

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="py-20 md:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
        </div>

        {/* Industry Badges Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto ${
            isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"
          }`}
        >
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
