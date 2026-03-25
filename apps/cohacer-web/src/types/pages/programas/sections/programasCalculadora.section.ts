// src/types/pages/programas/sections/programasCalculadora.section.ts

/**
 * ProgramasCalculadoraEducationalLevel
 *
 * Propósito:
 * - Representar un nivel educativo disponible
 *   dentro de la calculadora.
 */
export type ProgramasCalculadoraEducationalLevel = {
  id: string;
  label: string;
};

/**
 * ProgramasCalculadoraProgram
 *
 * Propósito:
 * - Representar un programa específico que
 *   pertenece a un nivel educativo.
 */
export type ProgramasCalculadoraProgram = {
  id: string;
  educationalLevelId: string;
  label: string;
  basePrice: number;
  enrollmentFee: number;
};

/**
 * ProgramasCalculadoraPaymentOption
 *
 * Propósito:
 * - Representar una modalidad de pago disponible
 *   para calcular la inversión total.
 */
export type ProgramasCalculadoraPaymentOption = {
  id: string;
  label: string;
  months: number;
  interestRate: number;
};

/**
 * ProgramasCalculadoraLabels
 *
 * Propósito:
 * - Agrupar los textos configurables de interfaz
 *   usados en la calculadora.
 */
export type ProgramasCalculadoraLabels = {
  educationalLevel: string;
  program: string;
  programPlaceholder: string;
  paymentMethod: string;
  summaryTitle: string;
  summaryEmpty: string;
  programCost: string;
  enrollmentFee: string;
  interest: string;
  totalInvestment: string;
  monthlyPayment: string;
};

/**
 * ProgramasCalculadoraContent
 *
 * Propósito:
 * - Representar el contenido tipado de la sección
 *   de calculadora de inversión.
 */
export type ProgramasCalculadoraContent = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  educationalLevels: ProgramasCalculadoraEducationalLevel[];
  programs: ProgramasCalculadoraProgram[];
  paymentOptions: ProgramasCalculadoraPaymentOption[];
  labels: ProgramasCalculadoraLabels;
};