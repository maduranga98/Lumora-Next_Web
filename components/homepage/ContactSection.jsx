"use client";

import { useState, useEffect, useRef } from "react";
import {
  Code,
  Brain,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    interest: "",
    budget: "",
    timeline: "",
    message: "",
    source: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          industry: "",
          interest: "",
          budget: "",
          timeline: "",
          message: "",
          source: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const paths = [
    {
      icon: Code,
      title: "I Need Software/Mobile App",
      description:
        "Perfect for: Web apps, mobile apps, custom software, SaaS platforms",
      process: [
        "Fill project brief form",
        "Receive quote within 48 hours",
        "Start development in 1-2 weeks",
        "Regular updates every 2 weeks",
      ],
      price: "Starting From: Rs. 150,000",
      cta: "Start Project Brief",
      color: "blue",
    },
    {
      icon: Brain,
      title: "I Need AI/Automation",
      description:
        "Perfect for: Computer vision, ML, IoT, predictive maintenance, digital twins",
      process: [
        "Schedule consultation call",
        "Technical assessment of requirements",
        "Custom proposal with timeline",
        "Pilot project option available",
      ],
      price: "Starting From: Rs. 500,000",
      cta: "Schedule Consultation",
      color: "purple",
    },
    {
      icon: MessageSquare,
      title: "I Want to Explore",
      description:
        "Perfect for: Learning about options, discussing ideas, getting advice",
      process: [
        "Talk to our team",
        "No commitment required",
        "Free initial consultation",
        "Honest recommendations",
      ],
      price: "Free Consultation",
      cta: "Contact Us",
      color: "green",
    },
  ];

  const industries = [
    "Select Industry",
    "Fitness & Wellness",
    "Beauty & Personal Care",
    "Manufacturing",
    "Retail & E-commerce",
    "Healthcare",
    "Energy & Utilities",
    "Corporate & Enterprise",
    "Agriculture & Food",
    "Other",
  ];

  const interests = [
    "Select Interest",
    "Custom Web Application",
    "Mobile App Development",
    "Computer Vision System",
    "Machine Learning Solution",
    "Industrial IoT & Automation",
    "Predictive Maintenance",
    "Data Analytics Platform",
    "Existing Product (PulsedGym, Curl Cipher, etc.)",
    "General Inquiry",
  ];

  const budgets = [
    "Select Budget Range",
    "Under Rs. 200,000",
    "Rs. 200,000 - 500,000",
    "Rs. 500,000 - 1,000,000",
    "Rs. 1,000,000 - 2,000,000",
    "Above Rs. 2,000,000",
    "Not sure yet",
  ];

  const timelines = [
    "Select Timeline",
    "ASAP (1-2 months)",
    "3-6 months",
    "6-12 months",
    "Just exploring",
  ];

  const sources = [
    "How did you hear about us?",
    "Google Search",
    "Social Media",
    "Referral",
    "LinkedIn",
    "Other",
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200 hover:border-blue-400",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700",
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200 hover:border-purple-400",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700",
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200 hover:border-green-400",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        button: "bg-green-600 hover:bg-green-700",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-24 lg:py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose how you&apos;d like to begin
          </p>
        </div>

        {/* Three Paths */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 ${
            isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"
          }`}
        >
          {paths.map((path, index) => {
            const IconComponent = path.icon;
            const colors = getColorClasses(path.color);
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${colors.border} transition-all duration-300 hover:shadow-xl`}
              >
                <div
                  className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4`}
                >
                  <IconComponent className={`w-6 h-6 ${colors.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {path.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{path.description}</p>
                <ul className="space-y-2 mb-4">
                  {path.process.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <ArrowRight
                        className={`w-4 h-4 ${colors.iconColor} flex-shrink-0 mt-0.5`}
                      />
                      {step}
                    </li>
                  ))}
                </ul>
                <p
                  className={`text-sm font-semibold ${colors.iconColor} mb-4`}
                >
                  {path.price}
                </p>
                <a
                  href="#contact-form"
                  className={`block w-full text-center ${colors.button} text-white py-3 rounded-lg font-medium transition-colors`}
                >
                  {path.cta} <ArrowRight className="w-4 h-4 inline ml-1" />
                </a>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div
            className={`${
              isVisible ? "animate-fade-in-up animate-delay-300" : "opacity-0"
            }`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <a
                    href="mailto:info@lumoraventures.com"
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    info@lumoraventures.com
                  </a>
                  <br />
                  <a
                    href="mailto:projects@lumoraventures.com"
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    projects@lumoraventures.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <a
                    href="tel:+94123456789"
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    +94 77 986 1174
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Hours</p>
                  <p className="text-sm text-gray-600">
                    9 AM - 6 PM IST, Mon-Fri
                  </p>
                  <p className="text-xs text-gray-500">
                    24/7 for enterprise clients
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Location</p>
                  <p className="text-sm text-gray-600">
                    Kandy, Central Province, Sri Lanka
                  </p>
                  <p className="text-xs text-gray-500">
                    Remote collaboration available globally
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-medium text-gray-900 mb-3">
                Follow Us
              </p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/company/lumoraventures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/lumoraventures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/lumoraventures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            id="contact-form"
            className={`lg:col-span-2 ${
              isVisible ? "animate-fade-in-up animate-delay-400" : "opacity-0"
            }`}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+94 77 123 4567"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your Company Name"
                    />
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                    >
                      {industries.map((ind, idx) => (
                        <option key={idx} value={idx === 0 ? "" : ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Interest */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      I&apos;m Interested In *
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                    >
                      {interests.map((int, idx) => (
                        <option key={idx} value={idx === 0 ? "" : int}>
                          {int}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                    >
                      {budgets.map((bud, idx) => (
                        <option key={idx} value={idx === 0 ? "" : bud}>
                          {bud}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                    >
                      {timelines.map((time, idx) => (
                        <option key={idx} value={idx === 0 ? "" : time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project, challenges, and goals..."
                  />
                </div>

                {/* Source */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  >
                    {sources.map((src, idx) => (
                      <option key={idx} value={idx === 0 ? "" : src}>
                        {src}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                    Thank you for your message! We&apos;ll get back to you
                    within 24-48 hours.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    Something went wrong. Please try again or email us directly
                    at info@lumoraventures.com
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
