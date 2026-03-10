// src/components/site/header/Header.tsx
import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@cohacer/ui";
import { headerStyles as s } from "./Header.styles";

export type HeaderBrand = {
  name: string;
  logoSrc?: string;
};

export type HeaderNavItem = {
  label: string;
  href: string;
};

export type HeaderCta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "link" | "danger";
};

/**
 * Props del Header.
 */
export type HeaderProps = {
  brand: HeaderBrand;
  nav?: HeaderNavItem[];

  /**
   * CTA opcional a la derecha (desktop) y al final del menú mobile.
   *
   * Propósito:
   * - Soportar un CTA sin hardcodear copy.
   */
  cta?: HeaderCta;
};

/**
 * useLockBodyScroll
 *
 * Propósito:
 * - Bloquear el scroll del body cuando el menú mobile está abierto.
 *
 * Parámetros:
 * - enabled: Si true, bloquea el scroll.
 *
 * Información adicional:
 * - Evita que el usuario mueva la página detrás del panel.
 */
function useLockBodyScroll(enabled: boolean) {
  React.useEffect(() => {
    if (!enabled) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [enabled]);
}

/**
 * useEscapeToClose
 *
 * Propósito:
 * - Cerrar el panel mobile al presionar Escape.
 *
 * Parámetros:
 * - open: Estado del panel.
 * - onClose: Callback para cerrar.
 */
function useEscapeToClose(open: boolean, onClose: () => void) {
  React.useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);
}

/**
 * isExternalHref
 *
 * Propósito:
 * - Detectar si un href apunta a un recurso externo o protocolo especial.
 *
 * Parámetros:
 * - href: Ruta o URL a evaluar.
 *
 * Regresa:
 * - `true` cuando es un link externo, `mailto:` o `tel:`.
 */
function isExternalHref(href: string) {
  return /^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

/**
 * isHashHref
 *
 * Propósito:
 * - Detectar si un href es un ancla dentro de la misma página.
 *
 * Parámetros:
 * - href: Ruta a evaluar.
 *
 * Regresa:
 * - `true` cuando el href inicia con `#`.
 */
function isHashHref(href: string) {
  return href.startsWith("#");
}

/**
 * isInternalRouteHref
 *
 * Propósito:
 * - Detectar si un href debe navegarse mediante `react-router-dom`.
 *
 * Parámetros:
 * - href: Ruta a evaluar.
 *
 * Regresa:
 * - `true` cuando es una ruta interna tipo `/ruta`.
 */
function isInternalRouteHref(href: string) {
  return href.startsWith("/") && !isExternalHref(href);
}

/**
 * HeaderNavLink
 *
 * Propósito:
 * - Renderizar un item del menú usando `NavLink` para rutas internas
 *   o `<a>` cuando el href es externo/ancla.
 *
 * Parámetros:
 * - item: Item de navegación.
 * - className: Clases visuales base.
 * - onNavigate: Callback opcional al navegar.
 *
 * Regresa:
 * - Link renderizado para desktop o mobile.
 */
function HeaderNavLink({
  item,
  className,
  onNavigate,
}: {
  item: HeaderNavItem;
  className: string;
  onNavigate?: () => void;
}) {
  if (isInternalRouteHref(item.href)) {
    return (
      <NavLink
        to={item.href}
        className={className}
        onClick={onNavigate}
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <a href={item.href} className={className} onClick={onNavigate}>
      {item.label}
    </a>
  );
}

/**
 * Header
 *
 * Propósito:
 * - Renderizar marca + navegación desktop + menú mobile.
 * - Soportar navegación interna con router y links externos/anclas.
 *
 * Parámetros:
 * - brand: Marca del sitio.
 * - nav: Links de navegación.
 * - cta: CTA opcional.
 *
 * Información adicional:
 * - El logo navega al home usando `Link`.
 * - Los items internos usan `NavLink`.
 * - Los externos o hashes siguen usando `<a>`.
 */
export function Header({ brand, nav, cta }: HeaderProps) {
  const [open, setOpen] = React.useState(false);

  useLockBodyScroll(open);
  useEscapeToClose(open, () => setOpen(false));

  /**
   * closeOnNavigate
   *
   * Propósito:
   * - Cerrar el panel mobile al hacer click en un link.
   */
  function closeOnNavigate() {
    setOpen(false);
  }

  return (
    <header className={s.root}>
      <div className={s.inner}>
        <Link to="/" className={s.brandWrap} aria-label="Ir al inicio">
          {brand.logoSrc ? (
            <img src={brand.logoSrc} alt={brand.name} className={s.brandLogo} />
          ) : (
            <span className={s.brandText}>{brand.name}</span>
          )}
        </Link>

        {nav?.length ? (
          <nav className={s.desktopNav} aria-label="Navegación principal">
            {nav.map((n) => (
              <HeaderNavLink key={n.href} item={n} className={s.navLink} />
            ))}
          </nav>
        ) : null}

        <div className={s.actions}>
          {cta ? (
            <div className="hidden md:block">
              <Button href={cta.href} variant={cta.variant ?? "primary"} size="sm">
                {cta.label}
              </Button>
            </div>
          ) : null}

          {nav?.length ? (
            <div className={s.mobileToggleWrap}>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setOpen(true)}
                aria-label="Abrir menú"
                aria-expanded={open}
              >
                Menú
              </Button>
            </div>
          ) : null}
        </div>
      </div>

      {open ? (
        <>
          <div
            className={s.mobileBackdrop}
            aria-label="Cerrar menú"
            role="button"
            tabIndex={0}
            onClick={() => setOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setOpen(false);
            }}
          />

          <aside className={s.mobilePanel} aria-label="Menú móvil">
            <div className={s.mobileHeader}>
              <div className={s.mobileTitle}>{brand.name}</div>
              <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
                Cerrar
              </Button>
            </div>

            {nav?.length ? (
              <nav className={s.mobileNav} aria-label="Navegación móvil">
                {nav.map((n) => (
                  <HeaderNavLink
                    key={n.href}
                    item={n}
                    className={s.mobileNavLink}
                    onNavigate={closeOnNavigate}
                  />
                ))}
              </nav>
            ) : null}

            {cta ? (
              <div className={s.mobileCtaWrap}>
                <Button
                  href={cta.href}
                  variant={cta.variant ?? "primary"}
                  size="lg"
                  fullWidth
                  onClick={() => {
                    if (!isExternalHref(cta.href) && !isHashHref(cta.href)) {
                      closeOnNavigate();
                    }
                  }}
                >
                  {cta.label}
                </Button>
              </div>
            ) : null}
          </aside>
        </>
      ) : null}
    </header>
  );
}