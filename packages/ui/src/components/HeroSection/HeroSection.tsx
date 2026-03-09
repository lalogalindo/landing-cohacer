// packages/ui/src/components/HeroSection/HeroSection.tsx
import * as React from "react";
import { cn } from "../../lib/cn";
import { heroSectionStyles as s } from "./HeroSection.styles";
import { Button } from "@cohacer/ui";
import { GraduationCapIcon, ManatSignIcon } from "@cohacer/ui";

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
 * - Permitir seleccionar tipo de botón, tamaño y clases custom.
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
 * Define la estructura de un CTA mostrado dentro del Hero.
 *
 * Información adicional:
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

/**
 * Variantes visuales disponibles del Hero.
 *
 * Propósito:
 * - Permitir distintas composiciones reutilizables del componente.
 */
export type HeroVariant = "background" | "imageLeft" | "imageRight";

/**
 * Íconos decorativos soportados por el Hero.
 *
 * Propósito:
 * - Exponer íconos serializables desde JSON sin pasar ReactNode.
 */
export type HeroDecorativeIcon =
  | "graduationCap"
  | "manatSign";
/**
 * Props del HeroSection.
 *
 * Propósito:
 * - Definir la estructura reusable del hero del design system.
 */
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
  decorativeIcon?: HeroDecorativeIcon;
  className?: string;
};

/**
 * Determina si un `href` debe considerarse externo.
 *
 * Propósito:
 * - Clasificar URLs que deberían abrirse fuera del sitio.
 *
 * Parámetros:
 * @param href URL o URI destino.
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
 * @param cta CTA a evaluar.
 *
 * Regresa:
 * @returns Props adicionales para anchors externos o `undefined`.
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
 * @param role Rol del CTA dentro del hero.
 *
 * Regresa:
 * @returns Variante y tamaño por defecto.
 */
function getCtaDefaults(role: "primary" | "secondary") {
  if (role === "primary") {
    return { variant: "primary" as const, size: "lg" as const };
  }

  return { variant: "outline" as const, size: "lg" as const };
}

/**
 * Renderiza un CTA usando el componente Button del design system.
 *
 * Propósito:
 * - Unificar estilos y comportamiento de CTAs.
 *
 * Parámetros:
 * @param cta CTA a renderizar.
 * @param role Rol del CTA.
 *
 * Regresa:
 * @returns JSX.Element.
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
 * Renderiza el ícono decorativo inferior del hero.
 *
 * Propósito:
 * - Permitir que el Hero use íconos configurables desde JSON.
 *
 * Parámetros:
 * @param decorativeIcon Nombre del ícono decorativo.
 *
 * Regresa:
 * @returns JSX.Element | null.
 */
function renderDecorativeIcon(decorativeIcon?: HeroDecorativeIcon) {
  if (!decorativeIcon) return null;

  const baseClass =
    "mt-12 text-4xl sm:text-5xl text-[oklch(var(--primary))] opacity-90 animate-bounce";

  switch (decorativeIcon) {
    case "graduationCap":
      return <GraduationCapIcon className={baseClass} />;

    case "manatSign":
      return <ManatSignIcon className={baseClass} />;

    default:
      return null;
  }
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
  decorativeIcon,
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
        className={cn(s.base, s.backgroundBase, "text-white", className)}
      >
        {media ? (
          <div className="absolute inset-0">
            <img
              src={media.src}
              alt={media.alt}
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
          </div>
        ) : null}

        <div className={cn(s.container, s.backgroundContainer)}>
          <div className={cn(s.content, s.backgroundContent)}>
            {eyebrow ? <p className={s.eyebrow}>{eyebrow}</p> : null}

            <h1
              className={cn(s.title, s.backgroundTitle, "text-white")}
              dangerouslySetInnerHTML={{ __html: title }}
            />

            <p className={cn(s.subtitle, s.backgroundSubtitle, "text-white/90")}>{subtitle}</p>

            <div className={cn(s.actions, s.backgroundActions)}>
              {renderHeroCta(primaryCta, "primary")}
              {secondaryCta ? renderHeroCta(secondaryCta, "secondary") : null}
            </div>

            {renderDecorativeIcon(decorativeIcon)}
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
              "overflow-hidden rounded-2xl border border-[oklch(var(--border))]",
              "bg-[oklch(var(--card))]",
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
              "overflow-hidden rounded-2xl border border-[oklch(var(--border))]",
              "bg-[oklch(var(--card))]",
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