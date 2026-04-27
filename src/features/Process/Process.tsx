"use client";

import { AnimatedList } from "@/components/magicui/animated-list";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PROCESS_NOTIFICATIONS } from "@/constants/notifications";
import { PROCESS_STEPS } from "@/constants/process";
import { NotificationCard } from "./NotificationCard";

export function Process() {
  return (
    <section
      id="como-trabalhamos"
      className="relative px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Como trabalhamos"
          title={
            <>
              Um processo claro,{" "}
              <span className="text-[#4d8cff]">do briefing à entrega</span>
            </>
          }
          description="Nada de surpresas no meio do caminho: cada etapa é validada com você antes de seguir adiante."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* Etapas */}
          <div className="flex flex-col gap-3">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.06}>
                <article className="group relative flex items-start gap-4 rounded-2xl border border-border/50 bg-card/40 p-5 backdrop-blur-sm transition-colors hover:border-[#4d8cff]/40 hover:bg-card/60">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon className="size-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs tracking-widest text-[#4d8cff]">
                        {step.step}
                      </span>
                      <span className="h-px flex-1 bg-border/40" />
                      <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
                        Etapa
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Animated list mock */}
          <Reveal delay={0.2}>
            <div className="relative flex h-full min-h-[480px] flex-col overflow-hidden rounded-3xl border border-border/50 bg-card/40 p-6 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Live updates
                  </div>
                  <div className="mt-1 text-base font-semibold">
                    Acompanhe seu projeto em tempo real
                  </div>
                </div>
                <div className="flex h-2.5 w-2.5 items-center justify-center">
                  <span className="h-2.5 w-2.5 animate-ping rounded-full bg-[#4d8cff]" />
                  <span className="absolute h-2 w-2 rounded-full bg-[#4d8cff]" />
                </div>
              </div>

              <div className="relative mt-6 flex-1">
                <AnimatedList delay={1800}>
                  {PROCESS_NOTIFICATIONS.map((item, i) => (
                    <NotificationCard
                      key={`${item.name}-${i}`}
                      data={item}
                    />
                  ))}
                </AnimatedList>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
