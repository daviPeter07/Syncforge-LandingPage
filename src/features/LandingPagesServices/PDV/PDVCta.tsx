import type { ServiceLandingCtaContent } from "@/types/services";
import { ServiceLandingCta } from "../shared/ServiceLandingCta";

interface PDVCtaProps {
  serviceTitle: string;
  content: ServiceLandingCtaContent;
}

export function PDVCta({ serviceTitle, content }: PDVCtaProps) {
  return <ServiceLandingCta serviceTitle={serviceTitle} content={content} />;
}
