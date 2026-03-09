import * as React from "react";
import { footerStyles as s } from "./Footer.styles";

type Link = {
  label: string;
  href: string;
};

type Props = {
  brand: {
    name: string;
    tagline?: string;
  };

  infoLinks: Link[];

  contact: {
    email?: string;
    phone?: string;
    schedule?: string;
  };

  socialLinks: Link[];

  copyright: string;
};

/**
 * Footer
 *
 * Propósito:
 * - Renderizar el footer completo del sitio con 4 columnas.
 * - Mantener layout separado del contenido.
 */
export function Footer({
  brand,
  infoLinks,
  contact,
  socialLinks,
  copyright,
}: Props) {
  return (
    <footer className={s.root}>
      <div className={s.inner}>
        <div className={s.grid}>
          {/* Brand */}
          <div>
            <div className={s.title}>{brand.name}</div>
            {brand.tagline ? (
              <p className={s.text}>{brand.tagline}</p>
            ) : null}
          </div>

          {/* Información */}
          <div>
            <div className={s.title}>Información</div>
            <div className={s.list}>
              {infoLinks.map((l) => (
                <a key={l.href} href={l.href} className={s.link}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <div className={s.title}>Contacto</div>
            <div className={s.list}>
              {contact.email && (
                <div className={s.contactItem}>{contact.email}</div>
              )}
              {contact.phone && (
                <div className={s.contactItem}>{contact.phone}</div>
              )}
              {contact.schedule && (
                <div className={s.contactItem}>{contact.schedule}</div>
              )}
            </div>
          </div>

          {/* Redes */}
          <div>
            <div className={s.title}>Síguenos</div>
            <div className={s.list}>
              {socialLinks.map((l) => (
                <a key={l.href} href={l.href} className={s.link}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={s.divider} />

        <div className={s.bottom}>{copyright}</div>
      </div>
    </footer>
  );
}