import type { ServiceLandingCtaContent } from "@/types/services";
import { ServiceLandingCta } from "../shared/ServiceLandingCta";

interface PDVCtaProps {
  content: ServiceLandingCtaContent;
}

export function PDVCta({ content }: PDVCtaProps) {
  return <ServiceLandingCta content={content} />;
}
