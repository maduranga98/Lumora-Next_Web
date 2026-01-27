import BlogHome from "@/components/blog/BlogHome";

export const metadata = {
  title: "Blog - Insights on AI, Automation & Software Development",
  description:
    "Explore expert insights, case studies, and industry trends in AI, industrial automation, software development, and digital transformation from Lumora Ventures.",
  keywords: [
    "tech blog",
    "AI insights",
    "industrial automation",
    "software development blog",
    "computer vision",
    "IoT",
    "digital transformation",
    "case studies",
    "Lumora Ventures blog",
  ],
  openGraph: {
    title: "Blog | Lumora Ventures - Technology Insights & Case Studies",
    description:
      "Expert insights, real-world case studies, and industry trends in AI, automation, and software development.",
    url: "https://www.lumoraventures.com/blog",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lumora Ventures Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Lumora Ventures",
    description:
      "Expert insights and case studies in AI, automation, and software development.",
  },
  alternates: {
    canonical: "https://www.lumoraventures.com/blog",
  },
};

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Lumora Ventures Blog",
    description:
      "Expert insights, case studies, and trends in AI, industrial automation, and software development.",
    url: "https://www.lumoraventures.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Lumora Ventures PVT LTD",
      logo: {
        "@type": "ImageObject",
        url: "https://www.lumoraventures.com/logo.webp",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.lumoraventures.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.lumoraventures.com/blog",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <BlogHome />
    </>
  );
}
