import type { ServiceLandingPricingContent } from "@/types/services";
import { ServiceLandingPricing } from "../shared/ServiceLandingPricing";

interface ERPPricingProps {
  serviceTitle: string;
  content: ServiceLandingPricingContent;
}

export function ERPPricing({ serviceTitle, content }: ERPPricingProps) {
  return (
    <ServiceLandingPricing serviceTitle={serviceTitle} content={content} />
  );
}
