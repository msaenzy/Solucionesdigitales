import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ThemeMode } from '../../types';
import CaseShowcaseGallery from '../CaseShowcaseGallery';

interface CasosPageProps {
  theme: ThemeMode;
  onNavigateTo: (tab: string) => void;
}

export default function CasosPage({ theme, onNavigateTo }: CasosPageProps) {
  const isLight = theme === 'light';

  return (
    <div className="space-y-12 py-4">
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
              ? 'bg-white border-[#C5A059]/40 text-[#2D3436] font-bold'
              : 'bg-cyan-950/60 border-cyan-400/30 text-cyan-300'
          }`}
        >
          Resultados Reales en Ecuador
        </span>
        <h1
          className={`font-display font-extrabold text-3xl sm:text-5xl mt-4 tracking-tight ${
            isLight ? 'text-[#2D3436]' : 'text-white'
          }`}
        >
          Galería de Casos de Éxito & Portafolio de Landing Pages
        </h1>
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isLight ? 'text-[#2D3436]/80' : 'text-slate-400'}`}>
          Selecciona una categoría para explorar nuestros trabajos destacados en los sectores Médico & Dental, Cafeterías & Gastronomía, y Consultoría & Servicios Profesionales.
        </p>
      </motion.div>

      {/* Gallery */}
      <CaseShowcaseGallery theme={theme} onNavigateToContact={() => onNavigateTo('contacto')} />

      {/* Bottom CTA */}
      <div className={`rounded-3xl p-8 sm:p-12 text-center border shadow-lg ${isLight ? 'bg-[#37526E] text-white border-[#4A6A8C]' : 'bg-gradient-to-r from-cyan-950 to-slate-900 border-cyan-400/30 text-white'}`}>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#C5A059] text-xs font-mono font-bold mb-3 border border-[#C5A059]/40">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transforma tu Presencia Digital</span>
        </div>
        <h3 className="font-display font-extrabold text-2xl sm:text-3xl mb-3">
          ¿Deseas que tu negocio sea nuestro próximo caso de éxito destacado?
        </h3>
        <p className="text-sm max-w-xl mx-auto text-white/80 mb-6">
          Te orientamos para estructurar la Landing Page ideal según tu nicho de mercado en Ecuador, con entrega garantizada en 2 a 5 días laborables.
        </p>
        <button
          onClick={() => onNavigateTo('contacto')}
          className="cta-shimmer inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-[#C5A059] hover:bg-[#A3813B] text-[#2D3436] shadow-md cursor-pointer transition-transform hover:-translate-y-0.5"
        >
          <span>Iniciar mi Proyecto de Landing Page</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
