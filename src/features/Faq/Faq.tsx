"use client";

import { LifeBuoy } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQ_ITEMS } from "@/constants/faq";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { cn } from "@/utils";
import { FaqAccordion } from "./FaqAccordion";

export function Faq() {
  const { scrollToId } = useSmoothScroll();

  const categories = useMemo(() => {
    const set = new Set(FAQ_ITEMS.map((f) => f.category));
    return ["Todos", ...Array.from(set)];
  }, []);

  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((f) => f.category === active);

  return (
    <section id="ajuda" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title={
            <>
              Antes de começar um projeto,{" "}
              <span className="text-[#4d8cff]">entenda como trabalhamos</span>
            </>
          }
          description="Reunimos as principais dúvidas sobre serviços, orçamento, contrato, suporte e desenvolvimento de soluções digitais."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[280px_1fr]">
          <Reveal>
            <aside className="flex flex-col gap-2 rounded-3xl border border-border/50 bg-card/40 p-4 backdrop-blur-md">
              <div className="px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Categorias
              </div>

              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  className={cn(
                    "rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors",
                    active === category
                      ? "bg-[#0a3499]/30 text-foreground"
                      : "text-muted-foreground hover:bg-card/60 hover:text-foreground",
                  )}
                >
                  {category}
                </button>
              ))}

              <div className="mt-4 rounded-2xl border border-border/50 bg-background/30 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <LifeBuoy className="size-4 text-[#4d8cff]" />
                  Ainda tem dúvidas?
                </div>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Fale com a gente para explicar sua ideia, tirar dúvidas sobre
                  orçamento ou entender qual solução faz mais sentido.
                </p>

                <button
                  type="button"
                  onClick={() => scrollToId("#contato")}
                  className="mt-3 w-full rounded-lg bg-[#0a3499] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0e3eb8]"
                >
                  Falar com a SyncForge
                </button>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.1}>
            <FaqAccordion items={filtered} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
