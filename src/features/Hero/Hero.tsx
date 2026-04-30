"use client";

import { Sparkles } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import CountUp from "@/components/reactbits/count-up";
import { Reveal } from "@/components/Reveal";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { HeroTerminal } from "./HeroTerminal";

export function Hero() {
  const { scrollToId } = useSmoothScroll();

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center px-6 pt-32 pb-20 lg:pt-40"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <Reveal>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3.5 py-1.5 backdrop-blur-sm">
              <Sparkles className="size-3.5 text-[#4d8cff]" />
              <span className="text-[10.5px] font-medium tracking-[0.22em] text-muted-foreground uppercase">
                Software sob medida
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.05]">
              Sistemas e soluções digitais para negócios que precisam{" "}
              <span className="bg-gradient-to-r from-[#18181b] via-[#4d8cff] to-[#4d8cff] bg-clip-text text-transparent dark:from-white dark:via-[#9ec0ff]">
                sair do improviso
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              <TypingAnimation duration={18}>
                Desenvolvemos softwares, landing pages e sistemas web para
                empresas, comércios e profissionais que querem organizar
                processos, vender melhor e crescer com mais controle.
              </TypingAnimation>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <InteractiveHoverButton
                text="Começar projeto"
                onClick={() => scrollToId("#contato")}
              />

              <button
                type="button"
                onClick={() => scrollToId("#servicos")}
                className="text-sm font-semibold tracking-[0.04em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Ver serviços →
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          y={40}
          className="flex justify-center lg:justify-end"
        >
          <HeroTerminal />
        </Reveal>
      </div>
    </section>
  );
}
