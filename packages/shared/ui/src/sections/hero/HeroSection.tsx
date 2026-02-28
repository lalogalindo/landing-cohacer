import * as React from "react";
import { cn } from "../../lib/cn"; // ajusta el path si tu cn está en otro lado
import { Button } from "../../components/ui/button";

export type HeroCta = {
  label: string;
  href: string;
  /**
   * Cómo abrir el link:
   * - _self: misma pestaña
   * - _blank: nueva pestaña
   */
  target?: "_self" | "_blank";
  /**
   * Útil para WhatsApp / tracking / etc.
   */
  rel?: string;
  /**
   * Variantes de shadcn Button
   */
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive";
};

export type HeroMedia =
  | {
      kind: "image";
      src: string;
      alt: string;
      /**
       * Si quieres controlar el ratio en desktop
       */
      aspectClassName?: string; // e.g. "aspect-[4/3]" or "aspect-square"
      /**
       * “contain” para logos/ilustraciones, “cover” para fotos
       */
      objectFit?: "cover" | "contain";
      /**
       * Rounded / shadow custom si quieres
       */
      className?: string;
    }
  | {
      kind: "none";
    };

export type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;

  primaryCta: HeroCta;
  secondaryCta?: HeroCta;

  /**
   * Imagen lateral (desktop) o debajo del texto (mobile)
   */
  media?: HeroMedia;

  /**
   * Background opcional (gradiente, imagen, etc.)
   * - className: para fondos tailwind (bg-gradient-to-b, etc.)
   * - style: para backgroundImage inline si lo prefieres
   */
  background?: {
    className?: string;
    style?: React.CSSProperties;
  };

  /**
   * Badges / bullets cortos debajo del subtitle (opcional)
   * Ej: ["RVOE/Acuerdo", "100% online", "Acompañamiento"]
   */
  highlights?: string[];

  /**
   * Si quieres un ancho distinto
   */
  containerClassName?: string;

  /**
   * Si quieres mover el CTA a sticky en mobile más adelante,
   * este flag te deja esconder el bloque principal de CTAs.
   */
  hideCtas?: boolean;

  className?: string;
};

function normalizeLinkTarget(cta?: HeroCta) {
  const target = cta?.target ?? "_self";
  const rel =
    cta?.rel ??
    (target === "_blank" ? "noopener noreferrer" : undefined);

  return { target, rel };
}

export function HeroSection(props: HeroSectionProps) {
  const {
    eyebrow,
    title,
    subtitle,
    primaryCta,
    secondaryCta,
    media = { kind: "none" },
    background,
    highlights,
    containerClassName,
    hideCtas,
    className,
  } = props;

  const primaryLink = normalizeLinkTarget(primaryCta);
  const secondaryLink = normalizeLinkTarget(secondaryCta);

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        "py-12 md:py-16",
        background?.className,
        className
      )}
      style={background?.style}
    >
      {/* overlay sutil para que el texto siempre sea legible si usas imagen de fondo */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      <div className={cn("relative mx-auto w-full max-w-6xl px-4", containerClassName)}>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          {/* Texto */}
          <div className="flex flex-col">
            {eyebrow ? (
              <p className="mb-3 text-sm font-medium tracking-wide text-muted-foreground">
                {eyebrow}
              </p>
            ) : null}

            <h1 className="text-pretty text-3xl font-semibold leading-tight md:text-5xl">
              {title}
            </h1>

            {subtitle ? (
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                {subtitle}
              </p>
            ) : null}

            {highlights?.length ? (
              <ul className="mt-5 flex flex-wrap gap-2">
                {highlights.map((h, idx) => (
                  <li
                    key={`${h}-${idx}`}
                    className="rounded-full border bg-background/60 px-3 py-1 text-xs text-foreground/90 backdrop-blur"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            ) : null}

            {!hideCtas ? (
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild className="h-11 px-6">
                  <a href={primaryCta.href} target={primaryLink.target} rel={primaryLink.rel}>
                    {primaryCta.label}
                  </a>
                </Button>

                {secondaryCta ? (
                  <Button
                    asChild
                    variant={secondaryCta.variant ?? "outline"}
                    className="h-11 px-6"
                  >
                    <a
                      href={secondaryCta.href}
                      target={secondaryLink.target}
                      rel={secondaryLink.rel}
                    >
                      {secondaryCta.label}
                    </a>
                  </Button>
                ) : null}
              </div>
            ) : null}

            {/* Nota opcional bajo CTA (por si luego quieres meter “Respuesta < 5 min”, etc.) */}
            {/* <p className="mt-3 text-xs text-muted-foreground">Respuesta rápida por WhatsApp.</p> */}
          </div>

          {/* Media */}
          {media.kind === "image" ? (
            <div className="order-first md:order-none">
              <div
                className={cn(
                  "relative w-full overflow-hidden rounded-2xl border bg-muted/30 shadow-sm",
                  media.aspectClassName ?? "aspect-[4/3]",
                  media.className
                )}
              >
                <img
                  src={media.src}
                  alt={media.alt}
                  className={cn(
                    "h-full w-full",
                    media.objectFit === "contain" ? "object-contain p-6" : "object-cover"
                  )}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          ) : (
            <div className="hidden md:block" />
          )}
        </div>
      </div>
    </section>
  );
}