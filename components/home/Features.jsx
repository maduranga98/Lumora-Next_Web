"use client";

import { Settings, Star, MessageSquare, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Features = () => {
  const services = [
    {
      icon: <Building2 size={48} style={{ color: "white" }} />,
      title: "Google My Business Profile Management",
      description:
        "Boost your local presence with our comprehensive Google My Business management services. We optimize your profile, manage reviews, post regular updates, and ensure your business information is accurate and visible to potential customers.",
      features: [
        "Profile optimization for higher rankings",
        "Review management and response",
        "Regular posting and content creation",
        "Performance analytics and reporting",
      ],
      gradient: "linear-gradient(135deg, #3B82F6, #60A5FA)",
      link: "/gmb",
    },
    {
      icon: (
        <Image
          src="/app-logo.png"
          width={48}
          height={48}
          alt="Salon App Logo"
          style={{ objectFit: "contain" }}
        />
      ),
      title: "Salon Management System",
      description:
        "Our all-in-one salon management system streamlines your operations, from appointment booking to inventory management. Designed specifically for the beauty industry, our solution helps you manage appointments, staff, clients, and inventory efficiently.",
      features: [
        "Online appointment scheduling",
        "Customer relationship management",
        "Staff scheduling and management",
        "Inventory tracking and POS integration",
      ],
      gradient: "linear-gradient(135deg, #8B5CF6, #C084FC)",
      link: "/salon",
    },
    {
      icon: <Settings size={48} style={{ color: "white" }} />,
      title: "Industrial Automation",
      description:
        "Transform your manufacturing processes with our industrial automation solutions. We design and implement custom automation systems that improve efficiency, reduce costs, and enhance product quality through advanced technology and integration.",
      features: [
        "Process automation solutions",
        "IoT device integration",
        "Custom control systems",
        "Real-time monitoring and analytics",
      ],
      gradient: "linear-gradient(135deg, #EC4899, #F472B6)",
      link: "/automation",
    },
    {
      icon: <MessageSquare size={48} style={{ color: "white" }} />,
      title: "Social Media Marketing",
      description:
        "Elevate your brand's online presence with our strategic social media marketing services. We develop tailored strategies across multiple platforms to increase engagement, build brand awareness, and drive conversions for your business.",
      features: [
        "Strategy development and platform selection",
        "Content creation and curation",
        "Community management and engagement",
        "Performance tracking and ROI measurement",
      ],
      gradient: "linear-gradient(135deg, #06B6D4, #67E8F9)",
      link: "/social-media",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 0",
        background: "linear-gradient(to bottom, #0f172a, #1e1b4b)",
        color: "white",
      }}
      id="services"
    >
      <div className="container">
        {/* Section header */}
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "16px",
              background: "linear-gradient(to right, #3B82F6, #60A5FA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Specialized Services
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight: 1.6,
            }}
          >
            We offer a range of tailored solutions to help your business thrive
            in today's competitive digital landscape. From local presence to
            operational efficiency, we've got you covered.
          </p>
        </div>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "30px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "16px",
                padding: "30px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 30px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0, 0, 0, 0.2)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "24px",
                  gap: "20px",
                }}
              >
                <div
                  className="icon-container"
                  style={{
                    padding: "16px",
                    background: service.gradient,
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.3s ease",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  {service.title}
                </h3>
              </div>

              <p
                style={{
                  fontSize: "16px",
                  color: "rgba(255, 255, 255, 0.8)",
                  marginBottom: "24px",
                  lineHeight: 1.6,
                }}
              >
                {service.description}
              </p>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  padding: "20px",
                  marginTop: "auto",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    background: service.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "12px",
                  }}
                >
                  Key Features
                </p>
                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "8px",
                        fontSize: "15px",
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: service.gradient,
                          display: "inline-block",
                        }}
                      ></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={service.link}
                style={{
                  display: "inline-block",
                  marginTop: "24px",
                  padding: "12px 24px",
                  background: service.gradient,
                  color: "white",
                  borderRadius: "30px",
                  textAlign: "center",
                  fontWeight: "500",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0, 0, 0, 0.2)";
                }}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div
          style={{
            marginTop: "64px",
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.1))",
            borderRadius: "20px",
            padding: "40px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "20px",
              background: "linear-gradient(to right, #3B82F6, #60A5FA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ready to transform your business?
          </h3>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: "30px",
              maxWidth: "700px",
              margin: "0 auto 30px",
            }}
          >
            Partner with Lumora Ventures and turn your challenges into
            opportunities with our cutting-edge solutions.
          </p>
          <Link
            href="#contact"
            style={{
              display: "inline-block",
              padding: "14px 30px",
              background: "linear-gradient(to right, #3B82F6, #60A5FA)",
              color: "white",
              borderRadius: "30px",
              fontWeight: "600",
              textDecoration: "none",
              boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 15px 25px rgba(59, 130, 246, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(59, 130, 246, 0.3)";
            }}
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
