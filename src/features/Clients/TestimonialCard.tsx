import { Quote } from "lucide-react";
import type { Testimonial } from "@/types/clients";
import { cn } from "@/utils";

interface TestimonialCardProps {
  data: Testimonial;
}

export function TestimonialCard({ data }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "relative w-80 shrink-0 cursor-default overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-5 backdrop-blur-md",
        "hover:border-[#4d8cff]/40 hover:bg-card/80 transition-colors",
      )}
    >
      <Quote className="absolute right-4 top-4 size-6 text-[#0a3499]/60" />
      <div className="flex items-center gap-3">
        <img
          className="h-10 w-10 rounded-full border border-border/60 object-cover"
          width={40}
          height={40}
          alt={data.name}
          src={data.avatar}
        />
        <div className="min-w-0">
          <figcaption className="truncate text-sm font-semibold">
            {data.name}
          </figcaption>
          <p className="truncate text-xs text-muted-foreground">
            {data.role} · {data.company}
          </p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {data.message}
      </blockquote>
    </figure>
  );
}
