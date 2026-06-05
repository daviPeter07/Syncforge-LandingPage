import { getServiceById } from "@/constants/services";
import type { ServiceId } from "@/types/services";

export const SERVICE_LANDING_PAGE_IDS = [
  "landing-page",
  "pdv",
  "crm",
  "automacao",
  "financeiro",
  "erp",
] as const satisfies readonly ServiceId[];

export function isServiceLandingPageId(id: string): id is ServiceId {
  return SERVICE_LANDING_PAGE_IDS.includes(id as ServiceId);
}

export function getServiceLandingPageIds(): ServiceId[] {
  return [...SERVICE_LANDING_PAGE_IDS];
}

export function getServiceLandingPageLinks() {
  return SERVICE_LANDING_PAGE_IDS.map((id) => {
    const service = getServiceById(id);

    return {
      id,
      label: service.title,
      href: `/services/${id}`,
    };
  });
}
