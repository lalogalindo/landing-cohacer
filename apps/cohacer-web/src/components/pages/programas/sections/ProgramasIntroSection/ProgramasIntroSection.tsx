// src/components/pages/programas/sections/ProgramasIntroSection/ProgramasIntroSection.tsx

import type { ProgramasIntroContent } from "@/types/pages/programas/sections/programasIntro.section";
import { programasIntroSectionStyles as s } from "./ProgramasIntroSection.styles";

type Props = {
  id: string;
  content: ProgramasIntroContent;
};

/**
 * renderStatCard
 *
 * Propósito:
 * - Renderizar una tarjeta de métrica
 *   dentro de la introducción de Programas.
 *
 * Parámetros:
 * - stat: Métrica a mostrar.
 * - index: Posición de la métrica dentro del listado.
 *
 * Regresa:
 * - Nodo visual de una tarjeta de estadística.
 */
function renderStatCard(
  stat: ProgramasIntroContent["stats"][number],
  index: number
) {
  return (
    <article key={`${stat.value}-${index}`} className={s.statCard}>
      <p className={s.statValue}>{stat.value}</p>
      <p className={s.statLabel}>{stat.label}</p>
    </article>
  );
}

/**
 * ProgramasIntroSection
 *
 * Propósito:
 * - Renderizar la sección principal de introducción
 *   de la página Programas.
 * - Mostrar un bloque visual con gradiente azul,
 *   título, descripción y métricas destacadas.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function ProgramasIntroSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.glowTop} aria-hidden="true" />
      <div className={s.glowCenter} aria-hidden="true" />
      <div className={s.glowBottom} aria-hidden="true" />

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