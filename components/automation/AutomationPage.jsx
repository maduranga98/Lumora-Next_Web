"use client";

import Link from "next/link";
import { Settings, Activity, Server, BarChart2 } from "lucide-react";

const AutomationPage = () => {
  return (
    <div className="bg-[#050e1a] text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Empowering Businesses with Technology & Strategy
              </h1>
              <p className="text-lg text-blue-100 opacity-80 mb-6 max-w-lg">
                Expert services in Google Business Management, Salon Solutions,
                Marketing & Automation.
              </p>
              <Link
                href="#contact"
                className="inline-block bg-transparent border-2 border-blue-400 text-blue-400 py-3 px-8 rounded-full font-semibold transition-all hover:bg-blue-400/10"
              >
                Get Started
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="flex justify-center items-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0a192f] p-4 rounded-lg border border-blue-400/30">
                    <BarChart2 size={48} className="text-blue-400 mb-2" />
                  </div>
                  <div className="bg-[#0a192f] p-4 rounded-lg border border-blue-400/30">
                    <div className="h-16 w-full bg-[#0a192f] overflow-hidden rounded">
                      <div className="w-full h-full flex items-end">
                        <div className="h-1/3 w-1/5 bg-blue-400 mx-0.5"></div>
                        <div className="h-1/2 w-1/5 bg-blue-400 mx-0.5"></div>
                        <div className="h-2/3 w-1/5 bg-blue-400 mx-0.5"></div>
                        <div className="h-4/5 w-1/5 bg-blue-400 mx-0.5"></div>
                        <div className="h-full w-1/5 bg-blue-400 mx-0.5"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#0a192f] p-4 rounded-lg border border-blue-400/30">
                    <div className="h-16 w-full bg-[#0a192f] flex items-center justify-center">
                      <div className="w-3/4 h-0.5 bg-blue-400/50"></div>
                    </div>
                  </div>
                  <div className="bg-[#0a192f] p-4 rounded-lg border border-blue-400/30">
                    <Settings size={48} className="text-blue-400 mb-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 border-t border-blue-900/30">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "GMB Profile Management",
                description: "Innovative management & technical services.",
                icon: <Server size={32} className="text-blue-400" />,
              },
              {
                title: "Salon Management Solutions",
                description:
                  "Comprehensive salon management systems and tools.",
                icon: <Settings size={32} className="text-blue-400" />,
              },
              {
                title: "Social Media Marketing",
                description:
                  "Social media strategy and content creation services.",
                icon: <Activity size={32} className="text-blue-400" />,
              },
              {
                title: "Industrial Automation",
                description:
                  "Industrial automation and digital transformation.",
                icon: <BarChart2 size={32} className="text-blue-400" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#0a192f] border border-blue-900/50 rounded-lg p-6 transition-all hover:border-blue-400/50 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">
                    {service.title}
                  </h3>
                  <p className="text-blue-100/70 text-sm">
                    {service.description}
                  </p>
                  <Link
                    href="#"
                    className="mt-4 text-blue-400 text-sm hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 border-t border-blue-900/30">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/5 mb-10 md:mb-0">
              <div className="bg-[#0a192f] border border-blue-900/50 rounded-lg overflow-hidden">
                <div className="aspect-w-4 aspect-h-5 relative">
                  <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-transparent absolute"></div>
                  <img
                    src="/api/placeholder/400/500"
                    alt="About Lumora Ventures"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-3/5 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">
                About Lumorra Ventures
              </h2>
              <p className="text-blue-100/80 mb-4">
                Leveraging cutting-edge innovative technologies to deliver
                comprehensive automation solutions.
              </p>
              <p className="text-blue-100/80 mb-6">
                Lumorra Ventures leverages innovative technological solutions.
                Our passion for technology enables us to deliver diverse
                innovative solutions tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-blue-900/30">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                Let's Elevate Your Business Today!
              </h2>
              <p className="text-blue-100/80 mb-6">
                Contact us to start growing your digital presence and
                operations.
              </p>
            </div>

            <div className="md:w-2/5">
              <div className="bg-[#0a192f] border border-blue-900/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-3 bg-[#071527] border border-blue-900/50 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 bg-[#071527] border border-blue-900/50 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows="3"
                      className="w-full p-3 bg-[#071527] border border-blue-900/50 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomationPage;
