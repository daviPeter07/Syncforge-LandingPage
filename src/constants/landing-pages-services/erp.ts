import type { ServiceLandingPageContent } from "@/types/services";

export const erpServiceContent: ServiceLandingPageContent = {
  id: "erp",
  seoTitle: "ERP sob medida para integrar setores e centralizar a operação",
  seoDescription:
    "Desenvolvemos ERPs sob medida para conectar áreas, unificar informações e dar mais controle à operação da empresa.",
  hero: {
    eyebrow: "ERP",
    title:
      "ERP sob medida para integrar setores e tirar a operação do modo remendo",
    description:
      "Quando cada área trabalha isolada, a empresa perde tempo e contexto. Estruturamos ERPs que conectam rotinas, dados e responsabilidades.",
    highlights: [
      "Mais integração entre áreas críticas",
      "Informações centralizadas e rastreáveis",
      "Base mais sólida para crescer com controle",
    ],
  },
  why: {
    eyebrow: "Por que um ERP sob medida?",
    title: "Porque empresa que cresce com setor ilhado acumula dívida operacional que um dia não paga",
    description:
      "ERP não é sobre sistema grande. É sobre cada área saber o que a outra está fazendo sem precisar de reunião para descobrir.",
    items: [
      {
        title: "Cada área sabe o que a outra está fazendo",
        description:
          "Quando os setores trabalham isolados, a empresa perde tempo e contexto. Um ERP conecta as pontas e alinha a operação sem depender de 'fulano mandou um email'.",
      },
      {
        title: "Informação centralizada, decisão descentralizada",
        description:
          "Com uma base única, cada gestor enxerga o que precisa sem depender de planilhas ou de perguntar para outros setores. Autonomia com consistência.",
      },
      {
        title: "Operação que escala sem perder qualidade",
        description:
          "Empresas que crescem sem integração acumulam ruído operacional. Um ERP é a fundação para crescer com consistência, controle e sem retrabalho entre áreas.",
      },
    ],
  },
  showcase: {
    eyebrow: "Demonstrações",
    title:
      "Projetos demonstrativos de ERP para integrar setores sem improviso entre áreas",
    description:
      "O objetivo desta seção é mostrar recortes de ERP em contextos onde a empresa já precisa conectar operação, gestão e dados com mais consistência.",
  },
  pricing: {
    eyebrow: "Investimento",
    title: "Faixas para integrar setores e começar um ERP por etapas seguras",
    description:
      "ERPs variam muito conforme módulos, integrações, número de áreas e profundidade das regras da operação. Por isso trabalhamos por faixas.",
    implementationLabel: "Implementação",
    retainerLabel: "Evolução mensal",
    disclaimer:
      "Projetos com muitos módulos, times, permissões ou integração com sistemas legados podem exigir planejamento mais amplo por fases.",
    plans: [
      {
        name: "Núcleo inicial",
        description:
          "Para integrar os primeiros pontos críticos da operação e criar uma base sólida para expansão.",
        ctaLabel: "Solicitar proposta",
        features: [
          "Mapeamento do núcleo operacional prioritário",
          "Estrutura inicial de dados e fluxos",
          "Integração entre áreas mais críticas",
          "Base preparada para novos módulos",
        ],
        implementation: {
          prefix: "A partir de",
          amount: "R$ 90.000",
          suffix: "por projeto",
          note: "Boa porta de entrada para empresas que precisam sair do remendo entre setores e centralizar informações.",
        },
        retainer: {
          prefix: "A partir de",
          amount: "R$ 5.000",
          suffix: "por mês",
          note: "Permite continuar a evolução do ERP com novos módulos, refinamentos e ajustes de processo.",
        },
      },
      {
        name: "Integração operacional",
        description:
          "Para negócios que já precisam conectar mais frentes, mais regras e maior leitura gerencial da operação.",
        badge: "Mais procurado",
        featured: true,
        ctaLabel: "Quero esse formato",
        features: [
          "Mais módulos ou frentes conectadas",
          "Fluxos intersetoriais com mais profundidade",
          "Visões de gestão e rastreabilidade melhores",
          "Base técnica pronta para crescer por fases",
          "Organização mais forte da operação como produto",
        ],
        implementation: {
          prefix: "A partir de",
          amount: "R$ 150.000",
          suffix: "por projeto",
          note: "Indicado quando a empresa já sente impacto real da desconexão entre setores e precisa integrar com mais consistência.",
        },
        retainer: {
          prefix: "A partir de",
          amount: "R$ 8.500",
          suffix: "por mês",
          note: "Ideal para seguir expandindo o ERP com governança, novos módulos e evolução operacional contínua.",
        },
      },
      {
        name: "Sob medida",
        description:
          "Para empresas com operação ampla, legado complexo ou necessidade de planejamento técnico mais detalhado.",
        ctaLabel: "Falar sobre escopo",
        features: [
          "Descoberta aprofundada por área e processo",
          "Desenho por módulos e fases de implantação",
          "Integrações e dependências mapeadas",
          "Estratégia de evolução de médio prazo",
        ],
        implementation: {
          prefix: "A partir de",
          amount: "R$ 220.000",
          suffix: "conforme operação",
          note: "Quando o ERP precisa acomodar múltiplas frentes, legados e uma arquitetura mais estratégica de crescimento.",
        },
        retainer: {
          prefix: "A partir de",
          amount: "R$ 12.000",
          suffix: "conforme operação",
          note: "Recomendado para operações que tratam o ERP como infraestrutura viva da empresa e querem evolução contínua.",
        },
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Dúvidas comuns antes de pensar em um ERP sob medida",
    description:
      "Essas perguntas aparecem quando a empresa já sente o peso de processos desconectados e sistemas que não conversam.",
    items: [
      {
        question: "ERP sob medida não é algo grande demais para começar?",
        answer:
          "Não precisa nascer gigante. Podemos começar pelos módulos mais críticos e expandir a solução conforme a operação pede novas integrações.",
      },
      {
        question: "Vocês conseguem mapear setores diferentes da empresa?",
        answer:
          "Sim. O trabalho começa entendendo como cada área opera hoje e onde a falta de integração está gerando ruído ou retrabalho.",
      },
      {
        question: "É possível evoluir o ERP por fases?",
        answer:
          "Sim. Essa costuma ser a abordagem mais saudável para validar prioridades e amadurecer a solução sem travar a operação.",
      },
      {
        question: "O ERP pode incorporar financeiro, vendas e relacionamento?",
        answer:
          "Pode. Justamente por ser sob medida, ele pode conectar os módulos que fazem sentido para a realidade do seu negócio.",
      },
    ],
  },
  cta: {
    eyebrow: "Próximo passo",
    title:
      "Se sua empresa opera com sistemas e processos desconectados, podemos desenhar uma base integrada",
    description:
      "Explique como os setores se relacionam hoje e avaliamos por onde começar a integração da operação.",
    primaryLabel: "Falar sobre ERP",
    secondaryLabel: "Ver todos os serviços",
    note: "A implementação pode começar pelos módulos que mais travam a rotina e expandir depois com novas frentes.",
  },
};
