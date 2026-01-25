"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = ({ scrollToSection }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const servicePills = [
    "Web Apps",
    "Mobile Apps",
    "AI & ML",
    "Computer Vision",
    "IoT & Automation",
    "Data Analytics",
    "Custom Software",
    "Digital Twins",
    "Cloud Solutions",
  ];

  const stats = [
    { number: "250+", label: "Projects Delivered" },
    { number: "100+", label: "Technologies Mastered" },
    { number: "5+", label: "Products Launched" },
    { number: "50+", label: "Countries Served" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #1e3a8a 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div
          className={`absolute -top-40 -left-40 w-80 h-80 md:w-[500px] md:h-[500px] bg-blue-400/20 rounded-full blur-3xl ${
            mounted ? "animate-fade-in" : "opacity-0"
          }`}
        />
        <div
          className={`absolute -bottom-40 -right-40 w-80 h-80 md:w-[500px] md:h-[500px] bg-cyan-400/20 rounded-full blur-3xl ${
            mounted ? "animate-fade-in animate-delay-200" : "opacity-0"
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-indigo-500/10 rounded-full blur-3xl ${
            mounted ? "animate-fade-in animate-delay-300" : "opacity-0"
          }`}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-100 text-sm font-medium mb-8 ${
              mounted ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Complete Technology Solutions</span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight ${
              mounted ? "animate-fade-in-up animate-delay-100" : "opacity-0"
            }`}
          >
            Complete Technology Solutions
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              From Apps to AI
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg md:text-xl lg:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed ${
              mounted ? "animate-fade-in-up animate-delay-200" : "opacity-0"
            }`}
          >
            We build everything your business needs: elegant web and mobile
            applications, intelligent automation systems, and advanced AI
            solutions that drive real results.
          </p>

          {/* Service Pills */}
          <div
            className={`flex flex-wrap justify-center gap-3 mb-12 ${
              mounted ? "animate-fade-in-up animate-delay-300" : "opacity-0"
            }`}
          >
            {servicePills.map((service, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/20 transition-colors cursor-default"
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 ${
              mounted ? "animate-fade-in-up animate-delay-400" : "opacity-0"
            }`}
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="group inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("technology")}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore AI Solutions
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white/90 px-8 py-4 rounded-full font-semibold text-lg hover:border-white hover:text-white transition-all duration-300"
            >
              Schedule Consultation
            </button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto ${
              mounted ? "animate-fade-in-up animate-delay-500" : "opacity-0"
            }`}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
