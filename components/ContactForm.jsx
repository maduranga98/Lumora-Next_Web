"use client";

import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/lib/firebase";

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    csrfToken: "", // Add CSRF token to form data
  });

  // Form status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Generate and set CSRF token on component mount
  useEffect(() => {
    // Generate a random token
    const generateCSRFToken = () => {
      return Array(32)
        .fill(0)
        .map(() => Math.random().toString(36).charAt(2))
        .join('');
    };

    // Set the token in both state and session storage
    const csrfToken = generateCSRFToken();
    setFormData(prev => ({ ...prev, csrfToken }));
    
    // Store in session storage to verify on submission
    sessionStorage.setItem('csrfToken', csrfToken);
  }, []);

  // Service options
  const serviceOptions = [
    { value: "", label: "Select a service" },
    {
      value: "google-business",
      label: "Google My Business Profile Management",
    },
    {
      value: "salon-management",
      label: "Curl Cipher – Salon Management System",
    },
    { value: "industrial-automation", label: "Industrial Automation" },
    { value: "social-media", label: "Social Media Marketing (Coming Soon)" },
    { value: "other", label: "Other / Not sure yet" },
    
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset status
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");

    // Validate CSRF token
    const storedToken = sessionStorage.getItem('csrfToken');
    if (formData.csrfToken !== storedToken) {
      setSubmitError("Security validation failed. Please refresh the page and try again.");
      setIsSubmitting(false);
      return;
    }

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.service ||
      !formData.message
    ) {
      setSubmitError("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    try {
      // Add document to Firestore using the imported db instance
      // Remove the CSRF token from the data sent to Firestore
      const { csrfToken, ...dataToSubmit } = formData;
      
      await addDoc(collection(db, "inquiries"), {
        ...dataToSubmit,
        timestamp: serverTimestamp(),
        source: "website",
      });

      // Success
      setSubmitSuccess(true);

      // Reset form but generate a new CSRF token
      const newCsrfToken = Array(32)
        .fill(0)
        .map(() => Math.random().toString(36).charAt(2))
        .join('');
      
      sessionStorage.setItem('csrfToken', newCsrfToken);
      
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
        csrfToken: newCsrfToken,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      {/* Form Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

      {/* Success Message */}
      {submitSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm font-medium">
              Thank you for your message! We'll get back to you soon.
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <p className="text-sm font-medium">{submitError}</p>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        {/* Hidden CSRF Token Field */}
        <input 
          type="hidden" 
          name="csrfToken" 
          value={formData.csrfToken} 
        />
        
        <div className="grid grid-cols-1 gap-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Service Field */}
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Service of Interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="Tell us about your project or questions..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all duration-300 ${
                isSubmitting
                  ? "bg-indigo-400"
                  : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Additional Contact Info */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex flex-col space-y-3">
          <p className="text-sm text-gray-500">Or reach us directly at:</p>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-indigo-600 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            
              href="mailto:info@lumoraventures.com"
              className="text-indigo-600 hover:underline"
            >
              contact@lumoraventures.com
            </a>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-indigo-600 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            
              href="tel:+11234567890"
              className="text-indigo-600 hover:underline"
            >
              +1 (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;