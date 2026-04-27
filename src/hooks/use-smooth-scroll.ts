"use client";

import { useCallback } from "react";

/**
 * Hook utilitário para realizar scroll suave para um elemento por id ou para o topo.
 */
export function useSmoothScroll() {
  const scrollToId = useCallback((href: string) => {
    if (!href.startsWith("#")) return;
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    const offset = 80; // compensa altura da navbar fixa
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { scrollToId, scrollToTop };
}
