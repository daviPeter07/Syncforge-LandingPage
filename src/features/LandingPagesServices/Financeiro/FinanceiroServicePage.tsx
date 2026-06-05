import type { ServiceLandingPageEntry } from "@/types/services";
import { ServiceLandingLayout } from "../shared/ServiceLandingLayout";
import { FinanceiroCta } from "./FinanceiroCta";
import { FinanceiroFaq } from "./FinanceiroFaq";
import { FinanceiroHero } from "./FinanceiroHero";
import { FinanceiroShowcase } from "./FinanceiroShowcase";

interface FinanceiroServicePageProps extends ServiceLandingPageEntry {}

export function FinanceiroServicePage({
  service,
  content,
}: FinanceiroServicePageProps) {
  return (
    <ServiceLandingLayout>
      <FinanceiroHero service={service} content={content.hero} />
      <FinanceiroShowcase service={service} content={content.showcase} />
      <FinanceiroFaq content={content.faq} />
      <FinanceiroCta content={content.cta} />
    </ServiceLandingLayout>
  );
}
