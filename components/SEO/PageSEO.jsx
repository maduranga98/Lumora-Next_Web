// components/SEO/PageSEO.jsx
export function generateServiceMetadata(service) {
  const title = `${service.title} Services | Lumora Ventures`;
  const description =
    service.description +
    " Learn how Lumora Ventures can help your business with professional " +
    service.title +
    " services globally.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.lumoraventures.com/services/${service.slug}`,
      images: [
        {
          url: service.image || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${service.title} - Lumora Ventures`,
        },
      ],
    },
    alternates: {
      canonical: `https://www.lumoraventures.com/services/${service.slug}`,
    },
  };
}

export function generateServiceJsonLd(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.lumoraventures.com/services/${service.slug}`,
    name: `${service.title}`,
    url: `https://www.lumoraventures.com/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "Lumora Ventures",
      "@id": "https://www.lumoraventures.com/#organization",
    },
    description: service.description,
    serviceType: service.category || "Business Service",
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://www.lumoraventures.com/contact",
      serviceSmsNumber: "+94766306555",
      servicePhone: "+94766306555",
      name: "Online and Phone Support",
    },
  };
}
