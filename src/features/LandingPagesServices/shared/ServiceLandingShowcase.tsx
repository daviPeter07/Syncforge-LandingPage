import { ServiceShowcaseMockup } from "@/components/landing-pages-services/ServiceShowcaseMockup";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type {
  ServiceItem,
  ServiceLandingShowcaseContent,
} from "@/types/services";

interface ServiceLandingShowcaseProps {
  service: ServiceItem;
  content: ServiceLandingShowcaseContent;
}

export function ServiceLandingShowcase({
  service,
  content,
}: ServiceLandingShowcaseProps) {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          align="left"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <ServiceShowcaseMockup
              badge={service.title}
              title={content.mockupTitle}
              description={content.mockupDescription}
              steps={content.mockupSteps}
              icon={service.icon}
            />
          </Reveal>

          <div className="grid gap-4">
            {content.items.map((item, index) => (
              <Reveal key={item.title} delay={0.08 * (index + 1)}>
                <article className="rounded-[1.8rem] border border-white/10 bg-card/45 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.22)] backdrop-blur-md">
                  <div className="text-[10px] font-medium tracking-[0.18em] text-[#4d8cff] uppercase">
                    {item.label}
                  </div>

                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
