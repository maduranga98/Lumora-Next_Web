"use client";

import { Search, Hammer, Rocket } from "lucide-react";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/AnimatedSection";

const ApproachSection = () => {
  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Understand",
      desc: "We dive deep into your challenges and goals",
    },
    {
      icon: Hammer,
      step: "02",
      title: "Build",
      desc: "We create solutions using proven technologies and best practices",
    },
    {
      icon: Rocket,
      step: "03",
      title: "Deliver",
      desc: "We deploy, train, and support for long-term success",
    },
  ];

  return (
    <section id="approach" className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
        </AnimatedSection>

        {/* Steps */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          staggerDelay={0.15}
        >
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <StaggerItem key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">
                  Step {item.step}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ApproachSection;
