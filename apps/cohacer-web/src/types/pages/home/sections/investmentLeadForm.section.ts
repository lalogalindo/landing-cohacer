import type { Section } from "@/types/section";

/**
 * InvestmentLeadFormField
 *
 * Propósito:
 * - Definir un campo de formulario para la sección unificada
 *   de inversión y captura de lead.
 */
export type InvestmentLeadFormField =
  | {
      type: "text";
      key: "fullName" | "email" | "phone";
      label: string;
      required?: boolean;
      placeholder?: string;
      inputMode?: "text" | "email" | "tel";
    }
  | {
      type: "select";
      key: "program" | "source";
      label: string;
      required?: boolean;
      options: string[];
    };

/**
 * InvestmentLeadFormInvestmentContent
 *
 * Propósito:
 * - Representar el bloque superior de inversión.
 */
export type InvestmentLeadFormInvestmentContent = {
  amount: string;
  label: string;
};

/**
 * InvestmentLeadFormFormContent
 *
 * Propósito:
 * - Representar el bloque inferior con texto y formulario.
 */
export type InvestmentLeadFormFormContent = {
  title: string;
  subtitle?: string;
  submitLabel: string;
  privacyText: string;
  privacyHref: string;
  fields: InvestmentLeadFormField[];
};

/**
 * InvestmentLeadFormContent
 *
 * Propósito:
 * - Contenido completo de la sección unificada.
 */
export type InvestmentLeadFormContent = {
  investment: InvestmentLeadFormInvestmentContent;
  form: InvestmentLeadFormFormContent;
  title: string;
};

/**
 * InvestmentLeadFormSection
 *
 * Propósito:
 * - Sección renderizable del Home para mostrar CTA de inversión
 *   y formulario en un mismo fondo visual.
 */
export type InvestmentLeadFormSection = Section<
  "investmentLeadForm",
  InvestmentLeadFormContent
>;