"use client";

import React from "react";
import Head from "next/head";
import { Check, Crown, Star, Diamond, Shield, Sparkles } from "lucide-react";
import { IoLogoAndroid } from "react-icons/io5";

const PricingSection = () => {
  const plans = [
    {
      id: "basic",
      name: "Basic Salon Plan",
      subtitle: "Perfect for emerging salon businesses",
      price: 150,
      duration: "month",
      icon: <Star className="w-6 h-6 text-blue-300" aria-hidden="true" />,
      gradient: "from-blue-900 via-indigo-900 to-blue-900",
      borderColor: "border-blue-400/30",
      accentColor: "text-blue-300",
      buttonGradient: "from-blue-500 to-indigo-500",
      features: [
        "No initial setup fee for salon management software",
        "Unlimited stylist and staff accounts",
        "Unlimited salon appointment scheduling",
        "Complete salon business management tools",
        "Salon website booking integration",
        "Customer feedback and review system",
        "5 salon promotional post designs per month",
        "24/7 Live chat & email support for salon owners",
      ],
    },
    {
      id: "premium",
      name: "Premium Salon Package",
      subtitle: "Ideal for growing salon businesses",
      price: 250,
      duration: "month",
      icon: <Crown className="w-6 h-6 text-blue-200" aria-hidden="true" />,
      gradient: "from-blue-800 via-blue-900 to-indigo-900",
      borderColor: "border-blue-300/40",
      accentColor: "text-blue-200",
      buttonGradient: "from-blue-400 to-blue-500",
      isPopular: true,
      features: [
        "All Essential Salon Plan features included",
        "Unlimited beauty product listings and catalogs",
        "7 premium salon promotional post designs monthly",
        "5 salon product marketing designs per month",
        "Complete salon inventory management system",
        "Advanced salon point of sale (POS) system",
        "Staff scheduling and attendance tracking",
        "Enhanced Google analytics for salon performance",
      ],
    },
    {
      id: "luxury",
      name: "Luxury Salon Management",
      subtitle: "Ultimate salon business sophistication",
      price: 300,
      duration: "month",
      setupFee: 1500,
      icon: <Diamond className="w-6 h-6 text-blue-100" aria-hidden="true" />,
      gradient: "from-blue-700 via-indigo-800 to-blue-900",
      borderColor: "border-blue-200/50",
      accentColor: "text-blue-100",
      buttonGradient: "from-blue-300 to-blue-400",
      features: [
        "All Professional Salon Plan features included",
        "4 branded mobile apps for your salon business",
        "10 luxury salon promotional & product designs monthly",
        "Advanced salon analytics & business reports",
        "Comprehensive salon payroll management",
        "Detailed staff performance & sales reports",
        "Real-time technical support and bug resolution",
        "Proactive system maintenance and updates",
      ],
    },
  ];

  const keyFeatures = [
    {
      icon: <Sparkles className="w-5 h-5 text-yellow-300" aria-hidden="true" />,
      title: "Essential Salon Management Suite",
      description:
        "Comprehensive salon tools streamlining operations, appointment scheduling, and business management for beauty professionals.",
    },
    {
      icon: <Shield className="w-5 h-5 text-yellow-300" aria-hidden="true" />,
      title: "Premium Salon Support",
      description:
        "24/7 live chat, email, and phone support through dedicated channels for salon owners and managers.",
    },
    {
      icon: <Star className="w-5 h-5 text-yellow-300" aria-hidden="true" />,
      title: "Salon Business Scalability",
      description:
        "Unlimited salon locations, staff accounts, and client profiles as your beauty business grows.",
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>
          Curl Cipher Pricing | Salon Management Software Plans & Costs
        </title>
        <meta
          name="description"
          content="Compare Curl Cipher salon management software pricing plans. Choose from Basic ($150/mo), Premium ($250/mo), and Luxury ($300/mo) packages for salons of all sizes."
        />
        <meta
          name="keywords"
          content="salon management software pricing, salon booking app cost, salon business software plans, beauty salon management system price, salon software subscription"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Curl Cipher Salon Management Software Pricing"
        />
        <meta
          property="og:description"
          content="Find the perfect salon management software plan for your beauty business. Curl Cipher offers scalable plans starting from $150/month with no setup fees."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.lumoraventures.com/curl-cipher/pricing"
        />
      </Head>

      {/* Schema Markup for Pricing */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: "Curl Cipher Salon Management Software",
          description:
            "Comprehensive salon management software with dual apps for salon owners and clients.",
          offers: [
            {
              "@type": "Offer",
              name: "Basic Salon Plan",
              price: "150",
              priceCurrency: "USD",
              priceValidUntil: "2025-12-31",
              availability: "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              name: "Premium Salon Package",
              price: "250",
              priceCurrency: "USD",
              priceValidUntil: "2025-12-31",
              availability: "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              name: "Luxury Salon Management",
              price: "300",
              priceCurrency: "USD",
              priceValidUntil: "2025-12-31",
              availability: "https://schema.org/InStock",
            },
          ],
        })}
      </script>

      <section
        className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-black via-indigo-950 to-black"
        id="curl-cipher-pricing"
      >
        {/* Hidden H1 for SEO */}
        <h1 className="sr-only">
          Curl Cipher Salon Management Software Pricing Plans
        </h1>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 md:w-[600px] lg:w-[800px] h-96 md:h-[600px] lg:h-[800px] bg-blue-500 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 md:w-[500px] lg:w-[700px] h-96 md:h-[500px] lg:h-[700px] bg-indigo-500 rounded-full blur-[130px] transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-light text-white mb-4 md:mb-6">
              Salon Management Software Pricing
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              Choose the perfect salon management plan to elevate your beauty
              business to unprecedented heights with Curl Cipher's comprehensive
              solutions
            </p>
          </header>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mb-16 md:mb-20 lg:mb-24">
            {plans.map((plan, index) => (
              <article
                key={plan.id}
                className={`relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
                  plan.isPopular ? "lg:scale-105 z-10" : "hover:scale-105"
                }`}
                itemScope
                itemType="https://schema.org/PriceSpecification"
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-400 to-indigo-400 text-black px-4 md:px-6 py-1 rounded-bl-lg md:rounded-bl-xl text-xs md:text-sm font-medium">
                    MOST POPULAR
                  </div>
                )}

                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-90`}
                ></div>

                {/* Border Effect */}
                <div
                  className={`absolute inset-0 border ${plan.borderColor} rounded-xl md:rounded-2xl`}
                ></div>

                {/* Content */}
                <div className="relative p-5 md:p-6 lg:p-8 z-10">
                  {/* Plan Header */}
                  <div className="mb-5 md:mb-6 lg:mb-8">
                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                      <div
                        className={`p-2 md:p-2.5 rounded-lg bg-black/30 border ${plan.borderColor}`}
                      >
                        {plan.icon}
                      </div>
                      <div>
                        <h3
                          className={`text-lg md:text-xl lg:text-xl font-serif ${plan.accentColor}`}
                          itemProp="name"
                        >
                          {plan.name}
                        </h3>
                        <p className="text-gray-400 text-xs md:text-sm">
                          {plan.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4 md:mb-5 lg:mb-6">
                      <div className="flex items-baseline gap-2">
                        <span
                          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
                          itemProp="price"
                        >
                          ${plan.price}
                        </span>
                        <span
                          className="text-gray-400 text-sm"
                          itemProp="billingIncrement"
                        >
                          / {plan.duration}
                        </span>
                        <meta itemProp="priceCurrency" content="USD" />
                      </div>
                      {plan.setupFee && (
                        <p className="text-yellow-300 text-xs mt-1 md:mt-2">
                          One-time setup fee: ${plan.setupFee}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 lg:mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check
                          className={`w-4 h-4 mt-0.5 ${plan.accentColor} flex-shrink-0`}
                          aria-hidden="true"
                        />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button - Changed to Download button for regular plans */}
                  {plan.id === "luxury" ? (
                    <button
                      onClick={scrollToContact}
                      className={`w-full py-2.5 md:py-3 rounded-lg bg-gradient-to-r ${plan.buttonGradient} text-white text-sm md:text-base font-medium hover:shadow-lg hover:scale-105 transition-all duration-300`}
                      aria-label="Request Elite Access to Luxury Salon Management Plan"
                    >
                      Request Elite Access
                    </button>
                  ) : (
                    <a
                      href="https://play.google.com/store/apps/details?id=com.curl_cipher_manage.saloon_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-2.5 md:py-3 rounded-lg bg-gradient-to-r ${plan.buttonGradient} text-white text-sm md:text-base font-medium hover:shadow-lg hover:scale-105 transition-all duration-300`}
                      aria-label={`Download Curl Cipher Salon Manager App for ${plan.name}`}
                    >
                      <IoLogoAndroid className="w-4 h-4" aria-hidden="true" />
                      <span>Download Salon Manager</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Key Features Section */}
          <section
            aria-labelledby="key-features-heading"
            className="max-w-6xl mx-auto"
          >
            <h3
              id="key-features-heading"
              className="text-xl sm:text-2xl md:text-3xl font-serif text-center text-white mb-8 md:mb-10 lg:mb-12"
            >
              Essential Features Included in All Salon Plans
            </h3>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {keyFeatures.map((feature, index) => (
                <article
                  key={index}
                  className="p-5 md:p-6 lg:p-7 rounded-xl bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-yellow-300/30 transition-all duration-300"
                >
                  <div className="mb-3">{feature.icon}</div>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Enterprise Option */}
          <section
            aria-labelledby="enterprise-heading"
            className="text-center mt-16 md:mt-20 lg:mt-24"
          >
            <div className="inline-block p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-900 to-black border border-indigo-600/30">
              <h3
                id="enterprise-heading"
                className="text-lg md:text-xl lg:text-2xl font-serif text-white mb-3 md:mb-4"
              >
                Enterprise Salon Management Solutions
              </h3>
              <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-5 md:mb-6 lg:mb-7">
                Tailored salon management solutions for large-scale salon chains
                and franchise operations with multiple locations and complex
                business needs.
              </p>
              <button
                onClick={scrollToContact}
                className="px-6 md:px-8 lg:px-10 py-2.5 md:py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm md:text-base rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                aria-label="Contact sales to discuss custom salon management requirements"
              >
                Discuss Custom Salon Requirements
              </button>
            </div>
          </section>

          {/* Added SEO-rich content section */}
          <div className="mt-16 max-w-4xl mx-auto text-gray-300 text-center">
            <h4 className="text-xl font-serif text-white mb-4">
              Why Choose Curl Cipher for Your Salon?
            </h4>
            <p className="mb-4">
              Curl Cipher offers the most cost-effective and comprehensive salon
              management pricing in the industry. With no hidden fees and
              transparent monthly pricing, salon owners can accurately budget
              their technology expenses while enjoying premium features.
            </p>
            <p className="mb-4">
              Our flexible pricing model allows salons of all sizes—from
              independent stylists to multi-location chains—to access
              enterprise-grade salon management technology. Every plan includes
              our dual-app ecosystem, connecting your business operations with
              client-facing services.
            </p>
            <p>
              Whether you're opening your first salon or managing an established
              beauty empire, Curl Cipher's scalable pricing ensures you only pay
              for what you need while maintaining room to grow. Contact our
              salon specialists today to find the perfect plan for your
              business.
            </p>
          </div>

          {/* FAQ Section for SEO */}
          <section
            aria-labelledby="pricing-faq-heading"
            className="mt-20 max-w-4xl mx-auto"
          >
            <h4
              id="pricing-faq-heading"
              className="text-xl font-serif text-white mb-8 text-center"
            >
              Frequently Asked Questions About Salon Software Pricing
            </h4>

            <div className="space-y-6">
              <div className="p-5 rounded-lg bg-indigo-900/30 border border-indigo-400/20">
                <h5 className="text-lg text-white mb-2">
                  Is there a contract or minimum commitment period?
                </h5>
                <p className="text-gray-300 text-sm">
                  No long-term contracts required. All Curl Cipher salon
                  management plans are billed monthly with the option to cancel
                  anytime. For annual payments, we offer a 10% discount on all
                  plans.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-indigo-900/30 border border-indigo-400/20">
                <h5 className="text-lg text-white mb-2">
                  Can I upgrade or downgrade my salon plan later?
                </h5>
                <p className="text-gray-300 text-sm">
                  Yes, you can easily upgrade or downgrade your salon management
                  plan at any time as your business needs change. Changes take
                  effect on your next billing cycle with no penalties.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-indigo-900/30 border border-indigo-400/20">
                <h5 className="text-lg text-white mb-2">
                  Is there a free trial available for salon owners?
                </h5>
                <p className="text-gray-300 text-sm">
                  Yes, we offer a 14-day free trial of our Premium Salon Package
                  so you can experience the full capabilities of our salon
                  management system before committing.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
