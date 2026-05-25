"use client";

import { Marquee } from "@/components/magicui/marquee";
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { AVATAR_URLS, TESTIMONIALS } from "@/constants/clients";
import { TestimonialCard } from "./TestimonialCard";

export function Clients() {
  const firstRow = TESTIMONIALS.slice(0, TESTIMONIALS.length / 2);
  const secondRow = TESTIMONIALS.slice(TESTIMONIALS.length / 2);

  return (
    <section id="clientes" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Clientes"
          title={
            <>
              Marcas que <span className="text-[#4d8cff]">crescem</span> com a
              SyncForge
            </>
          }
          description="De negócios locais a produtos digitais, ajudamos empresas a organizar operações e fortalecer sua presença online com soluções práticas."
        />

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-3">
            <AvatarCircles avatarUrls={AVATAR_URLS} numPeople={5} />
            <p className="text-xs tracking-wide text-muted-foreground">
              5 empresas com depoimentos reais
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="relative mt-14 flex w-full flex-col gap-4 overflow-hidden">
            <Marquee pauseOnHover className="[--duration:50s]">
              {firstRow.map((t) => (
                <TestimonialCard key={t.name} data={t} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:55s]">
              {secondRow.map((t) => (
                <TestimonialCard key={t.name} data={t} />
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
