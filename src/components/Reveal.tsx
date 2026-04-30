"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

/**
 * Anima o conteúdo entrando suavemente ao entrar na viewport.
 */
export function Reveal({
  children,
  delay = 0,
  duration = 0.28,
  y = 10,
  className,
  once = true,
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
