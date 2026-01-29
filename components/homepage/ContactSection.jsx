"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import AnimatedSection from "@/components/animation/AnimatedSection";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const autoReplyTemplateId =
      process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || "Not provided",
      message: formData.message,
      to_name: "Lumora Ventures Team",
    };

    try {
      // 1. Send Admin Notification
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // 2. Send Auto-Reply (Only if the ID exists in .env)
      if (autoReplyTemplateId) {
        await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          templateParams,
          publicKey,
        );
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Let&apos;s Build Something Great Together
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection
            variant="slideLeft"
            delay={0.2}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-blue-900" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                <a
                  href="mailto:info@lumoraventures.com"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  info@lumoraventures.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-blue-900" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                <div className="space-y-1">
                  <a
                    href="tel:+94719998500"
                    className="text-blue-600 hover:text-blue-700 transition-colors block"
                  >
                    +94 71 999 8500
                  </a>
                  <a
                    href="tel:+94779861174"
                    className="text-blue-600 hover:text-blue-700 transition-colors block"
                  >
                    +94 77 986 1174
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-blue-900" />
              </div>
              <div className="space-y-6 w-full">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    United Kingdom
                  </h3>
                  <div className="text-gray-600 text-sm leading-relaxed">
                    <p>Office 4157, 58 Peregrine Road</p>
                    <p>Hainault, Ilford, Essex</p>
                    <p>IG6 3SZ</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Sri Lanka</h3>
                  <div className="text-gray-600 text-sm leading-relaxed">
                    <p>Kurunegala Road</p>
                    <p>Kuliyapitiya, 60200</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <span className="font-medium">Office Hours:</span> Monday –
                Friday, 9 AM – 6 PM IST
              </p>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection variant="slideRight" delay={0.3}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-lg p-8 space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name *"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email *"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company (Optional)"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your project... *"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-900 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
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

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                  Thank you! We&apos;ll get back to you within 24-48 hours.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  Something went wrong. Please try again or email us at
                  info@lumoraventures.com
                </div>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
