"use client";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import {
  TECHNOLOGIES_ROW_1,
  TECHNOLOGIES_ROW_2,
} from "@/constants/technologies";

function TechRowText(items: { name: string }[]) {
  return items.map((t) => t.name).join("  ·  ");
}

export function Technologies() {
  return (
    <section
      id="tecnologias"
      className="relative overflow-hidden px-0 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Tecnologias"
          title={
            <>
              Stack moderno para entregar{" "}
              <span className="text-[#4d8cff]">sem retrabalho</span>
            </>
          }
          description="Trabalhamos com ferramentas líderes do mercado, escolhidas com base em escala, manutenção e experiência do usuário."
        />
      </div>

      <Reveal delay={0.2}>
        <div className="relative mt-16 flex flex-col gap-2">
          <VelocityScroll
            defaultVelocity={2}
            numRows={1}
            className="text-balance text-4xl font-semibold tracking-[-0.02em] text-foreground/90 sm:text-5xl lg:text-6xl"
          >
            {`  ${TechRowText(TECHNOLOGIES_ROW_1)}  ·  `}
          </VelocityScroll>
          <VelocityScroll
            defaultVelocity={-2}
            numRows={1}
            className="text-balance text-4xl font-semibold tracking-[-0.02em] text-muted-foreground/70 sm:text-5xl lg:text-6xl"
          >
            {`  ${TechRowText(TECHNOLOGIES_ROW_2)}  ·  `}
          </VelocityScroll>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent" />
        </div>
      </Reveal>
    </section>
  );
}
