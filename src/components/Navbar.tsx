"use client";

import { Check, ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "INÍCIO", href: "#inicio" },
  { label: "SOBRE", href: "#sobre" },
  { label: "SERVIÇOS", href: "#servicos" },
  { label: "CLIENTES", href: "#clientes" },
  { label: "COMO TRABALHAMOS", href: "#como-trabalhamos" },
  { label: "EQUIPE", href: "#equipe" },
  { label: "TECNOLOGIAS", href: "#tecnologias" },
  { label: "RESULTADOS", href: "#resultados" },
  { label: "AJUDA", href: "#ajuda" },
  { label: "CONTATO", href: "#contato" },
];

const disabledLanguages = [
  { label: "Inglês", code: "EN", message: "Coming soon" },
  { label: "Espanhol", code: "ES", message: "Próximamente" },
];

function LanguageBadge({ code }: { code: string }) {
  return (
    <Badge
      variant="outline"
      className="h-5 rounded-md border-0 bg-primary px-1.5 font-mono text-[10px] font-bold tracking-[0.08em] text-primary-foreground"
    >
      {code}
    </Badge>
  );
}

function LanguageDropdown({ className }: { className?: string }) {
  return (
    <TooltipProvider delayDuration={150}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            className={cn(
              "h-9 gap-2 rounded-lg bg-background/90 px-2.5 text-foreground shadow-none hover:bg-primary/15 hover:text-foreground data-[state=open]:bg-primary/15",
              className,
            )}
          >
            <span className="flex items-center gap-2">
              <LanguageBadge code="PT" />
              <span className="font-semibold tracking-[-0.01em]">
                Português
              </span>
            </span>
            <ChevronDown className="size-3.5 opacity-70" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="min-w-[154px] rounded-xl border-0 bg-background/95 p-1.5 text-foreground shadow-[0_18px_50px_rgba(0,7,45,0.4)] backdrop-blur-xl"
        >
          <DropdownMenuItem
            className="h-10 rounded-lg px-2 font-semibold text-foreground focus:bg-primary/15 focus:text-foreground"
            onSelect={(event) => event.preventDefault()}
          >
            <LanguageBadge code="PT" />
            <span>Português</span>
            <Check className="ml-auto size-4 text-white" />
          </DropdownMenuItem>
          {disabledLanguages.map((language) => (
            <Tooltip key={language.code}>
              <TooltipTrigger asChild>
                <DropdownMenuItem
                  aria-disabled="true"
                  className="h-10 cursor-not-allowed rounded-lg px-2 font-semibold text-muted-foreground focus:bg-primary/10 focus:text-muted-foreground"
                  onSelect={(event) => event.preventDefault()}
                >
                  <LanguageBadge code={language.code} />
                  <span>{language.label}</span>
                </DropdownMenuItem>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                sideOffset={10}
                hideArrow
                className="border-0 bg-primary text-primary-foreground shadow-xl"
              >
                {language.message}
              </TooltipContent>
            </Tooltip>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Alternar tema"
      className="relative h-9 w-9 rounded-lg bg-background/90 text-foreground shadow-none hover:bg-primary/15 hover:text-foreground"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src="/Syncforgesemfundo-logo.png"
                alt="SyncForge Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight"></span>
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-4 px-10 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-xs font-medium tracking-[0.08em] text-muted-foreground hover:text-foreground transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 xl:flex">
            <LanguageDropdown />
            <ThemeToggle />
          </div>

          <button
            type="button"
            aria-controls="navbar-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className="xl:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        id="navbar-menu"
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border/50 px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-sm font-medium tracking-[0.08em] text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex-1">
              <LanguageDropdown className="w-full justify-between" />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
