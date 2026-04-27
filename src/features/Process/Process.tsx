"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PROCESS_STEPS } from "@/constants/process";

export function Process() {
  const [active, setActive] = useState(0);
  const step = PROCESS_STEPS[active];

  return (
    <section id="como-trabalhamos" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Nosso método"
          title={
            <>
              Trabalho <span className="text-[#4d8cff]">humano</span> e
              transparente
            </>
          }
          description="Acreditamos que a tecnologia deve servir às pessoas. Nosso processo é desenhado para não ter caixas-pretas: você acompanha cada etapa, sabe exatamente onde estamos e o que estamos construindo juntos."
        />

        <div className="mt-16 overflow-hidden rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm sm:mt-20">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 text-foreground items-start">
            {/* Coluna da Esquerda: Abas Limpas */}
            <div className="flex flex-col border-b border-border/40 lg:border-b-0 lg:border-r px-6 py-8 sm:p-10 gap-2">
              {PROCESS_STEPS.map((s, i) => {
                const isActive = i === active;
                const StepIcon = s.icon;
                return (
                  <button
                    type="button"
                    key={s.step}
                    onClick={() => setActive(i)}
                    className={`group relative flex items-center gap-5 rounded-2xl p-4 text-left transition-all ${
                      isActive
                        ? "bg-[#4d8cff]/10 border border-[#4d8cff]/30 shadow-sm"
                        : "hover:bg-muted/50 border border-transparent"
                    }`}
                  >
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isActive
                          ? "bg-[#4d8cff] text-[#00072d]"
                          : "bg-muted/80 text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      <StepIcon className="size-5" />
                    </span>
                    <div>
                      <div
                        className={`font-mono text-xs font-medium tracking-widest ${isActive ? "text-[#4d8cff]" : "text-muted-foreground"}`}
                      >
                        ETAPA {s.step}
                      </div>
                      <div
                        className={`mt-1 text-base font-semibold ${isActive ? "text-foreground" : "text-muted-foreground"} transition-colors`}
                      >
                        {s.title}
                      </div>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="active-indicator-process"
                        className="absolute inset-y-0 right-0 w-1 rounded-r-2xl bg-[#4d8cff]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Coluna da Direita: Conteúdo Claro e Humano */}
            <div className="flex flex-col justify-center px-6 py-8 sm:p-12 lg:min-h-[500px]">
              <Reveal>
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="inline-flex h-10 items-center rounded-full border border-border/40 bg-muted/30 px-4 font-mono text-xs uppercase tracking-widest text-[#4d8cff]">
                    Fase {String(active + 1)} de {PROCESS_STEPS.length}
                  </span>

                  <h3 className="mt-8 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl text-balance">
                    {step.title}
                  </h3>

                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {step.description}
                  </p>

                  {/* Entregáveis simplificados para maior clareza humana */}
                  <div className="mt-12 rounded-2xl border border-border/40 bg-background/50 p-6">
                    <h4 className="font-semibold text-sm tracking-wide mb-4">
                      O QUE ISSO SIGNIFICA NA PRÁTICA:
                    </h4>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {STEP_DELIVERABLES[active].map((d) => (
                        <li
                          key={d}
                          className="relative pl-6 text-sm text-muted-foreground font-medium"
                        >
                          <span className="absolute left-0 top-[7px] h-1.5 w-1.5 rounded-full bg-[#4d8cff]" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const STEP_DELIVERABLES: string[][] = [
  [
    "Conversas francas (Kickoff)",
    "Entendimento real do seu negócio",
    "Desenho de perfis do usuário",
    "Definindo limites e objetivos",
  ],
  [
    "Acordo de prazos claros",
    "Escolhendo as ferramentas ideais",
    "Mapeando o que pode dar errado",
    "Decidindo como medir sucesso",
  ],
  [
    "Designs que você pode testar",
    "Sistema visual para a marca",
    "Protótipos quase reais",
    "Visão de usuários reais",
  ],
  [
    "Pequenos ciclos entregáveis",
    "Revisões feitas por humanos",
    "Ambiente seguro para testes",
    "Vídeos semanais das novidades",
  ],
  [
    "Lançamento seguro ao público",
    "Vídeo tutorial para equipe",
    "Documentação fácil de ler",
    "Nós não sumimos depois!",
  ],
];
