// config/assets.js — ÚNICA fuente de rutas de imágenes. Cambia aquí y ejecuta `node scripts/sync-assets.mjs`
// (o simplemente recarga: main.js hidrata los <img data-asset="..."> en el navegador).
// Rutas relativas a la raíz del sitio (funcionan bajo dominio propio o https://USUARIO.github.io/REPO/).
export const assets = {
  logo: "./assets/images/logo.svg",          // ASSUMPTION: isotipo vectorial provisional — reemplaza por tu logo.svg oficial
  og: "./assets/images/og-image.jpg",        // MISSING ASSET: imagen 1200×630 para redes
  placeholder: "./assets/images/placeholder.svg",

  // Capturas reales de cada proyecto (opcional). Vacío = se usa la portada generada con la paleta.
  // Ejemplo: "medico-1": "./assets/images/proyectos/odontosalud.jpg"
  projects: {
    "mas-cosmic": "",   // tu sitio actual usa /imagenes/proyectos/cosmic/portada.png
    "medico-1": "",
    "medico-2": "",
    "medico-3": "",
    "medico-4": "",
    "cafeteria-1": "",
    "cafeteria-2": "",
    "consultoria-1": "",
    "consultoria-2": "",
    "mas-1": "",
    "mas-2": "",
  },
};
