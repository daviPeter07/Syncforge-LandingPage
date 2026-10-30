"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Reveal } from "@/components/Reveal";
import { AVATAR_URLS } from "@/constants/clients";
import { CONTACT_WHATSAPP_HREF } from "@/constants/contact";
import { HERO_ANNOUNCEMENT, HERO_TRUST_TEXT } from "@/constants/hero";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  const { scrollToId } = useSmoothScroll();

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center overflow-x-clip px-6 pt-28 pb-24 lg:pt-32"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Reveal>
            <button
              type="button"
              onClick={() => scrollToId(HERO_ANNOUNCEMENT.href)}
              className="group inline-flex items-center gap-2 rounded-full border border-[#4d8cff]/30 bg-card/60 py-1 pr-3 pl-1 text-xs text-muted-foreground backdrop-blur-sm transition-colors hover:border-[#4d8cff]/60 hover:text-foreground sm:text-sm"
            >
              <span className="rounded-full bg-[#4d8cff] px-2.5 py-0.5 text-xs font-semibold text-white">
                {HERO_ANNOUNCEMENT.label}
              </span>
              <span className="sm:hidden">{HERO_ANNOUNCEMENT.shortText}</span>
              <span className="hidden sm:inline">{HERO_ANNOUNCEMENT.text}</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:leading-[1.05] xl:text-[3.6rem]">
              Sistemas e sites que tiram o seu negócio{" "}
              <span className="bg-linear-to-r from-[#18181b] via-[#4d8cff] to-[#4d8cff] bg-clip-text text-transparent dark:from-white dark:via-[#9ec0ff]">
                do improviso
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Vendas, estoque, contas e clientes organizados em um só lugar.
              Você conta como funciona a sua empresa e a gente cria a solução,
              explicando tudo de forma simples.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="w-full sm:w-auto">
            <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center lg:justify-start">
              <InteractiveHoverButton
                text="Começar meu projeto"
                className="h-12 w-full border-[#4d8cff]/50 px-8 py-0 text-sm sm:w-auto shadow-[0_0_40px_rgba(77,140,255,0.25)]"
                onClick={() => {
                  window.location.href = "/consulta";
                }}
              />

              <a
                href={CONTACT_WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border/70 bg-card/50 px-6 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/10"
              >
                <WhatsappIcon className="size-4 text-emerald-500" />
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex items-center gap-4">
              <AvatarCircles avatarUrls={AVATAR_URLS} />
              <p className="text-left text-sm text-muted-foreground">
                {HERO_TRUST_TEXT}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="flex justify-center">
          {/* O visual tem 440px fixos (raios da órbita em px); a caixa externa
              reserva o tamanho já escalado para não estourar o grid. */}
          <div className="relative size-[300px] sm:size-[400px] lg:size-[440px]">
            <HeroVisual className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.68] sm:scale-[0.91] lg:scale-100" />
          </div>
        </Reveal>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToId("#sobre")}
        aria-label="Rolar para a próxima seção"
        animate={{ y: [0, 8, 0], opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 cursor-pointer items-center justify-center text-[#4d8cff] transition-colors hover:text-[#9ec0ff] sm:flex"
      >
        <ChevronDown className="size-7" />
      </motion.button>
    </section>
  );
}
