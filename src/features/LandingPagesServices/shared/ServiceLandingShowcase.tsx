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
  const projects = content.projects ?? [];

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

        {projects.length > 0 ? (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal
                key={`${project.company}-${project.title}`}
                delay={0.08 * (index + 1)}
              >
                <ServiceProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.12}>
            <div className="mt-14 rounded-[2rem] border border-dashed border-white/12 bg-card/40 px-6 py-10 text-center shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md sm:px-10 sm:py-12">

              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-[1.75rem]">
                Em breve...
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Estamos organizando nossos projetos e demonstrações para publicar aqui em breve.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
