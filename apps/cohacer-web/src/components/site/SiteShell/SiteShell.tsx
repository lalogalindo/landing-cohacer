// src/components/site/SiteShell/SiteShell.tsx
import * as React from "react";
import { Header } from "@/components/site/header/Header";
import { Footer } from "@/components/site/footer/Footer";

type HeaderProps = React.ComponentProps<typeof Header>;
type FooterProps = React.ComponentProps<typeof Footer>;

type Props = {
  header: HeaderProps;
  footer: FooterProps;
  children: React.ReactNode;
};

/**
 * SiteShell
 *
 * Propósito:
 * - Renderizar layout base del sitio:
 *   header + contenido + footer.
 */
export function SiteShell({ header, footer, children }: Props) {
  return (
    <>
      <Header
        brand={header.brand}
        nav={header.nav}
        cta={header.cta}
      />

      <main>{children}</main>

      <Footer
        brand={footer.brand}
        infoLinks={footer.infoLinks}
        contact={footer.contact}
        socialLinks={footer.socialLinks}
        copyright={footer.copyright}
      />
    </>
  );
}