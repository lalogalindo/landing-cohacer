import type { SepValidityContent } from "@/types/pages/validez/sections/sepValidity.section";
import type { Acuerdo286Content } from "@/types/pages/validez/sections/acuerdo286.section";
import type { CedulaProcessContent } from "@/types/pages/validez/sections/cedulaProcess.section";
import type { MythsRealityContent } from "@/types/pages/validez/sections/mythsReality.section";
import type { VerificationTransparencyContent } from "@/types/pages/validez/sections/verificationTransparency.section";
import type { DirectContactContent } from "@/types/pages/validez/sections/directContact.section";

/**
 * Sección SEP Validity.
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección principal
 *   con su discriminante e identificador.
 */
export type SepValiditySection = {
  type: "sepValidity";
  id: string;
  content: SepValidityContent;
};

/**
 * Sección Acuerdo 286.
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección informativa
 *   del Acuerdo 286 con su discriminante e identificador.
 */
export type Acuerdo286Section = {
  type: "acuerdo286";
  id: string;
  content: Acuerdo286Content;
};

/**
 * CedulaProcessSection
 *
 * Propósito:
 * - Envolver el contenido tipado de la sección
 *   del proceso de obtención de cédula con su discriminante.
 */
export type CedulaProcessSection = {
  type: "cedulaProcess";
  id: string;
  content: CedulaProcessContent;
};

/**
 * MythsRealitySection
 *
 * Propósito:
 * - Representar la sección de mitos y realidades
 *   dentro de la unión discriminada de Validez.
 */
export type MythsRealitySection = {
  type: "mythsReality";
  id: string;
  content: MythsRealityContent;
};

/**
 * VerificationTransparencySection
 *
 * Propósito:
 * - Representar la sección de verificación y transparencia
 *   dentro de la unión discriminada de la página.
 */
export type VerificationTransparencySection = {
  type: "verificationTransparency";
  id: string;
  content: VerificationTransparencyContent;
};

/**
 * Wrapper de la sección CTA de contacto directo.
 */
export type DirectContactSection = {
  type: "directContactCta";
  id: string;
  content: DirectContactContent;
};

/**
 * Unión discriminada de secciones de la página de validez.
 *
 * Propósito:
 * - Permitir renderizado predecible con `switch(section.type)`.
 */
export type ValidezSection =
  | SepValiditySection
  | Acuerdo286Section
  | CedulaProcessSection
  | MythsRealitySection
  | VerificationTransparencySection
  | DirectContactSection;