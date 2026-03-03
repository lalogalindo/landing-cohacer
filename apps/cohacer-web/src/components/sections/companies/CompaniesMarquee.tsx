import * as React from "react";
import { Section } from "@cohacer/ui";
import { marqueeStyles } from "./CompaniesMarquee.styles";
import type { CompaniesContent, Company } from "@/types/companies";

/**
 * Divide un arreglo en filas con un máximo definido.
 *
 * Propósito:
 * - Construir filas para múltiples marquees.
 *
 * Parámetros:
 * - items: Arreglo original.
 * - perRow: Máximo por fila.
 *
 * Regresa:
 * - Arreglo de filas.
 */
function chunkBy<T>(items: T[], perRow: number): T[][] {
  const safe = Math.max(1, perRow);
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += safe) {
    rows.push(items.slice(i, i + safe));
  }
  return rows;
}

/**
 * Duplica una fila para crear loop continuo en marquee.
 *
 * Propósito:
 * - Generar una pista “infinita” (row + row) para animar de 0% a -50%.
 *
 * Parámetros:
 * - row: Fila original.
 *
 * Regresa:
 * - Fila duplicada.
 */
function duplicateRow<T>(row: T[]): T[] {
  return row.concat(row);
}

type Props = {
  id?: string;
  content: CompaniesContent;
};

/**
 * CompaniesMarquee
 *
 * Propósito:
 * - Mostrar logos en múltiples filas con marquee suave.
 * - Máximo 6 empresas por fila (configurable).
 * - Máximo 4 visibles en viewport (configurable).
 * - Filas impares van en una dirección y pares en la contraria.
 * - Fade suave a los lados.
 *
 * Parámetros:
 * - id: Id de la sección (para anclas).
 * - content: Contenido tipado de la sección.
 */
export function CompaniesMarquee({ id, content }: Props) {
  const {
    sectionTitle,
    sectionSubtitle,
    companies,
    maxPerRow = 6,
    visibleCount = 4,
  } = content;

  const rows = React.useMemo(() => chunkBy(companies, maxPerRow), [companies, maxPerRow]);

  return (
    <Section id={id}>
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
          {sectionTitle}
        </h2>

        {sectionSubtitle ? (
          <p className="mt-4 text-muted-foreground">{sectionSubtitle}</p>
        ) : null}

        <div className="mt-10 space-y-6">
          {rows.map((row, rowIndex) => (
            <MarqueeRow
              key={`companies-row-${rowIndex}`}
              rowIndex={rowIndex}
              row={row}
              visibleCount={visibleCount}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

type MarqueeRowProps = {
  rowIndex: number;
  row: Company[];
  visibleCount: number;
};

/**
 * MarqueeRow
 *
 * Propósito:
 * - Renderizar una fila individual como marquee.
 * - Alternar dirección por fila (impar/pares).
 * - Restringir el viewport para que se vean máximo N logos a la vez.
 * - Aplicar fade lateral.
 *
 * Parámetros:
 * - rowIndex: Índice de fila para alternar dirección.
 * - row: Empresas de la fila (sin duplicar).
 * - visibleCount: Máximo de logos visibles.
 */
function MarqueeRow({ rowIndex, row, visibleCount }: MarqueeRowProps) {
  const isEvenHumanRow = rowIndex % 2 === 1; // fila 2,4,6...
  const directionClass = isEvenHumanRow ? "animate-marquee-right" : "animate-marquee-left";

  const track = duplicateRow(row);

  // Viewport acotado para que el marquee tenga sentido (máx 4 visibles).
  // Nota: en mobile puede que se vean menos por espacio; en desktop no verá más que esto.
  const viewportClass =
    visibleCount === 4
      ? "max-w-2xl"
      : visibleCount === 3
      ? "max-w-xl"
      : visibleCount === 2
      ? "max-w-lg"
      : "max-w-2xl";

  return (
    <div className={`relative mx-auto ${viewportClass} overflow-hidden rounded-xl marquee-viewport`}>
      {/* Blur lateral izquierdo */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 marquee-blur marquee-blur-left" />
      {/* Blur lateral derecho */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 marquee-blur marquee-blur-right" />

      <div className="py-2">
        <div className={`flex w-max items-center gap-6 ${directionClass}`}>
          {track.map((company, i) => (
            <a
              key={`${company.url}-${company.name}-${rowIndex}-${i}`}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                items-center
                justify-center
                rounded-lg
                px-4
                py-3
                transition
                hover:bg-muted/40
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-ring
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
              "
              aria-label={company.name}
            >
              <img
                src={company.src}
                alt={company.name}
                loading="lazy"
                className="
                  h-9
                  w-auto
                  opacity-70
                  grayscale
                  transition
                  duration-300
                  group-hover:opacity-100
                  group-hover:grayscale-0
                "
              />
            </a>
          ))}
        </div>
      </div>

      <style>{marqueeStyles}</style>
    </div>
  );
}