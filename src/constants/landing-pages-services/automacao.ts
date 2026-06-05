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
