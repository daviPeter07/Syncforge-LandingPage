import {
  ClipboardCheck,
  FileText,
  MonitorCog,
  Rocket,
  Search,
} from "lucide-react";

import type { ProcessStep } from "@/types/process";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Entendemos a necessidade do seu negócio, os processos atuais e o que precisa ser resolvido antes de qualquer proposta ou desenvolvimento.",
    icon: Search,
    color: "#1a2459",
  },
  {
    step: "02",
    title: "Proposta e contrato",
    description:
      "Apresentamos um orçamento claro, com escopo, prazos, condições e responsabilidades definidos em contrato.",
    icon: FileText,
    color: "#0a1f5c",
  },
  {
    step: "03",
    title: "Planejamento",
    description:
      "Organizamos as funcionalidades, prioridades, telas e etapas do projeto para evitar retrabalho e manter a entrega bem direcionada.",
    icon: ClipboardCheck,
    color: "#0a2978",
  },
  {
    step: "04",
    title: "Desenvolvimento",
    description:
      "Construímos a solução por etapas, com acompanhamento, testes e validações durante o processo.",
    icon: MonitorCog,
    color: "#0c3499",
  },
  {
    step: "05",
    title: "Entrega e suporte",
    description:
      "Entregamos o projeto, orientamos o uso da solução e oferecemos suporte conforme o plano contratado.",
    icon: Rocket,
    color: "#0e3eb8",
  },
];

export const PROCESS_DELIVERABLES: string[][] = [
  [
    "Reunião para entender a necessidade",
    "Levantamento dos principais problemas",
    "Definição do objetivo do projeto",
    "Indicação da melhor solução inicial",
  ],
  [
    "Orçamento organizado por escopo",
    "Prazos e entregas definidos",
    "Contrato com responsabilidades claras",
    "Condições alinhadas antes do início",
  ],
  [
    "Mapeamento das funcionalidades",
    "Organização das telas e fluxos",
    "Priorização da primeira versão",
    "Validação antes do desenvolvimento",
  ],
  [
    "Construção por etapas",
    "Acompanhamento do progresso",
    "Testes antes da entrega",
    "Ajustes durante o desenvolvimento",
  ],
  [
    "Publicação ou entrega do projeto",
    "Orientação de uso para o cliente",
    "Suporte ao software",
    "Melhorias futuras sob demanda",
  ],
];
