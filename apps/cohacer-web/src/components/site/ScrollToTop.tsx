import * as React from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 *
 * Propósito:
 * - Forzar que el scroll de la página vuelva al inicio
 *   cada vez que cambia la ruta en React Router.
 *
 * Información adicional:
 * - React Router mantiene la posición del scroll
 *   entre navegaciones.
 * - Este componente escucha cambios en `pathname`
 *   y ejecuta `window.scrollTo(0, 0)`.
 *
 * Regresa:
 * - null (no renderiza nada).
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
}