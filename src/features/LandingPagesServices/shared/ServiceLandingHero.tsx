import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { CONTACT_WHATSAPP_HREF } from "@/constants/contact";
import type { ServiceItem, ServiceLandingHeroContent } from "@/types/services";

interface ServiceLandingHeroProps {
  service: ServiceItem;
  content: ServiceLandingHeroContent;
}

export function ServiceLandingHero({
  service,
  content,
}: ServiceLandingHeroProps) {
  return (
    <section className="relative px-6 pt-10 pb-20 sm:pt-14 sm:pb-24 lg:pt-18 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Voltar para servicos
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[10.5px] font-medium tracking-[0.22em] text-muted-foreground uppercase backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4d8cff]" />
                {content.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.04]">
                {content.title}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
                {content.description}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                {content.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-[#4d8cff]/20 bg-[#4d8cff]/8 px-3.5 py-2 text-xs font-medium text-[#4d8cff] sm:text-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild className="rounded-full px-5">
                  <a
                    href={CONTACT_WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar sobre este servico
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>

                <Button asChild variant="outline" className="rounded-full px-5">
                  <Link href="/services">Ver todos os servicos</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <aside className="rounded-[2rem] border border-white/10 bg-card/55 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <div className="text-[10.5px] font-medium tracking-[0.2em] text-[#4d8cff] uppercase">
                Visao rapida
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">
                {service.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                {service.description}
              </p>

              <div className="mt-6 grid gap-3">
                {service.tags.map((tag) => (
                  <div
                    key={tag}
                    className="rounded-2xl border border-white/8 bg-background/30 px-4 py-3 text-sm text-foreground"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
