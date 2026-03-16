import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * ShieldIcon
 *
 * Propósito:
 * - Exponer un ícono reutilizable para representar
 *   seguridad, protección o confianza.
 *
 * Parámetros:
 * - className: Clases opcionales para tamaño, color o layout.
 *
 * Regresa:
 * - Ícono renderizado como componente React.
 */
export function ShieldIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faShieldHalved} className={cn(className)} />;
}