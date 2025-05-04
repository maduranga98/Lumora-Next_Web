"use client";

import { useState } from "react";
import Link from "next/link";

const ServiceCard = ({
  title,
  description,
  benefits = [],
  icon,
  color = "indigo",
  comingSoon = false,
  linkUrl = "/services",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define color classes based on the color prop
  const colorClasses = {
    indigo: {
      light: "bg-indigo-50",
      medium: "bg-indigo-100",
      text: "text-indigo-600",
      border: "border-indigo-200",
      hover: "group-hover:bg-indigo-600 group-hover:text-white",
      iconBg: "bg-indigo-500",
    },
    teal: {
      light: "bg-teal-50",
      medium: "bg-teal-100",
      text: "text-teal-600",
      border: "border-teal-200",
      hover: "group-hover:bg-teal-600 group-hover:text-white",
      iconBg: "bg-teal-500",
    },
    purple: {
      light: "bg-purple-50",
      medium: "bg-purple-100",
      text: "text-purple-600",
      border: "border-purple-200",
      hover: "group-hover:bg-purple-600 group-hover:text-white",
      iconBg: "bg-purple-500",
    },
    gray: {
      light: "bg-gray-50",
      medium: "bg-gray-100",
      text: "text-gray-600",
      border: "border-gray-200",
      hover: "group-hover:bg-gray-600 group-hover:text-white",
      iconBg: "bg-gray-500",
    },
  };

  const colors = colorClasses[color] || colorClasses.indigo;

  return (
    <div
      className={`rounded-xl border ${
        colors.border
      } overflow-hidden transition-all duration-300 transform ${
        isHovered ? "scale-[1.02] shadow-lg" : "shadow"
      } group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`p-6 ${colors.light} transition-colors duration-300 group-hover:${colors.medium}`}
      >
        {/* Card Header with Icon */}
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-3 rounded-lg ${colors.iconBg} text-white`}>
            {icon}
          </div>

          <h3
            className={`text-xl font-bold ${colors.text} transition-colors duration-300 ${colors.hover}`}
          >
            {title}
            {comingSoon && (
              <span className="ml-2 text-xs font-medium px-2 py-1 bg-gray-200 text-gray-700 rounded-full uppercase">
                Coming Soon
              </span>
            )}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6">{description}</p>

        {/* Benefits List */}
        {benefits.length > 0 && (
          <ul className="space-y-2 mb-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`w-5 h-5 mt-0.5 ${colors.text} transition-colors duration-300 ${colors.hover}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Learn More Link */}
        {!comingSoon && (
          <Link
            href={linkUrl}
            className={`inline-flex items-center gap-1 font-medium ${colors.text} transition-colors duration-300 ${colors.hover} hover:underline mt-2`}
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
