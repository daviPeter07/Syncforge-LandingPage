"use client";

import { motion, type MotionProps } from "motion/react";
import { type ElementType, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export function Terminal({ children, className }: TerminalProps) {
  return (
    <div
      className={cn(
        "z-0 h-full max-h-130 w-full max-w-2xl rounded-2xl border border-border/40 bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-xl",
        "shadow-[0_30px_120px_-20px_rgba(100,100,100,0.2)] dark:shadow-[0_30px_120px_-20px_rgba(0,0,0,0.45)] text-zinc-800 dark:text-zinc-200",
        className,
      )}
    >
      <div className="flex flex-col gap-y-2 border-b border-border/40 p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="grid gap-y-1 font-mono text-[12px] sm:text-[13px] leading-relaxed whitespace-pre-wrap break-words">
          {children}
        </code>
      </pre>
    </div>
  );
}

interface TypingProps extends MotionProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: ElementType;
}

export function TypingAnimation({
  children,
  className,
  delay = 0,
  duration = 30,
  as: Component = "span",
  ...props
}: TypingProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => {
      let i = 0;
      const id = setInterval(() => {
        if (i < children.length) {
          setDisplayed(children.slice(0, i + 1));
          i++;
        } else {
          clearInterval(id);
          setDone(true);
        }
      }, duration);
      return () => clearInterval(id);
    }, delay);
    return () => clearTimeout(start);
  }, [children, delay, duration]);

  return (
    <MotionComponent className={cn("font-mono", className)} {...props}>
      {displayed}
      {!done && (
        <span className="ml-0.5 inline-block h-3 w-1.5 animate-pulse bg-foreground/80" />
      )}
    </MotionComponent>
  );
}

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedSpan({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
      className={cn("grid font-mono text-sm tracking-tight", className)}
      {...props}
    >
      {children}
    </motion.span>
  );
}
