import type {
  ServiceItem,
  ServiceLandingShowcaseContent,
} from "@/types/services";
import { ServiceLandingShowcase } from "../shared/ServiceLandingShowcase";

interface PDVShowcaseProps {
  service: ServiceItem;
  content: ServiceLandingShowcaseContent;
}

export function PDVShowcase({ service, content }: PDVShowcaseProps) {
  return <ServiceLandingShowcase service={service} content={content} />;
}
