import { Zap } from "lucide-react";
import type { ClientLogo, Testimonial } from "@/types/clients";

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dg Computer",
    role: "Assistência técnica e loja de informática",
    company: "Dg Computer",
    website: "https://www.dgcomputer.com.br/",
    message:
      "Ficamos muito satisfeitos com o resultado. Hoje temos compras, vendas, finanças e equipe mais organizadas, o que facilitou muito a gestão da empresa.",
    avatar: "/company/dg-logo.jpg",
  },
  {
    name: "Viviane Conde",
    role: "Revendedora de produtos",
    company: "Viviane Conde",
    website: "https://espacodaviviconde.estoqueproprio.com.br/",
    message:
      "Hoje eu consigo atender com mais calma e passar mais confiança para as clientes. Minha presença digital ficou mais profissional e coerente com meu trabalho.",
    avatar: "/company/viviane.png",
  },
  {
    name: "Spaay",
    role: "SaaS para restaurantes",
    company: "Spaay",
    website: "https://spaay.com.br/",
    message:
      "O resultado superou nossas expectativas. Agora os restaurantes conseguem acompanhar e organizar seus pedidos de forma muito mais simples no dia a dia.",
    icon: Zap,
    iconClass: "text-orange-600",
  },
  {
    name: "Maucco",
    role: "Consultoria e assessoria ambiental",
    company: "Maucco",
    website: "https://maucco.com.br/",
    message:
      "A empresa realizou um trabalho assertivo mas quero registrar que o atendimento foi o diferencial pois ao entender as demandas eles conseguiram desenvolver a uma boa solução.",
    avatar: "/company/logo-maucco2.png",
    avatarPosition: "top",
  },
];

export const AVATAR_URLS: string[] = [
  "/company/dg-logo.jpg",
  "/company/viviane.png",
  "/company/logo-maucco2.png",
];
