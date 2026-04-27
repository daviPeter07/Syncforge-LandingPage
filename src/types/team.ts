export interface SocialLink {
  type: "linkedin" | "instagram" | "github" | "twitter" | "dribbble" | "behance" | "website";
  url: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  socials: SocialLink[];
}
