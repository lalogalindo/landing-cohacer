// apps/cohacer-web/tailwind.config.ts
import preset from "@cohacer/tailwind-config/preset";

/**
 * tailwind config
 *
 * Propósito:
 * - Consumir el preset compartido.
 *
 * Información adicional:
 * - En Tailwind v4 el escaneo vive en `@source` dentro del CSS,
 *   pero mantenemos `content` por compatibilidad/claridad.
 */
export default {
  presets: [preset],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
};