import React from 'react';
import { motion } from 'motion/react';
import { ThemeMode } from '../types';
import CaseShowcaseGallery from './CaseShowcaseGallery';

interface TestimonialsSectionProps {
  theme: ThemeMode;
  onNavigateToContact?: () => void;
}

export default function TestimonialsSection({ theme, onNavigateToContact }: TestimonialsSectionProps) {
  const isLight = theme === 'light';

  return (
    <section
      id="casos"
      className={`relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${
        isLight
          ? 'bg-[#E0E5EC] border-[#4A6A8C]/15 text-[#2D3436]'
          : 'bg-[#070911] border-slate-900 text-slate-300'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span
            className={`font-mono text-xs tracking-widest uppercase font-semibold px-3.5 py-1 rounded-full border ${
              isLight
                ? 'bg-white border-[#C5A059]/40 text-[#2D3436] font-bold'
                : 'bg-cyan-950/60 border-cyan-400/30 text-cyan-300'
            }`}
          >
            Galería de Casos de Éxito
          </span>
          <h2
            className={`font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mt-4 tracking-tight ${
              isLight ? 'text-[#2D3436]' : 'text-white'
            }`}
          >
            Galería de Proyectos & Landing Pages por Categoría
          </h2>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isLight ? 'text-[#2D3436]/80' : 'text-slate-400'}`}>
            Filtra por tu sector de actividad (Médico & Dental, Cafetería & Gastronomía, Consultoría & Servicios) para explorar cómo transformamos marcas en Ecuador en canales de captación activa de clientes.
          </p>
        </motion.div>

        {/* Categorized Gallery Component */}
        <CaseShowcaseGallery theme={theme} onNavigateToContact={onNavigateToContact} />
      </div>
    </section>
  );
}

