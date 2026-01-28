"use client";

import { Smartphone, Star, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/animation/AnimatedSection";

const MobileAppsSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            The Full Ecosystem in Your Pocket
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay connected whether you are behind the chair or on the go. We
            have dedicated apps for both you and your clients.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Management App Card */}
          <AnimatedSection variant="slideLeft" className="flex flex-col h-full">
            <div className="relative overflow-hidden rounded-3xl bg-blue-900 text-white p-8 pb-0 h-full flex flex-col justify-between shadow-xl shadow-blue-900/20 group hover:shadow-2xl transition-all duration-300">
              <div className="relative z-10 mb-8">
                <div className="inline-flex items-center gap-2 bg-blue-800/50 rounded-full px-3 py-1 text-xs font-semibold text-blue-200 mb-6 border border-blue-700">
                  <Smartphone className="w-3 h-3" />
                  For Business Owners & Staff
                </div>

                <h3 className="text-2xl font-bold mb-2">Curl Cipher Manage</h3>
                <p className="text-blue-200 mb-6 leading-relaxed">
                  Manage appointments, track inventory, and handle checkout
                  directly from your phone or tablet.
                </p>

                <Link
                  href="https://play.google.com/store/apps/details?id=com.curl_cipher_manage.saloon_app"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-white text-blue-900 hover:bg-gray-50 font-bold py-3 px-6 rounded-xl transition-all active:scale-95"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <span>Download App</span>
                </Link>
              </div>

              {/* Management Dashboard Screenshot */}
              <div className="relative z-10 mt-auto flex justify-center translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                <div className="relative w-full aspect-[16/10] rounded-t-xl overflow-hidden shadow-2xl border-t-8 border-x-8 border-gray-800 bg-gray-900">
                  <Image
                    src="/cc-images/image1.webp"
                    alt="Curl Cipher Management Dashboard"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Customer App Card */}
          <AnimatedSection
            variant="slideRight"
            delay={0.1}
            className="flex flex-col h-full"
          >
            <div className="relative overflow-hidden rounded-3xl bg-cyan-500 text-white p-8 pb-0 h-full flex flex-col justify-between shadow-xl shadow-cyan-500/20 group hover:shadow-2xl transition-all duration-300">
              <div className="relative z-10 mb-8">
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white mb-6 border border-white/30">
                  <Smartphone className="w-3 h-3" />
                  For Your Clients
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  Curl Cipher Customer
                </h3>
                <p className="text-cyan-50 mb-6 leading-relaxed">
                  Give your clients a premium booking experience they will love.
                </p>

                <Link
                  href="https://play.google.com/store/apps/details?id=com.curl_cipher.customer_app"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-white text-cyan-700 hover:bg-gray-50 font-bold py-3 px-6 rounded-xl transition-all active:scale-95"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <span>Download for Clients</span>
                </Link>
              </div>

              {/* Customer App Visual */}
              <div className="relative z-10 mt-auto flex justify-center translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                <div className="relative w-48 h-64 sm:w-64 sm:h-80 lg:w-72 lg:h-96 rounded-t-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/curl cipher/app-customer-premium.avif"
                    alt="Customer App Interface"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default MobileAppsSection;
