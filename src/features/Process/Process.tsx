import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PROCESS_STEPS } from "@/constants/process";
import { cn } from "@/utils";

export function Process() {
  return (
    <section
      id="como-trabalhamos"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-[58%] -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#4d8cff]/10 blur-3xl sm:h-[480px] sm:w-[480px]"
      />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Como trabalhamos"
          title={
            <>
              Um caminho claro para transformar ideias em{" "}
              <span className="text-[#4d8cff]">soluções reais</span>
            </>
          }
          description="Do primeiro contato ao suporte, você acompanha como organizamos cada projeto com transparência, colaboração e decisões bem definidas."
        />

        <Reveal delay={0.15}>
          <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#4d8cff]/15 bg-[#00072d] shadow-[0_24px_80px_rgba(0,7,45,0.2)] sm:mt-20">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <div aria-hidden className="flex gap-1.5">
                  <span className="size-2 rounded-full bg-[#4d8cff]" />
                  <span className="size-2 rounded-full bg-[#4d5fa3]" />
                  <span className="size-2 rounded-full bg-[#b8c2e0]" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.16em] text-[#b8c2e0] uppercase sm:text-xs">
                  Fluxo de trabalho
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.12em] text-[#b8c2e0]/70 uppercase sm:text-[10px]">
                <span className="size-1.5 rounded-full bg-[#4d8cff] shadow-[0_0_10px_#4d8cff]" />
                5 etapas
              </div>
            </div>

            <div className="relative px-4 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(143,184,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(143,184,255,0.09) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                  maskImage:
                    "radial-gradient(ellipse at center, black 10%, transparent 76%)",
                }}
              />
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0c3499]/25 blur-[100px] sm:size-[520px]"
              />

              <div className="relative z-10 mx-auto max-w-5xl">
                <div className="mb-12 max-w-xl pl-12 sm:pl-16 lg:mx-auto lg:pl-0 lg:text-center">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[#8fb8ff] uppercase sm:text-[10px]">
                    Da conversa à evolução
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    É assim que construímos juntos.
                  </h3>
                </div>

                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-[#4d8cff]/20 via-[#4d8cff] to-[#4d8cff]/20 lg:left-1/2 lg:-translate-x-1/2"
                  />

                  <ol>
                    {PROCESS_STEPS.map((step, index) => {
                      const StepIcon = step.icon;
                      const isLeft = index % 2 === 0;

                      return (
                        <li
                          key={step.step}
                          className="relative flex items-center pb-10 last:pb-0 sm:pb-12"
                        >
                          <span
                            aria-hidden
                            className="absolute left-5 top-1/2 h-px w-7 -translate-y-1/2 bg-[#4d8cff]/35 lg:hidden"
                          />
                          <span
                            aria-hidden
                            className={cn(
                              "absolute top-1/2 hidden h-px w-12 -translate-y-1/2 bg-[#4d8cff]/35 lg:block",
                              isLeft ? "right-1/2" : "left-1/2",
                            )}
                          />
                          <span className="absolute left-5 top-1/2 z-20 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[4px] border-[#00072d] bg-[#4d8cff] shadow-[0_0_0_1px_rgba(143,184,255,0.35),0_0_20px_rgba(77,140,255,0.45)] lg:left-1/2" />

                          <article
                            className={cn(
                              "ml-12 w-[calc(100%-3rem)] rounded-2xl border border-[#4d8cff]/20 bg-[#051650]/75 p-5 shadow-[0_14px_45px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:ml-16 sm:w-[calc(100%-4rem)] sm:p-6 lg:ml-0 lg:w-[calc(50%-3rem)]",
                              isLeft ? "lg:mr-auto" : "lg:ml-auto",
                            )}
                          >
                            <div className="flex items-center justify-between gap-4">
                              <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.16em] text-[#8fb8ff] uppercase sm:text-[10px]">
                                <StepIcon
                                  className="size-4"
                                  strokeWidth={1.8}
                                />
                                Etapa {step.step}
                              </span>
                              <span className="font-mono text-[9px] text-[#b8c2e0]/45">
                                {String(index + 1).padStart(2, "0")} / 05
                              </span>
                            </div>

                            <h4 className="mt-4 text-lg font-semibold tracking-tight text-white sm:text-xl">
                              {step.title}
                            </h4>
                            <p className="mt-2 text-sm leading-relaxed text-[#b8c2e0]">
                              {step.description}
                            </p>

                            <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                              {step.deliverables.map((deliverable) => (
                                <li
                                  key={deliverable}
                                  className="flex items-start gap-3 text-xs leading-relaxed text-[#b8c2e0]/85 sm:text-sm"
                                >
                                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#4d8cff]" />
                                  {deliverable}
                                </li>
                              ))}
                            </ul>
                          </article>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
