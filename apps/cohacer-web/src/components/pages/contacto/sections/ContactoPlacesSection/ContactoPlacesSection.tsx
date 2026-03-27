import type {
  ContactoPlace,
  ContactoPlacesContent,
} from "@/types/pages/contacto/sections/contactoPlaces.section";
import { contactoPlacesSectionStyles as s } from "./ContactoPlacesSection.styles";

type Props = {
  id: string;
  content: ContactoPlacesContent;
};

type PlaceToneClasses = {
  accent: string;
  badge: string;
  button: string;
};

/**
 * getPlaceToneClasses
 *
 * Propósito:
 * - Resolver la combinación visual de color
 *   para cada tarjeta de oficina.
 *
 * Parámetros:
 * - index: Posición de la tarjeta dentro del grid.
 *
 * Regresa:
 * - Clases visuales para línea lateral, badge y botón.
 */
function getPlaceToneClasses(index: number): PlaceToneClasses {
  const tones: PlaceToneClasses[] = [
    {
      accent: s.toneBlueAccent,
      badge: s.toneBlueBadge,
      button: s.toneBlueButton,
    },
    {
      accent: s.toneGreenAccent,
      badge: s.toneGreenBadge,
      button: s.toneGreenButton,
    },
    {
      accent: s.toneOrangeAccent,
      badge: s.toneOrangeBadge,
      button: s.toneOrangeButton,
    },
  ];

  return tones[index % tones.length];
}

/**
 * renderAddressBlock
 *
 * Propósito:
 * - Renderizar el bloque de dirección en múltiples líneas
 *   dentro de una tarjeta de oficina.
 *
 * Parámetros:
 * - addressLines: Líneas de dirección configuradas para la oficina.
 *
 * Regresa:
 * - Elemento visual con el bloque de dirección.
 */
function renderAddressBlock(addressLines: string[]) {
  return (
    <li className={s.infoItem}>
      <span className={s.infoEmoji} aria-hidden="true">
        📍
      </span>

      <div className={`${s.infoText} ${s.addressLines}`}>
        {addressLines.map((line, index) => (
          <p key={`${line}-${index}`}>{line}</p>
        ))}
      </div>
    </li>
  );
}

/**
 * renderInfoRow
 *
 * Propósito:
 * - Renderizar una fila informativa simple
 *   como teléfono o correo electrónico.
 *
 * Parámetros:
 * - icon: Emoji a mostrar al inicio de la fila.
 * - value: Texto principal de la fila.
 * - key: Identificador estable para React.
 *
 * Regresa:
 * - Fila visual renderizada.
 */
function renderInfoRow(icon: string, value: string, key: string) {
  return (
    <li key={key} className={s.infoItem}>
      <span className={s.infoEmoji} aria-hidden="true">
        {icon}
      </span>
      <span className={s.infoText}>{value}</span>
    </li>
  );
}

/**
 * renderPlaceCard
 *
 * Propósito:
 * - Renderizar una tarjeta individual de oficina
 *   dentro de la sección de ubicaciones.
 *
 * Parámetros:
 * - place: Oficina a renderizar.
 * - index: Posición de la oficina dentro del listado.
 *
 * Regresa:
 * - Tarjeta visual completa con datos y CTA.
 */
function renderPlaceCard(place: ContactoPlace, index: number) {
  const tone = getPlaceToneClasses(index);

  return (
    <article key={`${place.title}-${index}`} className={s.card}>
      <span className={`${s.accentLine} ${tone.accent}`} aria-hidden="true" />

      <div className={s.cardInner}>
        <header className={s.cardHeader}>
          <div className={`${s.badge} ${tone.badge}`} aria-hidden="true">
            🏢
          </div>

          <div className={s.headingGroup}>
            <h3 className={s.cardTitle}>{place.title}</h3>
            <p className={s.cardLocation}>{place.location}</p>
          </div>
        </header>

        <ul className={s.infoList}>
          {renderAddressBlock(place.addressLines)}

          {place.phone
            ? renderInfoRow("📞", place.phone, `${place.title}-phone`)
            : null}

          {place.email
            ? renderInfoRow("✉️", place.email, `${place.title}-email`)
            : null}
        </ul>

        <a
          href={place.mapHref}
          target="_blank"
          rel="noreferrer"
          className={`${s.mapButton} ${tone.button}`}
        >
          {place.mapLabel}
        </a>
      </div>
    </article>
  );
}

/**
 * ContactoPlacesSection
 *
 * Propósito:
 * - Renderizar la sección de oficinas y puntos de atención
 *   de la página de Contacto.
 * - Mostrar encabezado centrado y un grid responsivo
 *   de tarjetas con información de ubicación.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function ContactoPlacesSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
          <p className={s.description}>{content.description}</p>
        </header>

        <div className={s.grid}>
          {content.places.map((place, index) => renderPlaceCard(place, index))}
        </div>
      </div>
    </section>
  );
}