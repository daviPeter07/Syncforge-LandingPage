import type { ServiceLandingCtaContent } from "@/types/services";
import { ServiceLandingCta } from "../shared/ServiceLandingCta";

interface CRMCtaProps {
  serviceTitle: string;
  content: ServiceLandingCtaContent;
}

export function CRMCta({ serviceTitle, content }: CRMCtaProps) {
  return <ServiceLandingCta serviceTitle={serviceTitle} content={content} />;
}
