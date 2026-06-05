import type { ServiceLandingPageContent } from "@/types/services";

export const automacaoServiceContent: ServiceLandingPageContent = {
  id: "automacao",
  seoTitle: "Automação sob medida para reduzir retrabalho e acelerar a rotina",
  seoDescription:
    "Automatizamos tarefas repetitivas, integrações e fluxos operacionais para liberar tempo e dar mais consistência ao trabalho da equipe.",
  hero: {
    eyebrow: "Automação",
    title:
      "Automação sob medida para cortar retrabalho e devolver tempo para o que importa",
    description:
      "Mapeamos etapas manuais, integrações e gargalos da operação para construir fluxos mais rápidos, previsíveis e menos dependentes de intervenção humana.",
    highlights: [
      "Menos tarefas repetitivas no dia a dia",
      "Fluxos mais consistentes entre áreas",
      "Mais tempo para trabalho estratégico",
    ],
  },
  showcase: {
    eyebrow: "Demonstrações",
    title:
      "Como uma automação bem pensada melhora a rotina sem virar um processo confuso",
    description:
      "O ganho real aparece quando o fluxo é simples de entender, fácil de acompanhar e alinhado às exceções do negócio.",
    mockupTitle: "Esteira automatizada de tarefas",
    mockupDescription:
      "Criamos um mockup que mostra gatilhos, processamento e checkpoints para visualizar melhor o antes e depois da operação.",
    mockupSteps: [
      "Entrada automatizada de dados",
      "Regras e decisões do fluxo",
      "Saída com rastreabilidade da ação",
    ],
    items: [
      {
        label: "Mapeamento",
        title: "Entender o processo antes de automatizar",
        description:
          "Automação boa nasce de um fluxo claro. Por isso mapeamos o que realmente precisa ser preservado, reduzido ou removido.",
      },
      {
        label: "Execução",
        title: "Tarefas repetitivas saem da mão da equipe",
        description:
          "Rotinas que antes exigiam copiar, conferir e repassar informações podem virar etapas executadas automaticamente.",
      },
      {
        label: "Controle",
        title: "Visão melhor do que aconteceu no fluxo",
        description:
          "Além de automatizar, é importante saber onde o processo está, o que falhou e o que foi concluído com sucesso.",
      },
    ],
  },
  pricing: {
    eyebrow: "Investimento",
    title:
      "Faixas para começar a automatizar o que mais consome tempo da equipe",
    description:
      "A faixa muda conforme a quantidade de etapas do fluxo, regras de decisão, integrações e pontos de exceção da rotina.",
    implementationLabel: "Implementação",
    retainerLabel: "Evolução mensal",
    disclaimer:
      "Fluxos com múltiplos sistemas, regras condicionais complexas ou várias áreas envolvidas podem pedir um escopo maior.",
    plans: [
      {
        name: "Automação inicial",
        description:
          "Para substituir tarefas repetitivas e criar um primeiro fluxo automatizado com ganho rápido.",
        ctaLabel: "Solicitar proposta",
        features: [
          "Mapeamento do fluxo atual",
          "Automação de uma frente prioritária",
          "Rastreabilidade básica do processo",
          "Entrega orientada ao ganho operacional",
        ],
        implementation: {
          prefix: "A partir de",
          amount: "R$ 4.000",
          suffix: "por projeto",
          note: "Ótima faixa para reduzir retrabalho em um ponto crítico antes de expandir para outras rotinas.",
        },
        retainer: {
          prefix: "A partir de",
          amount: "R$ 490",
          suffix: "por mês",
          note: "Cobre ajustes, refinamentos e pequenas evoluções no fluxo já automatizado.",
        },
      },
      {
        name: "Fluxo orquestrado",
        description:
          "Para automatizações com mais etapas, decisões e necessidade de acompanhar a operação com mais clareza.",
        badge: "Mais procurado",
        featured: true,
        ctaLabel: "Quero esse formato",
        features: [
          "Mais regras de decisão dentro do fluxo",
          "Integração de etapas críticas da rotina",
          "Checkpoints de visibilidade e controle",
          "Redução maior de tarefas manuais",
          "Base pronta para novas automações",
        ],
        implementation: {
          prefix: "A partir de",
          amount: "R$ 12.000",
          suffix: "por projeto",
          note: "Indicado para operações que já sabem onde estão os gargalos e precisam de uma automação mais estratégica.",
        },
        retainer: {
          prefix: "A partir de",
          amount: "R$ 1.200",
          suffix: "por mês",
          note: "Mantém a esteira evoluindo com novos gatilhos, regras e ajustes conforme a operação aprende.",
        },
      },
      {
        name: "Sob medida",
        description:
          "Para operações com múltiplos sistemas, exceções frequentes ou necessidade de automação em várias frentes.",
        ctaLabel: "Falar sobre escopo",
        features: [
          "Desenho aprofundado do processo",
          "Escopo personalizado por área ou fluxo",
          "Integrações e governança conforme cenário",
          "Planejamento para expansão em fases",
        ],
        implementation: {
          prefix: "A partir de",
          amount: "R$ 20.000",
          suffix: "conforme processo",
          note: "Quando o objetivo é reduzir dependência operacional em fluxos mais amplos e interdependentes.",
        },
        retainer: {
          prefix: "A partir de",
          amount: "R$ 2.500",
          suffix: "conforme processo",
          note: "Faz sentido para operações que precisam lapidar continuamente as automações conforme o negócio cresce.",
        },
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Perguntas frequentes antes de investir em automação",
    description:
      "Essas dúvidas ajudam a separar automação útil de automação que só adiciona complexidade à operação.",
    items: [
      {
        question: "Qual tipo de tarefa faz mais sentido automatizar primeiro?",
        answer:
          "Geralmente começamos por tarefas repetitivas, manuais e críticas para o fluxo, principalmente as que consomem tempo ou geram erro com frequência.",
      },
      {
        question: "Automação serve só para empresas grandes?",
        answer:
          "Não. Pequenas operações também ganham muito quando conseguem reduzir retrabalho e manter um processo mais previsível.",
      },
      {
        question:
          "Dá para automatizar sem perder visibilidade do que acontece?",
        answer:
          "Sim. O ideal é justamente automatizar com rastreabilidade, para que a equipe continue sabendo o que entrou, o que saiu e onde houve exceção.",
      },
      {
        question: "Vocês também ajudam a revisar o processo antes?",
        answer:
          "Sim. Muitas vezes o ganho vem tanto da automação quanto do redesenho de um fluxo que já estava confuso antes dela.",
      },
    ],
  },
  cta: {
    eyebrow: "Próximo passo",
    title:
      "Se a equipe perde horas repetindo tarefas manuais, podemos redesenhar esse fluxo com automação",
    description:
      "Conte quais etapas mais consomem tempo hoje e avaliamos por onde começar para gerar ganho rápido e sustentável.",
    primaryLabel: "Falar sobre automação",
    secondaryLabel: "Ver todos os serviços",
    note: "Podemos começar por um fluxo crítico e expandir a automação em novas frentes depois.",
  },
};
