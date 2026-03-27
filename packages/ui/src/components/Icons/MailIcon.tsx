// packages/ui/src/components/Icons/MailIcon.tsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * MailIcon
 *
 * Propósito:
 * - Representar el canal de contacto por correo
 *   electrónico dentro del sistema de diseño.
 *
 * Parámetros:
 * - className: Clases opcionales para tamaño, color
 *   o ajustes visuales.
 *
 * Regresa:
 * - Ícono de correo renderizado con Font Awesome.
 */
export function MailIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faEnvelope} className={cn(className)} />;
}