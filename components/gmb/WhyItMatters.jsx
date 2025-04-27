"use client";

import { BarChart3, Search, TrendingUp, Map } from "lucide-react";

const WhyItMatters = () => {
  const stats = [
    {
      icon: <Search size={24} color="#006064" />,
      stat: "84%",
      text: "of consumers use Google to find local businesses",
    },
    {
      icon: <BarChart3 size={24} color="#006064" />,
      stat: "7x",
      text: "more clicks for businesses with complete GMB profiles",
    },
    {
      icon: <TrendingUp size={24} color="#006064" />,
      stat: "25%",
      text: "higher conversion rate for local search leads",
    },
    {
      icon: <Map size={24} color="#006064" />,
      stat: "#1",
      text: "GMB is the primary factor in local search ranking",
    },
  ];

  return (
    <section className="bg-amber-50 py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 text-center">
          Why GMB Matters
        </h2>
        <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Your Google My Business profile is often the first impression
          customers have of your business online. Here's why it's essential for
          your local marketing strategy:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md transition-all hover:-translate-y-2 hover:shadow-lg text-center"
            >
              <div className="bg-amber-200 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-teal-700 mb-2">
                {item.stat}
              </h3>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
