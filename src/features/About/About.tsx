"use client";

import { Layers, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const PILLARS = [
  {
    icon: Sparkles,
    title: "Criativo",
    description:
      "Soluções fora da caixa que combinam design, tecnologia e estratégia em cada entrega.",
  },
  {
    icon: ShieldCheck,
    title: "Confiável",
    description:
      "Processos maduros, contratos claros e qualidade técnica em cada linha de código.",
  },
  {
    icon: Layers,
    title: "Integrado",
    description:
      "Software, vídeo e design conversando entre si em uma única narrativa de marca.",
  },
  {
    icon: Zap,
    title: "Ágil",
    description:
      "Sprints curtos, entregas constantes e foco no que realmente gera resultado.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Sobre nós"
          title={
            <>
              Uma forja digital para empresas e creators que{" "}
              <span className="text-[#4d8cff]">querem mais</span>
            </>
          }
          description="A SyncForge nasceu para conectar áreas que normalmente vivem isoladas: software, design e audiovisual. Trabalhamos como um único time integrado, do conceito à execução."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-[#4d8cff]/40 hover:bg-card/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-[#00072d] text-[#4d8cff] transition-colors group-hover:border-[#4d8cff]/40">
                  <pillar.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#4d8cff]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
