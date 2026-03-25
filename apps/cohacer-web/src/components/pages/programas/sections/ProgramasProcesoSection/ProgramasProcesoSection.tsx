// src/components/pages/programas/sections/ProgramasProcesoSection/ProgramasProcesoSection.tsx

import type {
  ProgramasProcesoContent,
  ProgramasProcesoStepTone,
} from "@/types/pages/programas/sections/programasProceso.section";
import { programasProcesoSectionStyles as s } from "./ProgramasProcesoSection.styles";

type Props = {
  id: string;
  content: ProgramasProcesoContent;
};

/**
 * getStepToneClassName
 *
 * Propósito:
 * - Obtener la clase visual correspondiente
 *   al tono configurado para cada paso.
 *
 * Parámetros:
 * - tone: Tono visual configurado en el contenido.
 *
 * Regresa:
 * - Clase utilitaria asociada al color del círculo numérico.
 */
function getStepToneClassName(tone: ProgramasProcesoStepTone) {
  switch (tone) {
    case "green":
      return s.badgeGreen;

    case "orange":
      return s.badgeOrange;

    case "purple":
      return s.badgePurple;

    case "blue":
    default:
      return s.badgeBlue;
  }
}

/**
 * renderStepCard
 *
 * Propósito:
 * - Renderizar una tarjeta individual de paso
 *   dentro de la sección de proceso.
 *
 * Parámetros:
 * - step: Paso a mostrar.
 * - index: Índice usado como apoyo para key local.
 *
 * Regresa:
 * - Tarjeta visual renderizada.
 */
function renderStepCard(
  step: ProgramasProcesoContent["steps"][number],
  index: number
) {
  const toneClassName = getStepToneClassName(step.tone);

  return (
    <article
      key={`${step.number}-${index}-${step.title}`}
      className={s.card}
    >
      <div className={`${s.badge} ${toneClassName}`}>{step.number}</div>
      <h3 className={s.stepTitle}>{step.title}</h3>
      <p className={s.stepDescription}>{step.description}</p>
    </article>
  );
}

/**
 * ProgramasProcesoSection
 *
 * Propósito:
 * - Renderizar la sección de proceso de inscripción
 *   de la página Programas.
 * - Mostrar un encabezado centrado y una cuadrícula
 *   de pasos con numeración destacada.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function ProgramasProcesoSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
          <p className={s.subtitle}>{content.subtitle}</p>
        </header>

        <div className={s.grid}>
          {content.steps.map((step, index) => renderStepCard(step, index))}
        </div>
      </div>
    </section>
  );
}