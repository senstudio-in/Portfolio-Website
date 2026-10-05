import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

const routes = ["", "/works", "/about-us", "/contact", "/works/liv-golf", "/works/mlb-india", "/works/social-media-carousels", "/works/syria-a"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const projectRoutes = projects.map((project) => `/works/${project.slug}`);

  return [...new Set([...routes, ...projectRoutes])].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/works" ? 0.9 : 0.7,
  }));
}
