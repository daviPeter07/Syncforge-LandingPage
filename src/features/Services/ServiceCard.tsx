"use client";

import { Reveal } from "@/components/Reveal";
import type { ServiceCategory } from "@/types/services";
import { ServiceMiniCard } from "./ServiceMiniCard";

interface ServiceCardProps {
  category: ServiceCategory;
  index: number;
  className?: string;
}

export function ServiceCard({ category, index, className }: ServiceCardProps) {
  const Icon = category.icon;

  return (
    <Reveal delay={index * 0.1}>
      <article
        className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-card/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#4d8cff]/40 lg:p-8 ${className ?? ""}`}
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
        </header>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          {category.details.longDescription}
        </p>

        <div
          className={`mt-6 grid gap-3 ${
            category.id === "software"
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1"
          }`}
        >
          {category.items.map((item) => (
            <ServiceMiniCard key={item.name} item={item} />
          ))}
        </div>
      </article>
    </Reveal>
  );
}
