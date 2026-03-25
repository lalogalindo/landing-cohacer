// packages/ui/src/components/Icons/CheckIcon.tsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * CheckIcon
 *
 * Propósito:
 * - Representar validación, confirmación o beneficio
 *   dentro de listas cortas del sistema.
 *
 * Parámetros:
 * - className: Clases opcionales para tamaño, color
 *   o layout.
 *
 * Regresa:
 * - Ícono de check renderizado con Font Awesome.
 */
export function CheckIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faCheck} className={cn(className)} />;
}