"use client";

import { FileCheck, GitBranch, Headphones, Shapes, Wallet } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const PILLARS = [
  {
    icon: FileCheck,
    title: "Contrato e escopo definidos",
    description:
      "Cada projeto começa com alinhamento claro de entregas, prazos, responsabilidades e condições. Assim, sua empresa sabe exatamente o que está contratando.",
  },
  {
    icon: Wallet,
    title: "Planos acessíveis",
    description:
      "Criamos soluções compatíveis com a realidade de pequenos e médios negócios, com propostas por etapa e opções que respeitam o momento da empresa.",
  },
  {
    icon: Headphones,
    title: "Suporte ao software",
    description:
      "Após a entrega, oferecemos suporte, correções e acompanhamento para manter o sistema funcionando com estabilidade e segurança no dia a dia.",
  },
  {
    icon: GitBranch,
    title: "Evolução contínua",
    description:
      "Seu projeto pode começar com o essencial e receber melhorias com o tempo, como novas telas, integrações, automações e recursos conforme a demanda crescer.",
  },
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4d8cff]/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Sobre"
          title={
            <>
              Soluções digitais com contrato, suporte e{" "}
              <span className="text-[#4d8cff]">planejamento claro</span>.
            </>
          }
          description="A SyncForge desenvolve softwares, páginas e soluções digitais para empresas, comércios e profissionais que precisam organizar processos, melhorar sua presença online e crescer com mais estrutura."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_1.4fr] lg:items-stretch">
          <Reveal>
            <article className="relative h-full overflow-hidden rounded-3xl border border-[#4d8cff]/20 bg-card/50 p-8 backdrop-blur-sm">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#4d8cff]/10 blur-3xl" />

              <span className="inline-flex rounded-full border border-[#4d8cff]/30 bg-[#4d8cff]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#4d8cff]">
                Como trabalhamos
              </span>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
                Desenvolvimento sob medida para negócios que precisam de clareza
                e segurança.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Antes de iniciar qualquer projeto, entendemos a necessidade do
                negócio, definimos o escopo e apresentamos uma proposta clara.
                Nosso objetivo é entregar soluções úteis, bem organizadas e
                preparadas para acompanhar a evolução da sua empresa.
              </p>

              <div className="mt-8 grid gap-3 text-sm text-muted-foreground">
                <div className="rounded-2xl border border-border/50 bg-background/40 p-4">
                  Trabalhamos com orçamento transparente, prazos combinados e
                  entregas organizadas por etapa.
                </div>

                <div className="rounded-2xl border border-border/50 bg-background/40 p-4">
                  Também oferecemos suporte e melhorias para que o software
                  continue funcionando após a entrega.
                </div>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
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
      </div>
    </section>
  );
}
