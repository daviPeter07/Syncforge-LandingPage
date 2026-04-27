"use client";

import { GitBranch, Headphones, Shapes, Wallet } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const PILLARS = [
  {
    icon: Shapes,
    title: "Tudo num time só",
    description:
      "Software, vídeo e design moram debaixo do mesmo teto. Você fala com um responsável — não com três fornecedores diferentes.",
  },
  {
    icon: GitBranch,
    title: "Versão por versão",
    description:
      "Demos quinzenais, código aberto pra você acompanhar e arquivos sempre na sua mão. Sem refém, sem caixa-preta.",
  },
  {
    icon: Wallet,
    title: "Orçamento honesto",
    description:
      "Escopo fechado por etapa. O que sair do combinado é discutido antes — não vira surpresa na fatura.",
  },
  {
    icon: Headphones,
    title: "A gente fica depois",
    description:
      "Pós-entrega não é fim de relação. Suporte, ajustes e novas demandas continuam com a mesma equipe que construiu.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Sobre"
          title={
            <>
              Studio de produto enxuto, com{" "}
              <span className="text-[#4d8cff]">cara de time interno</span>.
            </>
          }
          description="Somos um grupo pequeno por escolha. Cada projeto passa por gente sênior, da reunião inicial ao deploy. Esse é o jeito que a gente entende qualidade."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => {
            const PillarIcon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-[#4d8cff]/40 hover:bg-card/60">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-[#00072d] text-[#4d8cff] transition-colors group-hover:border-[#4d8cff]/40">
                    <PillarIcon className="size-5" />
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
