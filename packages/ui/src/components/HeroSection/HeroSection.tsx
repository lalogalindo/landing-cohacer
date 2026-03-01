// packages/ui/src/components/HeroSection/HeroSection.tsx
import * as React from "react";
import { cn } from "../../lib/cn";
import { heroSectionStyles as s } from "./HeroSection.styles";
import { Button } from "@cohacer/ui";

/**
 * Variantes disponibles para el botón (según tu componente Button).
 *
 * Propósito:
 * - Exponer un conjunto de variantes coherentes para CTAs del Hero.
 */
export type HeroCtaButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "link"
  | "danger";

/**
 * Tamaños disponibles para el botón (según tu componente Button).
 *
 * Propósito:
 * - Permitir control de tamaño por CTA sin tocar el Hero.
 */
export type HeroCtaButtonSize = "sm" | "md" | "lg" | "icon";

/**
 * Configuración visual/funcional del botón de un CTA.
 *
 * Propósito:
 * - Permitir seleccionar tipo de botón (variant), tamaño y clases custom.
 * - Permitir estados como `loading` e `isActive`.
 * - Permitir iconos left/right para CTAs.
 */
export type HeroCtaButtonConfig = {
  variant?: HeroCtaButtonVariant;
  size?: HeroCtaButtonSize;
  fullWidth?: boolean;

  className?: string;

  loading?: boolean;
  isActive?: boolean;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

/**
 * Define la estructura de un CTA (Call To Action) mostrado dentro del Hero.
 *
 * Notas:
 * - `external` permite forzar apertura en nueva pestaña incluso si no es http(s).
 * - `ariaLabel` mejora accesibilidad.
 * - `button` permite controlar el estilo/tamaño/clases/estados del Button.
 */
export type HeroCta = {
  label: string;
  href: string;
  external?: boolean;
  ariaLabel?: string;
  button?: HeroCtaButtonConfig;
};

export type HeroVariant = "background" | "imageLeft" | "imageRight";

export type HeroSectionProps = {
  id: string;
  variant?: HeroVariant;

  eyebrow?: string;
  title: string;
  subtitle: string;

  primaryCta: HeroCta;
  secondaryCta?: HeroCta;

  media?: {
    src: string;
    alt: string;
  };

  overlayOpacity?: number;
  className?: string;
};

/**
 * Determina si un `href` debe considerarse externo.
 *
 * Propósito:
 * - Clasificar URLs que deberían abrirse fuera del sitio.
 *
 * Parámetros:
 * @param href - URL/URI destino.
 *
 * Regresa:
 * @returns `true` si coincide con http(s), mailto o tel.
 */
function isExternalUrl(href: string) {
  return /^https?:\/\//i.test(href) || /^mailto:/i.test(href) || /^tel:/i.test(href);
}

/**
 * Construye props adicionales para navegación externa.
 *
 * Propósito:
 * - Estandarizar `target="_blank"` y `rel="noopener noreferrer"`.
 *
 * Parámetros:
 * @param cta - CTA.
 *
 * Regresa:
 * @returns Un objeto con `{ target, rel }` cuando es externo; si no, `undefined`.
 */
function getExternalAnchorProps(cta: HeroCta) {
  const external = cta.external ?? isExternalUrl(cta.href);
  return external ? ({ target: "_blank", rel: "noopener noreferrer" } as const) : undefined;
}

/**
 * Resuelve defaults de botón dependiendo del rol del CTA.
 *
 * Propósito:
 * - Evitar hardcodear estilos en el Hero y permitir override por CTA.
 *
 * Parámetros:
 * @param role - "primary" o "secondary"
 *
 * Regresa:
 * @returns Un objeto `{ variant, size }` con defaults.
 */
function getCtaDefaults(role: "primary" | "secondary") {
  if (role === "primary") return { variant: "primary" as const, size: "lg" as const };
  return { variant: "outline" as const, size: "lg" as const };
}

/**
 * Renderiza un CTA usando el componente Button del design system.
 *
 * Propósito:
 * - Unificar estilos y comportamiento de CTAs (incluyendo `loading`, `isActive`, iconos).
 *
 * Parámetros:
 * @param cta - CTA a renderizar.
 * @param role - Rol del CTA ("primary" | "secondary") para defaults.
 *
 * Regresa:
 * @returns JSX.Element (Button).
 */
function renderHeroCta(cta: HeroCta, role: "primary" | "secondary") {
  const defaults = getCtaDefaults(role);
  const externalProps = getExternalAnchorProps(cta);

  return (
    <Button
      href={cta.href}
      aria-label={cta.ariaLabel ?? cta.label}
      {...(externalProps ?? {})}
      variant={cta.button?.variant ?? defaults.variant}
      size={cta.button?.size ?? defaults.size}
      fullWidth={cta.button?.fullWidth}
      className={cta.button?.className}
      loading={cta.button?.loading}
      isActive={cta.button?.isActive}
      leftIcon={cta.button?.leftIcon}
      rightIcon={cta.button?.rightIcon}
    >
      {cta.label}
    </Button>
  );
}

/**
 * HeroSection
 *
 * Propósito:
 * - Renderizar un hero reusable con variantes:
 *   - background
 *   - imageLeft
 *   - imageRight
 *
 * Regresa:
 * @returns JSX.Element.
 */
export function HeroSection({
  id,
  variant = "background",
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  media,
  overlayOpacity = 0.55,
  className,
}: HeroSectionProps) {
  const isBackground = variant === "background";
  const isImageLeft = variant === "imageLeft";
  const isImageRight = variant === "imageRight";

  if (isBackground) {
    return (
      <section
        id={id}
        data-section="hero"
        className={cn(s.base, "min-h-[70vh] flex items-center", "text-white", className)}
      >
        <div className="absolute inset-0">
          {media ? (
            <img
              src={media.src}
              alt={media.alt}
              className={cn("w-full h-full object-cover")}
              loading="eager"
              decoding="async"
            />
          ) : (
            <div className="w-full h-full bg-[oklch(var(--foreground))]" />
          )}

          <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
        </div>

        <div className={cn(s.container, "relative z-10 py-16")}>
          <div className={cn(s.content, "max-w-2xl")}>
            {eyebrow ? (
              <p className="text-xs uppercase tracking-widest opacity-80">{eyebrow}</p>
            ) : null}

            <h1 className={cn(s.title, "text-white")}>{title}</h1>

            <p className={cn(s.subtitle, "text-white/90")}>{subtitle}</p>

            <div className={s.actions}>
              {renderHeroCta(primaryCta, "primary")}
              {secondaryCta ? renderHeroCta(secondaryCta, "secondary") : null}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} data-section="hero" className={cn(s.base, className)}>
      <div className={cn(s.container, s.splitGrid)}>
        {isImageLeft && media ? (
          <div
            className={cn(
              "rounded-2xl overflow-hidden border border-[oklch(var(--border))]",
              "bg-[oklch(var(--card))]"
            )}
          >
            <img
              src={media.src}
              alt={media.alt}
              className={cn(s.mediaImage)}
              loading="eager"
              decoding="async"
            />
          </div>
        ) : null}

        <div className={s.content}>
          {eyebrow ? (
            <p className="text-xs uppercase tracking-widest text-[oklch(var(--muted-foreground))]">
              {eyebrow}
            </p>
          ) : null}

          <h1 className={cn(s.title, "text-[oklch(var(--foreground))]")}>{title}</h1>

          <p className={cn(s.subtitle, "text-[oklch(var(--muted-foreground))]")}>{subtitle}</p>

          <div className={s.actions}>
            {renderHeroCta(primaryCta, "primary")}
            {secondaryCta ? renderHeroCta(secondaryCta, "secondary") : null}
          </div>
        </div>

        {isImageRight && media ? (
          <div
            className={cn(
              "rounded-2xl overflow-hidden border border-[oklch(var(--border))]",
              "bg-[oklch(var(--card))]"
            )}
          >
            <img
              src={media.src}
              alt={media.alt}
              className={cn(s.mediaImage)}
              loading="eager"
              decoding="async"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}