// src/types/pages/contacto/sections/contactoForm.section.ts

/**
 * ContactoFormInputType
 *
 * Propósito:
 * - Restringir los tipos válidos de input
 *   usados por el formulario de Contacto.
 */
export type ContactoFormInputType = string;

/**
 * ContactoFormOption
 *
 * Propósito:
 * - Representar una opción seleccionable
 *   dentro de un campo tipo select.
 */
export type ContactoFormOption = {
  value: string;
  label: string;
};

/**
 * ContactoFormTextField
 *
 * Propósito:
 * - Representar la configuración tipada
 *   de un campo de texto simple.
 */
export type ContactoFormTextField = {
  name: string;
  label: string;
  placeholder: string;
  type: ContactoFormInputType;
  required?: boolean;
};

/**
 * ContactoFormSelectField
 *
 * Propósito:
 * - Representar la configuración tipada
 *   de un campo select.
 */
export type ContactoFormSelectField = {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  options: ContactoFormOption[];
};

/**
 * ContactoFormTextareaField
 *
 * Propósito:
 * - Representar la configuración tipada
 *   de un campo de texto multilínea.
 */
export type ContactoFormTextareaField = {
  name: string;
  label: string;
  placeholder: string;
  rows?: number;
  required?: boolean;
};

/**
 * ContactoFormConsentField
 *
 * Propósito:
 * - Representar la configuración tipada
 *   de un checkbox de consentimiento.
 *
 * Información adicional:
 * - Puede renderizar texto plano con `label`
 *   o un texto compuesto con prefijo, enlace y sufijo.
 */
export type ContactoFormConsentField = {
  name: string;
  required?: boolean;
  label?: string;
  labelPrefix?: string;
  linkLabel?: string;
  linkHref?: string;
  labelSuffix?: string;
};

/**
 * ContactoFormContent
 *
 * Propósito:
 * - Representar el contenido tipado de la sección
 *   de formulario de la página Contacto.
 */
export type ContactoFormContent = {
  title: string;
  description: string;
  firstNameField: ContactoFormTextField;
  lastNameField: ContactoFormTextField;
  emailField: ContactoFormTextField;
  phoneField: ContactoFormTextField;
  ageField: ContactoFormSelectField;
  educationLevelField: ContactoFormSelectField;
  programField: ContactoFormSelectField;
  experienceField: ContactoFormSelectField;
  workAreaField: ContactoFormTextField;
  currentPositionField: ContactoFormTextField;
  goalsField: ContactoFormTextareaField;
  timelineField: ContactoFormSelectField;
  privacyConsentField: ContactoFormConsentField;
  marketingConsentField: ContactoFormConsentField;
  submitLabel: string;
  disclaimer: string;
};