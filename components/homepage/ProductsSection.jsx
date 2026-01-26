"use client";

import { useState, useEffect, useRef } from "react";

const ProductsSection = () => {
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

  const products = [
    {
      name: "PulsedGym",
      desc: "Smart gym management with face recognition",
      industry: "Fitness & Wellness",
    },
    {
      name: "Curl Cipher",
      desc: "Complete salon management platform",
      industry: "Beauty & Personal Care",
    },
    {
      name: "VoxWel",
      desc: "Anonymous workplace reporting system",
      industry: "Corporate & HR",
    },
    {
      name: "VerseWing",
      desc: "Creative writing community platform",
      industry: "Media & Publishing",
    },
    {
      name: "GymNex",
      desc: "Advanced fitness automation suite",
      industry: "Premium Fitness Centers",
    },
  ];

  return (
    <section
      id="products"
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
            Solutions We&apos;ve Built
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Proven products serving diverse industries
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-3">{product.desc}</p>
              <span className="text-sm text-blue-600 font-medium">
                {product.industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
