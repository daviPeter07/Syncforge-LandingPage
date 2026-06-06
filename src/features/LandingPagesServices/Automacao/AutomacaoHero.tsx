import type { ServiceItem, ServiceLandingHeroContent } from "@/types/services";
import { ServiceLandingHero } from "../shared/ServiceLandingHero";

interface AutomacaoHeroProps {
  service: ServiceItem;
  content: ServiceLandingHeroContent;
}

export function AutomacaoHero({ service, content }: AutomacaoHeroProps) {
  return <ServiceLandingHero service={service} content={content} />;
}
