/**
 * Plano de fundo decorativo do site:
 * - Camada base preta
 * - Glow azul radial em pontos chave
 * - Grid sutil
 * - Vinheta para suavizar bordas
 */
export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* Grid sutil */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Glow azul superior */}
      <div className="absolute -top-40 left-1/2 h-[680px] w-[1100px] -translate-x-1/2 rounded-full bg-[#0a3499]/35 blur-[160px]" />

      {/* Glow azul navy ao centro */}
      <div className="absolute top-[40%] -left-40 h-[480px] w-[480px] rounded-full bg-[#00072d] blur-[140px]" />
      <div className="absolute top-[55%] -right-40 h-[520px] w-[520px] rounded-full bg-[#0a1f5c]/70 blur-[160px]" />

      {/* Glow azul inferior */}
      <div className="absolute -bottom-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#0c3499]/25 blur-[160px]" />

      {/* Vinheta para profundidade */}
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
