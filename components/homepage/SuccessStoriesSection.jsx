"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle, Clock, ArrowRight } from "lucide-react";

const SuccessStoriesSection = ({ scrollToSection }) => {
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

  const caseStudies = [
    {
      category: "Software Development",
      title: "E-Commerce Platform for Fashion Retailer",
      clientType: "Retail SMB",
      challenge:
        "Local fashion retailer wanted to expand online but had no digital presence.",
      solution:
        "Built complete e-commerce platform with web and mobile apps, payment integration, inventory management, and order tracking.",
      technologies: ["React", "Flutter", "Node.js", "PostgreSQL", "Stripe"],
      results: [
        "300% increase in revenue (online channel)",
        "5,000+ monthly active users",
        "95% customer satisfaction",
        "Expanded to 3 cities",
      ],
      timeline: "12 weeks",
      investment: "Rs. 450,000",
      color: "blue",
    },
    {
      category: "AI & Computer Vision",
      title: "Quality Control System for Electronics Manufacturer",
      clientType: "Manufacturing Enterprise",
      challenge:
        "15% defect rate in production line costing $2M annually. Manual inspection slow and inconsistent.",
      solution:
        "Deployed computer vision system with custom CNN model for real-time defect detection at production line speed.",
      technologies: ["YOLOv8", "TensorFlow", "NVIDIA Jetson", "OpenCV"],
      results: [
        "Defect rate reduced to 2.3% (85% improvement)",
        "Annual savings of $1.7M",
        "99.1% detection accuracy",
        "ROI achieved in 8 months",
      ],
      timeline: "16 weeks",
      investment: "Rs. 1,200,000",
      color: "purple",
    },
    {
      category: "Industrial Automation",
      title: "Predictive Maintenance for Industrial Facility",
      clientType: "Manufacturing Plant",
      challenge:
        "$3.5M annual losses from unplanned equipment downtime. Reactive maintenance causing production delays.",
      solution:
        "Implemented digital twin-based predictive maintenance with 200+ IoT sensors and ML forecasting models.",
      technologies: [
        "IoT Sensors",
        "LSTM Neural Networks",
        "InfluxDB",
        "Grafana",
        "Digital Twins",
      ],
      results: [
        "67% reduction in unplanned downtime",
        "$2.4M annual cost savings",
        "90-95% prediction accuracy",
        "45% maintenance efficiency improvement",
      ],
      timeline: "20 weeks",
      investment: "Rs. 1,800,000",
      color: "green",
    },
    {
      category: "Mobile Application",
      title: "Fitness App for Gym Chain",
      clientType: "Fitness Centers",
      challenge:
        "Long check-in queues, manual attendance tracking, poor member engagement.",
      solution:
        "Built mobile app with face recognition check-in, workout tracking, and member engagement features.",
      technologies: ["Flutter", "Firebase", "ESP32-CAM", "Google Cloud Vision"],
      results: [
        "60% reduction in check-in time",
        "40% improvement in member retention",
        "25% increase in class bookings",
        "Deployed across 12 locations",
      ],
      timeline: "10 weeks",
      investment: "Rs. 350,000",
      color: "orange",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200 hover:border-blue-400",
        badge: "bg-blue-100 text-blue-700",
        icon: "text-blue-600",
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200 hover:border-purple-400",
        badge: "bg-purple-100 text-purple-700",
        icon: "text-purple-600",
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200 hover:border-green-400",
        badge: "bg-green-100 text-green-700",
        icon: "text-green-600",
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200 hover:border-orange-400",
        badge: "bg-orange-100 text-orange-700",
        icon: "text-orange-600",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="success"
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
            Real Projects, Real Results
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            How we&apos;ve helped businesses transform
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => {
            const colors = getColorClasses(study.color);
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 ${colors.border} hover:shadow-2xl transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150 + 200}ms` }}
              >
                {/* Header */}
                <div className={`${colors.bg} p-6`}>
                  <span
                    className={`inline-block ${colors.badge} px-3 py-1 rounded-full text-xs font-medium mb-3`}
                  >
                    {study.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Client: {study.clientType}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Challenge */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Challenge
                    </h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle
                            className={`w-4 h-4 ${colors.icon} flex-shrink-0 mt-0.5`}
                          />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {study.timeline}
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        {study.investment}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 ${
            isVisible ? "animate-fade-in-up animate-delay-600" : "opacity-0"
          }`}
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="group inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Success Story
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
