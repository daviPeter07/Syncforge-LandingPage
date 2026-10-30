"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { useId, useState } from "react";
import { cn } from "@/utils";

// Contorno vetorizado de public/syncforge.png (mesma forma de public/syncforge.svg).
const TOP_PIECE =
  "M155,0 L425,0 L343,104 L317,141 L317,75 L315,72 L187,72 L104,170 L178,229 L213,253 L224,256 L239,256 L275,248 L244,285 L224,299 L205,305 L175,304 L154,294 L0,176 Z";
const BOTTOM_PIECE =
  "M245,139 L264,140 L281,147 L424,257 L429,263 L279,438 L6,438 L118,297 L118,367 L120,370 L249,370 L331,275 L334,269 L327,262 L246,200 L228,189 L217,186 L203,186 L167,195 L190,166 L203,154 L224,143 Z";

const PIECES = [
  { d: TOP_PIECE, offset: { x: -48, y: -48 }, hover: { x: -10, y: -10 } },
  { d: BOTTOM_PIECE, offset: { x: 48, y: 48 }, hover: { x: 10, y: 10 } },
];

interface SyncForgeLogoProps {
  className?: string;
  /** Desliga entrada, brilho e hover (ex.: uso em tamanho pequeno). */
  animated?: boolean;
}

/**
 * Logo da SyncForge em SVG. As duas peças se desenham, deslizam e se encaixam
 * na entrada; depois um brilho percorre o símbolo e, no hover, elas se afastam.
 */
export function SyncForgeLogo({
  className,
  animated = true,
}: SyncForgeLogoProps) {
  const uid = useId().replace(/:/g, "");
  const prefersReducedMotion = useReducedMotion();
  const isAnimated = animated && !prefersReducedMotion;
  const [isHovered, setIsHovered] = useState(false);

  const fillId = `sf-fill-${uid}`;
  const shineId = `sf-shine-${uid}`;
  const clipId = `sf-clip-${uid}`;
  const glowId = `sf-glow-${uid}`;

  const pieceVariants = (piece: (typeof PIECES)[number]): Variants => ({
    hidden: {
      ...piece.offset,
      opacity: 0,
      pathLength: 0,
      fillOpacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      pathLength: 1,
      fillOpacity: 1,
      transition: {
        opacity: { duration: 0.3 },
        pathLength: { duration: 1.1, ease: "easeInOut" },
        x: { delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
        y: { delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
        fillOpacity: { delay: 1, duration: 0.6 },
      },
    },
  });

  return (
    <motion.svg
      viewBox="-60 -60 550 559"
      role="img"
      aria-label="SyncForge"
      className={cn("overflow-visible", className)}
      initial={isAnimated ? "hidden" : false}
      animate="visible"
      onHoverStart={() => setIsHovered(isAnimated)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <defs>
        <linearGradient id={fillId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#77a7ff" />
          <stop offset="55%" stopColor="#2459f5" />
          <stop offset="100%" stopColor="#0a3499" />
        </linearGradient>
        <linearGradient id={shineId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <clipPath id={clipId}>
          <path d={TOP_PIECE} />
          <path d={BOTTOM_PIECE} />
        </clipPath>
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      {/* Glow pulsando atrás do símbolo */}
      <motion.g
        filter={`url(#${glowId})`}
        fill="#2459f5"
        initial={{ opacity: 0 }}
        animate={isAnimated ? { opacity: [0.35, 0.7, 0.35] } : { opacity: 0.5 }}
        transition={
          isAnimated
            ? { delay: 1.4, duration: 3.2, repeat: Infinity, ease: "easeInOut" }
            : undefined
        }
      >
        <path d={TOP_PIECE} />
        <path d={BOTTOM_PIECE} />
      </motion.g>

      {PIECES.map((piece) => (
        <motion.g
          key={piece.d}
          animate={isHovered ? piece.hover : { x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <motion.path
            d={piece.d}
            variants={pieceVariants(piece)}
            fill={`url(#${fillId})`}
            stroke="#9ec0ff"
            strokeWidth={3}
            strokeLinejoin="round"
          />
        </motion.g>
      ))}

      {isAnimated ? (
        <g clipPath={`url(#${clipId})`}>
          <motion.rect
            y={0}
            width={160}
            height={439}
            fill={`url(#${shineId})`}
            initial={{ x: -260 }}
            animate={{ x: 560 }}
            transition={{
              delay: 2,
              duration: 1.4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 3.5,
            }}
          />
        </g>
      ) : null}
    </motion.svg>
  );
}
