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
              Sua marca com mais presença, <br />
              gestão e <span className="text-[#4d8cff]">resultado digital</span>
            </>
          }
          description="Criamos soluções sob medida para negócios que querem organizar processos, vender melhor e fortalecer sua presença digital."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((category, i) =>
            category.id === "software" ? (
              <div
                key={category.id}
                className="flex justify-center lg:col-span-3"
              >
                <ServiceCard
                  category={category}
                  index={i}
                  className="w-full lg:w-230 lg:flex-none"
                />
              </div>
            ) : (
              <ServiceCard key={category.id} category={category} index={i} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
