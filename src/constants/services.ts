import { Code2 } from "lucide-react";
import type { ServiceCategory } from "@/types/services";

export const SERVICES: ServiceCategory[] = [
  {
    id: "software",
    title: "Software",
    subtitle: "Sistemas sob medida para a sua operação",
    icon: Code2,
    items: [
      {
        name: "Landing Page",
        description: "Transforme visitantes em contatos e clientes.",
        expandedDescription:
          "Criamos páginas focadas em apresentar sua oferta com clareza e conduzir o visitante para uma ação, como solicitar orçamento, chamar no WhatsApp ou comprar.",
      },
      {
        name: "CRM",
        description: "Controle seus clientes e oportunidades em um só lugar.",
        expandedDescription:
          "Organize contatos, negociações, histórico de atendimento e próximos passos para vender com mais consistência e acompanhar cada oportunidade de perto.",
      },
      {
        name: "PDV",
        description: "Venda com mais agilidade e controle.",
        expandedDescription:
          "Tenha um sistema para registrar vendas, controlar caixa, aplicar formas de pagamento e acompanhar a rotina do atendimento presencial com mais eficiência.",
      },
      {
        name: "Financeiro",
        description: "Enxergue melhor o dinheiro da sua empresa.",
        expandedDescription:
          "Acompanhe entradas, saídas, contas, fluxo de caixa e resultados para tomar decisões com mais segurança e menos achismo.",
      },
      {
        name: "ERP",
        description: "Centralize a gestão da sua empresa.",
        expandedDescription:
          "Reúna setores, processos e informações em uma única plataforma, conectando vendas, estoque, financeiro, clientes e relatórios.",
      },
      {
        name: "OS",
        description: "Organize atendimentos e serviços do início ao fim.",
        expandedDescription:
          "Registre ordens de serviço, acompanhe etapas, responsáveis, prazos e histórico dos atendimentos com mais controle e profissionalismo.",
      },
      {
        name: "WMS",
        description: "Tenha mais precisão no controle de estoque.",
        expandedDescription:
          "Gerencie produtos, entradas, saídas, movimentações e armazenagem para reduzir falhas e manter o estoque sempre mais confiável.",
      },
      {
        name: "Integrações",
        description: "Faça seus sistemas trabalharem juntos.",
        expandedDescription:
          "Conectamos plataformas, APIs e ferramentas para automatizar processos, evitar retrabalho e melhorar o fluxo de informações da empresa.",
      },
    ],
    details: {
      longDescription:
        "Construímos sistemas web sob medida, começando pelo entendimento da operação e seguindo até a entrega em produção. A ideia é transformar processos manuais em fluxos claros, com tela enxuta, integração entre áreas e uma experiência que faça sentido para quem usa o sistema todos os dias.",
      deliverables: [
        "Levantamento de requisitos e prototipação",
        "Sistema responsivo (desktop e mobile)",
        "Painel administrativo completo",
        "Integrações (NFe, gateways, APIs)",
        "Documentação técnica e treinamento",
        "Suporte e evolução contínua",
      ],
      averageTime: "4 a 12 semanas",
      startingPrice: "Sob orçamento",
    },
  },
];
