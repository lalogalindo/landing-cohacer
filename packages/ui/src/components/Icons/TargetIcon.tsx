import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * TargetIcon
 *
 * Propósito:
 * - Exponer un ícono reutilizable para representar
 *   objetivos, precisión o enfoque.
 *
 * Parámetros:
 * - className: Clases opcionales para tamaño, color o layout.
 *
 * Regresa:
 * - Ícono renderizado como componente React.
 */
export function TargetIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faBullseye} className={cn(className)} />;
}