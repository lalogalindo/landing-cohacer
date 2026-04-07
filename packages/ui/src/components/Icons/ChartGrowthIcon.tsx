import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * ChartGrowthIcon
 *
 * Propósito:
 * - Representar crecimiento financiero o ROI.
 */
export function ChartGrowthIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faChartLine} className={cn(className)} />;
}