import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  Palette,
  Code2,
  Rocket,
  Check,
  MapPin,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { ThemeMode } from '../types';

interface ProcessPathSectionProps {
  theme: ThemeMode;
}

export const ProcessPathSection: React.FC<ProcessPathSectionProps> = ({ theme }) => {
  const isLight = theme === 'light';

  const steps = [
    {
      id: 'step-1',
      stepNum: '01',
      title: 'Diagnóstico & Estrategia',
      desc: 'Analizamos la propuesta de valor de tu negocio, tu público objetivo y definimos el mensaje clave para transmitir máxima autoridad.',
      icon: Compass,
      locationTag: 'Fase Inicial',
    },
    {
      id: 'step-2',
      stepNum: '02',
      title: 'Diseño Personalizado',
      desc: 'Diseñamos la estructura y la estética sin usar plantillas aburridas. Adaptamos tu línea gráfica, colores corporativos e identidad.',
      icon: Palette,
      locationTag: 'UX/UI & Arte',
    },
    {
      id: 'step-3',
      stepNum: '03',
      title: 'Desarrollo & SEO Local',
      desc: 'Construimos la landing page con tecnología moderna, integrada con WhatsApp Business, mapas y optimización para buscadores.',
      icon: Code2,
      locationTag: 'Código & WhatsApp',
    },
    {
      id: 'step-4',
      stepNum: '04',
      title: 'Lanzamiento & Acompañamiento',
      desc: 'Publicamos tu sitio en un servidor de alto rendimiento con certificado SSL de seguridad y te capacitamos para su difusión.',
      icon: Rocket,
      locationTag: 'En Línea & SSL',
    },
  ];

  // Progress state: 0 to 100
  const [progress, setProgress] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0; // loop back
        }
        return prev + 0.8; // Smooth increment
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleStepClick = (index: number) => {
    // Map index 0->0, 1->33.3, 2->66.6, 3->100
    const targetProgress = index === 0 ? 5 : index === 1 ? 35 : index === 2 ? 68 : 100;
    setProgress(targetProgress);
  };

  const handleRestart = () => {
    setProgress(0);
    setIsPlaying(true);
  };

  // Determine active status of steps based on current progress percentage
  // Thresholds: Step 0 active >= 0%, Step 1 active >= 30%, Step 2 active >= 65%, Step 3 active >= 95%
  const getStepStatus = (index: number) => {
    const threshold = index === 0 ? 0 : index === 1 ? 30 : index === 2 ? 65 : 95;
    const isReached = progress >= threshold;
    const isCurrent =
      (index === 0 && progress < 30) ||
      (index === 1 && progress >= 30 && progress < 65) ||
      (index === 2 && progress >= 65 && progress < 95) ||
      (index === 3 && progress >= 95);

    return { isReached, isCurrent };
  };

  return (
    <div
      className={`rounded-3xl p-6 sm:p-10 border transition-all duration-300 relative overflow-hidden ${
        isLight
          ? 'bg-gradient-to-br from-slate-50 via-sky-50/40 to-slate-50 border-slate-200 shadow-xl shadow-slate-200/50'
          : 'bg-gradient-to-br from-[#0b101d] via-slate-900 to-[#0b101d] border-slate-800 shadow-2xl shadow-black/80'
      }`}
    >
      {/* Background Decorative Grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 relative z-10">
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs ${
            isLight
              ? 'bg-cyan-50 border-cyan-200 text-cyan-800'
              : 'bg-cyan-950/60 border-cyan-400/30 text-cyan-300'
          }`}
        >
          <MapPin className="w-3.5 h-3.5 text-cyan-500 animate-bounce" />
          <span>Ruta de Desarrollo Dinámica</span>
        </div>

        <h2
          className={`font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}
        >
          Cómo construimos tu Landing Page paso a paso
        </h2>
        <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
          Sigue la trayectoria vertical en tiempo real desde la estrategia inicial hasta la publicación oficial de tu sitio web.
        </p>

        {/* Animation Controls */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
              isLight
                ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 shadow-xs'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 shadow-xs'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-amber-500" />
                <span>Pausar Animación</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
                <span>Reanudar Ruta</span>
              </>
            )}
          </button>

          <button
            onClick={handleRestart}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
              isLight
                ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 shadow-xs'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 shadow-xs'
            }`}
            title="Reiniciar ruta"
          >
            <RotateCcw className="w-3.5 h-3.5 text-cyan-500" />
            <span>Reiniciar</span>
          </button>
        </div>
      </div>

      {/* UNIFIED VERTICAL TIMELINE SHOWCASE */}
      <div className="max-w-4xl mx-auto relative z-10 px-2 sm:px-4">
        <div className="relative pl-12 sm:pl-20 space-y-8 sm:space-y-10">
          {/* Vertical Track Base Line (Gray background) */}
          <div className="absolute left-4 sm:left-7 top-6 bottom-6 w-1.5 rounded-full bg-slate-200 dark:bg-slate-800/90 -translate-x-1/2" />

          {/* Animated Vertical Progress Line (Fills downward) */}
          <div
            className="absolute left-4 sm:left-7 top-6 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 via-emerald-400 to-sky-500 -translate-x-1/2 shadow-[0_0_12px_rgba(6,182,212,0.8)] transition-all duration-100 ease-linear"
            style={{ height: `calc(${progress}% * 0.88)` }}
          >
            {/* Glowing lead tip light */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_12px_#38bdf8] animate-pulse" />
          </div>

          {/* Steps List */}
          {steps.map((s, idx) => {
            const { isReached, isCurrent } = getStepStatus(idx);
            const StepIcon = s.icon;

            return (
              <div key={s.id} className="relative group">
                {/* Node Checkpoint Circle on the Vertical Line */}
                <div
                  onClick={() => handleStepClick(idx)}
                  className={`absolute -left-12 sm:-left-20 top-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-300 z-20 ${
                    isCurrent
                      ? 'bg-cyan-500 border-white text-white shadow-lg shadow-cyan-500/60 scale-110 ring-4 ring-cyan-400/30'
                      : isReached
                      ? isLight
                        ? 'bg-emerald-600 border-emerald-300 text-white shadow-md'
                        : 'bg-emerald-500 border-emerald-300 text-white shadow-md'
                      : isLight
                      ? 'bg-white border-slate-300 text-slate-400 hover:border-slate-400'
                      : 'bg-slate-900 border-slate-700 text-slate-500 hover:border-slate-600'
                  }`}
                >
                  {isCurrent && (
                    <span className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-75" />
                  )}

                  {isReached ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                  ) : (
                    <span className="font-mono font-bold text-xs sm:text-sm">{s.stepNum}</span>
                  )}
                </div>

                {/* Step Card Content */}
                <motion.div
                  onClick={() => handleStepClick(idx)}
                  whileHover={{ x: 4 }}
                  className={`rounded-2xl p-5 sm:p-7 border cursor-pointer transition-all duration-300 ${
                    isCurrent
                      ? isLight
                        ? 'bg-white border-cyan-400 shadow-xl ring-2 ring-cyan-400/30'
                        : 'bg-slate-900 border-cyan-400 shadow-2xl ring-2 ring-cyan-400/30'
                      : isReached
                      ? isLight
                        ? 'bg-white/90 border-slate-300 shadow-sm'
                        : 'bg-slate-900/80 border-slate-800'
                      : isLight
                      ? 'bg-slate-100/60 border-slate-200/90 opacity-70 hover:opacity-100'
                      : 'bg-slate-950/40 border-slate-800/60 opacity-60 hover:opacity-90'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`p-2 rounded-xl transition-colors ${
                          isCurrent
                            ? 'bg-cyan-500 text-white shadow-md'
                            : isReached
                            ? isLight
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-emerald-950 text-emerald-300'
                            : isLight
                            ? 'bg-slate-200 text-slate-500'
                            : 'bg-slate-800 text-slate-500'
                        }`}
                      >
                        <StepIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-mono text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded border uppercase ${
                              isReached
                                ? 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30'
                                : isLight
                                ? 'bg-slate-200 text-slate-600 border-slate-300'
                                : 'bg-slate-800 text-slate-400 border-slate-700'
                            }`}
                          >
                            Paso {s.stepNum}
                          </span>

                          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 hidden sm:inline">
                            {s.locationTag}
                          </span>
                        </div>

                        <h3
                          className={`font-display font-bold text-base sm:text-lg mt-1 ${
                            isCurrent
                              ? isLight
                                ? 'text-cyan-950 font-extrabold'
                                : 'text-white font-extrabold'
                              : isLight
                              ? 'text-slate-900'
                              : 'text-slate-100'
                          }`}
                        >
                          {s.title}
                        </h3>
                      </div>
                    </div>

                    {isReached && (
                      <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        <Check className="w-3.5 h-3.5" />
                        <span>Completado</span>
                      </span>
                    )}
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                    {s.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Banner Info */}
      <div className="mt-10 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 relative z-10">
        <div className="flex items-center gap-2 font-mono">
          <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
          <span>Progreso simulado de la ruta: {Math.round(progress)}%</span>
        </div>
        <div className="font-sans font-medium text-slate-600 dark:text-slate-300">
          📍 Haz clic en cualquier paso para desplazar la barra vertical directamente a esa fase.
        </div>
      </div>
    </div>
  );
};
