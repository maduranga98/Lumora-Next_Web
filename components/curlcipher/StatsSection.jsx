"use client";

const stats = [
  { value: "30%", label: "Increase in Revenue" },
  { value: "10hrs", label: "Saved Per Week" },
  { value: "0", label: "Double Bookings" },
  { value: "24/7", label: "Support Access" },
];

export default function StatsSection() {
  return (
    <section className="border-y border-gray-100 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <div key={i} className="py-8 md:py-12 text-center px-4">
              <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
