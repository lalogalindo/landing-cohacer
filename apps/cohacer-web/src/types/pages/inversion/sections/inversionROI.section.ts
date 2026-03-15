/**
 * InversionROISalaryOption
 *
 * Propósito:
 * - Representar una opción sugerida de salario
 *   para la calculadora.
 */
export type InversionROISalaryOption = {
  label: string;
  value: number;
};

/**
 * InversionROIInvestmentOption
 *
 * Propósito:
 * - Representar una opción de inversión disponible
 *   para el cálculo de retorno.
 */
export type InversionROIInvestmentOption = {
  label: string;
  amount: number;
  description?: string;
};

/**
 * InversionROIResultMetric
 *
 * Propósito:
 * - Restringir los identificadores válidos de métricas
 *   calculadas por la sección.
 */
export type InversionROIResultMetric =
  | "newSalaryMonthly"
  | "recoveryMonths"
  | "roiOneYear"
  | "roiFiveYears";

/**
 * InversionROIResultTone
 *
 * Propósito:
 * - Restringir los tonos visuales permitidos
 *   en las tarjetas de resultado.
 */
export type InversionROIResultTone = "info" | "success" | "purple" | "warning";

/**
 * InversionROIResultCard
 *
 * Propósito:
 * - Representar la configuración visual de una tarjeta
 *   de resultados.
 */
export type InversionROIResultCard = {
  metric: InversionROIResultMetric;
  label: string;

  /**
   * Clase de Font Awesome
   * Ejemplo:
   * - fa-solid fa-briefcase
   * - fa-solid fa-chart-line
   */
  icon: string;

  tone: InversionROIResultTone;
};

/**
 * InversionROISalaryInput
 *
 * Propósito:
 * - Representar la configuración del input de salario.
 */
export type InversionROISalaryInput = {
  placeholder: string;
  min: number;
  max: number;
  step: number;
};

/**
 * InversionROIContent
 *
 * Propósito:
 * - Representar el contenido tipado de la sección
 *   Calculadora ROI.
 */
export type InversionROIContent = {
  title: string;
  description?: string;
  formTitle: string;
  resultsTitle: string;
  salaryLabel: string;
  expectedIncreaseLabel: string;
  investmentLabel: string;
  buttonLabel: string;
  salaryInput: InversionROISalaryInput;
  salaryOptions: InversionROISalaryOption[];
  expectedIncreaseOptions: number[];
  investmentOptions: InversionROIInvestmentOption[];
  resultCards: InversionROIResultCard[];
};