"use client";

import { motion } from "motion/react";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PROCESS_DELIVERABLES, PROCESS_STEPS } from "@/constants/process";

export function Process() {
  const [active, setActive] = useState(0);
  const step = PROCESS_STEPS[active];
  const ActiveIcon = step.icon;

  return (
    <section id="como-trabalhamos" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Como trabalhamos"
          title={
            <>
              Um processo claro do orçamento ao{" "}
              <span className="text-[#4d8cff]">suporte final</span>
            </>
          }
          description="Cada projeto passa por etapas bem definidas: entendemos a necessidade, montamos uma proposta, formalizamos o escopo e desenvolvemos a solução com acompanhamento até a entrega."
        />

        <div className="mt-16 overflow-hidden rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm sm:mt-20">
          <div className="grid items-start gap-8 text-foreground lg:grid-cols-[1fr_1.5fr]">
            <div className="flex flex-col gap-2 border-b border-border/40 px-6 py-8 sm:p-10 lg:border-b-0 lg:border-r">
              {PROCESS_STEPS.map((item, index) => {
                const isActive = index === active;
                const StepIcon = item.icon;

                return (
                  <button
                    type="button"
                    key={item.step}
                    onClick={() => setActive(index)}
                    className={`group relative flex items-center gap-5 rounded-2xl border p-4 text-left transition-all ${
                      isActive
                        ? "border-[#4d8cff]/30 bg-[#4d8cff]/10 shadow-sm"
                        : "border-transparent hover:bg-muted/50"
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
                        className={`font-mono text-xs font-medium tracking-widest ${
                          isActive ? "text-[#4d8cff]" : "text-muted-foreground"
                        }`}
                      >
                        ETAPA {item.step}
                      </div>

                      <div
                        className={`mt-1 text-base font-semibold transition-colors ${
                          isActive ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {item.title}
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

            <div className="flex flex-col justify-center px-6 py-8 sm:p-12 lg:min-h-[500px]">
              <Reveal>
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#4d8cff]/30 bg-[#4d8cff]/10 text-[#4d8cff]">
                      <ActiveIcon className="size-5" />
                    </span>

                    <span className="inline-flex h-10 items-center rounded-full border border-border/40 bg-muted/30 px-4 font-mono text-xs uppercase tracking-widest text-[#4d8cff]">
                      Fase {String(active + 1)} de {PROCESS_STEPS.length}
                    </span>
                  </div>

                  <h3 className="mt-8 text-balance text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
                    {step.title}
                  </h3>

                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {step.description}
                  </p>

                  <div className="mt-12 rounded-2xl border border-border/40 bg-background/50 p-6">
                    <h4 className="mb-4 text-sm font-semibold tracking-wide">
                      O QUE ESSA ETAPA ENTREGA
                    </h4>

                    <ul className="grid gap-3 sm:grid-cols-2">
                      {PROCESS_DELIVERABLES[active].map((deliverable) => (
                        <li
                          key={deliverable}
                          className="relative pl-6 text-sm font-medium text-muted-foreground"
                        >
                          <span className="absolute left-0 top-[7px] h-1.5 w-1.5 rounded-full bg-[#4d8cff]" />
                          {deliverable}
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
