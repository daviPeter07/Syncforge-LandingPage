import type { LucideIcon } from "lucide-react";

export interface ResultStat {
  value: string;
  suffix?: string;
  label: string;
  description: string;
  icon: LucideIcon;
}
