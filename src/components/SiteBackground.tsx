"use client";

import { motion } from "motion/react";

/**
 * Plano de fundo decorativo:
 *  - Camada base com cor de --background
 *  - Aurora animada com glows azul navy
 *  - Grid muito sutil
 *  - Textura de granulado (noise) para tirar o aspecto plano
 *  - Vinheta nas bordas
 *
 * Os elementos respeitam tema claro / escuro através das classes utilitárias
 * Tailwind (`dark:` variant).
 */
export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* Grid sutil */}
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          color: "var(--foreground)",
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 80%)",
        }}
      />

      {/* Aurora animada — tema escuro */}
      <motion.div
        animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 left-1/2 hidden h-[680px] w-[1100px] -translate-x-1/2 rounded-full bg-[#0a3499]/40 blur-[160px] dark:block"
      />
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] -left-40 hidden h-[480px] w-[480px] rounded-full bg-[#00072d] blur-[140px] dark:block"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[55%] -right-40 hidden h-[520px] w-[520px] rounded-full bg-[#0a1f5c]/70 blur-[160px] dark:block"
      />
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 left-1/2 hidden h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#0c3499]/30 blur-[160px] dark:block"
      />

      {/* Aurora — tema claro (mais delicada) */}
      <motion.div
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 left-1/2 block h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[#dbe5ff] blur-[140px] dark:hidden"
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[50%] -right-32 block h-[420px] w-[420px] rounded-full bg-[#c4d4ff]/70 blur-[140px] dark:hidden"
      />

      {/* Pontos / estrelas sutis (apenas no escuro) */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          opacity: 0.35,
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 70%)",
        }}
      />

      {/* Grain / textura */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Vinheta */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
