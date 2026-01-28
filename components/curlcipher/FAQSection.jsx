"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/animation/AnimatedSection";

const faqs = [
  {
    question: "Is Curl Cipher suitable for a single freelancer?",
    answer:
      "Absolutely! Our Starter plan is designed specifically for independent stylists and booth renters, giving you professional tools without the enterprise cost.",
  },
  {
    question: "Can I import my client data from another system?",
    answer:
      "Yes, we offer a free concierge migration service. Just export your data from your current provider (Excel/CSV), and our team will handle the import for you.",
  },
  {
    question: "Do I need special hardware?",
    answer:
      "No. Curl Cipher works on any device with a web browser (iPad, tablet, laptop, phone). For the POS features, we integrate with standard card readers.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No contracts. You can cancel anytime. If you choose the annual plan for the discount, you are committed for one year.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-cyan-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
