import * as React from "react";
import { Section } from "@cohacer/ui";
import { TestimonialCard } from "./TestimonialCard";

type Item = {
  id: string;
  name: string;
  program: string;
  quote: string;
  image: { src: string; alt: string };
};

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  items: Item[];

  autoplay?: boolean;
  autoplayMs?: number;
};

const ITEMS_PER_PAGE = 3;

/**
 * Une clases de Tailwind de manera segura.
 *
 * Propósito:
 * - Componer `className` sin dependencias externas.
 *
 * Parámetros:
 * - classes: Lista de valores (string/undefined/null/false) a combinar.
 *
 * Regresa:
 * - String con clases combinadas.
 */
function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Divide un arreglo en páginas de tamaño fijo.
 *
 * Propósito:
 * - Convertir `items` en un arreglo de páginas (cada una con hasta N elementos).
 *
 * Parámetros:
 * - items: Arreglo original.
 * - perPage: Tamaño máximo por página.
 *
 * Regresa:
 * - Arreglo de páginas (arreglos).
 */
function chunkIntoPages<T>(items: T[], perPage: number): T[][] {
  if (perPage <= 0) return [items];
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += perPage) {
    pages.push(items.slice(i, i + perPage));
  }
  return pages;
}

/**
 * Normaliza un índice dentro de un rango circular (0..len-1).
 *
 * Propósito:
 * - Soportar navegación cíclica en prev/next.
 *
 * Parámetros:
 * - index: Índice candidato.
 * - length: Longitud total del rango.
 *
 * Regresa:
 * - Índice normalizado dentro del rango.
 */
function wrapIndex(index: number, length: number) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

/**
 * Carrusel de testimonios paginado (dots = páginas).
 *
 * Propósito:
 * - Agrupar testimonios en páginas de 3 elementos.
 * - Dots representan páginas (no items).
 * - Desktop: grid de 3 por página.
 * - Mobile: scroll horizontal de los items de la página (snap).
 * - Autoplay por página (configurable).
 * - Flechas redondas laterales sin encimarse.
 *
 * Información adicional:
 * - No depende de librerías externas.
 * - Evita overlays: flechas viven fuera del “viewport” del contenido.
 */
export function TestimonialsCarousel({
  id,
  title,
  subtitle,
  items,
  autoplay = true,
  autoplayMs = 4500,
}: Props) {
  const pages = React.useMemo(
    () => chunkIntoPages(items, ITEMS_PER_PAGE),
    [items]
  );

  const totalPages = pages.length;
  const [page, setPage] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  /**
   * Cambia a una página específica.
   *
   * Propósito:
   * - Navegación directa desde dots.
   *
   * Parámetros:
   * - index: Página destino.
   */
  function goToPage(index: number) {
    setPage(wrapIndex(index, totalPages));
  }

  /**
   * Navega a la página anterior.
   *
   * Propósito:
   * - Control desde flecha izquierda.
   */
  function prevPage() {
    setPage((p) => wrapIndex(p - 1, totalPages));
  }

  /**
   * Navega a la página siguiente.
   *
   * Propósito:
   * - Control desde flecha derecha.
   */
  function nextPage() {
    setPage((p) => wrapIndex(p + 1, totalPages));
  }

  /**
   * Pausa el autoplay por interacción del usuario.
   *
   * Propósito:
   * - Evitar que el autoplay compita con la interacción.
   */
  function pause() {
    setIsPaused(true);
  }

  /**
   * Reanuda el autoplay.
   *
   * Propósito:
   * - Permitir que el carrusel siga avanzando tras interacción.
   */
  function resume() {
    setIsPaused(false);
  }

  React.useEffect(() => {
    if (!autoplay) return;
    if (isPaused) return;
    if (totalPages <= 1) return;

    const ms = Math.max(1000, autoplayMs);
    const t = window.setInterval(() => {
      setPage((p) => wrapIndex(p + 1, totalPages));
    }, ms);

    return () => window.clearInterval(t);
  }, [autoplay, autoplayMs, isPaused, totalPages]);

  return (
    <Section id={id} className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                {subtitle}
              </p>
            ) : null}
          </div>

          {/* Dots (desktop a la derecha) = PÁGINAS */}
          <div className="hidden md:flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToPage(i)}
                aria-label={`Ir a la página ${i + 1} de testimonios`}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition",
                  i === page ? "bg-foreground" : "bg-border hover:bg-foreground/40"
                )}
              />
            ))}
          </div>
        </div>

        <div
          className="mt-8"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
        >
          {/* Layout con flechas fuera del viewport para que NO se encimen */}
          <div className="flex items-center gap-4">
            {/* Flecha izquierda (círculo, centro vertical) */}
            <button
              type="button"
              onClick={prevPage}
              aria-label="Página anterior"
              className={cn(
                "hidden md:flex",
                "h-12 w-12 shrink-0 items-center justify-center",
                "rounded-full border border-border bg-background/90 backdrop-blur",
                "shadow-sm",
                "hover:bg-background",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              )}
            >
              <span className="text-lg leading-none">‹</span>
            </button>

            {/* Viewport */}
            <div className="flex-1 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {pages.map((pageItems, pageIndex) => {
                  const isSingle = pageItems.length === 1;

                  return (
                    <div
                      key={pageIndex}
                      className="w-full shrink-0"
                      aria-label={`Página ${pageIndex + 1} de testimonios`}
                    >
                      {/* Desktop: grid 3 */}
                      <div
                        className={cn(
                          "hidden md:grid md:gap-4",
                          isSingle
                            ? "md:grid-cols-1 md:justify-items-center"
                            : "md:grid-cols-3"
                        )}
                      >
                        {pageItems.map((t) => (
                          <div
                            key={t.id}
                            className={cn(isSingle ? "md:w-[min(520px,100%)]" : "")}
                          >
                            <TestimonialCard
                              name={t.name}
                              program={t.program}
                              quote={t.quote}
                              image={t.image}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Mobile: scroll horizontal de los items de esta PÁGINA */}
                      <div
                        className={cn(
                          "md:hidden",
                          "flex gap-4 overflow-x-auto pb-2",
                          "snap-x snap-mandatory scroll-px-4",
                          "[scrollbar-width:none] [-ms-overflow-style:none]",
                          "[-webkit-overflow-scrolling:touch]"
                        )}
                        style={{ WebkitOverflowScrolling: "touch" }}
                      >
                        <style>{`
                          /* Ocultar scrollbar en WebKit */
                          div::-webkit-scrollbar { display: none; }
                        `}</style>

                        {pageItems.map((t) => (
                          <div
                            key={t.id}
                            className={cn(
                              "snap-start",
                              isSingle ? "min-w-full" : "min-w-[85%]"
                            )}
                          >
                            <TestimonialCard
                              name={t.name}
                              program={t.program}
                              quote={t.quote}
                              image={t.image}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Flecha derecha (círculo, centro vertical) */}
            <button
              type="button"
              onClick={nextPage}
              aria-label="Página siguiente"
              className={cn(
                "hidden md:flex",
                "h-12 w-12 shrink-0 items-center justify-center",
                "rounded-full border border-border bg-background/90 backdrop-blur",
                "shadow-sm",
                "hover:bg-background",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              )}
            >
              <span className="text-lg leading-none">›</span>
            </button>
          </div>

          {/* Dots (mobile abajo) = PÁGINAS */}
          <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToPage(i)}
                aria-label={`Ir a la página ${i + 1} de testimonios`}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition",
                  i === page ? "bg-foreground" : "bg-border hover:bg-foreground/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}