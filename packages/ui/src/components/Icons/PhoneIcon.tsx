// packages/ui/src/components/Icons/PhoneIcon.tsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * PhoneIcon
 *
 * Propósito:
 * - Representar contacto, atención o comunicación
 *   dentro del sistema de diseño.
 *
 * Parámetros:
 * - className: Clases opcionales para tamaño, color
 *   o ajustes visuales.
 *
 * Regresa:
 * - Ícono de teléfono renderizado con Font Awesome.
 */
export function PhoneIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faPhone} className={cn(className)} />;
}