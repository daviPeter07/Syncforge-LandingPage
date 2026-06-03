import { ServiceCategory, ServiceItem } from "@/types/services";
import {
  Bot,
  BriefcaseBusiness,
  CreditCard,
  LineChart,
  MonitorCog,
  Package2,
} from "lucide-react";

export const CATEGORY_OPTIONS: Array<{
  value: ServiceCategory | "all";
  label: string;
}> = [
  { value: "all", label: "Todas as categorias" },
  { value: "landing-page", label: "Landing Page" },
  { value: "pdv", label: "PDV" },
  { value: "crm", label: "CRM" },
  { value: "automacao", label: "Automação" },
  { value: "financeiro", label: "Financeiro" },
  { value: "erp", label: "ERP" },
];

export const SERVICES: ServiceItem[] = [
  {
    category: "landing-page",
    title: "Landing Page",
    description:
      "Páginas estratégicas que apresentam seu negócio ou produto e convertem visitantes em mais contatos e clientes.",
    tags: ["Mais conversões", "Design moderno", "Foco em resultado"],
    icon: MonitorCog,
  },
  {
    category: "pdv",
    title: "PDV",
    description:
      "Sistema de ponto de venda completo para gerenciar suas vendas, estoques e clientes de forma simples.",
    tags: ["Vendas rápidas", "Controle de estoque", "Relatórios"],
    icon: CreditCard,
  },
  {
    category: "crm",
    title: "CRM",
    description:
      "Gerencie seus clientes e oportunidades em um só lugar e aumente seu relacionamento e suas vendas.",
    tags: ["Mais organização", "Relacionamento", "Acompanhamento"],
    icon: BriefcaseBusiness,
  },
  {
    category: "automacao",
    title: "Automação",
    description:
      "Automatize tarefas e processos do seu negócio e ganhe tempo para focar no que realmente importa.",
    tags: ["Mais produtividade", "Fluxos inteligentes", "Menos retrabalho"],
    icon: Bot,
  },
  {
    category: "financeiro",
    title: "Financeiro",
    description:
      "Tenha controle total das finanças do seu negócio com relatórios claros, previsões e visão atualizada.",
    tags: ["Controle financeiro", "Fluxo de caixa", "Relatórios"],
    icon: LineChart,
  },
  {
    category: "erp",
    title: "ERP",
    description:
      "Centralize todas as áreas do seu negócio em um sistema integrado e eficiente para operar com mais clareza.",
    tags: ["Gestão completa", "Integração", "Mais eficiência"],
    icon: Package2,
  },
];
