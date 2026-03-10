// src/App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutePlaceholderPage } from "@/pages/RoutePlaceholderPage";
import { SITE_ROUTES } from "@/routes/siteRoutes";
import { ScrollToTop } from "@/components/site/ScrollToTop";

import { HomePage, ValidezPage } from "@/pages";
import { homePageContent } from "@/content/sites/homePage";
import { validezPageContent } from "@/content/sites/validezPage";


/**
 * App
 *
 * Propósito:
 * - Configurar el router principal de la aplicación.
 * - Registrar las rutas disponibles del sitio.
 *
 * Regresa:
 * - Árbol principal de la app con `BrowserRouter`.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path={SITE_ROUTES.home} element={<HomePage content={homePageContent} />} />

        <Route path={SITE_ROUTES.validez} element={<ValidezPage content={validezPageContent} />} />

        <Route
          path={SITE_ROUTES.programas}
          element={
            <RoutePlaceholderPage
              title="Programas"
              description="Aquí vivirá la página de programas. La ruta ya existe y el menú ya navega correctamente hacia ella."
            />
          }
        />

        <Route
          path={SITE_ROUTES.beneficios}
          element={
            <RoutePlaceholderPage
              title="Beneficios"
              description="Aquí vivirá la página de beneficios. Por ahora se deja como placeholder para completar el routeo base."
            />
          }
        />

        <Route
          path={SITE_ROUTES.proceso}
          element={
            <RoutePlaceholderPage
              title="Proceso"
              description="Aquí vivirá la página del proceso. La navegación ya está lista aunque todavía no exista el layout final."
            />
          }
        />

        <Route
          path={SITE_ROUTES.testimonios}
          element={
            <RoutePlaceholderPage
              title="Testimonios"
              description="Aquí vivirá la página de testimonios. Se deja creada para que el menú ya no dependa de la misma landing."
            />
          }
        />

        <Route
          path={SITE_ROUTES.contacto}
          element={
            <RoutePlaceholderPage
              title="Contacto"
              description="Aquí vivirá la página de contacto. Más adelante puedes reemplazar este placeholder por la página real."
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}