# Global Dream Travel® — Hub Tecnológico

Plataforma web del Hub Global Dream Travel®: agencia de viajes familiares acreditada IATA con tecnología propietaria (Traza Digital), red de +150 agentes certificados y presencia viral (+2.7M vistas).

## Stack Tecnológico

- **React 18 + Vite** — Build ultrarrápido
- **Tailwind CSS 4** — Estilos utility-first con tema Disney-Fresh
- **Framer Motion** — Animaciones de entrada y transiciones
- **React Router DOM v6** — SPA con rutas para blog, legales, etc.
- **Lucide React** — Iconos modernos

## Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Estructura del Proyecto

```
├── public/
│   ├── assets/           # Videos, fotos, logos (reemplazar placeholders)
│   ├── _redirects         # Redirecciones Netlify
│   └── favicon.svg
├── content/
│   └── blog/              # 10 artículos en Markdown (CMS)
├── src/
│   ├── App.jsx            # Layout + Router
│   ├── main.jsx           # Entry point
│   ├── index.css          # Tailwind + fuentes
│   ├── components/        # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── MetricasImpacto.jsx
│   │   ├── AppShowcase.jsx
│   │   ├── HubAgentes.jsx
│   │   ├── CeoBrand.jsx
│   │   ├── PlanificadorMagico.jsx
│   │   ├── Footer.jsx
│   │   └── blog/
│   │       ├── BlogList.jsx
│   │       └── BlogPost.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogEntry.jsx
│   │   └── Legales.jsx
│   └── data/
│       ├── blogPosts.js    # Índice de posts
│       └── blogContent.jsx # Contenido completo
├── index.html             # SEO + Schema.org JSON-LD
├── vite.config.js
└── package.json
```

## Deploy a Netlify

1. Conectar el repositorio a Netlify
2. Configurar:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. El archivo `public/_redirects` ya está configurado para:
   - Redirecciones legacy de Wix (`/Alta`, `/GRUPAL2026`, `/Link`, `/Pago1`)
   - Fallback SPA (`/* → /index.html`)

## Configuración

### Números de WhatsApp

Editar en `src/components/PlanificadorMagico.jsx`:
- **Comercial:** `+5491125905797`
- **Ventas/Proveedores US:** `+14077682975`

### Assets (Reemplazar Placeholders)

Colocar en `public/assets/`:
- Video de Hero (4K de Andi en los parques)
- Foto de Andi Olivera (CEO Brand section)
- Logos de partners (Disney, Universal, IATA)
- Screenshots del Hub de Operaciones

### Blog

Los artículos se gestionan en dos ubicaciones:
- **Markdown CMS:** `content/blog/*.md` (con frontmatter)
- **Renderizado JSX:** `src/data/blogContent.jsx` (contenido enriquecido)
- **Índice:** `src/data/blogPosts.js` (metadata para listado)

Para agregar un nuevo post:
1. Crear archivo `.md` en `content/blog/`
2. Agregar entrada en `blogPosts.js`
3. Agregar contenido JSX en `blogContent.jsx`

## Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Azul Disney | `#0072bc` | Primario |
| Azul Claro | `#3a9fd8` | Acentos |
| Azul Oscuro | `#005a96` | Hover/Active |
| Amarillo Magia | `#ffcc00` | Destacados |
| Blanco | `#ffffff` | Background |

## SEO

- Schema.org JSON-LD configurado en `index.html`
- Meta tags Open Graph y Twitter Card
- Canonical URL: `https://globaldream.travel`

---

**Global Dream Travel® — La Magia en Buenas Manos**
Marca Registrada. Agencia Acreditada IATA. © 2026.
