"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils";

interface VelocityScrollProps {
  defaultVelocity?: number;
  className?: string;
  numRows?: number;
  children: string;
}

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  className?: string;
}

function ParallaxText({
  children,
  baseVelocity = 100,
  className,
}: ParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  // Otimização: Apenas animar quando estiver visível no viewport
  const isInView = useInView(containerRef, { margin: "0px" });

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [repetitions, setRepetitions] = useState(1);

  useEffect(() => {
    const calculate = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
        setRepetitions(newRepetitions);
      }
    };
    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);
  const directionFactor = useRef<number>(1);

  useEffect(() => {
    if (!isInView) return; // Pausa no loop principal se o componente não estiver na tela

    let lastTime = performance.now();
    let raf = 0;
    const loop = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [baseVelocity, baseX, velocityFactor, isInView]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden whitespace-nowrap"
    >
      <motion.div className={cn("inline-block", className)} style={{ x }}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: ok
            key={i}
            ref={i === 0 ? textRef : null}
            className="pr-6"
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function VelocityScroll({
  defaultVelocity = 5,
  numRows = 2,
  children,
  className,
}: VelocityScrollProps) {
  return (
    <section className="relative w-full">
      {Array.from({ length: numRows }).map((_, i) => (
        <ParallaxText
          // biome-ignore lint/suspicious/noArrayIndexKey: ok
          key={i}
          baseVelocity={defaultVelocity * (i % 2 === 0 ? 1 : -1)}
          className={className}
        >
          {children}
        </ParallaxText>
      ))}
    </section>
  );
}
