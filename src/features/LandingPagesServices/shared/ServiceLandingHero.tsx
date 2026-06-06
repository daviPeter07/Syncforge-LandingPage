import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { buildWhatsAppHref } from "@/constants/contact";
import type { ServiceItem, ServiceLandingHeroContent } from "@/types/services";

interface ServiceLandingHeroProps {
  service: ServiceItem;
  content: ServiceLandingHeroContent;
}

export function ServiceLandingHero({
  service,
  content,
}: ServiceLandingHeroProps) {
  const whatsappHref = buildWhatsAppHref(
    `Olá, vim pela página de ${service.title} da SyncForge e quero falar sobre esse serviço.`,
  );

  const Icon = service.icon;

  return (
    <section className="relative border-b border-white/[0.06] px-6 pt-10 pb-20 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Voltar para serviços
          </Link>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:mt-18 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-[11px] font-medium tracking-[0.22em] text-[#9ec0ff] uppercase">
                {content.eyebrow}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-7 max-w-3xl text-balance text-[clamp(2.25rem,5vw,4.4rem)] leading-[0.98] font-semibold tracking-[-0.055em] text-foreground">
                {content.title}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
                {content.description}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {content.highlights?.slice(0, 3).map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-[#4d8cff]/20 bg-[#4d8cff]/8 px-4 py-2 text-sm font-medium text-[#9ec0ff]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-full bg-[#0f6bff] px-7 text-sm font-semibold text-white shadow-none transition-colors hover:bg-[#2f7fff]"
                >
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar sobre este serviço
                    <ArrowUpRight className="ml-1 size-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-white/[0.1] bg-transparent px-7 text-sm font-semibold text-foreground/80 hover:bg-white/[0.04] hover:text-foreground"
                >
                  <Link href="/services">Ver todos os serviços</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#4d8cff]" />
                  Projeto sob medida
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#4d8cff]" />
                  Direção visual e estratégica
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div className="rounded-[2rem] border border-white/[0.08] bg-[#050711] p-5 sm:p-6">
              <div className="rounded-[1.5rem] border border-white/[0.08] bg-[#080b17] p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-[#4d8cff]/20 bg-[#4d8cff]/10">
                    <Icon className="size-5 text-[#9ec0ff]" />
                  </div>

                  <div>
                    <p className="text-xs font-medium tracking-[0.18em] text-[#9ec0ff] uppercase">
                      Solução
                    </p>
                    <h2 className="mt-1 text-xl font-semibold tracking-[-0.03em] text-foreground">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/[0.08] pt-7">
                  <p className="text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase">
                    O que essa página precisa fazer
                  </p>

                  <div className="mt-5 space-y-4">
                    <ServiceHeroPoint
                      number="01"
                      title="Explicar"
                      description="O visitante precisa entender rapidamente o que você oferece."
                    />

                    <ServiceHeroPoint
                      number="02"
                      title="Gerar confiança"
                      description="A página precisa mostrar contexto, diferenciais e motivos para acreditar."
                    />

                    <ServiceHeroPoint
                      number="03"
                      title="Conduzir para ação"
                      description="O caminho até o contato, WhatsApp ou orçamento precisa estar claro."
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface ServiceHeroPointProps {
  number: string;
  title: string;
  description: string;
}

function ServiceHeroPoint({
  number,
  title,
  description,
}: ServiceHeroPointProps) {
  return (
    <div className="grid grid-cols-[2.5rem_1fr] gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
      <div className="flex size-10 items-center justify-center rounded-xl border border-white/[0.08] text-sm font-semibold text-[#9ec0ff]">
        {number}
      </div>

      <div>
        <h3 className="font-semibold tracking-[-0.02em] text-foreground">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
