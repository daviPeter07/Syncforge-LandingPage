"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES } from "@/constants/services";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <section id="servicos" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Serviços"
          title={
            <>
              Tudo que sua marca precisa <br />
              em <span className="text-[#4d8cff]">um único time</span>
            </>
          }
          description="Software para escalar sua operação, vídeo para amplificar sua mensagem e design para construir uma marca inesquecível."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((category, i) => (
            <ServiceCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
