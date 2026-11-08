# Design Analysis — Spondylus "Sand & Digital"

Fuente de contenido: sitio actual spondylussolucionesdigitales.com (5 pestañas, texto conservado sin cambios).
Fuente visual: brief de dirección creativa (beach vibes + innovación digital). Documento completo con referencias: artifact "Spondylus Sand & Digital".

## Dirección visual
Editorial costero: serif display grande (Cormorant Garamond), texto en Manrope, wordmark en Cinzel. Fondo marfil con grano de arena, agua en movimiento lento en héroes, navy profundo para momentos de decisión (plan destacado, simulador, CTA, pie). Modo Noche = Coastal Futurism.

## Paleta
Warm Ivory #F6F1E8 · Sand Beige #E8DCC8 · Warm Stone #A89C8A · Seafoam #C9DFD5 · Muted Turquoise #5E9C99 (texto: #3F7F86) · Soft Ocean Blue #7FA8C2 · Deep Ocean Navy #0E2A44 · Abyss (noche) #071827.

## Section map
- index.html: Hero · Marea de palabras · Por qué Spondylus (4 pilares) · Planes (3) · Simulador WhatsApp (5 rubros) · Showcase (filtros + carrusel 11 casos) · Testimonios · Contacto.
- pages/nosotros.html: Hero · 4 pilares con detalle · Comparativa vs. sitios tradicionales · Ruta de desarrollo (4 fases) · CTA.
- pages/planes.html: Hero · 3 planes completos · Garantía (4) · FAQ (5) · CTA.
- pages/casos.html: Hero · Filtros + buscador · 11 casos con detalle completo (modal en escritorio, desplegable en móvil) · CTA.
- pages/contacto.html: Hero · 5 canales · Formulario extendido.

## Responsive
Mobile-first; 48em (tablet), 64em (escritorio), 90em (grande). Filtros deslizables en móvil.

## Motion
Revelados 0.95s cubic-bezier(.22,.8,.24,1); blobs 16–22s; marquesina 42s; ruta 2.6s/fase; carrusel 2s (pausa al hover/foco). Todo se desactiva con prefers-reduced-motion.

## ASSUMPTIONS
- Multipágina (pages/*.html) porque el sitio original tiene 5 pestañas.
- Isotipo provisional en SVG; reemplazar por el logo oficial.
- Portadas de proyectos generadas con la paleta (las capturas originales no se pudieron descargar desde el sandbox).
- Testimonios del Inicio = citas existentes dentro de los casos.
