"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Reveal } from "@/components/Reveal";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function Hero() {
  const { scrollToId } = useSmoothScroll();

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center px-6 pt-32 pb-20 lg:pt-40"
    >
      <div className="mx-auto w-full max-w-5xl text-center">
        <div className="flex flex-col items-center">
          <Reveal delay={0.1}>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.05]">
              Sistemas e soluções digitais para negócios que precisam{" "}
              <span className="bg-linear-to-r from-[#18181b] via-[#4d8cff] to-[#4d8cff] bg-clip-text text-transparent dark:from-white dark:via-[#9ec0ff]">
                sair do improviso
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              <TypingAnimation duration={18}>
                Desenvolvemos softwares, landing pages e sistemas web para
                empresas, comércios e profissionais que querem organizar
                processos, vender melhor e crescer com mais controle.
              </TypingAnimation>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <InteractiveHoverButton
                text="Começar projeto"
                onClick={() => scrollToId("#contato")}
              />

              <button
                type="button"
                onClick={() => {
                  window.location.href = "/produtos";
                }}
                className="text-sm font-semibold tracking-[0.04em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Ver produtos →
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToId("#sobre")}
        aria-label="Rolar para a próxima seção"
        animate={{ y: [0, 8, 0], opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 cursor-pointer items-center justify-center text-[#4d8cff] transition-colors hover:text-[#9ec0ff]"
      >
        <ChevronDown className="size-7" />
      </motion.button>
    </section>
  );
}
