import * as React from "react";
import { Section, Card, CardContent } from "@cohacer/ui";
import type { TeamContent, TeamSocialKey, TeamSocialLinks } from "@/types/team";
import { teamStyles as s } from "./TeamSection.styles";

type Props = {
  id: string;
  content: TeamContent;
};

/**
 * Devuelve el SVG correspondiente a una red social.
 *
 * Propósito:
 * - Centralizar los íconos.
 *
 * Parámetros:
 * - key: Red social.
 *
 * Regresa:
 * - SVG del ícono.
 */
function getIcon(key: TeamSocialKey) {
  const base = "h-5 w-5 fill-current";

  if (key === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className={base}>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.3V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    );
  }

  if (key === "x") {
    return (
      <svg viewBox="0 0 24 24" className={base}>
        <path d="M18.9 2H22l-6.8 7.78L23 22h-6.8l-5.34-6.86L4.9 22H2l7.34-8.4L1 2h6.98l4.82 6.2L18.9 2z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={base}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" />
    </svg>
  );
}

/**
 * Obtiene un enlace de red social por key, sin usar casteos.
 *
 * Propósito:
 * - Evitar `as TeamSocialKey` al iterar keys dinámicas.
 * - Renderizar máximo 3 links (los 3 iconos).
 *
 * Parámetros:
 * - socials: Objeto con links opcionales.
 * - key: Red social.
 *
 * Regresa:
 * - URL si existe, si no `undefined`.
 */
function getSocialHref(socials: TeamSocialLinks | undefined, key: TeamSocialKey) {
  return socials?.[key];
}

/**
 * Sección Team.
 *
 * Propósito:
 * - Renderizar empleados en grid responsive.
 *
 * Parámetros:
 * - id: Id HTML del wrapper de sección.
 * - content: Datos tipados (desde `team.json`).
 */
export function TeamSection({ id, content }: Props) {
  const socialOrder: TeamSocialKey[] = ["linkedin", "x", "instagram"];

  return (
    <Section id={id}>
      <div className={s.wrapper}>
        <header className={s.header}>
          <h2 className={s.title}>{content.sectionTitle}</h2>
          {content.sectionSubtitle ? (
            <p className={s.subtitle}>{content.sectionSubtitle}</p>
          ) : null}
        </header>

        <div className={s.grid}>
          {content.employees.map((emp) => (
            <Card key={emp.id}>
              <CardContent className={s.cardContent}>
                <div className={s.cardLayout}>
                  <img
                    src={emp.avatar.src}
                    alt={emp.avatar.alt}
                    className={s.avatar}
                    loading="lazy"
                  />

                  <div className={s.infoWrapper}>
                    <div>
                      <h3 className={s.name}>{emp.name}</h3>
                      <p className={s.role}>{emp.role}</p>
                    </div>

                    <p className={s.quote}>“{emp.quote}”</p>

                    {emp.socials ? (
                      <div className={s.socials}>
                        {socialOrder.map((key) => {
                          const href = getSocialHref(emp.socials, key);
                          if (!href) return null;

                          return (
                            <a
                              key={`${emp.id}-${key}`}
                              href={href}
                              target="_blank"
                              rel="noreferrer"
                              className={s.socialLink}
                              aria-label={`${key} de ${emp.name}`}
                            >
                              {getIcon(key)}
                            </a>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}