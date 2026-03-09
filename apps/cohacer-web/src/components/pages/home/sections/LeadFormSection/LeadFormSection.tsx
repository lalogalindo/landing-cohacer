// src/components/pages/home/sections/LeadFormSection/LeadFormSection.tsx
import * as React from "react";
import { Button } from "@cohacer/ui";
import type { LeadFormHomeContent, LeadFormField } from "@/types/pages/home/sections/leadFormHome.section";
import { leadFormStyles as s } from "./LeadFormSection.styles";

type Props = {
  id: string;
  content: LeadFormHomeContent;
};

/**
 * renderField
 *
 * Propósito:
 * - Renderizar un campo de formulario en base a su discriminante.
 *
 * Parámetros:
 * - field: Definición del campo.
 *
 * Regresa:
 * - JSX.Element del input/select.
 */
function renderField(field: LeadFormField) {
  if (field.type === "select") {
    return (
      <div className={s.field}>
        <label className={s.label}>{field.label}</label>
        <select className={s.select} defaultValue="">
          <option value="" disabled>
            Selecciona una opción
          </option>
          {field.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className={s.field}>
      <label className={s.label}>{field.label}</label>
      <input
        className={s.input}
        placeholder={field.placeholder}
        inputMode={field.inputMode}
      />
    </div>
  );
}

/**
 * LeadFormSection
 *
 * Propósito:
 * - Renderizar el bloque final azul con formulario (como en el video).
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido (JSON tipado).
 */
export function LeadFormSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <div className={s.grid}>
          <div className={s.left}>
            <h2 className={s.title}>{content.title}</h2>
            {content.subtitle ? <p className={s.subtitle}>{content.subtitle}</p> : null}
          </div>

          <div className={s.card}>
            <div className="grid gap-4">
              {content.fields.map((f) => (
                <React.Fragment key={`${f.type}-${f.key}`}>
                  {renderField(f)}
                </React.Fragment>
              ))}
            </div>

            <div className={s.submitRow}>
              <Button variant="primary" fullWidth>
                {content.submitLabel}
              </Button>
              <p className={s.privacy}>
                {content.privacyText}{" "}
                <a className={s.link} href={content.privacyHref}>
                  Aviso de Privacidad
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}