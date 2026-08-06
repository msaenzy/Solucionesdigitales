/* Spondylus Standalone Interactive JavaScript */

const caseDetails = {
  medico: {
    title: 'Clínica Dental OdontoSalud',
    category: 'Médico & Dental',
    city: 'Guayaquil, Ecuador',
    metric: '+185% Citas Directas por WhatsApp',
    description: 'Transformación total de presencia digital para clínica odontológica especializada. Se implementó una página con arquitectura de velocidad optimizada, catálogo interactivo de tratamientos (limpieza, carillas, ortodoncia invisible) y llamado a la acción prioritario directo al canal de atención al paciente por WhatsApp.',
    results: [
      'Incremento de citas agendadas desde móviles en 185%',
      'Tiempo medio de carga de 0.7 segundos en conexión 4G',
      'Integración con Google Maps para ubicación en tiempo real'
    ]
  },
  cafeteria: {
    title: 'Bistró & Café Artesanal',
    category: 'Cafetería & Gastronomía',
    city: 'Quito, Ecuador',
    metric: '+140% Reservas de Mesas',
    description: 'Desarrollo de menú digital atractivo y rápido con fotos optimizadas de alta calidad. Se integró botón directo de reservas de mesa y pedidos para llevar a través de WhatsApp.',
    results: [
      'Aumento significativo en pedidos directos sin comisiones',
      'Experiencia fluida para clientes escaneando código QR en local',
      'Diseño mobile-first adaptado para teléfonos de gama media y alta'
    ]
  },
  consultoria: {
    title: 'Estudio Jurídico & Contable',
    category: 'Cuenca, Ecuador',
    metric: '+220% Consultas Corporativas',
    description: 'Landing Page institucional orientada a proyectar máxima autoridad legal y contable. Incluye secciones claras de áreas de práctica, equipo profesional y botón directo de asesoría inicial por WhatsApp.',
    results: [
      'Duplicación de contactos corporativos calificados',
      'Posicionamiento prioritario en búsquedas locales en Ecuador',
      'Alta tasa de retención de usuarios navegando por servicios'
    ]
  }
};

function openCaseModal(key) {
  const modal = document.getElementById('caseModal');
  const modalContent = document.getElementById('modalContent');
  const data = caseDetails[key];

  if (modal && modalContent && data) {
    modalContent.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between border-b pb-3 border-gray-200">
          <span class="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-[#37526E]/10 text-[#37526E]">${data.category}</span>
          <span class="text-xs font-mono font-bold text-[#C5A059]">${data.city}</span>
        </div>
        <h3 class="font-display font-extrabold text-2xl">${data.title}</h3>
        <p class="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 inline-block">${data.metric}</p>
        <p class="text-xs opacity-90 leading-relaxed">${data.description}</p>
        <div class="space-y-2 pt-2 border-t border-gray-200">
          <h4 class="font-bold text-xs">Logros Clave del Proyecto:</h4>
          <ul class="space-y-1 text-xs opacity-85">
            ${data.results.map(r => `<li class="flex items-center gap-2">✓ ${r}</li>`).join('')}
          </ul>
        </div>
        <a href="https://wa.me/593958876957?text=Quiero%20un%20proyecto%20similar%20a%20${encodeURIComponent(data.title)}" target="_blank" class="block text-center w-full py-3 mt-4 rounded-full font-bold text-xs bg-[#37526E] text-white shadow-md hover:bg-[#2A3E54]">
          Quiero una Landing Page Como Esta
        </a>
      </div>
    `;
    modal.classList.remove('hidden');
  }
}

function closeCaseModal() {
  const modal = document.getElementById('caseModal');
  if (modal) modal.classList.add('hidden');
}

function selectPlanForContact(planTitle) {
  const planSelect = document.getElementById('formPlan');
  if (planSelect) {
    planSelect.value = planTitle;
  }
  const contactSection = document.getElementById('contacto');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '593958876957';

  // Theme Switcher Logic
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeToggleMobileBtn = document.getElementById('themeToggleMobileBtn');
  const themeIconSun = document.querySelectorAll('.theme-icon-sun');
  const themeIconMoon = document.querySelectorAll('.theme-icon-moon');
  const themeLabel = document.querySelectorAll('.theme-label');

  function setTheme(isDark) {
    if (isDark) {
      document.body.classList.add('dark-mode');
      themeIconSun.forEach(el => el.classList.add('hidden'));
      themeIconMoon.forEach(el => el.classList.remove('hidden'));
      themeLabel.forEach(el => el.textContent = 'Modo Noche');
      localStorage.setItem('spondylus-theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      themeIconSun.forEach(el => el.classList.remove('hidden'));
      themeIconMoon.forEach(el => el.classList.add('hidden'));
      themeLabel.forEach(el => el.textContent = 'Versión Día');
      localStorage.setItem('spondylus-theme', 'light');
    }
  }

  // Load saved theme preference
  const savedTheme = localStorage.getItem('spondylus-theme');
  setTheme(savedTheme === 'dark');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-mode');
      setTheme(!isDark);
    });
  }

  if (themeToggleMobileBtn) {
    themeToggleMobileBtn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-mode');
      setTheme(!isDark);
    });
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Gallery Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const caseCards = document.querySelectorAll('.case-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-[#37526E]', 'text-white', 'border-[#37526E]');
        b.classList.add('bg-white', 'text-[#2D3436]', 'border-[#4A6A8C]/20');
      });

      btn.classList.remove('bg-white', 'text-[#2D3436]', 'border-[#4A6A8C]/20');
      btn.classList.add('bg-[#37526E]', 'text-white', 'border-[#37526E]');

      const category = btn.getAttribute('data-category');

      caseCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Simulator Data
  const simulatorData = {
    medico: {
      domain: 'clinica-dental.ec',
      speed: '⚡ Carga en 0.8s',
      headline: 'Tu Sonrisa y Salud en Manos de Especialistas',
      cta: 'Agendar Cita Odontológica por WhatsApp',
      msg: `👋 ¡Hola! Vengo desde su Landing Page.\n\n🩺 *Interés:* Consulta y Valoración Odontológica\n🦷 *Tratamiento:* Limpieza / Ortodoncia / Blanqueamiento\n📍 *Ciudad:* Quito / Guayaquil\n\n💬 Quisiera consultar disponibilidad de agenda para esta semana.`
    },
    gastronomia: {
      domain: 'bistro-gastronomia.ec',
      speed: '⚡ Carga en 0.8s',
      headline: 'Sabor Auténtico & Experiencias Únicas',
      cta: 'Ver Menú & Reservar por WhatsApp',
      msg: `👋 ¡Hola! Vengo desde su Landing Page.\n\n☕ *Interés:* Reserva de Mesa & Menú\n👥 *Personas:* 4 personas\n📅 *Fecha:* Este fin de semana\n\n💬 Quisiera consultar disponibilidad de mesa en su local.`
    },
    fitness: {
      domain: 'coaching-fitness.ec',
      speed: '⚡ Carga en 0.9s',
      headline: 'Alcanza tu Máximo Rendimiento Físico',
      cta: 'Agendar Clase Gratis por WhatsApp',
      msg: `👋 ¡Hola! Vengo desde su Landing Page.\n\n🏋️ *Interés:* Clase de Prueba & Evaluación Gratis\n🎯 *Objetivo:* Tonificación y Aumento de Masa\n\n💬 Quisiera agendar mi primera sesión de evaluación.`
    },
    arquitectura: {
      domain: 'estudio-arquitectura.ec',
      speed: '⚡ Carga en 0.9s',
      headline: 'Diseñamos Espacios Extraordinarios que Inspiran',
      cta: 'Solicitar Asesoría por WhatsApp',
      msg: `👋 ¡Hola! Vengo desde su Landing Page.\n\n📌 *Interés:* Asesoría en Arquitectura & Interiorismo\n🏛️ *Tipo de Proyecto:* Remodelación / Obra Nueva\n📍 *Ubicación:* Ecuador\n\n💬 Quisiera coordinar una cita previa para revisar mi proyecto.`
    }
  };

  const simTabBtns = document.querySelectorAll('.sim-tab');
  const simDomain = document.getElementById('simDomain');
  const simSpeed = document.getElementById('simSpeed');
  const simHeadline = document.getElementById('simHeadline');
  const simCta = document.getElementById('simCta');
  const simMessage = document.getElementById('simMessage');
  const simCopyBtn = document.getElementById('simCopyBtn');
  const simSendBtn = document.getElementById('simSendBtn');

  if (simTabBtns.length > 0) {
    simTabBtns.forEach(tab => {
      tab.addEventListener('click', () => {
        simTabBtns.forEach(t => {
          t.classList.remove('bg-[#37526E]', 'text-white');
          t.classList.add('bg-white', 'text-[#2D3436]');
        });

        tab.classList.remove('bg-white', 'text-[#2D3436]');
        tab.classList.add('bg-[#37526E]', 'text-white');

        const key = tab.getAttribute('data-sim');
        const data = simulatorData[key];

        if (data) {
          if (simDomain) simDomain.textContent = data.domain;
          if (simSpeed) simSpeed.textContent = data.speed;
          if (simHeadline) simHeadline.textContent = data.headline;
          if (simCta) simCta.textContent = data.cta;
          if (simMessage) simMessage.value = data.msg;
        }
      });
    });

    if (simCopyBtn && simMessage) {
      simCopyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(simMessage.value);
        const originalText = simCopyBtn.textContent;
        simCopyBtn.textContent = '✓ ¡Copiado!';
        setTimeout(() => {
          simCopyBtn.textContent = originalText;
        }, 2000);
      });
    }

    if (simSendBtn && simMessage) {
      simSendBtn.addEventListener('click', () => {
        const text = encodeURIComponent(simMessage.value);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
      });
    }
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName')?.value || '';
      const business = document.getElementById('formBusiness')?.value || '';
      const city = document.getElementById('formCity')?.value || '';
      const plan = document.getElementById('formPlan')?.value || 'Landing Page Corporativa Pro';
      const details = document.getElementById('formDetails')?.value || '';

      const text = `👋 ¡Hola Spondylus! Quisiera cotizar un proyecto web.\n\n👤 *Nombre:* ${name}\n🏢 *Negocio:* ${business}\n📍 *Ciudad:* ${city}\n📦 *Plan de Interés:* ${plan}\n📝 *Detalles:* ${details}`;

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    });
  }
});
