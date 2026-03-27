// src/components/pages/contacto/sections/ContactoOpcionSection/ContactoOpcionSection.tsx

import { MailIcon, PhoneIcon, WhatsappIcon } from "@cohacer/ui";
import type {
  ContactoOpcionContent,
  ContactoOpcionIcon,
  ContactoOpcionItem,
} from "@/types/pages/contacto/sections/contactoOpcion.section";
import { contactoOpcionSectionStyles as s } from "./ContactoOpcionSection.styles";

type Props = {
  id: string;
  content: ContactoOpcionContent;
};

/**
 * renderOptionIcon
 *
 * Propósito:
 * - Resolver y renderizar el ícono visual
 *   correspondiente a una opción de contacto.
 *
 * Parámetros:
 * - icon: Identificador del ícono configurado
 *   en el contenido.
 *
 * Regresa:
 * - Ícono renderizado con el componente
 *   correspondiente del paquete `@cohacer/ui`.
 */
function renderOptionIcon(icon: ContactoOpcionIcon) {
  switch (icon) {
    case "whatsapp":
      return <WhatsappIcon className={s.iconInner} />;

    case "phone":
      return <PhoneIcon className={s.iconInner} />;

    case "email":
      return <MailIcon className={s.iconInner} />;

    default:
      return null;
  }
}

/**
 * getIconCircleClassName
 *
 * Propósito:
 * - Obtener la clase visual del círculo con gradiente
 *   según el tipo de opción de contacto.
 *
 * Parámetros:
 * - icon: Identificador del ícono configurado
 *   en el contenido.
 *
 * Regresa:
 * - Clase de Tailwind correspondiente al gradiente.
 */
function getIconCircleClassName(icon: ContactoOpcionIcon) {
  switch (icon) {
    case "whatsapp":
      return s.iconCircleWhatsapp;

    case "phone":
      return s.iconCirclePhone;

    case "email":
      return s.iconCircleEmail;

    default:
      return "";
  }
}

/**
 * getContactClassName
 *
 * Propósito:
 * - Obtener la clase de color del dato principal
 *   de contacto según el tipo de tarjeta.
 *
 * Parámetros:
 * - icon: Identificador del ícono configurado
 *   en el contenido.
 *
 * Regresa:
 * - Clase de color para el texto de contacto.
 */
function getContactClassName(icon: ContactoOpcionIcon) {
  switch (icon) {
    case "whatsapp":
      return s.contactWhatsapp;

    case "phone":
      return s.contactPhone;

    case "email":
      return s.contactEmail;

    default:
      return "";
  }
}

/**
 * getButtonClassName
 *
 * Propósito:
 * - Obtener la clase visual del botón CTA
 *   según el tipo de opción de contacto.
 *
 * Parámetros:
 * - icon: Identificador del ícono configurado
 *   en el contenido.
 *
 * Regresa:
 * - Clase de Tailwind correspondiente al botón.
 */
function getButtonClassName(icon: ContactoOpcionIcon) {
  switch (icon) {
    case "whatsapp":
      return s.ctaWhatsapp;

    case "phone":
      return s.ctaPhone;

    case "email":
      return s.ctaEmail;

    default:
      return "";
  }
}

/**
 * getLinkProps
 *
 * Propósito:
 * - Resolver los atributos extra del enlace
 *   cuando la opción debe abrirse externamente.
 *
 * Parámetros:
 * - option: Opción de contacto a evaluar.
 *
 * Regresa:
 * - Objeto de props adicionales para el anchor.
 */
function getLinkProps(option: ContactoOpcionItem) {
  if (option.external) {
    return {
      target: "_blank",
      rel: "noreferrer",
    };
  }

  return {};
}

/**
 * renderOptionCard
 *
 * Propósito:
 * - Renderizar una tarjeta individual de método
 *   de contacto dentro de la sección.
 *
 * Parámetros:
 * - option: Opción de contacto a renderizar.
 * - index: Índice de la opción dentro del listado.
 *
 * Regresa:
 * - Tarjeta visual completa con ícono, copy,
 *   dato principal y CTA.
 */
function renderOptionCard(option: ContactoOpcionItem, index: number) {
  return (
    <article key={`${option.title}-${index}`} className={s.card}>
      <span
        aria-hidden="true"
        className={`${s.iconCircle} ${getIconCircleClassName(option.icon)}`}
      >
        {renderOptionIcon(option.icon)}
      </span>

      <h2 className={s.cardTitle}>{option.title}</h2>
      <p className={s.cardDescription}>{option.description}</p>

      <p className={`${s.contact} ${getContactClassName(option.icon)}`}>
        {option.contact}
      </p>

      <p className={s.availability}>{option.availability}</p>

      <a
        href={option.ctaHref}
        className={`${s.cta} ${getButtonClassName(option.icon)}`}
        {...getLinkProps(option)}
      >
        {option.ctaLabel}
      </a>
    </article>
  );
}

/**
 * ContactoOpcionSection
 *
 * Propósito:
 * - Renderizar la sección de métodos de contacto
 *   disponibles dentro de la página Contacto.
 * - Mostrar tarjetas con ícono circular, gradiente,
 *   información principal y CTA por canal.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function ContactoOpcionSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
          <p className={s.subtitle}>{content.subtitle}</p>
        </header>

        <div className={s.grid}>
          {content.options.map((option, index) =>
            renderOptionCard(option, index),
          )}
        </div>
      </div>
    </section>
  );
}