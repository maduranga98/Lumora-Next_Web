"use client";

import React from "react";
import {
  Diamond,
  Shield,
  Crown,
  Gem,
  Star,
  Award,
  Apple,
  Wifi,
} from "lucide-react";

const AppOverviewSection = () => {
  const features = [
    {
      icon: <Diamond size={28} className="text-yellow-300" />,
      title: "Dual Premium Applications",
      description:
        "Seamlessly manage your salon elite with sophisticated apps designed for discerning professionals and refined clientele.",
    },
    {
      icon: <Shield size={28} className="text-yellow-300" />,
      title: "Multi-Location Enterprise Suite",
      description:
        "Command multiple luxury establishments with unprecedented control and sophisticated oversight.",
    },
    {
      icon: <Crown size={28} className="text-yellow-300" />,
      title: "Elite Management Platform",
      description:
        "Orchestrate premium appointments, prestigious staff, inventory, and exclusive client relationships—all unified.",
    },
    {
      icon: <Star size={28} className="text-yellow-300" />,
      title: "Distinguished Marketing Solutions",
      description:
        "Craft exclusive promotional campaigns and elevate salon presence to attract elite clientele.",
    },
    {
      icon: <Gem size={28} className="text-yellow-300" />,
      title: "Luxury Retail Integration",
      description:
        "Curate and manage premium beauty products, facilitating exclusive purchases for prestigious clients.",
    },
    {
      icon: <Award size={28} className="text-yellow-300" />,
      title: "Secure Role-Based Access",
      description:
        "Ensure protected access with bespoke roles for esteemed owners, managers, and specialized staff.",
    },
  ];

  const platforms = [
    {
      icon: <Apple size={32} className="text-yellow-300" />,
      name: "iOS Edition",
      bgHover: "hover:bg-amber-500/5",
      description: "Exclusive on App Store",
      gradient: "from-amber-500/10 to-yellow-500/10",
    },
    {
      icon: <Wifi size={32} className="text-yellow-300" />,
      name: "Android Edition",
      bgHover: "hover:bg-yellow-500/5",
      description: "Premium on Play Store",
      gradient: "from-yellow-500/10 to-amber-500/10",
    },
  ];

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at center top, #330066 0%, #000000 60%, #1a0033 100%)",
      }}
    >
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-amber-500 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-yellow-400 rounded-full blur-[120px] transform -translate-x-1/2 translate-y-1/3"></div>
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
        <div className="text-center mb-32">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light mb-12 text-white">
            What is Curl Cipher?
          </h2>
          <p className="text-2xl sm:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            The pinnacle of salon management excellence, harmoniously uniting
            prestigious establishments with their distinguished clientele.
          </p>
        </div>

        {/* Premium Features Grid */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl p-10 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl border border-amber-500/20 bg-gradient-to-br from-black to-gray-900"
              >
                {/* Feature Icon */}
                <div className="mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <div className="w-16 h-16 rounded-full border border-yellow-300/30 flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
                    {feature.icon}
                  </div>
                </div>

                {/* Feature Content */}
                <h3 className="text-2xl font-serif text-white mb-5">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Subtle Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Platforms Section */}
        <div className="relative rounded-3xl p-16 overflow-hidden border border-amber-500/20 bg-gradient-to-br from-black to-gray-900">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2"></div>

          <h3 className="text-3xl sm:text-4xl font-serif text-center mb-16 text-white">
            Exclusively Available on Elite Platforms
          </h3>

          <div className="relative grid sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`group rounded-3xl p-12 text-center transition-all duration-500 ${platform.bgHover} border border-yellow-300/10 hover:border-yellow-300/30 hover:shadow-2xl relative overflow-hidden bg-gradient-to-br ${platform.gradient}`}
              >
                {/* Platform Icon */}
                <div className="inline-flex justify-center mb-6 transform transition-transform duration-500 group-hover:scale-110">
                  <div className="w-20 h-20 rounded-full border border-yellow-300/30 flex items-center justify-center">
                    {platform.icon}
                  </div>
                </div>

                {/* Platform Details */}
                <h4 className="text-2xl font-serif text-white mb-3">
                  {platform.name}
                </h4>
                <p className="text-gray-400 text-lg">{platform.description}</p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-1/2 w-32 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Refined Call to Action */}
        <div className="text-center mt-32">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8">
            <button className="px-12 py-5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-medium text-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              Discover Excellence
            </button>

            <button className="px-12 py-5 border-2 border-yellow-300 text-yellow-300 font-medium rounded-lg transition-all duration-500 hover:bg-yellow-300 hover:text-black hover:shadow-2xl">
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppOverviewSection;
