// src/components/pages/validez/CedulaProcessSection/CedulaProcessSection.tsx
import * as React from "react";
import type {
  CedulaProcessContent,
  CedulaProcessStep,
} from "@/types/pages/validez/sections/cedulaProcess.section";
import { cedulaProcessSectionStyles as s } from "./CedulaProcessSection.styles";

type Props = {
  id: string;
  content: CedulaProcessContent;
};

/**
 * getStepToneClasses
 *
 * Propósito:
 * - Resolver las clases visuales del punto y del texto auxiliar
 *   según el tono configurado en cada paso.
 *
 * Parámetros:
 * - tone: Tono visual del paso.
 *
 * Regresa:
 * - Objeto con clases para dot y meta.
 */
function getStepToneClasses(tone?: CedulaProcessStep["tone"]) {
  switch (tone) {
    case "green":
      return {
        dot: s.dotGreen,
        meta: s.metaGreen,
      };

    case "purple":
      return {
        dot: s.dotPurple,
        meta: s.metaPurple,
      };

    case "yellow":
      return {
        dot: s.dotYellow,
        meta: s.metaYellow,
      };

    case "blue":
    default:
      return {
        dot: s.dotBlue,
        meta: s.metaBlue,
      };
  }
}

/**
 * renderTimelineStep
 *
 * Propósito:
 * - Renderizar un paso individual dentro del timeline vertical.
 *
 * Parámetros:
 * - step: Información del paso.
 * - index: Posición del paso dentro de la lista.
 * - total: Cantidad total de pasos.
 *
 * Regresa:
 * - Nodo React del paso renderizado.
 */
function renderTimelineStep(
  step: CedulaProcessStep,
  index: number,
  total: number,
) {
  const toneClasses = getStepToneClasses(step.tone);
  const isLast = index === total - 1;

  return (
    <div key={step.title} className={s.stepRow}>
      <div className={s.railColumn} aria-hidden="true">
        <span className={s.railLineTop} />
        <span className={`${s.dot} ${toneClasses.dot}`} />
        <span className={isLast ? s.railLineBottomHidden : s.railLineBottom} />
      </div>

      <article className={s.card}>
        <h3 className={s.cardTitle}>
          {index + 1}. {step.title}
        </h3>

        {step.description ? (
          <p className={s.cardDescription}>{step.description}</p>
        ) : null}

        {step.meta ? (
          <p className={`${s.cardMeta} ${toneClasses.meta}`}>{step.meta}</p>
        ) : null}
      </article>
    </div>
  );
}

/**
 * CedulaProcessSection
 *
 * Propósito:
 * - Renderizar la sección del proceso de obtención de cédula profesional.
 * - Mostrar un timeline vertical con tarjetas por cada etapa.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function CedulaProcessSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
          {content.description ? (
            <p className={s.description}>{content.description}</p>
          ) : null}
        </header>

        {content.steps.length > 0 ? (
          <div className={s.timeline}>
            {content.steps.map((step, index) =>
              renderTimelineStep(step, index, content.steps.length),
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}