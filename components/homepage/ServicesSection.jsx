"use client";

import { useState, useEffect, useRef } from "react";
import { Code, Smartphone, Brain, Factory } from "lucide-react";

const ServicesSection = () => {
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
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Complete technology solutions for modern businesses
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  What we deliver:
                </p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
