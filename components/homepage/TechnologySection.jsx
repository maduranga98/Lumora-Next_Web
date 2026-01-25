"use client";

import { useState, useEffect, useRef } from "react";
import { Lightbulb, Code, Cpu, Cloud, Database } from "lucide-react";

const TechnologySection = () => {
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

  const rdStats = [
    { number: "15+", label: "Active Research Projects" },
    { number: "30+", label: "Open Source Contributions" },
    { number: "500K+", label: "Lines of Code" },
    { number: "50+", label: "ML Models Deployed" },
  ];

  const techStack = [
    {
      category: "Software Development",
      icon: Code,
      technologies: [
        "React",
        "Next.js",
        "Flutter",
        "React Native",
        "Node.js",
        "Python",
        "TypeScript",
      ],
      color: "blue",
    },
    {
      category: "AI & Machine Learning",
      icon: Lightbulb,
      technologies: [
        "TensorFlow",
        "PyTorch",
        "OpenCV",
        "YOLO",
        "Scikit-learn",
        "XGBoost",
        "Keras",
      ],
      color: "purple",
    },
    {
      category: "Industrial & IoT",
      icon: Cpu,
      technologies: [
        "ESP32",
        "Raspberry Pi",
        "MQTT",
        "OPC UA",
        "Node-RED",
        "InfluxDB",
        "Modbus",
      ],
      color: "green",
    },
    {
      category: "Cloud & Infrastructure",
      icon: Cloud,
      technologies: [
        "AWS",
        "Google Cloud",
        "Azure",
        "Docker",
        "Kubernetes",
        "Firebase",
        "Vercel",
      ],
      color: "orange",
    },
    {
      category: "Data & Analytics",
      icon: Database,
      technologies: [
        "PostgreSQL",
        "MongoDB",
        "Elasticsearch",
        "Apache Spark",
        "Grafana",
        "Power BI",
        "Redis",
      ],
      color: "cyan",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        badge: "bg-blue-100 text-blue-700",
      },
      purple: {
        bg: "bg-purple-50",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        badge: "bg-purple-100 text-purple-700",
      },
      green: {
        bg: "bg-green-50",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        badge: "bg-green-100 text-green-700",
      },
      orange: {
        bg: "bg-orange-50",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
        badge: "bg-orange-100 text-orange-700",
      },
      cyan: {
        bg: "bg-cyan-50",
        iconBg: "bg-cyan-100",
        iconColor: "text-cyan-600",
        badge: "bg-cyan-100 text-cyan-700",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="py-20 md:py-24 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Innovation Meets Implementation
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Our R&D capabilities and technology stack
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - R&D Focus */}
          <div
            className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Research & Development</h3>
              </div>

              <p className="text-blue-100 mb-8 leading-relaxed">
                We invest heavily in R&D to stay at the cutting edge of
                technology. Our research teams continuously explore new
                frontiers in:
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "Computer vision algorithms",
                  "ML model optimization",
                  "Industrial IoT protocols",
                  "Edge AI deployment",
                  "Real-time analytics",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-300 rounded-full" />
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>

              {/* R&D Stats */}
              <div className="grid grid-cols-2 gap-4">
                {rdStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Technology Stack */}
          <div
            className={`space-y-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "400ms" }}
          >
            {techStack.map((stack, index) => {
              const IconComponent = stack.icon;
              const colors = getColorClasses(stack.color);
              return (
                <div
                  key={index}
                  className={`${colors.bg} rounded-xl p-5 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 ${colors.iconBg} rounded-lg flex items-center justify-center`}
                    >
                      <IconComponent
                        className={`w-5 h-5 ${colors.iconColor}`}
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      {stack.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 ${colors.badge} rounded-full text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
