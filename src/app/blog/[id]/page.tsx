import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackToTop } from "@/components/BackToTop";
import { JsonLd } from "@/components/JsonLd";
import { SiteBackground } from "@/components/SiteBackground";
import { BlogPost } from "@/features/Blog";
import { Footer } from "@/features/Footer";
import { Navbar } from "@/features/Navbar";
import { getPostById } from "@/lib/blog";
import { getSiteUrl } from "@/lib/seo";

export const dynamic = "force-dynamic";

const siteUrl = getSiteUrl();

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) return {};

  return {
    title: post.title,
    description: post.summary ?? undefined,
    alternates: { canonical: `/blog/${post.id}` },
    openGraph: {
      title: post.title,
      description: post.summary ?? undefined,
      url: `${siteUrl}/blog/${post.id}`,
      siteName: "SyncForge",
      type: "article",
      locale: "pt_BR",
      publishedTime: post.created_at,
      modifiedTime: post.updated_at,
      authors: [post.author_name],
      images: post.cover_image
        ? [{ url: post.cover_image, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary ?? undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) notFound();

  return (
    <>
      <SiteBackground />
      <Navbar />

      <main className="relative min-h-svh pt-24">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.summary ?? undefined,
            image: post.cover_image ?? `${siteUrl}/opengraph-image`,
            datePublished: post.created_at,
            dateModified: post.updated_at,
            author: { "@type": "Person", name: post.author_name },
            publisher: {
              "@type": "Organization",
              name: "SyncForge",
              logo: { "@type": "ImageObject", url: `${siteUrl}/syncforge.png` },
            },
            mainEntityOfPage: `${siteUrl}/blog/${post.id}`,
            inLanguage: "pt-BR",
          }}
        />
        <BlogPost post={post} />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
