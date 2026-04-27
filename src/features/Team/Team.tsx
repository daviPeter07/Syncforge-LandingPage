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
              Talentos que <span className="text-[#4d8cff]">forjam</span> juntos
            </>
          }
          description="Um time enxuto e multidisciplinar, com profissionais experientes em desenvolvimento, design e produção audiovisual."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((m, i) => (
            <TeamCard key={m.name} member={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
