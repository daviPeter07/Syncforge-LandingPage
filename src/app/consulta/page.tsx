import type { Metadata } from "next";
import { BackToTop } from "@/components/BackToTop";
import { SiteBackground } from "@/components/SiteBackground";
import { Footer } from "@/features/Footer";
import { Navbar } from "@/features/Navbar";
import { ServiceConsultation } from "@/features/ServiceConsultation/ServiceConsultation";

export const metadata: Metadata = {
  title: "Consulta de soluções",
  description:
    "Responda algumas perguntas e descubra quais soluções da SyncForge combinam com o momento do seu negócio.",
};

export default function ConsultationPage() {
  return (
    <>
      <SiteBackground />
      <Navbar />

      <main className="relative min-h-svh pt-20">
        <ServiceConsultation />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
