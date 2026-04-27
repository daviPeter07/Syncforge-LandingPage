"use client";

import { Sparkles } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { TypingAnimation } from "@/components/magicui/typing-animation";
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
                Studio Digital
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.05]">
              Sincronize{" "}
              <span className="bg-gradient-to-r from-white via-[#9ec0ff] to-[#4d8cff] bg-clip-text text-transparent">
                marca, software e conteúdo
              </span>{" "}
              em um único lugar.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              <TypingAnimation duration={28}>
                Software sob medida, edição de vídeo e design para empresas e clientes finais que querem crescer com qualidade.
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

          <Reveal delay={0.5}>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border/40 pt-6">
              <div>
                <div className="text-2xl font-semibold tracking-tight">120+</div>
                <div className="text-xs text-muted-foreground">Projetos</div>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight">60+</div>
                <div className="text-xs text-muted-foreground">Clientes</div>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight">98%</div>
                <div className="text-xs text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={40} className="flex justify-center lg:justify-end">
          <HeroTerminal />
        </Reveal>
      </div>
    </section>
  );
}
