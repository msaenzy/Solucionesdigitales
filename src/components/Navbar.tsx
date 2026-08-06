import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowRight, LayoutGrid, Sparkles } from 'lucide-react';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({
  theme,
  onToggleTheme,
  activeTab,
  setActiveTab,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', name: 'Inicio' },
    { id: 'nosotros', name: 'Por qué elegirnos' },
    { id: 'planes', name: 'Planes' },
    { id: 'casos', name: 'Casos de éxito' },
    { id: 'contacto', name: 'Contacto' },
  ];

  const isLight = theme === 'light';

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 py-3 ${
        scrolled || activeTab !== 'inicio'
          ? isLight
            ? 'bg-[#E0E5EC]/95 backdrop-blur-md shadow-sm border-b border-[#4A6A8C]/20'
            : 'bg-[#070911]/95 backdrop-blur-md shadow-lg border-b border-slate-800/90'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 transition-transform duration-300 group-hover:scale-105"
          >
            <circle cx="12" cy="28" r="18" fill="none" />
            <g stroke={isLight ? '#4A6A8C' : '#6787A9'} strokeWidth="1.6" opacity="0.95">
              <path d="M6 34 C6 20, 14 12, 30 10" strokeLinecap="round" />
              <path
                d="M6 34 C8 22, 16 16, 30 10"
                stroke={isLight ? '#C5A059' : '#E4C65D'}
                opacity="0.9"
                strokeLinecap="round"
              />
              <path d="M6 34 C10 24, 18 20, 30 10" strokeLinecap="round" />
              <path
                d="M6 34 C12 26, 20 24, 30 10"
                stroke={isLight ? '#C5A059' : '#E4C65D'}
                opacity="0.6"
                strokeLinecap="round"
              />
            </g>
            <circle cx="6" cy="34" r="2.8" fill={isLight ? '#C5A059' : '#E4C65D'} />
          </svg>
          <div>
            <span
              className={`font-display font-extrabold text-xl tracking-tight transition-colors block leading-none ${
                isLight ? 'text-[#4A6A8C]' : 'text-white'
              }`}
            >
              Spondylus
              <span className={isLight ? 'text-[#C5A059]' : 'text-[#E4C65D]'}>.</span>
            </span>
            <span className={`text-[10px] font-mono tracking-wider uppercase font-semibold ${isLight ? 'text-[#2D3436]/75' : 'text-slate-400'}`}>
              Soluciones Digitales
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-7 font-body text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-all cursor-pointer font-medium ${
                    isActive
                      ? isLight
                        ? 'text-[#4A6A8C] font-extrabold'
                        : 'text-cyan-400 font-bold'
                      : isLight
                      ? 'text-[#2D3436] hover:text-[#4A6A8C]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full transition-all ${
                        isLight ? 'bg-[#D4AF37]' : 'bg-cyan-400'
                      }`}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Actions & Day/Night Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label="Cambiar tema día/noche"
            title={isLight ? 'Cambiar a modo oscuro' : 'Cambiar a versión de día'}
            className={`flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-full border transition-all cursor-pointer shadow-xs ${
              isLight
                ? 'bg-[#F2F5F9] text-[#2D3436] border-[#4A6A8C]/30 hover:bg-white hover:border-[#4A6A8C]'
                : 'bg-slate-800/80 text-slate-200 border-slate-700 hover:bg-slate-700'
            }`}
          >
            {isLight ? (
              <>
                <Sun className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]/30" />
                <span>Versión Día</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-cyan-400" />
                <span>Modo Noche</span>
              </>
            )}
          </button>

          <button
            onClick={() => handleNavClick('contacto')}
            className={`cta-shimmer inline-flex items-center gap-2 font-bold text-sm px-5 py-2 rounded-full transition-all shadow-sm cursor-pointer ${
              isLight
                ? 'bg-[#4A6A8C] hover:bg-[#37526E] text-white shadow-[#4A6A8C]/25'
                : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-cyan-400/20'
            }`}
          >
            Cotizar
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-full border ${
              isLight ? 'bg-amber-50 border-amber-200 text-amber-800' : 'bg-slate-800 border-slate-700 text-slate-200'
            }`}
          >
            {isLight ? <Sun className="w-4 h-4 text-amber-600" /> : <Moon className="w-4 h-4 text-cyan-400" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            className={`p-2 rounded-xl border transition-colors ${
              isLight ? 'text-slate-800 bg-slate-100 border-slate-200' : 'text-slate-200 bg-slate-800 border-slate-700'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden mt-3 mx-4 rounded-2xl border p-5 shadow-xl backdrop-blur-xl ${
            isLight
              ? 'bg-white/95 border-slate-200 text-slate-800'
              : 'bg-[#0d1018]/95 border-slate-800 text-slate-200'
          }`}
        >
          <ul className="flex flex-col gap-2 font-body text-base">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl font-medium transition-colors ${
                      isActive
                        ? isLight
                          ? 'bg-sky-50 text-cyan-700 font-bold'
                          : 'bg-cyan-950/40 text-cyan-400 font-bold'
                        : isLight
                        ? 'hover:bg-slate-100 text-slate-700'
                        : 'hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800">
            <button
              onClick={() => handleNavClick('contacto')}
              className={`w-full flex items-center justify-center gap-2 font-semibold text-sm px-5 py-3 rounded-full text-center ${
                isLight ? 'bg-cyan-600 text-white' : 'bg-cyan-400 text-slate-950'
              }`}
            >
              Cotizar Proyecto
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
