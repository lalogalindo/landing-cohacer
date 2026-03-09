// src/components/site/header/Header.tsx
import * as React from "react";
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
type Props = {
  brand: HeaderBrand;
  nav?: HeaderNavItem[];

  /**
   * CTA opcional a la derecha (desktop) y al final del menú mobile.
   *
   * Propósito:
   * - Soportar un CTA tipo “Evaluar perfil gratis” sin hardcodear copy.
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
 * - Evita que el usuario “mueva” la página detrás del panel.
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
 * Header
 *
 * Propósito:
 * - Renderizar marca + navegación (desktop) + menú mobile.
 * - Mantenerse agnóstico de páginas: solo recibe datos (brand/nav/cta).
 *
 * Parámetros:
 * - brand: Marca (nombre, logo opcional).
 * - nav: Links de navegación.
 * - cta: CTA opcional.
 *
 * Información adicional:
 * - En desktop se muestra nav + cta.
 * - En mobile se muestra un panel deslizable con nav + cta.
 */
export function Header({ brand, nav, cta }: Props) {
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
        <a href="/" className={s.brandWrap} aria-label="Ir al inicio">
          {brand.logoSrc ? (
            <img src={brand.logoSrc} alt={brand.name} className={s.brandLogo} />
          ) : (
            <span className={s.brandText}>{brand.name}</span>
          )}
        </a>

        {nav?.length ? (
          <nav className={s.desktopNav} aria-label="Navegación principal">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className={s.navLink}>
                {n.label}
              </a>
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
                  <a
                    key={n.href}
                    href={n.href}
                    className={s.mobileNavLink}
                    onClick={closeOnNavigate}
                  >
                    {n.label}
                  </a>
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
                  onClick={closeOnNavigate}
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