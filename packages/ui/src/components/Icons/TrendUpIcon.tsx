import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * TrendUpIcon
 *
 * Propósito:
 * - Exponer un ícono reutilizable de crecimiento ascendente
 *   usando Font Awesome desde el design system.
 *
 * Parámetros:
 * - className: Clases opcionales para tamaño, color o layout.
 *
 * Regresa:
 * - Ícono renderizado como componente React.
 */
export function TrendUpIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faArrowTrendUp} className={cn(className)} />;
}