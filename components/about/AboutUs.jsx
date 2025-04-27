"use client";

import Image from "next/image";
import Link from "next/link";
import { Building, Code, TrendingUp, BarChart2 } from "lucide-react";

const AboutUs = () => {
  const services = [
    {
      icon: <Building size={24} className="text-white" />,
      title: "Business Solutions",
      color: "#3B82F6",
    },
    {
      icon: <Code size={24} className="text-white" />,
      title: "Software Development",
      color: "#3B82F6",
    },
    {
      icon: <BarChart2 size={24} className="text-white" />,
      title: "Digital Marketing",
      color: "#3B82F6",
    },
    {
      icon: <TrendingUp size={24} className="text-white" />,
      title: "Industrial Automation",
      color: "#3B82F6",
    },
  ];

  return (
    <section
      className="relative bg-gradient-to-b from-[#121139] to-[#1e1b4b] text-white py-20"
      id="about"
    >
      <div className="container mx-auto px-4">
        {/* Section 1: Hero Content */}
        <div className="max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transform your business with innovative solutions in automation,
            digital marketing, and software development.
          </h1>

          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-3xl cursor-pointer transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${service.color} 0%, #60A5FA 100%)`,
                  boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(0.5rem)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 30px rgba(59, 130, 246, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 20px rgba(59, 130, 246, 0.3)";
                }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg">
                  {service.icon}
                </div>
                <span className="text-lg font-medium">{service.title}</span>
              </div>
            ))}
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] 
            rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Get Started
            <svg
              className="w-4 h-4 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        {/* Section 2: Who We Are */}
        <div className="max-w-6xl mx-auto mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#3B82F6]">
            Who We Are
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <Image
                src="/about.webp"
                alt="Lumora Ventures Team"
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                At Lumora Ventures, we are passionate about empowering
                businesses to unlock their full potential in the digital age.
                Founded with a vision to deliver innovative solutions, we
                specialize in software development, industrial automation,
                digital marketing, and salon management.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team combines technical expertise with a deep understanding
                of our clients' needs, ensuring tailored strategies that drive
                real results. With a commitment to excellence, creativity, and
                long-term partnerships, we deliver solutions that are not only
                effective but also future-ready.
              </p>
              <p className="text-lg text-gray-300 italic">
                "At Lumora Ventures, we don't just build solutions — we
                illuminate pathways to innovation."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
