import {
  type LucideIcon,
  ChartNoAxesColumn,
  ListChecks,
  MessagesSquare,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { ServiceLandingWhyContent } from "@/types/services";

interface ServiceLandingWhySectionProps {
  content: ServiceLandingWhyContent;
}

const ICON_MAP: LucideIcon[] = [ListChecks, MessagesSquare, ChartNoAxesColumn];

export function ServiceLandingWhySection({
  content,
}: ServiceLandingWhySectionProps) {
  return (
    <section className="relative px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, index) => {
            const Icon = ICON_MAP[index % ICON_MAP.length];

            return (
              <Reveal key={item.title} delay={0.08 * (index + 1)}>
                <article className="h-full rounded-[1.75rem] border border-white/[0.08] bg-[#050711] p-6 transition-colors hover:border-[#4d8cff]/25 sm:p-7">
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03]">
                    <Icon className="size-5 text-[#9ec0ff]" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold tracking-[-0.03em] text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
