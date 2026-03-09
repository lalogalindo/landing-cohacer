import { cn } from '../../lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'link' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

/**
 * buttonClassName
 *
 * Propósito:
 * - Construir la clase final del Button basada en variante, tamaño, ancho y clases extra.
 *
 * Parámetros:
 * @param opts.variant - Variante visual (default: "primary")
 * @param opts.size - Tamaño (default: "md")
 * @param opts.fullWidth - Si true, aplica w-full
 * @param opts.className - Clases adicionales para extender/override
 *
 * Regresa:
 * @returns string con las clases finales (mergeadas con cn)
 *
 * Información adicional:
 * - Soporta `data-[active=true]` para estado activo.
 * - Soporta `data-[loading=true]` para estado loading.
 */
export function buttonClassName(opts?: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}) {
  const { variant = 'primary', size = 'md', fullWidth = false, className } = opts ?? {};

  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
    "disabled:opacity-50 disabled:pointer-events-none " +
    // Estado activo (cuando el componente pone data-active=true)
    "data-[active=true]:ring-2 data-[active=true]:ring-ring " +
    // Estado loading (cuando el componente pone data-loading=true)
    "data-[loading=true]:opacity-90 data-[loading=true]:pointer-events-none";

  const sizes: Record<ButtonSize, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-6 text-base",
    icon: "h-10 w-10",
  };

  const variants: Record<ButtonVariant, string> = {
primary:
  "min-w-26 rounded-xl border-0 " +
  "bg-[oklch(var(--primary))] text-[oklch(var(--primary-foreground))] " +
  "shadow-[0_10px_30px_rgba(249,115,22,0.30)] " +
  "hover:bg-[oklch(var(--primary-hover))] " +
  "hover:shadow-[0_16px_38px_rgba(234,88,12,0.35)] " +
  "active:scale-[0.98] transition-all duration-200",
    secondary:
      'min-w-26 bg-[oklch(var(--secondary))] text-[oklch(var(--secondary-foreground))] hover:opacity-90',
    ghost:
      'min-w-26 hover:bg-[oklch(var(--accent))] hover:text-[oklch(var(--accent-foreground))]',
    outline:
      'min-w-26 border border-[oklch(var(--border))] bg-transparent hover:bg-[oklch(var(--accent))] hover:text-[oklch(var(--accent-foreground))]',
    link:
      'min-w-26 h-auto px-0 text-[oklch(var(--primary))] underline-offset-4 hover:underline',
    danger:
      'min-w-26 bg-[oklch(var(--destructive))] text-[oklch(var(--destructive-foreground))] hover:opacity-90',
  };

  return cn(base, sizes[size], variants[variant], fullWidth && "w-full", className);
}