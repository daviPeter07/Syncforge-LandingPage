import type { ServiceLandingFaqContent } from "@/types/services";
import { ServiceLandingFaq } from "../shared/ServiceLandingFaq";

interface FinanceiroFaqProps {
  content: ServiceLandingFaqContent;
}

export function FinanceiroFaq({ content }: FinanceiroFaqProps) {
  return <ServiceLandingFaq content={content} />;
}
