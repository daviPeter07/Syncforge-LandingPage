import type { ServiceLandingCtaContent } from "@/types/services";
import { ServiceLandingCta } from "../shared/ServiceLandingCta";

interface ERPCtaProps {
  serviceTitle: string;
  content: ServiceLandingCtaContent;
}

export function ERPCta({ serviceTitle, content }: ERPCtaProps) {
  return <ServiceLandingCta serviceTitle={serviceTitle} content={content} />;
}
