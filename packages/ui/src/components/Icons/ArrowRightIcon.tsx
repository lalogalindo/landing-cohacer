// packages/ui/src/components/Icons/ArrowRightIcon.tsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * ArrowRightIcon
 *
 * Propósito:
 * - Representar avance, dirección o transformación
 *   dentro de bloques visuales del sistema.
 *
 * Parámetros:
 * - className: Clases opcionales para tamaño, color
 *   o ajustes de layout.
 *
 * Regresa:
 * - Ícono de flecha hacia la derecha renderizado
 *   con Font Awesome.
 */
export function ArrowRightIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faArrowRight} className={cn(className)} />;
}