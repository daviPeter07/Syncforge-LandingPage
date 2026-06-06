import type { ServiceLandingPricingContent } from "@/types/services";
import { ServiceLandingPricing } from "../shared/ServiceLandingPricing";

interface CRMPricingProps {
  serviceTitle: string;
  content: ServiceLandingPricingContent;
}

export function CRMPricing({ serviceTitle, content }: CRMPricingProps) {
  return (
    <ServiceLandingPricing serviceTitle={serviceTitle} content={content} />
  );
}
