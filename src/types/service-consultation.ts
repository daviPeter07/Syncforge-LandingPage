import type { LucideIcon } from "lucide-react";

export type ConsultationQuestionId = "problem" | "stage" | "budget";

export interface ConsultationOption {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

export interface ConsultationQuestion {
  id: ConsultationQuestionId;
  title: string;
  description: string;
  options: ConsultationOption[];
}

export type ConsultationAnswers = Partial<
  Record<ConsultationQuestionId, string>
>;
