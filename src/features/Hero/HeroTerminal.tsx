"use client";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function HeroTerminal() {
  return (
    <Terminal>
      <TypingAnimation className="text-foreground">
        &gt; npx syncforge init project
      </TypingAnimation>

      <AnimatedSpan delay={1500} className="text-[#4d8cff]">
        <span>✔ Detectando stack ideal para o seu negócio...</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2200} className="text-[#4d8cff]">
        <span>✔ Configurando módulos: CRM, ERP, PDV.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2900} className="text-[#4d8cff]">
        <span>✔ Mapeando fluxos, permissões e relatórios.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3600} className="text-[#4d8cff]">
        <span>✔ Preparando integrações e automações.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4300} className="text-muted-foreground">
        <span>ℹ Atualizando dependências:</span>
        <span className="pl-2">- next, react, tailwind</span>
        <span className="pl-2">- APIs e banco de dados</span>
        <span className="pl-2">- dashboards e módulos de gestão</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5400} className="text-muted-foreground">
        <span>Sucesso! Projeto pronto para iniciar.</span>
      </AnimatedSpan>

      <TypingAnimation
        delay={6000}
        duration={30}
        className="text-muted-foreground"
      >
        Pronto para sincronizar processos, dados e operação.
      </TypingAnimation>
    </Terminal>
  );
}
