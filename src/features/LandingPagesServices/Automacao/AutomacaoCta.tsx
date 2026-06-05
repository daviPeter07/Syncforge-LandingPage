import type { ServiceLandingCtaContent } from "@/types/services";
import { ServiceLandingCta } from "../shared/ServiceLandingCta";

interface AutomacaoCtaProps {
  content: ServiceLandingCtaContent;
}

export function AutomacaoCta({ content }: AutomacaoCtaProps) {
  return <ServiceLandingCta content={content} />;
}
