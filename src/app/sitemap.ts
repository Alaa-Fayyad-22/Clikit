import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/insights";
import { SITE_URL } from "@/lib/site";
import { CASE_STUDIES } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/work",
    "/insights",
    "/contact",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const workRoutes = CASE_STUDIES.map((study) => ({
    url: `${SITE_URL}/work/${study.slug}`,
    lastModified: new Date(),
  }));

  const insightRoutes = ARTICLES.map((article) => ({
    url: `${SITE_URL}/insights/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  return [...staticRoutes, ...workRoutes, ...insightRoutes];
}
