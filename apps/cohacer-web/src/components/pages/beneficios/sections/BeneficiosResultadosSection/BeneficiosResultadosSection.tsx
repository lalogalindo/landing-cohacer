// src/components/pages/beneficios/sections/BeneficiosResultadosSection/BeneficiosResultadosSection.tsx

import type {
  BeneficiosResultadosContent,
  BeneficiosResultadosHighlightTone,
  BeneficiosResultadosIconName,
} from "@/types/pages/beneficios/sections/beneficiosResultados.section";
import { beneficiosResultadosSectionStyles as s } from "./BeneficiosResultadosSection.styles";

type Props = {
  id: string;
  content: BeneficiosResultadosContent;
};

/**
 * getHighlightToneClassNames
 *
 * Propósito:
 * - Obtener las clases visuales correspondientes
 *   al tono configurado para el bloque destacado.
 *
 * Parámetros:
 * - tone: Tono visual configurado en el contenido.
 *
 * Regresa:
 * - Objeto con clases para contenedor, título y descripción.
 */
function getHighlightToneClassNames(tone: BeneficiosResultadosHighlightTone) {
  switch (tone) {
    case "green":
      return {
        container: s.highlightGreen,
        title: s.highlightGreenTitle,
        description: s.highlightGreenDescription,
      };

    case "purple":
      return {
        container: s.highlightPurple,
        title: s.highlightPurpleTitle,
        description: s.highlightPurpleDescription,
      };

    case "orange":
      return {
        container: s.highlightOrange,
        title: s.highlightOrangeTitle,
        description: s.highlightOrangeDescription,
      };

    case "blue":
    default:
      return {
        container: s.highlightBlue,
        title: s.highlightBlueTitle,
        description: s.highlightBlueDescription,
      };
  }
}

/**
 * renderCardIcon
 *
 * Propósito:
 * - Renderizar el ícono decorativo de cada tarjeta
 *   según la clave configurada en el contenido.
 *
 * Parámetros:
 * - icon: Clave visual del ícono.
 *
 * Regresa:
 * - Ícono SVG renderizado.
 */
function renderCardIcon(icon: BeneficiosResultadosIconName) {
  switch (icon) {
    case "salary":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={s.icon}
          aria-hidden="true"
        >
          <path d="M12 19V5" />
          <path d="m6 11 6-6 6 6" />
          <path d="M5 19h14" />
        </svg>
      );

    case "promotion":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={s.icon}
          aria-hidden="true"
        >
          <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
        </svg>
      );

    case "recognition":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={s.icon}
          aria-hidden="true"
        >
          <circle cx="12" cy="8.5" r="3.5" />
          <path d="M8.5 12.5 7 21l5-3 5 3-1.5-8.5" />
        </svg>
      );

    case "independence":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={s.icon}
          aria-hidden="true"
        >
          <path d="m5 19 4.5-1 8-8a2.1 2.1 0 0 0-3-3l-8 8L5 19Z" />
          <path d="m13.5 6.5 4 4" />
        </svg>
      );

    case "stability":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={s.icon}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v2M22 12h-2M12 22v-2M2 12h2" />
        </svg>
      );

    case "confidence":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={s.icon}
          aria-hidden="true"
        >
          <rect x="7" y="4" width="10" height="16" rx="2" />
          <circle cx="12" cy="9" r="1.5" />
          <path d="M10 13h4M10 16h4" />
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={s.icon}
          aria-hidden="true"
        >
          <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
        </svg>
      );
  }
}

/**
 * renderResultCard
 *
 * Propósito:
 * - Renderizar una tarjeta individual dentro
 *   de la grilla de resultados.
 *
 * Parámetros:
 * - card: Tarjeta a renderizar.
 * - index: Índice usado como apoyo para `key`.
 *
 * Regresa:
 * - Tarjeta visual renderizada.
 */
function renderResultCard(
  card: BeneficiosResultadosContent["cards"][number],
  index: number
) {
  const toneClassNames = getHighlightToneClassNames(card.highlight.tone);

  return (
    <article key={`${card.title}-${index}`} className={s.card}>
      <div className={s.cardTopBar} />

      <div className={s.iconBadge}>{renderCardIcon(card.icon)}</div>

      <h3 className={s.cardTitle}>{card.title}</h3>

      <p className={s.cardDescription}>{card.description}</p>

      <div className={`${s.highlightBox} ${toneClassNames.container}`}>
        <p className={`${s.highlightTitle} ${toneClassNames.title}`}>
          {card.highlight.title}
        </p>

        <p
          className={`${s.highlightDescription} ${toneClassNames.description}`}
        >
          {card.highlight.description}
        </p>
      </div>
    </article>
  );
}

/**
 * BeneficiosResultadosSection
 *
 * Propósito:
 * - Renderizar la sección de resultados comprobables
 *   de la página Beneficios.
 * - Mostrar una grilla de tarjetas con beneficios
 *   concretos y métricas resumidas.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function BeneficiosResultadosSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section} aria-labelledby={`${id}-title`}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 id={`${id}-title`} className={s.title}>
            {content.title}
          </h2>

          <p className={s.description}>{content.description}</p>
        </header>

        <div className={s.grid}>
          {content.cards.map((card, index) => renderResultCard(card, index))}
        </div>
      </div>
    </section>
  );
}