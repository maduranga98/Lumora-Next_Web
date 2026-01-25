"use client";

import { useState, useEffect, useRef } from "react";
import { Code, Smartphone, Brain, Factory, ArrowRight } from "lucide-react";

const ServicesSection = ({ scrollToSection }) => {
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
      description:
        "Custom web and mobile applications built with modern technologies. From MVPs to enterprise platforms, we create software that scales with your business.",
      offerings: [
        "Web Applications (React, Next.js)",
        "Mobile Apps (Flutter, React Native)",
        "SaaS Platforms",
        "E-commerce Solutions",
        "Custom Portals & Dashboards",
      ],
      target: "Startups, SMBs, Enterprises needing custom software",
      price: "From Rs. 150,000",
      color: "blue",
      bgClass: "bg-blue-50",
      iconBgClass: "bg-blue-100",
      iconColorClass: "text-blue-600",
      hoverBorderClass: "hover:border-blue-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile apps that users love. Beautiful UI, smooth performance, and seamless experiences across iOS and Android.",
      offerings: [
        "iOS & Android Apps",
        "Cross-Platform Development",
        "App Store Deployment",
        "Backend Integration",
        "Maintenance & Updates",
      ],
      target: "Businesses wanting mobile presence, app-based services",
      price: "From Rs. 200,000",
      color: "orange",
      bgClass: "bg-orange-50",
      iconBgClass: "bg-orange-100",
      iconColorClass: "text-orange-600",
      hoverBorderClass: "hover:border-orange-500",
    },
    {
      icon: Brain,
      title: "AI & Advanced Analytics",
      description:
        "Cutting-edge AI, machine learning, and computer vision solutions. From predictive analytics to autonomous systems, we turn data into intelligence.",
      offerings: [
        "Computer Vision Systems",
        "Machine Learning Models",
        "Predictive Analytics",
        "Data Science Consulting",
        "AI Strategy & Implementation",
      ],
      target: "Enterprises seeking competitive advantage through AI",
      price: "From Rs. 500,000",
      color: "purple",
      bgClass: "bg-purple-50",
      iconBgClass: "bg-purple-100",
      iconColorClass: "text-purple-600",
      hoverBorderClass: "hover:border-purple-500",
    },
    {
      icon: Factory,
      title: "Industrial Automation",
      description:
        "Smart automation and IoT solutions for industry. Monitor, control, and optimize operations with our industrial-grade systems.",
      offerings: [
        "IoT Sensor Networks",
        "SCADA Integration",
        "Predictive Maintenance",
        "Digital Twin Systems",
        "Production Optimization",
      ],
      target: "Manufacturing, Energy, Infrastructure companies",
      price: "From Rs. 750,000",
      color: "green",
      bgClass: "bg-green-50",
      iconBgClass: "bg-green-100",
      iconColorClass: "text-green-600",
      hoverBorderClass: "hover:border-green-500",
    },
  ];

  return (
    <section
      id="services"
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
            Your Complete Technology Partner
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end solutions for every business need
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 lg:p-8 shadow-lg border-2 border-transparent ${
                  service.hoverBorderClass
                } hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible
                    ? "animate-fade-in-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${service.iconBgClass} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent
                    className={`w-7 h-7 ${service.iconColorClass}`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Offerings */}
                <ul className="space-y-2 mb-6">
                  {service.offerings.map((offering, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className={`${service.iconColorClass} mt-1`}>
                        •
                      </span>
                      {offering}
                    </li>
                  ))}
                </ul>

                {/* Target & Price */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-2">
                    <span className="font-medium">Perfect for:</span>{" "}
                    {service.target}
                  </p>
                  <p
                    className={`text-sm font-semibold ${service.iconColorClass}`}
                  >
                    {service.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 ${
            isVisible ? "animate-fade-in-up animate-delay-600" : "opacity-0"
          }`}
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="group inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
