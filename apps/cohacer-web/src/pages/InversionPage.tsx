// src/pages/InversionPage.tsx

import { SiteShell } from "@/components/site/SiteShell/SiteShell";
import { 
  InversionIntroSection,
  InversionComparisonSection ,
  InversionROISection,
  InversionPricingSection,
  InversionFinancingSection,
  InversionCaseStudy,
  InversionGarantiaSection,
  InversionCTASection
} from "@/components/pages/inversion";

import {
  siteHeaderContent,
  siteFooterContent,
} from "@/content/sites/siteChrome";

import type { InversionPageContent } from "@/types/pages/inversion/inversion.types";
import type { InversionSection } from "@/types/pages/inversion/inversion.sections";

type Props = {
  content: InversionPageContent;
};

/**
 * InversionPage
 *
 * Propósito:
 * - Renderizar la página de Inversión usando
 *   el layout compartido del sitio.
 *
 * Parámetros:
 * - content: Contenido completo de la página.
 *
 * Regresa:
 * - Página renderizada con layout compartido
 *   y secciones propias.
 */
export function InversionPage({ content }: Props) {
  return (
    <SiteShell header={siteHeaderContent} footer={siteFooterContent}>
      {content.sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </SiteShell>
  );
}

/**
 * SectionRenderer
 *
 * Propósito:
 * - Renderizar una sección de la página
 *   a partir de su discriminante `type`.
 *
 * Parámetros:
 * - section: Sección a renderizar.
 *
 * Regresa:
 * - JSX de la sección correspondiente.
 */
function SectionRenderer({ section }: { section: InversionSection }) {
  switch (section.type) {
    case "inversionIntro":
      return <InversionIntroSection id={section.id} content={section.content} />;

    case "inversionComparison":
      return <InversionComparisonSection id={section.id} content={section.content} />;

    case "inversionROI":
      return <InversionROISection id={section.id} content={section.content} />;

    case "inversionPricing":
      return <InversionPricingSection id={section.id} content={section.content} />;
    
    case "inversionFinancing":
      return <InversionFinancingSection id={section.id} content={section.content} />;

    case "inversionCaseStudy":
      return <InversionCaseStudy id={section.id} content={section.content} />;

    case "inversionGarantia":
      return (
        <InversionGarantiaSection id={section.id} content={section.content} />
      );

    case "inversionCTA":
      return <InversionCTASection id={section.id} content={section.content} />;

    default:
      return null;
  }
}