import { ReactNode } from 'react';
import { Zap, Star, Shield, ArrowRight } from 'lucide-react';
import React from 'react';

export type PlanFeature = {
  name: string;
  ajuste: boolean | string;
  prende: boolean | string;
  full: boolean | string;
  pro: boolean | string;
};

export type ShopifyPlan = {
  id: string;
  name: string;
  price: string;
  bonus: string;
  desc: string;
  iconName: 'Zap' | 'Star' | 'Shield' | 'ArrowRight';
  recommended: boolean;
  color: string;
};

export const plans: ShopifyPlan[] = [
  {
    id: "ajuste",
    name: "AJUSTE",
    price: "$320.000",
    bonus: "Auditoría CRO Gratis",
    desc: "Para tiendas ya creadas.",
    iconName: 'Zap',
    recommended: false,
    color: 'blue'
  },
  {
    id: "prende",
    name: "PRENDE",
    price: "$680.000",
    bonus: "Theme Premium Incluido",
    desc: "Emprendedores que inician.",
    iconName: 'Star',
    recommended: false,
    color: 'amber'
  },
  {
    id: "full",
    name: "FULL",
    price: "$1.200.000",
    bonus: "Setup GA4 Sin Costo",
    desc: "Negocios en crecimiento.",
    iconName: 'Shield',
    recommended: true,
    color: 'pink'
  },
  {
    id: "pro",
    name: "PRO",
    price: "$1.200.000",
    bonus: "Consultoría SEO Inicial",
    desc: "Marcas que desean escalar.",
    iconName: 'ArrowRight',
    recommended: false,
    color: 'emerald'
  }
];

export const features: PlanFeature[] = [
  { name: "Plantilla Envato Premium", ajuste: true, prende: true, full: true, pro: true },
  { name: "Configuración tienda Shopify", ajuste: "Revisión general", prende: true, full: true, pro: true },
  { name: "Carga de productos", ajuste: false, prende: "Hasta 70", full: "Hasta 70", pro: "Hasta 300" },
  { name: "Dominio y validación correo", ajuste: false, prende: true, full: true, pro: true },
  { name: "Medios de pago locales", ajuste: false, prende: "1 Medio", full: "1 Medio", pro: "Todos" },
  { name: "Integración Multicourier", ajuste: false, prende: true, full: true, pro: true },
  { name: "Redes Sociales y WhatsApp", ajuste: true, prende: true, full: true, pro: true },
  { name: "Notificaciones automáticas", ajuste: true, prende: true, full: true, pro: true },
  { name: "Carritos abandonados", ajuste: "Básico", prende: "Básico", full: "Avanzado", pro: "Avanzado" },
  { name: "Integración Analytics y Pixel", ajuste: false, prende: false, full: true, pro: "Avanzado (GA4)" },
  { name: "Optimización SEO Básica", ajuste: false, prende: false, full: true, pro: true },
  { name: "Newsletter / Suscripción", ajuste: false, prende: false, full: true, pro: true },
  { name: "Chat en vivo (Tawk.to)", ajuste: false, prende: false, full: true, pro: true },
  { name: "Integración ERP/Bsale", ajuste: false, prende: false, full: false, pro: "Previa evaluación" },
  { name: "Marketing automatizado", ajuste: false, prende: false, full: false, pro: "Mailchimp/Klaviyo" },
  { name: "Google Ads y Meta Ads", ajuste: false, prende: false, full: false, pro: true },
  { name: "Soporte técnico", ajuste: "1 Videollamada", prende: "3 meses (3 cambios)", full: "Capacitación", pro: "Preferente + Auditoría" },
  { name: "Tiempo de entrega", ajuste: "5-10 días", prende: "Hasta 4 sem.", full: "Hasta 4 sem.", pro: "Hasta 8 sem." },
];
