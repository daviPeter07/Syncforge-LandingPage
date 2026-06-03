"use client";

import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CONTACT_WHATSAPP_HREF } from "@/constants/contact";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cn } from "@/utils";

interface FloatingCTABannerProps {
  className?: string;
}

export default function FloatingCTABanner({
  className,
}: FloatingCTABannerProps) {
  const visible = useScrollPosition(400);

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={cn(
            "fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2",
            className,
          )}
          aria-label="Fale com a SyncForge"
        >
          <div className="relative flex flex-col gap-4 rounded-2xl border border-border/60 bg-background/90 px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1117]/90 md:flex-row md:items-center md:justify-between md:px-6 md:py-4">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
              aria-hidden
            />

            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-foreground/5 ring-1 ring-border/60 dark:bg-[#161b24] dark:ring-white/10">
                <Image
                  src="/syncforge.png"
                  alt="SyncForge"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold leading-snug text-foreground md:text-base">
                  Não encontrou a solução ideal?
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                  Fale com nossa equipe e desenvolvemos a solução certa para o
                  seu desafio.
                </p>
              </div>
            </div>

            <Button asChild className="w-full md:w-auto">
              <a
                href={CONTACT_WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com a SyncForge
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
