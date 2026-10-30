"use client";

import { LifeBuoy } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQ_ITEMS } from "@/constants/faq";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { cn } from "@/utils";
import { FaqAccordion } from "./FaqAccordion";

function FaqHelp({
  onContact,
  className,
}: {
  onContact: () => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/50 bg-background/30 p-4",
        className,
      )}
    >
      <div className="flex items-center gap-2 text-sm font-semibold">
        <LifeBuoy className="size-4 text-[#4d8cff]" />
        Ainda tem dúvidas?
      </div>

      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
        Fale com a gente sobre a sua ideia ou sobre orçamento.
      </p>

      <button
        type="button"
        onClick={onContact}
        className="mt-3 w-full rounded-lg bg-[#0a3499] px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#0e3eb8]"
      >
        Falar com a SyncForge
      </button>
    </div>
  );
}

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

  const goToContact = () => scrollToId("#contato");

  return (
    <section id="ajuda" className="relative px-6 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title={
            <>
              Tire suas dúvidas{" "}
              <span className="text-[#4d8cff]">antes de começar</span>
            </>
          }
          description="Respostas rápidas para as perguntas que mais recebemos."
        />

        <div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-6 sm:mt-16 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">
          <Reveal>
            <aside className="lg:rounded-3xl lg:border lg:border-border/50 lg:bg-card/40 lg:p-4 lg:backdrop-blur-md">
              <div className="hidden px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground lg:block">
                Categorias
              </div>

              <div className="-mx-6 flex gap-2 overflow-x-auto px-6 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:px-0 [&::-webkit-scrollbar]:hidden">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActive(category)}
                    className={cn(
                      "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors lg:rounded-xl lg:border-transparent lg:px-3 lg:text-left",
                      active === category
                        ? "border-[#4d8cff]/40 bg-[#4d8cff]/15 text-foreground lg:bg-[#0a3499]/30"
                        : "border-border/60 text-muted-foreground hover:bg-card/60 hover:text-foreground",
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <FaqHelp
                onContact={goToContact}
                className="mt-4 hidden lg:block"
              />
            </aside>
          </Reveal>

          <Reveal delay={0.1}>
            <FaqAccordion items={filtered} />
            <FaqHelp onContact={goToContact} className="mt-6 lg:hidden" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
