import type { ServiceLandingFaqContent } from "@/types/services";
import { ServiceLandingFaq } from "../shared/ServiceLandingFaq";

interface ERPFaqProps {
  content: ServiceLandingFaqContent;
}

export function ERPFaq({ content }: ERPFaqProps) {
  return <ServiceLandingFaq content={content} />;
}
