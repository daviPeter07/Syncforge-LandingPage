"use client";

import { useEffect, useState } from "react";

/**
 * Retorna a posição vertical de scroll atual.
 * Útil para mostrar/ocultar componentes como o botão "voltar ao topo".
 */
export function useScrollPosition(threshold = 0) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
