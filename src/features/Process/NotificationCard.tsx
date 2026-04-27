import type { NotificationItem } from "@/types/notification";
import { cn } from "@/lib/utils";

interface NotificationCardProps {
  data: NotificationItem;
}

export function NotificationCard({ data }: NotificationCardProps) {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-default overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "border border-border/60 bg-card/70 backdrop-blur-md",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl text-lg"
          style={{
            backgroundColor: data.color,
          }}
        >
          <span className="text-white">{data.icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center gap-2 whitespace-nowrap text-sm font-semibold tracking-tight">
            <span>{data.name}</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">{data.time}</span>
          </figcaption>
          <p className="truncate text-xs text-muted-foreground">
            {data.description}
          </p>
        </div>
      </div>
    </figure>
  );
}
