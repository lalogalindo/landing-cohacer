// src/components/pages/home/sections/InvestmentCtaSection/InvestmentCtaSection.tsx
import type { InvestmentCtaContent } from "@/types/pages/home/sections/investmentCta.section";
import { investmentCtaStyles as s } from "./InvestmentCtaSection.styles";

type Props = {
  id: string;
  content: InvestmentCtaContent;
};

/**
 * InvestmentCtaSection
 *
 * Propósito:
 * - Renderizar el bloque CTA azul (como en el video) con texto destacado.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido (JSON tipado).
 */
export function InvestmentCtaSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <div className={s.inner}>
          <h2 className={s.title}>
            {content.title} <span className={s.highlight}>{content.highlight}</span>
          </h2>
          {content.subtitle ? <p className={s.subtitle}>{content.subtitle}</p> : null}
        </div>
      </div>
    </section>
  );
}