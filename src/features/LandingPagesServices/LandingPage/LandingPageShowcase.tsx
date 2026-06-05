import type { ServiceLandingShowcaseContent } from "@/types/services";
import { ServiceLandingShowcase } from "../shared/ServiceLandingShowcase";

interface LandingPageShowcaseProps {
  content: ServiceLandingShowcaseContent;
}

export function LandingPageShowcase({ content }: LandingPageShowcaseProps) {
  return <ServiceLandingShowcase content={content} />;
}
