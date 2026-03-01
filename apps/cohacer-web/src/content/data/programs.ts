import type { ProgramsContent } from "@/types/programs";
import raw from "@/content/data/programs.json";

/**
 * Contenido tipado de Programas.
 *
 * Propósito:
 * - Proveer el JSON con tipado fuerte sin usar `as` en los ensambladores del sitio.
 *
 * @returns Objeto con la estructura esperada por `ProgramsContent`.
 */
export const programsContent: ProgramsContent = raw;