import { ImagePlaceholder } from "@/components/image-placeholder";
import type { ServiceItem } from "@/types/services";

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="group rounded-[1.7rem] border border-white/10 bg-card/55 p-3 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#4d8cff]/35 hover:bg-card/70">
      <ImagePlaceholder icon={service.icon} className="aspect-video w-full" />

      <div className="px-1 pt-5 pb-2">
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
          {service.title}
        </h2>
        <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-[0.96rem]">
          {service.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#4d8cff]/20 bg-[#4d8cff]/8 px-3 py-1 text-xs font-medium text-[#4d8cff]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
