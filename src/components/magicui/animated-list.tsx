"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  type ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
} from "react";
import { cn } from "@/utils";

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedList({
  children,
  className,
  delay = 1500,
  ...props
}: AnimatedListProps) {
  const [index, setIndex] = useState(0);
  const childrenArray = useMemo(
    () => (Array.isArray(children) ? children : [children]),
    [children],
  );

  useEffect(() => {
    if (index < childrenArray.length - 1) {
      const t = setTimeout(() => setIndex(index + 1), delay);
      return () => clearTimeout(t);
    }
  }, [index, delay, childrenArray.length]);

  const items = childrenArray.slice(0, index + 1).reverse();

  return (
    <div
      className={cn("flex flex-col items-center gap-4", className)}
      {...props}
    >
      <AnimatePresence>
        {items.map((item) => (
          <AnimatedListItem key={(item as React.ReactElement).key as string}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
}

function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring" as const, stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}
