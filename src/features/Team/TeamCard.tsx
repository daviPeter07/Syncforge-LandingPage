"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { TeamMember } from "@/types/team";
import { SocialIcons } from "./SocialIcons";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <Reveal delay={index * 0.08}>
      <article className="group relative flex h-full w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-border/50 bg-card/40 backdrop-blur-md transition-colors hover:border-[#4d8cff]/40">
        <div className="relative aspect-4/5 overflow-hidden">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={`Foto de ${member.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5 bg-card/80">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              {member.name}
            </h3>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#4d8cff]">
              {member.role}
            </p>
          </div>
          <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
            {member.bio}
          </p>
          <SocialIcons socials={member.socials} memberName={member.name} />
        </div>
      </article>
    </Reveal>
  );
}
