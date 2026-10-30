"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ABOUT_LINKS,
  ABOUT_PARAGRAPHS,
  ABOUT_PILLARS,
} from "@/constants/about";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { cn } from "@/utils";

export function About() {
  const { scrollToId } = useSmoothScroll();

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      scrollToId(href);
      return;
    }

    window.location.href = href;
  };

  return (
    <section
      id="sobre"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute top-1/3 left-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#4d8cff]/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="Sobre"
            title={
              <>
                A tecnologia trabalhando{" "}
                <span className="text-[#4d8cff]">a favor do seu negócio</span>.
              </>
            }
          />

          <Reveal delay={0.15} className="lg:pt-12">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {ABOUT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              {ABOUT_LINKS.map((link, i) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavigation(link.href)}
                  className={cn(
                    "group inline-flex items-center gap-2 text-sm font-semibold transition-colors",
                    i === 0
                      ? "h-11 rounded-full bg-[#2459f5] px-6 text-white hover:bg-[#1d4bd6]"
                      : "text-foreground hover:text-[#4d8cff]",
                  )}
                >
                  {link.label}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <h3 className="mt-20 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground sm:mt-24">
            Como trabalhamos
          </h3>
        </Reveal>

        <div className="mt-6 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div className="group relative h-full border-t border-border/70 pt-6 before:absolute before:-top-px before:left-0 before:h-px before:w-0 before:bg-[#4d8cff] before:transition-all before:duration-500 hover:before:w-full">
                <span className="text-sm font-semibold text-[#2459f5] dark:text-[#4d8cff]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-3 text-lg font-semibold tracking-tight">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
