/**
 * Representa la información detallada de un programa.
 */
export interface ProgramDetails {
  requisitos: string[];
  acuerdos: {
    description: string;
    certificateImage: string;
  };
  costos: string[];
}

/**
 * Representa un programa individual.
 */
export interface Program {
  id: string;
  title: string;
  price: string;
  bullets: string[];
  details: ProgramDetails;
  highlighted?: boolean;
}

/**
 * Representa la sección completa de programas.
 */
export interface ProgramsContent {
  sectionTitle: string;
  sectionSubtitle: string;
  programs: Program[];
}