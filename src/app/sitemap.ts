import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";
import { getSiteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  let slugs: Awaited<ReturnType<typeof getAllSlugs>> = [];

  try {
    slugs = await getAllSlugs();
  } catch {
    console.warn("Failed to fetch blog slugs for sitemap");
  }

  const blogEntries: MetadataRoute.Sitemap = slugs.map((post) => ({
    url: `${siteUrl}/blog/${post.id}`,
    lastModified: new Date(post.updated_at),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const productEntries: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/produtos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...productEntries,
    ...blogEntries,
  ];
}
