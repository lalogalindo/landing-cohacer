// packages/ui/src/components/Icons/MinusIcon.tsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * MinusIcon
 *
 * Propósito:
 * - Representar contracción, resta o colapso
 *   dentro de componentes interactivos.
 *
 * Parámetros:
 * - className: Clases opcionales para tamaño, color
 *   o ajustes de layout.
 *
 * Regresa:
 * - Ícono de resta renderizado con Font Awesome.
 */
export function MinusIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faMinus} className={cn(className)} />;
}