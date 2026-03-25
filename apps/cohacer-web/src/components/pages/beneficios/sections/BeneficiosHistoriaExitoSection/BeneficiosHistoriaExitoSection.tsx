// src/components/pages/beneficios/sections/BeneficiosHistoriaExitoSection/BeneficiosHistoriaExitoSection.tsx

import type {
  BeneficiosHistoriaExitoAction,
  BeneficiosHistoriaExitoContent,
} from "@/types/pages/beneficios/sections/beneficiosHistoriaExito.section";
import { beneficiosHistoriaExitoSectionStyles as s } from "./BeneficiosHistoriaExitoSection.styles";

type Props = {
  id: string;
  content: BeneficiosHistoriaExitoContent;
};

/**
 * renderActionLink
 *
 * Propósito:
 * - Renderizar una acción navegable dentro
 *   del bloque principal de conversión.
 *
 * Parámetros:
 * - action: Configuración de la acción a mostrar.
 * - className: Clase visual que define su estilo.
 *
 * Regresa:
 * - Enlace renderizado con apariencia de botón.
 */
function renderActionLink(
  action: BeneficiosHistoriaExitoAction,
  className: string
) {
  return (
    <a href={action.href} className={className}>
      {action.label}
    </a>
  );
}

/**
 * renderTrustPoint
 *
 * Propósito:
 * - Renderizar un punto de confianza debajo
 *   del mensaje de garantía.
 *
 * Parámetros:
 * - point: Texto del beneficio de confianza.
 * - index: Índice local para la key del listado.
 *
 * Regresa:
 * - Elemento de lista renderizado.
 */
function renderTrustPoint(point: string, index: number) {
  return (
    <li key={`${point}-${index}`} className={s.trustPoint}>
      <span className={s.trustPointIcon} aria-hidden="true">
        ✓
      </span>

      <span className={s.trustPointText}>{point}</span>
    </li>
  );
}

/**
 * BeneficiosHistoriaExitoSection
 *
 * Propósito:
 * - Renderizar la sección de cierre orientada
 *   a conversión dentro de la página Beneficios.
 * - Mostrar un título principal, una card con
 *   siguiente paso, dos CTAs y un bloque de confianza.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function BeneficiosHistoriaExitoSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
          <p className={s.description}>{content.description}</p>
        </header>

        <article className={s.card}>
          <div className={s.cardHeader}>
            <span className={s.cardIcon} aria-hidden="true">
              🎯
            </span>

            <h3 className={s.cardTitle}>{content.cardTitle}</h3>
          </div>

          <p className={s.cardDescription}>{content.cardDescription}</p>

          <div className={s.actions}>
            {renderActionLink(content.primaryAction, s.primaryAction)}
            {renderActionLink(content.secondaryAction, s.secondaryAction)}
          </div>
        </article>

        <div className={s.guarantee}>
          <p className={s.guaranteeText}>
            <span className={s.guaranteeLabel}>{content.guaranteeTitle}</span>{" "}
            {content.guaranteeDescription}
          </p>

          <ul className={s.trustList}>
            {content.trustPoints.map((point, index) =>
              renderTrustPoint(point, index)
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}