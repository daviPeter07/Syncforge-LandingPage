import {
  Bot,
  BriefcaseBusiness,
  CreditCard,
  LineChart,
  MonitorCog,
  Package2,
} from "lucide-react";
import type { ServiceCategory, ServiceId, ServiceItem } from "@/types/services";

export const CATEGORY_OPTIONS: Array<{
  value: ServiceCategory | "all";
  label: string;
}> = [
  { value: "all", label: "Todas as soluções" },
  { value: "landing-page", label: "Vender mais online" },
  { value: "pdv", label: "Controlar vendas e estoque" },
  { value: "crm", label: "Organizar clientes" },
  { value: "automacao", label: "Automatizar tarefas" },
  { value: "financeiro", label: "Controlar financeiro" },
  { value: "erp", label: "Integrar a empresa" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "landing-page",
    category: "landing-page",
    title: "Landing Page",
    description:
      "Página profissional para apresentar sua empresa, gerar confiança e transformar visitantes em contatos pelo WhatsApp.",
    tags: ["Vender online", "Captar clientes", "Mais credibilidade"],
    icon: MonitorCog,
  },
  {
    id: "pdv",
    category: "pdv",
    title: "PDV",
    description:
      "Sistema para registrar vendas, controlar produtos, acompanhar estoque e deixar a rotina da sua loja mais organizada.",
    tags: ["Controlar vendas", "Organizar estoque", "Atender melhor"],
    icon: CreditCard,
  },
  {
    id: "crm",
    category: "crm",
    title: "CRM",
    description:
      "Organize seus clientes, acompanhe oportunidades e tenha mais clareza sobre quem precisa ser atendido ou chamado novamente.",
    tags: ["Organizar clientes", "Acompanhar contatos", "Vender melhor"],
    icon: BriefcaseBusiness,
  },
  {
    id: "automacao",
    category: "automacao",
    title: "Automação",
    description:
      "Automatize tarefas repetitivas, reduza retrabalho e ganhe tempo para focar no crescimento do seu negócio.",
    tags: ["Automatizar tarefas", "Reduzir retrabalho", "Ganhar tempo"],
    icon: Bot,
  },
  {
    id: "financeiro",
    category: "financeiro",
    title: "Gestão Financeira",
    description:
      "Controle entradas, saídas, cobranças e indicadores para tomar decisões com mais segurança no dia a dia.",
    tags: ["Controlar financeiro", "Acompanhar caixa", "Decidir melhor"],
    icon: LineChart,
  },
  {
    id: "erp",
    category: "erp",
    title: "ERP Sob Medida",
    description:
      "Sistema completo para integrar setores, centralizar informações e controlar melhor a operação da sua empresa.",
    tags: ["Integrar setores", "Centralizar dados", "Gerenciar melhor"],
    icon: Package2,
  },
];

export function getServiceById(id: ServiceId): ServiceItem {
  const service = SERVICES.find((item) => item.id === id);

  if (!service) {
    throw new Error(`Service not found for id: ${id}`);
  }

  return service;
}
