/**
 * SPONDYLUS · Centro de Control (CMS sobre Google Sheets)
 * ---------------------------------------------------------
 * - doGet()                → Panel de administración con login (Index.html)
 * - doGet(?api=publico)    → JSON / JSONP público que consume el sitio de GitHub Pages
 * Pestañas: Config · Planes · Categorias · Proyectos · Galeria · Usuarios
 * Las listas dentro de una celda se separan con " | ".
 * Estadísticas de proyecto: "Etiqueta: Valor | Etiqueta: Valor".
 */

const APP_NOMBRE = 'Spondylus · Centro de Control';
const SESION_SEG = 6 * 60 * 60;          // 6 horas
const CACHE_PUBLICO = 'cms_publico_v1';
const CACHE_PUBLICO_SEG = 300;           // 5 minutos

const HOJAS = {
  Config: ['clave', 'valor', 'descripcion'],
  Planes: ['id', 'orden', 'numero', 'nombre', 'subtitulo', 'descripcion', 'precio', 'moneda', 'nota_precio', 'badge', 'destacado', 'incluye', 'no_incluye', 'plazo', 'cta', 'opcion_formulario', 'activo'],
  Categorias: ['id', 'nombre', 'descripcion', 'orden'],
  Proyectos: ['id', 'orden', 'categoria_id', 'etiqueta', 'titulo', 'subtitulo', 'descripcion', 'ubicacion', 'metrica', 'dominio', 'url_vivo', 'tags', 'objetivo', 'resultado', 'desafio', 'solucion', 'tecnologias', 'funcionalidades', 'estadisticas', 'testimonio', 'autor', 'cargo_autor', 'iniciales', 'tono', 'activo'],
  Galeria: ['id', 'proyecto_id', 'url', 'drive_id', 'titulo', 'alt', 'orden', 'portada', 'creado'],
  Usuarios: ['usuario', 'contrasena', 'nombre', 'rol', 'activo', 'ultimo_acceso']
};

const CONFIG_BASE = [
  ['whatsapp', '593958876957', 'Número de WhatsApp en formato internacional, solo dígitos'],
  ['whatsapp_visible', '+593 958 876 957', 'Cómo se muestra el número en la web'],
  ['email', 'contacto@spondylussolucionesdigitales.com', 'Correo de contacto'],
  ['instagram', 'spondylussoluciones', 'Usuario de Instagram sin @'],
  ['linkedin', 'https://linkedin.com', 'URL completa de LinkedIn'],
  ['ubicacion', 'Guayaquil, Ecuador', 'Ciudad / sede principal'],
  ['cobertura', 'Cobertura y atención nacional', 'Texto que acompaña la ubicación'],
  ['horario_semana', 'Lunes a Viernes: Jornada Continua', 'Horario de lunes a viernes'],
  ['horario_sabado', 'Sábados: Media Jornada', 'Horario de sábados'],
  ['mensaje_whatsapp', '👋 ¡Hola! ¿Buscas una página web de alta conversión o cotizar tu proyecto en Ecuador?', 'Mensaje de la burbuja flotante de WhatsApp'],
  ['url_sitio', 'https://spondylussolucionesdigitales.com/', 'URL pública del sitio'],
  ['carpeta_drive_id', '', 'ID de la carpeta de Drive para imágenes (vacío = se crea sola)']
];
const CONFIG_PRIVADA = ['carpeta_drive_id'];

/* =========================== ENTRADA WEB =========================== */
function doGet(e) {
  const p = (e && e.parameter) || {};
  if (p.api === 'publico') return respuestaPublica_(p.callback);
  inicializarHojas_();
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle(APP_NOMBRE)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function respuestaPublica_(callback) {
  let datos;
  try {
    const cache = CacheService.getScriptCache();
    const guardado = cache.get(CACHE_PUBLICO);
    if (guardado) {
      datos = JSON.parse(guardado);
    } else {
      inicializarHojas_();
      datos = { success: true, generado: new Date().toISOString(), data: construirDatosPublicos_() };
      const txt = JSON.stringify(datos);
      if (txt.length < 95000) cache.put(CACHE_PUBLICO, txt, CACHE_PUBLICO_SEG);
    }
  } catch (err) {
    datos = { success: false, message: 'No se pudo leer el contenido: ' + err.message };
  }
  const json = JSON.stringify(datos);
  const cb = String(callback || '').replace(/[^\w.$]/g, '');
  if (cb) return ContentService.createTextOutput(cb + '(' + json + ');').setMimeType(ContentService.MimeType.JAVASCRIPT);
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}

/* ========================= INICIALIZACIÓN ========================== */
function inicializarHojas_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Object.keys(HOJAS).forEach(function (nombre) {
    let hoja = ss.getSheetByName(nombre);
    const cols = HOJAS[nombre];
    if (!hoja) hoja = ss.insertSheet(nombre);
    const actual = hoja.getLastColumn() ? hoja.getRange(1, 1, 1, hoja.getLastColumn()).getValues()[0] : [];
    if (actual.filter(String).length === 0) {
      hoja.getRange(1, 1, 1, cols.length).setValues([cols]);
    } else {
      // agrega columnas que falten al final, sin tocar las existentes
      const faltan = cols.filter(function (c) { return actual.indexOf(c) === -1; });
      if (faltan.length) hoja.getRange(1, actual.length + 1, 1, faltan.length).setValues([faltan]);
    }
    hoja.setFrozenRows(1);
    hoja.getRange(1, 1, 1, hoja.getLastColumn()).setFontWeight('bold').setBackground('#0E2A44').setFontColor('#F6F1E8');
  });
  // Config por defecto
  const cfg = ss.getSheetByName('Config');
  const claves = leerTabla_('Config').map(function (r) { return r.clave; });
  const nuevas = CONFIG_BASE.filter(function (r) { return claves.indexOf(r[0]) === -1; });
  if (nuevas.length) cfg.getRange(cfg.getLastRow() + 1, 1, nuevas.length, 3).setValues(nuevas);
  // Usuario inicial si no hay ninguno
  if (leerTabla_('Usuarios').length === 0) {
    ss.getSheetByName('Usuarios').appendRow(['admin', 'Spondylus2026*', 'Administración', 'admin', 'SI', '']);
  }
}

/** Ejecútala una vez desde el editor para autorizar permisos y crear las pestañas. */
function configurarInicial() {
  inicializarHojas_();
  carpetaImagenes_();
  return 'Listo: pestañas creadas y carpeta de imágenes preparada.';
}

/* ============================ UTILIDADES =========================== */
function hoja_(nombre) { return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nombre); }

function encabezados_(hoja) {
  return hoja.getRange(1, 1, 1, hoja.getLastColumn()).getValues()[0].map(function (h) { return String(h).trim(); });
}

function leerTabla_(nombre) {
  const h = hoja_(nombre);
  if (!h || h.getLastRow() < 2) return [];
  const cab = encabezados_(h);
  const valores = h.getRange(2, 1, h.getLastRow() - 1, cab.length).getDisplayValues();
  return valores
    .map(function (fila, i) {
      const obj = { _fila: i + 2 };
      cab.forEach(function (c, j) { if (c) obj[c] = fila[j]; });
      return obj;
    })
    .filter(function (o) { return cab.some(function (c) { return c && String(o[c]).trim() !== ''; }); });
}

function guardarFila_(nombre, obj, claveId) {
  const h = hoja_(nombre);
  const cab = encabezados_(h);
  claveId = claveId || 'id';
  const filas = leerTabla_(nombre);
  const existente = filas.filter(function (r) { return String(r[claveId]) === String(obj[claveId]); })[0];
  const valores = cab.map(function (c) {
    if (obj[c] === undefined) return existente ? existente[c] : '';
    return obj[c];
  });
  if (existente) h.getRange(existente._fila, 1, 1, cab.length).setValues([valores]);
  else h.appendRow(valores);
}

function eliminarFila_(nombre, valorId, claveId) {
  claveId = claveId || 'id';
  const fila = leerTabla_(nombre).filter(function (r) { return String(r[claveId]) === String(valorId); })[0];
  if (!fila) throw new Error('No se encontró el registro.');
  hoja_(nombre).deleteRow(fila._fila);
}

function esSi_(v) { return ['si', 'sí', 'true', 'verdadero', '1', 'x', 'yes'].indexOf(String(v).trim().toLowerCase()) !== -1; }
function lista_(v) { return String(v || '').split('|').map(function (s) { return s.trim(); }).filter(String); }
function num_(v) { const n = parseFloat(String(v).replace(/[^\d.,-]/g, '').replace(',', '.')); return isNaN(n) ? null : n; }
function nuevoId_(prefijo) { return prefijo + '-' + Utilities.getUuid().slice(0, 8); }
function limpiar_(o) { const c = {}; Object.keys(o).forEach(function (k) { if (k.charAt(0) !== '_') c[k] = o[k]; }); return c; }

function invalidarPublico_() { CacheService.getScriptCache().remove(CACHE_PUBLICO); }

function conBloqueo_(fn) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try { return fn(); } finally { lock.releaseLock(); }
}

function ok_(data, message) { return { success: true, data: data, message: message || '' }; }
function error_(err) { return { success: false, message: (err && err.message) ? err.message : String(err) }; }

/* ============================== SESIÓN ============================= */
function iniciarSesion(usuario, contrasena) {
  try {
    inicializarHojas_();
    usuario = String(usuario || '').trim().toLowerCase();
    contrasena = String(contrasena || '');
    if (!usuario || !contrasena) throw new Error('Escribe tu usuario y contraseña.');
    const u = leerTabla_('Usuarios').filter(function (r) { return String(r.usuario).trim().toLowerCase() === usuario; })[0];
    if (!u || String(u.contrasena) !== contrasena) {
      Utilities.sleep(700); // freno básico contra intentos repetidos
      throw new Error('Usuario o contraseña incorrectos.');
    }
    if (!esSi_(u.activo)) throw new Error('Este usuario está desactivado.');
    const token = Utilities.getUuid();
    CacheService.getScriptCache().put('ses_' + token, JSON.stringify({ usuario: u.usuario, nombre: u.nombre, rol: u.rol }), SESION_SEG);
    hoja_('Usuarios').getRange(u._fila, encabezados_(hoja_('Usuarios')).indexOf('ultimo_acceso') + 1).setValue(new Date());
    return ok_({ token: token, nombre: u.nombre || u.usuario, rol: u.rol || 'editor' }, 'Bienvenida, ' + (u.nombre || u.usuario));
  } catch (err) { return error_(err); }
}

function cerrarSesion(token) {
  try { CacheService.getScriptCache().remove('ses_' + token); return ok_(null, 'Sesión cerrada.'); }
  catch (err) { return error_(err); }
}

function validar_(token) {
  const s = token && CacheService.getScriptCache().get('ses_' + token);
  if (!s) throw new Error('SESION_EXPIRADA');
  CacheService.getScriptCache().put('ses_' + token, s, SESION_SEG); // renueva
  return JSON.parse(s);
}

/* =========================== PANEL (LEER) ========================== */
function obtenerPanel(token) {
  try {
    const sesion = validar_(token);
    return ok_({
      sesion: sesion,
      config: leerTabla_('Config').map(limpiar_),
      planes: ordenar_(leerTabla_('Planes')).map(limpiar_),
      categorias: ordenar_(leerTabla_('Categorias')).map(limpiar_),
      proyectos: ordenar_(leerTabla_('Proyectos')).map(limpiar_),
      galeria: ordenar_(leerTabla_('Galeria')).map(limpiar_),
      urlApi: ScriptApp.getService().getUrl() + '?api=publico'
    });
  } catch (err) { return error_(err); }
}

function ordenar_(filas) {
  return filas.sort(function (a, b) { return (num_(a.orden) || 999) - (num_(b.orden) || 999); });
}

/* ============================== CONFIG ============================= */
function guardarConfig(token, items) {
  try {
    validar_(token);
    return conBloqueo_(function () {
      items.forEach(function (it) {
        const clave = String(it.clave).trim();
        if (!clave) return;
        const valor = clave === 'whatsapp' ? String(it.valor).replace(/\D/g, '') : it.valor;
        guardarFila_('Config', { clave: clave, valor: valor }, 'clave');
      });
      invalidarPublico_();
      return ok_(leerTabla_('Config').map(limpiar_), 'Datos de contacto guardados.');
    });
  } catch (err) { return error_(err); }
}

/* ============================== PLANES ============================= */
function guardarPlan(token, plan) {
  try {
    validar_(token);
    if (!plan || !String(plan.nombre || '').trim()) throw new Error('El plan necesita un nombre.');
    if (plan.precio !== '' && plan.precio != null && num_(plan.precio) === null) throw new Error('El precio debe ser un número (ej. 120).');
    return conBloqueo_(function () {
      if (!plan.id) plan.id = nuevoId_('plan');
      guardarFila_('Planes', plan);
      invalidarPublico_();
      return ok_(ordenar_(leerTabla_('Planes')).map(limpiar_), 'Plan guardado.');
    });
  } catch (err) { return error_(err); }
}

function eliminarPlan(token, id) {
  try {
    validar_(token);
    return conBloqueo_(function () {
      eliminarFila_('Planes', id);
      invalidarPublico_();
      return ok_(ordenar_(leerTabla_('Planes')).map(limpiar_), 'Plan eliminado.');
    });
  } catch (err) { return error_(err); }
}

/* ============================ CATEGORÍAS =========================== */
function guardarCategoria(token, cat) {
  try {
    validar_(token);
    if (!String(cat.nombre || '').trim()) throw new Error('La categoría necesita un nombre.');
    return conBloqueo_(function () {
      if (!cat.id) cat.id = String(cat.nombre).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      guardarFila_('Categorias', cat);
      invalidarPublico_();
      return ok_(ordenar_(leerTabla_('Categorias')).map(limpiar_), 'Categoría guardada.');
    });
  } catch (err) { return error_(err); }
}

function eliminarCategoria(token, id) {
  try {
    validar_(token);
    const usada = leerTabla_('Proyectos').some(function (p) { return p.categoria_id === id; });
    if (usada) throw new Error('Hay proyectos en esta categoría. Muévelos antes de eliminarla.');
    return conBloqueo_(function () {
      eliminarFila_('Categorias', id);
      invalidarPublico_();
      return ok_(ordenar_(leerTabla_('Categorias')).map(limpiar_), 'Categoría eliminada.');
    });
  } catch (err) { return error_(err); }
}

/* ============================= PROYECTOS =========================== */
function guardarProyecto(token, pr) {
  try {
    validar_(token);
    if (!String(pr.titulo || '').trim()) throw new Error('El proyecto necesita un título.');
    return conBloqueo_(function () {
      if (!pr.id) pr.id = nuevoId_('proy');
      guardarFila_('Proyectos', pr);
      invalidarPublico_();
      return ok_(ordenar_(leerTabla_('Proyectos')).map(limpiar_), 'Proyecto guardado.');
    });
  } catch (err) { return error_(err); }
}

function eliminarProyecto(token, id, borrarImagenes) {
  try {
    validar_(token);
    return conBloqueo_(function () {
      eliminarFila_('Proyectos', id);
      // borra sus imágenes de abajo hacia arriba para no desplazar filas
      leerTabla_('Galeria').filter(function (g) { return g.proyecto_id === id; })
        .sort(function (a, b) { return b._fila - a._fila; })
        .forEach(function (g) {
          if (borrarImagenes && g.drive_id) { try { DriveApp.getFileById(g.drive_id).setTrashed(true); } catch (e) {} }
          hoja_('Galeria').deleteRow(g._fila);
        });
      invalidarPublico_();
      return ok_({ proyectos: ordenar_(leerTabla_('Proyectos')).map(limpiar_), galeria: ordenar_(leerTabla_('Galeria')).map(limpiar_) }, 'Proyecto eliminado.');
    });
  } catch (err) { return error_(err); }
}

/* ============================== GALERÍA ============================ */
function carpetaImagenes_() {
  const fila = leerTabla_('Config').filter(function (r) { return r.clave === 'carpeta_drive_id'; })[0];
  const id = fila && String(fila.valor).trim();
  if (id) {
    try { return DriveApp.getFolderById(id.replace(/.*folders\//, '').replace(/[?/].*$/, '')); } catch (e) { /* se crea una nueva */ }
  }
  const carpeta = DriveApp.createFolder('Spondylus · Galería Web');
  try { carpeta.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW); } catch (e) {}
  guardarFila_('Config', { clave: 'carpeta_drive_id', valor: carpeta.getId() }, 'clave');
  return carpeta;
}

function urlImagenDrive_(id) { return 'https://lh3.googleusercontent.com/d/' + id + '=w1600'; }

/** archivos: [{ nombre, tipo, base64 }] — el panel ya los entrega optimizados (máx. 1920 px). */
function subirImagenes(token, proyectoId, archivos) {
  try {
    validar_(token);
    if (!proyectoId) throw new Error('Elige un proyecto antes de subir imágenes.');
    if (!archivos || !archivos.length) throw new Error('No llegaron imágenes.');
    return conBloqueo_(function () {
      const carpeta = carpetaImagenes_();
      const existentes = leerTabla_('Galeria').filter(function (g) { return g.proyecto_id === proyectoId; });
      let orden = existentes.reduce(function (m, g) { return Math.max(m, num_(g.orden) || 0); }, 0);
      const titulo = (leerTabla_('Proyectos').filter(function (p) { return p.id === proyectoId; })[0] || {}).titulo || '';
      archivos.forEach(function (a, i) {
        const blob = Utilities.newBlob(Utilities.base64Decode(a.base64), a.tipo || 'image/jpeg', a.nombre || ('imagen-' + Date.now() + '.jpg'));
        const file = carpeta.createFile(blob);
        try { file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW); } catch (e) {}
        orden += 1;
        hoja_('Galeria').appendRow([nuevoId_('img'), proyectoId, urlImagenDrive_(file.getId()), file.getId(),
          String(a.nombre || '').replace(/\.[^.]+$/, ''), titulo, orden, (existentes.length === 0 && i === 0) ? 'SI' : 'NO', new Date()]);
      });
      invalidarPublico_();
      return ok_(ordenar_(leerTabla_('Galeria')).map(limpiar_), archivos.length + (archivos.length === 1 ? ' imagen subida.' : ' imágenes subidas.'));
    });
  } catch (err) { return error_(err); }
}

function agregarImagenUrl(token, proyectoId, url, titulo) {
  try {
    validar_(token);
    url = String(url || '').trim();
    if (!/^https?:\/\//.test(url)) throw new Error('Pega un enlace que empiece con https://');
    const drive = url.match(/(?:\/d\/|id=)([\w-]{20,})/);
    const finalUrl = drive && /drive\.google|docs\.google/.test(url) ? urlImagenDrive_(drive[1]) : url;
    return conBloqueo_(function () {
      const existentes = leerTabla_('Galeria').filter(function (g) { return g.proyecto_id === proyectoId; });
      const orden = existentes.reduce(function (m, g) { return Math.max(m, num_(g.orden) || 0); }, 0) + 1;
      hoja_('Galeria').appendRow([nuevoId_('img'), proyectoId, finalUrl, drive ? drive[1] : '', titulo || '', titulo || '', orden, existentes.length ? 'NO' : 'SI', new Date()]);
      invalidarPublico_();
      return ok_(ordenar_(leerTabla_('Galeria')).map(limpiar_), 'Imagen agregada.');
    });
  } catch (err) { return error_(err); }
}

function actualizarImagen(token, img) {
  try {
    validar_(token);
    return conBloqueo_(function () {
      if (esSi_(img.portada)) {
        leerTabla_('Galeria').filter(function (g) { return g.proyecto_id === img.proyecto_id && g.id !== img.id && esSi_(g.portada); })
          .forEach(function (g) { guardarFila_('Galeria', { id: g.id, portada: 'NO' }); });
        img.portada = 'SI';
      }
      guardarFila_('Galeria', img);
      invalidarPublico_();
      return ok_(ordenar_(leerTabla_('Galeria')).map(limpiar_), 'Imagen actualizada.');
    });
  } catch (err) { return error_(err); }
}

function reordenarImagenes(token, ids) {
  try {
    validar_(token);
    return conBloqueo_(function () {
      ids.forEach(function (id, i) { guardarFila_('Galeria', { id: id, orden: i + 1 }); });
      invalidarPublico_();
      return ok_(ordenar_(leerTabla_('Galeria')).map(limpiar_), 'Orden actualizado.');
    });
  } catch (err) { return error_(err); }
}

function eliminarImagen(token, id, borrarArchivo) {
  try {
    validar_(token);
    return conBloqueo_(function () {
      const g = leerTabla_('Galeria').filter(function (r) { return r.id === id; })[0];
      if (!g) throw new Error('No se encontró la imagen.');
      if (borrarArchivo && g.drive_id) { try { DriveApp.getFileById(g.drive_id).setTrashed(true); } catch (e) {} }
      hoja_('Galeria').deleteRow(g._fila);
      // si era portada, la siguiente imagen pasa a ser portada
      if (esSi_(g.portada)) {
        const sig = ordenar_(leerTabla_('Galeria').filter(function (r) { return r.proyecto_id === g.proyecto_id; }))[0];
        if (sig) guardarFila_('Galeria', { id: sig.id, portada: 'SI' });
      }
      invalidarPublico_();
      return ok_(ordenar_(leerTabla_('Galeria')).map(limpiar_), 'Imagen eliminada.');
    });
  } catch (err) { return error_(err); }
}

/* ========================= DATOS PÚBLICOS ========================== */
function construirDatosPublicos_() {
  const config = {};
  leerTabla_('Config').forEach(function (r) { if (CONFIG_PRIVADA.indexOf(r.clave) === -1) config[r.clave] = r.valor; });

  const planes = ordenar_(leerTabla_('Planes')).filter(function (p) { return esSi_(p.activo); }).map(function (p) {
    return {
      id: p.id, numero: p.numero, nombre: p.nombre, subtitulo: p.subtitulo, descripcion: p.descripcion,
      precio: num_(p.precio), moneda: p.moneda || 'USD', nota_precio: p.nota_precio, badge: p.badge,
      destacado: esSi_(p.destacado), incluye: lista_(p.incluye), no_incluye: lista_(p.no_incluye),
      plazo: p.plazo, cta: p.cta, opcion_formulario: p.opcion_formulario || p.nombre
    };
  });

  const galeria = ordenar_(leerTabla_('Galeria'));
  const proyectos = ordenar_(leerTabla_('Proyectos')).filter(function (p) { return esSi_(p.activo); }).map(function (p) {
    const imgs = galeria.filter(function (g) { return g.proyecto_id === p.id; })
      .map(function (g) { return { url: g.url, titulo: g.titulo, alt: g.alt || p.titulo, portada: esSi_(g.portada) }; });
    const portada = imgs.filter(function (g) { return g.portada; })[0] || imgs[0] || null;
    return {
      id: p.id, categoria_id: p.categoria_id, etiqueta: p.etiqueta, titulo: p.titulo, subtitulo: p.subtitulo,
      descripcion: p.descripcion, ubicacion: p.ubicacion, metrica: p.metrica, dominio: p.dominio, url_vivo: p.url_vivo,
      tags: lista_(p.tags), objetivo: p.objetivo, resultado: p.resultado, desafio: p.desafio, solucion: p.solucion,
      tecnologias: lista_(p.tecnologias), funcionalidades: lista_(p.funcionalidades),
      estadisticas: lista_(p.estadisticas).map(function (s) { const i = s.indexOf(':'); return i > -1 ? { label: s.slice(0, i).trim(), valor: s.slice(i + 1).trim() } : { label: s, valor: '' }; }),
      testimonio: p.testimonio, autor: p.autor, cargo_autor: p.cargo_autor, iniciales: p.iniciales, tono: p.tono || 'ocean',
      portada: portada ? portada.url : '', imagenes: imgs
    };
  });

  const categorias = ordenar_(leerTabla_('Categorias')).map(function (c) {
    return { id: c.id, nombre: c.nombre, descripcion: c.descripcion, total: proyectos.filter(function (p) { return p.categoria_id === c.id; }).length };
  });

  return { config: config, planes: planes, categorias: categorias, proyectos: proyectos };
}
