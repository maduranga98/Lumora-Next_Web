"use client";

import { useState } from "react";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - would connect to backend in real implementation
    console.log("Form submitted:", formData);
    // Reset form or show success message
  };

  return (
    <section className="bg-orange-500 py-16" id="contact">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Boost Your Local Presence?
            </h2>
            <p className="text-xl text-white mb-6">
              Contact us today to learn how our GMB management services can help
              your business stand out and attract more local customers.
            </p>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                What You'll Get:
              </h3>
              <ul className="space-y-2 text-white">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-300 rounded-full mr-3"></div>
                  Free GMB profile audit
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-300 rounded-full mr-3"></div>
                  Customized strategy proposal
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-300 rounded-full mr-3"></div>
                  Transparent pricing information
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-300 rounded-full mr-3"></div>
                  No obligation consultation
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-teal-700 mb-6">
              Get Started
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-700 text-white py-3 px-8 rounded-lg font-semibold transition-all hover:bg-teal-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
