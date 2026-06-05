import type { ServiceLandingShowcaseContent } from "@/types/services";
import { ServiceLandingShowcase } from "../shared/ServiceLandingShowcase";

interface PDVShowcaseProps {
  content: ServiceLandingShowcaseContent;
}

export function PDVShowcase({ content }: PDVShowcaseProps) {
  return <ServiceLandingShowcase content={content} />;
}
