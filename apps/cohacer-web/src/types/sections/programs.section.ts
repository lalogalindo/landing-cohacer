// src/types/sections/programs.section.ts
import type { Section } from "@/types/section";
import type { ProgramsContent } from "@/types/programs";

/**
 * ProgramsSection
 *
 * Propósito:
 * - Sección renderizable de Programas.
 */
export type ProgramsSection = Section<"programs", ProgramsContent>;