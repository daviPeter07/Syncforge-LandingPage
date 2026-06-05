import { ServiceProjectCard } from "@/components/landing-pages-services/ServiceProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { ServiceLandingShowcaseContent } from "@/types/services";

interface ServiceLandingShowcaseProps {
  content: ServiceLandingShowcaseContent;
}

export function ServiceLandingShowcase({
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

        {content.note ? (
          <Reveal delay={0.1}>
            <div className="mt-6 max-w-3xl rounded-[1.35rem] border border-white/8 bg-card/35 px-4 py-3 text-sm leading-7 text-muted-foreground backdrop-blur-sm sm:px-5">
              {content.note}
            </div>
          </Reveal>
        ) : null}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {content.projects.map((project, index) => (
            <Reveal
              key={`${project.company}-${project.title}`}
              delay={0.08 * (index + 1)}
            >
              <ServiceProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
