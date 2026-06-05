import type { ServiceLandingPricingContent } from "@/types/services";
import { ServiceLandingPricing } from "../shared/ServiceLandingPricing";

interface CRMPricingProps {
  content: ServiceLandingPricingContent;
}

export function CRMPricing({ content }: CRMPricingProps) {
  return <ServiceLandingPricing content={content} />;
}
