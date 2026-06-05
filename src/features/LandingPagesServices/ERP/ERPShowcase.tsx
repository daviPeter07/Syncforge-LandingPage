import type { ServiceLandingShowcaseContent } from "@/types/services";
import { ServiceLandingShowcase } from "../shared/ServiceLandingShowcase";

interface ERPShowcaseProps {
  content: ServiceLandingShowcaseContent;
}

export function ERPShowcase({ content }: ERPShowcaseProps) {
  return <ServiceLandingShowcase content={content} />;
}
