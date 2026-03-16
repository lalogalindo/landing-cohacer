import {
  Button,
  CreditCardIcon,
  PlusIcon,
  ShieldIcon,
  TargetIcon,
} from "@cohacer/ui";

import type {
  InversionFinancingContent,
  InversionFinancingOption,
} from "@/types/pages/inversion/sections/inversionFinancing.section";

import { inversionFinancingSectionStyles as s } from "./InversionFinancingSection.styles";

/**
 * Props
 *
 * Propósito:
 * - Definir las propiedades que recibe la sección
 *   de opciones de financiamiento.
 */
type Props = {
  id: string;
  content: InversionFinancingContent;
};

/**
 * getIconToneClassName
 *
 * Propósito:
 * - Resolver la clase visual del contenedor del ícono
 *   según el tipo de opción de financiamiento.
 *
 * Parámetros:
 * - icon: Identificador visual configurado en el contenido.
 *
 * Regresa:
 * - Clase CSS correspondiente al color del contenedor del ícono.
 */
function getIconToneClassName(icon: InversionFinancingOption["icon"]) {
  switch (icon) {
    case "card":
      return s.iconBlue;

    case "shield":
      return s.iconGreen;

    case "plus":
      return s.iconPurple;

    case "target":
      return s.iconOrange;

    default:
      return s.iconBlue;
  }
}

/**
 * getIconGraphic
 *
 * Propósito:
 * - Obtener el componente de ícono del design system
 *   correspondiente a cada opción de financiamiento.
 *
 * Parámetros:
 * - icon: Identificador visual configurado en el contenido.
 *
 * Regresa:
 * - Nodo React con el ícono correspondiente.
 */
function getIconGraphic(icon: InversionFinancingOption["icon"]) {
  switch (icon) {
    case "card":
      return <CreditCardIcon className="text-xl" />;

    case "shield":
      return <ShieldIcon className="text-xl" />;

    case "plus":
      return <PlusIcon className="text-xl" />;

    case "target":
      return <TargetIcon className="text-xl" />;

    default:
      return <CreditCardIcon className="text-xl" />;
  }
}

/**
 * renderOptionItem
 *
 * Propósito:
 * - Renderizar un punto individual dentro de la lista
 *   de beneficios o condiciones de una opción.
 *
 * Parámetros:
 * - item: Texto del elemento de lista.
 * - index: Índice del elemento dentro de la lista.
 *
 * Regresa:
 * - Elemento de lista renderizado.
 */
function renderOptionItem(item: string, index: number) {
  return (
    <li key={`${item}-${index}`} className={s.listItem}>
      <span className={s.bullet} aria-hidden="true" />
      <span>{item}</span>
    </li>
  );
}

/**
 * renderOptionCard
 *
 * Propósito:
 * - Renderizar una tarjeta individual de opción
 *   de financiamiento.
 *
 * Parámetros:
 * - option: Opción a renderizar.
 * - index: Índice de la opción dentro del grid.
 *
 * Regresa:
 * - Tarjeta renderizada.
 */
function renderOptionCard(option: InversionFinancingOption, index: number) {
  return (
    <article
      key={`${option.title}-${index}`}
      className={s.card}
      aria-label={option.title}
    >
      <div className={s.cardHeader}>
        <div
          className={`${s.iconWrapBase} ${getIconToneClassName(option.icon)}`}
          aria-hidden="true"
        >
          {getIconGraphic(option.icon)}
        </div>

        <h3 className={s.cardTitle}>{option.title}</h3>
      </div>

      <ul className={s.list}>
        {option.items.map((item, itemIndex) => renderOptionItem(item, itemIndex))}
      </ul>
    </article>
  );
}

/**
 * InversionFinancingSection
 *
 * Propósito:
 * - Renderizar la sección de opciones de financiamiento
 *   dentro de la página de Inversión.
 * - Mostrar tarjetas informativas y un CTA principal
 *   al final del bloque.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function InversionFinancingSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
        </header>

        <div className={s.grid}>
          {content.options.map((option, index) => renderOptionCard(option, index))}
        </div>

        <div className={s.ctaWrap}>
          <Button
            href={content.cta.href}
            variant="primary"
            size="lg"
            className={s.ctaButton}
          >
            {content.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}