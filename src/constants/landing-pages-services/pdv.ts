import type { ServiceLandingPageContent } from "@/types/services";

export const pdvServiceContent: ServiceLandingPageContent = {
  id: "pdv",
  seoTitle: "PDV sob medida para vendas, estoque e operação",
  seoDescription:
    "Desenvolvemos sistemas de PDV para registrar vendas, acompanhar estoque e dar mais controle para a operação comercial.",
  hero: {
    eyebrow: "PDV",
    title:
      "PDV sob medida para vender com agilidade e controlar a operação sem improviso",
    description:
      "Criamos sistemas de ponto de venda adaptados à rotina da sua loja, com foco em caixa, produtos, estoque e acompanhamento do dia a dia.",
    highlights: [
      "Fluxo de venda mais direto no balcão",
      "Visão prática de produtos e estoque",
      "Rotina mais organizada para a equipe",
    ],
  },
  why: {
    eyebrow: "Por que um PDV sob medida?",
    title: "Porque vender nao pode depender de um sistema que trava o atendimento",
    description:
      "Um PDV nao e sobre cadastrar produtos. E sobre fazer a venda acontecer sem atrito e a operacao respirar.",
    items: [
      {
        title: "Sua equipe merece um sistema que nao atrapalhe",
        description:
          "Um PDV lento ou confuso frustra o atendimento e afasta cliente. Um sistema sob medida simplifica a venda e deixa o foco onde importa: em quem esta do outro lado do balcao.",
      },
      {
        title: "Controle sem planilha paralela",
        description:
          "Quando o estoque, o caixa e as vendas estao no mesmo lugar, sua operacao ganha previsibilidade. Voce dorme mais tranquilo sabendo que o numero fecha.",
      },
      {
        title: "Crescer sem perder o controle",
        description:
          "Uma operacao que escala precisa de uma base solida. O PDV certo acompanha o crescimento sem exigir retrabalho ou migracoes traumaticas.",
      },
    ],
  },
  showcase: {
    eyebrow: "Demonstrações",
    title:
      "Projetos demonstrativos de PDV para contextos reais de venda e operacao",
    description:
      "Aqui a ideia e mostrar como o PDV pode ser adaptado ao ritmo de cada negocio, com mais clareza para venda, estoque e fechamento.",
    note: "Os exemplos abaixo sao demonstrativos para ilustrar recortes de operacao que um sistema de PDV sob medida pode atender.",
    projects: [
      {
        segment: "Mercado de bairro",
        title:
          "PDV com consulta rapida de produtos e fechamento mais limpo no caixa",
        company: "Mercado Aurora",
        client: "Carlos Henrique",
        href: "#",
        summary:
          "Projeto pensado para uma operacao que precisava vender mais rapido no balcao e reduzir confusao entre itens, estoque e fechamento diario.",
        scope: [
          "Busca agil de produtos",
          "Fechamento de venda mais direto",
          "Visao inicial de estoque e caixa",
        ],
        outcome:
          "Menos atrito no atendimento e mais previsibilidade para quem precisa acompanhar o que entrou, saiu e faltou repor.",
      },
      {
        segment: "Loja especializada",
        title:
          "Sistema para operacao com catalogo maior e necessidade de rastrear melhor a venda",
        company: "Casa do Norte Ramos",
        client: "Fernanda Lima",
        href: "#",
        summary:
          "Uma proposta para loja com maior variedade de itens, onde a equipe precisava consultar, registrar e conferir com mais consistencia.",
        scope: [
          "Catalogo mais organizado",
          "Fluxo de atendimento por etapas",
          "Resumo operacional para gestao",
        ],
        outcome:
          "Mais clareza na operacao e menos dependencia de controles paralelos para entender a movimentacao do dia.",
      },
      {
        segment: "Food service",
        title:
          "PDV orientado a atendimento rapido e integracao futura com outras rotinas da casa",
        company: "Bistro Porto 81",
        client: "Aline Duarte",
        href: "#",
        summary:
          "Demonstracao de um PDV pensado para ambiente com giro mais alto, onde agilidade de operacao pesa tanto quanto controle.",
        scope: [
          "Atendimento mais fluido",
          "Estrutura para evolucao de relatorios",
          "Base pronta para novas rotinas",
        ],
        outcome:
          "Um sistema com cara de operacao viva, preparado para crescer sem travar a equipe no dia a dia.",
      },
    ],
  },
  pricing: {
    eyebrow: "Investimento",
    title: "Faixas para estruturar um PDV mais aderente ao ritmo da operação",
    description:
      "O investimento depende da complexidade do caixa, do catálogo, do estoque e dos módulos que precisam nascer junto com a operação.",
    implementationLabel: "Implementação",
    retainerLabel: "Evolução mensal",
    disclaimer:
      "Projetos com múltiplos perfis de acesso, impressões, integrações ou relatórios específicos podem alterar a faixa final.",
    plans: [
      {
        name: "Base operacional",
        description:
          "Para estruturar o fluxo principal de venda, consulta e controle essencial da loja.",
        ctaLabel: "Solicitar proposta",
        features: [
          "Fluxo principal de atendimento e venda",
          "Cadastro de produtos e visão inicial de estoque",
          "Interface pensada para o balcão",
          "Base pronta para crescer depois",
        ],
        implementation: {
          prefix: "A partir de",
          amount: "R$ 25.000",
          suffix: "por projeto",
          note: "Faz sentido para operações que querem sair de processos improvisados e ganhar controle no essencial.",
        },
        retainer: {
          prefix: "A partir de",
          amount: "R$ 1.500",
          suffix: "por mês",
          note: "Permite evoluir telas, ajustes operacionais e pequenas melhorias com previsibilidade.",
        },
      },
      {
        name: "Operação completa",
        description:
          "Para lojas que precisam de um PDV mais robusto, com mais regras de negócio e visão de gestão.",
        badge: "Mais procurado",
        featured: true,
        ctaLabel: "Quero esse formato",
        features: [
          "Fluxos comerciais e operacionais mais completos",
          "Regras de estoque e fechamento mais claras",
          "Relatórios e visões resumidas para gestão",
          "Perfis de uso para equipe",
          "Estrutura pensada para expansão",
        ],
        implementation: {
          prefix: "A partir de",
          amount: "R$ 45.000",
          suffix: "por projeto",
          note: "Indicado para operações com mais volume, mais equipe ou necessidade de maior rastreabilidade.",
        },
        retainer: {
          prefix: "A partir de",
          amount: "R$ 2.900",
          suffix: "por mês",
          note: "Ideal quando o sistema precisa evoluir com frequência junto da operação comercial.",
        },
      },
      {
        name: "Sob medida",
        description:
          "Para cenários com múltiplas unidades, integrações ou exigências muito particulares da operação.",
        ctaLabel: "Falar sobre escopo",
        features: [
          "Mapeamento detalhado do processo comercial",
          "Possibilidade de módulos e integrações extras",
          "Adaptação às rotinas da empresa",
          "Planejamento por fases quando necessário",
        ],
        implementation: {
          prefix: "A partir de",
          amount: "R$ 70.000",
          suffix: "conforme operação",
          note: "Quando o PDV precisa conversar com mais áreas, mais unidades ou mais regras além do fluxo padrão.",
        },
        retainer: {
          prefix: "A partir de",
          amount: "R$ 4.500",
          suffix: "conforme operação",
          note: "Recomendado para operações que evoluem constantemente e exigem acompanhamento próximo do produto.",
        },
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Dúvidas comuns antes de estruturar um PDV próprio",
    description:
      "Esses pontos ajudam a entender quando vale investir em uma solução ajustada à rotina da sua operação.",
    items: [
      {
        question: "Um PDV sob medida faz sentido para loja pequena?",
        answer:
          "Faz quando a operação já sente limites em planilhas, sistemas genéricos ou processos muito manuais que travam o atendimento.",
      },
      {
        question:
          "Dá para adaptar o sistema ao jeito que a equipe já trabalha?",
        answer:
          "Esse é justamente o objetivo. A solução precisa acompanhar o fluxo do negócio, e não obrigar a equipe a contornar o sistema o tempo todo.",
      },
      {
        question: "Vocês conseguem prever estoque e relatórios depois?",
        answer:
          "Sim. Podemos estruturar a base já pensando em evolução para relatórios, permissões, catálogo e novos módulos operacionais.",
      },
      {
        question: "O PDV pode conversar com outras partes da empresa?",
        answer:
          "Pode. Conforme a necessidade, ele pode evoluir para integração com financeiro, cadastro, CRM ou módulos mais amplos.",
      },
    ],
  },
  cta: {
    eyebrow: "Próximo passo",
    title:
      "Se o caixa, o estoque e a venda ainda dependem de muitos atalhos, podemos redesenhar essa operação",
    description:
      "Explique como sua loja funciona hoje e montamos uma direção para um PDV que simplifique o trabalho da equipe.",
    primaryLabel: "Falar sobre PDV",
    secondaryLabel: "Ver todos os serviços",
    note: "Podemos começar pelo fluxo essencial de venda e expandir a solução conforme a operação amadurece.",
  },
};
