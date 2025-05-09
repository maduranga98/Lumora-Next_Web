"use client";

import React, { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../app/lib/firebase";

const ContactPage = () => {
  // Use a ref to track mounted state for hydration safety
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // Set mounted state after hydration and track window width
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

    setIsSubmitting(true);

    try {
      // Save data to Firebase Firestore
      await addDoc(collection(db, "web customers"), {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message,
        timestamp: serverTimestamp(),
      });

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(135deg, #EBF5FF 0%, #F5F7FA 100%)",
      }}
    >
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20">
          <h1 className="font-montserrat text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
            Get in Touch
          </h1>
          <div className="w-20 h-1 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40 xl:h-1.5 mx-auto mb-6 sm:mb-7 md:mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <p className="font-inter text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-gray-700 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
            Ready to take your business to the next level? Let's discuss how we
            can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            {/* Illustration */}
            <div className="hidden lg:block mb-6 overflow-hidden rounded-xl shadow-md">
              {isMounted && (
                <img
                  src="/contact.png"
                  alt="Contact illustration"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>

            {/* Contact Information Card */}
            <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 md:p-7 lg:p-8 border border-blue-50">
              <h3 className="font-montserrat text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold text-gray-900 mb-5 sm:mb-6 md:mb-7">
                Contact Information
              </h3>

              <div className="space-y-5 sm:space-y-6 md:space-y-7">
                {/* Email */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600"
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
                  </div>
                  <div>
                    <h4 className="font-montserrat text-base font-medium text-gray-900">
                      Email
                    </h4>
                    <p className="font-inter text-sm text-gray-600 mt-1">
                      info@lumoraventures.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-purple-600"
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
                  </div>
                  <div>
                    <h4 className="font-montserrat text-base font-medium text-gray-900">
                      Phone
                    </h4>
                    <p className="font-inter text-sm text-gray-600 mt-1">
                      +1 (123) 456-7890
                    </p>
                  </div>
                </div>

                {/* Address - Full width */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-montserrat text-base font-medium text-gray-900">
                      Address
                    </h4>
                    <div className="font-inter text-sm text-gray-600 mt-1">
                      <p>Office 4157, 58 Peregrine Road</p>
                      <p>Hainault, Ilford, Essex</p>
                      <p>United Kingdom</p>
                      <p>IG6 3SZ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form and Additional Info */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            {/* Contact Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 h-fit mb-5 sm:mb-6 md:mb-7 lg:mb-8 border border-blue-50">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5 md:space-y-6"
              >
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-montserrat text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-inter"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-montserrat text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-inter"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label
                    htmlFor="service"
                    className="block font-montserrat text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                  >
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-inter"
                  >
                    <option value="">Select a service</option>
                    <option value="Google My Business">
                      Google My Business Profile Management
                    </option>
                    <option value="Curl Cipher">
                      Curl Cipher – Salon Management System
                    </option>
                    <option value="Industrial Automation">
                      Industrial Automation
                    </option>
                    <option value="Social Media Marketing">
                      Social Media Marketing
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-montserrat text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-inter"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-montserrat font-semibold text-white shadow-md transition-all duration-300 ${
                      isSubmitting
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 rounded-lg bg-green-50 text-green-700 font-inter border border-green-200">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 rounded-lg bg-red-50 text-red-700 font-inter border border-red-200">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>

            {/* Additional Information */}
            <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
              {/* Office Hours */}
              <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 border border-blue-50">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-yellow-600"
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
                  </div>
                  <div>
                    <h4 className="font-montserrat text-base font-medium text-gray-900">
                      Business Hours
                    </h4>
                    <p className="font-inter text-sm text-gray-600 mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="font-inter text-sm text-gray-600">
                      Weekends: By appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 border border-blue-50">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 013 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-montserrat text-base font-medium text-gray-900">
                      Connect With Us
                    </h4>
                    <div className="flex space-x-4 mt-2">
                      <a
                        href="#"
                        className="text-gray-500 hover:text-blue-600 transition-colors transform hover:scale-110 duration-300"
                        aria-label="Facebook"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.33v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
                        aria-label="Twitter"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-1.297.172 4.725 4.725 0 01-.923-.085 4.907 4.907 0 004.6 3.416A9.865 9.865 0 010 19.539a13.902 13.902 0 007.548 2.212c9.058 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.635A9.936 9.936 0 0024 4.59z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-blue-600 transition-colors transform hover:scale-110 duration-300"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
