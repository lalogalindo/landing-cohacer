import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/cn";

type Props = {
  className?: string;
};

/**
 * RocketIcon
 *
 * Propósito:
 * - Representar crecimiento acelerado
 *   o proyección a largo plazo.
 */
export function RocketIcon({ className }: Props) {
  return <FontAwesomeIcon icon={faRocket} className={cn(className)} />;
}