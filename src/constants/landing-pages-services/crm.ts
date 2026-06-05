import type { ServiceLandingPageContent } from "@/types/services";

export const crmServiceContent: ServiceLandingPageContent = {
  id: "crm",
  seoTitle: "CRM sob medida para relacionamento e acompanhamento comercial",
  seoDescription:
    "Organize contatos, oportunidades, retornos e histórico comercial com um CRM desenhado para o seu processo real de atendimento.",
  hero: {
    eyebrow: "CRM",
    title:
      "CRM sob medida para parar de perder contexto, contatos e oportunidades",
    description:
      "Estruturamos sistemas para centralizar histórico, organizar funil e dar mais previsibilidade ao relacionamento com clientes e leads.",
    highlights: [
      "Histórico centralizado de cada contato",
      "Funil ajustado ao seu processo comercial",
      "Acompanhamento mais consistente da equipe",
    ],
  },
  showcase: {
    eyebrow: "Demonstrações",
    title: "O que um CRM precisa mostrar para a equipe agir com mais clareza",
    description:
      "Um bom CRM não é só cadastro. Ele precisa organizar prioridade, registrar contexto e facilitar o próximo passo do atendimento.",
    mockupTitle: "Jornada de relacionamento comercial",
    mockupDescription:
      "Montamos um mockup com visão de pipeline, últimos contatos e tarefas para ajudar a equipe a não deixar oportunidades esfriarem.",
    mockupSteps: [
      "Pipeline por etapa do funil",
      "Histórico de interações no mesmo lugar",
      "Próximas ações visíveis para a equipe",
    ],
    items: [
      {
        label: "Contexto",
        title: "Cada contato com histórico acessível",
        description:
          "Quando o time enxerga o que já foi tratado, fica mais fácil continuar a conversa sem repetir perguntas ou perder confiança.",
      },
      {
        label: "Prioridade",
        title: "Leads e clientes com próximo passo definido",
        description:
          "O CRM ajuda a transformar lembranças soltas em ações concretas, com melhor noção do que precisa de atenção agora.",
      },
      {
        label: "Gestão",
        title: "Visão melhor do andamento comercial",
        description:
          "A liderança ganha clareza sobre gargalos, ritmo do time e oportunidades que precisam de intervenção.",
      },
    ],
  },
  pricing: {
    eyebrow: "Investimento",
    title: "Faixas para organizar relacionamento, funil e histórico comercial",
    description:
      "O valor varia conforme número de etapas do funil, nível de histórico desejado, relatórios e rotinas que precisam ser acompanhadas.",
    implementationLabel: "Implementação",
    retainerLabel: "Evolução mensal",
    disclaimer:
      "Integrações, automações e necessidades mais profundas de acompanhamento podem alterar o escopo da proposta.",
    plans: [
      {
        name: "Relacionamento essencial",
        description:
          "Para centralizar contatos e criar um fluxo comercial mais organizado desde o básico.",
        ctaLabel: "Solicitar proposta",
        features: [
          "Cadastro e histórico centralizado de contatos",
          "Etapas iniciais do funil comercial",
          "Próximas ações visíveis para a equipe",
          "Base organizada para sair da planilha",
        ],
        implementation: {
          prefix: "A partir de",
          amount: "R$ 45.000",
          suffix: "por projeto",
          note: "Bom ponto de partida para equipes pequenas que precisam parar de perder contexto e retorno.",
        },
        retainer: {
          prefix: "A partir de",
          amount: "R$ 2.500",
          suffix: "por mês",
          note: "Cobre refinamentos de processo, campos, visões e melhorias incrementais do CRM.",
        },
      },
      {
        name: "Pipeline comercial",
        description:
          "Para times que precisam de mais leitura do funil, acompanhamento e clareza sobre o andamento das oportunidades.",
        badge: "Mais procurado",
        featured: true,
        ctaLabel: "Quero esse formato",
        features: [
          "Pipeline com mais profundidade por etapa",
          "Histórico mais completo do relacionamento",
          "Visões gerenciais e priorização de oportunidades",
          "Estrutura para pós-venda e reativação",
          "Base preparada para integrações futuras",
        ],
        implementation: {
          prefix: "A partir de",
          amount: "R$ 75.000",
          suffix: "por projeto",
          note: "Indicado quando o comercial já precisa de mais previsibilidade, rastreabilidade e visão gerencial.",
        },
        retainer: {
          prefix: "A partir de",
          amount: "R$ 4.500",
          suffix: "por mês",
          note: "Permite evoluir funis, relatórios, campos e novas necessidades do processo sem recomeçar do zero.",
        },
      },
      {
        name: "Sob medida",
        description:
          "Para operações com múltiplas equipes, pós-venda estruturado ou processos comerciais fora do padrão.",
        ctaLabel: "Falar sobre escopo",
        features: [
          "Modelagem sob medida do fluxo comercial",
          "Ajuste fino para regras do seu negócio",
          "Possibilidade de integrações e automações",
          "Planejamento de implantação por fases",
        ],
        implementation: {
          prefix: "A partir de",
          amount: "R$ 120.000",
          suffix: "conforme operação",
          note: "Quando o relacionamento com clientes exige múltiplas jornadas, áreas ou regras específicas.",
        },
        retainer: {
          prefix: "A partir de",
          amount: "R$ 7.500",
          suffix: "conforme operação",
          note: "Ideal para times que tratam CRM como produto vivo dentro da operação comercial.",
        },
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "O que costuma surgir antes de criar um CRM próprio",
    description:
      "Essas dúvidas aparecem bastante quando a operação comercial já não consegue mais se sustentar em planilhas e memória.",
    items: [
      {
        question: "CRM serve só para equipes grandes de vendas?",
        answer:
          "Não. Mesmo equipes pequenas se beneficiam quando precisam registrar contexto, manter rotina de retorno e acompanhar oportunidades com consistência.",
      },
      {
        question: "Vocês conseguem adaptar o funil ao nosso processo?",
        answer:
          "Sim. A ideia é respeitar a forma como seu comercial trabalha hoje e organizar isso com mais clareza e controle.",
      },
      {
        question: "Dá para acompanhar pós-venda também?",
        answer:
          "Sim. O sistema pode considerar relacionamento contínuo, suporte, reativação e outras etapas além da venda inicial.",
      },
      {
        question: "O CRM pode integrar com outros sistemas depois?",
        answer:
          "Pode. Se fizer sentido para a operação, a base pode evoluir para integrações com financeiro, atendimento, ERP ou automações.",
      },
    ],
  },
  cta: {
    eyebrow: "Próximo passo",
    title:
      "Se os contatos estão espalhados e o comercial perde rastreabilidade, podemos organizar esse fluxo",
    description:
      "Mostre como sua equipe acompanha clientes hoje e desenhamos um CRM mais aderente à rotina do seu negócio.",
    primaryLabel: "Falar sobre CRM",
    secondaryLabel: "Ver todos os serviços",
    note: "A implantação pode começar enxuta, com o núcleo do relacionamento, e ganhar novas camadas depois.",
  },
};
