import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Check,
  CheckCheck,
  MessageCircle,
  Building2,
  Coffee,
  Dumbbell,
  Stethoscope,
  Zap,
  Send,
} from 'lucide-react';
import { ThemeMode } from '../types';

interface SimulatorSectionProps {
  theme: ThemeMode;
}

interface IndustryData {
  id: string;
  name: string;
  shortTag: string;
  icon: React.ReactNode;
  domain: string;
  speed: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  bgGradient: string;
  badgeBg: string;
  badgeText: string;
  bullets: string[];
  conversionTip: string;
  waBusinessName: string;
  waMessage: string;
}

export const SimulatorSection: React.FC<SimulatorSectionProps> = ({ theme }) => {
  const isLight = theme === 'light';

  const industries: IndustryData[] = [
    {
      id: 'arquitectura',
      name: 'Arquitectura & Interiorismo',
      shortTag: 'Arquitectura',
      icon: <Building2 className="w-4 h-4" />,
      domain: 'estudio-arquitectura.ec',
      speed: '⚡ Carga en 0.9s',
      headline: 'Diseñamos Espacios Extraordinarios que Inspiran',
      subheadline: 'Proyectos residenciales y corporativos de alto nivel. Transformamos tus ideas en arquitectura funcional.',
      ctaText: 'Solicitar Asesoría por WhatsApp',
      bgGradient: 'from-slate-900 via-slate-800 to-cyan-950',
      badgeBg: 'bg-cyan-500/20 border-cyan-400/40',
      badgeText: 'text-cyan-300',
      bullets: [
        'Portafolio de obras residenciales en alta resolución',
        'Asesoría y pre-factibilidad de proyecto sin compromiso',
        'Atención directa con el arquitecto principal',
      ],
      conversionTip: 'Un mensaje pre-estructurado le ahorra tiempo al cliente y te entrega la información exacta para cotizar de inmediato.',
      waBusinessName: 'Estudio de Arquitectura',
      waMessage: `👋 ¡Hola! Vengo desde su Landing Page.

📌 *Interés:* Asesoría en Arquitectura & Interiorismo
🏛️ *Tipo de Proyecto:* Remodelación / Obra Nueva
📍 *Ubicación:* Ecuador

💬 Quisiera coordinar una cita previa para revisar mi proyecto.`,
    },
    {
      id: 'gastronomia',
      name: 'Cafetería & Gastronomía',
      shortTag: 'Gastronomía',
      icon: <Coffee className="w-4 h-4" />,
      domain: 'bistro-gastronomia.ec',
      speed: '⚡ Carga en 0.8s',
      headline: 'Sabor Auténtico & Experiencias Únicas',
      subheadline: 'Disfruta de especialidades de café de origen, repostería artesanal y el mejor ambiente de la ciudad.',
      ctaText: 'Ver Menú & Reservar por WhatsApp',
      bgGradient: 'from-amber-950 via-slate-900 to-amber-900',
      badgeBg: 'bg-amber-500/20 border-amber-400/40',
      badgeText: 'text-amber-300',
      bullets: [
        'Menú digital interactivo en un solo clic',
        'Reserva inmediata para eventos y mesas',
        'Ubicación exacta integrada con Google Maps',
      ],
      conversionTip: 'Los clientes prefieren enviar un WhatsApp directo para consultar disponibilidad de mesa o reservar menú.',
      waBusinessName: 'Bistró & Café Artesanal',
      waMessage: `👋 ¡Hola! Vengo desde su Landing Page.

☕ *Interés:* Reserva de Mesa & Menú
👥 *Personas:* 4 personas
📅 *Fecha:* Este fin de semana

💬 Quisiera consultar disponibilidad de mesa en su local.`,
    },
    {
      id: 'fitness',
      name: 'Personal Trainer & Gym',
      shortTag: 'Fitness',
      icon: <Dumbbell className="w-4 h-4" />,
      domain: 'coaching-fitness.ec',
      speed: '⚡ Carga en 0.9s',
      headline: 'Alcanza tu Máximo Rendimiento Físico',
      subheadline: 'Programas de entrenamiento personalizado, nutrición adaptada y resultados garantizados paso a paso.',
      ctaText: 'Agendar Clase Gratis por WhatsApp',
      bgGradient: 'from-slate-950 via-slate-900 to-sky-950',
      badgeBg: 'bg-sky-500/20 border-sky-400/40',
      badgeText: 'text-sky-300',
      bullets: [
        'Planes de entrenamiento 100% personalizados',
        'Evaluación física inicial previa sin costo',
        'Acompañamiento y motivación diaria directa',
      ],
      conversionTip: 'Captura prospectos calificados ofreciendo una evaluación inicial sin costo en un solo clic.',
      waBusinessName: 'Coach Fitness Pro',
      waMessage: `👋 ¡Hola! Vengo desde su Landing Page.

🏋️ *Interés:* Clase de Prueba & Evaluación Gratis
🎯 *Objetivo:* Tonificación y Aumento de Masa
⏰ *Disponibilidad:* Horario Mañana / Tarde

💬 Quisiera agendar mi primera sesión de evaluación.`,
    },
    {
      id: 'salud',
      name: 'Clínica & Odontología',
      shortTag: 'Salud & Odonto',
      icon: <Stethoscope className="w-4 h-4" />,
      domain: 'clinica-dental.ec',
      speed: '⚡ Carga en 0.9s',
      headline: 'Tu Sonrisa y Salud en Manos de Especialistas',
      subheadline: 'Atención médica y odontológica avanzada con tecnología de vanguardia y tratamientos sin dolor.',
      ctaText: 'Agendar Cita Odontológica por WhatsApp',
      bgGradient: 'from-slate-900 via-cyan-950 to-slate-900',
      badgeBg: 'bg-teal-500/20 border-teal-400/40',
      badgeText: 'text-teal-300',
      bullets: [
        'Diagnóstico digital completo en tu primera consulta',
        'Facilidades de pago y financiamiento flexible',
        'Confirmación inmediata de cita en el horario que elijas',
      ],
      conversionTip: 'La inmediatez en respuestas médicas y dentales transmite seguridad y genera la cita al instante.',
      waBusinessName: 'Clínica Dental Especializada',
      waMessage: `👋 ¡Hola! Vengo desde su Landing Page.

🩺 *Interés:* Consulta y Valoración Odontológica
🦷 *Tratamiento:* Limpieza / Ortodoncia / Blanqueamiento
📍 *Ciudad:* Quito / Guayaquil

💬 Quisiera consultar disponibilidad de agenda para esta semana.`,
    },
  ];

  const [activeIndustryId, setActiveIndustryId] = useState<string>('arquitectura');
  const [copied, setCopied] = useState<boolean>(false);
  const [sentNotice, setSentNotice] = useState<boolean>(false);

  const selectedIndustry = industries.find((i) => i.id === activeIndustryId) || industries[0];

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(selectedIndustry.waMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSimulateSend = () => {
    setSentNotice(true);
    const waUrl = `https://wa.me/593958876957?text=${encodeURIComponent(selectedIndustry.waMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setTimeout(() => setSentNotice(false), 3500);
  };

  return (
    <section
      id="simulador"
      className={`py-16 sm:py-24 relative overflow-hidden transition-colors duration-300 border-b ${
        isLight
          ? 'bg-[#E0E5EC] border-[#4A6A8C]/15 text-[#2D3436]'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-slate-800'
      }`}
    >
      {/* Background Decorator Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wide uppercase shadow-xs mb-3.5 ${
              isLight
                ? 'bg-white border-[#C5A059]/40 text-[#2D3436] font-bold'
                : 'bg-emerald-950/60 border-emerald-400/30 text-emerald-300'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current text-[#C5A059]" />
            <span>Simulador de Mensaje Directo a WhatsApp</span>
          </div>

          <h2
            className={`font-display font-extrabold text-2xl sm:text-4xl lg:text-4xl tracking-tight leading-tight ${
              isLight ? 'text-[#2D3436]' : 'text-white'
            }`}
          >
            Prueba cómo recibirás los mensajes de tus clientes
          </h2>

          <p
            className={`mt-3 text-sm sm:text-base leading-relaxed ${
              isLight ? 'text-[#2D3436]/80' : 'text-slate-400'
            }`}
          >
            Nuestras Landing Pages configuran botones de WhatsApp con mensajes pre-estructurados.
            Tus clientes solo hacen 1 clic y tú recibes la información lista para cotizar o agendar.
          </p>

          {/* Industry Selector Tabs (Pill style) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {industries.map((ind) => {
              const isActive = ind.id === activeIndustryId;
              return (
                <button
                  key={ind.id}
                  onClick={() => {
                    setActiveIndustryId(ind.id);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs sm:text-xs font-semibold transition-all duration-200 cursor-pointer border shadow-xs ${
                    isActive
                      ? isLight
                        ? 'bg-[#4A6A8C] text-white border-[#4A6A8C] shadow-md scale-105 font-bold'
                        : 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-md shadow-emerald-500/20 scale-105'
                      : isLight
                      ? 'bg-white text-[#2D3436] border-[#4A6A8C]/25 hover:bg-[#F2F5F9]'
                      : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span className={isActive ? (isLight ? 'text-[#C5A059]' : 'text-slate-950') : ''}>
                    {ind.icon}
                  </span>
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Simulator Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: Context & Message Explanation */}
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-5">
            <div
              className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                isLight
                  ? 'bg-white border-slate-200 shadow-xl shadow-slate-200/40'
                  : 'bg-slate-900/90 border-slate-800 shadow-2xl shadow-black/50'
              }`}
            >
              <div className="flex items-center gap-3 mb-3.5">
                <div
                  className={`p-2 rounded-xl ${
                    isLight ? 'bg-emerald-100 text-emerald-800' : 'bg-emerald-950 text-emerald-400'
                  }`}
                >
                  {selectedIndustry.icon}
                </div>
                <div>
                  <span
                    className={`text-[10px] font-mono font-bold tracking-wider uppercase block ${
                      isLight ? 'text-emerald-700' : 'text-emerald-400'
                    }`}
                  >
                    Rubro Seleccionado
                  </span>
                  <h3 className={`font-display font-bold text-base ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    {selectedIndustry.name}
                  </h3>
                </div>
              </div>

              <p className={`text-xs leading-relaxed mb-4 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                {selectedIndustry.conversionTip}
              </p>

              {/* Message Code / Text Preview Box */}
              <div
                className={`p-3.5 rounded-xl border text-[11px] font-mono leading-relaxed relative ${
                  isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-800'
                    : 'bg-slate-950 border-slate-800 text-emerald-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-200 dark:border-slate-800 font-sans">
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Estructura del Mensaje
                  </span>
                  <button
                    onClick={handleCopyMessage}
                    className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3" /> ¡Copiado!
                      </>
                    ) : (
                      'Copiar texto'
                    )}
                  </button>
                </div>
                <div className="whitespace-pre-wrap">{selectedIndustry.waMessage}</div>
              </div>

              <div className="space-y-2.5 pt-3.5 mt-3.5 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-2.5">
                  <div className="p-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      Zero Fricción
                    </h4>
                    <p className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      El usuario no tiene que pensar qué escribir. El mensaje ya llega listo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      Atención Ágil
                    </h4>
                    <p className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      Permite dar respuestas inmediatas y cerrar la venta antes que la competencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Phone Mockup */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <div className="relative max-w-[260px] sm:max-w-[275px] w-full">
              {/* Phone Outer Shadow Glow */}
              <div className="absolute -inset-2 rounded-[40px] blur-lg opacity-30 bg-emerald-500" />

              {/* Compact Smartphone Frame */}
              <div className="relative rounded-[36px] border-[7px] border-slate-900 bg-slate-900 shadow-xl overflow-hidden ring-1 ring-white/10">
                {/* Smartphone Top Notch & Bar */}
                <div className="bg-slate-900 pt-2 px-4 pb-1 flex items-center justify-between text-slate-400 text-[9px] font-mono select-none">
                  <span className="font-bold text-white">09:41</span>
                  {/* Compact Notch */}
                  <div className="w-16 h-3 bg-black rounded-full flex items-center justify-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                    <div className="w-1 h-1 rounded-full bg-emerald-800" />
                  </div>
                  <div className="flex items-center gap-1 text-slate-300">
                    <Zap className="w-2.5 h-2.5 text-emerald-400 fill-emerald-400" />
                    <span>5G</span>
                  </div>
                </div>

                {/* WHATSAPP CHAT PREVIEW SCREEN */}
                <div className="min-h-[410px] flex flex-col justify-between bg-[#0b141a] text-slate-100 select-none">
                  {/* WhatsApp Header Bar */}
                  <div className="bg-[#1f2c34] px-2.5 py-2 flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-[11px] text-white border border-emerald-400/40 shrink-0">
                        {selectedIndustry.name.charAt(0)}
                      </div>
                      <div className="truncate max-w-[150px]">
                        <h4 className="font-bold text-[11px] text-white truncate">
                          {selectedIndustry.waBusinessName}
                        </h4>
                        <span className="text-[9px] text-emerald-400 font-medium block leading-none">
                          en línea
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Chat Wallpaper Background */}
                  <div className="flex-1 p-2.5 space-y-2.5 overflow-y-auto bg-[radial-gradient(#1f2c34_1px,transparent_1px)] [background-size:14px_14px] flex flex-col justify-end">
                    {/* Day Stamp */}
                    <div className="text-center my-0.5">
                      <span className="text-[8px] font-mono uppercase bg-[#182229] text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                        HOY
                      </span>
                    </div>

                    {/* Customer Outgoing Message Bubble */}
                    <motion.div
                      key={selectedIndustry.id}
                      initial={{ opacity: 0, scale: 0.95, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="self-end max-w-[92%] bg-[#005c4b] text-white p-2.5 rounded-xl rounded-tr-xs shadow-xs border border-emerald-600/30"
                    >
                      <div className="text-[10px] font-sans leading-relaxed whitespace-pre-wrap">
                        {selectedIndustry.waMessage}
                      </div>
                      <div className="flex items-center justify-end gap-1 mt-1 text-[8px] text-emerald-200/80 font-mono">
                        <span>09:41</span>
                        <CheckCheck className="w-3 h-3 text-sky-300" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Interactive Button Bar inside Phone */}
                  <div className="bg-[#1f2c34] p-2 border-t border-slate-800 space-y-1.5">
                    <button
                      onClick={handleSimulateSend}
                      className="w-full py-2 px-3 rounded-lg font-bold text-[10px] text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs border border-emerald-400/30"
                    >
                      <Send className="w-3 h-3" />
                      <span>Simular Envío de Mensaje</span>
                    </button>

                    {sentNotice && (
                      <div className="text-[9px] text-center text-emerald-300 font-mono bg-emerald-950/80 border border-emerald-500/40 py-1 px-1 rounded animate-fade-in">
                        ✓ ¡Mensaje generado y enviado con éxito!
                      </div>
                    )}
                  </div>
                </div>

                {/* Smartphone Home Bar */}
                <div className="bg-slate-900 py-1.5 flex justify-center">
                  <div className="w-20 h-1 bg-slate-700 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

