// src/components/pages/beneficios/sections/BeneficiosTestimoniosSection/BeneficiosTestimoniosSection.tsx

import { useState } from "react";
import type {
  BeneficiosTestimonioItem,
  BeneficiosTestimoniosAvatarTone,
  BeneficiosTestimoniosContent,
} from "@/types/pages/beneficios/sections/beneficiosTestimonios.section";
import { beneficiosTestimoniosSectionStyles as s } from "./BeneficiosTestimoniosSection.styles";

type Props = {
  id: string;
  content: BeneficiosTestimoniosContent;
};

const ALL_CATEGORY_ID = "todas";
const DEFAULT_VISIBLE_TESTIMONIALS = 6;

/**
 * getAvatarToneClassName
 *
 * Propósito:
 * - Obtener la clase visual correspondiente
 *   al tono configurado para el avatar.
 *
 * Parámetros:
 * - tone: Tono visual configurado en el contenido.
 *
 * Regresa:
 * - Clase utilitaria asociada al fondo del avatar.
 */
function getAvatarToneClassName(tone: BeneficiosTestimoniosAvatarTone) {
  switch (tone) {
    case "purple":
      return s.avatarPurple;

    case "green":
      return s.avatarGreen;

    case "orange":
      return s.avatarOrange;

    case "indigo":
      return s.avatarIndigo;

    case "red":
      return s.avatarRed;

    case "teal":
      return s.avatarTeal;

    case "sky":
      return s.avatarSky;

    case "pink":
      return s.avatarPink;

    case "emerald":
      return s.avatarEmerald;

    case "violet":
      return s.avatarViolet;

    case "cyan":
      return s.avatarCyan;

    case "blue":
    default:
      return s.avatarBlue;
  }
}

/**
 * getIncreaseToneClassName
 *
 * Propósito:
 * - Obtener la clase visual correspondiente
 *   al badge de aumento configurado para cada testimonio.
 *
 * Parámetros:
 * - tone: Tono visual configurado en el contenido.
 *
 * Regresa:
 * - Clase utilitaria asociada al badge de aumento.
 */
function getIncreaseToneClassName(tone: BeneficiosTestimoniosAvatarTone) {
  switch (tone) {
    case "purple":
      return s.increasePurple;

    case "green":
      return s.increaseGreen;

    case "orange":
      return s.increaseOrange;

    case "indigo":
      return s.increaseIndigo;

    case "red":
      return s.increaseRed;

    case "teal":
      return s.increaseTeal;

    case "sky":
      return s.increaseSky;

    case "pink":
      return s.increasePink;

    case "emerald":
      return s.increaseEmerald;

    case "violet":
      return s.increaseViolet;

    case "cyan":
      return s.increaseCyan;

    case "blue":
    default:
      return s.increaseBlue;
  }
}

/**
 * getCategoryButtonClassName
 *
 * Propósito:
 * - Obtener la clase visual del botón
 *   de categoría según su estado seleccionado.
 *
 * Parámetros:
 * - isSelected: Indica si la categoría está activa.
 *
 * Regresa:
 * - Clase utilitaria asociada al botón del filtro.
 */
function getCategoryButtonClassName(isSelected: boolean) {
  return isSelected ? s.filterButtonActive : s.filterButton;
}

/**
 * getFilteredTestimonials
 *
 * Propósito:
 * - Filtrar los testimonios visibles de acuerdo
 *   con la categoría actualmente seleccionada.
 *
 * Parámetros:
 * - testimonials: Lista completa de testimonios.
 * - selectedCategoryId: Id de la categoría activa.
 *
 * Regresa:
 * - Lista de testimonios filtrados.
 */
function getFilteredTestimonials(
  testimonials: BeneficiosTestimonioItem[],
  selectedCategoryId: string
) {
  if (selectedCategoryId === ALL_CATEGORY_ID) {
    return testimonials;
  }

  return testimonials.filter((testimonial) =>
    testimonial.categories.includes(selectedCategoryId)
  );
}

/**
 * renderStars
 *
 * Propósito:
 * - Renderizar la calificación visual
 *   de un testimonio usando estrellas.
 *
 * Parámetros:
 * - rating: Cantidad de estrellas a mostrar.
 *
 * Regresa:
 * - Bloque renderizado con estrellas.
 */
function renderStars(rating: number) {
  return (
    <div className={s.stars} aria-label={`Calificación de ${rating} estrellas`}>
      {Array.from({ length: rating }).map((_, index) => (
        <span key={`star-${index}`} className={s.star}>
          ★
        </span>
      ))}
    </div>
  );
}

/**
 * renderTestimonialCard
 *
 * Propósito:
 * - Renderizar una tarjeta individual
 *   dentro del grid de testimonios.
 *
 * Parámetros:
 * - testimonial: Testimonio a mostrar.
 * - index: Índice local de apoyo para la key.
 *
 * Regresa:
 * - Tarjeta visual renderizada.
 */
function renderTestimonialCard(
  testimonial: BeneficiosTestimonioItem,
  index: number
) {
  const avatarToneClassName = getAvatarToneClassName(testimonial.avatarTone);
  const increaseToneClassName = getIncreaseToneClassName(testimonial.avatarTone);

  return (
    <article
      key={`${testimonial.name}-${index}`}
      className={s.card}
      aria-label={testimonial.name}
    >
      <header className={s.cardHeader}>
        <div className={`${s.avatar} ${avatarToneClassName}`}>
          {testimonial.initials}
        </div>

        <div className={s.personWrap}>
          <h3 className={s.name}>{testimonial.name}</h3>
          <p className={s.role}>{testimonial.role}</p>
          {renderStars(testimonial.rating)}
        </div>
      </header>

      <div className={s.salariesGrid}>
        <div className={`${s.salaryBox} ${s.salaryBeforeBox}`}>
          <p className={s.salaryLabelBefore}>Antes</p>
          <p className={s.salaryValue}>{testimonial.beforeSalary}</p>
        </div>

        <div className={`${s.salaryBox} ${s.salaryAfterBox}`}>
          <p className={s.salaryLabelAfter}>Después</p>
          <p className={s.salaryValue}>{testimonial.afterSalary}</p>
        </div>
      </div>

      <div className={`${s.increaseBadge} ${increaseToneClassName}`}>
        {testimonial.increaseLabel}
      </div>

      <p className={s.quote}>&quot;{testimonial.quote}&quot;</p>

      <div className={s.metaRow}>
        <span className={s.metaItem}>
          <span className={s.metaDotPink} />
          {testimonial.city}, {testimonial.state}
        </span>

        <span className={s.metaItem}>
          <span className={s.metaDotSlate} />
          Proceso: {testimonial.processDuration}
        </span>
      </div>
    </article>
  );
}

/**
 * BeneficiosTestimoniosSection
 *
 * Propósito:
 * - Renderizar la sección de testimonios
 *   de la página Beneficios.
 * - Mostrar filtros por categoría, grid paginado
 *   en bloques de 6 y botón de ver más.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function BeneficiosTestimoniosSection({ id, content }: Props) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(ALL_CATEGORY_ID);
  const [visibleCount, setVisibleCount] = useState(DEFAULT_VISIBLE_TESTIMONIALS);

  const categories = [
    {
      id: ALL_CATEGORY_ID,
      name: "Todos",
    },
    ...content.categories,
  ];

  const filteredTestimonials = getFilteredTestimonials(
    content.testimonials,
    selectedCategoryId
  );

  const visibleTestimonials = filteredTestimonials.slice(0, visibleCount);
  const hasMoreTestimonials = visibleCount < filteredTestimonials.length;

  /**
   * handleCategorySelect
   *
   * Propósito:
   * - Cambiar la categoría seleccionada y reiniciar
   *   la cantidad visible de testimonios a 6.
   *
   * Parámetros:
   * - categoryId: Id de la categoría seleccionada.
   */
  function handleCategorySelect(categoryId: string) {
    setSelectedCategoryId(categoryId);
    setVisibleCount(DEFAULT_VISIBLE_TESTIMONIALS);
  }

  /**
   * handleShowMore
   *
   * Propósito:
   * - Aumentar la cantidad de testimonios visibles
   *   en bloques de 6 elementos.
   */
  function handleShowMore() {
    setVisibleCount((currentVisibleCount) => {
      return currentVisibleCount + DEFAULT_VISIBLE_TESTIMONIALS;
    });
  }

  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
          <p className={s.description}>{content.description}</p>
        </header>

        <div className={s.filtersWrap}>
          {categories.map((category) => {
            const isSelected = category.id === selectedCategoryId;

            return (
              <button
                key={category.id}
                type="button"
                className={getCategoryButtonClassName(isSelected)}
                aria-pressed={isSelected}
                onClick={() => handleCategorySelect(category.id)}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {visibleTestimonials.length > 0 ? (
          <div className={s.grid}>
            {visibleTestimonials.map((testimonial, index) =>
              renderTestimonialCard(testimonial, index)
            )}
          </div>
        ) : (
          <div className={s.emptyState}>
            No hay testimonios disponibles para esta categoría por el momento.
          </div>
        )}

        {hasMoreTestimonials ? (
          <div className={s.footer}>
            <button type="button" className={s.moreButton} onClick={handleShowMore}>
              {content.moreButtonLabel}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}