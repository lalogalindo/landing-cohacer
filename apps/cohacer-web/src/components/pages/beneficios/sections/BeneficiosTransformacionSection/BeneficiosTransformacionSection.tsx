// src/components/pages/beneficios/sections/BeneficiosTransformacionSection/BeneficiosTransformacionSection.tsx

import type {
  BeneficiosTransformacionBlock,
  BeneficiosTransformacionContent,
} from "@/types/pages/beneficios/sections/beneficiosTransformacion.section";
import { beneficiosTransformacionSectionStyles as s } from "./BeneficiosTransformacionSection.styles";

type Props = {
  id: string;
  content: BeneficiosTransformacionContent;
};

/**
 * getCardClassName
 *
 * Propósito:
 * - Obtener la clase visual correspondiente
 *   al bloque comparativo según su variante.
 *
 * Parámetros:
 * - variant: Variante visual del bloque.
 *
 * Regresa:
 * - Clase utilitaria compuesta para la tarjeta.
 */
function getCardClassName(variant: "before" | "after") {
  return variant === "before"
    ? `${s.card} ${s.cardBefore}`
    : `${s.card} ${s.cardAfter}`;
}

/**
 * getCardTitleClassName
 *
 * Propósito:
 * - Obtener la clase visual del título
 *   según la variante del bloque.
 *
 * Parámetros:
 * - variant: Variante visual del bloque.
 *
 * Regresa:
 * - Clase utilitaria del encabezado.
 */
function getCardTitleClassName(variant: "before" | "after") {
  return variant === "before" ? s.cardTitleBefore : s.cardTitleAfter;
}

/**
 * getItemIconClassName
 *
 * Propósito:
 * - Obtener la clase visual del ícono de lista
 *   según la variante del bloque.
 *
 * Parámetros:
 * - variant: Variante visual del bloque.
 *
 * Regresa:
 * - Clase utilitaria del ícono.
 */
function getItemIconClassName(variant: "before" | "after") {
  return variant === "before" ? s.itemIconBefore : s.itemIconAfter;
}

/**
 * getItemSymbol
 *
 * Propósito:
 * - Resolver el símbolo textual que representa
 *   el estado de cada elemento de lista.
 *
 * Parámetros:
 * - variant: Variante visual del bloque.
 *
 * Regresa:
 * - Símbolo para listas negativas o positivas.
 */
function getItemSymbol(variant: "before" | "after") {
  return variant === "before" ? "✕" : "✓";
}

/**
 * renderComparisonCard
 *
 * Propósito:
 * - Renderizar una tarjeta comparativa con su título
 *   y listado de beneficios o fricciones.
 *
 * Parámetros:
 * - block: Contenido del bloque.
 * - variant: Variante visual del bloque.
 *
 * Regresa:
 * - Tarjeta renderizada.
 */
function renderComparisonCard(
  block: BeneficiosTransformacionBlock,
  variant: "before" | "after"
) {
  const cardClassName = getCardClassName(variant);
  const titleClassName = getCardTitleClassName(variant);
  const itemIconClassName = getItemIconClassName(variant);
  const itemSymbol = getItemSymbol(variant);

  return (
    <article className={cardClassName}>
      <h3 className={titleClassName}>
        <span>{block.emoji}</span>
        <span>{block.title}</span>
      </h3>

      <ul className={s.list}>
        {block.items.map((item, index) => (
          <li key={`${variant}-${index}`} className={s.listItem}>
            <span className={`${s.itemIconBase} ${itemIconClassName}`}>
              {itemSymbol}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

/**
 * BeneficiosTransformacionSection
 *
 * Propósito:
 * - Renderizar la sección comparativa entre el antes
 *   y el después de titularse por experiencia.
 * - Mostrar ambas tarjetas en una sola columna en mobile
 *   y lado a lado en pantallas más amplias.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function BeneficiosTransformacionSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <h2 className={s.title}>{content.title}</h2>

        <div className={s.panel}>
          <div className={s.grid}>
            {renderComparisonCard(content.before, "before")}
            {renderComparisonCard(content.after, "after")}
          </div>
        </div>
      </div>
    </section>
  );
}