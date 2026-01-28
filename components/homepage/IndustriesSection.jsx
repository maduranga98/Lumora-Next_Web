"use client";

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
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/AnimatedSection";

const IndustriesSection = () => {
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
    <section id="industries" className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Diverse Expertise
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
        </AnimatedSection>

        {/* Industry Badges Grid */}
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          staggerDelay={0.06}
        >
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <StaggerItem key={index}>
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 card-hover">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {industry.name}
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default IndustriesSection;
