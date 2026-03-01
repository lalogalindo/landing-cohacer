import * as React from 'react';
import type { LandingPageContent, LandingSection } from '@/content/types';

import { Button } from '@cohacer/ui';
import { HeroSection } from '@cohacer/ui';


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
          <div className="flex flex-wrap gap-3">
              <HeroSection {...section}/>
          </div>
      );

    case 'bullets':
      return (
        <section id={section.id} className="mx-auto max-w-6xl px-4 py-10">
          Card bullest
        </section>
      );

    case 'trust':
      return (
        <section id={section.id} className="mx-auto max-w-6xl px-4 py-10">
          card trust
        </section>
      );

    case 'pricing':
      return (
        <section id={section.id} className="mx-auto max-w-6xl px-4 py-10">
          card pricing
        </section>
      );

    case 'benefits':
      return (
        <section id={section.id} className="mx-auto max-w-6xl px-4 py-10">
          card benefits
        </section>
      );

    case 'leadForm':
      return (
        <section id={section.id} className="mx-auto max-w-6xl px-4 py-10">
          card lead
        </section>
      );

    default:
      return null;
  }
}