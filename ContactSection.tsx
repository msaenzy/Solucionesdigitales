import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { ThemeMode, ContactFormData } from '../types';

interface ContactSectionProps {
  theme: ThemeMode;
  selectedPlanTitle?: string;
}

export default function ContactSection({ theme, selectedPlanTitle }: ContactSectionProps) {
  const isLight = theme === 'light';

  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    empresa: '',
    telefono: '',
    servicio: selectedPlanTitle || '',
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
        servicio: '',
        mensaje: '',
      });
    }, 5000);
  };

  return (
    <section
      id="contacto"
      className={`relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${
        isLight
          ? 'bg-[#E0E5EC] border-[#4A6A8C]/15 text-[#2D3436] shell-ridges-light'
          : 'bg-[#070911] border-slate-900 text-slate-300 shell-ridges-dark'
      }`}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Info Column */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span
            className={`font-mono text-xs tracking-widest uppercase font-semibold ${
              isLight ? 'text-[#4A6A8C]' : 'text-cyan-400'
            }`}
          >
            Hablemos Directamente
          </span>
          <h2
            className={`font-display font-extrabold text-3xl md:text-4xl mt-3 mb-5 tracking-tight ${
              isLight ? 'text-[#2D3436]' : 'text-white'
            }`}
          >
            Cuéntanos sobre tu proyecto
          </h2>
          <p className={`mb-10 max-w-md leading-relaxed ${isLight ? 'text-[#2D3436]/80' : 'text-slate-400'}`}>
            Completa el formulario y te contactamos a la brevedad posible con una propuesta
            clara, estructurada y sin compromiso.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div
                className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${
                  isLight
                    ? 'bg-white border-[#4A6A8C]/25 text-[#4A6A8C]'
                    : 'bg-cyan-400/10 border-cyan-400/25 text-cyan-400'
                }`}
              >
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className={`text-sm font-semibold ${isLight ? 'text-[#2D3436]' : 'text-white'}`}>
                  Correo Electrónico
                </p>
                <p className={`text-sm ${isLight ? 'text-[#2D3436]/80' : 'text-slate-400'}`}>
                  hola@spondylusdigital.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${
                  isLight
                    ? 'bg-white border-[#C5A059]/40 text-[#C5A059]'
                    : 'bg-amber-300/10 border-amber-300/25 text-amber-300'
                }`}
              >
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className={`text-sm font-semibold ${isLight ? 'text-[#2D3436]' : 'text-white'}`}>
                  WhatsApp Directo
                </p>
                <a
                  href="https://wa.me/593958876957"
                  target="_blank"
                  rel="noreferrer"
                  className={`text-sm hover:underline ${
                    isLight ? 'text-[#4A6A8C] font-bold' : 'text-cyan-400'
                  }`}
                >
                  Click aquí para chatear por WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${
                  isLight
                    ? 'bg-white border-[#4A6A8C]/25 text-[#4A6A8C]'
                    : 'bg-cyan-400/10 border-cyan-400/25 text-cyan-400'
                }`}
              >
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className={`text-sm font-semibold ${isLight ? 'text-[#2D3436]' : 'text-white'}`}>
                  Ubicación Principal
                </p>
                <p className={`text-sm ${isLight ? 'text-[#2D3436]/80' : 'text-slate-400'}`}>
                  Guayaquil, Ecuador · Atención remota y presencial
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Form Card */}
        <motion.form
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className={`rounded-2xl p-7 sm:p-9 border space-y-5 shadow-lg ${
            isLight
              ? 'bg-[#F2F5F9] border-[#4A6A8C]/25 shadow-[#4A6A8C]/10'
              : 'bg-slate-900/50 border-slate-800'
          }`}
        >
          <div>
            <label
              className={`block text-xs font-mono uppercase font-semibold tracking-wider mb-2 ${
                isLight ? 'text-[#2D3436]/80' : 'text-slate-400'
              }`}
            >
              Nombre Completo *
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Ana Torres"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className={`w-full rounded-xl border px-4 py-3 text-sm transition-all ${
                isLight
                  ? 'bg-white border-[#4A6A8C]/30 text-[#2D3436] placeholder:text-[#2D3436]/40 focus:border-[#4A6A8C] focus:ring-2 focus:ring-[#4A6A8C]/20'
                  : 'bg-[#0a0c14] border-slate-800 text-white placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
              }`}
            />
          </div>

          <div>
            <label
              className={`block text-xs font-mono uppercase font-semibold tracking-wider mb-2 ${
                isLight ? 'text-[#2D3436]/80' : 'text-slate-400'
              }`}
            >
              Empresa / Clínica / Negocio *
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Clínica Vitalia"
              value={formData.empresa}
              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
              className={`w-full rounded-xl border px-4 py-3 text-sm transition-all ${
                isLight
                  ? 'bg-white border-[#4A6A8C]/30 text-[#2D3436] placeholder:text-[#2D3436]/40 focus:border-[#4A6A8C] focus:ring-2 focus:ring-[#4A6A8C]/20'
                  : 'bg-[#0a0c14] border-slate-800 text-white placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
              }`}
            />
          </div>

          <div>
            <label
              className={`block text-xs font-mono uppercase font-semibold tracking-wider mb-2 ${
                isLight ? 'text-[#2D3436]/80' : 'text-slate-400'
              }`}
            >
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
                  ? 'bg-white border-[#4A6A8C]/30 text-[#2D3436] placeholder:text-[#2D3436]/40 focus:border-[#4A6A8C] focus:ring-2 focus:ring-[#4A6A8C]/20'
                  : 'bg-[#0a0c14] border-slate-800 text-white placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
              }`}
            />
          </div>

          <div>
            <label
              className={`block text-xs font-mono uppercase font-semibold tracking-wider mb-2 ${
                isLight ? 'text-[#2D3436]/80' : 'text-slate-400'
              }`}
            >
              Servicio de Interés *
            </label>
            <select
              required
              value={formData.servicio}
              onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
              className={`w-full rounded-xl border px-4 py-3 text-sm transition-all ${
                isLight
                  ? 'bg-white border-[#4A6A8C]/30 text-[#2D3436] focus:border-[#4A6A8C]'
                  : 'bg-[#0a0c14] border-slate-800 text-white focus:border-cyan-400'
              }`}
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Landing Page Esencial">Landing Page Esencial</option>
              <option value="Landing Page Corporativa Pro">Landing Page Corporativa Pro</option>
              <option value="Landing Page Multi-Sección">Landing Page Multi-Sección</option>
              <option value="Asesoría de Presencia Digital">Asesoría de Presencia Digital</option>
            </select>
          </div>

          <button
            type="submit"
            className={`cta-shimmer w-full font-bold text-sm px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
              isLight
                ? 'bg-[#4A6A8C] hover:bg-[#37526E] text-white shadow-[#4A6A8C]/20'
                : 'bg-cyan-400 hover:bg-amber-300 text-slate-950 shadow-cyan-400/20'
            }`}
          >
            <Send className="w-4 h-4" />
            Enviar solicitud
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
                ¡Gracias! Tu solicitud ha sido enviada con éxito. Te contactaremos en breve por WhatsApp o teléfono.
              </p>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
