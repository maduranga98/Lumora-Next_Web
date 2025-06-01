"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles, Loader2 } from "lucide-react";
import { db } from "../../app/lib/firebase"; // Import Firebase db
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      // Add document to Firebase
      await addDoc(collection(db, "consultationRequests"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      // Send email notification
      try {
        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            service: `Curl Cipher - ${formData.service}`,
            message: formData.message,
            formSource: "Curl Cipher Consultation Page",
          }),
        });
      } catch (emailError) {
        // Log email error but don't fail the submission
        console.warn(
          "Email notification failed but data was saved:",
          emailError
        );
      }

      // Reset form on success
      setFormData({ name: "", email: "", service: "", message: "" });
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your request has been submitted successfully.",
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
      setSubmitStatus({
        type: "error",
        message:
          "There was an error submitting your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      icon: <Mail className="w-5 h-5 text-yellow-300" />,
      title: "Email Excellence",
      content: "info@lumoraventures.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-yellow-300" />,
      title: "Premier Support",
      content: "+1 954-338-6884",
    },
    {
      icon: <MapPin className="w-5 h-5 text-yellow-300" />,
      title: "Headquarters",
      content: (
        <div className="text-gray-400 text-sm leading-relaxed">
          Office 4157, 58 Peregrine Road
          <br />
          Hainault, Ilford, Essex
          <br />
          United Kingdom
          <br />
          IG6 3SZ
        </div>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #030014 0%, #1a0033 25%, #000000 50%, #0a1a3a 75%, #030014 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-72 md:w-96 lg:w-[600px] h-72 md:h-96 lg:h-[600px] bg-purple-500 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 md:w-96 lg:w-[600px] h-72 md:h-96 lg:h-[600px] bg-indigo-500 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Gold Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 4px 4px, gold 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-5">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-yellow-300" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light text-white">
              Connect with Excellence
            </h2>
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-yellow-300" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Begin your transformation with personalized guidance from our
            experts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-gray-900/90 rounded-xl md:rounded-2xl blur-xl transform scale-105"></div>
            <div className="relative bg-gradient-to-br from-black to-gray-900 rounded-xl md:rounded-2xl border border-yellow-300/20 p-6 md:p-8 lg:p-10 shadow-xl">
              <h3 className="text-xl md:text-2xl font-serif text-white mb-6">
                Request Consultation
              </h3>

              {submitStatus.message && (
                <div
                  className={`mb-6 p-3 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                      : "bg-red-500/20 text-red-300 border border-red-500/30"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div>
                  <label className="block text-gray-400 mb-2 text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 md:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-300/50 focus:outline-none text-white transition-all duration-300 text-sm"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 md:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-300/50 focus:outline-none text-white transition-all duration-300 text-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm">
                    Interest Area
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 md:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-300/50 focus:outline-none text-white transition-all duration-300 text-sm"
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
                  <label className="block text-gray-400 mb-2 text-sm">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 md:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-300/50 focus:outline-none text-white transition-all duration-300 resize-none text-sm"
                    placeholder="Tell us about your requirements"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full py-3 md:py-4 rounded-lg bg-gradient-to-r from-yellow-300 via-amber-500 to-yellow-300 text-black font-medium text-sm md:text-base hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-500 flex items-center justify-center gap-2"
                  style={{ backgroundSize: "200% auto" }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Initiate Consultation</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="grid gap-4 md:gap-6 lg:gap-8 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-lg md:rounded-xl ${
                    index === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/95 to-gray-900/95 rounded-lg md:rounded-xl"></div>
                  <div className="absolute inset-0 border border-yellow-300/10 rounded-lg md:rounded-xl group-hover:border-yellow-300/30 transition-colors duration-300"></div>

                  {/* Content */}
                  <div className="relative p-4 md:p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-black to-gray-900 border border-yellow-300/20">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-serif text-white mb-1">
                          {info.title}
                        </h4>
                        {typeof info.content === "string" ? (
                          <p className="text-gray-400 text-sm">
                            {info.content}
                          </p>
                        ) : (
                          info.content
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Business Information */}
            <div className="mt-8 md:mt-10">
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black opacity-90"></div>
                <div className="relative p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-serif text-white mb-3 md:mb-4">
                    Elevate Your Business Today
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base mb-4">
                    Experience the premium transformation with Curl Cipher. Our
                    dedicated team is ready to support your salon's success
                    journey with innovative technology solutions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-base font-medium text-yellow-300 mb-1">
                        Business Hours
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-yellow-300 mb-1">
                        Support Hours
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Technical Support: 24/7
                        <br />
                        Customer Service: 8:00 AM - 8:00 PM
                        <br />
                        Emergency Line Available
                      </p>
                    </div>
                  </div>
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
