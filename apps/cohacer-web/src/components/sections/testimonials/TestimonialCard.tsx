import * as React from "react";
import { Card, CardContent } from "@cohacer/ui";

type Props = {
  name: string;
  program: string;
  quote: string;
  image: {
    src: string;
    alt: string;
  };
};

/**
 * Une clases de Tailwind de manera segura.
 *
 * Propósito:
 * - Componer `className` sin dependencias externas.
 *
 * Parámetros:
 * - classes: Lista de valores (string/undefined/null/false) a combinar.
 *
 * Regresa:
 * - String con clases combinadas.
 */
function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Card de un testimonio.
 *
 * Propósito:
 * - Renderizar una tarjeta consistente para testimonios.
 * - Mostrar imagen, nombre, programa y cita.
 */
export function TestimonialCard({ name, program, quote, image }: Props) {
  return (
    <Card className="h-full">
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <img
            src={image.src}
            alt={image.alt}
            className={cn(
              "h-14 w-14 shrink-0 rounded-full object-cover",
              "border border-border"
            )}
            loading="lazy"
          />

          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{program}</p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-foreground/90">
          “{quote}”
        </p>
      </CardContent>
    </Card>
  );
}