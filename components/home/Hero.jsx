"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Star,
  Cog,
  MessageSquare,
  Facebook,
} from "lucide-react";
import ParticleAnimation from "@/components/animation/ParticleAnimation";

const Hero = () => {
  const services = [
    {
      icon: <Building2 size={20} style={{ color: "white" }} />,
      title: "Google My Business",
      description: "Profile management & optimization",
    },
    {
      icon: (
        <Image
          src="/app-logo.png"
          width={20}
          height={20}
          alt="App Logo"
          style={{ objectFit: "contain" }}
        />
      ),
      title: "Salon Management",
      description: "Complete business system",
    },
    {
      icon: <Cog size={20} style={{ color: "white" }} />,
      title: "Industrial Automation",
      description: "Smart manufacturing solutions",
    },
    {
      icon: <Facebook size={20} style={{ color: "white" }} />,
      title: "Social Media Marketing",
      description: "Grow your online presence",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #0f172a, #1e1b4b)",
      }}
    >
      {/* Particle Animation */}
      <ParticleAnimation />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 20px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: "bold",
            marginBottom: "30px",
            background: "linear-gradient(to right, #c084fc, #60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            maxWidth: "1000px",
            lineHeight: 1.1,
          }}
        >
          Innovative Solutions for Modern Businesses
        </h1>

        <p
          style={{
            fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
            maxWidth: "900px",
            marginBottom: "60px",
            opacity: 0.9,
            lineHeight: 1.6,
          }}
        >
          We help businesses transform their digital presence with cutting-edge
          technology and beautiful design.
        </p>

        {/* Service Capsules */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            maxWidth: "1000px",
            marginBottom: "60px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="service-capsule"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "rgba(30, 64, 175, 0.3)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(99, 102, 241, 0.3)",
                borderRadius: "50px",
                padding: "12px 20px",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const description = e.currentTarget.querySelector(
                  ".service-description"
                );
                if (description) {
                  description.style.opacity = "1";
                  description.style.transform = "translateY(0)";
                }
                const icon = e.currentTarget.querySelector(".service-icon");
                if (icon) {
                  icon.style.transform = "scale(1.2)";
                }
              }}
              onMouseLeave={(e) => {
                const description = e.currentTarget.querySelector(
                  ".service-description"
                );
                if (description) {
                  description.style.opacity = "0";
                  description.style.transform = "translateY(10px)";
                }
                const icon = e.currentTarget.querySelector(".service-icon");
                if (icon) {
                  icon.style.transform = "scale(1)";
                }
              }}
            >
              <div
                className="service-icon"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(79, 70, 229, 0.8)",
                  borderRadius: "50%",
                  padding: "8px",
                  transition: "transform 0.3s ease",
                }}
              >
                {service.icon}
              </div>
              <div style={{ textAlign: "left" }}>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    marginBottom: "2px",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="service-description"
                  style={{
                    fontSize: "0.8rem",
                    opacity: "0",
                    transform: "translateY(10px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          <Link
            href="#services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "linear-gradient(to right, #6366f1, #4f46e5)",
              color: "white",
              padding: "12px 24px",
              borderRadius: "6px",
              fontWeight: "500",
              transition: "all 0.3s ease",
            }}
          >
            Explore Services
            <ArrowRight size={18} />
          </Link>

          <Link
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              color: "white",
              padding: "12px 24px",
              borderRadius: "6px",
              fontWeight: "500",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              transition: "all 0.3s ease",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
