import type { ServiceLandingCtaContent } from "@/types/services";
import { ServiceLandingCta } from "../shared/ServiceLandingCta";

interface FinanceiroCtaProps {
  content: ServiceLandingCtaContent;
}

export function FinanceiroCta({ content }: FinanceiroCtaProps) {
  return <ServiceLandingCta content={content} />;
}
