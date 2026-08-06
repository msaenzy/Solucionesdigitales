import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Stethoscope,
  Coffee,
  Briefcase,
  LayoutGrid,
  Star,
  Quote,
  Check,
  ExternalLink,
  MapPin,
  TrendingUp,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Smartphone
} from 'lucide-react';
import { ThemeMode } from '../types';

export interface CaseProject {
  id: string;
  category: 'medico' | 'cafeteria' | 'consultoria';
  categoryLabel: string;
  title: string;
  subtitle: string;
  location: string;
  metricBadge: string;
  url: string;
  heroGradient: string;
  accentColor: string;
  tags: string[];
  challenge: string;
  solution: string;
  features: string[];
  stats: { label: string; value: string }[];
  quote: string;
  author: string;
  authorRole: string;
  initials: string;
}

export const showcaseProjects: CaseProject[] = [
  // 1. MEDICO Y DENTAL (PRIMERA CATEGORÍA)
  {
    id: 'medico-1',
    category: 'medico',
    categoryLabel: 'Médico & Dental',
    title: 'Clínica Dental OdontoSalud',
    subtitle: 'Landing Page + Agendamiento de Citas',
    location: 'Guayaquil, Ecuador',
    metricBadge: '+185% Pacientes Nuevos',
    url: 'odontosalud.com.ec',
    heroGradient: 'from-[#4A6A8C]/20 via-sky-500/10 to-white',
    accentColor: '#4A6A8C',
    tags: ['Odontología Especializada', 'Agendamiento WhatsApp', 'SEO Local Guayaquil', 'Casos Antes y Después'],
    challenge: 'Dependían de referencias de boca en boca y carecían de una plataforma web que transmitiera la higiene, tecnología e imagen moderna de sus instalaciones.',
    solution: 'Construimos una Landing Page médica con botón directo a WhatsApp, catálogo claro de especialidades dental, testimoniales reales y mapa de ubicación.',
    features: [
      'Agendamiento inmediato por WhatsApp a 1 solo clic',
      'Galería de instalaciones y casos clínicos',
      'Ubicación en Google Maps y Waze para pacientes',
      'Carga ultrarrápida en redes móviles 4G/5G',
      'Diseño 100% higiénico y corporativo en Ecuador'
    ],
    stats: [
      { label: 'Citas por WhatsApp', value: '+185%' },
      { label: 'Velocidad de Carga', value: '0.8 seg' },
      { label: 'Retorno Inversión', value: '< 15 días' }
    ],
    quote: 'Desde que lanzamos la landing page, los pacientes nos contactan con la decisión ya tomada. Transmite exactamente la pulcritud de nuestra clínica.',
    author: 'Dra. Mariela Castro',
    authorRole: 'Directora Médica · OdontoSalud Guayaquil',
    initials: 'MC'
  },
  {
    id: 'medico-2',
    category: 'medico',
    categoryLabel: 'Médico & Dental',
    title: 'Centro Dermatológico & Estético San Rafael',
    subtitle: 'Landing Page Estética & Tratamientos',
    location: 'Samborondón, Ecuador',
    metricBadge: '+210% Consultas Estéticas',
    url: 'dermatologiasanrafael.ec',
    heroGradient: 'from-[#C5A059]/20 via-amber-500/10 to-white',
    accentColor: '#C5A059',
    tags: ['Dermatología & Láser', 'Botón Directo Médicos', 'Diseño Elegante Pro', 'Catálogo de Servicios'],
    challenge: 'Requerían un portal sofisticado para posicionar procedimientos dermatológicos y rejuvenecimiento de alta gama en Samborondón.',
    solution: 'Landing Page minimalista con paleta suave de alta percepción, fichas explicativas por tratamiento y cotización pre-configurada.',
    features: [
      'Catálogo estructurado por tipo de tratamiento dermatológico',
      'Formulario de cotización personalizada de paquetes',
      'Reseñas de pacientes en Google integradas',
      'Optimizada para máxima elegancia en dispositivos móviles'
    ],
    stats: [
      { label: 'Consultas Premium', value: '+210%' },
      { label: 'Satisfacción Pacientes', value: '10/10' },
      { label: 'Tiempo Navegación', value: '2.4 min' }
    ],
    quote: 'Captamos pacientes de alto perfil que buscaban atención exclusiva. La elegancia y rapidez del sitio web marcaron la diferencia.',
    author: 'Dr. Roberto San Martín',
    authorRole: 'Especialista Dermatológico · Samborondón',
    initials: 'RS'
  },
  {
    id: 'medico-3',
    category: 'medico',
    categoryLabel: 'Médico & Dental',
    title: 'Consultorio Pediátrico Dr. Mendoza',
    subtitle: 'Landing Page Pediatría & Nutrición Infantil',
    location: 'Quito, Ecuador',
    metricBadge: '+150% Control Niño Sano',
    url: 'pediatriamendoza.ec',
    heroGradient: 'from-[#37526E]/20 via-blue-500/10 to-white',
    accentColor: '#37526E',
    tags: ['Pediatría Integrada', 'Horarios & Ubicación GPS', 'Contacto Padres WhatsApp', 'Calidez Humana'],
    challenge: 'Los padres de familia requerían revisar rápidamente convenios con aseguradoras, horarios de atención y ruta en mapa.',
    solution: 'Landing Page cálida y accesible con mapa GPS integrado, lista de convenios médicos y botón de respuesta inmediata para padres.',
    features: [
      'Integración GPS directa a Google Maps y Waze',
      'Desglose de convenios con seguro médico privado',
      'Botón emergente para urgencias de la consulta',
      'Estructura limpia con tipografía accesible y legible'
    ],
    stats: [
      { label: 'Citas de Control', value: '+150%' },
      { label: 'Rutas Consultadas', value: '+340' },
      { label: 'Calificación Google', value: '4.9 ★' }
    ],
    quote: 'A los padres les fascina poder abrir el mapa y escribirnos directamente. La landing transmite toda la calidez que un pediatra debe inspirar.',
    author: 'Dr. Fernando Mendoza',
    authorRole: 'Pediatra & Nutricionista Infantil · Quito',
    initials: 'FM'
  },

  // 2. CAFETERIA Y GASTRONOMIA
  {
    id: 'cafeteria-1',
    category: 'cafeteria',
    categoryLabel: 'Cafetería & Gastronomía',
    title: 'Café & Tostaduría Manta Bay',
    subtitle: 'Landing Page + Menú QR Interactivo',
    location: 'Manta, Manabí',
    metricBadge: '+230% Pedidos Menú QR',
    url: 'cafemantabay.com.ec',
    heroGradient: 'from-[#C5A059]/25 via-amber-600/10 to-white',
    accentColor: '#C5A059',
    tags: ['Café de Especialidad', 'Menú Digital QR', 'WhatsApp Pedidos', 'Envíos Nacionales'],
    challenge: 'Deseaban reemplazar cartas impresas y permitir a los clientes encargar café en grano de especialidad a todo Ecuador.',
    solution: 'Landing Page gastronómica con Menú QR interactivo en tiempo real y módulo de pedido rápido para fundas de café en grano.',
    features: [
      'Menú digital interactivo accesible por QR en mesa',
      'Sistema de pedido de café empacado a todo el país',
      'Sección de orígenes del grano (Loja, Pichincha, Manabí)',
      'Ahorro completo en reimpresión de cartas de papel'
    ],
    stats: [
      { label: 'Pedidos por QR', value: '+230%' },
      { label: 'Ventas de Café en Grano', value: '+160%' },
      { label: 'Costo Reimpresión', value: '$0 menú' }
    ],
    quote: 'Los clientes escanean el QR en mesa y piden al instante. Además vendemos nuestro café tostado a clientes de Guayaquil y Quito desde la web.',
    author: 'Andrés Villamar',
    authorRole: 'Fundador & Master Barista · Manta Bay',
    initials: 'AV'
  },
  {
    id: 'cafeteria-2',
    category: 'cafeteria',
    categoryLabel: 'Cafetería & Gastronomía',
    title: 'Panadería Artesanal La Porteña',
    subtitle: 'Landing Page Bistro & Reservas de Brunch',
    location: 'Cuenca, Ecuador',
    metricBadge: '+175% Reservas Brunch',
    url: 'laportena.ec',
    heroGradient: 'from-[#4A6A8C]/20 via-amber-500/10 to-white',
    accentColor: '#4A6A8C',
    tags: ['Gastronomía Masa Madre', 'Reserva de Mesas', 'Botón Directo Menú', 'Promociones Semanales'],
    challenge: 'Maximizar el flujo de clientes en mañanas de fin de semana para su servicio de brunch y panadería artesanal.',
    solution: 'Landing Page limpia con fotografía de alta resolución, mapa de ubicación en el centro histórico de Cuenca y reserva por WhatsApp.',
    features: [
      'Sistema intuitivo de reserva de mesas por WhatsApp',
      'Galería gastronómica de panes de masa madre',
      'Promociones semanales y combos para grupos',
      'Ubicación exacta con referencias turísticas'
    ],
    stats: [
      { label: 'Reservas de Brunch', value: '+175%' },
      { label: 'Llenado Fines de Semana', value: '100%' },
      { label: 'Clics WhatsApp', value: '480+/mes' }
    ],
    quote: 'Llenamos los desayunos del fin de semana. El diseño resalta el ambiente cálido de nuestro bistro y el sabor de nuestros productos.',
    author: 'Sofía Carrión',
    authorRole: 'Gerente Operativa · La Porteña Cuenca',
    initials: 'SC'
  },

  // 3. CONSULTORIA Y SERVICIOS PROFESIONALES
  {
    id: 'consultoria-1',
    category: 'consultoria',
    categoryLabel: 'Consultoría & Servicios',
    title: 'Estudio Jurídico & Consultoría Valdivia',
    subtitle: 'Landing Page Corporativa & Autoridad',
    location: 'Quito, Ecuador',
    metricBadge: '+140% Solicitudes B2B',
    url: 'valdiviaconsultores.ec',
    heroGradient: 'from-[#37526E]/20 via-slate-700/10 to-white',
    accentColor: '#37526E',
    tags: ['Derecho Corporativo', 'Perfil de Socios', 'Formulario Cotización', 'Respaldo B2B'],
    challenge: 'Buscaban proyectar máxima solidez y autoridad institucional para captar corporaciones e industrias.',
    solution: 'Landing Page institucional sobria con presentación de socios expertos, áreas de práctica legal y formulario estructurado.',
    features: [
      'Estructura clara de servicios corporativos y contables',
      'Perfil profesional de abogados y consultores senior',
      'Formulario de cotización de auditorías legales',
      'Descarga de brochure corporativo institucional'
    ],
    stats: [
      { label: 'Contratos B2B', value: '+140%' },
      { label: 'Reputación Digital', value: 'Alta Gama' },
      { label: 'Tiempo de Cierre', value: 'Inmediato' }
    ],
    quote: 'La landing page convirtió visitas en clientes corporativos recurrentes. Es la carta de presentación perfecta ante cualquier empresa.',
    author: 'Dr. Alejandro Valdivia',
    authorRole: 'Socio Principal · Valdivia & Asociados',
    initials: 'AV'
  },
  {
    id: 'consultoria-2',
    category: 'consultoria',
    categoryLabel: 'Consultoría & Servicios',
    title: 'Suministros Industriales Rivas & Hnos',
    subtitle: 'Landing Page B2B & Catálogo Rápido',
    location: 'Durán / Guayaquil',
    metricBadge: '+220% Cotizaciones Mayoristas',
    url: 'rivassuministros.com.ec',
    heroGradient: 'from-[#4A6A8C]/20 via-slate-800/10 to-white',
    accentColor: '#4A6A8C',
    tags: ['Suministros Industriales', 'WhatsApp Vendedores', 'Mapa de Bodegas', 'Atención B2B'],
    challenge: 'Las constructoras e industrias buscaban en Google distribuidores confiables en la zona industrial de Durán y Guayaquil.',
    solution: 'Landing Page industrial directa con enlace por departamento de ventas y cotizador mayorista por WhatsApp.',
    features: [
      'Catálogo por familias de materiales y herramientas',
      'Acceso directo a ejecutivos por área técnica',
      'Ubicación GPS de matriz y bodegas de distribución',
      'Formulario para solicitud de crédito comercial'
    ],
    stats: [
      { label: 'Cotizaciones B2B', value: '+220%' },
      { label: 'Nuevas Constructoras', value: '+35/mes' },
      { label: 'Nivel Conversión', value: 'Alto' }
    ],
    quote: 'Las constructoras nos encuentran en Google y nos piden cotizaciones masivas a WhatsApp. La inversión se recuperó en el primer contrato.',
    author: 'Jorge Rivas',
    authorRole: 'Gerente Comercial · Suministros Rivas',
    initials: 'JR'
  },
  {
    id: 'consultoria-3',
    category: 'consultoria',
    categoryLabel: 'Consultoría & Servicios',
    title: 'Estudio de Arquitectura Alaia',
    subtitle: 'Landing Page Portafolio & Diseño Residencial',
    location: 'Samborondón / Quito',
    metricBadge: '+165% Consultas Proyectos',
    url: 'alaiaarquitectura.ec',
    heroGradient: 'from-[#2D3436]/20 via-emerald-800/10 to-white',
    accentColor: '#2D3436',
    tags: ['Arquitectura & Renders', 'Portafolio Visual', 'Carga Ultrarrápida', 'Contacto Arquitecto'],
    challenge: 'Necesitaban exhibir sus obras residenciales de lujo con fotografías pesadas sin perder velocidad en dispositivos móviles.',
    solution: 'Landing Page con carga inteligente de imágenes en alta resolución y formulario orientado a proyectos de diseño residencial.',
    features: [
      'Galería fotográfica interactiva con respuesta inmediata',
      'Carga ultrarrápida adaptada a conexiones celulares 4G',
      'Formulario de cotización de planos y construcción',
      'Testimonios de propietarios de viviendas exclusivas'
    ],
    stats: [
      { label: 'Proyectos Nuevos', value: '+165%' },
      { label: 'Score Velocidad', value: '99/100' },
      { label: 'Percepción de Marca', value: 'Lujo' }
    ],
    quote: 'Un portafolio limpio donde la calidad de nuestras obras habla por sí sola. La experiencia de navegación en el celular es excelente.',
    author: 'Arq. Lucía Paredes',
    authorRole: 'Directora de Arquitectura · Alaia Studio',
    initials: 'LP'
  }
];

interface CaseShowcaseGalleryProps {
  theme: ThemeMode;
  onNavigateToContact?: () => void;
}

export default function CaseShowcaseGallery({ theme, onNavigateToContact }: CaseShowcaseGalleryProps) {
  const isLight = theme === 'light';

  // Medical/Dental is set as FIRST / DEFAULT active category
  const [selectedCategory, setSelectedCategory] = useState<'medico' | 'cafeteria' | 'consultoria' | 'todos'>('medico');
  const [activeModalProject, setActiveModalProject] = useState<CaseProject | null>(null);

  // Filter projects according to category
  const filteredProjects = showcaseProjects.filter((p) => {
    if (selectedCategory === 'todos') return true;
    return p.category === selectedCategory;
  });

  const categories = [
    {
      id: 'medico' as const,
      label: 'Médico & Dental',
      icon: Stethoscope,
      count: showcaseProjects.filter((p) => p.category === 'medico').length,
    },
    {
      id: 'cafeteria' as const,
      label: 'Cafetería & Gastronomía',
      icon: Coffee,
      count: showcaseProjects.filter((p) => p.category === 'cafeteria').length,
    },
    {
      id: 'consultoria' as const,
      label: 'Consultoría & Servicios',
      icon: Briefcase,
      count: showcaseProjects.filter((p) => p.category === 'consultoria').length,
    },
    {
      id: 'todos' as const,
      label: 'Todos los Proyectos',
      icon: LayoutGrid,
      count: showcaseProjects.length,
    },
  ];

  const handleOpenContact = () => {
    setActiveModalProject(null);
    if (onNavigateToContact) {
      onNavigateToContact();
    } else {
      const el = document.getElementById('contacto');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border shadow-xs ${
                isActive
                  ? isLight
                    ? 'bg-[#4A6A8C] text-white border-[#4A6A8C] shadow-md shadow-[#4A6A8C]/20 scale-105 font-bold'
                    : 'bg-cyan-400 text-slate-950 border-cyan-300 font-bold shadow-md shadow-cyan-400/20 scale-105'
                  : isLight
                  ? 'bg-white text-[#2D3436] border-[#4A6A8C]/20 hover:bg-[#F2F5F9] hover:border-[#4A6A8C]/50'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon
                className={`w-4 h-4 ${
                  isActive
                    ? isLight
                      ? 'text-[#C5A059]'
                      : 'text-slate-950'
                    : isLight
                    ? 'text-[#4A6A8C]'
                    : 'text-cyan-400'
                }`}
              />
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                  isActive
                    ? isLight
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-950/30 text-slate-950'
                    : isLight
                    ? 'bg-[#E0E5EC] text-[#2D3436]/80'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className={`group flex flex-col justify-between rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl ${
                isLight
                  ? 'bg-[#F2F5F9] border-[#4A6A8C]/20 hover:border-[#4A6A8C] shadow-[#4A6A8C]/5'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Card Header: Mini Browser Mockup Frame */}
              <div
                className={`relative p-5 border-b bg-gradient-to-br ${project.heroGradient} ${
                  isLight ? 'border-[#4A6A8C]/15' : 'border-slate-800'
                }`}
              >
                {/* Browser bar dots */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span
                    className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full border font-bold ${
                      isLight
                        ? 'bg-white/90 border-[#4A6A8C]/25 text-[#4A6A8C]'
                        : 'bg-slate-900/90 border-slate-700 text-cyan-300'
                    }`}
                  >
                    https://{project.url}
                  </span>
                </div>

                {/* Hero Preview Graphics */}
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-bold font-mono uppercase tracking-wider px-2.5 py-1 rounded-lg ${
                        isLight ? 'bg-white/80 text-[#2D3436]' : 'bg-slate-900/80 text-white'
                      }`}
                    >
                      {project.category === 'medico' && <Stethoscope className="w-3.5 h-3.5 text-[#4A6A8C]" />}
                      {project.category === 'cafeteria' && <Coffee className="w-3.5 h-3.5 text-[#C5A059]" />}
                      {project.category === 'consultoria' && <Briefcase className="w-3.5 h-3.5 text-[#37526E]" />}
                      <span>{project.categoryLabel}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-[#37526E] text-white border border-[#C5A059]/60 shadow-xs">
                      <TrendingUp className="w-3 h-3 text-[#C5A059]" />
                      <span>{project.metricBadge}</span>
                    </span>
                  </div>

                  <h3
                    className={`font-display font-extrabold text-lg sm:text-xl mt-2 line-clamp-1 ${
                      isLight ? 'text-[#2D3436]' : 'text-white'
                    }`}
                  >
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-[#2D3436]/75 dark:text-slate-400 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>

              {/* Card Body: Info & Tags */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-2 font-mono ${isLight ? 'text-[#4A6A8C]' : 'text-cyan-400'}`}>
                    {project.subtitle}
                  </p>

                  {/* Tag Chips */}
                  <div className="flex flex-wrap gap-1.5 my-3">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[10px] font-medium px-2.5 py-1 rounded-md border ${
                          isLight
                            ? 'bg-white border-[#4A6A8C]/20 text-[#2D3436]'
                            : 'bg-slate-800/70 border-slate-700/60 text-slate-300'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quote Excerpt */}
                  <div
                    className={`p-3.5 rounded-xl border mt-4 relative ${
                      isLight
                        ? 'bg-white border-[#4A6A8C]/15 text-[#2D3436]'
                        : 'bg-slate-900/80 border-slate-800 text-slate-300'
                    }`}
                  >
                    <Quote className="w-4 h-4 opacity-25 text-[#4A6A8C] absolute top-2 right-2" />
                    <p className="text-xs italic leading-relaxed line-clamp-3">
                      "{project.quote}"
                    </p>
                    <div className="mt-2 text-[11px] font-bold flex items-center justify-between pt-2 border-t border-[#4A6A8C]/10 dark:border-slate-800">
                      <span className={isLight ? 'text-[#2D3436]' : 'text-white'}>{project.author}</span>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Action Button */}
                <button
                  onClick={() => setActiveModalProject(project)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-xs group/btn ${
                    isLight
                      ? 'bg-white border border-[#4A6A8C]/30 text-[#4A6A8C] hover:bg-[#4A6A8C] hover:text-white'
                      : 'bg-slate-800 border border-slate-700 text-slate-200 hover:bg-cyan-400 hover:text-slate-950'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059] group-hover/btn:rotate-12 transition-transform" />
                  <span>Ver Caso Completo & Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Detail Modal Dialog */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-3xl rounded-3xl border p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden max-h-[90vh] overflow-y-auto ${
                isLight ? 'bg-white border-[#4A6A8C]/30 text-[#2D3436]' : 'bg-slate-900 border-slate-700 text-slate-200'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className={`absolute top-5 right-5 p-2 rounded-full border transition-all cursor-pointer ${
                  isLight
                    ? 'bg-[#E0E5EC] border-[#4A6A8C]/20 hover:bg-[#4A6A8C] hover:text-white text-[#2D3436]'
                    : 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300'
                }`}
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pb-6 border-b border-[#4A6A8C]/15 dark:border-slate-800">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#37526E] text-white">
                    {activeModalProject.categoryLabel}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#C5A059] text-[#2D3436] flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {activeModalProject.metricBadge}
                  </span>
                </div>

                <h2 className={`font-display font-extrabold text-2xl sm:text-3xl mt-2 ${isLight ? 'text-[#2D3436]' : 'text-white'}`}>
                  {activeModalProject.title}
                </h2>
                <p className="text-xs sm:text-sm font-mono text-[#4A6A8C] dark:text-cyan-400 font-semibold mt-1">
                  {activeModalProject.subtitle} · {activeModalProject.location}
                </p>
              </div>

              {/* Simulated Interactive Mockup Screen Header */}
              <div className={`rounded-2xl border p-5 mb-6 bg-gradient-to-r ${activeModalProject.heroGradient} ${isLight ? 'border-[#4A6A8C]/20' : 'border-slate-800'}`}>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#4A6A8C]" />
                    <span className="font-bold">Vista Previa de Landing Page Activa:</span>
                  </div>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    En Línea en Ecuador
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {activeModalProject.stats.map((st, stIdx) => (
                    <div
                      key={stIdx}
                      className={`p-3 rounded-xl border text-center ${
                        isLight ? 'bg-white/90 border-[#4A6A8C]/20' : 'bg-slate-900/90 border-slate-800'
                      }`}
                    >
                      <p className="text-[10px] font-mono uppercase text-[#2D3436]/70 dark:text-slate-400">{st.label}</p>
                      <p className="font-extrabold text-base sm:text-lg text-[#37526E] dark:text-cyan-400 mt-0.5">{st.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className={`p-4 sm:p-5 rounded-2xl border ${isLight ? 'bg-[#F2F5F9] border-[#4A6A8C]/15' : 'bg-slate-800/40 border-slate-800'}`}>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#4A6A8C] dark:text-cyan-400 mb-2">
                    Desafío del Cliente:
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#2D3436]/90 dark:text-slate-300">
                    {activeModalProject.challenge}
                  </p>
                </div>

                <div className={`p-4 sm:p-5 rounded-2xl border ${isLight ? 'bg-white border-[#4A6A8C]/20' : 'bg-slate-800/60 border-slate-700'}`}>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#37526E] dark:text-emerald-400 mb-2">
                    Solución Spondylus:
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#2D3436]/90 dark:text-slate-300">
                    {activeModalProject.solution}
                  </p>
                </div>
              </div>

              {/* Included Features Checklist */}
              <div className="mb-6">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#4A6A8C] dark:text-cyan-400 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Funcionalidades Implementadas en su Landing Page:</span>
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2 text-xs">
                  {activeModalProject.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <div className="p-0.5 rounded-full mt-0.5 shrink-0 bg-[#4A6A8C]/15 text-[#4A6A8C] border border-[#4A6A8C]/30">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-medium text-[#2D3436] dark:text-slate-200">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Quote Card */}
              <div className={`p-5 rounded-2xl border mb-6 ${isLight ? 'bg-[#FAF5E4]/60 border-[#C5A059]/40' : 'bg-amber-950/20 border-amber-500/30'}`}>
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm italic font-medium leading-relaxed mb-3">
                  "{activeModalProject.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#37526E] text-white flex items-center justify-center font-bold text-xs">
                    {activeModalProject.initials}
                  </div>
                  <div>
                    <p className="font-bold text-xs text-[#2D3436] dark:text-white">{activeModalProject.author}</p>
                    <p className="text-[11px] text-[#2D3436]/70 dark:text-slate-400">{activeModalProject.authorRole}</p>
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#4A6A8C]/15 dark:border-slate-800">
                <div className="text-xs text-[#2D3436]/80 dark:text-slate-400">
                  <span className="font-bold">¿Tienes un negocio similar?</span> Diseñamos tu Landing Page en tiempo récord.
                </div>
                <button
                  onClick={handleOpenContact}
                  className="cta-shimmer w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs bg-[#4A6A8C] hover:bg-[#37526E] text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:-translate-y-0.5"
                >
                  <span>Quiero una Landing como esta</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
