import type { ServiceLandingPageEntry } from "@/types/services";
import { ServiceLandingLayout } from "../shared/ServiceLandingLayout";
import { PDVCta } from "./PDVCta";
import { PDVFaq } from "./PDVFaq";
import { PDVHero } from "./PDVHero";
import { PDVShowcase } from "./PDVShowcase";

interface PDVServicePageProps extends ServiceLandingPageEntry {}

export function PDVServicePage({ service, content }: PDVServicePageProps) {
  return (
    <ServiceLandingLayout>
      <PDVHero service={service} content={content.hero} />
      <PDVShowcase service={service} content={content.showcase} />
      <PDVFaq content={content.faq} />
      <PDVCta content={content.cta} />
    </ServiceLandingLayout>
  );
}
