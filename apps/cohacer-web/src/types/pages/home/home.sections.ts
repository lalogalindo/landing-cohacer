// src/types/pages/home/home.sections.ts
import type { HeroSection } from "@/types/sections/hero.section";
import type { ProgramsSection } from "@/types/sections/programs.section";
import type { CompaniesSection } from "@/types/sections/companies.section";
import type { TeamSection } from "@/types/sections/team.section";
import type { TestimonialsSection } from "@/types/testimonials";

import type { EligibilitySection } from "@/types/pages/home/sections/eligibility.section";
import type { BenefitsGridSection } from "@/types/pages/home/sections/benefitsGrid.section";
import type { ProcessStepsSection } from "@/types/pages/home/sections/processSteps.section";
import type { TestimonialsGridSection } from "@/types/pages/home/sections/testimonialsGrid.section";
import type { InvestmentLeadFormSection } from "@/types/pages/home/sections/investmentLeadForm.section";

/**
 * HomeSection
 *
 * Propósito:
 * - Unión discriminada exclusiva del Home.
 *
 * Información adicional:
 * - Esto evita que `types.ts` se llene con secciones de otras páginas.
 */
export type HomeSection =
  | HeroSection
  | ProgramsSection
  | CompaniesSection
  | TestimonialsSection
  | TeamSection
  | EligibilitySection
  | BenefitsGridSection
  | ProcessStepsSection
  | TestimonialsGridSection
  | InvestmentLeadFormSection;