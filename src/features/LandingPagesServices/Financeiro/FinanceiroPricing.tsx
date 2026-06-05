import type { ServiceLandingPricingContent } from "@/types/services";
import { ServiceLandingPricing } from "../shared/ServiceLandingPricing";

interface FinanceiroPricingProps {
  serviceTitle: string;
  content: ServiceLandingPricingContent;
}

export function FinanceiroPricing({
  serviceTitle,
  content,
}: FinanceiroPricingProps) {
  return (
    <ServiceLandingPricing serviceTitle={serviceTitle} content={content} />
  );
}
