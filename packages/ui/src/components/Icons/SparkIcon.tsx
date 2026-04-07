// packages/ui/src/components/Icons/SparkIcon.tsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * SparkIcon
 *
 * Propósito:
 * - Exponer un ícono reutilizable para beneficios de confianza,
 *   reconocimiento o validación usando Font Awesome.
 *
 * Información adicional:
 * - Se usa `faCertificate` para acercarse visualmente al ícono
 *   de reconocimiento formal del mockup.
 *
 * Parámetros:
 * - className: Clases opcionales para tamaño, color o layout.
 *
 * Regresa:
 * - Ícono renderizado como componente React.
 */
export function SparkIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faCertificate} className={cn(className)} />;
}