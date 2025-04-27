"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long until I see results from GMB optimization?",
      answer:
        "Most businesses see noticeable improvements in visibility and engagement within 30-60 days, with continued growth over time.",
    },
    {
      question: "Do I need GMB if I already have a website?",
      answer:
        "Yes! GMB complements your website by improving your local visibility specifically in Google Search and Maps, which is often the first place customers find local businesses.",
    },
    {
      question: "How does GMB help my business grow?",
      answer:
        "GMB increases your visibility in local searches, builds customer trust through reviews, provides valuable insights about your customers, and offers a platform to showcase your products and services.",
    },
    {
      question: "What's included in GMB management services?",
      answer:
        "Our comprehensive service includes profile optimization, review management, regular content posting, competitor analysis, performance reporting, and strategy adjustments based on data.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-amber-50 py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Get answers to common questions about our Google My Business
          management services.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full py-4 px-6 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-teal-800">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-teal-700" />
                ) : (
                  <ChevronDown size={20} className="text-teal-700" />
                )}
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "py-4 max-h-96" : "max-h-0 py-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
