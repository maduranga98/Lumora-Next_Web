"use client";

import { useState, useEffect, useRef } from "react";
import {
  Target,
  Microscope,
  Handshake,
  MessageSquare,
  Sprout,
  CheckCircle,
  Users,
  Code,
  Cpu,
  Palette,
} from "lucide-react";

const AboutSection = () => {
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

  const companyStats = [
    { number: "2020", label: "Founded" },
    { number: "250+", label: "Projects Delivered" },
    { number: "25+", label: "Team Members" },
    { number: "50+", label: "Countries Served" },
  ];

  const approach = [
    { step: "1", title: "Understand", desc: "Deep dive into your needs" },
    { step: "2", title: "Design", desc: "Architecture & UX planning" },
    { step: "3", title: "Develop", desc: "Agile 2-week sprints" },
    { step: "4", title: "Deploy", desc: "Smooth launch & training" },
    { step: "5", title: "Support", desc: "Ongoing maintenance" },
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Quality Over Quantity",
      desc: "Every project gets our full attention",
    },
    {
      icon: Microscope,
      title: "Innovation Through Research",
      desc: "R&D investment keeps us ahead",
    },
    {
      icon: Handshake,
      title: "Client Success Focus",
      desc: "Your success is our success",
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      desc: "No surprises, full visibility",
    },
    {
      icon: Sprout,
      title: "Long-Term Partnerships",
      desc: "We grow with your business",
    },
  ];

  const teamExpertise = [
    { icon: Code, label: "Full-stack developers" },
    { icon: Users, label: "Mobile app specialists" },
    { icon: Cpu, label: "AI/ML engineers" },
    { icon: Palette, label: "UI/UX designers" },
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "Microsoft Technology Partner",
    "Google Cloud Partner",
    "AWS Technology Partner",
  ];

  return (
    <section
      id="about"
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
            Technology Experts You Can Trust
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate team delivering excellence since 2020
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Company Story */}
          <div
            className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            {/* Story */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lumora Ventures started with a simple vision: provide complete
                technology solutions with uncompromising quality. Today,
                we&apos;re a full-service technology company delivering
                everything from mobile apps to advanced AI systems.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>What We Do:</strong> We build software, mobile
                applications, and intelligent automation systems. Whether you
                need a simple website or a complex computer vision system, we
                have the expertise to deliver.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Our Mission:</strong> Bridge the gap between
                cutting-edge technology and real-world business needs. We
                don&apos;t just build technology - we solve problems and create
                value.
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {companyStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-blue-50 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Certifications & Partnerships
              </h4>
              <div className="space-y-2">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Team & Approach */}
          <div
            className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "400ms" }}
          >
            {/* Team Expertise */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Team</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {teamExpertise.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-700">{item.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="text-sm text-gray-600">
                <p>
                  <strong>Additional experts:</strong> Computer vision
                  specialists, Industrial automation engineers, IoT specialists,
                  Data scientists, Project managers
                </p>
              </div>
            </div>

            {/* Our Approach */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Approach
              </h3>
              <div className="flex flex-wrap gap-2">
                {approach.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2"
                  >
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {item.step}
                    </span>
                    <div>
                      <span className="text-sm font-medium text-gray-900">
                        {item.title}
                      </span>
                      <span className="text-xs text-gray-500 ml-1">
                        - {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Core Values
              </h3>
              <div className="space-y-3">
                {coreValues.map((value, idx) => {
                  const IconComponent = value.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-white border border-gray-100 rounded-lg hover:border-blue-200 transition-colors"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">
                          {value.title}
                        </h4>
                        <p className="text-xs text-gray-500">{value.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
