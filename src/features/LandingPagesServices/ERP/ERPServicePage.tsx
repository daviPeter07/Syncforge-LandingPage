import type { ServiceLandingPageEntry } from "@/types/services";
import { ServiceLandingLayout } from "../shared/ServiceLandingLayout";
import { ERPCta } from "./ERPCta";
import { ERPFaq } from "./ERPFaq";
import { ERPHero } from "./ERPHero";
import { ERPPricing } from "./ERPPricing";
import { ERPShowcase } from "./ERPShowcase";

interface ERPServicePageProps extends ServiceLandingPageEntry {}

export function ERPServicePage({ service, content }: ERPServicePageProps) {
  return (
    <ServiceLandingLayout>
      <ERPHero service={service} content={content.hero} />
      <ERPShowcase content={content.showcase} />
      <ERPPricing serviceTitle={service.title} content={content.pricing} />
      <ERPFaq content={content.faq} />
      <ERPCta serviceTitle={service.title} content={content.cta} />
    </ServiceLandingLayout>
  );
}
