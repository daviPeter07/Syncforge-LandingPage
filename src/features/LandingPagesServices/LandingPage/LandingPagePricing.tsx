import type { ServiceLandingPricingContent } from "@/types/services";
import { ServiceLandingPricing } from "../shared/ServiceLandingPricing";

interface LandingPagePricingProps {
  content: ServiceLandingPricingContent;
}

export function LandingPagePricing({ content }: LandingPagePricingProps) {
  return <ServiceLandingPricing content={content} />;
}
