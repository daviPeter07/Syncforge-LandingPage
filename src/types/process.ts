import type { LucideIcon } from "lucide-react";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}
