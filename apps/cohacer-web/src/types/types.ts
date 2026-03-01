import type { HeroVariant, HeroCta } from "@cohacer/ui";
import type { ProgramsContent } from "./programs";

export type SiteKey = 'cohacer-web' | 'unidho-web' | 'acuerdo286-web';
export type LayoutKey = 'stacked' | 'twoColumnLead' | 'longForm';

export type LandingPageContent = {
  siteKey: SiteKey;
  layoutKey: LayoutKey;
  meta: {
    title: string;
    description: string;
  };
  header: {
    brand: {
      name: string;
      logoSrc?: string;
    };
    nav?: Array<{ label: string; href: string }>;
  };
  sections: LandingSection[];
  footer: {
    legalLinks: Array<{ label: string; href: string }>;
    disclaimer?: string;
  };
};

export type LandingSection =
  | HeroSection
  | BulletsSection
  | TrustSection
  | PricingSection
  | BenefitsSection
  | LeadFormSection
  | ProgramsSection;


export type HeroSection = {
  type: 'hero';
  id: string;
  variant: HeroVariant;
  eyebrow?: string;
  title: string;

  /** ✅ requerido para el componente */
  subtitle: string;

  /** ✅ reemplaza ctas[] por el patrón definitivo */
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;

  /** ✅ imagen opcional */
  media?: {
    src: string;
    alt: string;
  };
  overlayOpacity: number;
};

export type ProgramsSection = {
  type: "programs";
  id: string;
  content: ProgramsContent;
};

export type BulletsSection = {
  type: 'bullets';
  id: string;
  title: string;
  items: string[];
};

export type TrustSection = {
  type: 'trust';
  id: string;
  title: string;
  items?: Array<{ label: string; description?: string }>;
};

export type PricingSection = {
  type: 'pricing';
  id: string;
  title: string;
  price: {
    amount: number;
    currency: 'MXN';
    note?: string;
  };
  bullets: string[];
  description?: string;
};

export type BenefitsSection = {
  type: 'benefits';
  id: string;
  title: string;
  items: string[];
};

export type LeadFormSection = {
  type: 'leadForm';
  id: string;
  title: string;
  submitLabel: string;
  privacyText: string;
  privacyHref: string;
  fields: Array<
    | { key: 'fullName' | 'email' | 'phone'; label: string; required?: boolean; placeholder?: string }
    | { key: 'program'; label: string; required?: boolean; options: string[] }
    | { key: 'source'; label: string; required?: boolean; options: string[] }
  >;
};