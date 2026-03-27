// src/pages/ContactoPage.tsx

import { SiteShell } from "@/components/site/SiteShell/SiteShell";
import { ContactoIntroSection } from "@/components/pages/contacto";

import {
  siteHeaderContent,
  siteFooterContent,
} from "@/content/sites/siteChrome";

import type { ContactoPageContent } from "@/types/pages/contacto/contacto.types";
import type { ContactoSection } from "@/types/pages/contacto/contacto.sections";

type Props = {
  content: ContactoPageContent;
};

/**
 * ContactoPage
 *
 * Propósito:
 * - Renderizar la página de Contacto usando
 *   el layout compartido del sitio.
 *
 * Parámetros:
 * - content: Contenido completo de la página.
 *
 * Regresa:
 * - Página renderizada con layout compartido
 *   y secciones propias.
 */
export function ContactoPage({ content }: Props) {
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
function SectionRenderer({ section }: { section: ContactoSection }) {
  switch (section.type) {
    case "contactoIntro":
      return <ContactoIntroSection id={section.id} content={section.content} />;

    default:
      return null;
  }
}