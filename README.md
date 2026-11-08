# Spondylus Soluciones Digitales — Sitio web (rediseño "Sand & Digital")

Sitio estático (HTML/CSS/JS nativo, sin frameworks ni build) con 5 pestañas reales:

| Pestaña | Archivo |
|---|---|
| Inicio | `index.html` |
| Por qué elegirnos | `pages/nosotros.html` |
| Planes | `pages/planes.html` |
| Casos de éxito | `pages/casos.html` |
| Contacto | `pages/contacto.html` |

Todo el texto técnico y comercial del sitio anterior se conservó tal cual (planes, FAQ, simulador de WhatsApp con sus 5 rubros, 11 casos de éxito con objetivo/resultado/desafío/solución/tecnologías/funcionalidades/métricas/testimonio, ruta de desarrollo, comparativa y canales de contacto).

## Centro de Control (Google Sheet + login oculto)

Todo lo editable (contacto, WhatsApp, planes con **precios**, proyectos, categorías y galería de imágenes) vive en tu Google Sheet y se administra desde un panel con usuario y contraseña.

1. Sube `Spondylus_Centro_de_Control.xlsx` a Google Drive y ábrelo con **Google Sheets** (Archivo → Guardar como Hojas de cálculo de Google).
2. En el Sheet: **Extensiones → Apps Script**. Pega `docs/google-apps-script/Codigo.gs` en `Código.gs` y crea un archivo HTML llamado exactamente **Index** con el contenido de `Index.html`.
3. Ejecuta una vez la función `configurarInicial` (acepta los permisos). Crea la carpeta de imágenes en tu Drive si `carpeta_drive_id` está vacío.
4. **Implementar → Nueva implementación → Aplicación web** · Ejecutar como: *Yo* · Quién tiene acceso: *Cualquier persona*. Copia la URL que termina en `/exec`.
5. Pega esa URL en `config/cms.js` (en `url` y en `adminUrl`) y haz push.

- **Login oculto:** `https://TU-SITIO/acceso/` (no aparece en el menú, no se indexa). Usuario y contraseña: pestaña **Usuarios** del Sheet.
- Los cambios se reflejan en la web en ~5 minutos (caché).
- Si el Sheet no responde, la web muestra el contenido estático del HTML: nunca queda en blanco.
- Cada vez que edites el código de Apps Script: *Implementar → Gestionar implementaciones → Editar → Nueva versión* (la URL se mantiene).

## Publicar en GitHub Pages

1. Copia **el contenido** de esta carpeta a la raíz del repositorio.
2. `git add . && git commit -m "Rediseño Sand & Digital" && git push` a la rama `main`.
3. En GitHub: **Settings → Pages → Source: GitHub Actions**.
4. Abre el run de *Actions* y la URL publicada.

**Dominio propio (spondylussolucionesdigitales.com):** en *Settings → Pages → Custom domain* escribe el dominio (GitHub crea el archivo `CNAME`). En Namecheap: 4 registros `A` a `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` y un `CNAME` `www` → `USUARIO.github.io`. Si hoy el sitio está en Netlify, haz el cambio de DNS solo cuando el nuevo esté verificado.

## Cómo editar

- **Imágenes:** todas las rutas viven en `config/assets.js`. Para mostrar capturas reales de los proyectos, súbelas a `assets/images/proyectos/` y escribe la ruta en `projects["id-del-caso"]`. Mientras esté vacío se usa la portada generada con la paleta.
- **Logo:** reemplaza `assets/images/logo.svg` y `assets/icons/favicon.svg` por tu logo oficial (mismo nombre).
- **Colores, tipografía, espaciados, animación:** `css/variables.css` (incluye el Modo Noche).
- **Formularios:** no necesitan servidor; arman el mensaje y abren WhatsApp al +593 958 876 957.

## Pendientes (MISSING / ASSUMPTION)

- `MISSING ASSET` `assets/images/og-image.jpg` se generó como provisional; puedes reemplazarla (1200×630).
- `ASSUMPTION` Logo: isotipo vectorial provisional (concha + monograma S) dibujado a partir de la descripción de tu marca. Sustitúyelo por el archivo oficial.
- Imágenes de proyectos: ahora se suben desde el panel (Galería). Los datos de prueba enlazan las imágenes de tu sitio actual; cuando cambies el dominio a este sitio esos enlaces dejarán de existir, así que vuelve a subirlas desde el panel.
- `MISSING ASSET` Capturas de los proyectos (tu sitio actual usa `/assets/*_website_*.jpg`, `/imagenes/proyectos/cosmic/*.png` y fotos de Unsplash). Cópialas desde tu repo actual y regístralas en `config/assets.js`.
- `ASSUMPTION` El enlace de LinkedIn del pie apunta a `https://linkedin.com` igual que en el sitio anterior; cámbialo por la URL de tu Company Page.
- `ASSUMPTION` La sección "Lo que dicen nuestros clientes" del Inicio reutiliza las citas que ya existían dentro de los casos de éxito.
