import { Code2, Film, Palette } from "lucide-react";
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
  // {
  //   id: "video",
  //   title: "Edição de Vídeo",
  //   subtitle: "Conteúdo audiovisual que prende a atenção",
  //   icon: Film,
  //   items: [
  //     {
  //       name: "Vídeos Promocionais",
  //       description: "Peças institucionais e comerciais",
  //     },
  //     { name: "Entretenimento", description: "Edições criativas e dinâmicas" },
  //     { name: "TikTok", description: "Cortes verticais para engajamento" },
  //     { name: "YouTube", description: "Edição completa para canais" },
  //     {
  //       name: "Reels & Shorts",
  //       description: "Conteúdo curto de alta conversão",
  //     },
  //     {
  //       name: "Motion Graphics",
  //       description: "Animações e elementos gráficos",
  //     },
  //   ],
  //   details: {
  //     longDescription:
  //       "Cuidamos da edição do início ao fim: roteiro, decupagem, color grading, sound design e motion. Trabalhamos tanto com material gravado por você quanto com produção em parceria, sempre com foco em retenção e narrativa.",
  //     deliverables: [
  //       "Roteiro e estrutura narrativa",
  //       "Edição em até 3 versões (rascunho, ajustes, final)",
  //       "Color grading e tratamento de áudio",
  //       "Legendas e thumbnails inclusos",
  //       "Versões verticais e horizontais",
  //       "Banco de assets e trilhas licenciadas",
  //     ],
  //     averageTime: "3 a 10 dias úteis",
  //     startingPrice: "A partir de R$ 350 / vídeo",
  //   },
  // },
  // {
  //   id: "design",
  //   title: "Design",
  //   subtitle: "Identidade e comunicação visual de impacto",
  //   icon: Palette,
  //   items: [
  //     { name: "Identidade Visual", description: "Sistema visual completo" },
  //     { name: "Logotipo", description: "Marca memorável e estratégica" },
  //     { name: "Social Media", description: "Templates e posts para redes" },
  //     { name: "Story Maker", description: "Stories de alta conversão" },
  //     { name: "Cardápios", description: "Físicos e digitais" },
  //     { name: "Anúncios", description: "Criativos para Meta, Google e TikTok" },
  //     {
  //       name: "Landing Pages",
  //       description: "Páginas otimizadas para conversão",
  //     },
  //     { name: "Mockups", description: "Têxteis e de objetos" },
  //   ],
  //   details: {
  //     longDescription:
  //       "Construímos marcas que comunicam — não só decoram. Começamos por entender posicionamento e público, e a partir daí desenhamos o sistema visual completo, com regras claras para que a marca se mantenha coerente em qualquer canal.",
  //     deliverables: [
  //       "Pesquisa de mercado e moodboard",
  //       "Logotipo principal e variações",
  //       "Tipografia, paleta e grid system",
  //       "Manual de marca em PDF",
  //       "Templates editáveis (Figma / Canva)",
  //       "Aplicações reais (papelaria, social, mockups)",
  //     ],
  //     averageTime: "2 a 4 semanas",
  //     startingPrice: "A partir de R$ 1.200",
  //   },
  // },
];
