import * as React from "react";
import {
  GraduationCapIcon,
  DollarSignIcon,
  SparkIcon,
  TrendUpIcon,
} from "@cohacer/ui";
import type {
  BenefitsGridContent,
  BenefitIconKey,
} from "@/types/pages/home/sections/benefitsGrid.section";
import { benefitsGridStyles as s } from "./BenefitsGridSection.styles";

type Props = {
  id: string;
  content: BenefitsGridContent;
};

/**
 * getBenefitIcon
 *
 * Propósito:
 * - Resolver el componente de ícono correspondiente
 *   para cada beneficio del grid.
 *
 * Parámetros:
 * - key: Llave tipada del ícono.
 *
 * Regresa:
 * - Componente React del ícono a renderizar.
 */
function getBenefitIcon(key?: BenefitIconKey) {
  const base = s.icon;

  if (key === "trendUp") {
    return <TrendUpIcon className={base} />;
  }

  if (key === "money") {
    return <DollarSignIcon className={base} />;
  }

  if (key === "graduation") {
    return <GraduationCapIcon className={base} />;
  }

  if (key === "spark") {
    return <SparkIcon className={base} />;
  }

  return <TrendUpIcon className={base} />;
}

/**
 * BenefitsGridSection
 *
 * Propósito:
 * - Renderizar la sección de beneficios con layout centrado
 *   y visual tipo strip horizontal como en el mockup objetivo.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado proveniente del JSON.
 *
 * Regresa:
 * - Sección renderizada del home.
 */
export function BenefitsGridSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
          {content.subtitle ? <p className={s.subtitle}>{content.subtitle}</p> : null}
        </header>

        <div className={s.grid}>
          {content.items.map((item) => (
            <article key={item.title} className={s.item}>
              <div className={s.iconCircle}>{getBenefitIcon(item.icon)}</div>

              <h3 className={s.cardTitle}>{item.title}</h3>

              {item.description ? (
                <p className={s.cardDesc}>{item.description}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}