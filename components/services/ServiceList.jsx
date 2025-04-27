"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ icon, title, description, image, link, id }) => {
  return (
    <div
      id={id}
      style={{
        background: "white",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
        transition: "transform 0.3s, box-shadow 0.3s",
        border: "1px solid #f0f0f0",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)";
      }}
    >
      {/* Service Image */}
      <div
        style={{
          position: "relative",
          height: "200px",
          width: "100%",
        }}
      >
        <Image
          src={image || "/images/service-placeholder.jpg"}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Service Content */}
      <div
        style={{
          padding: "24px",
        }}
      >
        <div
          style={{
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f0f7ff",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            {icon}
          </div>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#111827",
            }}
          >
            {title}
          </h3>
        </div>

        <p
          style={{
            fontSize: "16px",
            color: "#4b5563",
            marginBottom: "24px",
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>

        <Link
          href={link || "#"}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#2563eb",
            textDecoration: "none",
          }}
        >
          Learn more
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
