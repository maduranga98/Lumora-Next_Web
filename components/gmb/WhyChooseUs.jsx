"use client";

import { Check } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    "Proven expertise in local SEO and GMB optimization",
    "Dedicated account managers for personalized service",
    "Data-driven strategies with monthly reporting",
    "Transparent pricing with no long-term contracts",
    "Continuous optimization based on performance metrics",
    "Industry-specific strategies tailored to your business",
  ];

  return (
    <section className="bg-teal-700 py-16 text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Lumora Ventures
            </h2>
            <p className="text-lg mb-8 opacity-90">
              We specialize in helping businesses maximize their local
              visibility and customer engagement through expert Google My
              Business management. Our team has the expertise and tools to
              optimize every aspect of your GMB profile to ensure you stand out
              from competitors.
            </p>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-amber-400 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <Check size={14} color="#006064" />
                  </div>
                  <span className="text-white opacity-90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/2 bg-teal-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Process</h3>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Audit & Analysis",
                  description:
                    "We thoroughly analyze your current GMB profile and identify areas for improvement.",
                },
                {
                  number: "02",
                  title: "Strategy Development",
                  description:
                    "We create a customized strategy based on your business goals and target audience.",
                },
                {
                  number: "03",
                  title: "Implementation",
                  description:
                    "We optimize your profile, implement content strategy, and set up review management.",
                },
                {
                  number: "04",
                  title: "Ongoing Management",
                  description:
                    "We continuously monitor, update, and refine your profile to maximize results.",
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-teal-800">
                    {step.number}
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-1">{step.title}</h4>
                    <p className="text-white opacity-80">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
