"use client";

import React, { useState, useEffect, useRef } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../app/lib/firebase";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  // Use a ref to track mounted state for hydration safety
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const resizeTimerRef = useRef(null);
  const contactRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [formErrors, setFormErrors] = useState({});

  // Set mounted state after hydration and track window width with throttling
  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);

    // Throttled resize handler for better performance
    const handleResize = () => {
      if (resizeTimerRef.current) return;

      resizeTimerRef.current = setTimeout(() => {
        setWindowWidth(window.innerWidth);
        resizeTimerRef.current = null;
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
    };
  }, []);

  // Form validation
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }

    if (!formData.service) {
      errors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isMounted) return;

    // Validate form before submission
    if (!validateForm()) return;

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

      // Send email notification
      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!emailResponse.ok) {
        console.warn("Email notification failed but data was saved.");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });

      // Automatically clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("");
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // JSON-LD structured data for SEO
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Lumora Ventures",
    description:
      "Get in touch with Lumora Ventures for innovative digital solutions for business growth.",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Office 4157, 58 Peregrine Road, Hainault",
        addressLocality: "Ilford",
        addressRegion: "Essex",
        postalCode: "IG6 3SZ",
        addressCountry: "United Kingdom",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Kurunegala road, Kuliyapitiya",
        addressLocality: "Kurunegala",
        addressCountry: "Sri Lanka",
      },
    ],
  };

  // Services offered - for form dropdown and schema
  const services = [
    {
      id: "google-my-business",
      name: "Google Business Profile Management",
      value: "Google Business Profile",
    },
    {
      id: "curl-cipher",
      name: "Curl Cipher – Salon Management System",
      value: "Curl Cipher",
    },
    {
      id: "industrial-automation",
      name: "Industrial Automation Solutions",
      value: "Industrial Automation",
    },
    {
      id: "social-media-marketing",
      name: "Social Media Marketing Services",
      value: "Social Media Marketing",
    },
    {
      id: "other",
      name: "Other Digital Services",
      value: "Other",
    },
  ];

  // Calculate the approximate navbar height based on window width
  const getNavbarHeight = () => {
    if (windowWidth >= 1280) return 80;
    if (windowWidth >= 1024) return 72;
    if (windowWidth >= 768) return 64;
    return 56;
  };

  return (
    <>
      {/* Add structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <section
        ref={contactRef}
        className="min-h-screen py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(135deg, #EBF5FF 0%, #F5F7FA 100%)",
          scrollMarginTop: `${getNavbarHeight() + 20}px`,
        }}
        data-section-id="contact"
        data-scrollable="true"
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
          {/* Header Section with proper semantic markup */}
          <header className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
            <h1
              className="font-montserrat text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5"
              itemProp="name"
            >
              Contact Lumora Ventures
            </h1>
            <div
              className="w-16 h-1 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              aria-hidden="true"
            ></div>
            <p
              className="font-inter text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-700 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto"
              itemProp="description"
            >
              Ready to take your business to the next level with digital
              transformation? Let's discuss how our innovative solutions can
              help you achieve your goals.
            </p>
          </header>

          {/* Contact Hero Image */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/contact.webp"
                alt="Contact Lumora Ventures - Modern office workspace with digital transformation technology and professional team"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                    Let's Build Something Amazing Together
                  </h2>
                  <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
                    Your digital transformation journey starts with a
                    conversation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Contact Info Side */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 sm:p-10 md:p-12 lg:p-14 text-white">
                  <h2 className="text-xl sm:text-2xl font-bold mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 mt-1">
                        {/* Phone Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-white text-lg font-semibold">
                          Phone
                        </p>
                        <p className="mt-1">+94 76 916 4108</p>
                        <p className="mt-1">+94 76 620 6555</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 mt-1">
                        {/* Email Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-white text-lg font-semibold">
                          Email
                        </p>
                        <p className="mt-1">info@lumoraventures.com</p>
                      </div>
                    </div>

                    {/* UK Office */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 mt-1">
                        {/* Location Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-white text-lg font-semibold">
                          UK Office
                        </p>
                        <p className="mt-1 leading-relaxed">
                          Office 4157, 58 Peregrine Road
                          <br />
                          Hainault, Ilford, Essex
                          <br />
                          United Kingdom, IG6 3SZ
                        </p>
                      </div>
                    </div>

                    {/* Sri Lanka Office */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 mt-1">
                        {/* Location Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-white text-lg font-semibold">
                          Sri Lanka Office
                        </p>
                        <p className="mt-1 leading-relaxed">
                          Kurunegala road, Kuliyapitiya
                          <br />
                          Kurunegala, Sri Lanka
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      {/* Social Media Icons */}
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-400 transition duration-300"
                        aria-label="Follow us on Twitter"
                      >
                        <svg
                          className="h-5 w-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-400 transition duration-300"
                        aria-label="Follow us on LinkedIn"
                      >
                        <svg
                          className="h-5 w-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-400 transition duration-300"
                        aria-label="Follow us on Facebook"
                      >
                        <svg
                          className="h-5 w-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Form Side */}
                <div className="p-8 sm:p-10 md:p-12 lg:p-14">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                    Send us a message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.name ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="John Doe"
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.email
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="john@example.com"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.service
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.value}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                      {formErrors.service && (
                        <p className="mt-1 text-sm text-red-600">
                          {formErrors.service}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.message
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="Tell us about your project and how we can help..."
                      />
                      {formErrors.message && (
                        <p className="mt-1 text-sm text-red-600">
                          {formErrors.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition duration-300 ${
                          isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>

                    {submitStatus === "success" && (
                      <div className="p-4 rounded-lg bg-green-100 text-green-700">
                        Thank you for contacting us! We'll get back to you soon.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-4 rounded-lg bg-red-100 text-red-700">
                        There was an error submitting your message. Please try
                        again.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
