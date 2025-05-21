// components/sections/QASection.jsx
"use client";

import { useState } from "react";
import Script from "next/script";

export default function QASection() {
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ schema structured data for rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [],
  };

  const faqs = [
    {
      question:
        "Do I really need a Google Business Profile if I already have a website?",
      answer:
        "Absolutely! Your website and Google Business Profile serve different purposes but work together. While your website provides detailed information about your business, Google Business Profile is specifically designed to help you appear in local searches and Google Maps. When potential customers search for services 'near me' or in your area, a well-optimized Google Business Profile significantly increases your chances of being found. Plus, Google Business Profile provides quick access to your contact information, directions, reviews, and hours—information local customers need immediately.",
    },
    {
      question:
        "How long does it take to see results from a professionally managed Google Business Profile?",
      answer:
        "Most businesses start seeing increased visibility in local search results within 2-4 weeks after optimization. However, the full impact builds over time as your profile gains activity, reviews, and local search relevance. Factors affecting timeline include your local competition, industry, starting point, and how actively you participate (responding to reviews, etc.). We provide monthly performance reports so you can track progress clearly.",
    },
    {
      question: "What if I already have a Google Business Profile?",
      answer:
        "Great! We'll start by conducting a comprehensive audit of your existing profile to identify areas for improvement. We'll then optimize all aspects of your listing—from business information and categories to photos and attributes. Many businesses have partially completed profiles or are missing key optimization opportunities. We'll transform your existing Google Business Profile into a powerful local marketing asset without losing any of your current reviews or data.",
    },
    {
      question: "Do you guarantee I'll rank #1 in local search results?",
      answer:
        "We don't make ranking guarantees, and we recommend being cautious of any company that does. Google's local search algorithms consider many factors, including some beyond anyone's control. What we do guarantee is implementing proven Google Business Profile optimization strategies, following Google's best practices, and continuously working to improve your local visibility. Our track record shows most clients see significant improvements in local visibility, customer engagement, and conversion actions.",
    },
    {
      question: "What information do you need from me to get started?",
      answer:
        "Our Google Business Profile onboarding process is simple. We'll need basic business information (exact business name, address, phone number, website, hours), access to your Google account if you have an existing listing, your business category, a few high-quality photos, and any specific services or products you offer. We've streamlined the process with a simple form that takes about 15 minutes to complete. After that, we handle everything else for your local search optimization!",
    },
    {
      question: "How do you handle posting and updates for my business?",
      answer:
        "We create and publish weekly posts on your Google Business Profile highlighting your services, special offers, events, or general updates. You can provide specific content you'd like us to share, or our team can create relevant local content based on your business and industry. We'll establish a content calendar and always welcome your input on what you'd like to showcase to your local customers.",
    },
    {
      question: "How do you handle review management?",
      answer:
        "We monitor your Google Business Profile reviews daily and notify you of new ones. For positive reviews, we can draft professional responses for your approval or post them directly if you prefer. For negative reviews, we alert you immediately and work with you to craft appropriate responses that address concerns professionally while protecting your online reputation. We also provide guidance on ethically generating more reviews from satisfied customers to improve your local search presence.",
    },
    {
      question:
        "Is there a minimum contract period for Google Business Profile management?",
      answer:
        "We offer month-to-month Google Business Profile management service with no long-term contracts required. We simply ask for 30 days notice if you wish to cancel. That said, Google Business Profile management is an ongoing process for best results, and most of our clients stay with us for years because of the continuous value they receive in terms of local search visibility and customer engagement.",
    },
    {
      question:
        "Can I make changes to my Google Business Profile myself while you're managing it?",
      answer:
        "Yes, you'll still have full access to your Google Business Profile. However, we recommend discussing changes with us first to ensure they align with our local SEO optimization strategy. If you make changes, simply let us know so we can update our records and ensure everything remains consistent across your online presence.",
    },
  ];

  // Build FAQ schema from the questions and answers
  faqs.forEach((faq) => {
    faqSchema.mainEntity.push({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    });
  });

  return (
    <>
      {/* Add structured data for rich results */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        id="qa"
        className="py-16 lg:py-24 bg-gray-50"
        aria-labelledby="qa-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with semantic HTML */}
          <header className="text-center mb-16">
            <h2
              id="qa-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Your Google Business Profile Questions Answered
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Common questions about Google Business Profile management and our
              professional local SEO optimization services
            </p>
          </header>

          {/* FAQ Accordion with ARIA attributes */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4" role="list">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const questionId = `question-${index}`;
                const answerId = `answer-${index}`;

                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm border border-gray-200"
                    role="listitem"
                  >
                    <h3>
                      <button
                        id={questionId}
                        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-lg"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                      >
                        <span className="text-lg font-semibold text-gray-900 pr-6">
                          {faq.question}
                        </span>
                        <span className="flex-shrink-0" aria-hidden="true">
                          <svg
                            className={`w-5 h-5 text-gray-500 transform transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>

                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "max-h-[1000px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                      hidden={!isOpen}
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Illustration with improved accessibility */}
          <div className="mt-16 flex justify-center">
            <QAIllustration />
          </div>
        </div>
      </section>
    </>
  );
}

// Q&A Illustration Component with accessibility improvements
function QAIllustration() {
  return (
    <svg
      viewBox="0 0 300 150"
      className="w-full max-w-md opacity-80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="qa-illustration-title qa-illustration-desc"
    >
      <title id="qa-illustration-title">
        Google Business Profile FAQs Illustration
      </title>
      <desc id="qa-illustration-desc">
        Decorative illustration with question marks and a lightbulb representing
        frequently asked questions about Google Business Profile
      </desc>

      {/* Question marks floating */}
      <circle
        cx="50"
        cy="50"
        r="20"
        fill="#FED7AA"
        opacity="0.2"
        aria-hidden="true"
      />
      <text
        x="50"
        y="57"
        fontSize="32"
        textAnchor="middle"
        fill="#0F766E"
        opacity="0.7"
        aria-hidden="true"
      >
        ?
      </text>

      <circle
        cx="250"
        cy="50"
        r="20"
        fill="#FED7AA"
        opacity="0.2"
        aria-hidden="true"
      />
      <text
        x="250"
        y="57"
        fontSize="32"
        textAnchor="middle"
        fill="#0F766E"
        opacity="0.7"
        aria-hidden="true"
      >
        ?
      </text>

      <circle
        cx="100"
        cy="100"
        r="20"
        fill="#FED7AA"
        opacity="0.2"
        aria-hidden="true"
      />
      <text
        x="100"
        y="107"
        fontSize="32"
        textAnchor="middle"
        fill="#0F766E"
        opacity="0.7"
        aria-hidden="true"
      >
        ?
      </text>

      <circle
        cx="200"
        cy="100"
        r="20"
        fill="#FED7AA"
        opacity="0.2"
        aria-hidden="true"
      />
      <text
        x="200"
        y="107"
        fontSize="32"
        textAnchor="middle"
        fill="#0F766E"
        opacity="0.7"
        aria-hidden="true"
      >
        ?
      </text>

      {/* Central lightbulb icon */}
      <circle cx="150" cy="75" r="25" fill="#0F766E" aria-hidden="true" />
      <path
        d="M140 65 h20 M145 70 h10"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        aria-hidden="true"
      />
      <path d="M142 80 h16 v10 h-16 z" fill="white" aria-hidden="true" />
      <path
        d="M144 90 h12 M144 93 h12"
        stroke="#FED7AA"
        strokeWidth="2"
        aria-hidden="true"
      />
    </svg>
  );
}
