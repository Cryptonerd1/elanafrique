
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

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}
  