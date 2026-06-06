import type { ServiceLandingFaqContent } from "@/types/services";
import { ServiceLandingFaq } from "../shared/ServiceLandingFaq";

interface AutomacaoFaqProps {
  content: ServiceLandingFaqContent;
}

export function AutomacaoFaq({ content }: AutomacaoFaqProps) {
  return <ServiceLandingFaq content={content} />;
}
