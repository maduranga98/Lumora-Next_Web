"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const ServiceCard = ({
  id,
  icon: Icon,
  title,
  description,
  details,
  benefits = [],
  cta = "Learn more",
  comingSoon = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Generate link path based on id
  const getPath = () => {
    if (id === "gmb") return "/gmb";
    if (id === "salon") return "/salon";
    if (id === "automation") return "/automation";
    if (id === "social") return "/social";
    return "#";
  };

  return (
    <div
      id={id}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
    >
      {/* Header with gradient background */}
      <div className="relative h-36 w-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        {/* Coming Soon Badge */}
        {comingSoon && (
          <div className="absolute top-4 right-4 bg-white text-purple-600 px-3 py-1 rounded-full text-xs font-semibold">
            Coming Soon
          </div>
        )}

        {/* Icon in white container */}
        <div className="bg-white rounded-xl p-4 w-16 h-16 flex items-center justify-center shadow-md">
          {Icon && <Icon size={24} className="text-blue-600" />}
        </div>
      </div>

      {/* Service Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
          {title}
        </h3>

        <p className="text-base text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Toggle Details */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 font-medium mb-4 flex items-center mx-auto"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-2 space-y-4">
            {details && (
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  Details
                </h4>
                <p className="text-gray-600">{details}</p>
              </div>
            )}

            {benefits.length > 0 && (
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  Benefits
                </h4>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check
                        size={18}
                        className="text-green-500 mr-2 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <Link
          href={getPath()}
          className="w-full mt-5 flex items-center justify-center gap-1 text-white bg-blue-600 hover:bg-blue-700 py-2.5 px-4 rounded-lg font-medium transition-colors"
        >
          {cta}
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
