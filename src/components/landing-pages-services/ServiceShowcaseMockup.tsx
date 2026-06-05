import { CheckCircle2, type LucideIcon, Sparkles } from "lucide-react";
import { cn } from "@/utils";

interface ServiceShowcaseMockupProps {
  badge: string;
  title: string;
  description: string;
  steps: string[];
  icon: LucideIcon;
  className?: string;
}

export function ServiceShowcaseMockup({
  badge,
  title,
  description,
  steps,
  icon: Icon,
  className,
}: ServiceShowcaseMockupProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050914]/90 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,140,255,0.24),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[28px_28px] opacity-30" />

      <div className="relative">
        <div className="flex items-center justify-between rounded-[1.5rem] border border-white/8 bg-white/5 px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#4d8cff]" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#4d8cff]/25 bg-[#4d8cff]/10 px-3 py-1 text-[10px] font-medium tracking-[0.16em] text-[#9ec0ff] uppercase">
            <Sparkles className="size-3" />
            {badge}
          </span>
        </div>

        <div className="mt-4 rounded-[1.7rem] border border-white/8 bg-[#081124]/90 p-5 backdrop-blur-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#4d8cff]/30 bg-[#0a1d4f]/70 shadow-[0_0_30px_rgba(77,140,255,0.2)]">
                <Icon className="size-6 text-[#9ec0ff]" />
              </div>

              <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-white">
                {title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-7 text-slate-300">
                {description}
              </p>
            </div>

            <div className="hidden rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-right sm:block">
              <div className="text-[10px] font-medium tracking-[0.16em] text-slate-400 uppercase">
                Entrega
              </div>
              <div className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-white">
                {steps.length}
              </div>
              <div className="text-xs text-slate-400">blocos do mockup</div>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#4d8cff]/25 bg-[#4d8cff]/10 text-xs font-semibold text-[#9ec0ff]">
                  {index + 1}
                </span>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-white">{step}</p>
                    <CheckCircle2 className="size-4 text-[#4d8cff]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
