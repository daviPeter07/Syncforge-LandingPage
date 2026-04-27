import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceCategoryDetails {
  /** Descrição mais longa exibida quando o card é expandido. */
  longDescription: string;
  /** O que entregamos (lista de bullet points). */
  deliverables: string[];
  /** Tempo médio de entrega — string já formatada para exibição. */
  averageTime: string;
  /** A partir de — string já formatada. */
  startingPrice?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  items: ServiceItem[];
  details: ServiceCategoryDetails;
}
