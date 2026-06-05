import type { ServiceLandingPricingContent } from "@/types/services";
import { ServiceLandingPricing } from "../shared/ServiceLandingPricing";

interface PDVPricingProps {
  content: ServiceLandingPricingContent;
}

export function PDVPricing({ content }: PDVPricingProps) {
  return <ServiceLandingPricing content={content} />;
}
