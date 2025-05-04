"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Send,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const serviceOptions = [
    "Curl Cipher Manager",
    "Curl Cipher Customer App",
    "Business Management Solution",
    "Custom Development",
    "Enterprise Package",
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-yellow-300" />,
      title: "Email Excellence",
      content: "contact@curlcipher.com",
      action: "Send Email",
    },
    {
      icon: <Phone className="w-6 h-6 text-yellow-300" />,
      title: "Premier Support",
      content: "+1 (123) 456-7890",
      action: "Call Us",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-yellow-300" />,
      title: "Live Concierge",
      content: "24/7 Chat Service",
      action: "Start Chat",
    },
    {
      icon: <MapPin className="w-6 h-6 text-yellow-300" />,
      title: "Headquarters",
      content: "Silicon Valley, CA",
      action: "View Location",
    },
  ];

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #030014 0%, #1a0033 25%, #000000 50%, #0a1a3a 75%, #030014 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-purple-500 rounded-full blur-[150px] transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-500 rounded-full blur-[150px] transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Gold Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 6px 6px, gold 2px, transparent 0)",
            backgroundSize: "64px 64px",
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-300" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white">
              Connect with Excellence
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-300" />
          </div>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto">
            Begin your transformation with personalized guidance from our
            experts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-gray-900/90 rounded-3xl blur-xl transform scale-105"></div>
            <div className="relative bg-gradient-to-br from-black to-gray-900 rounded-3xl border border-yellow-300/20 p-12 shadow-2xl">
              <h3 className="text-3xl font-serif text-white mb-8">
                Request Consultation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-3">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-300/50 focus:outline-none text-white transition-all duration-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-300/50 focus:outline-none text-white transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-3">
                    Interest Area
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-300/50 focus:outline-none text-white transition-all duration-300"
                    required
                  >
                    <option value="">Select your interest</option>
                    {serviceOptions.map((option, index) => (
                      <option
                        key={index}
                        value={option}
                        className="bg-gray-900"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 mb-3">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-300/50 focus:outline-none text-white transition-all duration-300 resize-none"
                    placeholder="Tell us about your requirements"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full py-5 rounded-lg bg-gradient-to-r from-yellow-300 via-amber-500 to-yellow-300 text-black font-medium text-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-500 flex items-center justify-center gap-2"
                  style={{ backgroundSize: "200% auto" }}
                >
                  <span>Initiate Consultation</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/95 to-gray-900/95 rounded-2xl"></div>
                <div className="absolute inset-0 border border-yellow-300/10 rounded-2xl group-hover:border-yellow-300/30 transition-colors duration-300"></div>

                {/* Content */}
                <div className="relative p-8 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-black to-gray-900 border border-yellow-300/20">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-400">{info.content}</p>
                    </div>
                  </div>

                  <button className="group/btn px-6 py-3 border border-yellow-300/30 text-yellow-300 rounded-lg font-medium flex items-center gap-2 hover:bg-yellow-300/10 transition-all duration-300">
                    {info.action}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}

            {/* Additional CTA */}
            <div className="mt-16">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black opacity-90"></div>
                <div className="relative p-10 text-center">
                  <h3 className="text-2xl font-serif text-white mb-4">
                    Elevate Your Business Today
                  </h3>
                  <p className="text-gray-300 mb-8">
                    Experience the premium transformation with Curl Cipher
                  </p>
                  <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg font-medium hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
