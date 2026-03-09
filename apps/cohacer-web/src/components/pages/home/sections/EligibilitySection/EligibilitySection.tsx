// src/components/pages/home/sections/EligibilitySection/EligibilitySection.tsx
import * as React from "react";
import type {
  EligibilityContent,
  EligibilityBadge,
  EligibilityItem,
  EligibilityItemIconTone,
} from "@/types/pages/home/sections/eligibility.section";
import { eligibilityStyles as s } from "./EligibilitySection.styles";
import { GraduationCapIcon } from "@cohacer/ui";

type Props = {
  id: string;
  content: EligibilityContent;
};

/**
 * Devuelve clases visuales para el badge superior.
 *
 * Propósito:
 * - Permitir estilos distintos por badge sin meter lógica visual en el JSON.
 *
 * Parámetros:
 * - tone: Variante visual del badge.
 *
 * Regresa:
 * - String con clases Tailwind para el badge.
 */
function getBadgeToneClass(tone?: EligibilityBadge["tone"]) {
  if (tone === "green") {
    return s.badgeGreen;
  }

  if (tone === "blue") {
    return s.badgeBlue;
  }

  return s.badgeNeutral;
}

/**
 * Devuelve clases visuales para el círculo del ícono de cada card.
 *
 * Propósito:
 * - Aplicar color de fondo según la variante configurada en el contenido.
 *
 * Parámetros:
 * - tone: Variante visual del círculo.
 *
 * Regresa:
 * - String con clases Tailwind para el contenedor del ícono.
 */
function getItemIconToneClass(tone?: EligibilityItemIconTone) {
  if (tone === "green") {
    return s.iconGreen;
  }

  if (tone === "purple") {
    return s.iconPurple;
  }

  return s.iconBlue;
}

/**
 * Renderiza el ícono configurado para la card.
 *
 * Propósito:
 * - Mostrar un ícono simple y consistente sin depender de librerías externas.
 *
 * Parámetros:
 * - item: Elemento de elegibilidad.
 *
 * Regresa:
 * - Nodo React con el ícono.
 */
function renderItemIcon(item: EligibilityItem) {
  if (item.icon === "graduation") {
    return <GraduationCapIcon className="h-8 w-8" />;
  }

  return (
    <span className={s.iconText} aria-hidden="true">
      {item.iconLabel ?? "25+"}
    </span>
  );
}

/**
 * EligibilitySection
 *
 * Propósito:
 * - Renderizar la sección de requisitos / elegibilidad como en el mockup:
 *   - Título centrado
 *   - Badges opcionales
 *   - Subtítulo centrado
 *   - Cards con ícono circular superior
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 */
export function EligibilitySection({ id, content }: Props) {
  const badges = content.badges ?? [];

  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
          {badges.length > 0 ? (
            <div className={s.badges}>
              {badges.map((badge, index) => (
                <React.Fragment key={badge.label}>
                  <span className={`${s.badge} ${getBadgeToneClass(badge.tone)}`}>
                    {badge.label}
                  </span>

                  {index < badges.length - 1 && (
                    <span className={s.badgeSeparator}>+</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          ) : null}

          {content.subtitle ? <p className={s.subtitle}>{content.subtitle}</p> : null}
        </header>

        <div className={s.grid}>
          {content.items.map((item) => (
            <div key={item.title} className={s.card}>
              <div className={`${s.iconWrap} ${getItemIconToneClass(item.iconTone)}`}>
                {renderItemIcon(item)}
              </div>

              <div className={s.cardTitle}>{item.title}</div>

              {item.description ? <div className={s.cardDesc}>{item.description}</div> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}