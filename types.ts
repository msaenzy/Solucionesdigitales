export type ThemeMode = 'light' | 'dark';

export interface PlanFeatureItem {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface PricingPlan {
  id: string;
  badge?: string;
  planNumber: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  featureItems?: PlanFeatureItem[];
  ctaText: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  stars: number;
  quote: string;
  author: string;
  roleCompany: string;
  initials: string;
}

export interface ValueProp {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  nombre: string;
  empresa: string;
  telefono: string;
  servicio: string;
  mensaje?: string;
}
