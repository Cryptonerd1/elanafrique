
export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: IconName;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: IconName;
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  iconName: IconName;
}

export interface ImpactStat {
  id: string;
  value: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  iconName: IconName;
}

export type IconName =
  | "star"
  | "check"
  | "arrow"
  | "phone"
  | "mail"
  | "location"
  | "facebook"
  | "twitter"
  | "linkedin"
  | "instagram"
  | "menu"
  | "close"
  | "shield"
  | "chart"
  | "people"
  | "lightbulb"
  | "globe"
  | "gear"
  | "heart"
  | "leaf";

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ContactFormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
}
  