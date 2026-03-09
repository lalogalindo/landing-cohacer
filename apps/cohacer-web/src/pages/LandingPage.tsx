// src/pages/LandingPage.tsx
import * as React from "react";

import { Header as SiteHeader } from "@/components/site/header/Header";
import { Footer as SiteFooter } from "@/components/site/footer/Footer";

import type { LandingPageContent, LandingSection } from "@/types/types";

import { HeroSection } from "@cohacer/ui";
import {
  // Home-only sections
  EligibilitySection,
  BenefitsGridSection,
  ProcessStepsSection,
  TestimonialsGridSection,
  InvestmentLeadFormSection
} from "@/components";

type Props = {
  content: LandingPageContent;
};

export function LandingPage({ content }: Props) {
  return (
    <>
      <HeaderBlock content={content} />
      <main>
        {content.sections.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
      </main>

      <FooterBlock content={content} />
    </>
  );
}

/**
 * HeaderBlock
 *
 * Propósito:
 * - Adaptar `LandingPageContent` al componente `SiteHeader`.
 *
 * Parámetros:
 * - content: Contenido completo de la página.
 */
function HeaderBlock({ content }: { content: LandingPageContent }) {
  return <SiteHeader brand={content.header.brand} nav={content.header.nav} cta={content.header.cta} />;
}

/**
 * FooterBlock
 *
 * Propósito:
 * - Adaptar `LandingPageContent` al componente `SiteFooter`.
 *
 * Parámetros:
 * - content: Contenido completo de la página.
 */
function FooterBlock({ content }: { content: LandingPageContent }) {
  return (
    <SiteFooter
      brand={content.footer.brand}
      infoLinks={content.footer.infoLinks}
      contact={content.footer.contact}
      socialLinks={content.footer.socialLinks}
      copyright={content.footer.copyright}
    />
  );
}

/**
 * SectionRenderer
 *
 * Propósito:
 * - Renderizar una sección de la página basado en `section.type`.
 *
 * Parámetros:
 * - section: Sección a renderizar.
 *
 * Regresa:
 * - JSX.Element | null.
 */
function SectionRenderer({ section }: { section: LandingSection }) {
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