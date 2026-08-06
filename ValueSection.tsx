import React from 'react';
import { motion } from 'motion/react';
import { Zap, MessageCircle, Smartphone, Headphones } from 'lucide-react';
import { ThemeMode } from '../types';

interface ValueSectionProps {
  theme: ThemeMode;
}

export default function ValueSection({ theme }: ValueSectionProps) {
  const isLight = theme === 'light';

  const values = [
    {
      id: 'wa-conv',
      icon: <MessageCircle className={`w-6 h-6 ${isLight ? 'text-[#4A6A8C]' : 'text-emerald-400'}`} />,
      title: 'Conversión Directa a WhatsApp (UX/UI)',
      desc: 'Diseñamos cada página con una estructura estratégica de persuasión que guía al usuario sin fricciones. Eliminamos los formularios tradicionales para conectar a tus prospectos directamente contigo a través de WhatsApp mediante un llamado a la acción claro e inmediato.',
      badge: 'Estrategia UX/UI',
    },
    {
      id: 'mobile-first',
      icon: <Smartphone className={`w-6 h-6 ${isLight ? 'text-[#4A6A8C]' : 'text-cyan-400'}`} />,
      title: 'Experiencia Móvil Impecable (Mobile-First)',
      desc: 'Desarrollos concebidos prioritariamente para pantallas pequeñas y totalmente adaptativos (responsive). Garantizamos una navegación fluida, intuitiva y visualmente atractiva en cualquier smartphone o tableta.',
      badge: 'Mobile-First',
    },
    {
      id: 'velocidad-extrema',
      icon: <Zap className={`w-6 h-6 ${isLight ? 'text-[#D4AF37]' : 'text-amber-300'}`} />,
      title: 'Velocidad de Carga Extrema',
      desc: 'Páginas ultraligeras desarrolladas con código optimizado. En el mercado actual, donde la mayoría de los usuarios navega desde dispositivos móviles y redes de datos, cada segundo de carga es crucial para retener la atención del visitante y evitar el abandono del sitio.',
      badge: 'Carga Ultra Rápida',
    },
    {
      id: 'atencion-ecuador',
      icon: <Headphones className={`w-6 h-6 ${isLight ? 'text-[#4A6A8C]' : 'text-cyan-400'}`} />,
      title: 'Atención Directa en Ecuador',
      desc: 'Trato directo y cercano con los desarrolladores que construyen tu sitio web. Sin intermediarios molestos ni tickets de espera de días. Brindamos acompañamiento constante y respuesta ágil en Guayaquil, Quito, Cuenca y todo el territorio ecuatoriano.',
      badge: 'Atención Local',
    },
  ];

  return (
    <section
      id="nosotros"
      className={`relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${
        isLight
          ? 'bg-[#E0E5EC] border-[#4A6A8C]/15 text-[#2D3436]'
          : 'bg-[#070911] border-slate-900 text-slate-300'
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
              isLight ? 'text-[#4A6A8C]' : 'text-cyan-400'
            }`}
          >
            Por qué Spondylus
          </span>
          <h2
            className={`font-display font-extrabold text-3xl md:text-4xl mt-3 tracking-tight ${
              isLight ? 'text-[#2D3436]' : 'text-white'
            }`}
          >
            Razones por las que nuestros clientes nos eligen
          </h2>
          <p className={`mt-4 text-base leading-relaxed ${isLight ? 'text-[#2D3436]/80' : 'text-slate-400'}`}>
            No vendemos páginas estáticas simples. Construimos herramientas de venta digitales que se
            sienten ultra rápidas, lucen impecables y responden inmediatamente.
          </p>
        </motion.div>

        {/* 4 Grid cards with staggered motion */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, index) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`group relative rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-md ${
                isLight
                  ? 'bg-[#F2F5F9] border-[#4A6A8C]/20 hover:border-[#4A6A8C] hover:bg-white'
                  : 'bg-slate-900/40 border-slate-800 hover:border-cyan-400/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isLight
                        ? 'bg-white border-[#4A6A8C]/25 shadow-xs'
                        : 'bg-cyan-400/10 border-cyan-400/25'
                    }`}
                  >
                    {v.icon}
                  </div>
                  <span
                    className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full border font-semibold ${
                      isLight
                        ? 'bg-white border-[#C5A059]/40 text-[#2D3436] font-bold'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    {v.badge}
                  </span>
                </div>

                <h3
                  className={`font-display font-bold text-lg mb-2.5 ${
                    isLight ? 'text-[#2D3436]' : 'text-white'
                  }`}
                >
                  {v.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-[#2D3436]/80' : 'text-slate-400'}`}>
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
