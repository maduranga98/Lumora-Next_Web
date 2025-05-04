"use client";
import React from "react";

const AboutUsSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"></div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              About Lumora Ventures
            </h2>

            <p className="text-xl text-blue-700 mb-4">
              Driving Business Growth Through Innovative Solutions
            </p>

            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              Mission:
            </h3>
            <p className="text-lg text-gray-800 mb-6">
              Our mission is to empower businesses with scalable, user-friendly
              digital and automation tools.
            </p>

            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              Vision:
            </h3>
            <p className="text-lg text-gray-800 mb-8">
              To be the leading partner for businesses seeking transformative
              growth through innovation.
            </p>

            <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Learn More About Our Journey
            </button>
          </div>

          {/* Illustration Section */}
          <div className="mt-12 lg:mt-0 relative">
            <div className="relative z-10 max-w-lg mx-auto">
              <img
                src="/about.png"
                alt="About us illustration"
                className="relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
