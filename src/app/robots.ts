import type { MetadataRoute } from "next";
import { siteBaseUrl } from "@/lib/site";

// Served at /robots.txt. Search engines may crawl the public pages; private
// and admin areas, and the API, are off limits.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin", "/dashboard", "/profile", "/reset-password"],
    },
    sitemap: `${siteBaseUrl()}/sitemap.xml`,
  };
}
