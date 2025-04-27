"use client";

import { MapPin, Star, BarChart2, FileEdit } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <MapPin size={24} color="#006064" />,
      title: "Profile Optimization",
      description:
        "We ensure your GMB profile is complete, accurate and optimized for maximum visibility.",
    },
    {
      icon: <Star size={24} color="#006064" />,
      title: "Review Management",
      description:
        "We monitor and respond to reviews, implementing strategies to generate positive feedback.",
    },
    {
      icon: <FileEdit size={24} color="#006064" />,
      title: "Content Strategy",
      description:
        "Regular posts, updates and offers to keep your profile active and engaging.",
    },
    {
      icon: <BarChart2 size={24} color="#006064" />,
      title: "Performance Tracking",
      description:
        "Detailed analytics on profile views, searches, clicks and customer actions.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 text-center">
          Our GMB Management Services
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          We provide comprehensive Google My Business management to help you
          connect with local customers and stay ahead of the competition.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-amber-50 rounded-lg p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="bg-amber-200 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
