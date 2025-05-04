"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.5 11.5l-11 11h11v-11zm0 0h-11m11 0v11' fill='none' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.1'/%3E%3C/svg%3E\")",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-20 -right-20 w-60 h-60 bg-indigo-400 rounded-full blur-3xl opacity-20 animate-pulse" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Your Business with Cutting-Edge
              <span className="block text-cyan-300">Digital Solutions</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              Boost your local presence, streamline operations, and drive growth
              with our tailored solutions.
            </p>

            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Transformation
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Illustration Section */}
          <div className="mt-12 lg:mt-0 relative">
            <div className="relative z-10 max-w-lg mx-auto">
              {/* Illustration placeholder with blue theme */}
              <div className="relative">
                <div className="absolute -inset-10 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full blur-3xl opacity-20" />
                <img
                  src="/hero.png"
                  alt="Digital transformation illustration"
                  className="relative z-10 w-full h-auto"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-blue-300 rounded-lg transform rotate-12 opacity-40" />
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-cyan-300 rounded-lg transform -rotate-12 opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
