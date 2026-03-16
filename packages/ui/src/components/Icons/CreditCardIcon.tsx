import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * CreditCardIcon
 *
 * Propósito:
 * - Exponer un ícono reutilizable para representar
 *   pagos con tarjeta dentro del design system.
 *
 * Parámetros:
 * - className: Clases opcionales para tamaño, color o layout.
 *
 * Regresa:
 * - Ícono renderizado como componente React.
 */
export function CreditCardIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faCreditCard} className={cn(className)} />;
}