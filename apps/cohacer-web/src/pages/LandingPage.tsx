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
    case "hero":
      return (
        <div className="flex flex-wrap gap-3">
          <HeroSection {...section} />
        </div>
      );

    /**
     * Programas (dinámico desde JSON).
     * Esta sección debe existir en `content.sections` justo después del hero:
     * { type: "programs", id: "programas", content: programsJson }
     */
    case "programs":
      return (
        <Section id={section.id} spacing="sm">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">{section.content.sectionTitle}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{section.content.sectionSubtitle}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {section.content.programs.map((program) => (
              <Card
                key={program.id}
                className={program.highlighted ? "border-2 border-[oklch(var(--primary))]" : ""}
              >
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.price}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {program.bullets.map((bullet, i) => (
                      <li key={`${program.id}-bullet-${i}`}>{bullet}</li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button fullWidth href={`#${section.id}-${program.id}`}>
                    Ver detalles
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>
      );

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