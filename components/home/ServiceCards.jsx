"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineOfficeBuilding,
  HiOutlineScissors,
  HiOutlineSpeakerphone,
  HiOutlineCog,
} from "react-icons/hi";

const FuturisticServiceCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: <HiOutlineOfficeBuilding className="w-8 h-8" />,
      title: "Google My Business",
      description: "Profile management & optimization for local visibility",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
      lightBgColor: "bg-blue-100",
    },
    {
      id: 2,
      icon: <HiOutlineScissors className="w-8 h-8" />,
      title: "Salon Management",
      description: "Comprehensive solutions for beauty business operations",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
      lightBgColor: "bg-purple-100",
    },
    {
      id: 3,
      icon: <HiOutlineSpeakerphone className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Strategic campaigns to boost your digital presence",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500",
      lightBgColor: "bg-pink-100",
    },
    {
      id: 4,
      icon: <HiOutlineCog className="w-8 h-8" />,
      title: "Industrial Automation",
      description: "Advanced systems for manufacturing efficiency",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-500",
      lightBgColor: "bg-cyan-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Circle decoration positions
  const circlePositions = [
    { top: "10%", left: "10%", size: "w-3 h-3", delay: 0 },
    { top: "20%", right: "15%", size: "w-5 h-5", delay: 0.1 },
    { bottom: "15%", left: "20%", size: "w-4 h-4", delay: 0.2 },
    { bottom: "30%", right: "10%", size: "w-3 h-3", delay: 0.3 },
  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-blue-100/50"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 rounded-full bg-blue-100/30"></div>
        <div className="absolute top-40 right-1/4 w-12 h-12 rounded-full bg-blue-100/40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>

          {/* Decorative circles instead of line */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-200"></div>
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-200"></div>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforming businesses with cutting-edge digital solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 min-h-[300px] flex flex-col"
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Color overlay that animates from left to right on hover */}
              <div
                className={`absolute inset-0 transition-transform duration-500 z-0 ${service.lightBgColor}`}
                style={{
                  transform:
                    hoveredCard === service.id
                      ? "translateX(0)"
                      : "translateX(-100%)",
                }}
              ></div>

              {/* Decorative circle positions */}
              {circlePositions.map((circle, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${circle.size} rounded-full ${service.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
                  style={{
                    top: circle.top,
                    left: circle.left,
                    right: circle.right,
                    bottom: circle.bottom,
                    transitionDelay: `${circle.delay}s`,
                  }}
                ></motion.div>
              ))}

              {/* Content container */}
              <div className="p-6 flex-1 flex flex-col relative z-10">
                {/* Icon in a circular container with gradient background */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-8 shadow-md mx-auto transform transition-all duration-500`}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm text-center mb-4">
                  {service.description}
                </p>

                <div className="mt-auto flex justify-center">
                  <motion.button
                    initial={{ opacity: 0.7 }}
                    whileHover={{
                      opacity: 1,
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${service.color} shadow-md`}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FuturisticServiceCards;
