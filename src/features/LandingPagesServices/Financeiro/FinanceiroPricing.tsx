import type { ServiceLandingPricingContent } from "@/types/services";
import { ServiceLandingPricing } from "../shared/ServiceLandingPricing";

interface FinanceiroPricingProps {
  content: ServiceLandingPricingContent;
}

export function FinanceiroPricing({ content }: FinanceiroPricingProps) {
  return <ServiceLandingPricing content={content} />;
}
