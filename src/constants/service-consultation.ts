import {
  Blocks,
  BriefcaseBusiness,
  CalendarClock,
  ChartNoAxesCombined,
  CircleDollarSign,
  ContactRound,
  MessageCircleMore,
  Monitor,
  PanelsTopLeft,
  ReceiptText,
  Rocket,
  Search,
  Settings,
  ShoppingCart,
  Store,
  TrendingUp,
  UsersRound,
  WalletCards,
} from "lucide-react";
import type {
  ConsultationAnswers,
  ConsultationOption,
  ConsultationQuestion,
} from "@/types/service-consultation";

export const SERVICE_CONSULTATION_SERVICES: ConsultationOption[] = [
  {
    value: "business-page",
    label: "Página para apresentar seu negócio",
    description:
      "Tenha uma presença online profissional e apresente sua marca com clareza.",
    icon: PanelsTopLeft,
  },
  {
    value: "company-website",
    label: "Site completo para sua empresa",
    description: "Um site moderno, completo e responsivo para sua empresa.",
    icon: Monitor,
  },
  {
    value: "online-store",
    label: "Loja virtual",
    description: "Gerencie produtos, pedidos e clientes em um só lugar.",
    icon: ShoppingCart,
  },
  {
    value: "customers-and-sales",
    label: "Sistema para organizar clientes e vendas",
    description:
      "Gerencie clientes, acompanhe vendas e aumente seus resultados.",
    icon: ContactRound,
  },
  {
    value: "sales-register",
    label: "Sistema para registrar vendas",
    description: "Venda com mais rapidez e praticidade no dia a dia.",
    icon: ReceiptText,
  },
  {
    value: "sales-cash-stock",
    label: "Sistema de vendas com caixa e estoque",
    description: "Controle vendas, caixa e estoque em um só lugar.",
    icon: Store,
  },
  {
    value: "business-management",
    label: "Sistema completo para gestão da empresa",
    description: "Uma solução completa e personalizada para sua operação.",
    icon: BriefcaseBusiness,
  },
  {
    value: "process-automation",
    label: "Automação de tarefas e processos",
    description: "Automatize processos, ganhe tempo e reduza erros.",
    icon: Settings,
  },
  {
    value: "automatic-service",
    label: "Atendimento automático para WhatsApp e Telegram",
    description:
      "Atenda mais clientes com automações inteligentes disponíveis 24 horas.",
    icon: MessageCircleMore,
  },
];

export const SERVICE_CONSULTATION_QUESTIONS: ConsultationQuestion[] = [
  {
    id: "problem",
    title: "Qual problema mais atrapalha seu negócio hoje?",
    description: "Escolha a situação que mais se aproxima da sua rotina.",
    options: [
      {
        value: "visibility",
        label:
          "As pessoas têm dificuldade de encontrar minha empresa na internet",
        description:
          "Preciso de um site para apresentar meu negócio e ser encontrado online.",
        icon: Search,
      },
      {
        value: "ecommerce",
        label: "Quero começar a vender pela internet",
        description: "Preciso organizar produtos, pedidos e pagamentos online.",
        icon: ShoppingCart,
      },
      {
        value: "customers",
        label: "Meus clientes e vendas estão desorganizados",
        description: "Perco contatos e não consigo acompanhar oportunidades.",
        icon: UsersRound,
      },
      {
        value: "sales",
        label: "Preciso controlar melhor minhas vendas, caixa e estoque",
        description:
          "Quero registrar e acompanhar a operação com mais rapidez.",
        icon: WalletCards,
      },
      {
        value: "management",
        label: "Dependo de muitas planilhas para gerenciar a empresa",
        description: "Preciso centralizar dados, setores e processos.",
        icon: Blocks,
      },
      {
        value: "service",
        label: "Meu atendimento está tomando tempo demais",
        description: "Quero responder clientes com mais rapidez e organização.",
        icon: MessageCircleMore,
      },
    ],
  },
  {
    id: "stage",
    title: "Em que momento sua empresa está?",
    description: "Isso define o nível de estrutura ideal para a solução.",
    options: [
      {
        value: "starting",
        label: "Começando agora",
        description: "Estou validando a ideia ou estruturando o negócio.",
        icon: Rocket,
      },
      {
        value: "growing",
        label: "Em crescimento",
        description: "A demanda aumentou e os processos precisam acompanhar.",
        icon: TrendingUp,
      },
      {
        value: "established",
        label: "Empresa consolidada",
        description: "Preciso integrar setores, dados e decisões.",
        icon: ChartNoAxesCombined,
      },
    ],
  },
  {
    id: "budget",
    title: "Qual orçamento você imagina para começar?",
    description:
      "Uma estimativa inicial ajuda a indicar a solução mais viável.",
    options: [
      {
        value: "entry",
        label: "Até R$ 1.000",
        description: "Quero começar com uma solução mais enxuta.",
        icon: CircleDollarSign,
      },
      {
        value: "standard",
        label: "De R$ 1.000 a R$ 3.000",
        description:
          "Busco uma estrutura completa para a necessidade principal.",
        icon: WalletCards,
      },
      {
        value: "growth",
        label: "De R$ 3.000 a R$ 8.000",
        description: "Quero uma solução mais ampla e preparada para crescer.",
        icon: TrendingUp,
      },
      {
        value: "custom",
        label: "Preciso de um orçamento personalizado",
        description:
          "Prefiro definir o investimento depois de avaliar o escopo.",
        icon: CalendarClock,
      },
    ],
  },
];

const SERVICES_BY_ID = new Map(
  SERVICE_CONSULTATION_SERVICES.map((service) => [service.value, service]),
);

export function getRecommendedServices(
  answers: ConsultationAnswers,
): ConsultationOption[] {
  const problem = answers.problem;
  const budget = answers.budget;
  const stage = answers.stage;
  const hasEntryBudget = budget === "entry";
  const hasGrowthBudget = budget === "growth";
  const isStarting = stage === "starting";
  const isEstablished = stage === "established";

  let primary = "company-website";
  let secondary = "automatic-service";

  if (problem === "visibility") {
    primary = "business-page";
    secondary = "company-website";
  } else if (problem === "ecommerce") {
    primary = "online-store";
    secondary = isEstablished ? "business-management" : "automatic-service";
  } else if (problem === "customers") {
    primary = "customers-and-sales";
    secondary = "automatic-service";
  } else if (problem === "sales") {
    if (isEstablished || hasGrowthBudget) {
      primary = "business-management";
      secondary = "sales-cash-stock";
    } else if (hasEntryBudget || isStarting) {
      primary = "sales-register";
      secondary = "sales-cash-stock";
    } else {
      primary = "sales-cash-stock";
      secondary = "customers-and-sales";
    }
  } else if (problem === "management") {
    primary = hasEntryBudget ? "process-automation" : "business-management";
    secondary = hasEntryBudget ? "sales-cash-stock" : "process-automation";
  } else if (problem === "service") {
    primary = "automatic-service";
    secondary = "customers-and-sales";
  }

  return [primary, secondary]
    .map((id) => SERVICES_BY_ID.get(id))
    .filter((service): service is ConsultationOption => Boolean(service));
}
