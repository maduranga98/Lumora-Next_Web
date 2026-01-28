"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/animation/AnimatedSection";

const CTASection = () => {
  return (
    <section className="py-20 bg-blue-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Salon Experience?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join 500+ stylists and salon owners who have automated their admin
            work and grew their revenue with Curl Cipher.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 transition-all shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-1"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Talk to Sales
            </Link>
          </div>

          <p className="mt-6 text-sm text-blue-200/80">
            No credit card required · Cancel anytime
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
