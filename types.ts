
export type Language = 'es' | 'en';

export interface Lead {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  phone?: string;
  website?: string;
  urgency: 'asap' | 'this_month' | 'next_months' | 'just_exploring';
  sector: string;
  message: string;
  source: string;
  status: 'new' | 'contacted' | 'rejected' | 'customer';
  language: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum UrgencyLevels {
  ASAP = 'Lo antes posible',
  THIS_MONTH = 'Este mes',
  NEXT_MONTHS = 'Próximos meses',
  JUST_EXPLORING = 'Solo explorando'
}

export const SECTORS = [
  'Restauración / Hostelería',
  'Salud / Clínicas',
  'Retail / E-commerce',
  'Inmobiliaria',
  'Servicios Profesionales',
  'Educación',
  'Otro'
];
