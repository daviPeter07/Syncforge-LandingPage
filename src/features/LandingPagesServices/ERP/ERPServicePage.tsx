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
      <ERPShowcase service={service} content={content.showcase} />
      <ERPPricing content={content.pricing} />
      <ERPFaq content={content.faq} />
      <ERPCta content={content.cta} />
    </ServiceLandingLayout>
  );
}
