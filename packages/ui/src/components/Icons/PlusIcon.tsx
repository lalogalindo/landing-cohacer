import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * PlusIcon
 *
 * Propósito:
 * - Exponer un ícono reutilizable para representar
 *   suma, agregados o beneficios adicionales.
 *
 * Parámetros:
 * - className: Clases opcionales para tamaño, color o layout.
 *
 * Regresa:
 * - Ícono renderizado como componente React.
 */
export function PlusIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faPlus} className={cn(className)} />;
}