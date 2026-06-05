import type { ServiceLandingShowcaseContent } from "@/types/services";
import { ServiceLandingShowcase } from "../shared/ServiceLandingShowcase";

interface FinanceiroShowcaseProps {
  content: ServiceLandingShowcaseContent;
}

export function FinanceiroShowcase({ content }: FinanceiroShowcaseProps) {
  return <ServiceLandingShowcase content={content} />;
}
