"use client";

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
 *
 * NOTA DE PERFORMANCE (27/04/2026): JS/Framer Motion removidos em favor de CSS
 * para poupar a Main-Thread e fluidificar o Scroll (utilizando aceleração de hardware GPU).
 */
export function SiteBackground() {
  return (
    <>
      <style suppressHydrationWarning>{`
        @keyframes aurora-pulse {
          0%, 100% { opacity: 0.55; transform: translateZ(0) scale(1); }
          50% { opacity: 0.85; transform: translateZ(0) scale(1.08); }
        }
        @keyframes aurora-sway-1 {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(60px, -30px, 0); }
        }
        @keyframes aurora-sway-2 {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-50px, 40px, 0); }
        }
        @keyframes aurora-pulse-light {
          0%, 100% { opacity: 0.25; transform: translateZ(0); }
          50% { opacity: 0.5; transform: translateZ(0); }
        }
        
        .aurora-base {
          will-change: transform, opacity;
          pointer-events: none;
        }
        
        .aurora-1 { animation: aurora-pulse 14s ease-in-out infinite; }
        .aurora-2 { animation: aurora-sway-1 22s ease-in-out infinite; }
        .aurora-3 { animation: aurora-sway-2 26s ease-in-out infinite; }
        .aurora-4 { animation: aurora-pulse-light 18s ease-in-out infinite; }
        
        @keyframes aurora-light-pulse {
          0%, 100% { opacity: 0.35; transform: translateZ(0) scale(1); }
          50% { opacity: 0.6; transform: translateZ(0) scale(1.05); }
        }
        @keyframes aurora-light-sway {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(40px, -20px, 0); }
        }
        
        .aurora-light-1 { animation: aurora-light-pulse 18s ease-in-out infinite; }
        .aurora-light-2 { animation: aurora-light-sway 24s ease-in-out infinite; }
      `}</style>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
      >
        {/* Grid sutil */}
        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.14] aurora-base"
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
        <div className="absolute -top-40 left-1/2 hidden h-[680px] w-[1100px] -translate-x-1/2 rounded-full bg-[#0a3499]/40 blur-[160px] dark:block aurora-base aurora-1" />
        <div className="absolute top-[40%] -left-40 hidden h-[480px] w-[480px] rounded-full bg-[#00072d] blur-[140px] dark:block aurora-base aurora-2" />
        <div className="absolute top-[55%] -right-40 hidden h-[520px] w-[520px] rounded-full bg-[#0a1f5c]/70 blur-[160px] dark:block aurora-base aurora-3" />
        <div className="absolute -bottom-40 left-1/2 hidden h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#0c3499]/30 blur-[160px] dark:block aurora-base aurora-4" />

        {/* Aurora — tema claro (mais delicada) */}
        <div className="absolute -top-40 left-1/2 block h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[#dbe5ff] blur-[140px] dark:hidden aurora-base aurora-light-1" />
        <div className="absolute top-[50%] -right-32 block h-[420px] w-[420px] rounded-full bg-[#c4d4ff]/70 blur-[140px] dark:hidden aurora-base aurora-light-2" />

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
    </>
  );
}
