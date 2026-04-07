import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * GraduationCapIcon
 *
 * Propósito:
 * - Exponer un ícono reutilizable de birrete usando Font Awesome
 *   desde el design system.
 *
 * Parámetros:
 * - className: Clases opcionales para tamaño o color.
 *
 * Regresa:
 * - Ícono renderizado como componente React.
 */
export function GraduationCapIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faGraduationCap} className={cn(className)} />;
}