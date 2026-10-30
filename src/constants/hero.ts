import {
  BarChart3,
  Bot,
  Boxes,
  Globe,
  ShoppingCart,
  Users,
  Wallet,
} from "lucide-react";
import type { HeroFloatingBadge, HeroOrbitItem } from "@/types/hero";

export const HERO_ANNOUNCEMENT = {
  label: "Novidade",
  text: "SIGEM, nosso sistema de gestão, chega em breve",
  shortText: "SIGEM chega em breve",
  href: "#produtos",
};

export const HERO_TRUST_TEXT = "Negócios que já confiam na SyncForge";

// Órbita interna: rotina da empresa. Órbita externa: presença e crescimento.
export const HERO_INNER_ORBIT: HeroOrbitItem[] = [
  { icon: ShoppingCart, label: "Vendas" },
  { icon: Boxes, label: "Estoque" },
  { icon: Wallet, label: "Financeiro" },
];

export const HERO_OUTER_ORBIT: HeroOrbitItem[] = [
  { icon: Globe, label: "Sites" },
  { icon: Users, label: "Clientes" },
  { icon: Bot, label: "Automação" },
  { icon: BarChart3, label: "Relatórios" },
];

export const HERO_FLOATING_BADGES: HeroFloatingBadge[] = [
  { title: "Venda registrada", description: "Estoque atualizado sozinho" },
  { title: "Contas em dia", description: "Nada vence sem você saber" },
];
