// components/JsonLdSchema.jsx
export default function JsonLdSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.lumoraventures.com/#organization",
              name: "Lumora Ventures PVT LTD",
              url: "https://www.lumoraventures.com/",
              logo: {
                "@type": "ImageObject",
                "@id": "https://www.lumoraventures.com/#logo",
                inLanguage: "en-US",
                url: "https://www.lumoraventures.com/logo.webp",
                contentUrl: "https://www.lumoraventures.com/logo.webp",
                width: 512,
                height: 512,
                caption: "Lumora Ventures",
              },
              image: { "@id": "https://www.lumoraventures.com/#logo" },
              description: "Leading Sri Lankan technology company delivering software development, mobile applications, AI/ML solutions, and industrial automation. Transform your business with cutting-edge technology solutions.",
              foundingDate: "2020",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kandy",
                addressRegion: "Central Province",
                addressCountry: "LK",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+94-71-999-8500",
                  contactType: "customer service",
                  email: "info@lumoraventures.com",
                  availableLanguage: ["English"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+94-77-986-1174",
                  contactType: "sales",
                  email: "info@lumoraventures.com",
                  availableLanguage: ["English"],
                },
              ],
              sameAs: [
                "https://www.linkedin.com/company/lumora-ventures-pvt-ltd/",
                "https://github.com/lumoraventures",
                "https://twitter.com/lumoraventures",
                "https://www.facebook.com/lumoraventures",
                "https://www.instagram.com/lumoraventures",
              ],
              knowsAbout: [
                "Software Development",
                "Mobile App Development",
                "Artificial Intelligence",
                "Machine Learning",
                "Computer Vision",
                "Industrial Automation",
                "IoT",
                "Predictive Maintenance",
                "Digital Twins",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://www.lumoraventures.com/#website",
              url: "https://www.lumoraventures.com/",
              name: "Lumora Ventures",
              description: "Complete Technology Solutions: From Apps to AI - Software Development, Mobile Apps, AI/ML, and Industrial Automation",
              publisher: { "@id": "https://www.lumoraventures.com/#organization" },
              inLanguage: "en-US",
            },
            {
              "@type": "WebPage",
              "@id": "https://www.lumoraventures.com/#webpage",
              url: "https://www.lumoraventures.com/",
              name: "Lumora Ventures | Complete Technology Solutions: From Apps to AI",
              isPartOf: { "@id": "https://www.lumoraventures.com/#website" },
              about: { "@id": "https://www.lumoraventures.com/#organization" },
              description:
                "We build everything your business needs: elegant web and mobile applications, intelligent automation systems, and advanced AI solutions that drive real results. 250+ projects delivered.",
              breadcrumb: { "@id": "https://www.lumoraventures.com/#breadcrumb" },
              inLanguage: "en-US",
              potentialAction: [
                {
                  "@type": "ReadAction",
                  target: ["https://www.lumoraventures.com/"],
                },
              ],
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://www.lumoraventures.com/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.lumoraventures.com/",
                },
              ],
            },
            {
              "@type": "Service",
              "@id": "https://www.lumoraventures.com/#service-software-development",
              name: "Custom Software Development",
              provider: { "@id": "https://www.lumoraventures.com/#organization" },
              description:
                "Custom web applications, SaaS platforms, and enterprise software solutions built with modern technologies like React, Next.js, and Node.js.",
              serviceType: "Software Development",
              areaServed: "Worldwide",
            },
            {
              "@type": "Service",
              "@id": "https://www.lumoraventures.com/#service-mobile-apps",
              name: "Mobile Application Development",
              provider: { "@id": "https://www.lumoraventures.com/#organization" },
              description:
                "Native and cross-platform mobile applications for iOS and Android using Flutter and React Native.",
              serviceType: "Mobile Development",
              areaServed: "Worldwide",
            },
            {
              "@type": "Service",
              "@id": "https://www.lumoraventures.com/#service-ai-ml",
              name: "AI & Machine Learning Solutions",
              provider: { "@id": "https://www.lumoraventures.com/#organization" },
              description:
                "Artificial intelligence and machine learning solutions including computer vision, predictive analytics, and natural language processing.",
              serviceType: "Artificial Intelligence",
              areaServed: "Worldwide",
            },
            {
              "@type": "Service",
              "@id": "https://www.lumoraventures.com/#service-industrial-automation",
              name: "Industrial Automation",
              url: "https://www.lumoraventures.com/industrial-automation",
              provider: { "@id": "https://www.lumoraventures.com/#organization" },
              description:
                "Smart factory solutions, predictive maintenance systems, digital twins, and IoT-enabled industrial automation.",
              serviceType: "Industrial Technology",
              areaServed: "Worldwide",
            },
          ],
        }),
      }}
    />
  );
}
