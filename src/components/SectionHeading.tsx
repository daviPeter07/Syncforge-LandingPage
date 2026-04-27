import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[10.5px] font-medium tracking-[0.22em] text-muted-foreground uppercase backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4d8cff]" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}

      <Reveal delay={0.1}>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.2}>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
