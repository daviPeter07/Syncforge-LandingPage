import type { NotificationItem } from "@/types/notification";

export const PROCESS_NOTIFICATIONS: NotificationItem[] = [
  {
    name: "Briefing aprovado",
    description: "Cliente confirmou o escopo do projeto",
    icon: "✦",
    color: "#0a1f5c",
    time: "agora",
  },
  {
    name: "Wireframes prontos",
    description: "Estrutura validada com o time interno",
    icon: "✧",
    color: "#0c3499",
    time: "2min",
  },
  {
    name: "Protótipo técnico criado",
    description: "Fluxos principais validados",
    icon: "✺",
    color: "#0e3eb8",
    time: "5min",
  },
  {
    name: "Sprint iniciado",
    description: "Desenvolvimento em andamento",
    icon: "✸",
    color: "#1a2459",
    time: "10min",
  },
  {
    name: "Code review",
    description: "Revisão e ajustes finais aplicados",
    icon: "✶",
    color: "#0a2978",
    time: "15min",
  },
  {
    name: "Deploy realizado",
    description: "Projeto publicado em produção",
    icon: "✷",
    color: "#0c3499",
    time: "20min",
  },
];
