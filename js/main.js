// main.js — punto de entrada. Hidrata imágenes desde config/assets.js, carga el contenido del
// Google Sheet (config/cms.js) y luego inicia navegación, animaciones e interacciones.
import { assets } from "../config/assets.js";
import { CMS } from "../config/cms.js";
import { initNavigation } from "./navigation.js";
import { initAnimations } from "./animations.js";
import { initInteractions } from "./interactions.js";
import { loadCMS, initLightbox } from "./cms.js";

// <html data-base="./"> en la raíz, "../" en pages/*.html
const base = document.documentElement.dataset.base || "./";
const lookup = (key) => key.split(".").reduce((o, k) => (o == null ? o : o[k]), assets);

document.querySelectorAll("[data-asset]").forEach((el) => {
  const path = lookup(el.dataset.asset);
  if (typeof path !== "string") { console.warn(`[assets] clave no encontrada: ${el.dataset.asset}`); return; }
  const url = base === "./" ? path : path.replace(/^\.\//, base);
  if (el.getAttribute("src") !== url) el.setAttribute("src", url);
});

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

// Enlace al panel (página oculta de acceso)
document.querySelectorAll("[data-admin-url]").forEach((a) => { if (CMS.adminUrl) a.href = CMS.adminUrl; else a.setAttribute("aria-disabled", "true"); });

initNavigation();
initAnimations();
initLightbox();
loadCMS(CMS, base).finally(() => initInteractions(assets, base));
