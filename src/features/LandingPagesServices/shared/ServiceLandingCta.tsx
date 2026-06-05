import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { CONTACT_WHATSAPP_HREF } from "@/constants/contact";
import type { ServiceLandingCtaContent } from "@/types/services";

interface ServiceLandingCtaProps {
  content: ServiceLandingCtaContent;
}

export function ServiceLandingCta({ content }: ServiceLandingCtaProps) {
  return (
    <section className="relative px-6 pt-8 pb-4 sm:pb-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#07112a]/95 px-6 py-8 shadow-[0_28px_90px_rgba(0,0,0,0.32)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,140,255,0.18),transparent_42%)]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-[10.5px] font-medium tracking-[0.2em] text-[#9ec0ff] uppercase">
                  {content.eyebrow}
                </div>

                <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                  {content.title}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  {content.description}
                </p>

                {content.note ? (
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                    {content.note}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-3 lg:min-w-[240px]">
                <Button asChild className="h-11 rounded-full p-6">
                  <a
                    href={CONTACT_WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.primaryLabel}
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-full p-2"
                >
                  <Link href="/services">{content.secondaryLabel}</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
