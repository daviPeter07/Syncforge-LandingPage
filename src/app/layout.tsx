import type { Metadata, Viewport } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

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
  title: "SyncForge | Software, Design e Vídeo sob medida",
  description:
    "A SyncForge entrega software (CRM, ERP, PDV, OS, WMS), edição de vídeo e design para empresas e creators que querem crescer com qualidade.",
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
    type: "website",
    locale: "pt_BR",
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
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={["light", "dark"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
