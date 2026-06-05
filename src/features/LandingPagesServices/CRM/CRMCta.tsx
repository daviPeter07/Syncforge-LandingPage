import type { ServiceLandingCtaContent } from "@/types/services";
import { ServiceLandingCta } from "../shared/ServiceLandingCta";

interface CRMCtaProps {
  content: ServiceLandingCtaContent;
}

export function CRMCta({ content }: CRMCtaProps) {
  return <ServiceLandingCta content={content} />;
}
