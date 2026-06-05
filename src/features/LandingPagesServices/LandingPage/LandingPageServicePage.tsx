import type { ServiceLandingPageEntry } from "@/types/services";
import { ServiceLandingLayout } from "../shared/ServiceLandingLayout";
import { LandingPageCta } from "./LandingPageCta";
import { LandingPageFaq } from "./LandingPageFaq";
import { LandingPageHero } from "./LandingPageHero";
import { LandingPageShowcase } from "./LandingPageShowcase";

interface LandingPageServicePageProps extends ServiceLandingPageEntry {}

export function LandingPageServicePage({
  service,
  content,
}: LandingPageServicePageProps) {
  return (
    <ServiceLandingLayout>
      <LandingPageHero service={service} content={content.hero} />
      <LandingPageShowcase service={service} content={content.showcase} />
      <LandingPageFaq content={content.faq} />
      <LandingPageCta content={content.cta} />
    </ServiceLandingLayout>
  );
}
