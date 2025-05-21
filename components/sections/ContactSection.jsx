// components/gmb/ContactSection.jsx
"use client";

import React, { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../app/lib/firebase"; // Adjust path to your Firebase config

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
    service: "Google My Business",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
    loading: false,
  });

  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Set mounted state after hydration
  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isMounted) return;

    setFormStatus({
      submitted: true,
      success: false,
      message: "",
      loading: true,
    });

    try {
      // Save data to Firebase Firestore
      await addDoc(collection(db, "gmb_leads"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "",
        business: formData.business,
        message: formData.message || "",
        service: formData.service,
        timestamp: serverTimestamp(),
        source: "Google My Business Page",
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
            service: `${formData.service} - Business: ${formData.business}`,
            message: `Phone: ${formData.phone || "Not provided"}\n\n${
              formData.message || "No additional message"
            }`,
            // Additional metadata
            formSource: "Google My Business Page",
          }),
        });
      } catch (emailError) {
        // Log error but don't fail the submission
        console.warn(
          "Email notification failed but data was saved:",
          emailError
        );
      }

      setFormStatus({
        submitted: true,
        success: true,
        message:
          "Thank you! We've received your request and will contact you shortly.",
        loading: false,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        message: "",
        service: "Google My Business",
      });
    } catch (error) {
      console.error("Failed to submit form:", error);
      setFormStatus({
        submitted: true,
        success: false,
        message:
          "Something went wrong. Please try again or contact us directly.",
        loading: false,
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFF7ED] via-[#FFF1E1] to-[#FED7AA]"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-0 -right-40 w-80 h-80 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-teal-500/10 rounded-full blur-3xl transition-opacity duration-1000 ${
            isMounted ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 -left-40 w-80 h-80 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-yellow-500/10 rounded-full blur-3xl transition-opacity duration-1000 delay-300 ${
            isMounted ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>

      <div className="relative max-w-6xl xl:max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2
            className={`font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 transition-all duration-700 ${
              isMounted
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Ready to Boost Your Local Presence?
          </h2>
          <p
            className={`font-inter text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-300 ${
              isMounted
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Get in touch with our Google My Business experts and start
            attracting more local customers today.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 lg:gap-12 transition-all duration-700 delay-500 ${
            isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Contact Form Card */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-8 lg:p-10 border border-teal-100/50">
            <h3 className="font-montserrat text-lg sm:text-xl font-semibold text-gray-900 mb-6">
              Get Your Free Consultation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block font-inter text-sm text-gray-700 mb-1"
                >
                  Your Name*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-sm"
                  placeholder="John Smith"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-inter text-sm text-gray-700 mb-1"
                  >
                    Email Address*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-inter text-sm text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-sm"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="business"
                  className="block font-inter text-sm text-gray-700 mb-1"
                >
                  Business Name*
                </label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  value={formData.business}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-sm"
                  placeholder="Your Business LLC"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-inter text-sm text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-sm resize-none"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className={`w-full font-montserrat px-6 py-3 rounded-lg text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 text-sm ${
                    formStatus.loading
                      ? "bg-teal-400 cursor-not-allowed"
                      : "bg-teal-600 hover:bg-teal-700 transform hover:translate-y-[-2px]"
                  }`}
                >
                  {formStatus.loading
                    ? "Sending..."
                    : "Request Free Consultation"}
                </button>
              </div>

              {formStatus.submitted && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    formStatus.success
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 border border-teal-100/50 mb-6">
              <h3 className="font-montserrat text-lg sm:text-xl font-semibold text-gray-900 mb-6">
                Why Choose Our GMB Services
              </h3>

              <ul className="space-y-4">
                {[
                  "Expert profile optimization for higher visibility",
                  "Targeted keywords to attract local customers",
                  "Strategic review management to build trust",
                  "Consistent posting schedule for engagement",
                  "Photo and content optimization for better rankings",
                  "Detailed analytics and performance tracking",
                ].map((benefit, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 w-5 h-5 mt-1">
                      <svg
                        className="w-5 h-5 text-teal-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 font-inter text-sm text-gray-700">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 border border-teal-100/50">
              <h3 className="font-montserrat text-lg sm:text-xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-montserrat text-sm font-medium text-gray-900">
                      Email
                    </h4>
                    <a
                      href="mailto:info@lumoraventures.com"
                      className="font-inter text-sm text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      info@lumoraventures.com
                    </a>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-montserrat text-sm font-medium text-gray-900">
                      Phone
                    </h4>
                    <a
                      href="tel:+11234567890"
                      className="font-inter text-sm text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-montserrat text-sm font-medium text-gray-900">
                      Business Hours
                    </h4>
                    <p className="font-inter text-sm text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="font-inter text-sm text-gray-700">
                      Weekends: By appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
