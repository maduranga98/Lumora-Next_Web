"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "Please fill in all required fields.",
      });
      return;
    }

    setFormStatus({
      ...formStatus,
      isSubmitting: true,
      isError: false,
      message: "",
    });

    // Simulate form submission
    try {
      // Replace this with your actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: "Thank you! Your message has been sent successfully.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      // Error
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} className="text-white" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      color: "#3B82F6",
    },
    {
      icon: <Mail size={24} className="text-white" />,
      title: "Email",
      details: "info@lumoraventures.com",
      color: "#3B82F6",
    },
    {
      icon: <MapPin size={24} className="text-white" />,
      title: "Address",
      details: "123 Business Street, City, Country",
      color: "#3B82F6",
    },
  ];

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have questions or need assistance? We're here to help! Reach out to
            us and let's discuss how we can transform your business together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-dark mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="blue-glass-card p-6 rounded-2xl">
              <h4 className="text-lg font-semibold text-primary-dark mb-4">
                Business Hours
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-medium text-primary-dark">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-medium text-primary-dark">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-medium text-primary-dark">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">
                Send Us a Message
              </h3>

              {formStatus.isSubmitted ? (
                <div className="bg-green-50 text-green-600 p-6 rounded-xl border border-green-100 text-center">
                  <svg
                    className="w-12 h-12 text-green-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="font-medium text-lg">{formStatus.message}</p>
                  <button
                    onClick={() =>
                      setFormStatus({ ...formStatus, isSubmitted: false })
                    }
                    className="mt-4 text-primary-blue hover:text-primary-dark transition-colors font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {formStatus.isError && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 border border-red-100">
                      <p>{formStatus.message}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 mb-2 font-medium"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-colors focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 mb-2 font-medium"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-colors focus:outline-none"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 mb-2 font-medium"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-colors focus:outline-none"
                        placeholder="Your phone number"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-gray-700 mb-2 font-medium"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-colors focus:outline-none"
                        placeholder="What is this about?"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-colors focus:outline-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className={`btn btn-primary w-full py-3 flex justify-center items-center gap-2 ${
                      formStatus.isSubmitting
                        ? "opacity-70 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {formStatus.isSubmitting ? "Sending..." : "Send Message"}
                    {!formStatus.isSubmitting && <Send size={18} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
