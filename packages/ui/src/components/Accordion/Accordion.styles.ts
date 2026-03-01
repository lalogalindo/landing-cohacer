/**
 * Contiene las clases base utilizadas por el componente Accordion.
 * Se separan para mantener desacoplada la lógica del estilo.
 */

export const accordionStyles = {
  root: "w-full",
  item: "border-b border-border",
  trigger: "flex w-full items-center justify-between py-4 text-left text-sm font-medium transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  triggerIcon: "transition-transform duration-200",
  contentWrapper: "grid transition-all duration-300 ease-in-out",
  contentOpen: "grid-rows-[1fr] opacity-100",
  contentClosed: "grid-rows-[0fr] opacity-0",
  contentInner: "overflow-hidden",
  contentBody: "pb-4 text-sm text-muted-foreground",
};