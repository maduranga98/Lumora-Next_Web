"use client";

import { Code, Smartphone, Brain, Factory } from "lucide-react";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/AnimatedSection";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      desc: "Build powerful web applications and platforms that scale with your business.",
      items: [
        "Custom web applications",
        "SaaS platforms",
        "E-commerce solutions",
      ],
      gradient: "from-blue-500 to-blue-600",
      bgLight: "bg-blue-50",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      desc: "Create beautiful, high-performance mobile experiences for iOS and Android.",
      items: [
        "Native & cross-platform apps",
        "User-centered design",
        "App store deployment",
      ],
      gradient: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      desc: "Leverage intelligent systems that learn, predict, and optimize operations.",
      items: [
        "Computer vision systems",
        "Predictive analytics",
        "Data-driven insights",
      ],
      gradient: "from-violet-500 to-purple-500",
      bgLight: "bg-violet-50",
    },
    {
      icon: Factory,
      title: "Industrial Automation",
      desc: "Modernize operations with smart IoT systems and predictive maintenance.",
      items: [
        "IoT sensor networks",
        "Equipment monitoring",
        "Process automation",
      ],
      gradient: "from-emerald-500 to-teal-500",
      bgLight: "bg-emerald-50",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Complete technology solutions for modern businesses
          </p>
        </AnimatedSection>

        {/* Service Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" staggerDelay={0.1}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <StaggerItem key={index}>
                <div className="group p-6 rounded-xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-400 card-hover h-full bg-white">
                  <div className={`w-12 h-12 ${service.bgLight} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 bg-gradient-to-r ${service.gradient} bg-clip-text`} style={{ color: `var(--${service.gradient.includes('blue') ? 'software' : service.gradient.includes('amber') ? 'mobile' : service.gradient.includes('violet') ? 'ai' : 'automation'})` }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">{service.desc}</p>
                  <div className="pt-4 border-t border-gray-50">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                      What we deliver
                    </p>
                    <ul className="space-y-2">
                      {service.items.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 bg-gradient-to-r ${service.gradient} flex-shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
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

export default ServicesSection;
