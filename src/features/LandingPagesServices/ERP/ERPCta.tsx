import type { ServiceLandingCtaContent } from "@/types/services";
import { ServiceLandingCta } from "../shared/ServiceLandingCta";

interface ERPCtaProps {
  content: ServiceLandingCtaContent;
}

export function ERPCta({ content }: ERPCtaProps) {
  return <ServiceLandingCta content={content} />;
}
