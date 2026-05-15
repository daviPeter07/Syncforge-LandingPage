import type { Metadata } from "next";
import { BackToTop } from "@/components/BackToTop";
import { SiteBackground } from "@/components/SiteBackground";
import { BlogCard } from "@/features/Blog";
import { Footer } from "@/features/Footer";
import { Navbar } from "@/features/Navbar";
import { getAllPosts } from "@/lib/blog";
import { getSiteUrl } from "@/lib/seo";

export const dynamic = "force-dynamic";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Blog | SyncForge",
  description:
    "Artigos sobre desenvolvimento de software, CRM, sistemas web, landing pages, IA e tecnologia em Manaus.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | SyncForge",
    description:
      "Artigos sobre desenvolvimento de software, CRM, sistemas web e tecnologia.",
    url: `${siteUrl}/blog`,
    siteName: "SyncForge",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | SyncForge",
    description:
      "Artigos sobre desenvolvimento de software, CRM, sistemas web e tecnologia.",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <SiteBackground />
      <Navbar />

      <main className="relative min-h-svh">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 sm:pt-36 lg:pt-40">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[10.5px] font-medium tracking-[0.22em] text-muted-foreground uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4d8cff]" />
              CONTEÚDO
            </span>

            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
              Blog
            </h1>

            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Artigos técnicos, novidades sobre tecnologia, IA e dicas para
              acelerar o seu negócio.
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">
                Nenhum post publicado ainda.
              </p>
            </div>
          )}
          
        </div>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
