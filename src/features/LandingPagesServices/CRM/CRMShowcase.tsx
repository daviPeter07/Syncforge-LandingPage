import type { ServiceLandingShowcaseContent } from "@/types/services";
import { ServiceLandingShowcase } from "../shared/ServiceLandingShowcase";

interface CRMShowcaseProps {
  content: ServiceLandingShowcaseContent;
}

export function CRMShowcase({ content }: CRMShowcaseProps) {
  return <ServiceLandingShowcase content={content} />;
}
