import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  items: ServiceItem[];
}
