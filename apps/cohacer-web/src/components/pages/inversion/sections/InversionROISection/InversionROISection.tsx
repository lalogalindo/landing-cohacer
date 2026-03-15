import * as React from "react";

import type {
  InversionROIContent,
  InversionROIResultCard,
  InversionROIInvestmentOption,
  InversionROISalaryOption,
} from "@/types/pages/inversion/sections/inversionROI.section";

import {
  BriefcaseIcon,
  ClockIcon,
  ChartGrowthIcon,
  RocketIcon,
} from "@cohacer/ui";

import { inversionROISectionStyles as s } from "./InversionROISection.styles";

type Props = {
  id: string;
  content: InversionROIContent;
};

type ROIResultValues = {
  newSalaryMonthly: number;
  monthlyIncrease: number;
  recoveryMonths: number;
  roiOneYear: number;
  gainOneYear: number;
  roiFiveYears: number;
  gainFiveYears: number;
};

/**
 * parseMoney
 *
 * Propósito:
 * - Convertir un valor string o numérico a número entero utilizable
 *   para cálculos monetarios.
 *
 * Parámetros:
 * - value: Valor de entrada a normalizar.
 *
 * Regresa:
 * - Número entero.
 *
 * Información adicional:
 * - Elimina símbolos de moneda, comas y espacios.
 * - Si el valor no es válido, regresa 0.
 */
function parseMoney(value: string | number) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  const normalized = value.replace(/[^\d.-]/g, "");
  const parsed = Number(normalized);

  return Number.isFinite(parsed) ? parsed : 0;
}

/**
 * getResultIcon
 *
 * Propósito:
 * - Resolver el ícono correspondiente
 *   según la métrica del resultado.
 */
function getResultIcon(metric: InversionROIResultCard["metric"]) {
  if (metric === "recoveryMonths") {
    return ClockIcon;
  }

  if (metric === "roiOneYear") {
    return ChartGrowthIcon;
  }

  if (metric === "roiFiveYears") {
    return RocketIcon;
  }

  return BriefcaseIcon;
}

/**
 * formatCurrency
 *
 * Propósito:
 * - Formatear un número como moneda MXN legible
 *   para mostrarlo en la interfaz.
 *
 * Parámetros:
 * - value: Monto numérico a formatear.
 *
 * Regresa:
 * - Texto formateado en moneda.
 */
function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * formatPercent
 *
 * Propósito:
 * - Formatear un valor numérico como porcentaje entero.
 *
 * Parámetros:
 * - value: Valor porcentual.
 *
 * Regresa:
 * - Texto con el porcentaje formateado.
 */
function formatPercent(value: number) {
  return `${Math.round(value)}%`;
}

/**
 * clampNumber
 *
 * Propósito:
 * - Limitar un número dentro de un rango permitido.
 *
 * Parámetros:
 * - value: Valor a acotar.
 * - min: Valor mínimo permitido.
 * - max: Valor máximo permitido.
 *
 * Regresa:
 * - Número ajustado al rango.
 */
function clampNumber(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/**
 * getInitialSalaryOption
 *
 * Propósito:
 * - Obtener la opción de salario inicial para poblar
 *   el estado del formulario.
 *
 * Parámetros:
 * - content: Contenido completo de la sección.
 *
 * Regresa:
 * - Opción inicial de salario.
 */
function getInitialSalaryOption(content: InversionROIContent) {
  return content.salaryOptions[0];
}

/**
 * getInitialIncreaseOption
 *
 * Propósito:
 * - Obtener el porcentaje inicial de aumento esperado.
 *
 * Parámetros:
 * - content: Contenido completo de la sección.
 *
 * Regresa:
 * - Porcentaje inicial de aumento.
 */
function getInitialIncreaseOption(content: InversionROIContent) {
  return content.expectedIncreaseOptions[0] ?? 0;
}

/**
 * getInitialInvestmentOption
 *
 * Propósito:
 * - Obtener la opción inicial de inversión para poblar
 *   el formulario.
 *
 * Parámetros:
 * - content: Contenido completo de la sección.
 *
 * Regresa:
 * - Opción inicial de inversión.
 */
function getInitialInvestmentOption(content: InversionROIContent) {
  return content.investmentOptions[0];
}

/**
 * calculateROIValues
 *
 * Propósito:
 * - Calcular los resultados principales del retorno
 *   de inversión en función del salario, el aumento esperado
 *   y la inversión seleccionada.
 *
 * Parámetros:
 * - salaryMonthly: Salario actual mensual.
 * - increasePercent: Porcentaje esperado de aumento.
 * - investmentAmount: Monto invertido en el programa.
 *
 * Regresa:
 * - Objeto con todos los valores derivados para la UI.
 */
function calculateROIValues(
  salaryMonthly: number,
  increasePercent: number,
  investmentAmount: number
): ROIResultValues {
  const safeSalary = Math.max(0, salaryMonthly);
  const safeIncrease = Math.max(0, increasePercent);
  const safeInvestment = Math.max(0, investmentAmount);

  const monthlyIncrease = safeSalary * (safeIncrease / 100);
  const newSalaryMonthly = safeSalary + monthlyIncrease;

  const recoveryMonths =
    monthlyIncrease > 0 ? Math.ceil(safeInvestment / monthlyIncrease) : 0;

  const gainOneYear = monthlyIncrease * 12 - safeInvestment;
  const gainFiveYears = monthlyIncrease * 60 - safeInvestment;

  const roiOneYear =
    safeInvestment > 0 ? (gainOneYear / safeInvestment) * 100 : 0;

  const roiFiveYears =
    safeInvestment > 0 ? (gainFiveYears / safeInvestment) * 100 : 0;

  return {
    newSalaryMonthly,
    monthlyIncrease,
    recoveryMonths,
    roiOneYear,
    gainOneYear,
    roiFiveYears,
    gainFiveYears,
  };
}

/**
 * buildResultCards
 *
 * Propósito:
 * - Construir el arreglo final de tarjetas de resultados
 *   combinando el contenido base con los valores calculados.
 *
 * Parámetros:
 * - cards: Configuración base de tarjetas.
 * - values: Resultados numéricos calculados.
 *
 * Regresa:
 * - Tarjetas listas para renderizar.
 */
function buildResultCards(
  cards: InversionROIResultCard[],
  values: ROIResultValues
) {
  return cards.map((card) => {
    if (card.metric === "newSalaryMonthly") {
      return {
        ...card,
        value: formatCurrency(values.newSalaryMonthly),
        helper: `Aumento de ${formatCurrency(values.monthlyIncrease)}/mes`,
      };
    }

    if (card.metric === "recoveryMonths") {
      return {
        ...card,
        value:
          values.recoveryMonths > 0
            ? `${values.recoveryMonths} ${
                values.recoveryMonths === 1 ? "mes" : "meses"
              }`
            : "No calculable",
        helper:
          values.recoveryMonths > 0
            ? "Tu inversión se paga sola"
            : "Se requiere un aumento mayor a 0%",
      };
    }

    if (card.metric === "roiOneYear") {
      return {
        ...card,
        value: formatPercent(values.roiOneYear),
        helper: `Ganancia: ${formatCurrency(values.gainOneYear)}`,
      };
    }

    return {
      ...card,
      value: formatPercent(values.roiFiveYears),
      helper: `Ganancia: ${formatCurrency(values.gainFiveYears)}`,
    };
  });
}

/**
 * findSalaryOptionByValue
 *
 * Propósito:
 * - Buscar una opción de salario por su valor numérico.
 *
 * Parámetros:
 * - options: Lista de opciones disponibles.
 * - value: Valor buscado.
 *
 * Regresa:
 * - Opción encontrada o la primera opción disponible.
 */
function findSalaryOptionByValue(
  options: InversionROISalaryOption[],
  value: number
) {
  return options.find((option) => option.value === value) ?? options[0];
}

/**
 * findInvestmentOptionByValue
 *
 * Propósito:
 * - Buscar una opción de inversión por su monto.
 *
 * Parámetros:
 * - options: Lista de opciones disponibles.
 * - value: Monto buscado.
 *
 * Regresa:
 * - Opción encontrada o la primera opción disponible.
 */
function findInvestmentOptionByValue(
  options: InversionROIInvestmentOption[],
  value: number
) {
  return options.find((option) => option.amount === value) ?? options[0];
}

/**
 * renderResultCard
 *
 * Propósito:
 * - Renderizar una tarjeta individual de resultado
 *   aplicando su tono visual correspondiente.
 *
 * Parámetros:
 * - card: Tarjeta de resultado a renderizar.
 *
 * Regresa:
 * - Nodo React de la tarjeta.
 */
function renderResultCard(
  card: InversionROIResultCard & {
    value: string;
    helper: string;
  }
) {
  const toneStyles = getToneStyles(card.tone);
  const Icon = getResultIcon(card.metric);
  return (
    <article key={card.metric} className={`${s.resultCard} ${toneStyles.card}`}>
      <p className={`${s.resultLabel} ${toneStyles.label}`}>
        <Icon className={s.resultIcon} />
        <span>{card.label}</span>
      </p>

      <p className={`${s.resultValue} ${toneStyles.value}`}>{card.value}</p>

      <p className={s.resultHelper}>{card.helper}</p>
    </article>
  );
}

/**
 * InversionROISection
 *
 * Propósito:
 * - Renderizar la sección de calculadora de retorno de inversión
 *   para la página de Inversión.
 * - Permitir seleccionar salario, aumento esperado e inversión.
 * - Calcular y mostrar resultados en tiempo real.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada con formulario y resultados.
 */
export function InversionROISection({ id, content }: Props) {
  const initialSalaryOption = getInitialSalaryOption(content);
  const initialIncreaseOption = getInitialIncreaseOption(content);
  const initialInvestmentOption = getInitialInvestmentOption(content);

  const [salaryValue, setSalaryValue] = React.useState<number>(
    initialSalaryOption?.value ?? 0
  );

  const [increasePercent, setIncreasePercent] = React.useState<number>(
    initialIncreaseOption
  );

  const [investmentAmount, setInvestmentAmount] = React.useState<number>(
    initialInvestmentOption?.amount ?? 0
  );

  const calculatedValues = React.useMemo(() => {
    return calculateROIValues(salaryValue, increasePercent, investmentAmount);
  }, [salaryValue, increasePercent, investmentAmount]);

  const resultCards = React.useMemo(() => {
    return buildResultCards(content.resultCards, calculatedValues);
  }, [content.resultCards, calculatedValues]);

  const selectedSalaryOption = findSalaryOptionByValue(
    content.salaryOptions,
    salaryValue
  );

  const selectedInvestmentOption = findInvestmentOptionByValue(
    content.investmentOptions,
    investmentAmount
  );

  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>

          {content.description ? (
            <p className={s.description}>{content.description}</p>
          ) : null}
        </header>

        <div className={s.panel}>
          <div className={s.formColumn}>
            <h3 className={s.columnTitle}>{content.formTitle}</h3>

            <div className={s.fieldGroup}>
              <label className={s.label} htmlFor={`${id}-salary`}>
                {content.salaryLabel}
              </label>

              <input
                id={`${id}-salary`}
                className={s.input}
                type="number"
                min={content.salaryInput.min}
                max={content.salaryInput.max}
                step={content.salaryInput.step}
                value={salaryValue}
                placeholder={content.salaryInput.placeholder}
                onChange={(event) => {
                  const nextValue = clampNumber(
                    parseMoney(event.target.value),
                    content.salaryInput.min,
                    content.salaryInput.max
                  );

                  setSalaryValue(nextValue);
                }}
              />

              {selectedSalaryOption?.label ? (
                <p className={s.fieldHint}>{selectedSalaryOption.label}</p>
              ) : null}
            </div>

            <div className={s.fieldGroup}>
              <label className={s.label} htmlFor={`${id}-increase`}>
                {content.expectedIncreaseLabel}
              </label>

              <select
                id={`${id}-increase`}
                className={s.select}
                value={increasePercent}
                onChange={(event) => {
                  setIncreasePercent(Number(event.target.value));
                }}
              >
                {content.expectedIncreaseOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}% - {option === 40 ? "Promedio" : "Escenario"}
                  </option>
                ))}
              </select>
            </div>

            <div className={s.fieldGroup}>
              <label className={s.label} htmlFor={`${id}-investment`}>
                {content.investmentLabel}
              </label>

              <select
                id={`${id}-investment`}
                className={s.select}
                value={investmentAmount}
                onChange={(event) => {
                  setInvestmentAmount(Number(event.target.value));
                }}
              >
                {content.investmentOptions.map((option) => (
                  <option key={option.amount} value={option.amount}>
                    {option.label}
                  </option>
                ))}
              </select>

              {selectedInvestmentOption?.description ? (
                <p className={s.fieldHint}>{selectedInvestmentOption.description}</p>
              ) : null}
            </div>

            <button
              type="button"
              className={s.button}
              onClick={() => {
                setSalaryValue(salaryValue);
                setIncreasePercent(increasePercent);
                setInvestmentAmount(investmentAmount);
              }}
            >
              {content.buttonLabel}
            </button>
          </div>

          <div className={s.resultsColumn}>
            <h3 className={s.columnTitle}>{content.resultsTitle}</h3>

            <div className={s.resultsGrid}>
              {resultCards.map((card) => renderResultCard(card))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * getToneStyles
 *
 * Propósito:
 * - Obtener las clases visuales correspondientes
 *   al tono de una tarjeta de resultado.
 *
 * Parámetros:
 * - tone: Tono visual configurado para la tarjeta.
 *
 * Regresa:
 * - Objeto con las clases de card, label y value.
 */
function getToneStyles(tone: "info" | "success" | "purple" | "warning") {
  if (tone === "success") {
    return {
      card: s.resultCardSuccess,
      label: s.resultLabelSuccess,
      value: s.resultValueSuccess,
    };
  }

  if (tone === "purple") {
    return {
      card: s.resultCardPurple,
      label: s.resultLabelPurple,
      value: s.resultValuePurple,
    };
  }

  if (tone === "warning") {
    return {
      card: s.resultCardWarning,
      label: s.resultLabelWarning,
      value: s.resultValueWarning,
    };
  }

  return {
    card: s.resultCardInfo,
    label: s.resultLabelInfo,
    value: s.resultValueInfo,
  };
}