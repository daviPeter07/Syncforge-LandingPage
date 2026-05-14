import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const slugs = getAllSlugs();

  const blogEntries: MetadataRoute.Sitemap = slugs.map((post) => ({
    url: `${siteUrl}/blog/${post.id}`,
    lastModified: new Date(post.updated_at),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...blogEntries,
  ];
}
