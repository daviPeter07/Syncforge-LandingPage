import { Github, Globe, Instagram, Linkedin, Twitter } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SocialLink } from "@/types/team";

const ICONS: Record<SocialLink["type"], LucideIcon> = {
  linkedin: Linkedin,
  instagram: Instagram,
  github: Github,
  twitter: Twitter,
  dribbble: Globe,
  behance: Globe,
  website: Globe,
};

const LABELS: Record<SocialLink["type"], string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  github: "GitHub",
  twitter: "Twitter",
  dribbble: "Dribbble",
  behance: "Behance",
  website: "Website",
};

interface SocialIconsProps {
  socials: SocialLink[];
  memberName: string;
}

export function SocialIcons({ socials, memberName }: SocialIconsProps) {
  return (
    <div className="flex items-center gap-2">
      {socials.map((s) => {
        const Icon = ICONS[s.type];
        return (
          <a
            key={s.type}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${LABELS[s.type]} de ${memberName}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground transition-colors hover:border-[#4d8cff]/40 hover:bg-[#0a3499]/20 hover:text-foreground"
          >
            <Icon className="size-4" />
          </a>
        );
      })}
    </div>
  );
}
