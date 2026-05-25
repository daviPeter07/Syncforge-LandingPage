import type { ClientLogo, Testimonial } from "@/types/clients";

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rony Peterson",
    role: "CEO",
    company: "Dg Computer",
    message:
      "A gente tinha muita coisa no improviso. Depois que organizamos os processos, ficou bem mais facil atender os clientes e tocar a operacao sem correria.",
    avatar: "/company/dg-logo.jpg",
  },
  {
    name: "Viviane Conde",
    role: "Consultora de beleza",
    company: "Atendimento independente",
    message:
      "Hoje eu consigo atender com mais calma e passar mais confianca para as clientes. Minha presenca digital ficou mais profissional e coerente com meu trabalho.",
    avatar: "/company/viviane.png",
  },
  {
    name: "Gabriel Gadelha",
    role: "Desenvolvedor",
    company: "Spaay",
    message:
      "As entregas do Spaay ficaram bem mais rapidas e com menos retrabalho. Foi um processo tecnico, mas leve de tocar no dia a dia.",
    avatar: "/company/gadelha.png",
  },
  {
    name: "Gabriel Moreira",
    role: "CEO",
    company: "Spaay",
    message:
      "Conseguimos tirar ideias do papel e transformar em funcionalidades que realmente fizeram diferenca para o produto e para os usuarios.",
    avatar: "/company/gabriel-CEO.png",
  },
  {
    name: "Alice Quely",
    role: "Designer autonomo",
    company: "Trabalho autoral",
    message:
      "O que mais gostei foi a clareza em cada etapa e o cuidado com os detalhes. Meu trabalho ficou mais consistente e valorizado.",
    avatar: "/company/alice.png",
  },
];

export const AVATAR_URLS: string[] = [
  "/company/dg-logo.jpg",
  "/company/viviane.png",
  "/company/gadelha.png",
  "/company/gabriel-CEO.png",
  "/company/alice.png",
];
