import type { ServiceItem, ServiceLandingHeroContent } from "@/types/services";
import { ServiceLandingHero } from "../shared/ServiceLandingHero";

interface CRMHeroProps {
  service: ServiceItem;
  content: ServiceLandingHeroContent;
}

export function CRMHero({ service, content }: CRMHeroProps) {
  return <ServiceLandingHero service={service} content={content} />;
}
