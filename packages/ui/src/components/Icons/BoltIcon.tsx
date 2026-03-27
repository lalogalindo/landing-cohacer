// packages/ui/src/components/Icons/BoltIcon.tsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * BoltIcon
 *
 * Propósito:
 * - Representar rapidez, respuesta inmediata
 *   o agilidad dentro del sistema de diseño.
 *
 * Parámetros:
 * - className: Clases opcionales para tamaño, color
 *   o ajustes visuales.
 *
 * Regresa:
 * - Ícono de rayo renderizado con Font Awesome.
 */
export function BoltIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faBolt} className={cn(className)} />;
}