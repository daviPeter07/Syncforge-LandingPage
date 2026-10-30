import { Blocks, Wallet } from "lucide-react";
import { buildWhatsAppHref } from "@/constants/contact";
import type { ProductItem, ProductStatus } from "@/types/products";

export const PRODUCT_STATUS_LABELS: Record<ProductStatus, string> = {
  available: "Disponível",
  "coming-soon": "Em breve",
};

export const PRODUCTS: ProductItem[] = [
  {
    id: "sigem",
    name: "SIGEM",
    category: "Gestão empresarial (ERP)",
    status: "coming-soon",
    summary:
      "Organiza a sua empresa em um só lugar: vendas no caixa, controle de estoque e contas a pagar e a receber, tudo conectado. Você contrata só as partes de que precisa.",
    tags: ["Vendas e caixa", "Estoque", "Financeiro"],
    icon: Blocks,
    cta: {
      label: "Quero saber mais",
      href: buildWhatsAppHref(
        "Olá, vim pelo site da SyncForge e quero saber mais sobre o SIGEM.",
      ),
    },
  },
  {
    id: "mastermind",
    name: "Mastermind",
    category: "Finanças pessoais",
    status: "available",
    summary:
      "Acompanhe seus gastos e ganhos de forma simples e registre tudo pelo Telegram, de onde estiver.",
    tags: ["Controle de gastos", "Bot no Telegram", "Histórico"],
    icon: Wallet,
    image: {
      src: "/products/mastermind.png",
      alt: "Tela do Mastermind",
    },
    cta: {
      label: "Acessar",
      href: "https://mastermind-frontend-hyo7.onrender.com/",
    },
  },
];
