import type { ServiceLandingPricingContent } from "@/types/services";
import { ServiceLandingPricing } from "../shared/ServiceLandingPricing";

interface AutomacaoPricingProps {
  content: ServiceLandingPricingContent;
}

export function AutomacaoPricing({ content }: AutomacaoPricingProps) {
  return <ServiceLandingPricing content={content} />;
}
