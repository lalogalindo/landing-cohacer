/**
 * Tipos para la sección de Programas.
 *
 * Propósito:
 * - Tipar el JSON `programs.json`.
 * - Tipar `section.content` cuando `section.type === "programs"`.
 * - Evitar casteos (`as`) al construir `content.sections`.
 */

export type ProgramCertificate = {
  src: string;
  alt?: string;
};

export type ProgramAgreements = {
  label: string;
  description?: string;
  certificate?: ProgramCertificate;
};

export type ProgramDetails = {
  requisitos: string[];
  acuerdos: ProgramAgreements;
  costos: string[];
};

export type Program = {
  id: string;
  title: string;
  price: string;
  bullets: string[];
  highlighted?: boolean;
  details: ProgramDetails;
};

export type ProgramsContent = {
  sectionTitle: string;
  sectionSubtitle?: string;
  programs: Program[];
};