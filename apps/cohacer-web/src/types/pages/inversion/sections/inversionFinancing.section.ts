export type InversionFinancingOption = {
  icon: string;
  title: string;
  items: string[];
};

export type InversionFinancingCta = {
  label: string;
  href: string;
};

export type InversionFinancingContent = {
  title: string;
  options: InversionFinancingOption[];
  cta: InversionFinancingCta;
};