"use client";

import {
  Layers,
  Award,
  Zap,
  Clock,
  Handshake,
  Lightbulb,
} from "lucide-react";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/AnimatedSection";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Layers,
      title: "Full-Stack Expertise",
      desc: "One team handling everything from design to deployment",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      desc: "250+ successful projects across diverse industries",
    },
    {
      icon: Zap,
      title: "Modern Technology",
      desc: "Latest tools and frameworks for future-proof solutions",
    },
    {
      icon: Clock,
      title: "Agile Delivery",
      desc: "Regular updates and transparent communication",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnership",
      desc: "Ongoing support beyond project completion",
    },
    {
      icon: Lightbulb,
      title: "R&D Focus",
      desc: "Continuous innovation keeps you ahead",
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Our Advantage
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Work With Us
          </h2>
        </AnimatedSection>

        {/* Benefits Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.08}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <StaggerItem key={index}>
                <div className="group flex items-start gap-4 p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 card-hover">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
