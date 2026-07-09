"use client";

import { BackToTop } from "@/components/BackToTop";
import FloatingCTABanner from "@/components/FloatingCTABanner";
import { SiteBackground } from "@/components/SiteBackground";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { ProductCard } from "./ProductCard";

const PRODUCTS = [
  {
    id: "mastermind",
    title: "Mastermind",
    description:
      "Gerencie suas finanças de forma inteligente. Uma plataforma completa para monitorar seu histórico financeiro com a conveniência de acesso rápido e total via bot no Telegram.",
    tags: ["Gestão Financeira", "Bot no Telegram", "Monitoramento"],
    imageSrc: "/products/mastermind.png",
    href: "https://mastermind-frontend-hyo7.onrender.com/",
  },
];

export default function ProductsPageContent() {
  return (
    <>
      <SiteBackground />
      <Navbar />

      <main className="relative min-h-svh">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 sm:pt-36 lg:pt-40 lg:pb-28">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[10.5px] font-medium tracking-[0.22em] text-muted-foreground uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4d8cff]" />
              PRODUTOS
            </span>

            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
              Conheça nossos <span className="text-[#4d8cff]">Produtos</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-8 text-muted-foreground sm:text-xl">
              Descubra os produtos desenvolvidos pela Syncforge para escalar
              seus resultados e otimizar sua gestão financeira e operacional.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingCTABanner />
      <BackToTop />
    </>
  );
}
