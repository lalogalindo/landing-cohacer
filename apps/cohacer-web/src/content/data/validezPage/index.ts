// src/content/data/validezPage/index.ts
import rawSepValidity from "./sepValidity.json";
import type { SepValidityContent } from "@/types/pages/validez/sections/sepValidity.section";

import rawAcuerdo286 from "./acuerdo286.json";
import type { Acuerdo286Content } from "@/types/pages/validez/sections/acuerdo286.section";

import rawCedulaProcess from "./cedulaProcess.json";
import type { CedulaProcessContent } from "@/types/pages/validez/sections/cedulaProcess.section";

import rawMythsReality from "./mythsReality.json";
import type { MythsRealityContent } from "@/types/pages/validez/sections/mythsReality.section";

import rawVerificationTransparency from "./verificationTransparency.json";
import type { VerificationTransparencyContent } from "@/types/pages/validez/sections/verificationTransparency.section";

import rawDirectContactCta from "./directContactCta.json";
import type { DirectContactContent } from "@/types/pages/validez/sections/directContact.section";

/**
 * sepValidityContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   "Validez Oficial SEP".
 *
 * Información adicional:
 * - Este archivo actúa como wrapper tipado del JSON puro.
 */
export const sepValidityContent: SepValidityContent = rawSepValidity;

/**
 * acuerdo286Content
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   del proceso de obtención de cédula profesional.
 *
 * Información adicional:
 * - Este archivo actúa como wrapper tipado del JSON puro.
 */
export const acuerdo286Content: Acuerdo286Content = rawAcuerdo286;

/**
 * cedulaProcessContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   del proceso de obtención de cédula profesional.
 *
 * Información adicional:
 * - Este archivo actúa como wrapper tipado del JSON puro.
 */
export const cedulaProcessContent: CedulaProcessContent = rawCedulaProcess;

/**
 * mythsRealityContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   de mitos y realidades.
 *
 * Información adicional:
 * - Este archivo actúa como wrapper tipado del JSON puro.
 */
export const mythsRealityContent: MythsRealityContent = rawMythsReality;

/**
 * verificationTransparencyContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   "Verificación y Transparencia Total".
 *
 * Información adicional:
 * - Este archivo actúa como wrapper tipado del JSON puro.
 */
export const verificationTransparencyContent: VerificationTransparencyContent = rawVerificationTransparency;

/**
 * directContactContent
 *
 * Propósito:
 * - Exponer el contenido tipado de la sección
 *   CTA de contacto directo.
 */
export const directContactContent: DirectContactContent = rawDirectContactCta;