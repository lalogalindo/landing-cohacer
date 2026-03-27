// src/components/pages/contacto/sections/ContactoFormSection/ContactoFormSection.tsx

import type { FormEvent, ReactNode } from "react";
import type {
  ContactoFormConsentField,
  ContactoFormContent,
  ContactoFormSelectField,
  ContactoFormTextField,
  ContactoFormTextareaField,
} from "@/types/pages/contacto/sections/contactoForm.section";
import { contactoFormSectionStyles as s } from "./ContactoFormSection.styles";

type Props = {
  id: string;
  content: ContactoFormContent;
};

/**
 * getBlockClassName
 *
 * Propósito:
 * - Combinar una clase base con una clase extra opcional
 *   para reutilizar wrappers del formulario sin duplicar lógica.
 *
 * Parámetros:
 * - baseClassName: Clase base obligatoria.
 * - extraClassName: Clase adicional opcional.
 *
 * Regresa:
 * - Cadena final de clases CSS.
 */
function getBlockClassName(
  baseClassName: string,
  extraClassName?: string,
) {
  return extraClassName
    ? `${baseClassName} ${extraClassName}`
    : baseClassName;
}

/**
 * handleSubmit
 *
 * Propósito:
 * - Evitar el submit nativo del navegador mientras
 *   el formulario aún no está conectado a backend o CRM.
 *
 * Parámetros:
 * - event: Evento de envío del formulario.
 */
function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

/**
 * renderFieldLabel
 *
 * Propósito:
 * - Renderizar el label de un campo del formulario
 *   incluyendo su marcador visual de obligatoriedad.
 *
 * Parámetros:
 * - label: Texto visible del label.
 * - required: Indica si el campo es obligatorio.
 *
 * Regresa:
 * - Label renderizado en formato JSX.
 */
function renderFieldLabel(label: string, required?: boolean) {
  return (
    <>
      {label}
      {required ? <span className={s.requiredMark}> *</span> : null}
    </>
  );
}

/**
 * renderTextInput
 *
 * Propósito:
 * - Renderizar un campo de texto simple dentro del formulario.
 *
 * Parámetros:
 * - field: Configuración tipada del campo.
 * - wrapperClassName: Clases opcionales para el contenedor del campo.
 *
 * Regresa:
 * - Campo input renderizado.
 */
function renderTextInput(
  field: ContactoFormTextField,
  wrapperClassName?: string,
) {
  const inputId = field.name;

  return (
    <div className={getBlockClassName(s.fieldWrapper, wrapperClassName)}>
      <label htmlFor={inputId} className={s.label}>
        {renderFieldLabel(field.label, field.required)}
      </label>

      <input
        id={inputId}
        name={field.name}
        type={field.type}
        placeholder={field.placeholder}
        required={field.required}
        className={s.input}
      />
    </div>
  );
}

/**
 * renderSelectInput
 *
 * Propósito:
 * - Renderizar un campo select dentro del formulario.
 *
 * Parámetros:
 * - field: Configuración tipada del campo select.
 * - wrapperClassName: Clases opcionales para el contenedor del campo.
 *
 * Regresa:
 * - Campo select renderizado.
 */
function renderSelectInput(
  field: ContactoFormSelectField,
  wrapperClassName?: string,
) {
  const inputId = field.name;

  return (
    <div className={getBlockClassName(s.fieldWrapper, wrapperClassName)}>
      <label htmlFor={inputId} className={s.label}>
        {renderFieldLabel(field.label, field.required)}
      </label>

      <select
        id={inputId}
        name={field.name}
        defaultValue=""
        required={field.required}
        className={s.select}
      >
        <option value="" disabled>
          {field.placeholder}
        </option>

        {field.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

/**
 * renderTextareaInput
 *
 * Propósito:
 * - Renderizar un campo de texto multilínea
 *   dentro del formulario.
 *
 * Parámetros:
 * - field: Configuración tipada del textarea.
 * - wrapperClassName: Clases opcionales para el contenedor del campo.
 *
 * Regresa:
 * - Campo textarea renderizado.
 */
function renderTextareaInput(
  field: ContactoFormTextareaField,
  wrapperClassName?: string,
) {
  const inputId = field.name;

  return (
    <div className={getBlockClassName(s.fieldWrapper, wrapperClassName)}>
      <label htmlFor={inputId} className={s.label}>
        {renderFieldLabel(field.label, field.required)}
      </label>

      <textarea
        id={inputId}
        name={field.name}
        rows={field.rows ?? 5}
        placeholder={field.placeholder}
        required={field.required}
        className={s.textarea}
      />
    </div>
  );
}

/**
 * renderConsentText
 *
 * Propósito:
 * - Resolver el texto visual de un checkbox de consentimiento,
 *   incluyendo un enlace opcional embebido.
 *
 * Parámetros:
 * - field: Configuración tipada del consentimiento.
 *
 * Regresa:
 * - Contenido renderizable del texto del consentimiento.
 */
function renderConsentText(field: ContactoFormConsentField): ReactNode {
  if (field.label) {
    return field.label;
  }

  return (
    <>
      {field.labelPrefix ? `${field.labelPrefix} ` : null}

      {field.linkLabel && field.linkHref ? (
        <a href={field.linkHref} className={s.checkboxLink}>
          {field.linkLabel}
        </a>
      ) : null}

      {field.labelSuffix ? ` ${field.labelSuffix}` : null}
    </>
  );
}

/**
 * renderConsentField
 *
 * Propósito:
 * - Renderizar un checkbox de consentimiento
 *   dentro del formulario.
 *
 * Parámetros:
 * - field: Configuración tipada del checkbox.
 * - wrapperClassName: Clases opcionales para el contenedor del campo.
 *
 * Regresa:
 * - Checkbox renderizado.
 */
function renderConsentField(
  field: ContactoFormConsentField,
  wrapperClassName?: string,
) {
  const inputId = field.name;

  return (
    <div className={getBlockClassName(s.checkboxRow, wrapperClassName)}>
      <input
        id={inputId}
        name={field.name}
        type="checkbox"
        required={field.required}
        className={s.checkbox}
      />

      <label htmlFor={inputId} className={s.checkboxLabel}>
        {renderConsentText(field)}
        {field.required ? <span className={s.requiredMark}> *</span> : null}
      </label>
    </div>
  );
}

/**
 * ContactoFormSection
 *
 * Propósito:
 * - Renderizar la sección de formulario de la página Contacto.
 * - Mostrar encabezado, campos del formulario, consentimientos
 *   y CTA principal de evaluación gratuita.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function ContactoFormSection({ id, content }: Props) {
  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
          <p className={s.description}>{content.description}</p>
        </header>

        <div className={s.card}>
          <form className={s.form} onSubmit={handleSubmit}>
            {renderTextInput(content.firstNameField)}
            {renderTextInput(content.lastNameField)}

            {renderTextInput(content.emailField)}
            {renderTextInput(content.phoneField)}

            {renderSelectInput(content.ageField)}
            {renderSelectInput(content.educationLevelField)}

            {renderSelectInput(content.programField, s.fullWidth)}
            {renderSelectInput(content.experienceField, s.fullWidth)}

            {renderTextInput(content.workAreaField, s.fullWidth)}
            {renderTextInput(content.currentPositionField, s.fullWidth)}

            {renderTextareaInput(content.goalsField, s.fullWidth)}
            {renderSelectInput(content.timelineField, s.fullWidth)}

            {renderConsentField(content.privacyConsentField, s.fullWidth)}
            {renderConsentField(content.marketingConsentField, s.fullWidth)}

            <div className={s.actions}>
              <button type="submit" className={s.submitButton}>
                {content.submitLabel}
              </button>

              <p className={s.disclaimer}>{content.disclaimer}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}