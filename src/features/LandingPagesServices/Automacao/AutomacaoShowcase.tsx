import type {
  ServiceItem,
  ServiceLandingShowcaseContent,
} from "@/types/services";
import { ServiceLandingShowcase } from "../shared/ServiceLandingShowcase";

interface AutomacaoShowcaseProps {
  service: ServiceItem;
  content: ServiceLandingShowcaseContent;
}

export function AutomacaoShowcase({
  service,
  content,
}: AutomacaoShowcaseProps) {
  return <ServiceLandingShowcase service={service} content={content} />;
}
