// src/components/site/footer/Footer.tsx
import { footerStyles as s } from "./Footer.styles";

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterProps = {
  brand: {
    name: string;
    tagline?: string;
  };

  infoLinks: FooterLink[];

  contact: {
    email?: string;
    phone?: string;
    schedule?: string;
  };

  socialLinks: FooterLink[];

  copyright: string;
};

/**
 * Footer
 *
 * Propósito:
 * - Renderizar el footer completo del sitio con 4 columnas.
 * - Mantener layout separado del contenido.
 *
 * Parámetros:
 * - brand: Información principal de marca.
 * - infoLinks: Links informativos.
 * - contact: Datos de contacto.
 * - socialLinks: Links a redes.
 * - copyright: Texto legal inferior.
 */
export function Footer({
  brand,
  infoLinks,
  contact,
  socialLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className={s.root}>
      <div className={s.inner}>
        <div className={s.grid}>
          <div>
            <div className={s.title}>{brand.name}</div>
            {brand.tagline ? <p className={s.text}>{brand.tagline}</p> : null}
          </div>

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

          <div>
            <div className={s.title}>Contacto</div>
            <div className={s.list}>
              {contact.email ? <div className={s.contactItem}>{contact.email}</div> : null}
              {contact.phone ? <div className={s.contactItem}>{contact.phone}</div> : null}
              {contact.schedule ? <div className={s.contactItem}>{contact.schedule}</div> : null}
            </div>
          </div>

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