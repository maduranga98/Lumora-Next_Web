"use client";

import { Smartphone, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Assuming you might add phone screenshots later
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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Management App Card */}
          <AnimatedSection variant="slideLeft" className="flex flex-col h-full">
            <div className="relative overflow-hidden rounded-3xl bg-blue-900 text-white p-8 h-full flex flex-col justify-between shadow-xl shadow-blue-900/20 group hover:shadow-2xl transition-all duration-300">
              {/* Decorative Circle */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-blue-800/50 rounded-full px-3 py-1 text-xs font-semibold text-blue-200 mb-6 border border-blue-700">
                  <Smartphone className="w-3 h-3" />
                  For Business Owners & Staff
                </div>

                <h3 className="text-2xl font-bold mb-2">Curl Cipher Manage</h3>
                <p className="text-blue-200 mb-8 leading-relaxed">
                  Manage appointments, track inventory, and handle checkout
                  directly from your phone.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-blue-100">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>Real-time booking notifications</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-blue-100">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>Mobile POS & Payments</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-blue-100">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>Staff performance dashboard</span>
                  </li>
                </ul>
              </div>

              <div className="relative z-10 pt-4">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.curl_cipher_manage.saloon_app"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-3 w-full bg-white text-blue-900 hover:bg-gray-50 font-bold py-4 rounded-xl transition-all active:scale-95"
                >
                  {/* Google Play Icon SVG */}
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <span>Download for Business</span>
                </Link>
                <div className="flex items-center justify-center gap-1 mt-3">
                  <div className="flex text-yellow-400">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                  <span className="text-xs text-blue-300">
                    Available on Android
                  </span>
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
            <div className="relative overflow-hidden rounded-3xl bg-cyan-500 text-white p-8 h-full flex flex-col justify-between shadow-xl shadow-cyan-500/20 group hover:shadow-2xl transition-all duration-300">
              {/* Decorative Circle */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white mb-6 border border-white/30">
                  <Smartphone className="w-3 h-3" />
                  For Your Clients
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  Curl Cipher Customer
                </h3>
                <p className="text-cyan-50 mb-8 leading-relaxed">
                  Give your clients a premium booking experience they will love.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-blue-900 shrink-0" />
                    <span>24/7 Online Booking</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-blue-900 shrink-0" />
                    <span>Appointment History & Rebooking</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-blue-900 shrink-0" />
                    <span>Loyalty Points Tracking</span>
                  </li>
                </ul>
              </div>

              <div className="relative z-10 pt-4">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.curl_cipher.customer_app"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-3 w-full bg-white text-cyan-700 hover:bg-gray-50 font-bold py-4 rounded-xl transition-all active:scale-95"
                >
                  {/* Google Play Icon SVG */}
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <span>Download for Clients</span>
                </Link>
                <div className="flex items-center justify-center gap-1 mt-3">
                  <div className="flex text-yellow-300">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                  <span className="text-xs text-cyan-50">
                    Available on Android
                  </span>
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
