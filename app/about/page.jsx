// app/about/page.js
"use client";
import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-24 px-4 sm:px-6 lg:px-8">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Content Section */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-5xl font-bold text-blue-900 mb-4">
                About Lumora Ventures
              </h1>

              <p className="text-xl text-blue-700 mb-8">
                Driving Business Growth Through Innovative Solutions
              </p>
            </div>

            {/* Illustration Section */}
            <div className="mt-12 lg:mt-0 relative">
              <div className="relative z-10 max-w-lg mx-auto">
                <img
                  src="/about.png"
                  alt="About Lumora Ventures"
                  className="relative z-10 w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mission</h2>
              <p className="text-lg text-gray-600">
                Our mission is to empower businesses with scalable,
                user-friendly digital and automation tools.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision</h2>
              <p className="text-lg text-gray-600">
                To be the leading partner for businesses seeking transformative
                growth through innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6">
              <p className="text-lg text-gray-600">
                As a startup, we bring agility and a personalized approach to
                every project, ensuring your unique needs are met.
              </p>
            </div>

            <div className="p-6">
              <p className="text-lg text-gray-600">
                Our team of experts boasts extensive experience in web, mobile,
                and automation technologies, delivering cutting-edge solutions.
              </p>
            </div>

            <div className="p-6">
              <p className="text-lg text-gray-600">
                With a global perspective and a finger on the pulse of market
                trends, we help you stay ahead of the competition.
              </p>
            </div>

            <div className="p-6">
              <p className="text-lg text-gray-600">
                Your success is our top priority. We work tirelessly to ensure
                our solutions drive tangible results for your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
