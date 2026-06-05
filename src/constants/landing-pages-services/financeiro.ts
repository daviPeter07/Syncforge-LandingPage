import type { ServiceLandingPageContent } from "@/types/services";

export const financeiroServiceContent: ServiceLandingPageContent = {
  id: "financeiro",
  seoTitle:
    "Gestão financeira sob medida para acompanhar entradas, saídas e indicadores",
  seoDescription:
    "Criamos soluções financeiras para organizar caixa, cobranças, compromissos e leitura de indicadores com mais segurança.",
  hero: {
    eyebrow: "Financeiro",
    title:
      "Gestão financeira sob medida para enxergar melhor o caixa e decidir com menos incerteza",
    description:
      "Estruturamos sistemas para acompanhar entradas, saídas, vencimentos, cobranças e indicadores de forma mais clara para a operação.",
    highlights: [
      "Leitura mais limpa do fluxo financeiro",
      "Controle melhor de cobranças e compromissos",
      "Base mais segura para tomada de decisão",
    ],
  },
  showcase: {
    eyebrow: "Demonstrações",
    title:
      "O que um sistema financeiro precisa mostrar para não virar só mais um cadastro",
    description:
      "A rotina financeira exige visão de caixa, prazos e pendências, mas também precisa transformar dados em leitura útil para decisão.",
    mockupTitle: "Painel de caixa e compromissos",
    mockupDescription:
      "Simulamos uma visão com indicadores de movimentação, vencimentos próximos e pontos de atenção do período.",
    mockupSteps: [
      "Entradas e saídas organizadas",
      "Compromissos com vencimento visível",
      "Indicadores resumidos para gestão",
    ],
    items: [
      {
        label: "Rotina",
        title: "Menos dependência de controles paralelos",
        description:
          "Centralizar registros reduz o vai e volta entre planilhas, conversas e anotações dispersas pela operação.",
      },
      {
        label: "Previsão",
        title: "Mais clareza para olhar caixa e pendências",
        description:
          "Quando o fluxo financeiro fica visível, a gestão consegue antecipar riscos e tomar decisão com mais segurança.",
      },
      {
        label: "Crescimento",
        title: "Estrutura para relatórios e integrações futuras",
        description:
          "A base pode evoluir para relatórios gerenciais, conciliação, automações e conexão com outros módulos da empresa.",
      },
    ],
  },
  pricing: {
    eyebrow: "Investimento",
    title:
      "Faixas para organizar caixa, cobranças e leitura financeira da operação",
    description:
      "A estimativa muda conforme a profundidade do controle financeiro, número de rotinas, indicadores e conexões com outras áreas.",
    implementationLabel: "Implementação",
    retainerLabel: "Evolução mensal",
    disclaimer:
      "Conciliação, integrações, múltiplos centros de controle e regras específicas podem ampliar o escopo da solução.",
    plans: [
      {
        name: "Controle essencial",
        description:
          "Para sair dos controles espalhados e estruturar uma visão financeira mais confiável do básico.",
        ctaLabel: "Solicitar proposta",
        features: [
          "Entradas e saídas organizadas",
          "Controle inicial de compromissos e vencimentos",
          "Visão prática do fluxo de caixa",
          "Base pronta para evoluir com segurança",
        ],
        implementation: {
          prefix: "A partir de",
          amount: "R$ 50.000",
          suffix: "por projeto",
          note: "Boa opção para empresas que precisam começar com previsibilidade e menos dependência de planilhas paralelas.",
        },
        retainer: {
          prefix: "A partir de",
          amount: "R$ 3.000",
          suffix: "por mês",
          note: "Permite evoluir relatórios, novos campos e rotinas financeiras com consistência.",
        },
      },
      {
        name: "Gestão ampliada",
        description:
          "Para operações que precisam de mais leitura gerencial, mais indicadores e maior domínio sobre pendências e caixa.",
        badge: "Mais procurado",
        featured: true,
        ctaLabel: "Quero esse formato",
        features: [
          "Fluxo financeiro mais completo",
          "Indicadores resumidos para decisão",
          "Cobranças e compromissos com mais clareza",
          "Base para integração com outras áreas",
          "Estrutura mais forte para gestão do crescimento",
        ],
        implementation: {
          prefix: "A partir de",
          amount: "R$ 85.000",
          suffix: "por projeto",
          note: "Indicado quando o financeiro já precisa entregar leitura operacional e gerencial ao mesmo tempo.",
        },
        retainer: {
          prefix: "A partir de",
          amount: "R$ 5.000",
          suffix: "por mês",
          note: "Ideal para manter o sistema financeiro evoluindo junto com as novas necessidades da gestão.",
        },
      },
      {
        name: "Sob medida",
        description:
          "Para operações com controles mais sofisticados, múltiplos fluxos ou necessidade de integração com módulos maiores.",
        ctaLabel: "Falar sobre escopo",
        features: [
          "Mapeamento profundo da rotina financeira",
          "Regras personalizadas conforme operação",
          "Possibilidade de conexões com vendas e ERP",
          "Planejamento técnico por fases",
        ],
        implementation: {
          prefix: "A partir de",
          amount: "R$ 120.000",
          suffix: "conforme operação",
          note: "Quando o controle financeiro precisa conversar fortemente com outros setores ou modelos de cobrança específicos.",
        },
        retainer: {
          prefix: "A partir de",
          amount: "R$ 7.500",
          suffix: "conforme operação",
          note: "Recomendado para empresas que querem evoluir o financeiro como peça central da operação.",
        },
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title:
      "Pontos que normalmente surgem antes de estruturar um financeiro próprio",
    description:
      "Essas perguntas ajudam a entender onde um sistema dedicado pode gerar mais previsibilidade para a empresa.",
    items: [
      {
        question: "Isso substitui planilhas completamente?",
        answer:
          "O objetivo é justamente reduzir a dependência de controles paralelos e concentrar a operação em um fluxo mais confiável e rastreável.",
      },
      {
        question: "Vocês conseguem adaptar à rotina atual de cobrança?",
        answer:
          "Sim. O sistema precisa respeitar a forma como a empresa opera hoje e organizar isso de maneira mais clara para a equipe.",
      },
      {
        question: "É possível enxergar indicadores simples para gestão?",
        answer:
          "Sim. Podemos estruturar visões resumidas para acompanhar caixa, pendências, períodos e outros sinais importantes para decisão.",
      },
      {
        question: "Dá para integrar depois com outros módulos?",
        answer:
          "Dá. A solução pode evoluir junto com a empresa e se conectar a vendas, ERP, CRM ou automações operacionais.",
      },
    ],
  },
  cta: {
    eyebrow: "Próximo passo",
    title:
      "Se o financeiro ainda depende de muitos controles espalhados, podemos organizar isso em uma operação mais clara",
    description:
      "Mostre como sua equipe controla caixa, cobranças e vencimentos hoje para desenharmos um fluxo mais confiável.",
    primaryLabel: "Falar sobre financeiro",
    secondaryLabel: "Ver todos os serviços",
    note: "Podemos começar pelo núcleo do controle financeiro e evoluir a solução com indicadores e integrações depois.",
  },
};
