// src/components/pages/contacto/sections/ContactoFAQSection/ContactoFAQSection.tsx

import { useState } from "react";
import { MinusIcon, PlusIcon } from "@cohacer/ui";
import type {
  ContactoFAQContent,
  ContactoFAQItem,
} from "@/types/pages/contacto/sections/contactoFAQ.section";
import { contactoFAQSectionStyles as s } from "./ContactoFAQSection.styles";

type Props = {
  id: string;
  content: ContactoFAQContent;
};

/**
 * getItemKey
 *
 * Propósito:
 * - Construir una llave estable para cada elemento
 *   del acordeón FAQ.
 *
 * Parámetros:
 * - item: Pregunta frecuente a identificar.
 * - index: Posición del elemento en la lista.
 *
 * Regresa:
 * - Llave única para uso en renderizado.
 */
function getItemKey(item: ContactoFAQItem, index: number) {
  return `${item.question}-${index}`;
}

/**
 * ContactoFAQSection
 *
 * Propósito:
 * - Renderizar la sección de preguntas frecuentes
 *   de la página Contacto.
 * - Mostrar un acordeón donde solo un elemento
 *   puede estar abierto al mismo tiempo.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección FAQ renderizada.
 */
export function ContactoFAQSection({ id, content }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
          <p className={s.description}>{content.description}</p>
        </header>

        <div className={s.list}>
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={getItemKey(item, index)} className={s.item}>
                <button
                  type="button"
                  className={`${s.trigger} ${isOpen ? s.triggerOpen : ""}`}
                  aria-expanded={isOpen}
                  aria-controls={`${id}-faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={s.question}>{item.question}</span>

                  <span className={s.iconWrap} aria-hidden="true">
                    {isOpen ? (
                      <MinusIcon className={s.icon} />
                    ) : (
                      <PlusIcon className={s.icon} />
                    )}
                  </span>
                </button>

                <div
                  id={`${id}-faq-panel-${index}`}
                  className={`${s.contentOuter} ${
                    isOpen ? s.contentOpen : s.contentClosed
                  }`}
                >
                  <div className={s.contentInner}>
                    <p className={s.answer}>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}