import type { TeamMember } from "@/types/team";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Davi Peterson",
    role: "CEO e Desenvolvedor Full Stack",
    bio: "Lidera e transforma requisitos em produtos que entregam valor real para o negócio.",
    image: "/team/davi-peterson.jpg",
    socials: [
      { type: "linkedin", url: "https://www.linkedin.com/in/davipeterson/" },
      { type: "website", url: "https://davi-peterson.vercel.app" },
    ],
  },
  {
    name: "William Breno",
    role: "Desenvolvedor WEB",
    bio: "Cria soluções digitais modernas com foco em performance e experiência",
    image: "/team/william-breno.jpeg",
    socials: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/william-breno-989401366/",
      },
      { type: "github", url: "https://github.com/willsx69" },
    ],
  },
  {
    name: "Ronaldy Baia",
    role: "Gestor de projetos ",
    bio: "Planeja, executa e monitora projetos, garantindo que os objetivos e meta sejam atingidos no prazo",
    image: "/team/ronaldy-baia.jpg",
    socials: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/ronaldy-souza",
      },
    ],
  },
];
