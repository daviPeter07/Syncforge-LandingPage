"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function BackToTop() {
  const visible = useScrollPosition(400);
  const { scrollToTop } = useSmoothScroll();

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Voltar ao topo"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.85 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#0a3499] text-white shadow-[0_10px_30px_rgba(10,52,153,0.5)] ring-1 ring-white/10 transition-colors hover:bg-[#0e3eb8]"
        >
          <ArrowUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
