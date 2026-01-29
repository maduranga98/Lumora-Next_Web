module.exports = {
  siteUrl: "https://www.lumoraventures.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*", "/admin/*", "/private/*"],

  // Custom transform function to set priorities for different pages
  transform: async (config, path) => {
    // Homepage gets highest priority
    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    // Main service pages get high priority
    if (
      path === "/google-my-business/" ||
      path === "/industrial-automation/" ||
      path === "/curl-cipher/"
    ) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    // Blog pages get medium-high priority
    if (path.startsWith("/blog/") && path !== "/blog/") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    // Blog index gets medium-high priority
    if (path === "/blog/") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.85,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    // Legal pages get lower priority
    if (path === "/privacy-policy/" || path === "/terms-of-service/") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.5,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    // Payment pages
    if (path === "/gmb-service-payments/") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    // Default for other pages
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },

  // Additional paths that might not be automatically discovered
  additionalPaths: async (config) => {
    return [
      await config.transform(config, "/"),
      await config.transform(config, "/blog/"),
      await config.transform(config, "/google-my-business/"),
      await config.transform(config, "/industrial-automation/"),
      await config.transform(config, "/curl-cipher/"),
    ];
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
    ],
    additionalSitemaps: [],
  },
};
