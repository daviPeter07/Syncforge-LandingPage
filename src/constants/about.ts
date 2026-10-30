import type { AboutLink, AboutPillar } from "@/types/about";

export const ABOUT_PARAGRAPHS: string[] = [
  "A SyncForge é uma empresa de Manaus (AM) que cria sistemas e sites para ajudar negócios a se organizar, vender mais e perder menos tempo com tarefas manuais.",
  "Trabalhamos de dois jeitos: com sistemas prontos para usar, como o SIGEM, e com projetos feitos do zero para a rotina da sua empresa. Você não precisa entender de tecnologia: a gente explica tudo de forma simples.",
];

export const ABOUT_LINKS: AboutLink[] = [
  { label: "Ver produtos", href: "#produtos" },
  { label: "Contar minha ideia", href: "/consulta" },
];

export const ABOUT_PILLARS: AboutPillar[] = [
  {
    title: "Tudo combinado antes",
    description:
      "Explicamos o que será feito, quanto custa e quando fica pronto. Sem surpresas.",
  },
  {
    title: "Cabe no seu bolso",
    description:
      "Dá para começar pelo essencial e pagar por etapas, no ritmo da sua empresa.",
  },
  {
    title: "Não sumimos depois",
    description:
      "Depois da entrega, seguimos por perto para tirar dúvidas e resolver problemas.",
  },
  {
    title: "Cresce junto com você",
    description:
      "O sistema ganha novas funções conforme o negócio cresce, sem começar do zero.",
  },
];
