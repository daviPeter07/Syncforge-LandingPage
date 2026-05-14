"use client";

import { cn } from "@/utils";

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: string[];
}

export function AvatarCircles({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) {
  return (
    <div className={cn("z-10 flex -space-x-3 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <img
          key={`${url}-${index}`}
          className="h-10 w-10 rounded-full border-2 border-background object-cover"
          src={url || "/placeholder.svg"}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      {numPeople ? (
        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-primary text-center text-xs font-semibold text-primary-foreground">
          +{numPeople}
        </span>
      ) : null}
    </div>
  );
}
