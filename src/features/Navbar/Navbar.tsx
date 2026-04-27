"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NAV_ITEMS } from "@/constants/navbar";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { LanguageDropdown } from "./LanguageDropdown";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollToId } = useSmoothScroll();

  const handleClick = (href: string) => {
    setIsOpen(false);
    scrollToId(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleClick("#inicio")}
          className="flex items-center gap-2"
          aria-label="Ir para o início"
        >
          <div className="relative h-10 w-10">
            <Image
              src="/Syncforgesemfundo-logo.png"
              alt="SyncForge"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-base font-semibold tracking-[-0.02em] text-foreground">
            SyncForge
          </span>
        </button>

        <div className="hidden flex-1 items-center justify-center gap-1 px-10 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              type="button"
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="group relative rounded-md px-3 py-2 text-[11px] font-medium tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-[#4d8cff] transition-all duration-300 group-hover:w-6" />
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <LanguageDropdown />
        </div>

        <button
          type="button"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="p-2 text-foreground lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="navbar-menu"
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 border-t border-border/40 px-4 py-4">
          {NAV_ITEMS.map((item) => (
            <button
              type="button"
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium tracking-[0.12em] text-muted-foreground transition-colors hover:bg-card/60 hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center gap-3 pt-3">
            <ThemeToggle />
            <LanguageDropdown className="flex-1 justify-between" />
          </div>
        </div>
      </div>
    </nav>
  );
}
