import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
}

export default function Footer({ theme }: FooterProps) {
  const isLight = theme === 'light';
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t px-5 md:px-8 py-12 transition-colors duration-300 ${
        isLight
          ? 'bg-[#E0E5EC] border-[#4A6A8C]/20 text-[#2D3436]'
          : 'bg-[#05070d] border-slate-900 text-slate-400'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <svg
            width="28"
            height="28"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke={isLight ? '#4A6A8C' : '#22d3ee'} strokeWidth="1.4" opacity="0.9">
              <path d="M6 34 C6 20, 14 12, 30 10" strokeLinecap="round" />
              <path
                d="M6 34 C8 22, 16 16, 30 10"
                stroke={isLight ? '#C5A059' : '#fcd34d'}
                opacity="0.8"
                strokeLinecap="round"
              />
              <path d="M6 34 C10 24, 18 20, 30 10" strokeLinecap="round" />
            </g>
            <circle cx="6" cy="34" r="2.2" fill={isLight ? '#4A6A8C' : '#22d3ee'} />
          </svg>
          <span
            className={`font-display font-extrabold text-lg ${
              isLight ? 'text-[#4A6A8C]' : 'text-white'
            }`}
          >
            Spondylus
            <span className={isLight ? 'text-[#C5A059]' : 'text-cyan-400'}>.</span>
          </span>
        </div>

        {/* Footer nav */}
        <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
          <li>
            <a
              href="#inicio"
              className={`transition-colors ${
                isLight ? 'hover:text-[#4A6A8C]' : 'hover:text-cyan-400'
              }`}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#nosotros"
              className={`transition-colors ${
                isLight ? 'hover:text-[#4A6A8C]' : 'hover:text-cyan-400'
              }`}
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href="#planes"
              className={`transition-colors ${
                isLight ? 'hover:text-[#4A6A8C]' : 'hover:text-cyan-400'
              }`}
            >
              Planes
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className={`transition-colors ${
                isLight ? 'hover:text-[#4A6A8C]' : 'hover:text-cyan-400'
              }`}
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
              isLight
                ? 'border-[#4A6A8C]/30 text-[#4A6A8C] hover:text-[#4A6A8C] hover:border-[#4A6A8C] hover:bg-white'
                : 'border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40'
            }`}
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
              isLight
                ? 'border-[#4A6A8C]/30 text-[#4A6A8C] hover:text-[#4A6A8C] hover:border-[#4A6A8C] hover:bg-white'
                : 'border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40'
            }`}
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/593958876957"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
              isLight
                ? 'border-[#4A6A8C]/30 text-[#4A6A8C] hover:text-[#4A6A8C] hover:border-[#4A6A8C] hover:bg-white'
                : 'border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40'
            }`}
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>

      <p
        className={`text-center text-xs mt-10 font-mono ${
          isLight ? 'text-[#2D3436]/70' : 'text-slate-500'
        }`}
      >
        © {currentYear} Spondylus Soluciones Digitales. Todos los derechos reservados.
      </p>
    </footer>
  );
}
