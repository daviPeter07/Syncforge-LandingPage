import type { LucideIcon } from "lucide-react";

export interface Testimonial {
  name: string;
  role?: string;
  company: string;
  website: string;
  message: string;
  avatar?: string;
  avatarPosition?: "center" | "top";
  icon?: LucideIcon;
  iconClass?: string;
}

export interface ClientLogo {
  name: string;
  category: string;
}
