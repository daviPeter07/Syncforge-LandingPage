import type {
  ServiceItem,
  ServiceLandingShowcaseContent,
} from "@/types/services";
import { ServiceLandingShowcase } from "../shared/ServiceLandingShowcase";

interface LandingPageShowcaseProps {
  service: ServiceItem;
  content: ServiceLandingShowcaseContent;
}

export function LandingPageShowcase({
  service,
  content,
}: LandingPageShowcaseProps) {
  return <ServiceLandingShowcase service={service} content={content} />;
}
