import type { ServiceItem, ServiceLandingHeroContent } from "@/types/services";
import { ServiceLandingHero } from "../shared/ServiceLandingHero";

interface ERPHeroProps {
  service: ServiceItem;
  content: ServiceLandingHeroContent;
}

export function ERPHero({ service, content }: ERPHeroProps) {
  return <ServiceLandingHero service={service} content={content} />;
}
