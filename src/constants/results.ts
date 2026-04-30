import { ClipboardCheck, Handshake, Rocket, ShieldCheck } from "lucide-react";

import type { ResultStat } from "@/types/results";

export const RESULTS: ResultStat[] = [
  {
    value: 1,
    suffix: "",
    label: "Projeto em andamento",
    description:
      "Primeira solução sendo desenvolvida com escopo, etapas e acompanhamento.",
    icon: Rocket,
  },
  {
    value: 1,
    suffix: "",
    label: "Processo definido",
    description:
      "Orçamento, contrato, escopo e etapas alinhados antes do desenvolvimento.",
    icon: ShieldCheck,
  },
  {
    value: 1,
    suffix: "",
    label: "Time próximo",
    description:
      "Atendimento direto, suporte ao software e evolução conforme a demanda.",
    icon: Handshake,
  },
];
