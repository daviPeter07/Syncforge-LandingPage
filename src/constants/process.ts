import { Lightbulb, Pencil, Rocket, Search, Wrench } from "lucide-react";
import type { ProcessStep } from "@/types/process";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Descoberta",
    description:
      "Entendemos a fundo o seu negócio, objetivos e desafios para definir um escopo claro e objetivo.",
    icon: Search,
    color: "#1a2459",
  },
  {
    step: "02",
    title: "Estratégia",
    description:
      "Mapeamos a melhor solução, definimos cronograma, ferramentas e KPIs do projeto.",
    icon: Lightbulb,
    color: "#0a1f5c",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Criamos protótipos, identidades e fluxos validados antes de qualquer linha de código.",
    icon: Pencil,
    color: "#0a2978",
  },
  {
    step: "04",
    title: "Desenvolvimento",
    description:
      "Construímos a solução com tecnologia moderna, testes e revisões em todas as etapas.",
    icon: Wrench,
    color: "#0c3499",
  },
  {
    step: "05",
    title: "Entrega & Evolução",
    description:
      "Entregamos com suporte contínuo, treinamento e ciclos de melhoria pós-lançamento.",
    icon: Rocket,
    color: "#0e3eb8",
  },
];
