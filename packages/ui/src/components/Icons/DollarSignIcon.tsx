import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * DollarSignIcon
 *
 * Propósito:
 * - Exponer un ícono reutilizable de símbolo monetario
 *   usando Font Awesome desde el design system.
 *
 * Parámetros:
 * - className: Clases opcionales para tamaño o color.
 *
 * Regresa:
 * - Ícono renderizado como componente React.
 */
export function DollarSignIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faDollarSign} className={cn(className)} />;
}