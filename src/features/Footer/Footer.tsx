"use client";

import Link from "next/link";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons/BrandIcons";
import { NAV_ITEMS } from "@/constants/navbar";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function Footer() {
  const { scrollToId } = useSmoothScroll();

  return (
    <footer className="relative border-t border-white/10 bg-[#00050F]/60 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-blue-600 font-bold text-white">
                S
              </span>
              <span className="text-lg font-semibold text-white">
                SyncForge
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Soluções digitais sob medida em software, design e produção
              audiovisual para empresas e criadores.
            </p>
          </div>

          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => scrollToId(item.href)}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/5 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SyncForge. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-3">
            {[
              { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
              { Icon: InstagramIcon, href: "#", label: "Instagram" },
              { Icon: GithubIcon, href: "#", label: "GitHub" },
            ].map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:border-blue-500/40 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
