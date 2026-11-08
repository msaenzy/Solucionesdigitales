// cms.js — lee el contenido editable desde tu Google Sheet (Apps Script ?api=publico) y lo pinta en la web.
// Si no hay URL configurada o Google no responde, la web muestra el contenido estático del HTML (no se rompe nada).
const CACHE_KEY = "spd-cms-v1";
const CACHE_MIN = 5;
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const ICON = {
  check: '<path d="m5 12.5 4.2 4.2L19 7"/>', x: '<path d="M7 7l10 10M17 7 7 17"/>', arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>', spark: '<path d="M12 3c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7Z"/>',
};
const ico = (n) => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n]}</svg>`;

function jsonp(url, timeout = 6000) {
  return new Promise((resolve, reject) => {
    const cb = "spdCMS_" + Date.now();
    const s = document.createElement("script");
    const t = setTimeout(() => { cleanup(); reject(new Error("timeout")); }, timeout);
    function cleanup() { clearTimeout(t); delete window[cb]; s.remove(); }
    window[cb] = (data) => { cleanup(); resolve(data); };
    s.onerror = () => { cleanup(); reject(new Error("network")); };
    s.src = url + (url.includes("?") ? "&" : "?") + "callback=" + cb;
    document.head.append(s);
  });
}

export async function loadCMS(cfg, base) {
  if (!cfg || !cfg.url) return null;
  let data = null;
  try {
    const c = JSON.parse(sessionStorage.getItem(CACHE_KEY) || "null");
    if (c && Date.now() - c.t < CACHE_MIN * 60000) data = c.d;
  } catch (_) {}
  if (!data) {
    try {
      const res = await jsonp(cfg.url.includes("api=publico") ? cfg.url : cfg.url + "?api=publico");
      if (!res || !res.success) throw new Error(res && res.message);
      data = res.data;
      try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), d: data })); } catch (_) {}
    } catch (err) { console.warn("[cms] se usa el contenido estático:", err.message); return null; }
  }
  try { apply(data, base); document.documentElement.dataset.cms = "on"; }
  catch (err) { console.warn("[cms] error al pintar:", err); }
  return data;
}

function apply(d, base) {
  const c = d.config || {};
  contacto(c);
  if (d.planes && d.planes.length) {
    $$("[data-cms-plans]").forEach((el) => (el.innerHTML = d.planes.map((p) => planCard(p, base, c)).join("")));
    $$("[data-cms-options]").forEach((sel) => {
      const keep = sel.value;
      sel.innerHTML = '<option value="">Selecciona una opción</option>' +
        d.planes.map((p) => `<option value="${esc(p.opcion_formulario)}">${esc(p.opcion_formulario)}</option>`).join("") +
        '<option value="Asesoría de Presencia Digital">Asesoría de Presencia Digital</option>';
      sel.value = keep;
    });
  }
  if (d.proyectos && d.proyectos.length) {
    $$("[data-filters]").forEach((bar) => (bar.innerHTML = filtros(d)));
    $$('[data-cms-projects="home"]').forEach((el) => (el.innerHTML = d.proyectos.map((p) => `<li class="carousel__item" data-cat="${esc(p.categoria_id)}">${projectCard(p, base)}</li>`).join("")));
    $$('[data-cms-projects="casos"]').forEach((el) => (el.innerHTML = d.proyectos.map((p) => caseDetail(p, c)).join("")));
  }
}

function contacto(c) {
  const num = String(c.whatsapp || "").replace(/\D/g, "");
  if (num) $$('a[href*="wa.me/"]').forEach((a) => (a.href = a.href.replace(/wa\.me\/\d+/, "wa.me/" + num)));
  const set = (sel, v) => v && $$(sel).forEach((el) => (el.textContent = v));
  set('[data-cms="whatsapp_visible"]', c.whatsapp_visible);
  set('[data-cms="ubicacion"]', c.ubicacion);
  set('[data-cms="horario_semana"]', c.horario_semana);
  set('[data-cms="horario_sabado"]', c.horario_sabado);
  set('[data-cms="mensaje_whatsapp"]', c.mensaje_whatsapp);
  if (c.ubicacion) set("[data-cms-loc]", c.ubicacion + (c.cobertura ? " · " + c.cobertura : ""));
  if (c.email) $$("[data-cms-email]").forEach((a) => { a.href = "mailto:" + c.email; if (a.dataset.cmsEmail !== "link") a.textContent = c.email; });
  set('[data-cms="email"]', c.email);
  if (c.instagram) {
    const ig = c.instagram.replace(/^@/, "");
    $$("[data-cms-ig]").forEach((a) => { a.href = `https://www.instagram.com/${ig}/`; });
    set('[data-cms="instagram_at"]', "@" + ig);
  }
  if (c.linkedin) $$("[data-cms-linkedin]").forEach((a) => (a.href = c.linkedin));
}

function precio(p) {
  if (p.precio == null || p.precio === "") return "";
  const n = Number(p.precio);
  return `<div class="plan__price"><span class="plan__currency">$</span><b>${n.toLocaleString("es-EC", { maximumFractionDigits: 2 })}</b><span class="plan__unit">${esc(p.moneda || "USD")}</span></div>${p.nota_precio ? `<p class="plan__note">${esc(p.nota_precio)}</p>` : ""}`;
}

function planCard(p, base) {
  const inc = p.incluye.map((t) => `<li>${ico("check")}<span>${esc(t)}</span></li>`).join("");
  const exc = p.no_incluye.map((t) => `<li class="is-off">${ico("x")}<span>${esc(t)}</span></li>`).join("");
  const href = `${base}pages/contacto.html?plan=${encodeURIComponent(p.opcion_formulario)}#formulario`;
  return `<article class="plan${p.destacado ? " plan--featured" : ""}">
  ${p.badge ? `<span class="plan__badge">${esc(p.badge)}</span>` : ""}
  <p class="plan__num">${esc(p.numero)}</p>
  <h3 class="plan__title">${esc(p.nombre)}</h3>
  <p class="plan__sub">${esc(p.subtitulo)}</p>
  ${precio(p)}
  <p class="plan__desc">${esc(p.descripcion)}</p>
  ${p.plazo ? `<p class="plan__time">${ico("spark")}<span>${esc(p.plazo)}</span></p>` : ""}
  <p class="plan__label">Incluye:</p>
  <ul class="checklist">${inc}${exc}</ul>
  <a class="btn ${p.destacado ? "btn--primary" : "btn--ghost"} btn--block" href="${href}" data-plan="${esc(p.opcion_formulario)}">${esc(p.cta || "Quiero este plan")} ${ico("arrow")}</a>
</article>`;
}

function filtros(d) {
  return `<button type="button" class="filter is-active" data-filter="todos" aria-pressed="true">Todos los Proyectos <span>(${d.proyectos.length})</span></button>` +
    d.categorias.filter((c) => c.total > 0).map((c) => `<button type="button" class="filter" data-filter="${esc(c.id)}" aria-pressed="false" title="${esc(c.descripcion)}">${esc(c.nombre)} <span>${c.total}</span></button>`).join("");
}

function cover(p, big) {
  const img = p.portada ? `<img src="${esc(p.portada)}" alt="${esc(p.titulo)}" loading="lazy" decoding="async">` : "";
  return `<div class="cover cover--${esc(p.tono || "ocean")}${big ? " cover--big" : ""}${img ? " cover--photo" : ""}">
  <div class="cover__bar"><span></span><span></span><span></span><em>${esc(p.dominio)}</em></div>
  <div class="cover__body">${img}
    <span class="cover__blob cover__blob--a"></span><span class="cover__blob cover__blob--b"></span>
    <p class="cover__cat">${esc(p.etiqueta)}</p><p class="cover__metric">${esc(p.metrica)}</p><span class="cover__lines"></span>
  </div></div>`;
}

const searchText = (p) => esc((p.titulo + " " + p.etiqueta + " " + p.ubicacion + " " + p.tags.join(" ")).toLowerCase());

function projectCard(p, base) {
  return `<article class="project" data-cat="${esc(p.categoria_id)}" data-search="${searchText(p)}">
  ${cover(p)}
  <div class="project__body">
    <p class="project__meta"><span>${esc(p.etiqueta)}</span><span>${esc(p.ubicacion)}</span></p>
    <h3 class="h-card">${esc(p.titulo)}</h3>
    <p>${esc(p.descripcion)}</p>
    <ul class="chips">${p.tags.slice(0, 2).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
    <a class="link-arrow" href="${base}pages/casos.html#${esc(p.id)}">Ver Detalles ${ico("arrow")}</a>
  </div></article>`;
}

function caseDetail(p, c) {
  const wa = String(c.whatsapp || "593958876957").replace(/\D/g, "");
  const gallery = p.imagenes.length > 1
    ? `<div class="case__gallery"><p class="case__hint">Galería del proyecto · ${p.imagenes.length} imágenes</p><ul class="case__thumbs case__thumbs--photos">${p.imagenes.map((g, i) =>
        `<li><button type="button" class="photo" data-lightbox="${esc(g.url)}" data-caption="${esc(g.titulo)}" data-group="${esc(p.id)}" data-index="${i}"><img src="${esc(g.url)}" alt="${esc(g.alt)}" loading="lazy" decoding="async"><span>${esc(g.titulo)}</span></button></li>`).join("")}</ul></div>`
    : "";
  const stats = p.estadisticas.map((s) => `<div class="stat"><p class="stat__value">${esc(s.valor)}</p><p class="stat__label">${esc(s.label)}</p></div>`).join("");
  const live = p.url_vivo ? `<a class="btn btn--ghost" href="${esc(p.url_vivo)}" target="_blank" rel="noopener">Ver Sitio Web en Vivo ${ico("arrow")}</a>` : "";
  const quote = p.testimonio ? `<figure class="quote quote--inline"><blockquote><p>“${esc(p.testimonio)}”</p></blockquote><figcaption><span class="avatar">${esc(p.iniciales)}</span><span><strong>${esc(p.autor)}</strong><br>${esc(p.cargo_autor)}</span></figcaption></figure>` : "";
  return `<article class="case" id="${esc(p.id)}" data-cat="${esc(p.categoria_id)}" data-search="${searchText(p)}">
  <div class="case__visual"${p.portada ? ` data-lightbox="${esc(p.portada)}" data-caption="${esc(p.titulo)}" data-group="${esc(p.id)}" data-index="0" role="button" tabindex="0" aria-label="Ampliar imagen de ${esc(p.titulo)}"` : ""}>${cover(p, true)}</div>
  <div class="case__summary">
    <p class="project__meta"><span>${esc(p.etiqueta)}</span><span>${esc(p.ubicacion)}</span></p>
    <h3 class="h-card h-card--lg">${esc(p.titulo)}</h3>
    <p class="case__subtitle">${esc(p.subtitulo)}</p>
    <p>${esc(p.descripcion)}</p>
    <ul class="chips">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
    <details class="case__details" data-case-details>
      <summary class="btn btn--ghost">Ver Proyecto Completo &amp; Resultados ${ico("plus")}</summary>
      <div class="case__content">
        ${gallery}
        ${stats ? `<div class="case__stats">${stats}</div>` : ""}
        <div class="case__cols">
          <div><h4>Objetivo del Proyecto:</h4><p>${esc(p.objetivo)}</p></div>
          <div><h4>Resultado Obtenido:</h4><p>${esc(p.resultado)}</p></div>
          <div><h4>Desafío Inicial:</h4><p>${esc(p.desafio)}</p></div>
          <div><h4>Solución Spondylus:</h4><p>${esc(p.solucion)}</p></div>
        </div>
        ${p.tecnologias.length ? `<h4>Tecnologías &amp; Integraciones Usadas:</h4><ul class="chips chips--mono">${p.tecnologias.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
        ${p.funcionalidades.length ? `<h4>Funcionalidades Implementadas en la Landing Page:</h4><ul class="checklist">${p.funcionalidades.map((t) => `<li>${ico("check")}<span>${esc(t)}</span></li>`).join("")}</ul>` : ""}
        ${quote}
        <div class="case__cta"><div><p class="h-card">¿Te gusta este estilo para tu negocio?</p><p>Lo adaptamos a tu marca con entrega en 2 a 5 días.</p></div>
          <div class="btn-row">${live}<a class="btn btn--primary" href="https://wa.me/${wa}?text=${encodeURIComponent("¡Hola! Quiero una Landing Page como esta: " + p.titulo)}" target="_blank" rel="noopener">Quiero una Landing Page como esta ${ico("arrow")}</a></div></div>
      </div>
    </details>
  </div>
</article>`;
}

/* Visor de imágenes (lightbox) con flechas y teclado */
export function initLightbox() {
  let box = null, group = [], idx = 0;
  const show = () => {
    const g = group[idx];
    box.querySelector("img").src = g.src; box.querySelector("img").alt = g.cap;
    box.querySelector("figcaption").textContent = g.cap + (group.length > 1 ? `  ·  ${idx + 1} / ${group.length}` : "");
  };
  const close = () => { box?.remove(); box = null; document.documentElement.classList.remove("menu-open"); };
  const open = (el) => {
    const key = el.dataset.group;
    const seen = new Set();
    group = $$(`[data-lightbox][data-group="${CSS.escape(key)}"]`).map((x) => ({ src: x.dataset.lightbox, cap: x.dataset.caption || "" }))
      .filter((g) => (seen.has(g.src) ? false : seen.add(g.src)));
    idx = Math.max(0, group.findIndex((g) => g.src === el.dataset.lightbox));
    box = document.createElement("div");
    box.className = "lightbox"; box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true");
    box.innerHTML = `<button type="button" class="round-btn lightbox__close" aria-label="Cerrar">${ico("x")}</button>
      ${group.length > 1 ? `<button type="button" class="round-btn lightbox__prev" aria-label="Anterior">${ico("arrow")}</button><button type="button" class="round-btn lightbox__next" aria-label="Siguiente">${ico("arrow")}</button>` : ""}
      <figure><img alt=""><figcaption></figcaption></figure>`;
    (document.querySelector("dialog[open]") || document.body).append(box); document.documentElement.classList.add("menu-open"); show();
    box.addEventListener("click", (e) => {
      if (e.target.closest(".lightbox__next")) { idx = (idx + 1) % group.length; show(); }
      else if (e.target.closest(".lightbox__prev")) { idx = (idx - 1 + group.length) % group.length; show(); }
      else if (e.target.tagName !== "IMG") close();
    });
    box.querySelector(".lightbox__close").focus();
  };
  document.addEventListener("click", (e) => { const el = e.target.closest("[data-lightbox]"); if (el) { e.preventDefault(); open(el); } });
  document.addEventListener("keydown", (e) => {
    if (!box) { const el = document.activeElement; if (e.key === "Enter" && el?.matches?.("[data-lightbox]")) open(el); return; }
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight" && group.length > 1) { idx = (idx + 1) % group.length; show(); }
    if (e.key === "ArrowLeft" && group.length > 1) { idx = (idx - 1 + group.length) % group.length; show(); }
  });
}
