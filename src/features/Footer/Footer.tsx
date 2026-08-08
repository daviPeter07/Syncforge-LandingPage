"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_WHATSAPP_HREF,
} from "@/constants/contact";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const PRODUCT_LINKS = [
  { label: "Todos os produtos", href: "/produtos" },
];

const SECTIONS = {
  navegar: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Produtos", href: "/produtos" },
  ],
  empresa: [
    { label: "Equipe", href: "#equipe" },
    { label: "Atendimento guiado", href: "/consulta" },
    { label: "Ajuda / FAQ", href: "#ajuda" },
    { label: "Contato", href: "#contato" },
  ],
  produtos: [...PRODUCT_LINKS],
};

interface FooterNavigationItemProps {
  href: string;
  label: string;
  onNavigate: (href: string) => void;
}

function FooterNavigationItem({
  href,
  label,
  onNavigate,
}: FooterNavigationItemProps) {
  const className =
    "text-muted-foreground transition-colors hover:text-foreground";

  if (href.startsWith("#")) {
    return (
      <button
        type="button"
        onClick={() => onNavigate(href)}
        className={className}
      >
        {label}
      </button>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function Footer() {
  const { scrollToId } = useSmoothScroll();
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      if (isHome) {
        scrollToId(href);
      } else {
        router.push(`/${href}`);
      }
      return;
    }

    router.push(href);
  };

  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-background">
      {/* Glow azul decorativo - Atenuado no light mode para leitura limpa */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-105 w-275 -translate-x-1/2 rounded-full bg-[#4d8cff]/10 dark:bg-[#0a3499]/20 blur-[140px]"
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
              Conta o que precisa, pra quando precisa, e a gente retorna com um
              caminho claro para começar.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleNavigation("#contato")}
            className="group inline-flex items-center gap-2 rounded-full border border-[#4d8cff]/40 bg-[#4d8cff]/10 px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-[#4d8cff] hover:bg-[#4d8cff] hover:text-[#00072d]"
          >
            Solicitar orçamento
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
                handleNavigation("#inicio");
              }}
              className="flex items-center"
            >
              <Image
                src="/syncforge.png"
                alt="SyncForge"
                width={180}
                height={56}
                className="h-10 w-auto object-contain"
              />
              <span className="text-base font-semibold tracking-[-0.02em] text-foreground">
                SyncForge
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Studio digital focado em software sob medida, landing pages e
              soluções digitais para empresas, comércios e profissionais que
              querem crescer com mais organização.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <Mail className="size-4 text-[#4d8cff]" />
                <a
                  href={CONTACT_EMAIL_HREF}
                  className="transition-colors hover:text-foreground"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <Phone className="size-4 text-[#4d8cff]" />
                <a
                  href={CONTACT_WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  +55 (92) 99258-4985
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="size-4 text-[#4d8cff]" />
                Manaus, AM - Brasil
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
                  <FooterNavigationItem
                    href={item.href}
                    label={item.label}
                    onNavigate={handleNavigation}
                  />
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
                  <FooterNavigationItem
                    href={item.href}
                    label={item.label}
                    onNavigate={handleNavigation}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Produtos */}
          <div>
            <h3 className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Produtos
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SECTIONS.produtos.map((item) => (
                <li key={item.label}>
                  <FooterNavigationItem
                    href={item.href}
                    label={item.label}
                    onNavigate={handleNavigation}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="flex flex-col-reverse items-start justify-between gap-6 border-t border-border/40 pt-7 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SyncForge. Todos os direitos
            reservados. CNPJ 64.616.637/0001-90.
          </p>

          <div className="md:text-right">
            <p className="text-sm font-semibold text-foreground">
              Fale com a SyncForge
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Instagram, WhatsApp e e-mail em um clique.
            </p>
            <div className="mt-3 flex items-center gap-2.5 md:justify-end">
              <a
                href={CONTACT_EMAIL_HREF}
                aria-label="Email da SyncForge"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4d8cff]/35 bg-background/70 text-muted-foreground transition-colors hover:border-[#4d8cff] hover:bg-[#0a3499]/20 hover:text-foreground"
              >
                <Mail className="size-4" />
              </a>
              <a
                href={CONTACT_WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da SyncForge"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4d8cff]/35 bg-background/70 text-muted-foreground transition-colors hover:border-[#4d8cff] hover:bg-[#0a3499]/20 hover:text-foreground"
              >
                <WhatsappIcon className="size-4" />
              </a>
              <a
                href="https://www.instagram.com/syncforge.company/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da SyncForge"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4d8cff]/35 bg-background/70 text-muted-foreground transition-colors hover:border-[#4d8cff] hover:bg-[#0a3499]/20 hover:text-foreground"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Marca d'água gigante */}
      <div
        aria-hidden
        className="pointer-events-none relative -mt-2 select-none overflow-hidden"
      >
        <div className="bg-linear-to-b from-foreground/20 to-transparent bg-clip-text text-center font-sans text-[18vw] font-bold leading-none tracking-[-0.04em] text-transparent">
          SyncForge
        </div>
      </div>
    </footer>
  );
}
