import type { ServiceLandingCtaContent } from "@/types/services";
import { ServiceLandingCta } from "../shared/ServiceLandingCta";

interface LandingPageCtaProps {
  content: ServiceLandingCtaContent;
}

export function LandingPageCta({ content }: LandingPageCtaProps) {
  return <ServiceLandingCta content={content} />;
}
