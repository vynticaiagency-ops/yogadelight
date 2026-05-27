import { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yogadelight.in";

  const staticPages = [
    "",
    "/about",
    "/programs/prenatal-yoga",
    "/programs/fertility-yoga",
    "/testimonials",
    "/faq",
    "/blog",
    "/contact",
    "/free-consultation",
    "/register",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
    "/medical-disclaimer",
    "/consent-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogPages = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
