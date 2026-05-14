"use client";

import { ArrowRight } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/utils";

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export const InteractiveHoverButton = forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Começar agora", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-border bg-background px-7 py-3 text-center font-semibold text-foreground transition-all",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[120]" />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
      </div>
      <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
        {text}
        <ArrowRight className="size-4" />
      </span>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
