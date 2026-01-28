"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Scissors,
  Users,
  BarChart3,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Smart Scheduling",
    desc: "AI-powered calendar that eliminates double bookings and optimizes staff time.",
    icon: Calendar,
    colSpan: "lg:col-span-4",
    bg: "bg-blue-50",
  },
  {
    title: "Inventory Control",
    desc: "Real-time tracking of products with automated low-stock alerts.",
    icon: Scissors,
    colSpan: "lg:col-span-4",
    bg: "bg-cyan-50",
  },
  {
    title: "Staff Management",
    desc: "Track performance, commissions, and shift schedules in one place.",
    icon: Users,
    colSpan: "lg:col-span-4",
    bg: "bg-gray-50",
  },
  {
    title: "Client CRM & Loyalty",
    desc: "Build lasting relationships with detailed client profiles, history, and automated loyalty points.",
    icon: ShieldCheck,
    colSpan: "lg:col-span-6",
    bg: "bg-gradient-to-br from-blue-900 to-blue-800 text-white",
    dark: true,
    hasImage: true, // Marker for image
  },
  {
    title: "Mobile POS",
    desc: "Checkout clients from the chair with our seamless mobile point of sale system.",
    icon: Smartphone,
    colSpan: "lg:col-span-3",
    bg: "bg-white border border-gray-100 shadow-sm",
  },
  {
    title: "Analytics & Reports",
    desc: "Data-driven insights to grow your revenue.",
    icon: BarChart3,
    colSpan: "lg:col-span-3",
    bg: "bg-white border border-gray-100 shadow-sm",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Everything You Need to Run a Pro Salon
          </h2>
          <p className="text-lg text-gray-600">
            Replace your fragmented tools with one cohesive operating system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative overflow-hidden ${feature.colSpan} rounded-3xl p-8 ${feature.bg} ${feature.dark ? "text-white" : "text-gray-900"} hover:shadow-lg transition-shadow duration-300 group`}
              >
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${feature.dark ? "bg-white/10" : "bg-white shadow-sm"}`}
                  >
                    <Icon
                      className={`w-6 h-6 ${feature.dark ? "text-white" : "text-blue-600"}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p
                    className={`${feature.dark ? "text-blue-100" : "text-gray-600"} leading-relaxed max-w-sm`}
                  >
                    {feature.desc}
                  </p>
                </div>

                {/* Integration Image for CRM Card */}
                {feature.hasImage && (
                  <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <Image
                      src="/curl cipher/technology-salon-integration.avif"
                      alt="Technology Integration"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
