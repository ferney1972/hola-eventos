import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { categories } from "@/lib/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://holaeventos.es";
  const now = new Date();

  const blogPosts: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${base}/alquiler/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/hola-15`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...categoryPages,
    ...blogPosts,
    {
      url: `${base}/cart`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
