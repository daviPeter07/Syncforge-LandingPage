"use client";

import { type MotionProps, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils";

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
}

export function TypingAnimation({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  startOnView = true,
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(!startOnView);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!startOnView) return;
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setStarted(true), delay);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const id = setInterval(() => {
      if (i < children.length) {
        setDisplayed(children.slice(0, i + 1));
        i++;
      } else {
        clearInterval(id);
      }
    }, duration);
    return () => clearInterval(id);
  }, [started, children, duration]);

  return (
    <MotionComponent
      ref={ref}
      className={cn("text-balance font-semibold tracking-tight", className)}
      {...props}
    >
      {displayed}
    </MotionComponent>
  );
}
