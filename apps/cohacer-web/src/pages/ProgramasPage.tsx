// src/pages/ProgramasPage.tsx

import { SiteShell } from "@/components/site/SiteShell/SiteShell";
import { 
  ProgramasIntroSection,
  ProgramasSearchSection,
  ProgramasProcesoSection,
  ProgramasCalculadoraSection,
  ProgramasCTASection,
 } from "@/components/pages/programas";

import {
  siteHeaderContent,
  siteFooterContent,
} from "@/content/sites/siteChrome";

import type { ProgramasPageContent } from "@/types/pages/programas/programas.types";
import type { ProgramasSection } from "@/types/pages/programas/programas.sections";

type Props = {
  content: ProgramasPageContent;
};

/**
 * ProgramasPage
 *
 * Propósito:
 * - Renderizar la página de Programas usando
 *   el layout compartido del sitio.
 *
 * Parámetros:
 * - content: Contenido completo de la página.
 *
 * Regresa:
 * - Página renderizada con layout compartido
 *   y secciones propias.
 */
export function ProgramasPage({ content }: Props) {
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
function SectionRenderer({ section }: { section: ProgramasSection }) {
  switch (section.type) {
    case "programasIntro":
      return <ProgramasIntroSection id={section.id} content={section.content} />;

    case "programasSearch":
      return <ProgramasSearchSection id={section.id} content={section.content} />;

    case "programasProceso":
      return <ProgramasProcesoSection id={section.id} content={section.content} />;

    case "programasCalculadora":
      return <ProgramasCalculadoraSection id={section.id} content={section.content} />;

    case "programasCTA":
      return <ProgramasCTASection id={section.id} content={section.content} />;
  
    default:
      return null;
  }
}