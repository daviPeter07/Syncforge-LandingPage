"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronRight, Clock, Plus, Tag } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import type { ServiceCategory } from "@/types/services";

interface ServiceCardProps {
  category: ServiceCategory;
  index: number;
}

export function ServiceCard({ category, index }: ServiceCardProps) {
  const [open, setOpen] = useState(false);
  const Icon = category.icon;
  const { scrollToId } = useSmoothScroll();

  return (
    <Reveal delay={index * 0.1}>
      <article
        className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-card/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#4d8cff]/40 lg:p-8 ${
          open
            ? "border-[#4d8cff]/50 shadow-[0_0_0_1px_rgba(77,140,255,0.15)]"
            : ""
        }`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-[#0a3499]/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />

        <header className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-[#00072d] text-[#4d8cff]">
              <Icon className="size-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                {category.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {category.subtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Recolher detalhes" : "Ver detalhes"}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border/60 bg-background/60 text-muted-foreground transition-colors hover:border-[#4d8cff]/40 hover:text-foreground"
          >
            <Plus
              className={`size-4 transition-transform duration-300 ${
                open ? "rotate-45" : ""
              }`}
            />
          </button>
        </header>

        <ul className="mt-6 grid grid-cols-1 gap-2.5">
          {category.items.map((item) => (
            <li
              key={item.name}
              className="flex items-start gap-3 rounded-xl border border-border/40 bg-background/40 p-3 transition-colors hover:border-[#4d8cff]/30 hover:bg-card/60"
            >
              <ChevronRight className="mt-0.5 size-4 shrink-0 text-[#4d8cff]" />
              <div className="min-w-0">
                <div className="text-sm font-semibold tracking-tight">
                  {item.name}
                </div>
                <div className="text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-5 border-t border-border/40 pt-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {category.details.longDescription}
                </p>

                <div>
                  <h4 className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-[#4d8cff]">
                    O que entregamos
                  </h4>
                  <ul className="mt-3 grid gap-2">
                    {category.details.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2.5 text-sm text-foreground/90"
                      >
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#4d8cff]" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/50 px-3 py-2.5">
                    <Clock className="size-3.5 text-[#4d8cff]" />
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        Tempo médio
                      </div>
                      <div className="font-medium">
                        {category.details.averageTime}
                      </div>
                    </div>
                  </div>
                  {category.details.startingPrice ? (
                    <div className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/50 px-3 py-2.5">
                      <Tag className="size-3.5 text-[#4d8cff]" />
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          Investimento
                        </div>
                        <div className="font-medium">
                          {category.details.startingPrice}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>

                <button
                  type="button"
                  onClick={() => scrollToId("#contato")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#4d8cff] px-4 py-2.5 text-sm font-semibold text-[#00072d] transition-colors hover:bg-[#7aa9ff]"
                >
                  Conversar sobre {category.title.toLowerCase()}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!open ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-6 inline-flex items-center justify-center gap-1.5 self-start text-xs font-semibold tracking-[0.04em] text-[#4d8cff] transition-colors hover:text-[#7aa9ff]"
          >
            Ver detalhes <ChevronRight className="size-3.5" />
          </button>
        ) : null}
      </article>
    </Reveal>
  );
}
