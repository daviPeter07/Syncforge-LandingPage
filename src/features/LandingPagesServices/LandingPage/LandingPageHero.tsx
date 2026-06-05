import type { ServiceItem, ServiceLandingHeroContent } from "@/types/services";
import { ServiceLandingHero } from "../shared/ServiceLandingHero";

interface LandingPageHeroProps {
  service: ServiceItem;
  content: ServiceLandingHeroContent;
}

export function LandingPageHero({ service, content }: LandingPageHeroProps) {
  return <ServiceLandingHero service={service} content={content} />;
}
