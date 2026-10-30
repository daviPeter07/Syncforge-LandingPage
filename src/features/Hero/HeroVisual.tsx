"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { SyncForgeLogo } from "@/components/SyncForgeLogo";
import {
  HERO_FLOATING_BADGES,
  HERO_INNER_ORBIT,
  HERO_OUTER_ORBIT,
} from "@/constants/hero";
import type { HeroOrbitItem } from "@/types/hero";
import { cn } from "@/utils";

const INNER_DURATION = 24;
const OUTER_DURATION = 36;

function OrbitRing({
  items,
  radius,
  duration,
  reverse,
}: {
  items: HeroOrbitItem[];
  radius: number;
  duration: number;
  reverse?: boolean;
}) {
  return items.map((item, i) => {
    const ItemIcon = item.icon;

    return (
      <OrbitingCircles
        key={item.label}
        radius={radius}
        duration={duration}
        delay={(duration / items.length) * i}
        reverse={reverse}
        path={i === 0}
        className="size-12 border-none bg-transparent"
        pathClassName="stroke-[#4d8cff]/35 stroke-[1.5] dark:stroke-white/10 dark:stroke-1"
      >
        <div
          title={item.label}
          className="flex size-12 items-center justify-center rounded-2xl border border-[#4d8cff]/40 bg-white text-[#2459f5] shadow-[0_8px_24px_rgba(36,89,245,0.15)] dark:border-[#4d8cff]/30 dark:bg-background/80 dark:text-[#4d8cff] dark:shadow-[0_0_24px_rgba(77,140,255,0.18)] dark:backdrop-blur-md"
        >
          <ItemIcon className="size-5" />
        </div>
      </OrbitingCircles>
    );
  });
}

/**
 * Logo da SyncForge no centro, com as áreas que atendemos orbitando em volta.
 */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative flex size-[440px] items-center justify-center",
        className,
      )}
    >
      <div className="absolute size-72 rounded-full bg-[#4d8cff]/15 blur-[90px] dark:bg-[#4d8cff]/20" />

      <OrbitRing
        items={HERO_INNER_ORBIT}
        radius={125}
        duration={INNER_DURATION}
      />
      <OrbitRing
        items={HERO_OUTER_ORBIT}
        radius={200}
        duration={OUTER_DURATION}
        reverse
      />

      <SyncForgeLogo className="relative z-10 size-40 cursor-pointer" />

      {HERO_FLOATING_BADGES.map((badge, i) => (
        <motion.div
          key={badge.title}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            delay: i * 1.2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className={cn(
            "absolute hidden items-center gap-3 sm:flex rounded-2xl border border-border/60 bg-white/90 px-4 py-3 shadow-[0_12px_32px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:bg-card/80 dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)]",
            i === 0 ? "top-6 -left-10" : "-right-8 bottom-10",
          )}
        >
          <CheckCircle2 className="size-5 shrink-0 text-emerald-500 dark:text-emerald-400" />
          <div className="text-left">
            <p className="text-sm font-semibold text-foreground">
              {badge.title}
            </p>
            <p className="text-xs text-muted-foreground">{badge.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
