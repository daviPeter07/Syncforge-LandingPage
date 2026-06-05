import type { ServiceLandingCtaContent } from "@/types/services";
import { ServiceLandingCta } from "../shared/ServiceLandingCta";

interface LandingPageCtaProps {
  serviceTitle: string;
  content: ServiceLandingCtaContent;
}

export function LandingPageCta({ serviceTitle, content }: LandingPageCtaProps) {
  return <ServiceLandingCta serviceTitle={serviceTitle} content={content} />;
}
