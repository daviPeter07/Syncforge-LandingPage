import { ArrowUpRight, Building2, CircleUserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ServiceLandingShowcaseProject } from "@/types/services";
import { cn } from "@/utils";

interface ServiceProjectCardProps {
  project: ServiceLandingShowcaseProject;
  featured?: boolean;
}

export function ServiceProjectCard({
  project,
  featured = false,
}: ServiceProjectCardProps) {
  return (
    <Card
      className={cn(
        "h-full rounded-[2rem] border border-white/10 bg-card/45 py-0 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md",
        featured &&
          "border-[#4d8cff]/30 bg-[#07112a]/90 shadow-[0_30px_100px_rgba(4,16,52,0.42)]",
      )}
    >
      <CardHeader className="px-6 pt-6 pb-0 sm:px-7 sm:pt-7">
        <div className="flex items-start justify-between gap-3">
          <Badge
            variant="outline"
            className={cn(
              "rounded-full border-[#4d8cff]/25 bg-[#4d8cff]/8 px-2.5 py-1 text-[9px] tracking-[0.16em] uppercase",
              featured ? "text-[#9ec0ff]" : "text-[#4d8cff]",
            )}
          >
            {project.segment}
          </Badge>

          <span
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-full border",
              featured
                ? "border-[#4d8cff]/25 bg-[#4d8cff]/10 text-[#9ec0ff]"
                : "border-white/10 bg-background/30 text-[#4d8cff]",
            )}
          >
            <ArrowUpRight className="size-4" />
          </span>
        </div>

        <CardTitle
          className={cn(
            "mt-5 text-[1.35rem] font-semibold tracking-[-0.035em] sm:text-[1.55rem]",
            featured ? "text-white" : "text-foreground",
          )}
        >
          {project.title}
        </CardTitle>

        <CardDescription
          className={cn(
            "mt-3 text-sm leading-7 sm:text-[0.96rem]",
            featured ? "text-slate-300" : "text-muted-foreground",
          )}
        >
          {project.summary}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-6 pt-6 pb-6 sm:px-7 sm:pb-7">
        <div className="grid gap-3 sm:grid-cols-2">
          <div
            className={cn(
              "rounded-[1.35rem] border px-4 py-3",
              featured
                ? "border-white/10 bg-white/5"
                : "border-white/8 bg-background/25",
            )}
          >
            <div className="flex items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-[#4d8cff] uppercase">
              <Building2 className="size-3.5" />
              Empresa
            </div>
            <p
              className={cn(
                "mt-2 text-sm font-medium",
                featured ? "text-white" : "text-foreground",
              )}
            >
              {project.company}
            </p>
          </div>

          <div
            className={cn(
              "rounded-[1.35rem] border px-4 py-3",
              featured
                ? "border-white/10 bg-white/5"
                : "border-white/8 bg-background/25",
            )}
          >
            <div className="flex items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-[#4d8cff] uppercase">
              <CircleUserRound className="size-3.5" />
              Cliente
            </div>
            <p
              className={cn(
                "mt-2 text-sm font-medium",
                featured ? "text-white" : "text-foreground",
              )}
            >
              {project.client}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <div className="text-[10px] font-medium tracking-[0.18em] text-[#4d8cff] uppercase">
            Escopo apresentado
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.scope.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className={cn(
                  "rounded-full border-white/10 bg-background/20 px-3 py-1 text-[11px]",
                  featured ? "text-slate-200" : "text-muted-foreground",
                )}
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "mt-5 rounded-[1.45rem] border px-4 py-4",
            featured
              ? "border-[#4d8cff]/20 bg-[#081a4f]/45"
              : "border-white/8 bg-background/20",
          )}
        >
          <div className="text-[10px] font-medium tracking-[0.18em] text-[#4d8cff] uppercase">
            Resultado esperado
          </div>
          <p
            className={cn(
              "mt-2 text-sm leading-7",
              featured ? "text-slate-200" : "text-muted-foreground",
            )}
          >
            {project.outcome}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
