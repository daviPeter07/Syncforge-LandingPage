import type { ClientLogo, Testimonial } from "@/types/clients";

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Lucas Ferreira",
    role: "CEO",
    company: "Vörtex Tech",
    message:
      "A SyncForge entregou nosso ERP customizado em tempo recorde. A operação ficou muito mais previsível.",
    avatar: "/avatars/avatar-1.jpg",
  },
  {
    name: "Ana Beatriz",
    role: "Diretora de Marketing",
    company: "Norte Digital",
    message:
      "O time de design e vídeo elevou nossa marca a outro patamar. Resultados em poucas semanas.",
    avatar: "/avatars/avatar-2.jpg",
  },
  {
    name: "Carlos Mendes",
    role: "Sócio",
    company: "Casa do Sabor",
    message:
      "Sistema PDV intuitivo e suporte ágil. Nunca mais tivemos retrabalho com pedidos.",
    avatar: "/avatars/avatar-3.jpg",
  },
  {
    name: "Patrícia Souza",
    role: "Founder",
    company: "Bloom Studio",
    message:
      "Identidade visual impecável. Cada peça parece feita por quem realmente entende do negócio.",
    avatar: "/avatars/avatar-4.jpg",
  },
  {
    name: "Eduardo Rocha",
    role: "Gerente de TI",
    company: "Logix Cargo",
    message:
      "Implantação do WMS sem dor de cabeça. Equipe muito técnica e parceira de verdade.",
    avatar: "/avatars/avatar-5.jpg",
  },
  {
    name: "Juliana Reis",
    role: "Creator",
    company: "JR Channel",
    message:
      "Edições criativas que aumentaram retenção e CTR. Recomendo de olhos fechados.",
    avatar: "/avatars/avatar-6.jpg",
  },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Vörtex Tech", category: "Tecnologia" },
  { name: "Norte Digital", category: "Marketing" },
  { name: "Casa do Sabor", category: "Restaurante" },
  { name: "Bloom Studio", category: "Beleza" },
  { name: "Logix Cargo", category: "Logística" },
  { name: "JR Channel", category: "Creator" },
  { name: "Atlas Moda", category: "Varejo" },
  { name: "Pulse Fit", category: "Saúde" },
  { name: "Orion Lab", category: "Educação" },
  { name: "Helix Pay", category: "Fintech" },
];

export const AVATAR_URLS: string[] = [
  "https://avatar.vercel.sh/cliente-1?size=80",
  "https://avatar.vercel.sh/cliente-2?size=80",
  "https://avatar.vercel.sh/cliente-3?size=80",
  "https://avatar.vercel.sh/cliente-4?size=80",
  "https://avatar.vercel.sh/cliente-5?size=80",
];
