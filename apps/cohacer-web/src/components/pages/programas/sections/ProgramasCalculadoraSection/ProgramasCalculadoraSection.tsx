// src/components/pages/programas/sections/ProgramasCalculadoraSection/ProgramasCalculadoraSection.tsx

import { useMemo, useState } from "react";
import type { ChangeEvent } from "react";
import type {
  ProgramasCalculadoraContent,
  ProgramasCalculadoraPaymentOption,
  ProgramasCalculadoraProgram,
} from "@/types/pages/programas/sections/programasCalculadora.section";
import { programasCalculadoraSectionStyles as s } from "./ProgramasCalculadoraSection.styles";

type Props = {
  id: string;
  content: ProgramasCalculadoraContent;
};

type InvestmentSummary = {
  programCost: number;
  enrollmentFee: number;
  interestAmount: number;
  totalInvestment: number;
  monthlyPayment: number;
};

/**
 * resolveDefaultEducationalLevelId
 *
 * Propósito:
 * - Obtener el id inicial del nivel educativo
 *   para poblar el primer selector.
 *
 * Parámetros:
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Id del primer nivel disponible o cadena vacía.
 */
function resolveDefaultEducationalLevelId(content: ProgramasCalculadoraContent) {
  return content.educationalLevels[0]?.id ?? "";
}

/**
 * resolveDefaultPaymentOptionId
 *
 * Propósito:
 * - Obtener el id inicial de la modalidad de pago
 *   para poblar el selector correspondiente.
 *
 * Parámetros:
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Id de la primera modalidad disponible o cadena vacía.
 */
function resolveDefaultPaymentOptionId(content: ProgramasCalculadoraContent) {
  return content.paymentOptions[0]?.id ?? "";
}

/**
 * getProgramsByEducationalLevel
 *
 * Propósito:
 * - Filtrar los programas disponibles para un
 *   nivel educativo específico.
 *
 * Parámetros:
 * - programs: Lista completa de programas.
 * - educationalLevelId: Id del nivel seleccionado.
 *
 * Regresa:
 * - Lista filtrada de programas.
 */
function getProgramsByEducationalLevel(
  programs: ProgramasCalculadoraProgram[],
  educationalLevelId: string
) {
  return programs.filter(
    (program) => program.educationalLevelId === educationalLevelId
  );
}

/**
 * getProgramById
 *
 * Propósito:
 * - Obtener el programa actualmente seleccionado
 *   a partir de su identificador.
 *
 * Parámetros:
 * - programs: Lista de programas disponibles.
 * - programId: Id del programa seleccionado.
 *
 * Regresa:
 * - Programa encontrado o null.
 */
function getProgramById(
  programs: ProgramasCalculadoraProgram[],
  programId: string
) {
  return programs.find((program) => program.id === programId) ?? null;
}

/**
 * getPaymentOptionById
 *
 * Propósito:
 * - Obtener la modalidad de pago seleccionada
 *   a partir de su identificador.
 *
 * Parámetros:
 * - paymentOptions: Lista de modalidades disponibles.
 * - paymentOptionId: Id de la modalidad seleccionada.
 *
 * Regresa:
 * - Modalidad encontrada o null.
 */
function getPaymentOptionById(
  paymentOptions: ProgramasCalculadoraPaymentOption[],
  paymentOptionId: string
) {
  return (
    paymentOptions.find((paymentOption) => paymentOption.id === paymentOptionId) ??
    null
  );
}

/**
 * buildInvestmentSummary
 *
 * Propósito:
 * - Calcular el resumen económico total del programa
 *   considerando inscripción e interés.
 *
 * Parámetros:
 * - program: Programa seleccionado.
 * - paymentOption: Modalidad de pago seleccionada.
 *
 * Regresa:
 * - Resumen numérico de inversión.
 */
function buildInvestmentSummary(
  program: ProgramasCalculadoraProgram,
  paymentOption: ProgramasCalculadoraPaymentOption
): InvestmentSummary {
  const subtotal = program.basePrice + program.enrollmentFee;
  const interestAmount = subtotal * paymentOption.interestRate;
  const totalInvestment = subtotal + interestAmount;
  const monthlyPayment = totalInvestment / paymentOption.months;

  return {
    programCost: program.basePrice,
    enrollmentFee: program.enrollmentFee,
    interestAmount,
    totalInvestment,
    monthlyPayment,
  };
}

/**
 * formatCurrency
 *
 * Propósito:
 * - Dar formato monetario en MXN a una cantidad numérica.
 *
 * Parámetros:
 * - value: Cantidad a formatear.
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
 * renderSummary
 *
 * Propósito:
 * - Renderizar el contenido visual del resumen
 *   de inversión con base en la selección actual.
 *
 * Parámetros:
 * - content: Contenido tipado de la sección.
 * - selectedProgram: Programa seleccionado.
 * - summary: Resumen calculado.
 *
 * Regresa:
 * - Bloque visual del resumen o estado vacío.
 */
function renderSummary(
  content: ProgramasCalculadoraContent,
  selectedProgram: ProgramasCalculadoraProgram | null,
  summary: InvestmentSummary | null
) {
  if (!selectedProgram || !summary) {
    return <div className={s.summaryEmpty}>{content.labels.summaryEmpty}</div>;
  }

  return (
    <div className={s.summaryCard}>
      <p className={s.summaryProgram}>{selectedProgram.label}</p>

      <div className={s.summaryList}>
        <div className={s.summaryRow}>
          <span className={s.summaryLabel}>{content.labels.programCost}</span>
          <span className={s.summaryValue}>{formatCurrency(summary.programCost)}</span>
        </div>

        <div className={s.summaryRow}>
          <span className={s.summaryLabel}>{content.labels.enrollmentFee}</span>
          <span className={s.summaryValue}>
            {formatCurrency(summary.enrollmentFee)}
          </span>
        </div>

        <div className={s.summaryRow}>
          <span className={s.summaryLabel}>{content.labels.interest}</span>
          <span className={s.summaryValue}>
            {formatCurrency(summary.interestAmount)}
          </span>
        </div>

        <div className={s.summaryTotalRow}>
          <span className={s.summaryTotalLabel}>
            {content.labels.totalInvestment}
          </span>
          <span className={s.summaryTotalValue}>
            {formatCurrency(summary.totalInvestment)}
          </span>
        </div>

        <div className={s.summaryRow}>
          <span className={s.summaryLabel}>{content.labels.monthlyPayment}</span>
          <span className={s.summaryValue}>
            {formatCurrency(summary.monthlyPayment)}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * ProgramasCalculadoraSection
 *
 * Propósito:
 * - Renderizar una calculadora de inversión para que
 *   el usuario seleccione nivel, programa y modalidad
 *   de pago.
 * - Mostrar dinámicamente el resumen de inversión.
 *
 * Parámetros:
 * - id: Ancla de la sección.
 * - content: Contenido tipado de la sección.
 *
 * Regresa:
 * - Sección renderizada.
 */
export function ProgramasCalculadoraSection({ id, content }: Props) {
  const [selectedEducationalLevelId, setSelectedEducationalLevelId] = useState(
    resolveDefaultEducationalLevelId(content)
  );

  const [selectedProgramId, setSelectedProgramId] = useState("");
  const [selectedPaymentOptionId, setSelectedPaymentOptionId] = useState(
    resolveDefaultPaymentOptionId(content)
  );

  const availablePrograms = useMemo(() => {
    return getProgramsByEducationalLevel(
      content.programs,
      selectedEducationalLevelId
    );
  }, [content.programs, selectedEducationalLevelId]);

  const selectedProgram = useMemo(() => {
    return getProgramById(availablePrograms, selectedProgramId);
  }, [availablePrograms, selectedProgramId]);

  const selectedPaymentOption = useMemo(() => {
    return getPaymentOptionById(content.paymentOptions, selectedPaymentOptionId);
  }, [content.paymentOptions, selectedPaymentOptionId]);

  const summary = useMemo(() => {
    if (!selectedProgram || !selectedPaymentOption) {
      return null;
    }

    return buildInvestmentSummary(selectedProgram, selectedPaymentOption);
  }, [selectedPaymentOption, selectedProgram]);

  /**
   * handleEducationalLevelChange
   *
   * Propósito:
   * - Actualizar el nivel educativo actual y reiniciar
   *   la selección del programa específico.
   *
   * Parámetros:
   * - event: Evento del selector de nivel educativo.
   */
  function handleEducationalLevelChange(
    event: ChangeEvent<HTMLSelectElement>
  ) {
    setSelectedEducationalLevelId(event.target.value);
    setSelectedProgramId("");
  }

  /**
   * handleProgramChange
   *
   * Propósito:
   * - Actualizar el programa específico seleccionado.
   *
   * Parámetros:
   * - event: Evento del selector de programa.
   */
  function handleProgramChange(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedProgramId(event.target.value);
  }

  /**
   * handlePaymentOptionChange
   *
   * Propósito:
   * - Actualizar la modalidad de pago seleccionada.
   *
   * Parámetros:
   * - event: Evento del selector de modalidad.
   */
  function handlePaymentOptionChange(
    event: ChangeEvent<HTMLSelectElement>
  ) {
    setSelectedPaymentOptionId(event.target.value);
  }

  /**
   * handleRequestDetails
   *
   * Propósito:
   * - Redirigir al usuario a la ruta configurada para
   *   solicitar información detallada.
   *
   * Información adicional:
   * - Solo ejecuta la navegación cuando existe
   *   un programa seleccionado.
   */
  function handleRequestDetails() {
    if (!content.ctaHref || !selectedProgram) {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    window.location.assign(content.ctaHref);
  }

  return (
    <section id={id} className={s.section}>
      <div className={s.wrap}>
        <header className={s.header}>
          <h2 className={s.title}>{content.title}</h2>
          <p className={s.description}>{content.description}</p>
        </header>

        <div className={s.panel}>
          <div className={s.panelGrid}>
            <div className={s.column}>
              <h3 className={s.columnTitle}>Selecciona tu Programa</h3>

              <div className={s.fieldGroup}>
                <label className={s.fieldLabel} htmlFor={`${id}-educational-level`}>
                  {content.labels.educationalLevel}
                </label>

                <select
                  id={`${id}-educational-level`}
                  className={s.select}
                  value={selectedEducationalLevelId}
                  onChange={handleEducationalLevelChange}
                >
                  {content.educationalLevels.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={s.fieldGroup}>
                <label className={s.fieldLabel} htmlFor={`${id}-program`}>
                  {content.labels.program}
                </label>

                <select
                  id={`${id}-program`}
                  className={s.select}
                  value={selectedProgramId}
                  onChange={handleProgramChange}
                >
                  <option value="">{content.labels.programPlaceholder}</option>

                  {availablePrograms.map((program) => (
                    <option key={program.id} value={program.id}>
                      {program.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={s.fieldGroup}>
                <label className={s.fieldLabel} htmlFor={`${id}-payment-option`}>
                  {content.labels.paymentMethod}
                </label>

                <select
                  id={`${id}-payment-option`}
                  className={s.select}
                  value={selectedPaymentOptionId}
                  onChange={handlePaymentOptionChange}
                >
                  {content.paymentOptions.map((paymentOption) => (
                    <option key={paymentOption.id} value={paymentOption.id}>
                      {paymentOption.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={s.column}>
              <h3 className={s.columnTitle}>{content.labels.summaryTitle}</h3>

              {renderSummary(content, selectedProgram, summary)}

              <button
                type="button"
                className={s.ctaButton}
                onClick={handleRequestDetails}
                disabled={!selectedProgram}
              >
                {content.ctaLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}