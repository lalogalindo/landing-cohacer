// src/components/pages/contacto/sections/ContactoIntroSection/ContactoIntroSection.tsx

import { BoltIcon, BullseyeIcon, PhoneIcon } from "@cohacer/ui";
import type {
  ContactoIntroContent,
  ContactoIntroStat,
} from "@/types/pages/contacto/sections/contactoIntro.section";
import { contactoIntroSectionStyles as s } from "./ContactoIntroSection.styles";

type Props = {
  id: string;
  content: ContactoIntroContent;
};

/**
 * renderStatIcon
 *
 * Propósito:
 * - Resolver y renderizar el ícono visual correspondiente
 *   a una métrica de la sección de Contacto.
 *
 * Parámetros:
 * - icon: Identificador del ícono configurado en el contenido.
 *
 * Regresa:
 * - Ícono renderizado con el componente correspondiente
 *   del paquete compartido `@cohacer/ui`.
 */
function renderStatIcon(icon: ContactoIntroStat["icon"]) {
  switch (icon) {
    case "bolt":
      return <BoltIcon className={`${s.statIcon} ${s.statIconBolt}`} />;

    case "bullseye":
      return <BullseyeIcon className={`${s.statIcon} ${s.statIconBullseye}`} />;

    case "phone":
      return <PhoneIcon className={`${s.statIcon} ${s.statIconPhone}`} />;

    default:
      return null;
  }
}

/**
 * renderStatCard
 *
 * Propósito:
 * - Renderizar una tarjeta individual de métrica
 *   dentro de la sección inicial de Contacto.
 *
 * Parámetros:
 * - stat: Métrica a renderizar.
 * - index: Índice de la métrica dentro del listado.
 *
 * Regresa:
 * - Tarjeta visual con ícono, valor y descripción.
 */
function renderStatCard(stat: ContactoIntroStat, index: number) {
  return (
    <article key={`${stat.value}-${index}`} className={s.statCard}>
      <span aria-hidden="true">{renderStatIcon(stat.icon)}</span>
      <p className={s.statValue}>{stat.value}</p>
      <p className={s.statLabel}>{stat.label}</p>
    </article>
  );
}

/**
 * ContactoIntroSection
 *
 * Propósito:
 * - Renderizar la sección principal de introducción
 *   de la página Contacto.
 * - Mostrar un bloque visual con gradiente, título,
 *   descripción y métricas destacadas.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function ContactoIntroSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h1 className={s.title}>{content.title}</h1>
          <p className={s.description}>{content.description}</p>
        </header>

        <div className={s.statsGrid}>
          {content.stats.map((stat, index) => renderStatCard(stat, index))}
        </div>
      </div>
    </section>
  );
}