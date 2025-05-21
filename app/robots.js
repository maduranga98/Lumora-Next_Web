// app/robots.js
export const dynamic = "force-static";
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/private/"],
    },
    sitemap: "https://www.lumoraventures.com/sitemap.xml",
    host: "https://www.lumoraventures.com",
  };
}
