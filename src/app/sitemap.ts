import type { MetadataRoute } from "next";
import { getServiceLandingPageLinks } from "@/constants/landing-pages-services/routes";
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

  const serviceEntries: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...getServiceLandingPageLinks().map((service) => ({
      url: `${siteUrl}${service.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...serviceEntries,
    ...blogEntries,
  ];
}
