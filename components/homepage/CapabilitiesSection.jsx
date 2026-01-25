"use client";

import { useState, useEffect, useRef } from "react";
import {
  Globe,
  Smartphone,
  Eye,
  Brain,
  Cpu,
  Activity,
} from "lucide-react";

const CapabilitiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const capabilities = [
    {
      icon: Globe,
      title: "Custom Web Development",
      description: "Build powerful, scalable web applications",
      features: [
        "React & Next.js expertise",
        "Responsive, mobile-first design",
        "Cloud-native architecture",
        "RESTful & GraphQL APIs",
        "Progressive Web Apps (PWA)",
      ],
      technologies: "React, Next.js, Node.js, Python, PostgreSQL, MongoDB",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native quality, cross-platform efficiency",
      features: [
        "Flutter for iOS & Android",
        "Native performance",
        "Offline-first architecture",
        "Push notifications",
        "App store optimization",
      ],
      technologies: "Flutter, React Native, Firebase, Native SDKs",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Systems that see and understand",
      features: [
        "Real-time object detection",
        "Face recognition (99.7% accuracy)",
        "Defect detection for manufacturing",
        "OCR and document processing",
        "Edge AI deployment",
      ],
      technologies: "OpenCV, YOLO, TensorFlow, PyTorch, ESP32-CAM",
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      description: "Intelligent systems that learn and optimize",
      features: [
        "Predictive analytics",
        "Time-series forecasting",
        "Natural Language Processing",
        "Recommendation engines",
        "Anomaly detection",
      ],
      technologies: "TensorFlow, Scikit-learn, PyTorch, XGBoost",
    },
    {
      icon: Cpu,
      title: "Industrial IoT",
      description: "Connect and monitor physical operations",
      features: [
        "Sensor network design",
        "Real-time data collection",
        "Edge computing",
        "Cloud integration",
        "Equipment monitoring",
      ],
      technologies: "ESP32, Raspberry Pi, MQTT, InfluxDB, Grafana",
    },
    {
      icon: Activity,
      title: "Predictive Maintenance",
      description: "Reduce downtime, maximize efficiency",
      features: [
        "Digital twin modeling",
        "Equipment health monitoring",
        "Failure prediction (90-95% accuracy)",
        "Maintenance optimization",
        "ROI: 30-40% cost reduction",
      ],
      technologies: "ML Models, IoT Sensors, Digital Twins, Analytics",
    },
  ];

  return (
    <section
      id="capabilities"
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
            Comprehensive Expertise Across Technologies
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Six core capabilities that power your digital transformation
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {capability.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {capability.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-blue-600 mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    <span className="font-medium text-gray-700">Tech:</span>{" "}
                    {capability.technologies}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
