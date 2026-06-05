import type { ServiceLandingPricingContent } from "@/types/services";
import { ServiceLandingPricing } from "../shared/ServiceLandingPricing";

interface ERPPricingProps {
  content: ServiceLandingPricingContent;
}

export function ERPPricing({ content }: ERPPricingProps) {
  return <ServiceLandingPricing content={content} />;
}
