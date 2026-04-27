import type { Metadata, Viewport } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import { Providers } from "@/components/Providers";
import { FAQ_ITEMS } from "@/constants/faq";
import { getSiteUrl } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = getSiteUrl();

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SyncForge",
  url: siteUrl,
  logo: `${siteUrl}/syncforge.png`,
  email: "contato.syncforge@gmail.com",
  telephone: "+55-92-99258-4985",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressRegion: "AM",
    addressLocality: "Manaus",
  },
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SyncForge",
  url: siteUrl,
  inLanguage: "pt-BR",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SyncForge | Software, Design e Vídeo sob medida",
  description:
    "A SyncForge entrega software (CRM, ERP, PDV, OS, WMS), edição de vídeo e design para empresas e creators que querem crescer com qualidade.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  keywords: [
    "SyncForge",
    "Software sob medida",
    "CRM",
    "ERP",
    "PDV",
    "Design",
    "Edição de vídeo",
    "Identidade visual",
    "Landing page",
    "Manaus",
  ],
  openGraph: {
    title: "SyncForge | Software, Design e Vídeo sob medida",
    description:
      "Soluções digitais sob medida em software, design e produção audiovisual.",
    url: siteUrl,
    siteName: "SyncForge",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SyncForge - Software, Design e Vídeo sob medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SyncForge | Software, Design e Vídeo sob medida",
    description:
      "Soluções digitais sob medida em software, design e produção audiovisual.",
    images: ["/twitter-image"],
  },
};

export const viewport: Viewport = {
  themeColor: "#00072D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${poppins.variable} ${geistMono.variable} h-full bg-background antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
