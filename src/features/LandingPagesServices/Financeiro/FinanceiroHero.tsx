import type { ServiceItem, ServiceLandingHeroContent } from "@/types/services";
import { ServiceLandingHero } from "../shared/ServiceLandingHero";

interface FinanceiroHeroProps {
  service: ServiceItem;
  content: ServiceLandingHeroContent;
}

export function FinanceiroHero({ service, content }: FinanceiroHeroProps) {
  return <ServiceLandingHero service={service} content={content} />;
}
