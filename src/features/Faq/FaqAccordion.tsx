"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import type { FaqItem } from "@/types/faq";
import { cn } from "@/utils";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-2.5 sm:gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <article
            key={item.question}
            className={cn(
              "overflow-hidden rounded-2xl border bg-card/40 backdrop-blur-sm transition-colors",
              isOpen
                ? "border-[#4d8cff]/40 bg-card/60"
                : "border-border/50 hover:border-[#4d8cff]/20",
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-3 px-4 py-3.5 text-left sm:gap-4 sm:px-5 sm:py-4"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground transition-all sm:size-8">
                {isOpen ? (
                  <Minus className="size-4 text-[#4d8cff]" />
                ) : (
                  <Plus className="size-4" />
                )}
              </span>
              <div className="flex-1">
                <span className="mb-1 hidden text-[10px] font-medium uppercase tracking-[0.2em] text-[#4d8cff]/80 sm:block">
                  {item.category}
                </span>
                <h3 className="text-sm font-semibold tracking-tight sm:text-base">
                  {item.question}
                </h3>
              </div>
            </button>

            {/* Otimização de Performance: Usando CSS Grid em vez de framer-motion com 'height: auto' para evitar layout thrashing */}
            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0 pointer-events-none",
              )}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 pl-[calc(16px+28px+12px)] text-sm leading-relaxed text-muted-foreground sm:px-5 sm:pb-5 sm:pl-[calc(20px+32px+16px)]">
                  {item.answer}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
