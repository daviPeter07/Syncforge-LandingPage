import type { TeamMember } from "@/types/team";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Davi Peterson",
    role: "Founder & Full-Stack Developer",
    bio: "Lidera a engenharia e arquitetura de soluções digitais.",
    image: "/team/member-1.jpg",
    socials: [
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "instagram", url: "https://instagram.com" },
      { type: "github", url: "https://github.com" },
    ],
  },
  {
    name: "Marina Costa",
    role: "Head of Design",
    bio: "Comanda a direção visual e experiências de marca.",
    image: "/team/member-2.jpg",
    socials: [
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "instagram", url: "https://instagram.com" },
      { type: "behance", url: "https://behance.net" },
    ],
  },
  {
    name: "Rafael Lima",
    role: "Video Producer",
    bio: "Cria narrativas em vídeo que convertem audiências.",
    image: "/team/member-3.jpg",
    socials: [
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "instagram", url: "https://instagram.com" },
      { type: "website", url: "https://example.com" },
    ],
  },
  {
    name: "Beatriz Almeida",
    role: "Project Manager",
    bio: "Garante entregas no prazo e alinhadas à estratégia.",
    image: "/team/member-4.jpg",
    socials: [
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "instagram", url: "https://instagram.com" },
      { type: "twitter", url: "https://twitter.com" },
    ],
  },
];
