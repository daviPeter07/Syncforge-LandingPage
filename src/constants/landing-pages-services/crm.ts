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
    title:
      "Projetos demonstrativos de CRM para organizar contexto, funil e relacionamento",
    description:
      "A proposta aqui e mostrar formatos de CRM que ajudam times comerciais a nao perder contexto, prioridade e continuidade de conversa.",
    note: "Os exemplos abaixo sao demonstrativos e servem para ilustrar como um CRM sob medida pode ser moldado ao processo de cada negocio.",
    projects: [
      {
        segment: "Consultoria B2B",
        title:
          "CRM com pipeline consultivo e historico centralizado por oportunidade",
        company: "Clareza Consultoria",
        client: "Patricia Souza",
        summary:
          "Projeto demonstrativo para um comercial que precisava acompanhar negociacoes mais longas, registrar contexto e organizar proximo passo sem depender de memoria.",
        scope: [
          "Pipeline por etapa",
          "Historico por lead e cliente",
          "Acoes futuras visiveis para o time",
        ],
        outcome:
          "Mais continuidade de conversa e menos risco de perder oportunidade por falta de organizacao comercial.",
      },
      {
        segment: "Escritorio comercial",
        title:
          "Sistema para organizar contatos quentes, retornos e prioridades da equipe",
        company: "Vértice Soluções Comerciais",
        client: "Diego Nascimento",
        summary:
          "Uma demonstracao pensada para times que recebem muitos contatos e precisam decidir rapido quem precisa de atencao agora.",
        scope: [
          "Fila de prioridades",
          "Leitura de leads por etapa",
          "Visao rapida para gestao",
        ],
        outcome:
          "Melhor distribuicao de energia comercial e mais clareza sobre onde o time precisa agir primeiro.",
      },
      {
        segment: "Pos-venda e reativacao",
        title:
          "CRM para acompanhamento continuo, renovacoes e reativacao de carteira",
        company: "Nexo Beneficios Corporativos",
        client: "Juliana Prado",
        summary:
          "Exemplo de CRM que vai alem da venda inicial e ajuda a empresa a manter relacionamento, registrar atendimento e recuperar contas mornas.",
        scope: [
          "Jornadas apos a venda",
          "Historico de relacionamento",
          "Base para reativacao e renovacao",
        ],
        outcome:
          "Mais visibilidade do ciclo completo do cliente, e nao apenas do momento de fechar a venda.",
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
