import type { ServiceLandingPageEntry } from "@/types/services";
import { ServiceLandingLayout } from "../shared/ServiceLandingLayout";
import { AutomacaoCta } from "./AutomacaoCta";
import { AutomacaoFaq } from "./AutomacaoFaq";
import { AutomacaoHero } from "./AutomacaoHero";
import { AutomacaoShowcase } from "./AutomacaoShowcase";

interface AutomacaoServicePageProps extends ServiceLandingPageEntry {}

export function AutomacaoServicePage({
  service,
  content,
}: AutomacaoServicePageProps) {
  return (
    <ServiceLandingLayout>
      <AutomacaoHero service={service} content={content.hero} />
      <AutomacaoShowcase service={service} content={content.showcase} />
      <AutomacaoFaq content={content.faq} />
      <AutomacaoCta content={content.cta} />
    </ServiceLandingLayout>
  );
}
