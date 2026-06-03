import { Image as ImageIcon, type LucideIcon } from "lucide-react";
import { cn } from "@/utils";

interface ImagePlaceholderProps {
  className?: string;
  icon?: LucideIcon;
}

export function ImagePlaceholder({
  className,
  icon: Icon = ImageIcon,
}: ImagePlaceholderProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden rounded-[1.35rem] border border-white/8 bg-linear-to-br from-[#07153d] via-[#081229] to-[#04070f]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,140,255,0.2),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[28px_28px] opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-16 items-center justify-center rounded-2xl border border-[#4d8cff]/35 bg-[#081a4f]/80 shadow-[0_0_40px_rgba(77,140,255,0.18)] backdrop-blur-sm">
          <Icon className="size-7 text-[#77a7ff]" />
        </div>
      </div>
    </div>
  );
}
