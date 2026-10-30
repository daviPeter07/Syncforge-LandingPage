import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { Providers } from "@/components/Providers";
import { FAQ_ITEMS } from "@/constants/faq";
import { SEO_DESCRIPTION, SEO_TITLE, SOCIAL_IMAGE_ALT } from "@/constants/seo";
import { getSiteUrl } from "@/lib/seo";
import "./globals.css";

const siteUrl = getSiteUrl();

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SyncForge",
  url: siteUrl,
  logo: `${siteUrl}/syncforge.png`,
  description: SEO_DESCRIPTION,
  email: "contato.syncforge@gmail.com",
  telephone: "+55-92-99258-4985",
  sameAs: ["https://www.instagram.com/syncforge.company/"],
  areaServed: "BR",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+55-92-99258-4985",
    email: "contato.syncforge@gmail.com",
    availableLanguage: "Portuguese",
  },
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
  title: {
    default: SEO_TITLE,
    template: "%s | SyncForge",
  },
  description: SEO_DESCRIPTION,
  applicationName: "SyncForge",
  icons: {
    icon: [
      { url: "/syncforge.svg", type: "image/svg+xml" },
      { url: "/syncforge.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
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
    "Desenvolvimento de software em Manaus",
    "Empresa de software Manaus",
    "Sistema sob medida",
    "Sistema para empresas",
    "Sistema de gestão para pequenas empresas",
    "SIGEM",
    "CRM",
    "ERP",
    "PDV",
    "OS",
    "WMS",
    "Sistemas web",
    "Automações",
    "Bots para WhatsApp",
    "Bots para Telegram",
    "Automação de atendimento",
    "Automação comercial",
    "Landing page profissional",
    "Transformação digital",
    "Desenvolvimento web",
    "Suporte de software",
    "Landing page",
    "Manaus",
    "Amazonas",
  ],
  openGraph: {
    title: {
      default: SEO_TITLE,
      template: "%s | SyncForge",
    },
    description: SEO_DESCRIPTION,
    url: siteUrl,
    siteName: "SyncForge",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: SOCIAL_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: SEO_TITLE,
      template: "%s | SyncForge",
    },
    description: SEO_DESCRIPTION,
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
        <JsonLd data={organizationStructuredData} />
        <JsonLd data={websiteStructuredData} />
        <JsonLd data={faqStructuredData} />
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
