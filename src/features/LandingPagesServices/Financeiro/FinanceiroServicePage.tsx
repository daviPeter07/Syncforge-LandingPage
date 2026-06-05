import type { ServiceLandingPageEntry } from "@/types/services";
import { ServiceLandingLayout } from "../shared/ServiceLandingLayout";
import { FinanceiroCta } from "./FinanceiroCta";
import { FinanceiroFaq } from "./FinanceiroFaq";
import { FinanceiroHero } from "./FinanceiroHero";
import { FinanceiroPricing } from "./FinanceiroPricing";
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
      <FinanceiroPricing
        serviceTitle={service.title}
        content={content.pricing}
      />
      <FinanceiroFaq content={content.faq} />
      <FinanceiroCta serviceTitle={service.title} content={content.cta} />
    </ServiceLandingLayout>
  );
}
