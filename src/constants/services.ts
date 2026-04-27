import { Code2, Film, Palette } from "lucide-react";
import type { ServiceCategory } from "@/types/services";

export const SERVICES: ServiceCategory[] = [
  {
    id: "software",
    title: "Software",
    subtitle: "Sistemas sob medida para a sua operação",
    icon: Code2,
    items: [
      { name: "CRM", description: "Gestão de relacionamento com clientes" },
      { name: "PDV", description: "Ponto de venda integrado e ágil" },
      { name: "ERP", description: "Toda a operação em uma plataforma" },
      { name: "OS", description: "Ordens de serviço com fluxo customizado" },
      { name: "WMS", description: "Gestão inteligente de estoque" },
      {
        name: "Financeiro",
        description: "Fluxo de caixa, contas e relatórios",
      },
    ],
    details: {
      longDescription:
        "Construímos sistemas web sob medida — do levantamento de requisitos até o deploy em produção. Cada projeto é desenhado para o seu fluxo de trabalho, com arquitetura escalável, integrações com APIs externas e painéis de gestão pensados para quem usa o sistema todo dia.",
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
  {
    id: "video",
    title: "Edição de Vídeo",
    subtitle: "Conteúdo audiovisual que prende a atenção",
    icon: Film,
    items: [
      {
        name: "Vídeos Promocionais",
        description: "Peças institucionais e comerciais",
      },
      { name: "Entretenimento", description: "Edições criativas e dinâmicas" },
      { name: "TikTok", description: "Cortes verticais para engajamento" },
      { name: "YouTube", description: "Edição completa para canais" },
      {
        name: "Reels & Shorts",
        description: "Conteúdo curto de alta conversão",
      },
      {
        name: "Motion Graphics",
        description: "Animações e elementos gráficos",
      },
    ],
    details: {
      longDescription:
        "Cuidamos da edição do início ao fim: roteiro, decupagem, color grading, sound design e motion. Trabalhamos tanto com material gravado por você quanto com produção em parceria, sempre com foco em retenção e narrativa.",
      deliverables: [
        "Roteiro e estrutura narrativa",
        "Edição em até 3 versões (rascunho, ajustes, final)",
        "Color grading e tratamento de áudio",
        "Legendas e thumbnails inclusos",
        "Versões verticais e horizontais",
        "Banco de assets e trilhas licenciadas",
      ],
      averageTime: "3 a 10 dias úteis",
      startingPrice: "A partir de R$ 350 / vídeo",
    },
  },
  {
    id: "design",
    title: "Design",
    subtitle: "Identidade e comunicação visual de impacto",
    icon: Palette,
    items: [
      { name: "Identidade Visual", description: "Sistema visual completo" },
      { name: "Logotipo", description: "Marca memorável e estratégica" },
      { name: "Social Media", description: "Templates e posts para redes" },
      { name: "Story Maker", description: "Stories de alta conversão" },
      { name: "Cardápios", description: "Físicos e digitais" },
      { name: "Anúncios", description: "Criativos para Meta, Google e TikTok" },
      {
        name: "Landing Pages",
        description: "Páginas otimizadas para conversão",
      },
      { name: "Mockups", description: "Têxteis e de objetos" },
    ],
    details: {
      longDescription:
        "Construímos marcas que comunicam — não só decoram. Começamos por entender posicionamento e público, e a partir daí desenhamos o sistema visual completo, com regras claras para que a marca se mantenha coerente em qualquer canal.",
      deliverables: [
        "Pesquisa de mercado e moodboard",
        "Logotipo principal e variações",
        "Tipografia, paleta e grid system",
        "Manual de marca em PDF",
        "Templates editáveis (Figma / Canva)",
        "Aplicações reais (papelaria, social, mockups)",
      ],
      averageTime: "2 a 4 semanas",
      startingPrice: "A partir de R$ 1.200",
    },
  },
];
