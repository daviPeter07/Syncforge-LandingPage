"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { TEAM_MEMBERS } from "@/constants/team";
import { TeamCard } from "./TeamCard";

export function Team() {
  return (
    <section id="equipe" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Equipe"
          title={
            <>
              Quem está por trás da <span className="text-[#4d8cff]">SyncForge</span>
            </>
          }
          description="Conheça quem está à frente da SyncForge, cuidando da visão, das decisões e da transformação das ideias em algo que realmente funciona."
        />

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {TEAM_MEMBERS.map((m, i) => (
            <TeamCard key={m.name} member={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
