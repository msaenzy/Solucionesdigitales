import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X, ArrowRight, Layers, ShieldCheck, Sparkles, Clock, Globe, MessageSquare, Code } from 'lucide-react';
import { ThemeMode } from '../../types';
import { SimulatorSection } from '../SimulatorSection';

interface PlanesPageProps {
  theme: ThemeMode;
  onSelectPlan: (planTitle: string) => void;
}

export default function PlanesPage({ theme, onSelectPlan }: PlanesPageProps) {
  const isLight = theme === 'light';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plansDetail = [
    {
      id: 'plan-1',
      badge: 'BÁSICO & EFECTIVO',
      title: 'Landing Page Esencial',
      subtitle: '3 Páginas / Secciones',
      description: 'Ideal para profesionales independientes, consultorios y servicios que buscan presencia limpia y ágil.',
      timeframe: 'Alojamiento en Netlify incluido',
      included: [
        'Estructura de 3 Páginas principales',
        'Alojamiento web en plataforma Netlify',
        'Conversión Directa a WhatsApp (UX/UI)',
        'Diseño 100% Mobile-First (Pantallas táctiles)',
        'Velocidad de Carga Extrema optimizada',
        'Atención y comunicación directa en Ecuador',
      ],
      excluded: [
        'Dominio propio .COM incluido (1 año)',
        'SEO Local Avanzado para buscadores',
        'Galería de proyectos o catálogo interactivo',
      ],
      popular: false,
    },
    {
      id: 'plan-2',
      badge: 'MÁS SOLICITADO EN ECUADOR',
      title: 'Landing Page Corporativa Pro',
      subtitle: '4 Páginas + Dominio .COM',
      description: 'Para clínicas, marcas y empresas que necesitan transmitir máxima credibilidad, autoridad y destacar.',
      timeframe: 'Dominio y Hosting incluidos por 1 año',
      included: [
        'Estructura de 4 Páginas completas',
        'Dominio propio .COM incluido (1 año)',
        'Alojamiento & Hosting de Alto Rendimiento',
        'Conversión Directa a WhatsApp (UX/UI)',
        'Diseño 100% Mobile-First',
        'Velocidad de Carga Extrema',
        'Galería de proyectos, trabajos o testimonios',
        'SEO Local Avanzado para Ecuador',
        'Atención y comunicación directa en Ecuador',
      ],
      excluded: [
        'Formulario de contacto personalizado',
      ],
      popular: true,
    },
    {
      id: 'plan-3',
      badge: 'COMPLETO & INTERACTIVO',
      title: 'Landing Page Multi-Sección Elite',
      subtitle: 'Páginas Ilimitadas + Full SEO',
      description: 'Estructura extendida para empresas que requieren mostrar un amplio catálogo de servicios o menú interactivo.',
      timeframe: 'Hosting Corporativo + SSL Dedicado',
      included: [
        'Estructura extendida (6+ Páginas / Secciones)',
        'Formulario de contacto personalizado',
        'Dominio propio .COM + Correos Corporativos',
        'Hosting Corporativo Premium & SSL Dedicado',
        'Conversión Directa a WhatsApp (UX/UI)',
        'Diseño 100% Mobile-First',
        'Velocidad de Carga Extrema',
        'Catálogo / Menú interactivo completo',
        'SEO Local Avanzado + Integración Google Maps',
        'Atención y Asesoría Directa en Ecuador',
      ],
      excluded: [],
      popular: false,
    },
  ];

  const faqs = [
    {
      q: '¿Cómo es la modalidad de pago?',
      a: 'Trabajamos con un anticipo inicial al comenzar el proyecto y el saldo restante contra entrega y revisión final de tu satisfacción.',
    },
    {
      q: '¿El dominio y hosting vienen incluidos?',
      a: 'Sí, en el Plan Corporativo Pro y Multi-Sección Elite incluimos el registro de tu dominio .COM y hosting de alto rendimiento sin costo adicional. En el Plan Esencial, la web queda alojada en Netlify.',
    },
    {
      q: '¿Necesito tener los textos e imágenes listos antes de empezar?',
      a: 'Si los tienes, ¡excelente! Si no los tienes, nosotros te ayudamos a estructurar el texto persuasivo y seleccionar imágenes profesionales de alta calidad acordes a tu negocio.',
    },
    {
      q: '¿Cuánto tiempo tarda la entrega?',
      a: 'Los tiempos de desarrollo son ágiles y oportunos, iniciando inmediatamente después de recibir la información básica de tu empresa.',
    },
    {
      q: '¿Puedo solicitar cambios antes del lanzamiento final?',
      a: 'Por supuesto. Todos nuestros proyectos incluyen una fase de revisión para ajustar detalles visuales y textos según tus observaciones antes de publicar la web.',
    },
  ];

  return (
    <div className="space-y-16 py-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span
          className={`font-mono text-xs tracking-widest uppercase font-semibold px-3.5 py-1 rounded-full border ${
            isLight
              ? 'bg-white border-[#C5A059]/40 text-[#2D3436] font-bold'
              : 'bg-cyan-950/50 border-cyan-400/30 text-cyan-400'
          }`}
        >
          Inversión Clara & Transparente
        </span>
        <h1
          className={`font-display font-extrabold text-3xl sm:text-5xl mt-4 tracking-tight ${
            isLight ? 'text-[#2D3436]' : 'text-white'
          }`}
        >
          Planes diseñados a la medida de tu presencia digital
        </h1>
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isLight ? 'text-[#2D3436]/80' : 'text-slate-400'}`}>
          Compara fácilmente lo que incluye y no incluye cada plan. Todos nuestros paquetes están orientados a crear una Landing Page rápida, moderna y 100% responsiva para Ecuador.
        </p>
      </motion.div>

      {/* Plans Detail Cards */}
      <div className="grid lg:grid-cols-3 gap-8 items-stretch">
        {plansDetail.map((p) => {
          const isPop = p.popular;
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className={`relative flex flex-col rounded-3xl p-7 sm:p-8 border transition-all duration-300 ${
                isPop
                  ? isLight
                    ? 'bg-white border-[#C5A059] shadow-xl ring-2 ring-[#C5A059]/35 lg:-translate-y-2'
                    : 'bg-gradient-to-b from-cyan-950/40 via-slate-900 to-slate-950 border-cyan-400 shadow-2xl ring-1 ring-cyan-400/40 lg:-translate-y-2'
                  : isLight
                  ? 'bg-[#F2F5F9] border-[#4A6A8C]/20 shadow-sm hover:border-[#4A6A8C]/50'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`font-mono text-[10px] font-extrabold uppercase px-3 py-1 rounded-full border ${
                    isPop
                      ? isLight
                        ? 'bg-[#37526E] border-[#C5A059]/60 text-white'
                        : 'bg-cyan-950 border-cyan-400/50 text-cyan-300'
                      : isLight
                      ? 'bg-[#4A6A8C] border-[#4A6A8C] text-white'
                      : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}
                >
                  {p.badge}
                </span>
              </div>

              <h2 className={`font-display font-extrabold text-2xl mb-1 ${isLight ? 'text-[#2D3436]' : 'text-white'}`}>
                {p.title}
              </h2>

              <div className="mt-1 mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#4A6A8C]/10 border border-[#4A6A8C]/25 text-[#4A6A8C] dark:text-cyan-300 text-xs font-bold w-fit">
                <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{p.subtitle}</span>
              </div>

              <p className={`text-xs leading-relaxed mb-4 ${isLight ? 'text-[#2D3436]/80' : 'text-slate-400'}`}>
                {p.description}
              </p>

              <div
                className={`inline-flex items-center gap-2 text-xs font-mono py-2 px-3 rounded-xl mb-6 ${
                  isLight ? 'bg-white border border-[#4A6A8C]/20 text-[#2D3436]' : 'bg-slate-800 text-slate-300'
                }`}
              >
                <Clock className="w-3.5 h-3.5 text-[#4A6A8C] dark:text-cyan-400" />
                <span>{p.timeframe}</span>
              </div>

              {/* Features List */}
              <div className="flex-1 space-y-5 mb-8">
                {/* Incluye */}
                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#4A6A8C] dark:text-emerald-400 mb-2.5 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 stroke-[3] text-[#C5A059]" />
                    <span>Lo que Sí Incluye:</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs">
                    {p.included.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="p-0.5 rounded-full mt-0.5 shrink-0 bg-[#4A6A8C]/15 text-[#4A6A8C] dark:text-emerald-400 border border-[#4A6A8C]/30">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className={isLight ? 'text-[#2D3436] font-medium' : 'text-slate-300'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excluded features */}
                {p.excluded.length > 0 && (
                  <div className="pt-3 border-t border-dashed border-[#4A6A8C]/15 dark:border-slate-800">
                    <ul className="space-y-2 text-xs">
                      {p.excluded.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="p-0.5 rounded-full mt-0.5 shrink-0 bg-rose-500/10 text-rose-500 dark:text-rose-400 border border-rose-500/20">
                            <X className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span className="text-[#2D3436]/40 dark:text-slate-500 font-normal">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button
                onClick={() => onSelectPlan(p.title)}
                className={`cta-shimmer w-full py-3.5 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md ${
                  isPop
                    ? isLight
                      ? 'bg-[#4A6A8C] hover:bg-[#37526E] text-white shadow-[#4A6A8C]/20'
                      : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-cyan-400/20'
                    : isLight
                    ? 'border border-[#4A6A8C]/40 bg-white hover:bg-[#F2F5F9] text-[#2D3436]'
                    : 'border border-slate-700 hover:border-cyan-400 text-slate-200 bg-slate-800/60'
                }`}
              >
                Solicitar Cotización de este Plan
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Simulator Section (Simulador de Mensaje Directo a WhatsApp) */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8 my-8">
        <SimulatorSection theme={theme} />
      </div>

      {/* Included Perks Banner */}
      <div
        className={`rounded-3xl p-8 sm:p-10 border transition-colors ${
          isLight
            ? 'bg-[#F2F5F9] border-[#4A6A8C]/25 text-[#2D3436]'
            : 'bg-slate-900/60 border-slate-800 text-slate-200'
        }`}
      >
        <h3 className={`font-display font-extrabold text-xl sm:text-2xl mb-6 text-center ${isLight ? 'text-[#2D3436]' : 'text-white'}`}>
          Todo lo que incluye la garantía Spondylus Digital
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex gap-3 items-start">
            <Globe className="w-5 h-5 text-[#4A6A8C] dark:text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm">Servidor Rápido</p>
              <p className="text-xs text-[#2D3436]/70 dark:text-slate-400 mt-0.5">Alojamiento de alto rendimiento y bajo tiempo de respuesta.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <MessageSquare className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm">WhatsApp Directo</p>
              <p className="text-xs text-[#2D3436]/70 dark:text-slate-400 mt-0.5">Botones de contacto a 1 solo clic para tus visitantes.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <ShieldCheck className="w-5 h-5 text-[#4A6A8C] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm">Certificación SSL</p>
              <p className="text-xs text-[#2D3436]/70 dark:text-slate-400 mt-0.5">Conexión cifrada con candado de seguridad HTTPS.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <Code className="w-5 h-5 text-[#4A6A8C] dark:text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm">Código a Medida</p>
              <p className="text-xs text-[#2D3436]/70 dark:text-slate-400 mt-0.5">Construcción limpia sin dependencias pesadas.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center">
          <h2 className={`font-display font-extrabold text-2xl sm:text-3xl ${isLight ? 'text-[#2D3436]' : 'text-white'}`}>
            Preguntas Frecuentes sobre la Inversión
          </h2>
          <p className={`mt-2 text-sm ${isLight ? 'text-[#2D3436]/80' : 'text-slate-400'}`}>
            Resolvemos tus inquietudes antes de iniciar la construcción de tu Landing Page.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border transition-all ${
                isLight ? 'bg-[#F2F5F9] border-[#4A6A8C]/20 text-[#2D3436]' : 'bg-slate-900/50 border-slate-800'
              }`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between font-bold text-sm cursor-pointer"
              >
                <span className={isLight ? 'text-[#2D3436]' : 'text-white'}>{faq.q}</span>
                <span className="text-[#4A6A8C] dark:text-cyan-400 text-lg font-mono">
                  {openFaq === idx ? '−' : '+'}
                </span>
              </button>
              {openFaq === idx && (
                <div className={`px-5 pb-5 text-xs leading-relaxed border-t pt-3 ${isLight ? 'border-[#4A6A8C]/15 text-[#2D3436]/80' : 'border-slate-800 text-slate-400'}`}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

