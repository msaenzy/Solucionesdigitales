// config/cms.js — conexión con tu Google Sheet ("Centro de Control").
// 1) Despliega el Apps Script como Aplicación Web (acceso: "Cualquier persona").
// 2) Pega aquí la URL que termina en /exec (el panel te la muestra en "Resumen").
// Vacío = la web usa el contenido estático del HTML.
export const CMS = {
  url: "",        // ej. "https://script.google.com/macros/s/AKfycb.../exec"
  adminUrl: "",   // misma URL /exec (sin ?api=publico): es donde está el login del panel
};
