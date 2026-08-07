import { Quote } from "lucide-react";
import type { Testimonial } from "@/types/clients";
import { cn } from "@/utils";

interface TestimonialCardProps {
  data: Testimonial;
}

export function TestimonialCard({ data }: TestimonialCardProps) {
  const IconComponent = data.icon;

  return (
    <a
      href={data.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visitar o site da ${data.name}`}
      className="group/testimonial block w-80 shrink-0 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#4d8cff] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <figure
        className={cn(
          "relative h-full cursor-pointer overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-5 backdrop-blur-md",
          "transition-colors group-hover/testimonial:border-[#4d8cff]/40 group-hover/testimonial:bg-card/80",
        )}
      >
        <Quote className="absolute right-4 top-4 size-6 text-[#0a3499]/60" />
        <div className="flex items-center gap-3">
          {IconComponent ? (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/60 bg-orange-500/10">
              <IconComponent
                className={cn("size-5", data.iconClass || "text-orange-600")}
              />
            </div>
          ) : (
            <img
              className={cn(
                "h-10 w-10 shrink-0 rounded-full border border-border/60 object-cover",
                data.avatarPosition === "top" && "object-top",
              )}
              width={40}
              height={40}
              alt={data.name}
              src={data.avatar}
            />
          )}
          <div className="min-w-0">
            <figcaption className="truncate text-sm font-semibold text-[#7da8ff] underline decoration-[#4d8cff]/40 underline-offset-4 transition-colors group-hover/testimonial:text-[#9ec0ff] group-hover/testimonial:decoration-[#4d8cff]">
              {data.name}
            </figcaption>
            <p className="truncate text-[10px] text-muted-foreground">
              {data.name === data.company
                ? data.role || data.company
                : `${data.role} · ${data.company}`}
            </p>
          </div>
        </div>
        <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {data.message}
        </blockquote>
      </figure>
    </a>
  );
}
