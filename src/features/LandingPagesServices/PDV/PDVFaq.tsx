import type { ServiceLandingFaqContent } from "@/types/services";
import { ServiceLandingFaq } from "../shared/ServiceLandingFaq";

interface PDVFaqProps {
  content: ServiceLandingFaqContent;
}

export function PDVFaq({ content }: PDVFaqProps) {
  return <ServiceLandingFaq content={content} />;
}
