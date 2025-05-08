"use client";

import React from "react";
import { Diamond, Shield, Crown, Gem, Star, Award } from "lucide-react";
import { IoLogoAndroid } from "react-icons/io";
import { FaAppStoreIos } from "react-icons/fa";

const AppOverviewSection = () => {
  const features = [
    {
      icon: <Diamond size={24} className="text-yellow-300" />,
      title: "Dual Premium Applications",
      description:
        "Seamlessly manage your salon elite with sophisticated apps designed for discerning professionals and refined clientele.",
    },
    {
      icon: <Shield size={24} className="text-yellow-300" />,
      title: "Multi-Location Enterprise Suite",
      description:
        "Command multiple luxury establishments with unprecedented control and sophisticated oversight.",
    },
    {
      icon: <Crown size={24} className="text-yellow-300" />,
      title: "Elite Management Platform",
      description:
        "Orchestrate premium appointments, prestigious staff, inventory, and exclusive client relationships—all unified.",
    },
    {
      icon: <Star size={24} className="text-yellow-300" />,
      title: "Distinguished Marketing Solutions",
      description:
        "Craft exclusive promotional campaigns and elevate salon presence to attract elite clientele.",
    },
    {
      icon: <Gem size={24} className="text-yellow-300" />,
      title: "Luxury Retail Integration",
      description:
        "Curate and manage premium beauty products, facilitating exclusive purchases for prestigious clients.",
    },
    {
      icon: <Award size={24} className="text-yellow-300" />,
      title: "Secure Role-Based Access",
      description:
        "Ensure protected access with bespoke roles for esteemed owners, managers, and specialized staff.",
    },
  ];

  const platforms = [
    {
      icon: <FaAppStoreIos size={24} className="text-yellow-300" />,
      name: "iOS Edition",
      bgHover: "hover:bg-amber-500/5",
      description: "Exclusive on App Store",
      gradient: "from-amber-500/10 to-yellow-500/10",
    },
    {
      icon: <IoLogoAndroid size={24} className="text-yellow-300" />,
      name: "Android Edition",
      bgHover: "hover:bg-yellow-500/5",
      description: "Premium on Play Store",
      gradient: "from-yellow-500/10 to-amber-500/10",
    },
  ];

  return (
    <section
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at center top, #330066 0%, #000000 60%, #1a0033 100%)",
      }}
    >
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 w-96 md:w-[600px] lg:w-[800px] h-96 md:h-[600px] lg:h-[800px] bg-amber-500 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-72 md:w-[400px] lg:w-[600px] h-72 md:h-[400px] lg:h-[600px] bg-yellow-400 rounded-full blur-[120px] transform -translate-x-1/2 translate-y-1/3"></div>
      </div>

      {/* Golden Overlay Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 4px 4px, gold 1px, transparent 0)",
            backgroundSize: "64px 64px",
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elegant Section Header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-light mb-6 md:mb-8 lg:mb-10 text-white">
            What is Curl Cipher?
          </h2>
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            The pinnacle of salon management excellence, harmoniously uniting
            prestigious establishments with their distinguished clientele.
          </p>
        </div>

        {/* Premium Features Grid */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl border border-amber-500/20 bg-gradient-to-br from-black to-gray-900"
              >
                {/* Feature Icon */}
                <div className="mb-5 md:mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-yellow-300/30 flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
                    {feature.icon}
                  </div>
                </div>

                {/* Feature Content */}
                <h3 className="text-lg md:text-xl lg:text-xl font-serif text-white mb-3 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>

                {/* Subtle Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Platforms Section */}
        <div className="relative rounded-xl md:rounded-2xl lg:rounded-3xl p-8 md:p-10 lg:p-12 overflow-hidden border border-amber-500/20 bg-gradient-to-br from-black to-gray-900">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 w-72 md:w-96 lg:w-[600px] h-48 md:h-64 lg:h-[300px] bg-amber-500/10 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2"></div>

          <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-serif text-center mb-8 md:mb-10 lg:mb-12 text-white">
            Exclusively Available on Elite Platforms
          </h3>

          <div className="relative grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`group rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 text-center transition-all duration-500 ${platform.bgHover} border border-yellow-300/10 hover:border-yellow-300/30 hover:shadow-2xl relative overflow-hidden bg-gradient-to-br ${platform.gradient}`}
              >
                {/* Platform Icon */}
                <div className="inline-flex justify-center mb-4 md:mb-5 transform transition-transform duration-500 group-hover:scale-110">
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border border-yellow-300/30 flex items-center justify-center">
                    {platform.icon}
                  </div>
                </div>

                {/* Platform Details */}
                <h4 className="text-lg md:text-xl lg:text-xl font-serif text-white mb-2 md:mb-3">
                  {platform.name}
                </h4>
                <p className="text-gray-400 text-sm md:text-base">
                  {platform.description}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-1/2 w-24 md:w-28 lg:w-32 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Refined Call to Action */}
        <div className="text-center mt-16 md:mt-20 lg:mt-24">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 md:gap-6 lg:gap-8">
            <button className="px-8 md:px-10 lg:px-12 py-3 md:py-4 lg:py-4 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-medium text-base md:text-base lg:text-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              Discover Excellence
            </button>

            <button className="px-8 md:px-10 lg:px-12 py-3 md:py-4 lg:py-4 border-2 border-yellow-300 text-yellow-300 font-medium rounded-lg text-base md:text-base lg:text-lg transition-all duration-500 hover:bg-yellow-300 hover:text-black hover:shadow-2xl">
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppOverviewSection;
