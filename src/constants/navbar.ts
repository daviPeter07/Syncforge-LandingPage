import type { DisabledLanguage, NavItem } from "@/types/navbar";

export const NAV_ITEMS: NavItem[] = [
  { label: "INÍCIO", href: "#inicio" },
  { label: "SERVIÇOS", href: "#servicos" },
  { label: "EQUIPE", href: "#equipe" },
  { label: "AJUDA", href: "#ajuda" },
  { label: "CONTATO", href: "#contato" },
];

export const DISABLED_LANGUAGES: DisabledLanguage[] = [
  { label: "Inglês", code: "EN", message: "Coming soon" },
  { label: "Espanhol", code: "ES", message: "Próximamente" },
];
