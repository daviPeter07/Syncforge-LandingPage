import { getServiceLandingPageEntry } from "@/constants/landing-pages-services/registry";
import {
  getServiceLandingPageIds,
  isServiceLandingPageId,
} from "@/constants/landing-pages-services/routes";
import type { ServiceId } from "@/types/services";
import { AutomacaoServicePage } from "./Automacao/AutomacaoServicePage";
import { CRMServicePage } from "./CRM/CRMServicePage";
import { ERPServicePage } from "./ERP/ERPServicePage";
import { FinanceiroServicePage } from "./Financeiro/FinanceiroServicePage";
import { LandingPageServicePage } from "./LandingPage/LandingPageServicePage";
import { PDVServicePage } from "./PDV/PDVServicePage";

export { getServiceLandingPageIds };
export const isServiceId = isServiceLandingPageId;

interface LandingPageServiceRouterProps {
  id: ServiceId;
}

export function LandingPageServiceRouter({
  id,
}: LandingPageServiceRouterProps) {
  const entry = getServiceLandingPageEntry(id);

  switch (id) {
    case "landing-page":
      return <LandingPageServicePage {...entry} />;
    case "pdv":
      return <PDVServicePage {...entry} />;
    case "crm":
      return <CRMServicePage {...entry} />;
    case "automacao":
      return <AutomacaoServicePage {...entry} />;
    case "financeiro":
      return <FinanceiroServicePage {...entry} />;
    case "erp":
      return <ERPServicePage {...entry} />;
  }
}
