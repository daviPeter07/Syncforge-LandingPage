"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PROCESS_NOTIFICATIONS } from "@/constants/notifications";
import { PROCESS_STEPS } from "@/constants/process";
import { NotificationCard } from "./NotificationCard";

export function Process() {
  const [active, setActive] = useState(0);
  const step = PROCESS_STEPS[active];

  return (
    <section
      id="como-trabalhamos"
      className="relative px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Nosso método"
          title={
            <>
              Sem caixa-preta. Cada projeto roda como{" "}
              <span className="text-[#4d8cff]">se fosse o nosso</span>.
            </>
          }
          description="Trabalhamos em ciclos curtos, com visibilidade total. Você acompanha o que está sendo feito, no que estamos travados e o que vem depois."
        />

        <div className="mt-16 overflow-hidden rounded-3xl border border-border/50 bg-card/40 backdrop-blur-md">
          {/* Top bar: simulação de janela */}
          <div className="flex items-center justify-between gap-3 border-b border-border/50 bg-background/40 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
              <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                syncforge / pipeline
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#28c840]" />
              em andamento
            </div>
          </div>

          {/* Pipeline horizontal — clicável */}
          <div className="border-b border-border/50 px-4 py-6 sm:px-8">
            <div className="relative grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-3 lg:grid-cols-5">
              {/* Linha de progresso */}
              <div
                aria-hidden
                className="pointer-events-none absolute top-5 left-6 right-6 hidden h-px lg:block"
                style={{
                  background:
                    "linear-gradient(to right, rgba(77,140,255,0.4), rgba(255,255,255,0.06))",
                }}
              />

              {PROCESS_STEPS.map((s, i) => {
                const isActive = i === active;
                const StepIcon = s.icon;
                return (
                  <button
                    type="button"
                    key={s.step}
                    onClick={() => setActive(i)}
                    className="group relative flex flex-col items-start text-left"
                  >
                    <div className="relative flex items-center gap-3">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "border-[#4d8cff] bg-[#4d8cff] text-[#00072d] shadow-[0_0_0_5px_rgba(77,140,255,0.18)]"
                            : "border-border/60 bg-background/60 text-muted-foreground group-hover:border-[#4d8cff]/60 group-hover:text-foreground"
                        }`}
                      >
                        <StepIcon className="size-4" />
                      </span>
                      <span
                        className={`font-mono text-[10px] tracking-[0.22em] transition-colors ${
                          isActive ? "text-[#4d8cff]" : "text-muted-foreground"
                        }`}
                      >
                        {s.step}
                      </span>
                    </div>
                    <span
                      className={`mt-3 text-sm font-semibold tracking-tight transition-colors ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {s.title}
                    </span>
                    {isActive ? (
                      <motion.span
                        layoutId="step-indicator"
                        className="mt-1.5 h-px w-8 bg-[#4d8cff]"
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Conteúdo em duas colunas */}
          <div className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
            {/* Detalhe da etapa selecionada */}
            <div className="border-b border-border/50 p-6 sm:p-8 lg:border-r lg:border-b-0">
              <Reveal>
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] tracking-[0.22em] text-[#4d8cff]">
                      ETAPA {step.step}
                    </span>
                    <span className="h-px flex-1 bg-border/40" />
                    <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
                      {String(active + 1)}/{PROCESS_STEPS.length}
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {step.description}
                  </p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {STEP_DELIVERABLES[active].map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2.5 rounded-xl border border-border/40 bg-background/40 p-3 text-sm"
                      >
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#4d8cff]" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            </div>

            {/* Painel de atividade ao vivo */}
            <div className="relative overflow-hidden p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    Atividade do projeto
                  </div>
                  <div className="mt-1 text-sm font-semibold">
                    Updates em tempo real
                  </div>
                </div>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4d8cff] opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4d8cff]" />
                </span>
              </div>

              <div className="relative mt-6 h-[400px]">
                <AnimatedList delay={1800}>
                  {PROCESS_NOTIFICATIONS.map((item, i) => (
                    <NotificationCard key={`${item.name}-${i}`} data={item} />
                  ))}
                </AnimatedList>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card via-card/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const STEP_DELIVERABLES: string[][] = [
  [
    "Reunião de kickoff",
    "Mapeamento de processos",
    "Personas e jornadas",
    "Definição de escopo",
  ],
  [
    "Cronograma e milestones",
    "Stack técnico definido",
    "Riscos mapeados",
    "KPIs do projeto",
  ],
  [
    "Wireframes navegáveis",
    "UI Kit / Design System",
    "Protótipo de alta fidelidade",
    "Validação com usuários",
  ],
  [
    "Sprints quinzenais",
    "Code review e testes",
    "Ambiente de homologação",
    "Demos semanais",
  ],
  [
    "Deploy em produção",
    "Treinamento da equipe",
    "Documentação completa",
    "Suporte e evolução",
  ],
];
