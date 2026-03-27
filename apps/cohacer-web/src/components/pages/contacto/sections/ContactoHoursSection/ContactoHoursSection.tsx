// src/components/pages/contacto/sections/ContactoHoursSection/ContactoHoursSection.tsx

import type {
  ContactoHoursCard,
  ContactoHoursContent,
  ContactoHoursItem,
  ContactoHoursValueTone,
} from "@/types/pages/contacto/sections/contactoHours.section";
import { contactoHoursSectionStyles as s } from "./ContactoHoursSection.styles";

type Props = {
  id: string;
  content: ContactoHoursContent;
};

/**
 * getValueToneClass
 *
 * Propósito:
 * - Resolver la clase visual correspondiente
 *   al tono configurado para un valor horario.
 *
 * Parámetros:
 * - tone: Tono visual configurado en el contenido.
 *
 * Regresa:
 * - Clase de Tailwind correspondiente al tono.
 */
function getValueToneClass(tone?: ContactoHoursValueTone) {
  switch (tone) {
    case "success":
      return s.itemValueSuccess;

    case "accent":
      return s.itemValueAccent;

    case "muted":
      return s.itemValueMuted;

    case "default":
    default:
      return s.itemValueDefault;
  }
}

/**
 * renderHoursItem
 *
 * Propósito:
 * - Renderizar una fila individual de horario
 *   dentro de una tarjeta de atención.
 *
 * Parámetros:
 * - item: Fila de horario a renderizar.
 * - index: Índice de la fila dentro del listado.
 *
 * Regresa:
 * - Fila visual con etiqueta y valor alineados.
 */
function renderHoursItem(item: ContactoHoursItem, index: number) {
  return (
    <div key={`${item.label}-${index}`} className={s.itemRow}>
      <span className={s.itemLabel}>{item.label}</span>
      <span className={`${s.itemValue} ${getValueToneClass(item.tone)}`}>
        {item.value}
      </span>
    </div>
  );
}

/**
 * renderHoursCard
 *
 * Propósito:
 * - Renderizar una tarjeta completa de horarios
 *   con sus filas y nota inferior.
 *
 * Parámetros:
 * - card: Tarjeta de atención a renderizar.
 * - index: Índice de la tarjeta dentro del listado.
 *
 * Regresa:
 * - Tarjeta renderizada con título, horarios y nota.
 */
function renderHoursCard(card: ContactoHoursCard, index: number) {
  return (
    <article key={`${card.title}-${index}`} className={s.card}>
      <h3 className={s.cardTitle}>{card.title}</h3>

      <div className={s.items}>
        {card.items.map((item, itemIndex) => renderHoursItem(item, itemIndex))}
      </div>

      <div className={s.noteBox}>
        <p className={s.noteText}>
          <span className={s.noteStrong}>{card.noteLabel}:</span> {card.noteText}
        </p>
      </div>
    </article>
  );
}

/**
 * ContactoHoursSection
 *
 * Propósito:
 * - Renderizar la sección de horarios de atención
 *   de la página Contacto.
 * - Mostrar tarjetas para atención presencial
 *   y atención digital.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function ContactoHoursSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
        </header>

        <div className={s.grid}>
          {content.cards.map((card, index) => renderHoursCard(card, index))}
        </div>
      </div>
    </section>
  );
}