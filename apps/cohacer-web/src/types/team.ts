/**
 * Tipos para la sección de Equipo.
 *
 * Propósito:
 * - Tipar el JSON `team.json`.
 * - Tipar `section.content` cuando `section.type === "team"`.
 * - Evitar casteos (`as`) al construir `content.sections`.
 */

export type TeamSocialKey = "linkedin" | "x" | "instagram";

export type TeamSocialLinks = Partial<Record<TeamSocialKey, string>>;

export type TeamEmployee = {
  id: string;
  name: string;
  role: string;
  quote: string;

  avatar: {
    src: string;
    alt: string;
  };

  socials?: TeamSocialLinks;
};

export type TeamContent = {
  sectionTitle: string;
  sectionSubtitle?: string;
  employees: TeamEmployee[];
};