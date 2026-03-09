// src/types/sections/team.section.ts
import type { Section } from "@/types/section";
import type { TeamContent } from "@/types/team";

/**
 * TeamSection
 *
 * Propósito:
 * - Sección renderizable de Equipo.
 */
export type TeamSection = Section<"team", TeamContent>;