import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * ClockIcon
 *
 * Propósito:
 * - Representar tiempo o recuperación de inversión.
 */
export function ClockIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faClock} className={cn(className)} />;
}