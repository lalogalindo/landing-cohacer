
import type {
  Acuerdo286Content,
  Acuerdo286Highlight,
  Acuerdo286InfoBlock,
} from "@/types/pages/validez/sections/acuerdo286.section";
import { acuerdo286SectionStyles as s } from "./Acuerdo286Section.styles";

type Props = {
  id: string;
  content: Acuerdo286Content;
};

/**
 * renderHighlight
 *
 * Propósito:
 * - Renderizar un punto clave numerado del documento oficial.
 *
 * Parámetros:
 * - highlight: Elemento de resumen con número, título y descripción.
 *
 * Regresa:
 * - Nodo React del highlight renderizado.
 */
function renderHighlight(highlight: Acuerdo286Highlight) {
  return (
    <div key={`${highlight.number}-${highlight.title}`} className={s.highlightItem}>
      <span className={s.highlightNumber} aria-hidden="true">
        {highlight.number}
      </span>

      <p className={s.highlightText}>
        <strong>{highlight.title}:</strong> {highlight.description}
      </p>
    </div>
  );
}

/**
 * getBlockToneClass
 *
 * Propósito:
 * - Resolver la clase visual correspondiente al tono
 *   configurado para cada bloque lateral.
 *
 * Parámetros:
 * - tone: Tono visual opcional del bloque.
 *
 * Regresa:
 * - Clase utilitaria de estilo.
 */
function getBlockToneClass(tone?: Acuerdo286InfoBlock["tone"]) {
  switch (tone) {
    case "green":
      return s.infoBlockGreen;

    case "purple":
      return s.infoBlockPurple;

    case "blue":
    default:
      return s.infoBlockBlue;
  }
}

/**
 * renderInfoBlock
 *
 * Propósito:
 * - Renderizar una tarjeta lateral con título e items.
 *
 * Parámetros:
 * - block: Bloque informativo lateral.
 *
 * Regresa:
 * - Nodo React del bloque renderizado.
 */
function renderInfoBlock(block: Acuerdo286InfoBlock) {
  return (
    <article
      key={block.title}
      className={`${s.infoBlock} ${getBlockToneClass(block.tone)}`}
    >
      <h3 className={s.infoBlockTitle}>
        <span className={s.infoBlockIcon} aria-hidden="true">
          {block.icon}
        </span>
        <span>{block.title}</span>
      </h3>

      <ul className={s.infoBlockList}>
        {block.items.map((item) => (
          <li key={item.text} className={s.infoBlockListItem}>
            {item.text}
          </li>
        ))}
      </ul>
    </article>
  );
}

/**
 * Acuerdo286Section
 *
 * Propósito:
 * - Renderizar la segunda sección de la página de validez.
 * - Mostrar el documento oficial del Acuerdo 286 a la izquierda.
 * - Mostrar requisitos y bloques legales a la derecha.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function Acuerdo286Section({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
        </header>

        <div className={s.grid}>
          <article className={s.documentCard}>
            <h3 className={s.documentCardTitle}>{content.documentLabel}</h3>

            <div className={s.documentBody}>
              <p className={s.documentEyebrow}>SECRETARÍA DE EDUCACIÓN PÚBLICA</p>

              <p className={s.documentTitle}>{content.documentTitle}</p>

              <p className={s.documentDescription}>{content.documentDescription}</p>

              {content.documentFootnote ? (
                <p className={s.documentFootnote}>{content.documentFootnote}</p>
              ) : null}
            </div>

            <div className={s.highlights}>
              {content.highlights.map((highlight) => renderHighlight(highlight))}
            </div>
          </article>

          <aside className={s.sidebar}>
            <h3 className={s.sidebarTitle}>{content.sidebarTitle}</h3>

            <div className={s.infoBlocks}>
              {content.infoBlocks.map((block) => renderInfoBlock(block))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}