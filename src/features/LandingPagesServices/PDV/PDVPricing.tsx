import type { ServiceLandingPricingContent } from "@/types/services";
import { ServiceLandingPricing } from "../shared/ServiceLandingPricing";

interface PDVPricingProps {
  serviceTitle: string;
  content: ServiceLandingPricingContent;
}

export function PDVPricing({ serviceTitle, content }: PDVPricingProps) {
  return (
    <ServiceLandingPricing serviceTitle={serviceTitle} content={content} />
  );
}
