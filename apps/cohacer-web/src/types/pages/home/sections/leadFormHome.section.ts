// src/types/pages/home/sections/leadFormHome.section.ts
import type { Section } from "@/types/section";

/**
 * LeadFormField
 *
 * Propósito:
 * - Definir un campo de formulario (texto o select) para Home.
 */
export type LeadFormField =
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
 * LeadFormHomeContent
 *
 * Propósito:
 * - Contenido del formulario del Home (alineado a tu JSON homePage/leadForm.json).
 */
export type LeadFormHomeContent = {
  title: string;
  subtitle?: string;
  submitLabel: string;
  privacyText: string;
  privacyHref: string;
  fields: LeadFormField[];
};

/**
 * LeadFormHomeSection
 *
 * Propósito:
 * - Sección renderizable del Home.
 *
 * Información adicional:
 * - Se llama “leadFormHome” para no chocar con tu `LeadFormSection` legacy.
 */
export type LeadFormHomeSection = Section<"leadFormHome", LeadFormHomeContent>;