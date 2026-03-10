import * as React from "react";
import type {
  VerificationTransparencyCard,
  VerificationTransparencyContent,
  VerificationTransparencyLinkGroup,
  VerificationTransparencyLinkItem,
} from "@/types/pages/validez/sections/verificationTransparency.section";
import { verificationTransparencySectionStyles as s } from "./VerificationTransparencySection.styles";

type Props = {
  id: string;
  content: VerificationTransparencyContent;
};

/**
 * renderCardIcon
 *
 * Propósito:
 * - Renderizar el ícono circular de cada tarjeta superior.
 * - Resolver una representación visual simple según el tipo de ícono.
 *
 * Parámetros:
 * - icon: Tipo de ícono configurado en el contenido.
 *
 * Regresa:
 * - Nodo React con el ícono renderizado.
 *
 * Información adicional:
 * - Se usa texto simple para evitar acoplar esta sección
 *   a una librería de íconos específica.
 */
function renderCardIcon(icon: VerificationTransparencyCard["icon"]) {
  switch (icon) {
    case "lock":
      return <span aria-hidden="true">🔒</span>;

    case "check":
      return <span aria-hidden="true">✓</span>;

    case "document":
      return <span aria-hidden="true">📄</span>;

    default:
      return <span aria-hidden="true">•</span>;
  }
}

/**
 * renderInfoCard
 *
 * Propósito:
 * - Renderizar una tarjeta individual del bloque superior.
 *
 * Parámetros:
 * - card: Tarjeta individual de transparencia y verificación.
 *
 * Regresa:
 * - Nodo React con la tarjeta renderizada.
 */
function renderInfoCard(card: VerificationTransparencyCard) {
  const tone =
    card.tone === "blue" ||
    card.tone === "green" ||
    card.tone === "purple"
      ? card.tone
      : "blue";
  
  return (
    <article key={card.title} className={s.card}>
      <div className={s.cardIconWrap}>
        <div className={s.cardIcon(tone)}>
          {renderCardIcon(card.icon)}
        </div>
      </div>

      <h3 className={s.cardTitle}>{card.title}</h3>

      {card.description ? (
        <p className={s.cardDescription}>{card.description}</p>
      ) : null}
    </article>
  );
}

/**
 * renderOfficialLink
 *
 * Propósito:
 * - Renderizar un enlace individual dentro del bloque inferior.
 *
 * Parámetros:
 * - item: Enlace oficial individual.
 *
 * Regresa:
 * - Nodo React con el enlace renderizado.
 */
function renderOfficialLink(item: VerificationTransparencyLinkItem) {
  return (
    <li key={item.title} className={s.linkItem}>
      <div className={s.linkTitleRow}>
        <span className={s.linkBullet} aria-hidden="true">
          🔗
        </span>
        <strong className={s.linkTitle}>{item.title}</strong>
      </div>

      {item.subtitle ? <p className={s.linkSubtitle}>{item.subtitle}</p> : null}

      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={s.linkAnchor}
      >
        {item.label}
      </a>
    </li>
  );
}

/**
 * renderLinkGroup
 *
 * Propósito:
 * - Renderizar una columna de enlaces oficiales.
 *
 * Parámetros:
 * - group: Grupo de enlaces oficiales.
 *
 * Regresa:
 * - Nodo React con la columna renderizada.
 */
function renderLinkGroup(group: VerificationTransparencyLinkGroup, index: number) {
  return (
    <div key={`link-group-${index}`} className={s.linkGroup}>
      {group.title ? <h4 className={s.linkGroupTitle}>{group.title}</h4> : null}

      <ul className={s.linkList}>
        {group.items.map((item) => renderOfficialLink(item))}
      </ul>
    </div>
  );
}

/**
 * VerificationTransparencySection
 *
 * Propósito:
 * - Renderizar la sección de "Verificación y Transparencia Total".
 * - Mostrar tarjetas superiores con mensajes clave.
 * - Mostrar un bloque inferior con enlaces oficiales de verificación.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function VerificationTransparencySection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
          {content.subtitle ? <p className={s.subtitle}>{content.subtitle}</p> : null}
        </header>

        {content.cards.length > 0 ? (
          <div className={s.cardsGrid}>{content.cards.map((card) => renderInfoCard(card))}</div>
        ) : null}

        <div className={s.linksPanel}>
          <h3 className={s.linksPanelTitle}>{content.linksTitle}</h3>

          {content.linkGroups.length > 0 ? (
            <div className={s.linksGrid}>
              {content.linkGroups.map((group, index) => renderLinkGroup(group, index))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}