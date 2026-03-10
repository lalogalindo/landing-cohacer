import type { ProcessStepsContent } from "@/types/pages/home/sections/processSteps.section";
import { processStepsStyles as s } from "./ProcessStepsSection.styles";

type Props = {
  id: string;
  content: ProcessStepsContent;
};

/**
 * Devuelve las clases visuales asociadas a un paso del proceso.
 *
 * Propósito:
 * - Asignar el color del círculo numérico y del label inferior
 *   según la posición del paso.
 *
 * Parámetros:
 * - index: Índice del paso dentro del arreglo.
 *
 * Regresa:
 * - Objeto con clases para número y texto de acento.
 *
 * Información adicional:
 * - Paso 1 usa azul.
 * - Paso 2 usa verde.
 * - Paso 3 usa morado.
 * - Si hubiera más pasos, reutiliza morado como fallback.
 */
function getStepTone(index: number) {
  if (index === 0) {
    return {
      number: s.numBlue,
      accent: s.accentBlue,
    };
  }

  if (index === 1) {
    return {
      number: s.numGreen,
      accent: s.accentGreen,
    };
  }

  return {
    number: s.numPurple,
    accent: s.accentPurple,
  };
}

/**
 * ProcessStepsSection
 *
 * Propósito:
 * - Renderizar el proceso como tarjetas centradas con número,
 *   título, descripción y acento visual inferior.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado proveniente del JSON.
 */
export function ProcessStepsSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
          {content.subtitle ? <p className={s.subtitle}>{content.subtitle}</p> : null}
        </header>

        <div className={s.grid}>
          {content.steps.map((st, idx) => {
            const tone = getStepTone(idx);

            return (
              <article key={st.title} className={s.card}>
                <div className={`${s.num} ${tone.number}`}>{idx + 1}</div>

                <h3 className={s.cardTitle}>{st.title}</h3>

                {st.description ? <p className={s.desc}>{st.description}</p> : null}

                <p className={`${s.accent} ${tone.accent}`}>
                  {idx === 0
                    ? "GRATIS"
                    : idx === 1
                      ? "ACOMPAÑAMIENTO EXPERTO"
                      : "TÍTULO OFICIAL SEP"}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}