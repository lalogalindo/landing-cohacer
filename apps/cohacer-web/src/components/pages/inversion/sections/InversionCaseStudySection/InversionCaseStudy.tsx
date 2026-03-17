import type {
  InversionCaseStudyContent,
  InversionCaseStudyItem,
} from "@/types/pages/inversion/sections/inversionCaseStudy.section";

import { inversionCaseStudyStyles as s } from "./InversionCaseStudy.styles";

type Props = {
  id: string;
  content: InversionCaseStudyContent;
};

/**
 * renderStatRow
 *
 * Propósito:
 * - Renderizar una fila de dato clave dentro de la tarjeta
 *   del caso de éxito.
 *
 * Parámetros:
 * - label: Etiqueta descriptiva del dato.
 * - value: Valor a mostrar.
 * - isHighlight: Indica si el valor debe usar color destacado.
 *
 * Regresa:
 * - Fila renderizada con alineación entre etiqueta y valor.
 */
function renderStatRow(
  label: string,
  value: string,
  isHighlight?: boolean
) {
  return (
    <div className={s.statRow}>
      <span className={s.statLabel}>{label}</span>
      <span className={isHighlight ? s.statValueHighlight : s.statValue}>
        {value}
      </span>
    </div>
  );
}

/**
 * renderCaseCard
 *
 * Propósito:
 * - Renderizar una tarjeta individual de caso de éxito
 *   con avatar, métricas de retorno y testimonio.
 *
 * Parámetros:
 * - item: Caso de éxito a renderizar.
 *
 * Regresa:
 * - Tarjeta visual del caso.
 */
function renderCaseCard(item: InversionCaseStudyItem) {
  return (
    <article key={`${item.name}-${item.role}`} className={s.card}>
      <div className={s.cardAccent} />

      <div className={s.personRow}>
        <div
          className={s.avatar}
          style={{ backgroundColor: item.avatarColor }}
          aria-hidden="true"
        >
          {item.initials}
        </div>

        <div className={s.personInfo}>
          <h3 className={s.personName}>{item.name}</h3>
          <p className={s.personRole}>{item.role}</p>
        </div>
      </div>

      <div className={s.stats}>
        {renderStatRow("Inversión:", item.investment)}
        {renderStatRow("Salario anterior:", item.previousSalary)}
        {renderStatRow("Salario actual:", item.currentSalary, true)}
        {renderStatRow(item.roiLabel, item.roi, true)}
      </div>

      <p className={s.quote}>&quot;{item.testimonial}&quot;</p>
    </article>
  );
}

/**
 * InversionCaseStudy
 *
 * Propósito:
 * - Renderizar la sección de casos de éxito de la página
 *   de Inversión.
 * - Mostrar testimonios reales con indicadores de inversión,
 *   crecimiento salarial y ROI.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada con layout responsive.
 */
export function InversionCaseStudy({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
        </header>

        <div className={s.grid}>
          {content.items.map((item) => renderCaseCard(item))}
        </div>
      </div>
    </section>
  );
}