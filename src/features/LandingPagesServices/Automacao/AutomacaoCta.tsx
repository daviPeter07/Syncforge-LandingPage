import type { ServiceLandingCtaContent } from "@/types/services";
import { ServiceLandingCta } from "../shared/ServiceLandingCta";

interface AutomacaoCtaProps {
  serviceTitle: string;
  content: ServiceLandingCtaContent;
}

export function AutomacaoCta({ serviceTitle, content }: AutomacaoCtaProps) {
  return <ServiceLandingCta serviceTitle={serviceTitle} content={content} />;
}
