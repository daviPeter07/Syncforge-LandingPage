import ServicePageContent from "@/features/Services/ServicePageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços da SyncForge: landing pages, PDV, CRM, automação, financeiro e ERP.",
};

export default function ServicesPage() {
  return <ServicePageContent />;
}
