import type { ServiceLandingPricingContent } from "@/types/services";
import { ServiceLandingPricing } from "../shared/ServiceLandingPricing";

interface AutomacaoPricingProps {
  serviceTitle: string;
  content: ServiceLandingPricingContent;
}

export function AutomacaoPricing({
  serviceTitle,
  content,
}: AutomacaoPricingProps) {
  return (
    <ServiceLandingPricing serviceTitle={serviceTitle} content={content} />
  );
}
