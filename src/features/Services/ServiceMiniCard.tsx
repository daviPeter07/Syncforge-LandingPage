"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import type { ServiceItem } from "@/types/services";

interface ServiceMiniCardProps {
  item: ServiceItem;
}

export function ServiceMiniCard({ item }: ServiceMiniCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border/40 bg-background/40 transition-colors duration-75 ease-out ${
        open
          ? "border-[#4d8cff]/50 bg-card/55"
          : "hover:border-[#4d8cff]/30 hover:bg-card/55"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start gap-3 px-4 py-3 text-left"
      >
        <ChevronRight
          className={`mt-0.5 size-4 shrink-0 text-[#4d8cff] transition-transform duration-75 ease-out ${
            open ? "rotate-90" : ""
          }`}
        />
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold tracking-tight">
            {item.name}
          </div>
          <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {item.description}
          </div>
        </div>
      </button>

      <div
        className={`grid overflow-hidden px-4 transition-[grid-template-rows,opacity,padding] duration-100 ease-out ${
          open
            ? "grid-rows-[1fr] pb-4 opacity-100"
            : "grid-rows-[0fr] pb-0 opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden border-t border-border/30 pt-3 text-xs leading-relaxed text-muted-foreground">
          {item.expandedDescription}
        </div>
      </div>
    </div>
  );
}
