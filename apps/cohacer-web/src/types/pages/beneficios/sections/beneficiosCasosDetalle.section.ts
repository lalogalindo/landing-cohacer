// src/types/pages/beneficios/sections/beneficiosCasosDetalle.section.ts

/**
 * BeneficiosCasosDetalleTone
 *
 * Propósito:
 * - Restringir los tonos visuales permitidos
 *   para acentos, avatars y métricas.
 */
export type BeneficiosCasosDetalleTone = string;

/**
 * BeneficiosCasosDetalleMetric
 *
 * Propósito:
 * - Representar una métrica destacada
 *   dentro del panel financiero del caso.
 */
export type BeneficiosCasosDetalleMetric = {
  label: string;
  value: string;
  tone: BeneficiosCasosDetalleTone;
};

/**
 * BeneficiosCasosDetalleVideo
 *
 * Propósito:
 * - Representar el bloque opcional de video
 *   de un caso de éxito detallado.
 */
export type BeneficiosCasosDetalleVideo = {
  url: string;
  thumbnailSrc: string;
  label: string;
};

/**
 * BeneficiosCasosDetalleItem
 *
 * Propósito:
 * - Representar un caso individual dentro
 *   de la sección de casos detallados.
 */
export type BeneficiosCasosDetalleItem = {
  initials: string;
  accentTone: BeneficiosCasosDetalleTone;
  avatarTone: BeneficiosCasosDetalleTone;
  name: string;
  profession: string;
  age: string;
  organization: string;
  historyTitle: string;
  storyParagraphs: string[];
  quote: string;
  resultsTitle: string;
  results: string[];
  financialTitle: string;
  previousLabel: string;
  previousValue: string;
  currentLabel: string;
  currentValue: string;
  currentCaption?: string;
  growthMetric: BeneficiosCasosDetalleMetric;
  roiMetric: BeneficiosCasosDetalleMetric;
  video?: BeneficiosCasosDetalleVideo;
};

/**
 * BeneficiosCasosDetalleContent
 *
 * Propósito:
 * - Representar el contenido tipado de la
 *   sección de casos de éxito detallados.
 */
export type BeneficiosCasosDetalleContent = {
  title: string;
  cases: BeneficiosCasosDetalleItem[];
};