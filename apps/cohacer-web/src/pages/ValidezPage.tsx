import * as React from "react";

import { SiteShell } from "@/components/site/SiteShell/SiteShell";
import {
  SepValiditySection,
  Acuerdo286Section,
  CedulaProcessSection,
  MythsRealitySection,
  VerificationTransparencySection,
  DirectContactSection,
} from "@/components/pages/validez";

import { siteHeaderContent, siteFooterContent } from "@/content/sites/siteChrome";

import type { ValidezPageContent } from "@/types/pages/validez/validez.types";
import type { ValidezSection } from "@/types/pages/validez/validez.sections";

type Props = {
  content: ValidezPageContent;
};

/**
 * ValidezPage
 *
 * Propósito:
 * - Renderizar la página de Validez usando el layout compartido del sitio.
 *
 * Parámetros:
 * - content: Contenido completo de la página.
 *
 * Regresa:
 * - Página renderizada con layout compartido y secciones propias.
 */
export function ValidezPage({ content }: Props) {
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
function SectionRenderer({ section }: { section: ValidezSection }) {
  switch (section.type) {
    case "sepValidity":
      return <SepValiditySection id={section.id} content={section.content} />;

    case "acuerdo286":
      return <Acuerdo286Section id={section.id} content={section.content} />;

    case "cedulaProcess":
      return <CedulaProcessSection id={section.id} content={section.content} />;
    
    case "mythsReality":
      return <MythsRealitySection id={section.id} content={section.content} />;

    case "verificationTransparency":
      return <VerificationTransparencySection id={section.id} content={section.content} />;
    
    case "directContactCta":
      return <DirectContactSection id={section.id} content={section.content} />;

    default:
      return null;
  }
}