"use client";

import { Reveal } from "@/components/Reveal";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export function Contact() {
  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
            Entre em <span className="text-[#4d8cff]">Contato</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.1}>
            <ContactInfo />
          </Reveal>
          <Reveal delay={0.2}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
