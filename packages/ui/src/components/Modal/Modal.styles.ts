export type ModalSize = "sm" | "md" | "lg" | "xl";

export const modalStyles = {
  overlay:
    "fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6",

  panelBase:
    "w-full overflow-hidden rounded-2xl bg-[oklch(var(--card))] text-[oklch(var(--card-foreground))] shadow-xl ring-1 ring-[oklch(var(--border))] outline-none",

  panelSizes: {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  } satisfies Record<ModalSize, string>,

  header:
    "flex items-start justify-between gap-4 border-b border-[oklch(var(--border))] px-5 py-4",

  title: "text-base font-semibold leading-snug",

  description: "mt-1 text-sm text-[oklch(var(--muted-foreground))]",

  closeButton:
    "inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(var(--background))] hover:bg-[oklch(var(--muted))] disabled:opacity-50 disabled:pointer-events-none",

  body: "px-5 py-4",

  footer:
    "flex flex-col-reverse gap-2 border-t border-[oklch(var(--border))] px-5 py-4 sm:flex-row sm:items-center sm:justify-end",
} as const;

/**
 * Obtiene las clases de tamaño del panel del modal.
 *
 * Propósito:
 * Centralizar el mapeo de tamaños para que el componente Modal no tenga
 * lógica de estilos embebida.
 *
 * @param size Tamaño visual del modal.
 * @returns Clases de Tailwind correspondientes al tamaño.
 */
export function getModalSizeClass(size: ModalSize): string {
  return modalStyles.panelSizes[size];
}