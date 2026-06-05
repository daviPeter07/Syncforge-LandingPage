import { ArrowUpRight, Building2 } from "lucide-react";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ServiceLandingShowcaseProject } from "@/types/services";

interface ServiceProjectCardProps {
  project: ServiceLandingShowcaseProject;
}

export function ServiceProjectCard({ project }: ServiceProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/45 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:shadow-[0_32px_120px_rgba(0,0,0,0.28)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <ImagePlaceholder className="size-full rounded-none" />

        {project.href ? (
          <div className="absolute inset-0 hidden items-center justify-center bg-linear-to-t from-[#040a1a]/95 via-[#07112a]/85 to-transparent opacity-0 backdrop-blur-[2px] transition-all duration-500 group-hover:opacity-100 sm:flex">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#4d8cff]/40 bg-[#081a4f]/90 px-5 text-[#9ec0ff] shadow-[0_0_40px_rgba(77,140,255,0.25)] backdrop-blur-md transition-all duration-300 hover:border-[#4d8cff]/60 hover:bg-[#0d2060]/90 hover:text-white"
            >
              <Link href={project.href}>
                Ver projeto
                <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        ) : null}

        <Badge
          variant="outline"
          className="absolute top-4 left-4 z-10 rounded-full border-[#4d8cff]/25 bg-[#07112a]/80 px-3 py-1 text-[9px] tracking-[0.16em] uppercase text-[#9ec0ff] backdrop-blur-sm"
        >
          {project.segment}
        </Badge>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="text-[1.15rem] font-semibold tracking-[-0.035em] text-foreground sm:text-[1.3rem]">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground sm:text-[0.96rem]">
          {project.summary}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#4d8cff]">
            <Building2 className="size-3.5 shrink-0" />
            <span className="truncate">{project.company}</span>
          </div>

          {project.href ? (
            <>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full border-[#4d8cff]/25 text-[#9ec0ff] hover:bg-[#081a4f]/60 sm:hidden"
              >
                <Link href={project.href}>
                  Ver projeto
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </Button>
              <span className="hidden size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-background/30 text-[#4d8cff] opacity-0 transition-all duration-300 group-hover:opacity-100 sm:flex">
                <ArrowUpRight className="size-4" />
              </span>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
