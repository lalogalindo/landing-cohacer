import * as React from "react";
import type {
  DirectContactAction,
  DirectContactContent,
} from "@/types/pages/validez/sections/directContact.section";
import { directContactSectionStyles as s } from "./DirectContactSection.styles";

type Props = {
  id: string;
  content: DirectContactContent;
};

/**
 * renderActionLink
 *
 * Propósito:
 * - Renderizar una acción de la sección CTA
 *   como enlace visual tipo botón.
 *
 * Parámetros:
 * - action: Configuración de la acción a renderizar.
 * - tone: Variante visual del botón.
 *
 * Regresa:
 * - Enlace renderizado.
 */
function renderActionLink(
  action: DirectContactAction,
  tone: "primary" | "secondary",
) {
  return (
    <a
      key={`${tone}-${action.label}`}
      href={action.href}
      className={tone === "primary" ? s.primaryButton : s.secondaryButton}
    >
      {action.label}
    </a>
  );
}

/**
 * DirectContactSection
 *
 * Propósito:
 * - Renderizar un bloque CTA de contacto directo.
 * - Mostrar título, descripción y acciones principales
 *   para evaluación o contacto con especialista.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function DirectContactSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <h2 className={s.title}>{content.title}</h2>

        {content.description ? (
          <p className={s.description}>{content.description}</p>
        ) : null}

        <div className={s.actions}>
          {renderActionLink(content.primaryAction, "primary")}
          {content.secondaryAction
            ? renderActionLink(content.secondaryAction, "secondary")
            : null}
        </div>
      </div>
    </section>
  );
}