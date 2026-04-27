"use client";

import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { ServiceCategory } from "@/types/services";

interface ServiceCardProps {
  category: ServiceCategory;
  index: number;
}

export function ServiceCard({ category, index }: ServiceCardProps) {
  const Icon = category.icon;

  return (
    <Reveal delay={index * 0.1}>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-card/40 p-6 backdrop-blur-md transition-colors hover:border-[#4d8cff]/40 lg:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-[#0a3499]/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />

        <header className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-[#00072d] text-[#4d8cff]">
            <Icon className="size-5" />
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              {category.title}
            </h3>
            <p className="text-xs text-muted-foreground">{category.subtitle}</p>
          </div>
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
      </article>
    </Reveal>
  );
}
