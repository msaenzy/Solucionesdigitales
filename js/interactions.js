// interactions.js — tema día/noche, carrusel, filtros, buscador, simulador WhatsApp, formularios,
// ruta de desarrollo, modal de casos y burbuja de WhatsApp. Todo es mejora progresiva.
const WA = "593958876957";
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const waLink = (t) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;

function theme() {
  const root = document.documentElement;
  const btn = $("[data-theme-toggle]");
  if (!btn) return;
  const sync = () => {
    const dark = root.dataset.theme === "dark";
    btn.setAttribute("aria-label", dark ? "Cambiar a Versión Día" : "Cambiar a Modo Noche");
    btn.setAttribute("aria-pressed", String(dark));
    $('meta[name="theme-color"]')?.setAttribute("content", dark ? "#071827" : "#F6F1E8");
  };
  btn.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("spd-theme", root.dataset.theme); } catch (_) {}
    sync();
  });
  sync();
}

function carousel() {
  const c = $("[data-carousel]");
  if (!c) return;
  const track = $("[data-carousel-track]", c);
  const status = $("[data-carousel-status]", c);
  const interval = Number(c.dataset.interval || 2000);
  let timer = null, paused = false;
  const visibleItems = () => $$(".carousel__item:not([hidden])", track);
  const step = (dir = 1) => {
    const items = visibleItems();
    if (!items.length) return;
    const w = items[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 16);
    const max = track.scrollWidth - track.clientWidth - 4;
    let next = track.scrollLeft + dir * w;
    if (dir > 0 && track.scrollLeft >= max) next = 0;
    if (dir < 0 && track.scrollLeft <= 4) next = max;
    track.scrollTo({ left: next, behavior: reduce ? "auto" : "smooth" });
  };
  const start = () => { if (reduce) return; stop(); timer = setInterval(() => { if (!paused && !document.hidden) step(1); }, interval); };
  const stop = () => clearInterval(timer);
  const setPaused = (p) => { paused = p; status.textContent = p ? "Pausado al pasar el cursor" : "Avanza automáticamente cada 2s"; };
  c.addEventListener("pointerenter", () => setPaused(true));
  c.addEventListener("pointerleave", () => setPaused(false));
  c.addEventListener("focusin", () => setPaused(true));
  c.addEventListener("focusout", () => setPaused(false));
  track.addEventListener("touchstart", () => setPaused(true), { passive: true });
  $("[data-carousel-next]", c).addEventListener("click", () => step(1));
  $("[data-carousel-prev]", c).addEventListener("click", () => step(-1));
  // solo corre cuando está en pantalla
  new IntersectionObserver(([en]) => (en.isIntersecting ? start() : stop()), { threshold: .2 }).observe(c);
  c.addEventListener("carousel:reset", () => track.scrollTo({ left: 0 }));
}

function filters() {
  $$("[data-filters]").forEach((bar) => {
    const scope = bar.dataset.filters;
    const items = scope === "home" ? $$(".carousel__item") : $$("[data-cases] .case");
    const search = $("[data-search-input]");
    const empty = $("[data-empty]");
    let cat = "todos";
    const apply = () => {
      const q = (search?.value || "").trim().toLowerCase();
      let n = 0;
      items.forEach((el) => {
        const node = el.matches("[data-search]") ? el : el.querySelector("[data-search]");
        const ok = (cat === "todos" || el.dataset.cat === cat) && (!q || node.dataset.search.includes(q));
        el.hidden = !ok; if (ok) n++;
      });
      if (empty) empty.hidden = n > 0;
      $("[data-carousel]")?.dispatchEvent(new Event("carousel:reset"));
    };
    bar.addEventListener("click", (ev) => {
      const b = ev.target.closest("[data-filter]");
      if (!b) return;
      cat = b.dataset.filter;
      $$("[data-filter]", bar).forEach((x) => { x.classList.toggle("is-active", x === b); x.setAttribute("aria-pressed", String(x === b)); });
      apply();
    });
    search?.addEventListener("input", apply);
    $("[data-reset-filters]")?.addEventListener("click", () => { if (search) search.value = ""; $('[data-filter="todos"]', bar).click(); });
  });
}

function simulator() {
  const sim = $("[data-sim]");
  if (!sim) return;
  const data = JSON.parse($("[data-sim-data]", sim).textContent);
  const sec = sim.closest("section");
  const set = (r) => {
    $("[data-sim-name]", sim).textContent = r.name;
    $("[data-sim-tip]", sim).textContent = r.tip;
    $("[data-sim-msg]", sim).textContent = r.msg;
    $("[data-sim-biz]", sim).textContent = r.biz;
    $("[data-sim-initial]", sim).textContent = r.biz.charAt(0);
    const bubble = $("[data-sim-bubble]", sim);
    $("[data-sim-bubble-text]", sim).innerText = r.msg;
    bubble.classList.remove("is-new"); void bubble.offsetWidth; bubble.classList.add("is-new");
    $("[data-sim-send]", sim).href = waLink(r.msg);
    sim.dataset.current = r.id;
  };
  $$("[data-rubro]", sec).forEach((b) => b.addEventListener("click", () => {
    $$("[data-rubro]", sec).forEach((x) => { x.classList.toggle("is-active", x === b); x.setAttribute("aria-pressed", String(x === b)); });
    set(data.find((r) => r.id === b.dataset.rubro));
  }));
  const copyBtn = $("[data-sim-copy]", sim);
  copyBtn.addEventListener("click", async () => {
    const label = $("span", copyBtn);
    try { await navigator.clipboard.writeText($("[data-sim-msg]", sim).textContent); label.textContent = "¡Copiado!"; }
    catch (_) { label.textContent = "Selecciona y copia"; }
    setTimeout(() => (label.textContent = "Copiar texto"), 2500);
  });
  $("[data-sim-send]", sim).addEventListener("click", () => {
    const ok = $("[data-sim-ok]", sim); ok.hidden = false; setTimeout(() => (ok.hidden = true), 3500);
  });
}

function forms() {
  // ?plan=... preselecciona el plan elegido en la tarjeta
  const plan = new URLSearchParams(location.search).get("plan");
  $$("[data-wa-form]").forEach((form) => {
    const sel = form.querySelector("select");
    if (plan && sel && [...sel.options].some((o) => o.value === plan)) sel.value = plan;
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      if (!form.reportValidity()) return;
      const f = new FormData(form);
      const lines = [
        "👋 ¡Hola Spondylus! Quiero solicitar una cotización.",
        "",
        `👤 *Nombre:* ${f.get("nombre")}`,
        `🏢 *Empresa / Negocio:* ${f.get("empresa")}`,
        `📱 *Teléfono / WhatsApp:* ${f.get("telefono")}`,
        `💼 *Servicio de Interés:* ${f.get("servicio")}`,
      ];
      if (f.get("mensaje")) lines.push("", `📝 ${f.get("mensaje")}`);
      window.open(waLink(lines.join("\n")), "_blank", "noopener");
      const ok = form.querySelector("[data-form-success]"); ok.hidden = false;
      form.reset();
    });
  });
  // tarjetas de plan del Inicio -> formulario del Inicio si existe
  $$("[data-plan]").forEach((a) => a.addEventListener("click", (ev) => {
    const homeForm = $("#form-home");
    if (!homeForm) return;
    ev.preventDefault();
    homeForm.querySelector("select").value = a.dataset.plan;
    $("#contacto").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    setTimeout(() => homeForm.querySelector("input").focus({ preventScroll: true }), 700);
  }));
}

function route() {
  const r = $("[data-route]");
  if (!r) return;
  const steps = $$(".route__step", r);
  const fill = $("[data-route-fill]", r);
  const label = $("[data-route-label]", r);
  const toggle = $("[data-route-toggle]", r);
  let i = 0, timer = null, playing = !reduce;
  const go = (n) => {
    i = (n + steps.length) % steps.length;
    steps.forEach((s, k) => { s.classList.toggle("is-active", k === i); s.classList.toggle("is-done", k < i); });
    fill.style.height = `${((i + 1) / steps.length) * 100}%`;
  };
  const play = () => { clearInterval(timer); if (playing) timer = setInterval(() => go(i + 1), 2600); };
  const setPlaying = (p) => {
    playing = p;
    label.textContent = p ? "Pausar Animación" : "Reanudar Ruta";
    toggle.querySelector("svg").innerHTML = p ? '<path d="M9 6v12M15 6v12"/>' : '<path d="M8 5.5v13l10-6.5-10-6.5Z"/>';
    play();
  };
  toggle.addEventListener("click", () => setPlaying(!playing));
  $("[data-route-reset]", r).addEventListener("click", () => { go(0); play(); });
  $$("[data-route-go]", r).forEach((b) => b.addEventListener("click", () => { go(Number(b.dataset.routeGo)); play(); }));
  go(0);
  new IntersectionObserver(([en]) => (en.isIntersecting ? play() : clearInterval(timer)), { threshold: .25 }).observe(r);
  if (!playing) setPlaying(false);
}

function caseModal() {
  // En Inicio: "Ver Detalles" navega a la galería completa (anclado). En Casos: abre el detalle en un <dialog>.
  const cases = $("[data-cases]");
  if (!cases || !("HTMLDialogElement" in window)) return;
  const dlg = document.createElement("dialog");
  dlg.className = "case-modal";
  dlg.setAttribute("aria-label", "Detalle del proyecto");
  dlg.innerHTML = '<div class="case-modal__inner"><button type="button" class="round-btn case-modal__close" aria-label="Cerrar detalle"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M7 7l10 10M17 7 7 17"/></svg></button><div data-modal-body></div></div>';
  document.body.append(dlg);
  const body = $("[data-modal-body]", dlg);
  const close = () => dlg.close();
  $(".case-modal__close", dlg).addEventListener("click", close);
  dlg.addEventListener("click", (ev) => { if (ev.target === dlg) close(); });
  dlg.addEventListener("close", () => { body.innerHTML = ""; history.replaceState(null, "", location.pathname + location.search); });
  const open = (art) => {
    const clone = art.cloneNode(true);
    clone.removeAttribute("id"); clone.removeAttribute("data-reveal"); clone.classList.add("is-visible");
    const det = clone.querySelector("details"); if (det) det.replaceWith(det.querySelector(".case__content"));
    body.replaceChildren(clone);
    dlg.showModal();
    history.replaceState(null, "", `#${art.id}`);
  };
  $$("[data-case-details] > summary", cases).forEach((s) => s.addEventListener("click", (ev) => {
    if (!window.matchMedia("(min-width: 64em)").matches) return; // en móvil se despliega en línea
    ev.preventDefault(); open(s.closest(".case"));
  }));
  if (location.hash) {
    const target = document.getElementById(location.hash.slice(1));
    if (target?.classList.contains("case")) setTimeout(() => {
      target.scrollIntoView({ block: "start" });
      const d = target.querySelector("details"); if (d) d.open = true;
    }, 150);
  }
}

function waFloat() {
  const bubble = $("[data-wa-bubble]");
  if (!bubble) return;
  let closed = false;
  try { closed = sessionStorage.getItem("spd-wa-bubble") === "closed"; } catch (_) {}
  if (!closed) setTimeout(() => (bubble.hidden = false), 4500);
  $("[data-wa-close]").addEventListener("click", () => {
    bubble.hidden = true;
    try { sessionStorage.setItem("spd-wa-bubble", "closed"); } catch (_) {}
  });
}

function tilt() {
  const el = $("[data-tilt]");
  if (!el || reduce || !window.matchMedia("(hover: hover)").matches) return;
  const wrap = el.parentElement;
  wrap.addEventListener("pointermove", (e) => {
    const r = wrap.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    el.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  });
  wrap.addEventListener("pointerleave", () => (el.style.transform = ""));
}

function projectImages(assets, base) {
  // Si en config/assets.js defines projects.<id> con una ruta, se muestra la captura real sobre la portada generada.
  const map = assets.projects || {};
  $$("[data-project-cover]").forEach((c) => {
    const src = map[c.dataset.projectCover];
    if (!src) return;
    const img = new Image();
    img.src = base === "./" ? src : src.replace(/^\.\//, base);
    img.alt = ""; img.loading = "lazy"; img.decoding = "async";
    img.onload = () => c.querySelector(".cover__body").prepend(img);
  });
}

export function initInteractions(assets, base) {
  theme(); carousel(); filters(); simulator(); forms(); route(); caseModal(); waFloat(); tilt(); projectImages(assets, base);
}
