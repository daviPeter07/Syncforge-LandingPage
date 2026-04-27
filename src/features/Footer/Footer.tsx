"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons/BrandIcons";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const SECTIONS = {
  navegar: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Clientes", href: "#clientes" },
    { label: "Como trabalhamos", href: "#como-trabalhamos" },
  ],
  empresa: [
    { label: "Equipe", href: "#equipe" },
    { label: "Resultados", href: "#resultados" },
    { label: "Ajuda / FAQ", href: "#ajuda" },
    { label: "Contato", href: "#contato" },
  ],
  servicos: [
    { label: "Software sob medida", href: "#servicos" },
    { label: "Edição de vídeo", href: "#servicos" },
    { label: "Identidade visual", href: "#servicos" },
    { label: "Landing pages", href: "#servicos" },
  ],
};

const SOCIAL = [
  { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: GithubIcon, href: "#", label: "GitHub" },
];

export function Footer() {
  const { scrollToId } = useSmoothScroll();

  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-background">
      {/* Glow azul decorativo - Atenuado no light mode para leitura limpa */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[1100px] -translate-x-1/2 rounded-full bg-[#4d8cff]/10 dark:bg-[#0a3499]/20 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10 sm:px-8">
        {/* CTA Topo */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-border/40 pb-12 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Pronto para tirar o projeto{" "}
              <span className="text-[#4d8cff]">do papel?</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Conta o que precisa, pra quando precisa, e a gente volta com um
              plano honesto em até 24h úteis.
            </p>
          </div>

          <button
            type="button"
            onClick={() => scrollToId("#contato")}
            className="group inline-flex items-center gap-2 rounded-full border border-[#4d8cff]/40 bg-[#4d8cff]/10 px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-[#4d8cff] hover:bg-[#4d8cff] hover:text-[#00072d]"
          >
            Iniciar projeto
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Grid principal */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("#inicio");
              }}
              className="flex items-center gap-2.5"
            >
              <div className="relative h-10 w-10">
                <Image
                  src="/syncforge.png"
                  alt="SyncForge"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-semibold tracking-[-0.02em]">
                SyncForge
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Studio digital especializado em software sob medida, vídeo e
              design — para quem trata o digital como parte séria da operação.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <Mail className="size-4 text-[#4d8cff]" />
                <a
                  href="mailto:contato@syncforge.com.br"
                  className="transition-colors hover:text-foreground"
                >
                  contato@syncforge.com.br
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <Phone className="size-4 text-[#4d8cff]" />
                <a
                  href="tel:+5592992584985"
                  className="transition-colors hover:text-foreground"
                >
                  +55 (92) 99258-4985
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="size-4 text-[#4d8cff]" />
                Manaus, AM — Brasil
              </li>
            </ul>
          </div>

          {/* Links: Navegar */}
          <div>
            <h3 className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Navegar
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SECTIONS.navegar.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => scrollToId(item.href)}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Empresa */}
          <div>
            <h3 className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Empresa
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SECTIONS.empresa.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => scrollToId(item.href)}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Serviços */}
          <div>
            <h3 className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Serviços
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SECTIONS.servicos.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => scrollToId(item.href)}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="flex flex-col-reverse items-start justify-between gap-6 border-t border-border/40 pt-7 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SyncForge. CNPJ 00.000.000/0001-00.
            Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
              Siga a SyncForge
            </span>
            <div className="flex items-center gap-2">
              {SOCIAL.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border/50 bg-card/40 text-muted-foreground transition-colors hover:border-[#4d8cff]/50 hover:bg-card/60 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marca d'água gigante */}
      <div
        aria-hidden
        className="pointer-events-none relative -mt-2 select-none overflow-hidden"
      >
        <div className="bg-gradient-to-b from-foreground/20 to-transparent bg-clip-text text-center font-sans text-[18vw] font-bold leading-none tracking-[-0.04em] text-transparent">
          SyncForge
        </div>
      </div>
    </footer>
  );
}
