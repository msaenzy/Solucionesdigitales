import React from 'react';
import { motion } from 'motion/react';
import { Zap, MessageCircle, Headphones, CheckCircle2, XCircle, ArrowRight, Sparkles, Smartphone } from 'lucide-react';
import { ThemeMode } from '../../types';
import { ProcessPathSection } from '../ProcessPathSection';

interface NosotrosPageProps {
  theme: ThemeMode;
  onNavigateTo: (tab: string) => void;
}

export default function NosotrosPage({ theme, onNavigateTo }: NosotrosPageProps) {
  const isLight = theme === 'light';

  const pillars = [
    {
      icon: <MessageCircle className={`w-7 h-7 ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`} />,
      title: 'Conversión Directa a WhatsApp (UX/UI)',
      desc: 'Diseñamos cada página con una estructura estratégica de persuasión que guía al usuario sin fricciones. Eliminamos los formularios tradicionales para conectar a tus prospectos directamente contigo a través de WhatsApp mediante un llamado a la acción claro e inmediato.',
      detail: 'Estrategia de CTA directo y pre-estructurado sin formularios largos.',
    },
    {
      icon: <Smartphone className={`w-7 h-7 ${isLight ? 'text-sky-600' : 'text-cyan-400'}`} />,
      title: 'Experiencia Móvil Impecable (Mobile-First)',
      desc: 'Desarrollos concebidos prioritariamente para pantallas pequeñas y totalmente adaptativos (responsive). Garantizamos una navegación fluida, intuitiva y visualmente atractiva en cualquier smartphone o tableta.',
      detail: 'Diseño 100% adaptable y táctil para cualquier smartphone o tablet.',
    },
    {
      icon: <Zap className={`w-7 h-7 ${isLight ? 'text-amber-600' : 'text-amber-300'}`} />,
      title: 'Velocidad de Carga Extrema',
      desc: 'Páginas ultraligeras desarrolladas con código optimizado. En el mercado actual, donde la mayoría de los usuarios navega desde dispositivos móviles y redes de datos, cada segundo de carga es crucial para retener la atención del visitante y evitar el abandono del sitio.',
      detail: 'Código limpio y optimizado para máxima retención de visitantes.',
    },
    {
      icon: <Headphones className={`w-7 h-7 ${isLight ? 'text-sky-600' : 'text-cyan-400'}`} />,
      title: 'Atención Directa en Ecuador',
      desc: 'Trato directo y cercano con los desarrolladores que construyen tu sitio web. Sin intermediarios molestos ni tickets de espera de días. Brindamos acompañamiento constante y respuesta ágil en Guayaquil, Quito, Cuenca y todo el territorio ecuatoriano.',
      detail: 'Atención personalizada y presencial o virtual en todo Ecuador.',
    },
  ];

  const comparison = [
    {
      feature: 'Diseño e Identidad',
      spondylus: 'Totalmente personalizado a tu marca',
      others: 'Plantillas genéricas repetidas',
    },
    {
      feature: 'Velocidad de Carga',
      spondylus: 'Rendimiento ultrarrápido',
      others: 'Lentas y pesadas',
    },
    {
      feature: 'Navegación Móvil',
      spondylus: 'Optimizada al milímetro (Mobile-First)',
      others: 'Diseño desajustado en celulares',
    },
    {
      feature: 'Contacto Directo',
      spondylus: 'Botón directo a WhatsApp pre-configurado',
      others: 'Formularios fríos sin respuesta rápida',
    },
    {
      feature: 'Acompañamiento Digital',
      spondylus: 'Acompañamiento cercano y respuesta rápida',
      others: 'Te entregan la clave y desaparecen',
    },
  ];

  return (
    <div className="space-y-16 py-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span
          className={`font-mono text-xs tracking-widest uppercase font-semibold px-3.5 py-1 rounded-full border ${
            isLight
              ? 'bg-sky-50 border-sky-200 text-sky-700'
              : 'bg-cyan-950/50 border-cyan-400/30 text-cyan-400'
          }`}
        >
          Agencia de Desarrollo Web · Ecuador
        </span>
        <h1
          className={`font-display font-extrabold text-3xl sm:text-5xl mt-4 tracking-tight leading-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}
        >
          Por qué Spondylus es la mejor opción para la presencia web de tu empresa
        </h1>
        <p className={`mt-5 text-base sm:text-lg leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
          No creamos páginas de relleno ni archivos pesados que nadie lee. Diseñamos e implementamos
          <strong> Landing Pages estratégicas</strong> orientadas exclusivamente a proyectar confianza, credibilidad y conectar de inmediato con tus potenciales clientes.
        </p>
      </motion.div>

      {/* Pillars Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`rounded-2xl p-8 border transition-all shadow-xs hover:shadow-md ${
              isLight
                ? 'bg-white border-slate-200/90 hover:border-sky-300'
                : 'bg-slate-900/50 border-slate-800 hover:border-cyan-400/30'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`p-3 rounded-xl border ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/80 border-slate-700'
                }`}
              >
                {pillar.icon}
              </div>
              <h2 className={`font-display font-bold text-xl ${isLight ? 'text-slate-900' : 'text-white'}`}>
                {pillar.title}
              </h2>
            </div>
            <p className={`text-sm leading-relaxed mb-4 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {pillar.desc}
            </p>
            <div
              className={`text-xs font-mono px-3.5 py-2 rounded-xl border ${
                isLight
                  ? 'bg-sky-50/60 border-sky-200/60 text-sky-800'
                  : 'bg-cyan-950/30 border-cyan-400/20 text-cyan-300'
              }`}
            >
              ✓ {pillar.detail}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Metodología / Ruta Animada en Mapa */}
      <ProcessPathSection theme={theme} />

      {/* Comparativa Table */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            className={`font-display font-extrabold text-2xl sm:text-3xl ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            ¿Por qué marcar la diferencia importa?
          </h2>
          <p className={`mt-2 text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            Compara el estándar de la industria tradicional frente a nuestro estándar de calidad.
          </p>
        </div>

        <div
          className={`rounded-2xl border overflow-hidden shadow-xs ${
            isLight ? 'bg-white border-slate-200' : 'bg-slate-900/50 border-slate-800'
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr
                  className={`border-b font-mono text-xs uppercase tracking-wider ${
                    isLight ? 'bg-slate-100/80 border-slate-200 text-slate-700' : 'bg-slate-800/80 border-slate-700 text-slate-300'
                  }`}
                >
                  <th className="p-4 sm:p-5">Atributo</th>
                  <th className="p-4 sm:p-5 text-cyan-600 dark:text-cyan-400 font-extrabold">
                    Spondylus Digital
                  </th>
                  <th className="p-4 sm:p-5 text-slate-500 font-medium">Sitios Tradicionales</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {comparison.map((item, idx) => (
                  <tr key={idx} className={isLight ? 'hover:bg-slate-50/60' : 'hover:bg-slate-800/30'}>
                    <td className={`p-4 sm:p-5 font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      {item.feature}
                    </td>
                    <td className={`p-4 sm:p-5 font-medium flex items-center gap-2 ${isLight ? 'text-cyan-800' : 'text-cyan-300'}`}>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      {item.spondylus}
                    </td>
                    <td className={`p-4 sm:p-5 text-slate-500`}>
                      <span className="inline-flex items-center gap-1.5 opacity-80">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                        {item.others}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className={`rounded-2xl p-8 text-center border ${
          isLight
            ? 'bg-gradient-to-r from-cyan-600 to-sky-700 text-white border-cyan-700 shadow-lg'
            : 'bg-slate-900 border-slate-800 text-white'
        }`}
      >
        <h3 className="font-display font-extrabold text-2xl sm:text-3xl mb-3">
          ¿Listo para darle la presencia que tu negocio merece?
        </h3>
        <p className="text-sm max-w-xl mx-auto opacity-90 mb-6">
          Conversa con nosotros sin compromiso. Te asesoramos sobre cuál es la mejor alternativa para tu empresa.
        </p>
        <button
          onClick={() => onNavigateTo('contacto')}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md cursor-pointer transition-transform hover:-translate-y-0.5"
        >
          Cotizar mi Landing Page
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
