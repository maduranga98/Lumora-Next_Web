import React from "react";
import Image from "next/image";
import Head from "next/head";
import { IoLogoAndroid } from "react-icons/io5";

const FeaturesSection = () => {
  // Image mapping with correct paths and SEO-optimized alt text descriptions
  const imageMapping = {
    business: {
      path: "/cc-images/image1.webp",
      alt: "Curl Cipher salon business management dashboard showing appointments, revenue, and client statistics",
    },
    revenue: {
      path: "/cc-images/image2.webp",
      alt: "Salon revenue tracking and financial analytics dashboard in Curl Cipher Manager app",
    },
    booking: {
      path: "/cc-images/image3.webp",
      alt: "Smart salon appointment booking interface showing stylist availability and service selection",
    },
    inventory: {
      path: "/cc-images/image4.webp",
      alt: "Salon inventory management system tracking product stock levels and ordering needs",
    },
    customization: {
      path: "/cc-images/image5.webp",
      alt: "Customizable salon management settings for multi-location salon businesses",
    },
    discovery: {
      path: "/cc-images/image6.webp",
      alt: "Salon discovery feature showing nearby premium salons with ratings and services",
    },
    payment: {
      path: "/cc-images/image7.webp",
      alt: "Secure salon payment processing interface with multiple payment options",
    },
    personal: {
      path: "/cc-images/image8.webp",
      alt: "Personalized salon client profile with appointment history and preferences",
    },
    beauty: {
      path: "/cc-images/image9.webp",
      alt: "Salon product recommendations and beauty product ordering interface",
    },
  };

  const audiences = [
    {
      title: "For Salon Owners & Professionals",
      appLogo: "/manage-logo.webp", // Manager app logo
      logoText: "Curl Cipher Manager",
      colorTheme: "from-amber-400 via-yellow-500 to-orange-500",
      cardGradient: "from-black via-gray-900 to-black",
      textGradient: "from-amber-300 to-yellow-200",
      borderColor: "border-amber-500/30",
      accentColor: "text-amber-300",
      bgGlow: "bg-amber-500/10",
      appLink:
        "https://play.google.com/store/apps/details?id=com.curl_cipher_manage.saloon_app",
      features: [
        {
          title: "All-in-One Salon Business Management",
          description:
            "Say goodbye to multiple apps and spreadsheets! Curl Cipher combines appointment scheduling, staff management, payroll, inventory tracking, and financial reports in a single platform designed specifically for salons and spas.",
          imageKey: "business",
          imagePosition: "right",
        },
        {
          title: "Boost Salon Efficiency & Revenue Growth",
          description: [
            "Automate daily salon operations and reduce manual administrative workload",
            "Manage multiple salon branches and staff scheduling with centralized control",
            "Track stylist commissions, service sales, and product expenses in real time",
            "Gain business insights through detailed salon analytics and financial reporting",
          ],
          imageKey: "revenue",
          imagePosition: "left",
        },
        {
          title: "Smarter Salon Booking & Client Engagement",
          description: [
            "Enable real-time salon appointment scheduling with stylist and service preferences",
            "Reduce appointment no-shows with automated reminders and booking confirmations",
            "Create and promote exclusive salon deals and client loyalty programs",
            "Increase salon product sales with an integrated online beauty store",
          ],
          imageKey: "booking",
          imagePosition: "right",
        },
        {
          title: "Salon Inventory & Financial Management",
          description: [
            "Monitor salon product stock levels and automate inventory management",
            "Generate stylist commission, tax, and salon cash flow reports with a single click",
            "Track salon payroll, staff incentives, and business earnings in one secure place",
          ],
          imageKey: "inventory",
          imagePosition: "left",
        },
        {
          title: "Salon Software Customization & Scalability",
          description: [
            "Suitable for small independent salons, high-end beauty boutiques, and large salon franchises",
            "Flexible service pricing models based on gender, stylist levels, and treatment types",
            "Cloud-based salon management for easy access across devices, with data security ensured",
          ],
          imageKey: "customization",
          imagePosition: "right",
        },
      ],
    },
    {
      title: "For Salon Clients & Beauty Enthusiasts",
      appLogo: "/customer.webp", // Customer app logo
      logoText: "Curl Cipher",
      colorTheme: "from-rose-400 via-pink-500 to-purple-600",
      cardGradient: "from-black via-gray-900 to-black",
      textGradient: "from-rose-300 to-pink-200",
      borderColor: "border-rose-500/30",
      accentColor: "text-rose-300",
      bgGlow: "bg-rose-500/10",
      appLink:
        "https://play.google.com/store/apps/details?id=com.curl_cipher.customer_app",
      features: [
        {
          title: "Effortless Salon Discovery & Online Booking",
          description: [
            "Find top-rated hair salons and beauty spas near you with detailed service menus",
            "Filter by luxury salons, budget-friendly options, or specialty beauty services",
            "Book your favorite hair stylists and beauty professionals with real-time availability",
          ],
          imageKey: "discovery",
          imagePosition: "left",
        },
        {
          title: "Transparent Salon Pricing & Secure Payments",
          description: [
            "View upfront pricing for all salon services before booking your appointment",
            "Pay securely for salon services via multiple digital payment options",
            "Get instant booking confirmation and digital receipts for your salon visits",
          ],
          imageKey: "payment",
          imagePosition: "right",
        },
        {
          title: "Personalized Salon Experience & Convenience",
          description: [
            "Save favorite salons & beauty professionals for quick future bookings",
            "Reschedule or cancel salon appointments with zero hassle",
            "Get personalized salon offers & exclusive beauty treatment discounts",
          ],
          imageKey: "personal",
          imagePosition: "left",
        },
        {
          title: "Beauty Products & Services at Your Fingertips",
          description: [
            "Order salon-recommended beauty products for convenient home delivery",
            "Receive salon appointment reminders & exclusive beauty promotions",
            "Earn salon loyalty points and unlock premium beauty service benefits",
          ],
          imageKey: "beauty",
          imagePosition: "right",
        },
      ],
    },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>
          Curl Cipher Features | Salon Management & Booking Apps | Lumora
          Ventures
        </title>
        <meta
          name="description"
          content="Explore Curl Cipher's powerful salon management features for salon owners and clients. Appointment scheduling, staff management, inventory tracking, online booking and more."
        />
        <meta
          name="keywords"
          content="salon management software, salon booking app, salon appointment scheduling, salon business management, salon inventory system, beauty salon software, spa management app"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Curl Cipher Salon Management & Booking Features"
        />
        <meta
          property="og:description"
          content="Discover the complete feature set of Curl Cipher's dual app ecosystem for salon owners and clients. Business management, booking, payments, and more."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.lumoraventures.com/curl-cipher/features"
        />
      </Head>

      {/* Rich Schema Markup for Software Applications */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Curl Cipher Manager",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Android",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          description:
            "Premium salon management software for salon owners and professionals. Features include appointment scheduling, staff management, inventory tracking, financial reporting, and multi-location control.",
          featureList: [
            "All-in-One Salon Business Management",
            "Salon Efficiency & Revenue Growth Tools",
            "Smart Appointment Booking System",
            "Inventory & Financial Management",
            "Customization & Scalability for All Salon Types",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            ratingCount: "85",
          },
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Curl Cipher Client App",
          applicationCategory: "LifestyleApplication",
          operatingSystem: "Android",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          description:
            "Premium salon booking app for clients. Features include salon discovery, online appointment booking, secure payments, and beauty product ordering.",
          featureList: [
            "Salon Discovery & Online Booking",
            "Transparent Pricing & Secure Payments",
            "Personalized Salon Experience",
            "Beauty Products & Services",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "120",
          },
        })}
      </script>

      <section
        className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at top left, #1a0033 0%, #000000 50%, #330a0a 100%)",
        }}
        id="curl-cipher-features"
      >
        {/* Hidden H1 for SEO */}
        <h1 className="sr-only">
          Curl Cipher Salon Management and Booking App Features
        </h1>

        {/* Luxury Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-72 md:w-96 lg:w-[600px] h-72 md:h-96 lg:h-[600px] bg-amber-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-0 w-72 md:w-96 lg:w-[600px] h-72 md:h-96 lg:h-[600px] bg-rose-500 rounded-full blur-[120px]"></div>
        </div>

        {/* Elegant Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 3px 3px, gold 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {audiences.map((audience, auIdx) => (
            <section
              key={auIdx}
              className={`mb-20 lg:mb-24 ${
                auIdx === 1 ? "mt-16 lg:mt-20" : ""
              }`}
              aria-labelledby={`audience-heading-${auIdx}`}
            >
              {/* Luxury Header with Logo */}
              <header className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
                {/* App Logo */}
                <div className="w-16 h-16 md:w-20 md:h-20 relative rounded-full border-2 border-gold p-1 shadow-xl">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black to-gray-900"></div>
                  <div className="relative z-10 w-full h-full rounded-full flex items-center justify-center">
                    <Image
                      src={audience.appLogo}
                      alt={
                        auIdx === 0
                          ? "Curl Cipher Manager App Logo for Salon Owners"
                          : "Curl Cipher Client App Logo for Salon Customers"
                      }
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h2
                    id={`audience-heading-${auIdx}`}
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-serif font-light mb-1 md:mb-2 bg-clip-text text-transparent bg-gradient-to-r ${audience.textGradient}`}
                  >
                    {audience.title}
                  </h2>
                  <p
                    className={`text-xs md:text-sm uppercase tracking-wider ${audience.accentColor}`}
                  >
                    {audience.logoText}
                  </p>
                </div>
              </header>

              {/* Premium Features */}
              <div className="space-y-12 md:space-y-16 lg:space-y-20">
                {audience.features.map((feature, featureIdx) => (
                  <article
                    key={featureIdx}
                    className={`relative ${
                      feature.imagePosition === "right"
                        ? "md:pr-8 lg:pr-12"
                        : "md:pl-8 lg:pl-12"
                    }`}
                  >
                    {/* Decorative Lines */}
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden md:block"></div>
                    <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden md:block"></div>

                    <div
                      className={`flex flex-col ${
                        feature.imagePosition === "right"
                          ? "lg:flex-row"
                          : "lg:flex-row-reverse"
                      } gap-6 md:gap-8 lg:gap-10 items-center`}
                    >
                      {/* Content Card */}
                      <div className="w-full lg:w-7/12">
                        <div
                          className={`p-5 md:p-6 lg:p-8 rounded-lg border ${audience.borderColor} bg-gradient-to-br ${audience.cardGradient} shadow-md backdrop-blur-sm`}
                        >
                          {/* Feature Title */}
                          <h3 className="text-xl md:text-2xl lg:text-2xl font-serif text-white mb-4 md:mb-6">
                            {feature.title}
                          </h3>

                          {/* Description */}
                          {Array.isArray(feature.description) ? (
                            <ul className="space-y-3 md:space-y-4">
                              {feature.description.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-3 text-gray-300 items-start"
                                >
                                  <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gold"></span>
                                  <span className="flex-1 text-sm md:text-base">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
                              {feature.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Feature Image */}
                      <div className="w-full lg:w-5/12">
                        <div
                          className={`relative rounded-lg overflow-hidden shadow-md border ${audience.borderColor} max-w-xs mx-auto`}
                        >
                          <div className="aspect-[4/3] w-full relative">
                            <Image
                              src={imageMapping[feature.imageKey].path}
                              alt={imageMapping[feature.imageKey].alt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}

          {/* App Download Buttons (with SEO optimized text) */}
          <div className="text-center pt-10 md:pt-12 lg:pt-16">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-white mb-6 md:mb-8">
              Download Our Salon Management Apps
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
              {/* Customer App Download Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.curl_cipher.customer_app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 lg:px-8 lg:py-4 text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl overflow-hidden rounded-lg transition-all duration-500"
                aria-label="Download Curl Cipher Salon Booking App for clients"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-400 rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="flex items-center gap-2 relative z-10">
                  <IoLogoAndroid
                    className="relative z-10 w-5 h-5 text-black group-hover:text-rose-300 transition-colors duration-500"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 text-black group-hover:text-rose-300 font-medium transition-colors duration-500">
                    Download Salon Booking App
                  </span>
                </div>
              </a>

              {/* Business App Download Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.curl_cipher_manage.saloon_app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 lg:px-8 lg:py-4 text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl overflow-hidden rounded-lg transition-all duration-500"
                aria-label="Download Curl Cipher Manage Salon Business App for salon owners"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="flex items-center gap-2 relative z-10">
                  <IoLogoAndroid
                    className="relative z-10 w-5 h-5 text-black group-hover:text-amber-300 transition-colors duration-500"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 text-black group-hover:text-amber-300 font-medium transition-colors duration-500">
                    Download Salon Management App
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Added SEO-rich text section */}
          <div className="mt-16 max-w-4xl mx-auto text-gray-300 text-center">
            <h4 className="text-xl font-serif text-white mb-4">
              Why Choose Curl Cipher for Your Salon?
            </h4>
            <p className="mb-4">
              Curl Cipher offers the most comprehensive salon management
              solution on the market today. Our dual-app ecosystem connects
              salon businesses with their clients through an intuitive interface
              designed specifically for the beauty industry. Whether you're a
              salon owner looking to streamline operations or a client seeking
              premium salon services, Curl Cipher provides the perfect platform.
            </p>
            <p>
              With features like intelligent appointment scheduling, staff
              management, inventory tracking, and client relationship tools,
              Curl Cipher transforms how modern salons operate. Download our
              salon apps today and experience the difference that purpose-built
              salon technology can make for your beauty business.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
