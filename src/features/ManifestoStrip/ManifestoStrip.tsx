"use client";

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const PHRASES = [
  "Software sob medida",
  "Vídeo que vende",
  "Marcas inesquecíveis",
  "Sem caixa-preta",
  "Entrega no prazo",
  "Operação que aguenta",
];

/**
 * Faixa de manifesto entre seções — usa o ScrollVelocity da MagicUI
 * para criar um movimento orgânico orientado pelo scroll.
 */
export function ManifestoStrip() {
  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-border/40 bg-background/30 py-10 backdrop-blur-sm"
    >
      <VelocityScroll
        defaultVelocity={2}
        numRows={1}
        className="font-sans text-3xl font-semibold tracking-[-0.02em] text-foreground/80 sm:text-5xl md:text-6xl"
      >
        {PHRASES.join("  ·  ") + "  ·  "}
      </VelocityScroll>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
}
