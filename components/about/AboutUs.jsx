"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      className="min-h-screen flex items-center py-24 bg-gradient-to-b from-blue-50 via-blue-100 to-white overflow-hidden relative"
      id="about"
    >
      {/* Larger background decorative elements */}
      <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl"></div>

      {/* Smaller decorative elements */}
      <div className="absolute top-1/4 left-1/5 w-8 h-8 rounded-full bg-blue-400/20"></div>
      <div className="absolute top-2/3 right-1/6 w-12 h-12 rounded-full bg-blue-400/20"></div>
      <div className="absolute bottom-1/3 left-1/3 w-6 h-6 rounded-full bg-blue-300/30"></div>
      <div className="absolute top-1/2 right-1/4 w-10 h-10 rounded-full bg-blue-300/20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-blue-900 mb-3">
                About Us
              </h2>
              <div className="w-20 h-1.5 bg-blue-500 rounded-full mb-8"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                At Lumora Ventures, we are passionate about empowering
                businesses to unlock their full potential in the digital age.
                Founded with a vision to deliver innovative solutions, we
                specialize in software development, industrial automation,
                digital marketing, and research-driven strategies that drive
                measurable success.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Our mission is to equip businesses with the tools, technologies,
                and strategies they need to streamline operations, enhance
                customer engagement, and drive sustainable growth.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                What sets us apart is our holistic approach to problem-solving.
                We don't just implement solutions – we partner with you to
                understand your unique challenges, goals, and vision. This
                collaborative approach ensures that our solutions are not only
                technically sound but also perfectly aligned with your business
                objectives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 space-y-4"
            >
              <h3 className="text-2xl font-semibold text-blue-800">
                Our Core Values
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  "Innovation & Creativity",
                  "Excellence & Quality",
                  "Integrity & Transparency",
                  "Client Partnership",
                ].map((value, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-colors inline-block shadow-md"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            {/* Create subtle background colors to enhance the illustration without containing it */}
            <div className="absolute inset-0 scale-150 opacity-50">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl"></div>
              <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-blue-100/40 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/3 right-1/3 w-60 h-60 bg-blue-300/20 rounded-full blur-3xl"></div>
            </div>

            {/* The illustration without any container */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/about.png"
                width={600}
                height={500}
                alt="Lumora Ventures Illustration"
                className="w-full h-auto"
                style={{ mixBlendMode: "multiply" }} // Helps blend the transparent illustration
                priority
              />
            </motion.div>

            {/* Optional floating stat cards - uncomment if needed */}
            {/* 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-lg max-w-[200px]"
            >
              <div className="font-bold text-blue-900 text-lg mb-1">
                5+ Years
              </div>
              <div className="text-gray-600 text-sm">Delivering Excellence</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-lg max-w-[200px]"
            >
              <div className="font-bold text-blue-900 text-lg mb-1">100+</div>
              <div className="text-gray-600 text-sm">Successful Projects</div>
            </motion.div>
            */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
