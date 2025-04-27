"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "gmb",
      title: "GMB Profile Management",
      icon: "/icons/map-pin.svg",
      description:
        "Boost your local visibility and attract more customers with our expert Google My Business management services.",
      bgColor: "#FFF8E1",
      textColor: "#006064",
      iconBgColor: "#FF9A76",
      link: "/gmb",
    },
    {
      id: "salon",
      title: "Salon Management Solutions",
      icon: "/icons/scissors.svg",
      description:
        "Streamline your salon operations with our comprehensive management system designed specifically for beauty businesses.",
      bgColor: "#FFF8E1",
      textColor: "#006064",
      iconBgColor: "#78C091",
      link: "/salon",
    },
    {
      id: "social",
      title: "Social Media Marketing",
      icon: "/icons/message-circle.svg",
      description:
        "Grow your online presence and engage with your audience through strategic social media marketing campaigns.",
      bgColor: "#FFF8E1",
      textColor: "#006064",
      iconBgColor: "#4FB0FF",
      link: "/social-media",
    },
    {
      id: "automation",
      title: "Industrial Automation",
      icon: "/icons/settings.svg",
      description:
        "Optimize your manufacturing processes with cutting-edge automation solutions that enhance efficiency and reduce costs.",
      bgColor: "#FFF8E1",
      textColor: "#006064",
      iconBgColor: "#36B5AD",
      link: "/automation",
    },
  ];

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "#FFD180",
          padding: "80px 0 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "600px",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: "700",
                color: "#006064",
                marginBottom: "20px",
                lineHeight: 1.2,
              }}
            >
              Our Services
            </h1>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "#00665E",
                marginBottom: "30px",
                maxWidth: "500px",
                lineHeight: 1.6,
              }}
            >
              Empowering businesses with technology and strategic solutions that
              drive growth and innovation.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "40%",
            height: "80%",
            background:
              "url(/images/services-hero.svg) no-repeat center/contain",
            zIndex: 1,
          }}
        ></div>
      </section>

      {/* Services Grid */}
      <section
        style={{
          background: "#FFECB3",
          padding: "60px 0 80px",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: "700",
              color: "#006064",
              marginBottom: "50px",
              textAlign: "center",
            }}
          >
            Choose Your Solution
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {services.map((service) => (
              <Link
                href={service.link}
                key={service.id}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: service.bgColor,
                    borderRadius: "16px",
                    padding: "30px",
                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.05)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 30px rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 15px rgba(0, 0, 0, 0.05)";
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "15px",
                        background: service.iconBgColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={30}
                        height={30}
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                    </div>

                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: service.textColor,
                        marginBottom: "15px",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "1rem",
                        color: service.textColor,
                        opacity: 0.8,
                        lineHeight: 1.6,
                        marginBottom: "20px",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        color: service.textColor,
                        marginRight: "8px",
                      }}
                    >
                      Learn More
                    </span>
                    <ChevronRight size={16} color={service.textColor} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        style={{
          background: "#E65100",
          padding: "80px 0",
          color: "white",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Let's Elevate Your Business Today!
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              maxWidth: "700px",
              marginBottom: "40px",
              lineHeight: 1.6,
            }}
          >
            Contact us to start growing your digital presence and streamlining
            your operations.
          </p>

          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "#006064",
              color: "white",
              padding: "16px 36px",
              borderRadius: "50px",
              fontSize: "1rem",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 12px 25px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
            }}
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
