import React, { useState } from "react";
// Direct imports from firebase/firestore
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "../../app/lib/firebase";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      // Get Firestore instance directly (in case db is not properly exported from firebase.js)
      const db = getFirestore(app);

      // Add document to automation collection
      await addDoc(collection(db, "automation"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp(),
        status: "new",
      });

      console.log("Message submitted successfully");

      // Success message
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! Our team will contact you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: "Phone",
      value: (
        <div>
          <p>+94 76 916 4108</p>
          <p className="mt-1">+94 76 620 6555</p>
        </div>
      ),
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: "info@lumoraventures.com",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
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
      ),
      label: "Location",
      value: "Kurunegala road, Kuliyapitiya",
    },
  ];

  return (
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Get in touch with our automation experts and discover how we can
            revolutionize your industrial processes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-lg p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-blue-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Your Name"
                  disabled={isSubmitting}
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-blue-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="your.email@company.com"
                  disabled={isSubmitting}
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-black/50 border border-blue-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Tell us about your automation needs..."
                  disabled={isSubmitting}
                />
              </div>

              {/* Status Message */}
              {submitStatus.message && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                      : "bg-red-500/20 text-red-300 border border-red-500/30"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
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
                    Processing...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-black/40 backdrop-blur-sm border border-blue-400/20 rounded-lg hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400">
                  {info.icon}
                </div>
                <div>
                  <div className="text-gray-400 text-sm">{info.label}</div>
                  <div className="text-white text-lg font-semibold">
                    {info.value}
                  </div>
                </div>
              </div>
            ))}

            {/* Business Hours */}
            <div className="p-6 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-400/30 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-blue-400 mt-4">
                  24/7 Support: +94 76 916 4108
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px]" />

      {/* Network Pattern */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        viewBox="0 0 1200 1200"
        preserveAspectRatio="none"
      >
        <pattern
          id="contact-pattern"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="50" cy="50" r="2" className="fill-blue-400" />
          <circle cx="0" cy="0" r="2" className="fill-blue-400" />
          <circle cx="100" cy="100" r="2" className="fill-blue-400" />
          <path
            d="M0 50h50m0 0h50m0 0l-50 50M50 0v50m0 0v50"
            stroke="currentColor"
            strokeWidth="1"
            className="text-blue-400/50"
            fill="none"
          />
        </pattern>
        <rect
          x="0"
          y="0"
          width="1200"
          height="1200"
          fill="url(#contact-pattern)"
        />
      </svg>
    </section>
  );
};

export default ContactUs;
