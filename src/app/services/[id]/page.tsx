import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackToTop } from "@/components/BackToTop";
import FloatingCTABanner from "@/components/FloatingCTABanner";
import { SiteBackground } from "@/components/SiteBackground";
import { getServiceLandingPageEntry } from "@/constants/landing-pages-services/registry";
import {
  getServiceLandingPageIds,
  isServiceLandingPageId,
} from "@/constants/landing-pages-services/routes";
import { Footer } from "@/features/Footer";
import { LandingPageServiceRouter } from "@/features/LandingPagesServices/LandingPageServiceRouter";
import { Navbar } from "@/features/Navbar";
import { getSiteUrl } from "@/lib/seo";

const siteUrl = getSiteUrl();
export const dynamicParams = false;

interface ServiceDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const entry = getServiceLandingPageEntry(id);

  if (!entry) {
    notFound();
  }

  return {
    title: entry.content.seoTitle,
    description: entry.content.seoDescription,
    alternates: { canonical: `/services/${entry.content.id}` },
    openGraph: {
      title: entry.content.seoTitle,
      description: entry.content.seoDescription,
      url: `${siteUrl}/services/${entry.content.id}`,
      siteName: "SyncForge",
      type: "website",
      locale: "pt_BR",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `SyncForge - ${entry.service.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.content.seoTitle,
      description: entry.content.seoDescription,
      images: ["/twitter-image"],
    },
  };
}

export function generateStaticParams() {
  return getServiceLandingPageIds().map((id) => ({ id }));
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { id } = await params;

  if (!isServiceLandingPageId(id)) {
    notFound();
  }

  return (
    <>
      <SiteBackground />
      <Navbar />

      <main className="relative min-h-svh pt-24">
        <LandingPageServiceRouter id={id} />
      </main>

      <Footer />
      <FloatingCTABanner />
      <BackToTop />
    </>
  );
}
