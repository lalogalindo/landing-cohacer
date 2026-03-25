// src/pages/BeneficiosPage.tsx

import { SiteShell } from "@/components/site/SiteShell/SiteShell";
import { 
  BeneficiosIntroSection,
  BeneficiosResultadosSection,
  BeneficiosTransformacionSection,
  BeneficiosTestimoniosSection,
  BeneficiosCasosDetalleSection,
  BeneficiosImpactoSection,
  BeneficiosHistoriaExitoSection
 } from "@/components/pages/beneficios";

import {
  siteHeaderContent,
  siteFooterContent,
} from "@/content/sites/siteChrome";

import type { BeneficiosPageContent } from "@/types/pages/beneficios/beneficios.types";
import type { BeneficiosSection } from "@/types/pages/beneficios/beneficios.sections";

type Props = {
  content: BeneficiosPageContent;
};

/**
 * BeneficiosPage
 *
 * Propósito:
 * - Renderizar la página de Beneficios usando
 *   el layout compartido del sitio.
 *
 * Parámetros:
 * - content: Contenido completo de la página.
 *
 * Regresa:
 * - Página renderizada con layout compartido
 *   y secciones propias.
 */
export function BeneficiosPage({ content }: Props) {
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
function SectionRenderer({ section }: { section: BeneficiosSection }) {
  switch (section.type) {
    case "beneficiosIntro":
      return <BeneficiosIntroSection id={section.id} content={section.content} />;
    
    case "beneficiosResultados":
      return <BeneficiosResultadosSection id={section.id} content={section.content} />;
    
    case "beneficiosTransformacion":
      return <BeneficiosTransformacionSection id={section.id} content={section.content} />;
    
    case "beneficiosTestimonios":
      return <BeneficiosTestimoniosSection id={section.id} content={section.content} />;

    case "beneficiosCasosDetalle":
      return <BeneficiosCasosDetalleSection id={section.id} content={section.content} /> ;

    case "beneficiosImpacto":
      return <BeneficiosImpactoSection id={section.id} content={section.content} /> ;

    case "beneficiosHistoriaExito":
      return <BeneficiosHistoriaExitoSection id={section.id} content={section.content} /> ;

    default:
      return null;
  }
}