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
              "@id": "https://lumoraventures.com/#organization",
              name: "Lumora Ventures",
              url: "https://lumoraventures.com/",
              logo: {
                "@type": "ImageObject",
                "@id": "https://lumoraventures.com/#logo",
                inLanguage: "en-US",
                url: "https://lumoraventures.com/logo.webp",
                contentUrl: "https://lumoraventures.com/logo.webp",
                width: 512,
                height: 512,
                caption: "Lumora Ventures",
              },
              image: { "@id": "https://lumoraventures.com/#logo" },
              sameAs: [
                "https://www.facebook.com/lumoraventures",
                "https://www.instagram.com/lumoraventures",
                "https://www.linkedin.com/company/lumoraventures",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://lumoraventures.com/#website",
              url: "https://lumoraventures.com/",
              name: "Lumora Ventures",
              description: "Tech & Marketing Solutions for Modern Businesses",
              publisher: { "@id": "https://lumoraventures.com/#organization" },
              potentialAction: [
                {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate:
                      "https://lumoraventures.com/search?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              ],
              inLanguage: "en-US",
            },
            {
              "@type": "WebPage",
              "@id": "https://lumoraventures.com/#webpage",
              url: "https://lumoraventures.com/",
              name: "Lumora Ventures | Digital Business Transformation & Automation Solutions",
              isPartOf: { "@id": "https://lumoraventures.com/#website" },
              about: { "@id": "https://lumoraventures.com/#organization" },
              description:
                "Transform your business with our innovative digital solutions. We offer Google Business optimization, salon management systems, and industrial automation to boost growth and streamline operations.",
              breadcrumb: { "@id": "https://lumoraventures.com/#breadcrumb" },
              inLanguage: "en-US",
              potentialAction: [
                {
                  "@type": "ReadAction",
                  target: ["https://lumoraventures.com/"],
                },
              ],
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://lumoraventures.com/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                },
              ],
            },
            {
              "@type": "Service",
              "@id": "https://lumoraventures.com/services/google-my-business",
              name: "Google My Business Management",
              url: "https://lumoraventures.com/services/google-my-business",
              provider: { "@id": "https://lumoraventures.com/#organization" },
              description:
                "Manage and optimize your Google My Business profile to improve local search visibility and customer engagement.",
              serviceType: "Digital Marketing",
            },
            {
              "@type": "Service",
              "@id": "https://lumoraventures.com/services/curl-cipher",
              name: "Curl Cipher Salon Management",
              url: "https://lumoraventures.com/services/curl-cipher",
              provider: { "@id": "https://lumoraventures.com/#organization" },
              description:
                "Salon management system that helps salons streamline booking, inventory, and staff management.",
              serviceType: "Business Software",
            },
            {
              "@type": "Service",
              "@id":
                "https://lumoraventures.com/services/industrial-automation",
              name: "Industrial Automation",
              url: "https://lumoraventures.com/services/industrial-automation",
              provider: { "@id": "https://lumoraventures.com/#organization" },
              description:
                "Implement cutting-edge industrial automation solutions to enhance efficiency and productivity.",
              serviceType: "Industrial Technology",
            },
          ],
        }),
      }}
    />
  );
}
