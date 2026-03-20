// packages/ui/src/components/Icons/BriefcaseIcon.tsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * BriefcaseIcon
 *
 * Propósito:
 * - Representar crecimiento profesional
 *   o mejora salarial.
 */
export function BriefcaseIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faBriefcase} className={cn(className)} />;
}