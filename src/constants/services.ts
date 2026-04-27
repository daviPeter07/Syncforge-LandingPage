import { Code2, Film, Palette } from "lucide-react";
import type { ServiceCategory } from "@/types/services";

export const SERVICES: ServiceCategory[] = [
  {
    id: "software",
    title: "Software",
    subtitle: "Sistemas sob medida para escalar a sua operação",
    icon: Code2,
    items: [
      { name: "CRM", description: "Gestão completa de relacionamento com clientes" },
      { name: "PDV", description: "Ponto de venda integrado e ágil para o seu negócio" },
      { name: "ERP", description: "Centralize toda a operação em uma única plataforma" },
      { name: "OS", description: "Controle de ordens de serviço com fluxo personalizado" },
      { name: "WMS", description: "Gestão inteligente de armazéns e estoque" },
      { name: "Financeiro", description: "Fluxo de caixa, contas e relatórios em tempo real" },
    ],
  },
  {
    id: "video",
    title: "Edição de Vídeo",
    subtitle: "Conteúdo audiovisual que prende a atenção",
    icon: Film,
    items: [
      { name: "Vídeos Promocionais", description: "Peças institucionais e comerciais" },
      { name: "Conteúdo de Entretenimento", description: "Edições criativas e dinâmicas" },
      { name: "TikTok", description: "Cortes verticais otimizados para engajamento" },
      { name: "YouTube", description: "Edição completa para canais e séries" },
      { name: "Reels & Shorts", description: "Conteúdo curto com alta conversão" },
      { name: "Motion Graphics", description: "Animações e elementos gráficos" },
    ],
  },
  {
    id: "design",
    title: "Design",
    subtitle: "Identidade e comunicação visual de alto impacto",
    icon: Palette,
    items: [
      { name: "Identidade Visual", description: "Sistema visual completo e consistente" },
      { name: "Logotipo", description: "Marca memorável e estratégica" },
      { name: "Social Media", description: "Templates e posts para todas as redes" },
      { name: "Story Maker", description: "Stories interativos e de alta conversão" },
      { name: "Cardápio", description: "Cardápios físicos e digitais elegantes" },
      { name: "Anúncios", description: "Criativos para Meta, Google e TikTok Ads" },
      { name: "Landing Pages", description: "Páginas otimizadas para conversão" },
      { name: "Mockups", description: "Mockups têxteis e de objetos profissionais" },
    ],
  },
];
