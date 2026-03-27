// packages/ui/src/components/Icons/BullseyeIcon.tsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * BullseyeIcon
 *
 * Propósito:
 * - Representar precisión, cumplimiento de objetivos
 *   o satisfacción dentro del sistema de diseño.
 *
 * Parámetros:
 * - className: Clases opcionales para tamaño, color
 *   o ajustes visuales.
 *
 * Regresa:
 * - Ícono de objetivo renderizado con Font Awesome.
 */
export function BullseyeIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faBullseye} className={cn(className)} />;
}