import { Award, Clock, Rocket, Users } from "lucide-react";
import type { ResultStat } from "@/types/results";

export const RESULTS: ResultStat[] = [
  {
    value: "120",
    suffix: "+",
    label: "Projetos entregues",
    description: "Sistemas, vídeos e marcas em produção",
    icon: Rocket,
  },
  {
    value: "60",
    suffix: "+",
    label: "Clientes atendidos",
    description: "Empresas e creators em todo o Brasil",
    icon: Users,
  },
  {
    value: "98",
    suffix: "%",
    label: "Satisfação",
    description: "Avaliação média dos nossos clientes",
    icon: Award,
  },
  {
    value: "5",
    suffix: " anos",
    label: "De experiência",
    description: "Construindo soluções digitais sob medida",
    icon: Clock,
  },
];
