"use client";

import { useState } from "react";
import { BackToTop } from "@/components/BackToTop";
import FloatingCTABanner from "@/components/FloatingCTABanner";
import { SiteBackground } from "@/components/SiteBackground";
import { SERVICES } from "@/constants/services";
import type { ServiceCategory } from "@/types/services";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import SelectFilter from "./SelectFilter";
import { ServiceCardGrid } from "./ServiceGrid";

export default function ServicePageContent() {
  const [selectedCategory, setSelectedCategory] = useState<
    ServiceCategory | "all"
  >("all");

  const filteredServices =
    selectedCategory === "all"
      ? SERVICES
      : SERVICES.filter((service) => service.category === selectedCategory);

  return (
    <>
      <SiteBackground />
      <Navbar />

      <main className="relative min-h-svh">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 sm:pt-36 lg:pt-40 lg:pb-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[10.5px] font-medium tracking-[0.22em] text-muted-foreground uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4d8cff]" />
              SERVIÇOS
            </span>

            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
              Seu negócio com mais presença, gestão e{" "}
              <span className="text-[#4d8cff]">resultado digital</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-8 text-muted-foreground sm:text-xl">
              Criamos soluções sob medida para negócios que querem organizar
              processos, vender melhor e fortalecer sua presença digital.
            </p>
          </div>

          <SelectFilter
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          />
          <ServiceCardGrid services={filteredServices} />
        </div>
      </main>

      <Footer />
      <FloatingCTABanner />
      <BackToTop />
    </>
  );
}
