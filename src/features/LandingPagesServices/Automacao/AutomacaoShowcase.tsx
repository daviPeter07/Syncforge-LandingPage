import type { ServiceLandingShowcaseContent } from "@/types/services";
import { ServiceLandingShowcase } from "../shared/ServiceLandingShowcase";

interface AutomacaoShowcaseProps {
  content: ServiceLandingShowcaseContent;
}

export function AutomacaoShowcase({ content }: AutomacaoShowcaseProps) {
  return <ServiceLandingShowcase content={content} />;
}
