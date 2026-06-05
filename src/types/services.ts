import type { LucideIcon } from "lucide-react";

export type ServiceId =
  | "landing-page"
  | "pdv"
  | "crm"
  | "automacao"
  | "financeiro"
  | "erp";

export type ServiceCategory = ServiceId;

export interface ServiceItem {
  id: ServiceId;
  category: ServiceCategory;
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
}

export interface ServiceLandingHeroContent {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface ServiceLandingShowcaseItem {
  label: string;
  title: string;
  description: string;
}

export interface ServiceLandingShowcaseContent {
  eyebrow: string;
  title: string;
  description: string;
  mockupTitle: string;
  mockupDescription: string;
  mockupSteps: string[];
  items: ServiceLandingShowcaseItem[];
}

export interface ServiceLandingFaqItem {
  question: string;
  answer: string;
}

export interface ServiceLandingFaqContent {
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceLandingFaqItem[];
}

export type ServiceLandingPricingMode = "implementation" | "retainer";

export interface ServiceLandingPricingAmount {
  prefix?: string;
  amount: string;
  suffix: string;
  note?: string;
}

export interface ServiceLandingPricingPlan {
  name: string;
  description: string;
  badge?: string;
  featured?: boolean;
  ctaLabel: string;
  features: string[];
  implementation: ServiceLandingPricingAmount;
  retainer: ServiceLandingPricingAmount;
}

export interface ServiceLandingPricingContent {
  eyebrow: string;
  title: string;
  description: string;
  implementationLabel: string;
  retainerLabel: string;
  disclaimer?: string;
  plans: ServiceLandingPricingPlan[];
}

export interface ServiceLandingCtaContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
  note?: string;
}

export interface ServiceLandingPageContent {
  id: ServiceId;
  seoTitle: string;
  seoDescription: string;
  hero: ServiceLandingHeroContent;
  showcase: ServiceLandingShowcaseContent;
  pricing: ServiceLandingPricingContent;
  faq: ServiceLandingFaqContent;
  cta: ServiceLandingCtaContent;
}

export interface ServiceLandingPageEntry {
  service: ServiceItem;
  content: ServiceLandingPageContent;
}
