import { LucideIcon } from "lucide-react";

export type ServiceCategory =
  | "landing-page"
  | "pdv"
  | "crm"
  | "automacao"
  | "financeiro"
  | "erp";

export interface ServiceItem {
  category: ServiceCategory;
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
}