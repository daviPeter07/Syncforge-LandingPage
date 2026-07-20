import {
  ClipboardCheck,
  FileText,
  MonitorCog,
  Rocket,
  ScanSearch,
} from "lucide-react";

export const PROCESS_STEPS = [
  {
    step: "01",
    icon: ScanSearch,
    title: "Entendemos o negócio",
    description: "Ouvimos a necessidade e identificamos o problema real.",
    deliverables: [
      "Diagnóstico da operação e dos desafios atuais",
      "Objetivos e prioridades alinhados com o cliente",
    ],
  },
  {
    step: "02",
    icon: FileText,
    title: "Definimos a solução",
    description: "Alinhamos escopo, investimento e responsabilidades.",
    deliverables: [
      "Proposta clara com prazos e investimento",
      "Escopo e responsabilidades formalizados",
    ],
  },
  {
    step: "03",
    icon: ClipboardCheck,
    title: "Organizamos o projeto",
    description: "Estruturamos prioridades, funcionalidades e entregas.",
    deliverables: [
      "Funcionalidades organizadas por prioridade",
      "Fluxos e entregas planejados antes do código",
    ],
  },
  {
    step: "04",
    icon: MonitorCog,
    title: "Construímos em conjunto",
    description: "Desenvolvemos, testamos e validamos com transparência.",
    deliverables: [
      "Acompanhamento próximo durante a construção",
      "Testes e validações antes de cada entrega",
    ],
  },
  {
    step: "05",
    icon: Rocket,
    title: "Entregamos e evoluímos",
    description: "Colocamos a solução em uso e seguimos com suporte.",
    deliverables: [
      "Publicação e orientação para uso da solução",
      "Suporte e melhorias conforme o negócio evolui",
    ],
  },
] as const;
