import * as React from "react";
import type { LandingPageContent, LandingSection } from "@/types/types";

import { HeroSection } from "@cohacer/ui";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Section,
} from "@cohacer/ui";
import { CompaniesMarquee, ProgramsSection } from "@/components";

type Props = {
  content: LandingPageContent;
};

export function LandingPage({ content }: Props) {
  return (
    <div className="min-h-dvh">
      <Header content={content} />

      <main>
        {content.sections.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
      </main>

      <Footer content={content} />
    </div>
  );
}

function Header({ content }: { content: LandingPageContent }) {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          {content.header.brand.logoSrc ? (
            <img
              src={content.header.brand.logoSrc}
              alt={content.header.brand.name}
              className="h-7 w-auto"
            />
          ) : (
            <div className="text-sm font-semibold">{content.header.brand.name}</div>
          )}
        </div>

        {content.header.nav?.length ? (
          <nav className="hidden items-center gap-6 md:flex">
            {content.header.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}

function Footer({ content }: { content: LandingPageContent }) {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-muted-foreground">{content.footer.disclaimer}</div>
          <div className="flex flex-wrap gap-4">
            {content.footer.legalLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm underline-offset-4 hover:underline">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * Renderiza una sección de la landing basado en el discriminante `section.type`.
 *
 * @param {{ section: LandingSection }} props Props con la sección a renderizar.
 * @returns {JSX.Element | null} El bloque de UI correspondiente a la sección.
 */
function SectionRenderer({ section }: { section: LandingSection }) {
  switch (section.type) {
    /**
     * Hero principal (dinámico desde JSON).
     *
     * - Presenta el mensaje principal del sitio y el CTA primario.
     * - Soporta variantes de layout del Hero (background / imageLeft / imageRight).
     *
     */
    case "hero":
      return (
        <div className="flex flex-wrap gap-3">
          <HeroSection {...section} />
        </div>
      );

    /**
     * Programas (dinámico desde JSON).
     *
     * - Muestra el listado de programas en cards.
     * - Permite ver detalles dentro de la misma card mediante un acordeón interno:
     *
     */
    case "programs":
      return (
        <ProgramsSection {...section} />
      );
    case "companies":
      return (
        <CompaniesMarquee {...section} />
      )
    case "bullets":
      return (
        <Section id={section.id} spacing="sm">
          <Card>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>Requisitos generales</CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="list-disc pl-5 text-sm space-y-2">
                {section.items.map((item, i) => (
                  <li key={`${section.id}-item-${i}`}>{item}</li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button href="#contacto">Solicitar información</Button>
            </CardFooter>
          </Card>
        </Section>
      );

    case "trust":
      return (
        <section id={section.id} className="mx-auto max-w-6xl px-4 py-10">
          card trust
        </section>
      );

    case "pricing":
      return (
        <section id={section.id} className="mx-auto max-w-6xl px-4 py-10">
          card pricing
        </section>
      );

    case "benefits":
      return (
        <section id={section.id} className="mx-auto max-w-6xl px-4 py-10">
          card benefits
        </section>
      );

    case "leadForm":
      return (
        <section id={section.id} className="mx-auto max-w-6xl px-4 py-10">
          card lead
        </section>
      );

    default:
      return null;
  }
}