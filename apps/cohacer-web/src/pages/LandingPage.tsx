import * as React from 'react';
import type { LandingPageContent, LandingSection } from '@/content/types';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
            <img src={content.header.brand.logoSrc} alt={content.header.brand.name} className="h-7 w-auto" />
          ) : (
            <div className="text-sm font-semibold">{content.header.brand.name}</div>
          )}
        </div>

        {content.header.nav?.length ? (
          <nav className="hidden items-center gap-6 md:flex">
            {content.header.nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground">
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

function SectionRenderer({ section }: { section: LandingSection }) {
  switch (section.type) {
    case 'hero':
      return (
        <section id={section.id} className="mx-auto max-w-6xl px-4 py-14">
          {section.eyebrow ? (
            <div className="mb-3 text-sm font-medium text-muted-foreground">{section.eyebrow}</div>
          ) : null}
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{section.title}</h1>
          {section.subtitle ? <p className="mt-4 max-w-2xl text-base text-muted-foreground">{section.subtitle}</p> : null}
          <div className="mt-8 flex flex-wrap gap-3">
            {section.ctas.map((cta) => (
              <Button key={cta.href} asChild variant={cta.variant ?? 'default'}>
                <a href={cta.href}>{cta.label}</a>
              </Button>
            ))}
          </div>
        </section>
      );

    case 'bullets':
      return (
        <section id={section.id} className="mx-auto max-w-6xl px-4 py-10">
          <Card>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      );

    case 'trust':
      return (
        <section id={section.id} className="mx-auto max-w-6xl px-4 py-10">
          <Card>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {(section.items ?? []).map((i) => (
                <div key={i.label} className="rounded-xl border p-4">
                  <div className="text-sm font-semibold">{i.label}</div>
                  {i.description ? <div className="mt-1 text-sm text-muted-foreground">{i.description}</div> : null}
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      );

    case 'pricing':
      return (
        <section id={section.id} className="mx-auto max-w-6xl px-4 py-10">
          <Card>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-2xl font-bold">
                {section.price.note ? <span className="mr-2">{section.price.note}</span> : null}
                <span>
                  ${section.price.amount.toLocaleString('es-MX')} {section.price.currency}
                </span>
              </div>

              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {section.description ? <p className="text-sm text-muted-foreground">{section.description}</p> : null}
            </CardContent>
          </Card>
        </section>
      );

    case 'benefits':
      return (
        <section id={section.id} className="mx-auto max-w-6xl px-4 py-10">
          <Card>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid list-disc gap-y-2 pl-5 text-sm text-muted-foreground md:grid-cols-2 md:gap-x-8">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      );

    case 'leadForm':
      return (
        <section id={section.id} className="mx-auto max-w-6xl px-4 py-10">
          <Card>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                className="grid gap-4 md:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Aún no conectamos API: aquí solo queda listo el “plumbing”.
                  const form = new FormData(e.currentTarget);
                  console.log(Object.fromEntries(form.entries()));
                  alert('Listo: en el siguiente paso conectamos el endpoint / integración.');
                }}
              >
                {section.fields.map((f) => {
                  if ('options' in f) {
                    return (
                      <div key={f.key} className="grid gap-2 md:col-span-2">
                        <Label htmlFor={f.key}>
                          {f.label}
                          {f.required ? ' *' : ''}
                        </Label>
                        <select
                          id={f.key}
                          name={f.key}
                          required={!!f.required}
                          className="h-10 w-full rounded-md border bg-background px-3 text-sm"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Selecciona una opción
                          </option>
                          {f.options.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      </div>
                    );
                  }

                  return (
                    <div key={f.key} className="grid gap-2">
                      <Label htmlFor={f.key}>
                        {f.label}
                        {f.required ? ' *' : ''}
                      </Label>
                      <Input id={f.key} name={f.key} placeholder={f.placeholder} required={!!f.required} />
                    </div>
                  );
                })}

                <div className="md:col-span-2">
                  <p className="text-xs text-muted-foreground">
                    {section.privacyText}{' '}
                    <a className="underline underline-offset-4" href={section.privacyHref}>
                      {section.privacyHref}
                    </a>
                  </p>
                </div>

                <div className="md:col-span-2">
                  <Button type="submit" className="w-full md:w-auto">
                    {section.submitLabel}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
      );

    default:
      return null;
  }
}