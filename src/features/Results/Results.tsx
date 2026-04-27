"use client";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { RESULTS } from "@/constants/results";

export function Results() {
  return (
    <section id="resultados" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Resultados"
          title={
            <>
              Números que mostram <br />
              <span className="text-[#4d8cff]">o nosso compromisso</span>
            </>
          }
          description="Métricas reais de quem trabalha com a SyncForge — e segue trabalhando."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border/50 bg-card/40 p-6 backdrop-blur-md transition-colors hover:border-[#4d8cff]/40">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#0a3499]/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-[#00072d] text-[#4d8cff]">
                    <stat.icon className="size-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    KPI {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-semibold tracking-[-0.04em]">
                    {stat.value}
                  </span>
                  {stat.suffix ? (
                    <span className="text-2xl font-semibold text-[#4d8cff]">
                      {stat.suffix}
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-3 text-base font-semibold tracking-tight">
                  {stat.label}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {stat.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
