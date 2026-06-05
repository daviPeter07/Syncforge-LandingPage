import type { ServiceLandingPageEntry } from "@/types/services";
import { ServiceLandingLayout } from "../shared/ServiceLandingLayout";
import { PDVCta } from "./PDVCta";
import { PDVFaq } from "./PDVFaq";
import { PDVHero } from "./PDVHero";
import { PDVPricing } from "./PDVPricing";
import { PDVShowcase } from "./PDVShowcase";

interface PDVServicePageProps extends ServiceLandingPageEntry {}

export function PDVServicePage({ service, content }: PDVServicePageProps) {
  return (
    <ServiceLandingLayout>
      <PDVHero service={service} content={content.hero} />
      <PDVShowcase content={content.showcase} />
      <PDVPricing serviceTitle={service.title} content={content.pricing} />
      <PDVFaq content={content.faq} />
      <PDVCta serviceTitle={service.title} content={content.cta} />
    </ServiceLandingLayout>
  );
}
