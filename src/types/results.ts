import type { LucideIcon } from "lucide-react";

export interface ResultStat {
  /** Valor numérico que será animado pelo CountUp. */
  value: number;
  /** Sufixo exibido após o número (ex.: "+", "%", " anos"). */
  suffix?: string;
  label: string;
  description: string;
  icon: LucideIcon;
}
