"use client";

import Link from "next/link";
import { Settings, Activity, Server, BarChart2 } from "lucide-react";

const AutomationServicesSection = () => {
  const services = [
    {
      title: "Control Systems",
      description:
        "Advanced control systems design and implementation for manufacturing processes.",
      icon: <Settings size={32} className="text-blue-400" />,
    },
    {
      title: "Process Automation",
      description:
        "Streamline workflows with intelligent automation solutions for efficiency.",
      icon: <Activity size={32} className="text-blue-400" />,
    },
    {
      title: "IoT Integration",
      description:
        "Connect machinery and systems through Internet of Things technologies.",
      icon: <Server size={32} className="text-blue-400" />,
    },
    {
      title: "Data Analytics",
      description:
        "Transform operational data into actionable insights for improvement.",
      icon: <BarChart2 size={32} className="text-blue-400" />,
    },
  ];

  return (
    <section className="py-16 border-t border-blue-900/30">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0a192f] border border-blue-900/50 rounded-lg p-6 transition-all hover:border-blue-400/50 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">
                  {service.title}
                </h3>
                <p className="text-blue-100/70 text-sm">
                  {service.description}
                </p>
                <Link
                  href="#"
                  className="mt-4 text-blue-400 text-sm hover:underline"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationServicesSection;
