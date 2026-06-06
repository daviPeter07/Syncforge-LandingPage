import type { ServiceLandingPageEntry } from "@/types/services";
import { ServiceLandingLayout } from "../shared/ServiceLandingLayout";
import { ServiceLandingWhySection } from "../shared/ServiceLandingWhySection";
import { LandingPageCta } from "./LandingPageCta";
import { LandingPageFaq } from "./LandingPageFaq";
import { LandingPageHero } from "./LandingPageHero";
import { LandingPagePricing } from "./LandingPagePricing";
import { LandingPageShowcase } from "./LandingPageShowcase";

interface LandingPageServicePageProps extends ServiceLandingPageEntry {}

export function LandingPageServicePage({
  service,
  content,
}: LandingPageServicePageProps) {
  return (
    <ServiceLandingLayout>
      <LandingPageHero service={service} content={content.hero} />
      <ServiceLandingWhySection content={content.why} />
      <LandingPageShowcase content={content.showcase} />
      <LandingPagePricing
        serviceTitle={service.title}
        content={content.pricing}
      />
      <LandingPageFaq content={content.faq} />
      <LandingPageCta serviceTitle={service.title} content={content.cta} />
    </ServiceLandingLayout>
  );
}
