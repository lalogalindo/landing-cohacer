// src/types/sections/companies.section.ts
import type { Section } from "@/types/section";
import type { CompaniesContent } from "@/types/companies";

/**
 * CompaniesSection
 *
 * Propósito:
 * - Sección renderizable de Empresas.
 */
export type CompaniesSection = Section<"companies", CompaniesContent>;