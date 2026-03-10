import { Button } from "@cohacer/ui";
import type {
  InvestmentLeadFormContent,
  InvestmentLeadFormField,
} from "@/types/pages/home/sections/investmentLeadForm.section";
import { investmentLeadFormStyles as s } from "./InvestmentLeadFormSection.styles";

type Props = {
  id: string;
  content: InvestmentLeadFormContent;
};

/**
 * renderField
 *
 * Propósito:
 * - Renderizar un campo del formulario en función de su tipo.
 *
 * Parámetros:
 * - field: Definición del campo a renderizar.
 *
 * Regresa:
 * - Elemento JSX correspondiente al campo.
 */
function renderField(field: InvestmentLeadFormField) {
  if (field.type === "select") {
    return (
      <div className={s.field}>
        <label className={s.label}>{field.label}</label>
        <select className={s.select} defaultValue="">
          <option value="" disabled>
            Selecciona una opción
          </option>
          {field.options.map((opt: string) => (
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
 * getFieldSpanClassName
 *
 * Propósito:
 * - Definir si un campo debe ocupar una o dos columnas dentro del grid del formulario.
 *
 * Parámetros:
 * - field: Definición del campo a renderizar.
 *
 * Regresa:
 * - Clase utilitaria para controlar el span del campo.
 */
function getFieldSpanClassName(field: InvestmentLeadFormField) {
  if (field.key === "program" || field.key === "source") {
    return s.fieldFull;
  }

  return s.fieldHalf;
}

/**
 * InvestmentLeadFormSection
 *
 * Propósito:
 * - Renderizar en una sola sección el CTA de inversión y el formulario
 *   de contacto, compartiendo el mismo fondo visual y una composición centrada.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 */
export function InvestmentLeadFormSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.heroTitle}>{content.title}</h2>

          <div className={s.investmentBadge}>
            <p className={s.investmentBadgeTop}>
              <span className={s.badgeIcon} aria-hidden="true">
                💰
              </span>
              {content.investment.label} <span className={s.badgeAmount}>{content.investment.amount}</span>
            </p>

            {content.form.subtitle ? (
              <p className={s.investmentBadgeBottom}>{content.form.subtitle}</p>
            ) : null}
          </div>
        </header>

        <div className={s.formCard}>
          <h3 className={s.formTitle}>{content.form.title}</h3>

          <div className={s.fieldsGrid}>
            {content.form.fields.map((field: InvestmentLeadFormField) => (
              <div key={`${field.type}-${field.key}`} className={getFieldSpanClassName(field)}>
                {renderField(field)}
              </div>
            ))}
          </div>

          <div className={s.submitRow}>
            <Button variant="primary" fullWidth>
              {content.form.submitLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}