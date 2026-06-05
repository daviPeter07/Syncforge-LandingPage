import type {
  ServiceItem,
  ServiceLandingShowcaseContent,
} from "@/types/services";
import { ServiceLandingShowcase } from "../shared/ServiceLandingShowcase";

interface CRMShowcaseProps {
  service: ServiceItem;
  content: ServiceLandingShowcaseContent;
}

export function CRMShowcase({ service, content }: CRMShowcaseProps) {
  return <ServiceLandingShowcase service={service} content={content} />;
}
