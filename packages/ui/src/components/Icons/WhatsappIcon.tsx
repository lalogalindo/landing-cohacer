// packages/ui/src/components/Icons/WhatsappIcon.tsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * WhatsappIcon
 *
 * Propósito:
 * - Representar el canal de contacto por WhatsApp
 *   dentro del sistema de diseño.
 *
 * Parámetros:
 * - className: Clases opcionales para tamaño, color
 *   o ajustes visuales.
 *
 * Regresa:
 * - Ícono de WhatsApp renderizado con Font Awesome.
 */
export function WhatsappIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faWhatsapp} className={cn(className)} />;
}