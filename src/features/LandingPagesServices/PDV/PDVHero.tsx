import type { ServiceItem, ServiceLandingHeroContent } from "@/types/services";
import { ServiceLandingHero } from "../shared/ServiceLandingHero";

interface PDVHeroProps {
  service: ServiceItem;
  content: ServiceLandingHeroContent;
}

export function PDVHero({ service, content }: PDVHeroProps) {
  return <ServiceLandingHero service={service} content={content} />;
}
