"use client";

import { Lightbulb, Award, Handshake, Shield } from "lucide-react";
import Image from "next/image";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/AnimatedSection";

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "Constantly pushing boundaries with R&D and latest technologies",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "Uncompromising quality in every line of code",
    },
    {
      icon: Handshake,
      title: "Partnership",
      desc: "Your success is our success — we grow together",
    },
    {
      icon: Shield,
      title: "Integrity",
      desc: "Transparent communication and honest recommendations",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Lumora Ventures
          </h2>
        </AnimatedSection>

        {/* Company Overview with Image */}
        <AnimatedSection className="max-w-6xl mx-auto mb-16" delay={0.2}>
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            {/* About Image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/about.avif"
                alt="About Lumora Ventures"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text Content */}
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Founded in 2020, Lumora Ventures is a technology company
                specializing in software development, mobile applications, AI/ML
                solutions, and industrial automation. We combine technical
                excellence with deep industry understanding to deliver solutions
                that create real business value.
              </p>

              {/* Vision & Mission */}
              <div className="grid gap-6">
                <div className="p-6 bg-blue-50 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Our Vision
                  </h3>
                  <p className="text-gray-700">
                    To be the leading technology partner for businesses seeking
                    innovation through intelligent software solutions.
                  </p>
                </div>
                <div className="p-6 bg-blue-50 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Our Mission
                  </h3>
                  <p className="text-gray-700">
                    Empower businesses with cutting-edge technology that drives
                    growth, efficiency, and competitive advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Values */}
        <StaggerContainer className="grid md:grid-cols-4 gap-6" staggerDelay={0.1}>
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <StaggerItem key={index} className="text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default AboutSection;
