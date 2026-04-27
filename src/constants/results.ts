import { Award, Clock, Rocket, Users } from "lucide-react";
import type { ResultStat } from "@/types/results";

export const RESULTS: ResultStat[] = [
  {
    value: 147,
    suffix: "+",
    label: "Projetos entregues",
    description: "Sistemas, vídeos e marcas em produção desde 2020",
    icon: Rocket,
  },
  {
    value: 68,
    suffix: "+",
    label: "Clientes atendidos",
    description: "De pequenos negócios a redes com várias unidades",
    icon: Users,
  },
  {
    value: 98,
    suffix: "%",
    label: "Satisfação",
    description: "Nota média no acompanhamento pós-entrega",
    icon: Award,
  },
  {
    value: 5,
    suffix: " anos",
    label: "De estrada",
    description: "Operação consolidada, sem terceirização do core",
    icon: Clock,
  },
];
