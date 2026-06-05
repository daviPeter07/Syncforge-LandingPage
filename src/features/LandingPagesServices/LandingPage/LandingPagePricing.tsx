import type { ServiceLandingPricingContent } from "@/types/services";
import { ServiceLandingPricing } from "../shared/ServiceLandingPricing";

interface LandingPagePricingProps {
  serviceTitle: string;
  content: ServiceLandingPricingContent;
}

export function LandingPagePricing({
  serviceTitle,
  content,
}: LandingPagePricingProps) {
  return (
    <ServiceLandingPricing serviceTitle={serviceTitle} content={content} />
  );
}
