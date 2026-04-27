"use client";

import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { FaqItem } from "@/types/faq";
import { cn } from "@/lib/utils";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
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
              className="flex w-full items-center gap-4 px-5 py-4 text-left"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground">
                {isOpen ? (
                  <Minus className="size-4 text-[#4d8cff]" />
                ) : (
                  <Plus className="size-4" />
                )}
              </span>
              <div className="flex-1">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#4d8cff]/80">
                  {item.category}
                </span>
                <h3 className="text-sm font-semibold tracking-tight sm:text-base">
                  {item.question}
                </h3>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 pl-[calc(20px+32px+16px)] text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
