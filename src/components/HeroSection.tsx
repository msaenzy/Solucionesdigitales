import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { ThemeMode } from '../types';

interface HeroSectionProps {
  theme: ThemeMode;
  onNavigateTo: (sectionId: string) => void;
}

export default function HeroSection({ theme, onNavigateTo }: HeroSectionProps) {
  const isLight = theme === 'light';

  // Animation variants that trigger on both scroll up and down
  const fadeInVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.12,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="inicio"
      className={`relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 ${
        isLight
          ? 'bg-[#E0E5EC] shell-ridges-light text-[#2D3436]'
          : 'bg-[#070911] shell-ridges-dark text-slate-300'
      }`}
    >
      {/* Decorative Orbs */}
      <div
        className={`absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-opacity ${
          isLight ? 'bg-[#4A6A8C]/15 opacity-80' : 'bg-cyan-500/20 opacity-60'
        }`}
      />
      <div
        className={`absolute top-40 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-opacity ${
          isLight ? 'bg-[#C5A059]/15 opacity-70' : 'bg-amber-400/10 opacity-50'
        }`}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Text Content Column */}
        <div>
          {/* Location / Agency Badge */}
          <motion.div
            custom={0}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6 shadow-xs ${
              isLight
                ? 'border-[#C5A059]/40 bg-white/90 text-[#2D3436]'
                : 'border-amber-300/35 bg-amber-300/5 text-amber-300'
            }`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full animate-pulse ${
                isLight ? 'bg-[#C5A059]' : 'bg-amber-300'
              }`}
            />
            <span className="font-mono text-xs tracking-wider uppercase font-semibold">
              Agencia de Desarrollo Web · Guayaquil, EC
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className={`font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.3rem] leading-[1.1] tracking-tight ${
              isLight ? 'text-[#2D3436]' : 'text-white'
            }`}
          >
            Convertimos negocios tradicionales en{' '}
            <span className={isLight ? 'nacre-text-light font-extrabold' : 'nacre-text-dark font-extrabold'}>
              potencias digitales.
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className={`font-body text-base sm:text-lg mt-6 max-w-xl leading-relaxed ${
              isLight ? 'text-[#2D3436]/80' : 'text-slate-400'
            }`}
          >
            Diseñamos y construimos landing pages profesionales y estratégicas que otorgan presencia
            impecable a tu marca, transmiten autoridad y generan máxima confianza con tus potenciales clientes.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <button
              onClick={() => onNavigateTo('planes')}
              className={`cta-shimmer inline-flex items-center justify-center gap-2.5 font-bold text-base px-7 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl cursor-pointer ${
                isLight
                  ? 'bg-[#4A6A8C] hover:bg-[#37526E] text-white shadow-[#4A6A8C]/25 hover:-translate-y-0.5'
                  : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-cyan-400/25 hover:-translate-y-0.5'
              }`}
            >
              Ver Planes
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigateTo('contacto')}
              className={`inline-flex items-center justify-center gap-2 border font-bold text-base px-7 py-3.5 rounded-full transition-all cursor-pointer ${
                isLight
                  ? 'border-[#4A6A8C]/40 bg-white hover:bg-[#F2F5F9] text-[#2D3436] hover:border-[#4A6A8C] shadow-xs'
                  : 'border-slate-700 hover:border-amber-300/60 hover:text-amber-300 text-slate-200'
              }`}
            >
              Agendar Asesoría
            </button>
          </motion.div>

          {/* Key Value Highlights */}
          <motion.div
            custom={4}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className={`grid grid-cols-3 gap-4 mt-10 pt-8 border-t ${
              isLight ? 'border-[#4A6A8C]/20' : 'border-slate-800/80'
            }`}
          >
            <div>
              <p
                className={`font-display font-bold text-sm sm:text-base ${
                  isLight ? 'text-[#4A6A8C]' : 'text-white'
                }`}
              >
                Garantizado
              </p>
              <p className={`text-xs mt-0.5 font-medium ${isLight ? 'text-[#2D3436]/70' : 'text-slate-400'}`}>
                Proyectos entregados
              </p>
            </div>
            <div>
              <p
                className={`font-display font-bold text-sm sm:text-base ${
                  isLight ? 'text-[#4A6A8C]' : 'text-white'
                }`}
              >
                Confiable
              </p>
              <p className={`text-xs mt-0.5 font-medium ${isLight ? 'text-[#2D3436]/70' : 'text-slate-400'}`}>
                Clientes satisfechos
              </p>
            </div>
            <div>
              <p
                className={`font-display font-bold text-sm sm:text-base ${
                  isLight ? 'text-[#4A6A8C]' : 'text-white'
                }`}
              >
                Inmediata
              </p>
              <p className={`text-xs mt-0.5 font-medium ${isLight ? 'text-[#2D3436]/70' : 'text-slate-400'}`}>
                Atención y respuesta
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mockup Column with Motion Effects */}
        <motion.div
          variants={scaleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div
            className={`w-full max-w-md rounded-2xl border shadow-xl overflow-hidden float-a transition-colors ${
              isLight
                ? 'bg-white border-[#4A6A8C]/25 shadow-[#4A6A8C]/15'
                : 'bg-[#0d1018] border-slate-800 shadow-cyan-950/40'
            }`}
          >
            {/* Window header */}
            <div
              className={`flex items-center gap-1.5 px-4 py-3 border-b ${
                isLight ? 'bg-[#F2F5F9] border-[#4A6A8C]/20' : 'bg-[#0a0c14] border-slate-800'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              <span
                className={`ml-3 font-mono text-[11px] ${
                  isLight ? 'text-[#4A6A8C] font-semibold' : 'text-slate-400'
                }`}
              >
                spondylus.digital/demo
              </span>
            </div>

            {/* Window Content */}
            <div className="p-5 space-y-4">
              <div
                className={`h-3.5 w-2/3 rounded-full ${
                  isLight ? 'bg-[#4A6A8C]/20' : 'bg-slate-800'
                }`}
              />
              <div
                className={`h-2.5 w-1/2 rounded-full ${
                  isLight ? 'bg-[#C5A059]/25' : 'bg-slate-800/70'
                }`}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div
                  className={`rounded-xl border p-4 flex flex-col justify-center items-center text-center ${
                    isLight
                      ? 'bg-[#F2F5F9] border-[#4A6A8C]/30 text-[#4A6A8C]'
                      : 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400'
                  }`}
                >
                  <span className="font-extrabold text-sm sm:text-base leading-snug">
                    Presencia Digital Profesional
                  </span>
                </div>
                <div
                  className={`rounded-xl border p-4 flex flex-col justify-center items-center text-center ${
                    isLight
                      ? 'bg-white border-[#C5A059]/40 text-[#2D3436]'
                      : 'bg-amber-300/10 border-amber-300/20 text-amber-300'
                  }`}
                >
                  <span className="font-extrabold text-sm sm:text-base leading-snug">
                    Generando confianza con tus clientes
                  </span>
                </div>
              </div>

              <div
                className={`h-11 w-full rounded-xl flex items-center justify-center font-bold text-xs text-white ${
                  isLight ? 'bg-[#37526E] shadow-sm' : 'bg-cyan-400 text-slate-950'
                }`}
              >
                Sitio Web de Alta Conversión En Vivo
              </div>
            </div>
          </div>

          {/* Floating animated badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`absolute -left-3 top-6 border rounded-xl px-4 py-2.5 shadow-lg float-b backdrop-blur-md ${
              isLight
                ? 'bg-white/95 border-[#4A6A8C]/25 shadow-[#4A6A8C]/15'
                : 'bg-[#0d1018]/95 border-slate-800 shadow-black/50'
            }`}
          >
            <p className={`text-[10px] font-mono uppercase font-medium ${isLight ? 'text-[#2D3436]/70' : 'text-slate-400'}`}>
              Conversión
            </p>
            <p className={`font-display font-bold text-sm ${isLight ? 'text-[#4A6A8C]' : 'text-cyan-400'}`}>
              +150% incremento
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`absolute -right-3 bottom-8 border rounded-xl px-4 py-2.5 shadow-lg float-a backdrop-blur-md ${
              isLight
                ? 'bg-white/95 border-[#C5A059]/40 shadow-[#C5A059]/10'
                : 'bg-[#0d1018]/95 border-amber-300/30 shadow-black/50'
            }`}
          >
            <p className={`text-[10px] font-mono uppercase font-bold ${isLight ? 'text-[#C5A059]' : 'text-amber-300/80'}`}>
              SEO Local Ecuador
            </p>
            <p className={`font-display font-bold text-sm flex items-center gap-1 ${isLight ? 'text-[#2D3436]' : 'text-white'}`}>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] inline" /> Posicionamiento #1
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
