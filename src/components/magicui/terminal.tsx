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
        "z-0 h-full max-h-[520px] w-full max-w-2xl rounded-2xl border border-border/60 bg-card/80 backdrop-blur-xl",
        "shadow-[0_30px_120px_-20px_rgba(10,52,153,0.45)]",
        className,
      )}
    >
      <div className="flex flex-col gap-y-2 border-b border-border/60 p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>
      </div>
      <pre className="p-4">
        <code className="grid gap-y-1 font-mono text-[13px] leading-relaxed">
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
      {!done && <span className="ml-0.5 inline-block h-3 w-1.5 animate-pulse bg-foreground/80" />}
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
