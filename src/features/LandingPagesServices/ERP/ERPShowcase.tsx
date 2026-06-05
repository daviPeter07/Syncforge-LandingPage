import type {
  ServiceItem,
  ServiceLandingShowcaseContent,
} from "@/types/services";
import { ServiceLandingShowcase } from "../shared/ServiceLandingShowcase";

interface ERPShowcaseProps {
  service: ServiceItem;
  content: ServiceLandingShowcaseContent;
}

export function ERPShowcase({ service, content }: ERPShowcaseProps) {
  return <ServiceLandingShowcase service={service} content={content} />;
}
