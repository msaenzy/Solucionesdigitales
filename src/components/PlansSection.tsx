import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ArrowRight, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { ThemeMode, PricingPlan } from '../types';

interface PlansSectionProps {
  theme: ThemeMode;
  onSelectPlan?: (planTitle: string) => void;
}

export default function PlansSection({ theme, onSelectPlan }: PlansSectionProps) {
  const isLight = theme === 'light';

  const plans: PricingPlan[] = [
    {
      id: 'plan-1',
      planNumber: 'PLAN 01',
      title: 'Landing Page Esencial',
      subtitle: '3 Páginas / Secciones',
      description:
        'Ideal para profesionales e independientes que buscan una presencia digital moderna, ágil y confiable.',
      features: [
        'Estructura de 3 Páginas / Secciones principales',
        'Alojamiento web en plataforma Netlify incluido',
        'Conversión Directa a WhatsApp (UX/UI)',
        'Diseño 100% Mobile-First (Pantallas táctiles)',
        'Velocidad de Carga Extrema optimizada',
        'Atención y comunicación directa en Ecuador',
      ],
      featureItems: [
        { text: 'Estructura de 3 Páginas principales', included: true, highlight: true },
        { text: 'Alojamiento web en plataforma Netlify', included: true, highlight: true },
        { text: 'Conversión Directa a WhatsApp (UX/UI)', included: true },
        { text: 'Diseño 100% Mobile-First (Pantallas táctiles)', included: true },
        { text: 'Velocidad de Carga Extrema optimizada', included: true },
        { text: 'Atención y comunicación directa en Ecuador', included: true },
        { text: 'Dominio propio .COM incluido (1 año)', included: false },
        { text: 'SEO Local Avanzado para buscadores', included: false },
        { text: 'Galería de proyectos o catálogo interactivo', included: false },
      ],
      ctaText: 'Quiero el Plan Esencial',
    },
    {
      id: 'plan-2',
      badge: 'MÁS VENDIDO / RECOMENDADO',
      planNumber: 'PLAN 02',
      title: 'Landing Page Corporativa Pro',
      subtitle: '4 Páginas + Dominio .COM',
      description:
        'Para clínicas, marcas y negocios que buscan proyectar máxima autoridad, transmitir credibilidad y captar prospectos.',
      features: [
        'Estructura de 4 Páginas completas',
        'Dominio propio .COM incluido (1 año)',
        'Alojamiento y Hosting de Alto Rendimiento',
        'Conversión Directa a WhatsApp (UX/UI)',
        'Diseño 100% Mobile-First',
        'Velocidad de Carga Extrema',
        'Galería de proyectos, trabajos o testimonios',
        'SEO Local Avanzado para Ecuador',
        'Atención y comunicación directa en Ecuador',
      ],
      featureItems: [
        { text: 'Estructura de 4 Páginas completas', included: true, highlight: true },
        { text: 'Dominio propio .COM incluido (1 año)', included: true, highlight: true },
        { text: 'Alojamiento & Hosting de Alto Rendimiento', included: true, highlight: true },
        { text: 'Conversión Directa a WhatsApp (UX/UI)', included: true },
        { text: 'Diseño 100% Mobile-First', included: true },
        { text: 'Velocidad de Carga Extrema', included: true },
        { text: 'Galería de proyectos, trabajos o testimonios', included: true },
        { text: 'SEO Local Avanzado para Ecuador', included: true },
        { text: 'Atención y comunicación directa en Ecuador', included: true },
        { text: 'Formulario de contacto personalizado', included: false },
      ],
      ctaText: 'Quiero el Plan Recomendado',
      isPopular: true,
    },
    {
      id: 'plan-3',
      badge: 'MÁXIMO ALCANCE',
      planNumber: 'PLAN 03',
      title: 'Landing Page Multi-Sección Elite',
      subtitle: 'Páginas Ilimitadas + Full SEO',
      description:
        'Estructura completa y detallada para empresas que requieren mostrar un catálogo interactivo extenso de servicios.',
      features: [
        'Estructura extendida (6+ Páginas / Secciones)',
        'Dominio propio .COM + Correos Corporativos',
        'Hosting Corporativo Premium & SSL Dedicado',
        'Conversión Directa a WhatsApp (UX/UI)',
        'Diseño 100% Mobile-First',
        'Velocidad de Carga Extrema',
        'Catálogo / Menú interactivo completo de servicios',
        'SEO Local Avanzado + Integración Google Maps',
        'Atención y Asesoría Directa en Ecuador',
      ],
      featureItems: [
        { text: 'Estructura extendida (6+ Páginas / Secciones)', included: true, highlight: true },
        { text: 'Dominio propio .COM + Correos Corporativos', included: true, highlight: true },
        { text: 'Hosting Corporativo Premium & SSL Dedicado', included: true, highlight: true },
        { text: 'Formulario de contacto personalizado', included: true, highlight: true },
        { text: 'Conversión Directa a WhatsApp (UX/UI)', included: true },
        { text: 'Diseño 100% Mobile-First', included: true },
        { text: 'Velocidad de Carga Extrema', included: true },
        { text: 'Catálogo / Menú interactivo completo', included: true },
        { text: 'SEO Local Avanzado + Integración Google Maps', included: true },
        { text: 'Atención y Asesoría Directa en Ecuador', included: true },
      ],
      ctaText: 'Quiero el Plan Elite',
    },
  ];

  return (
    <section
      id="planes"
      className={`relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${
        isLight
          ? 'bg-[#E0E5EC] border-[#4A6A8C]/15 text-[#2D3436] shell-ridges-light'
          : 'bg-[#070911] border-slate-900 text-slate-300 shell-ridges-dark'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span
            className={`font-mono text-xs tracking-widest uppercase font-semibold ${
              isLight ? 'text-[#4A6A8C]' : 'text-[#6787A9]'
            }`}
          >
            Inversión Transparente & Comparativa
          </span>
          <h2
            className={`font-display font-extrabold text-3xl md:text-4xl mt-3 tracking-tight ${
              isLight ? 'text-[#2D3436]' : 'text-white'
            }`}
          >
            Planes hechos para cada etapa de tu negocio
          </h2>
          <p className={`mt-4 text-base leading-relaxed ${isLight ? 'text-[#2D3436]/80' : 'text-slate-400'}`}>
            Compara fácilmente las características de cada plan. Todos nuestros paquetes están diseñados con arquitectura mobile-first y atención directa en Ecuador.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, index) => {
            const isPopular = p.isPopular;
            const includedList = p.featureItems?.filter((item) => item.included) || [];
            const excludedList = p.featureItems?.filter((item) => !item.included) || [];

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col rounded-3xl p-7 sm:p-8 border transition-all duration-300 ${
                  isPopular
                    ? isLight
                      ? 'bg-white border-[#C5A059] shadow-2xl shadow-[#4A6A8C]/15 lg:-translate-y-3 ring-2 ring-[#C5A059]/35'
                      : 'bg-gradient-to-b from-cyan-950/40 via-slate-900 to-slate-950 border-cyan-400 shadow-2xl shadow-cyan-950/70 lg:-translate-y-3 ring-1 ring-cyan-400/40'
                    : isLight
                    ? 'bg-[#F2F5F9] border-[#4A6A8C]/20 shadow-sm hover:border-[#4A6A8C]/50 hover:bg-white'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {p.badge && (
                  <span
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 font-extrabold tracking-wider text-[11px] px-4 py-1 rounded-full uppercase shadow-md flex items-center gap-1.5 ${
                      isPopular
                        ? 'bg-[#37526E] text-white border border-[#C5A059]/60'
                        : isLight
                        ? 'bg-[#4A6A8C] text-white'
                        : 'bg-slate-800 text-cyan-300 border border-cyan-400/30'
                    }`}
                  >
                    {isPopular && <Sparkles className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />}
                    <span>{p.badge}</span>
                  </span>
                )}

                {/* Plan Header */}
                <div className="mb-5 pt-2">
                  <h3
                    className={`font-display font-extrabold text-2xl mt-1 ${
                      isLight ? 'text-[#2D3436]' : 'text-white'
                    }`}
                  >
                    {p.title}
                  </h3>

                  {/* Subtitle Pill (e.g. 3 Páginas, 4 Páginas + Dominio) */}
                  {p.subtitle && (
                    <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#4A6A8C]/10 border border-[#4A6A8C]/25 text-[#4A6A8C] dark:text-cyan-300 text-xs font-bold">
                      <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{p.subtitle}</span>
                    </div>
                  )}

                  <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${isLight ? 'text-[#2D3436]/80' : 'text-slate-400'}`}>
                    {p.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#4A6A8C]/15 dark:bg-slate-800 my-4" />

                {/* Features Section */}
                <div className="flex-1 space-y-5 mb-8">
                  {/* INCLUYE (✓) */}
                  <div>
                    <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#4A6A8C] dark:text-emerald-400 mb-3 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 stroke-[3] text-[#C5A059]" />
                      <span>Lo que Sí Incluye:</span>
                    </h4>

                    <ul className="space-y-2.5 text-xs sm:text-sm">
                      {includedList.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div
                            className={`p-0.5 rounded-full mt-0.5 shrink-0 bg-[#4A6A8C]/15 text-[#4A6A8C] dark:text-emerald-400 border border-[#4A6A8C]/30`}
                          >
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span
                            className={`${
                              item.highlight
                                ? isLight
                                  ? 'text-[#2D3436] font-bold'
                                  : 'text-white font-bold'
                                : isLight
                                ? 'text-[#2D3436]/90 font-medium'
                                : 'text-slate-300'
                            }`}
                          >
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded Features (✕) */}
                  {excludedList.length > 0 && (
                    <div className="pt-3 border-t border-dashed border-[#4A6A8C]/15 dark:border-slate-800">
                      <ul className="space-y-2 text-xs">
                        {excludedList.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <div className="p-0.5 rounded-full mt-0.5 shrink-0 bg-rose-500/10 text-rose-500 dark:text-rose-400 border border-rose-500/20">
                              <X className="w-3.5 h-3.5 stroke-[2.5]" />
                            </div>
                            <span className="text-[#2D3436]/40 dark:text-slate-500 font-normal">
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <a
                  href="#contacto"
                  onClick={() => onSelectPlan && onSelectPlan(p.title)}
                  className={`cta-shimmer text-center font-bold text-sm px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    isPopular
                      ? isLight
                        ? 'bg-[#4A6A8C] hover:bg-[#37526E] text-white shadow-[#4A6A8C]/25'
                        : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-cyan-400/25'
                      : isLight
                      ? 'border border-[#4A6A8C]/40 hover:border-[#4A6A8C] bg-white hover:bg-[#F2F5F9] text-[#2D3436]'
                      : 'border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 text-slate-200 bg-slate-800/60'
                  }`}
                >
                  <span>{p.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

