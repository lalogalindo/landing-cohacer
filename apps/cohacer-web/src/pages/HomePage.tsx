
import type { HomePageContent } from "@/types/pages/home/home.types";
import type { HomeSection } from "@/types/pages/home/home.sections";

import { HeroSection } from "@cohacer/ui";

import {
  EligibilitySection,
  BenefitsGridSection,
  ProcessStepsSection,
  TestimonialsGridSection,
  InvestmentLeadFormSection,
} from "@/components";

import { SiteShell } from "@/components/site/SiteShell/SiteShell";

import {
  siteHeaderContent,
  siteFooterContent,
} from "@/content/sites/siteChrome";

type Props = {
  content: HomePageContent;
};

/**
 * HomePage
 *
 * Propósito:
 * - Renderizar página Home usando layout compartido.
 */
export function HomePage({ content }: Props) {
  return (
    <SiteShell header={siteHeaderContent} footer={siteFooterContent}>
      {content.sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </SiteShell>
  );
}

function SectionRenderer({ section }: { section: HomeSection }) {
  switch (section.type) {
    case "hero":
      return (
        <div className="flex flex-wrap gap-3">
          <HeroSection {...section} />
        </div>
      );

    case "eligibility":
      return <EligibilitySection id={section.id} content={section.content} />;

    case "benefitsGrid":
      return <BenefitsGridSection id={section.id} content={section.content} />;

    case "processSteps":
      return <ProcessStepsSection id={section.id} content={section.content} />;

    case "testimonialsGrid":
      return <TestimonialsGridSection id={section.id} content={section.content} />;

    case "investmentLeadForm":
      return <InvestmentLeadFormSection id={section.id} content={section.content} />;

    default:
      return null;
  }
}