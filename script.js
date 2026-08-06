/* Spondylus Standalone Interactive JavaScript */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '593958876957';

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
          card.style.display = 'block';
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
