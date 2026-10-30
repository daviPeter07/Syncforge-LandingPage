import type { LucideIcon } from "lucide-react";

export type ProductId = "sigem" | "mastermind";

export type ProductStatus = "available" | "coming-soon";

export interface ProductItem {
  id: ProductId;
  name: string;
  category: string;
  status: ProductStatus;
  summary: string;
  tags: string[];
  icon: LucideIcon;
  image?: { src: string; alt: string };
  cta: { label: string; href: string };
}
