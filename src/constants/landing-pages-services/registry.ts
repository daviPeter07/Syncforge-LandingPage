import { getServiceById } from "@/constants/services";
import type { ServiceId, ServiceLandingPageEntry } from "@/types/services";
import { automacaoServiceContent } from "./automacao";
import { crmServiceContent } from "./crm";
import { erpServiceContent } from "./erp";
import { financeiroServiceContent } from "./financeiro";
import { landingPageServiceContent } from "./landing-page";
import { pdvServiceContent } from "./pdv";
import {
  getServiceLandingPageIds,
  isServiceLandingPageId,
  type SERVICE_LANDING_PAGE_IDS,
} from "./routes";

export const SERVICE_LANDING_PAGE_ENTRIES = {
  "landing-page": {
    service: getServiceById("landing-page"),
    content: landingPageServiceContent,
  },
  pdv: {
    service: getServiceById("pdv"),
    content: pdvServiceContent,
  },
  crm: {
    service: getServiceById("crm"),
    content: crmServiceContent,
  },
  automacao: {
    service: getServiceById("automacao"),
    content: automacaoServiceContent,
  },
  financeiro: {
    service: getServiceById("financeiro"),
    content: financeiroServiceContent,
  },
  erp: {
    service: getServiceById("erp"),
    content: erpServiceContent,
  },
} satisfies Record<
  (typeof SERVICE_LANDING_PAGE_IDS)[number],
  ServiceLandingPageEntry
>;

export function getServiceLandingPageEntry(
  id: ServiceId,
): ServiceLandingPageEntry;

export function getServiceLandingPageEntry(
  id: string,
): ServiceLandingPageEntry | null;

export function getServiceLandingPageEntry(
  id: string,
): ServiceLandingPageEntry | null {
  if (!isServiceLandingPageId(id)) {
    return null;
  }

  return SERVICE_LANDING_PAGE_ENTRIES[id];
}

export function getServiceLandingPageEntries(): ServiceLandingPageEntry[] {
  return getServiceLandingPageIds().map(
    (id) => SERVICE_LANDING_PAGE_ENTRIES[id],
  );
}
