import type { ServiceLandingPageEntry } from "@/types/services";
import { ServiceLandingLayout } from "../shared/ServiceLandingLayout";
import { CRMCta } from "./CRMCta";
import { CRMFaq } from "./CRMFaq";
import { CRMHero } from "./CRMHero";
import { CRMPricing } from "./CRMPricing";
import { CRMShowcase } from "./CRMShowcase";

interface CRMServicePageProps extends ServiceLandingPageEntry {}

export function CRMServicePage({ service, content }: CRMServicePageProps) {
  return (
    <ServiceLandingLayout>
      <CRMHero service={service} content={content.hero} />
      <CRMShowcase content={content.showcase} />
      <CRMPricing serviceTitle={service.title} content={content.pricing} />
      <CRMFaq content={content.faq} />
      <CRMCta serviceTitle={service.title} content={content.cta} />
    </ServiceLandingLayout>
  );
}
