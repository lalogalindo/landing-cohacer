import type { TestimonialsGridContent } from "@/types/pages/home/sections/testimonialsGrid.section";
import { testimonialsGridStyles as s } from "./TestimonialsGridSection.styles";

type Props = {
  id: string;
  content: TestimonialsGridContent;
};

/**
 * Devuelve las iniciales visibles del testimonio.
 *
 * Propósito:
 * - Generar el texto que irá dentro del círculo superior izquierdo.
 *
 * Parámetros:
 * - name: Nombre completo de la persona.
 *
 * Regresa:
 * - Iniciales en mayúsculas, limitadas a dos caracteres.
 */
function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * Devuelve la clase de color del avatar según la posición.
 *
 * Propósito:
 * - Repetir el patrón visual azul, verde y morado como en el mockup.
 *
 * Parámetros:
 * - index: Posición del testimonio dentro del grid.
 *
 * Regresa:
 * - Clase de Tailwind correspondiente al color de fondo del círculo.
 */
function getAvatarTone(index: number) {
  const tones = [s.avatarBlue, s.avatarGreen, s.avatarPurple];
  return tones[index % tones.length];
}

/**
 * TestimonialsGridSection
 *
 * Propósito:
 * - Renderizar testimonios en cards con avatar circular, nombre, cargo,
 *   cita y highlight inferior, siguiendo el layout del mockup aprobado.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de testimonios.
 *
 * Regresa:
 * - Sección de testimonios renderizada.
 */
export function TestimonialsGridSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
          {content.subtitle ? <p className={s.subtitle}>{content.subtitle}</p> : null}
        </header>

        <div className={s.grid}>
          {content.items.map((t, index) => (
            <article key={`${t.name}-${t.quote.slice(0, 16)}`} className={s.card}>
              <div className={s.topRow}>
                <div className={`${s.avatar} ${getAvatarTone(index)}`}>{getInitials(t.name)}</div>

                <div className={s.personBlock}>
                  <div className={s.name}>{t.name}</div>
                  {t.role ? <div className={s.role}>{t.role}</div> : null}
                </div>
              </div>

              <p className={s.quote}>“{t.quote}”</p>

              {t.highlight ? <div className={s.highlight}>{t.highlight}</div> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}