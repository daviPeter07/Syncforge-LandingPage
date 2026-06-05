import type {
  ServiceItem,
  ServiceLandingShowcaseContent,
} from "@/types/services";
import { ServiceLandingShowcase } from "../shared/ServiceLandingShowcase";

interface FinanceiroShowcaseProps {
  service: ServiceItem;
  content: ServiceLandingShowcaseContent;
}

export function FinanceiroShowcase({
  service,
  content,
}: FinanceiroShowcaseProps) {
  return <ServiceLandingShowcase service={service} content={content} />;
}
