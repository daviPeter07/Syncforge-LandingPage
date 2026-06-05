import type { ServiceLandingFaqContent } from "@/types/services";
import { ServiceLandingFaq } from "../shared/ServiceLandingFaq";

interface CRMFaqProps {
  content: ServiceLandingFaqContent;
}

export function CRMFaq({ content }: CRMFaqProps) {
  return <ServiceLandingFaq content={content} />;
}
