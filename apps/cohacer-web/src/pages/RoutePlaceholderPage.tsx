import { Link } from "react-router-dom";
import { SITE_ROUTES } from "@/routes/siteRoutes";

type Props = {
  title: string;
  description: string;
};

/**
 * RoutePlaceholderPage
 *
 * Propósito:
 * - Mostrar una página temporal para rutas que aún no tienen layout real.
 *
 * Parámetros:
 * - title: Título principal de la vista.
 * - description: Descripción breve del estado de la página.
 *
 * Regresa:
 * - Pantalla placeholder reutilizable.
 */
export function RoutePlaceholderPage({ title, description }: Props) {
  return (
    <main className="min-h-dvh bg-[oklch(var(--background))] px-6 py-16 text-[oklch(var(--foreground))]">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-[oklch(var(--border))] bg-white p-8 shadow-sm">
        <span className="inline-flex w-fit rounded-full border border-[oklch(var(--border))] px-3 py-1 text-sm font-medium">
          Página en construcción
        </span>

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="max-w-2xl text-base leading-7 text-black/70 md:text-lg">{description}</p>
        </div>

        <div className="pt-2">
          <Link
            to={SITE_ROUTES.home}
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[oklch(var(--border))] px-5 py-3 font-medium transition hover:bg-black/5"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}