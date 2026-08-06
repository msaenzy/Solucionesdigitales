import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { ThemeMode, ContactFormData } from '../../types';

interface ContactoPageProps {
  theme: ThemeMode;
  selectedPlanTitle?: string;
}

export default function ContactoPage({ theme, selectedPlanTitle }: ContactoPageProps) {
  const isLight = theme === 'light';

  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    empresa: '',
    telefono: '',
    servicio: selectedPlanTitle || 'Landing Page Corporativa Pro',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre: '',
        empresa: '',
        telefono: '',
        servicio: selectedPlanTitle || 'Landing Page Corporativa Pro',
        mensaje: '',
      });
    }, 5000);
  };

  return (
    <div className="space-y-12 py-6 max-w-6xl mx-auto">
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
              ? 'bg-sky-50 border-sky-200 text-sky-700'
              : 'bg-cyan-950/50 border-cyan-400/30 text-cyan-400'
          }`}
        >
          Respuesta Garantizada y Atención Inmediata
        </span>
        <h1
          className={`font-display font-extrabold text-3xl sm:text-5xl mt-4 tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}
        >
          Hablemos de la Landing Page que impulsará tu empresa
        </h1>
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
          Escríbenos directamente o déjanos tus datos en el formulario. Recibirás una propuesta personalizada adaptada a las necesidades reales de tu negocio en Ecuador.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Left Information (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div
            className={`rounded-3xl p-8 border space-y-6 ${
              isLight ? 'bg-white border-slate-200/90 shadow-sm' : 'bg-slate-900/60 border-slate-800'
            }`}
          >
            <h2 className={`font-display font-extrabold text-xl ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Canales de Atención Directa
            </h2>

            <div className="space-y-5">
              <a
                href="https://wa.me/593958876957"
                target="_blank"
                rel="noreferrer"
                className={`p-4 rounded-2xl border flex items-center gap-4 transition-all hover:-translate-y-0.5 ${
                  isLight
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900 hover:bg-emerald-100/80'
                    : 'bg-emerald-950/30 border-emerald-800/60 text-emerald-300 hover:bg-emerald-950/50'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm">WhatsApp Business</p>
                  <p className="text-xs opacity-90">Atención Directa e Inmediata</p>
                  <span className="text-[10px] font-mono uppercase tracking-wider underline font-semibold mt-1 block">
                    Click para chatear inmediatamente →
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-2">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-slate-800 border-slate-700 text-slate-300'}`}>
                  <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className={`text-xs font-mono uppercase font-bold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Correo Electrónico</p>
                  <p className={`text-sm font-semibold mt-0.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>hola@spondylusdigital.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-2">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-slate-800 border-slate-700 text-slate-300'}`}>
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className={`text-xs font-mono uppercase font-bold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Sede Principal</p>
                  <p className={`text-sm font-semibold mt-0.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>Guayaquil, Ecuador</p>
                  <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Atención presencial y virtual para todo el país.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-2">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-slate-800 border-slate-700 text-slate-300'}`}>
                  <Clock className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className={`text-xs font-mono uppercase font-bold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Horario de Atención</p>
                  <p className={`text-sm font-semibold mt-0.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>Lunes a Viernes: Jornada Continua</p>
                  <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Sábados: Media Jornada</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Card (7 cols) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className={`rounded-3xl p-8 sm:p-10 border space-y-6 shadow-sm ${
              isLight ? 'bg-white border-slate-200/90' : 'bg-slate-900/60 border-slate-800'
            }`}
          >
            <h2 className={`font-display font-extrabold text-2xl ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Solicitar Cotización de Landing Page
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={`block text-xs font-mono uppercase font-semibold tracking-wider mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  Tu Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Ana Torres"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className={`w-full rounded-xl border px-4 py-3 text-sm transition-all ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-cyan-600'
                      : 'bg-[#0a0c14] border-slate-800 text-white focus:border-cyan-400'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-mono uppercase font-semibold tracking-wider mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  Empresa / Negocio *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Consultorio Dr. Torres"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className={`w-full rounded-xl border px-4 py-3 text-sm transition-all ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-cyan-600'
                      : 'bg-[#0a0c14] border-slate-800 text-white focus:border-cyan-400'
                  }`}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={`block text-xs font-mono uppercase font-semibold tracking-wider mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+593 9XX XXX XXX"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className={`w-full rounded-xl border px-4 py-3 text-sm transition-all ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-cyan-600'
                      : 'bg-[#0a0c14] border-slate-800 text-white focus:border-cyan-400'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-mono uppercase font-semibold tracking-wider mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  Plan de Interés *
                </label>
                <select
                  required
                  value={formData.servicio}
                  onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                  className={`w-full rounded-xl border px-4 py-3 text-sm transition-all ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 focus:bg-white focus:border-cyan-600'
                      : 'bg-[#0a0c14] border-slate-800 text-white focus:border-cyan-400'
                  }`}
                >
                  <option value="Landing Page Esencial">Landing Page Esencial</option>
                  <option value="Landing Page Corporativa Pro">Landing Page Corporativa Pro</option>
                  <option value="Landing Page Multi-Sección">Landing Page Multi-Sección</option>
                  <option value="Asesoría de Presencia Digital">Asesoría de Presencia Digital</option>
                </select>
              </div>
            </div>

            <div>
              <label className={`block text-xs font-mono uppercase font-semibold tracking-wider mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Comentarios o detalles sobre tu proyecto
              </label>
              <textarea
                rows={4}
                placeholder="Cuéntanos brevemente sobre tus servicios o qué te gustaría destacar en tu nueva Landing Page..."
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className={`w-full rounded-xl border p-4 text-sm transition-all ${
                  isLight
                    ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-cyan-600'
                    : 'bg-[#0a0c14] border-slate-800 text-white focus:border-cyan-400'
                }`}
              />
            </div>

            <button
              type="submit"
              className={`cta-shimmer w-full font-bold text-sm px-6 py-4 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                isLight
                  ? 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-cyan-600/20'
                  : 'bg-cyan-400 hover:bg-amber-300 text-slate-950 shadow-cyan-400/20'
              }`}
            >
              <Send className="w-4 h-4" />
              Enviar solicitud de propuesta
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border flex items-center gap-3 ${
                  isLight
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                    : 'bg-emerald-950/40 border-emerald-800 text-emerald-300'
                }`}
              >
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <p className="text-xs font-medium">
                  ¡Excelente! Hemos recibido tu solicitud. Un asesor de Spondylus Digital se comunicará contigo por WhatsApp o teléfono a la brevedad.
                </p>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
