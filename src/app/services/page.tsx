import type { Metadata } from "next";
import ServicePageContent from "@/features/Services/ServicePageContent";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços da SyncForge: landing pages, PDV, CRM, automação, financeiro e ERP.",
};

export default function ServicesPage() {
  return <ServicePageContent />;
}
