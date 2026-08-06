import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { ThemeMode } from './types';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ValueSection from './components/ValueSection';
import { SimulatorSection } from './components/SimulatorSection';
import PlansSection from './components/PlansSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import NosotrosPage from './components/pages/NosotrosPage';
import PlanesPage from './components/pages/PlanesPage';
import CasosPage from './components/pages/CasosPage';
import ContactoPage from './components/pages/ContactoPage';
import Footer from './components/Footer';

export default function App() {
  // Default to 'light' (Versión de día) as requested
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [activeTab, setActiveTab] = useState<string>('inicio');
  const [selectedPlanTitle, setSelectedPlanTitle] = useState<string>('');

  const isLight = theme === 'light';

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleNavigate = (sectionId: string) => {
    setActiveTab(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPlan = (planTitle: string) => {
    setSelectedPlanTitle(planTitle);
    handleNavigate('contacto');
  };

  return (
    <div
      className={`min-h-screen font-body transition-colors duration-300 antialiased ${
        isLight ? 'bg-[#E0E5EC] text-[#2D3436]' : 'bg-[#070911] text-slate-300'
      }`}
    >
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeTab={activeTab}
        setActiveTab={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="min-h-[80vh]">
        {activeTab === 'inicio' ? (
          /* Continuous Landing View (Inicio = Todas las secciones juntas) */
          <div>
            <HeroSection theme={theme} onNavigateTo={handleNavigate} />
            <ValueSection theme={theme} />
            <PlansSection theme={theme} onSelectPlan={handleSelectPlan} />
            <SimulatorSection theme={theme} />
            <TestimonialsSection theme={theme} onNavigateToContact={() => handleNavigate('contacto')} />
            <ContactSection theme={theme} selectedPlanTitle={selectedPlanTitle} />
          </div>
        ) : (
          /* Dedicated Expanded Page View for selected Menu Tab */
          <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header Return Breadcrumb */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
              <button
                onClick={() => handleNavigate('inicio')}
                className={`flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border transition-all cursor-pointer shadow-xs ${
                  isLight
                    ? 'bg-white border-slate-300 hover:bg-slate-100 text-slate-700'
                    : 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Volver a Inicio (Vista Completa)
              </button>

              <span className={`text-xs font-bold font-mono uppercase tracking-wider ${isLight ? 'text-[#4A6A8C]' : 'text-[#6787A9]'}`}>
                {activeTab === 'nosotros'
                  ? 'Por qué elegirnos · Detalle Ampliado'
                  : activeTab === 'planes'
                  ? 'Planes & Tarifas · Detalle Ampliado'
                  : activeTab === 'casos'
                  ? 'Casos de Éxito · Detalle Ampliado'
                  : 'Contacto & Cotización · Detalle Ampliado'}
              </span>
            </div>

            {/* Dynamic Page Component Render */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                {activeTab === 'nosotros' && (
                  <NosotrosPage theme={theme} onNavigateTo={handleNavigate} />
                )}
                {activeTab === 'planes' && (
                  <PlanesPage theme={theme} onSelectPlan={handleSelectPlan} />
                )}
                {activeTab === 'casos' && (
                  <CasosPage theme={theme} onNavigateTo={handleNavigate} />
                )}
                {activeTab === 'contacto' && (
                  <ContactoPage theme={theme} selectedPlanTitle={selectedPlanTitle} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </main>

      <Footer theme={theme} />
    </div>
  );
}
