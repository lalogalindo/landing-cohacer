// src/content/data/homePage/index.ts
import rawHero from "@/content/data/homePage/hero.json";
import rawEligibility from "@/content/data/homePage/eligibility.json";
import rawBenefits from "@/content/data/homePage/benefits.json";
import rawProcess from "@/content/data/homePage/process.json";
import rawTestimonials from "@/content/data/homePage/testimonials.json";

import type { HeroVariant } from "@cohacer/ui";
import type { HeroSection } from "@/types/sections/hero.section";

import type { EligibilityContent } from "@/types/pages/home/sections/eligibility.section";
import type {
  BenefitIconKey,
  BenefitsGridContent,
} from "@/types/pages/home/sections/benefitsGrid.section";
import type { ProcessStepsContent } from "@/types/pages/home/sections/processSteps.section";
import type { TestimonialsGridContent } from "@/types/pages/home/sections/testimonialsGrid.section";
import type {
  InvestmentLeadFormContent,
  InvestmentLeadFormField,
} from "@/types/pages/home/sections/investmentLeadForm.section";
import rawInvestmentLeadForm from "@/content/data/homePage/investmentLeadForm.json";

/**
 * RawHeroJson
 *
 * Propósito:
 * - Shape del JSON crudo del hero (con strings “widened”).
 */
type RawHeroJson = {
  variant: string;
  className: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  media?: { src: string; alt: string };
  overlayOpacity: number;
};

/**
 * RawBenefitsJson
 *
 * Propósito:
 * - Shape del JSON crudo de beneficios (con icon como string).
 */
type RawBenefitsJson = {
  title: string;
  subtitle?: string;
  items: Array<{
    icon?: string;
    title: string;
    description?: string;
  }>;
};

/**
 * RawLeadFormJson
 *
 * Propósito:
 * - Shape del JSON crudo del lead form (sin `type` por field).
 */
/**
 * RawInvestmentLeadFormJson
 *
 * Propósito:
 * - Shape del JSON crudo de la sección unificada de inversión + formulario.
 */
type RawInvestmentLeadFormJson = {
  title: string;
  investment: {
    amount: string;
    label: string;
  };
  form: {
    title: string;
    subtitle?: string;
    submitLabel: string;
    privacyText: string;
    privacyHref: string;
    fields: Array<
      | {
          key: string;
          label: string;
          required?: boolean;
          placeholder?: string;
          options?: undefined;
        }
      | {
          key: string;
          label: string;
          required?: boolean;
          options: string[];
          placeholder?: undefined;
        }
    >;
  };
};

/**
 * toHeroVariant
 *
 * Propósito:
 * - Convertir y validar `variant` del JSON a `HeroVariant`.
 *
 * Parámetros:
 * - v: Valor crudo del JSON.
 *
 * Regresa:
 * - `HeroVariant` válido.
 */
function toHeroVariant(v: string): HeroVariant {
  if (v === "background" || v === "imageLeft" || v === "imageRight") return v;
  return "background";
}

/**
 * toBenefitIconKey
 *
 * Propósito:
 * - Convertir y validar `icon` del JSON a `BenefitIconKey`.
 *
 * Parámetros:
 * - v: Valor crudo del JSON.
 *
 * Regresa:
 * - `BenefitIconKey` si es válido; si no, regresa undefined.
 */
function toBenefitIconKey(v?: string): BenefitIconKey | undefined {
  if (!v) return undefined;
  if (v === "trendUp" || v === "money" || v === "graduation" || v === "spark") return v;
  return undefined;
}

/**
 * mapHeroJsonToHeroProps
 *
 * Propósito:
 * - Convertir el JSON crudo del Hero a props tipadas del `HeroSection` (sin `type`/`id`).
 *
 * Parámetros:
 * - raw: JSON crudo del hero.
 *
 * Regresa:
 * - Props tipadas para `HeroSection` sin `type` ni `id`.
 */
function mapHeroJsonToHeroProps(
  raw: RawHeroJson
): Omit<HeroSection, "type" | "id"> {
  return {
    variant: toHeroVariant(raw.variant),
    className: raw.className,
    eyebrow: raw.eyebrow,
    title: raw.title,
    subtitle: raw.subtitle,
    primaryCta: raw.primaryCta,
    secondaryCta: raw.secondaryCta,
    media: raw.media,
    overlayOpacity: raw.overlayOpacity,
  };
}

/**
 * mapBenefitsJsonToBenefitsGridContent
 *
 * Propósito:
 * - Convertir el JSON crudo de beneficios al tipo `BenefitsGridContent`.
 *
 * Parámetros:
 * - raw: JSON crudo de beneficios.
 *
 * Regresa:
 * - `BenefitsGridContent` tipado, normalizando `icon`.
 */
function mapBenefitsJsonToBenefitsGridContent(raw: RawBenefitsJson): BenefitsGridContent {
  return {
    title: raw.title,
    subtitle: raw.subtitle,
    items: raw.items.map((it) => ({
      icon: toBenefitIconKey(it.icon),
      title: it.title,
      description: it.description,
    })),
  };
}

/**
 * toInvestmentLeadFormField
 *
 * Propósito:
 * - Convertir un field crudo (sin `type`) a `InvestmentLeadFormField` (con `type`).
 *
 * Parámetros:
 * - raw: Field crudo desde JSON.
 *
 * Regresa:
 * - Field tipado para el componente.
 *
 * Información adicional:
 * - Si trae `options`, se trata como `select`.
 * - Si no trae `options`, se trata como `text`.
 * - El `inputMode` se infiere por `key` cuando aplica.
 */
function toInvestmentLeadFormField(
  raw: RawInvestmentLeadFormJson["form"]["fields"][number]
): InvestmentLeadFormField {
  const key = raw.key;

  if ("options" in raw && Array.isArray(raw.options)) {
    if (key !== "program" && key !== "source") {
      return {
        type: "select",
        key: "program",
        label: raw.label,
        required: raw.required,
        options: raw.options,
      };
    }

    return {
      type: "select",
      key,
      label: raw.label,
      required: raw.required,
      options: raw.options,
    };
  }

  if (key !== "fullName" && key !== "email" && key !== "phone") {
    return {
      type: "text",
      key: "fullName",
      label: raw.label,
      required: raw.required,
      placeholder: raw.placeholder,
      inputMode: "text",
    };
  }

  const inputMode =
    key === "email" ? "email" : key === "phone" ? "tel" : "text";

  return {
    type: "text",
    key,
    label: raw.label,
    required: raw.required,
    placeholder: raw.placeholder,
    inputMode,
  };
}


/**
 * mapInvestmentLeadFormJsonToContent
 *
 * Propósito:
 * - Convertir el JSON crudo de la sección unificada al tipo `InvestmentLeadFormContent`.
 *
 * Parámetros:
 * - raw: JSON crudo de inversión + formulario.
 *
 * Regresa:
 * - Contenido tipado para la sección del Home.
 */
function mapInvestmentLeadFormJsonToContent(
  raw: RawInvestmentLeadFormJson
): InvestmentLeadFormContent {
  return {
    title: raw.title,
    investment: {
      amount: raw.investment.amount,
      label: raw.investment.label,
    },
    form: {
      title: raw.form.title,
      subtitle: raw.form.subtitle,
      submitLabel: raw.form.submitLabel,
      privacyText: raw.form.privacyText,
      privacyHref: raw.form.privacyHref,
      fields: raw.form.fields.map(toInvestmentLeadFormField),
    },
  };
}

/**
 * homeHeroContent
 *
 * Propósito:
 * - Contenido tipado del Hero para Home.
 */
export const homeHeroContent = mapHeroJsonToHeroProps(rawHero as RawHeroJson);

/**
 * homeEligibilityContent
 *
 * Propósito:
 * - Contenido tipado de la sección de elegibilidad.
 */
export const homeEligibilityContent = rawEligibility as EligibilityContent;

/**
 * homeBenefitsGridContent
 *
 * Propósito:
 * - Contenido tipado de la sección de beneficios (grid).
 */
export const homeBenefitsGridContent = mapBenefitsJsonToBenefitsGridContent(
  rawBenefits as RawBenefitsJson
);

/**
 * homeProcessStepsContent
 *
 * Propósito:
 * - Contenido tipado de la sección de proceso (pasos).
 */
export const homeProcessStepsContent: ProcessStepsContent = rawProcess;

/**
 * homeTestimonialsGridContent
 *
 * Propósito:
 * - Contenido tipado de la sección de testimonios en grid.
 */
export const homeTestimonialsGridContent: TestimonialsGridContent = rawTestimonials;
/**
 * homeInvestmentLeadFormContent
 *
 * Propósito:
 * - Contenido tipado de la sección unificada de inversión + formulario.
 *
 * Información adicional:
 * - Se mapea para inyectar el discriminante `type` por field sin ensuciar el JSON.
 */
export const homeInvestmentLeadFormContent = mapInvestmentLeadFormJsonToContent(
  rawInvestmentLeadForm as RawInvestmentLeadFormJson
);