import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ServiceLandingFaqContent } from "@/types/services";

interface ServiceLandingFaqProps {
  content: ServiceLandingFaqContent;
}

export function ServiceLandingFaq({ content }: ServiceLandingFaqProps) {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-white/10 bg-card/40 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.2)] backdrop-blur-md sm:p-6">
            <Accordion type="single" collapsible defaultValue="item-0">
              {content.items.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${index}`}
                  className="rounded-2xl border border-white/8 px-4 py-2 not-last:mb-3"
                >
                  <AccordionTrigger className="py-3 text-base font-semibold no-underline hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
