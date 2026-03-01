import * as React from "react";
import { cn } from "../../lib/cn";
import {
  getSectionBaseClass,
  getSectionContainerClass,
  sectionStyles,
} from "./Section.styles";

type SectionSpacing = keyof typeof sectionStyles.spacing;
type SectionBackground = keyof typeof sectionStyles.background;

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Controla el espaciado vertical del Section.
   */
  spacing?: SectionSpacing;

  /**
   * Controla el fondo del Section.
   */
  background?: SectionBackground;

  /**
   * Si es true, elimina el max-width y ocupa todo el ancho.
   */
  fullWidth?: boolean;
}

/**
 * Section es un contenedor de layout que:
 * - Centra el contenido horizontalmente.
 * - Aplica un max-width consistente.
 * - Maneja padding vertical uniforme.
 *
 * Se usa como wrapper de bloques principales (Hero, Programas, FAQ, etc.).
 */
export function Section({
  children,
  spacing = "md",
  background = "default",
  fullWidth = false,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        getSectionBaseClass(),
        sectionStyles.spacing[spacing],
        sectionStyles.background[background],
        className
      )}
      {...props}
    >
      <div
        className={cn(
          !fullWidth && getSectionContainerClass()
        )}
      >
        {children}
      </div>
    </section>
  );
}