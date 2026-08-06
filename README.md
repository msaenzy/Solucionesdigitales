# Spondylus Soluciones Digitales - Standalone Vite + React + TypeScript

Este repositorio contiene la versión **standalone 100% idéntica** del proyecto **Spondylus Soluciones Digitales**, configurada y optimizada para ejecutarse localmente con Vite + React + TypeScript y desplegarse directamente en **GitHub Pages**.

---

## 📁 Estructura del Proyecto

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Workflow de GitHub Actions para despliegue automático
├── public/
│   └── logo.svg              # Favicon / Logo vectorial
├── src/
│   ├── components/           # Componentes modulares de la interfaz
│   │   ├── pages/            # Páginas ampliadas (Nosotros, Planes, Casos, Contacto)
│   │   ├── CaseShowcaseGallery.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── PlansSection.tsx
│   │   ├── ProcessPathSection.tsx
│   │   ├── SimulatorSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ValueSection.tsx
│   ├── App.tsx               # Componente principal con lógica de estado y temas
│   ├── index.css             # Estilos globales y Tailwind CSS
│   ├── main.tsx              # Punto de entrada de React
│   └── types.ts              # Definiciones de tipos de TypeScript
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts            # Configuración de Vite con base path relativo ('./')
```

---

## 🚀 Desarrollo Local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo local:
   ```bash
   npm run dev
   ```

3. Abrir el navegador en `http://localhost:3000` (o la dirección que muestre Vite).

---

## 📦 Construcción del Proyecto (Build)

Para compilar el proyecto a código de producción optimizado en la carpeta `dist/`:

```bash
npm run build
```

---

## 🌐 Despliegue en GitHub Pages

### Opción A: Despliegue Automático con GitHub Actions (Recomendado)

El archivo `.github/workflows/deploy.yml` ya está configurado. Para activar el despliegue automático:

1. Sube el código a tu repositorio en GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Standalone GitHub Pages ready"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```
2. En GitHub, ve a **Settings** > **Pages**.
3. En **Source**, selecciona **GitHub Actions**.
4. ¡Listo! Cada vez que hagas un `git push` a la rama `main`, GitHub Actions compilará la aplicación y la publicará automáticamente.

---

### Opción B: Despliegue Manual con la rama `gh-pages`

1. Ejecuta la compilación local:
   ```bash
   npm run build
   ```
2. Publica el contenido de la carpeta `dist` en la rama `gh-pages`:
   ```bash
   npx gh-pages -d dist
   ```
3. En GitHub, ve a **Settings** > **Pages** y selecciona la rama `gh-pages`.

---

## 🛠️ Tecnologías Utilizadas

- **React 19**
- **TypeScript**
- **Vite 6**
- **Tailwind CSS 4**
- **Motion (Framer Motion)**
- **Lucide React Icons**
