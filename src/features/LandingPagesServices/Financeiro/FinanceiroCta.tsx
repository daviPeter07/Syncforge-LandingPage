import type { ServiceLandingCtaContent } from "@/types/services";
import { ServiceLandingCta } from "../shared/ServiceLandingCta";

interface FinanceiroCtaProps {
  serviceTitle: string;
  content: ServiceLandingCtaContent;
}

export function FinanceiroCta({ serviceTitle, content }: FinanceiroCtaProps) {
  return <ServiceLandingCta serviceTitle={serviceTitle} content={content} />;
}
