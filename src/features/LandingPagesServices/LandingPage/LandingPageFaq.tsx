import type { ServiceLandingFaqContent } from "@/types/services";
import { ServiceLandingFaq } from "../shared/ServiceLandingFaq";

interface LandingPageFaqProps {
  content: ServiceLandingFaqContent;
}

export function LandingPageFaq({ content }: LandingPageFaqProps) {
  return <ServiceLandingFaq content={content} />;
}
