# ECA Soluciones Empresariales - Landing Page + Blog

## Proyecto

Rediseño completo de la landing page de ECA Soluciones Empresariales SAC, migrando de WordPress a stack moderno. Incluye sección de blog/noticias dinámico con panel de administración.

- **Cliente:** ECA Soluciones Empresariales SAC
- **Web actual (WordPress):** https://estudiocontablealvarez.com/
- **Color principal:** #012D6A
- **WhatsApp:** +51 923 341 098
- **Dirección:** Jirón Cosme Bueno 222, Ate, Lima

---

## Stack Tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Frontend | Next.js (App Router) | 15 |
| UI Library | React | 19 |
| Estilos | Tailwind CSS | 4 |
| Backend | Express.js | 4.x |
| Runtime | Node.js | 20 LTS |
| Base de Datos | MongoDB | 7+ |
| ODM | Mongoose | 8.x |
| Validación | Zod | 3.x |
| Auth | JWT + bcrypt | - |
| Animaciones | GSAP + ScrollTrigger | 3.x |
| Smooth Scroll | Lenis | 1.x |
| Carousel/Slider | Swiper.js | 11.x |
| Iconos | Lucide React | - |
| Formularios | React Hook Form + Zod | - |
| HTTP Client | Axios | - |
| Editor Rich Text | TipTap | - |
| Hosting | VPS del cliente (Linux) | - |
| Proxy Reverso | Nginx | - |
| Process Manager | PM2 | - |
| SSL | Let's Encrypt + Certbot | - |
| CI/CD | GitHub Actions | - |

---

## Arquitectura del Sistema

```
INTERNET → Nginx (puerto 80/443)
  ├── /         → Next.js (puerto 3000) [Frontend]
  ├── /api      → Express  (puerto 4000) [Backend]
  └── MongoDB (puerto 27017, solo local)
```

Monorepo con frontend y backend separados desde el inicio. Ambos servicios corren en el mismo VPS bajo Nginx como proxy reverso.

---

## Diseño

- **Herramienta:** Figma con MCP Server habilitado
- **Archivo Figma:** "LANDING ECA SOLUCIONES EMPRESARIALES"
- **Servidor MCP:** http://127.0.0.1:3845/mcp
- **Flujo:** Usar `get_design_context` para leer el diseño y traducir a código

---

## Patrón Frontend: Atomic Design

Organización de componentes siguiendo Atomic Design completo:

```
frontend/src/components/
├── atoms/           # Elementos indivisibles
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.types.ts
│   │   └── index.ts
│   ├── Input/
│   ├── Badge/
│   ├── Icon/
│   ├── Text/
│   ├── Image/
│   ├── Link/
│   ├── Logo/
│   ├── Spinner/
│   └── index.ts      # Barrel export
│
├── molecules/       # Combinación de atoms con lógica mínima
│   ├── NavLink/
│   ├── SearchBar/
│   ├── ServiceCard/
│   ├── TestimonialCard/
│   ├── BlogCard/
│   ├── ContactInfo/
│   ├── SocialLinks/
│   ├── FormField/
│   └── index.ts
│
├── organisms/       # Secciones completas con lógica de negocio
│   ├── Header/
│   ├── Footer/
│   ├── HeroSlider/
│   ├── ServicesSection/
│   ├── BusinessServices/
│   ├── ObjectivesSection/
│   ├── TestimonialsSection/
│   ├── PartnersSection/
│   ├── BlogPreview/
│   ├── ContactSection/
│   ├── ContactForm/
│   └── index.ts
│
├── templates/       # Layouts de página (estructura sin datos)
│   ├── LandingTemplate/
│   ├── BlogTemplate/
│   ├── BlogPostTemplate/
│   ├── AdminTemplate/
│   └── index.ts
│
└── pages/           # Composición final (templates + datos)
    # Nota: En Next.js App Router, las pages viven en src/app/
    # Este directorio se usa solo si hay page-level components
```

### Reglas de Atomic Design

1. **Atoms** no importan otros atoms. Son autónomos.
2. **Molecules** solo importan atoms. Nunca otros molecules u organisms.
3. **Organisms** pueden importar atoms y molecules. Pueden tener estado y lógica.
4. **Templates** definen layout/estructura. Reciben children o slots. Sin datos hardcodeados.
5. **Pages** (rutas de Next.js en `src/app/`) conectan templates con datos reales.

### Estructura de cada componente

```
ComponentName/
├── ComponentName.tsx       # Componente React
├── ComponentName.types.ts  # Interfaces y tipos (si aplica)
├── ComponentName.hooks.ts  # Custom hooks del componente (si aplica)
└── index.ts                # Barrel export
```

---

## Patrón Backend: Service-Repository

Arquitectura en capas con separación clara de responsabilidades:

```
backend/src/
├── config/              # Configuración centralizada
│   ├── database.ts      # Conexión MongoDB
│   ├── env.ts           # Variables de entorno validadas con Zod
│   └── index.ts
│
├── models/              # Mongoose Schemas (capa de datos)
│   ├── Post.model.ts
│   ├── Category.model.ts
│   ├── User.model.ts
│   ├── Contact.model.ts
│   └── index.ts
│
├── repositories/        # Acceso a datos (queries MongoDB)
│   ├── post.repository.ts
│   ├── category.repository.ts
│   ├── user.repository.ts
│   ├── contact.repository.ts
│   └── index.ts
│
├── services/            # Lógica de negocio
│   ├── post.service.ts
│   ├── category.service.ts
│   ├── auth.service.ts
│   ├── contact.service.ts
│   ├── upload.service.ts
│   └── index.ts
│
├── controllers/         # Manejo de request/response
│   ├── post.controller.ts
│   ├── category.controller.ts
│   ├── auth.controller.ts
│   ├── contact.controller.ts
│   ├── upload.controller.ts
│   └── index.ts
│
├── routes/              # Definición de rutas Express
│   ├── post.routes.ts
│   ├── category.routes.ts
│   ├── auth.routes.ts
│   ├── contact.routes.ts
│   ├── upload.routes.ts
│   └── index.ts         # Router principal que monta todo
│
├── middleware/           # Middlewares reutilizables
│   ├── auth.middleware.ts       # Verificación JWT
│   ├── validate.middleware.ts   # Validación con Zod DTOs
│   ├── error.middleware.ts      # Error handler global
│   ├── rateLimiter.middleware.ts
│   ├── cors.middleware.ts
│   └── index.ts
│
├── dtos/                # Data Transfer Objects (validación Zod)
│   ├── post.dto.ts      # CreatePostDTO, UpdatePostDTO
│   ├── auth.dto.ts      # LoginDTO
│   ├── contact.dto.ts   # CreateContactDTO
│   └── index.ts
│
├── utils/               # Helpers y utilidades
│   ├── AppError.ts      # Clase de error personalizada
│   ├── slugify.ts
│   ├── jwt.ts           # generateToken, verifyToken
│   ├── logger.ts
│   └── index.ts
│
└── server.ts            # Entry point: Express app setup
```

### Flujo de una Request

```
Request → Route → Middleware(s) → Controller → Service → Repository → MongoDB
                                                                        ↓
Response ← Controller ← Service ← Repository ← ────────────────────────┘
```

### Reglas del Service-Repository Pattern

1. **Controllers** solo manejan req/res. No tienen lógica de negocio. Llaman a services.
2. **Services** contienen toda la lógica de negocio. No acceden a req/res. Llaman a repositories.
3. **Repositories** son la única capa que habla con MongoDB/Mongoose. Retornan datos puros.
4. **DTOs** validan datos en el middleware ANTES de llegar al controller.
5. **Models** definen el schema de Mongoose. No tienen lógica de negocio.

### Ejemplo de flujo

```typescript
// route
router.post('/posts', authMiddleware, validate(CreatePostDTO), postController.create);

// controller — solo orquesta
async create(req: Request, res: Response, next: NextFunction) {
  try {
    const post = await postService.create(req.body, req.userId);
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
}

// service — lógica de negocio
async create(data: CreatePostInput, authorId: string) {
  const slug = slugify(data.title);
  const existing = await postRepository.findBySlug(slug);
  if (existing) throw new AppError('Post con ese título ya existe', 409);
  return postRepository.create({ ...data, slug, author: authorId });
}

// repository — solo acceso a datos
async create(data: Partial<IPost>) {
  return Post.create(data);
}
```

---

## Patrones Complementarios

### Frontend

#### Custom Hooks Pattern
Toda lógica de fetching y estado va en hooks, no en componentes:

```typescript
// hooks/usePosts.ts
export function usePosts(page = 1) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  // ... fetch logic
  return { posts, loading, error, refetch };
}

// Uso en componente
const { posts, loading } = usePosts();
```

Hooks se ubican en:
- `src/hooks/` — hooks globales reutilizables (useApi, useDebounce, useMediaQuery)
- `src/components/[component]/[component].hooks.ts` — hooks específicos de un componente

#### API Client Pattern
Módulo centralizado para comunicación con el backend:

```
frontend/src/lib/
├── api-client.ts    # Instancia Axios configurada (baseURL, interceptors, auth headers)
├── api/
│   ├── posts.api.ts      # getPosts, getPostBySlug, createPost...
│   ├── categories.api.ts
│   ├── contact.api.ts
│   ├── auth.api.ts
│   └── index.ts
```

Nunca hacer `fetch` o `axios` directo desde componentes. Siempre usar `api-client`.

#### Context + Provider Pattern
Estado global ligero con React Context:

```
frontend/src/contexts/
├── AuthContext.tsx     # Estado de autenticación del admin
├── ThemeContext.tsx    # Theme (si aplica)
└── index.ts
```

No usar Redux ni Zustand. React Context es suficiente para este proyecto.

### Backend

#### DTO Pattern (Data Transfer Objects)
Validación con Zod en la entrada de cada endpoint:

```typescript
// dtos/post.dto.ts
export const CreatePostDTO = z.object({
  title: z.string().min(3).max(200),
  content: z.string().min(10),
  excerpt: z.string().max(300).optional(),
  category: z.string().regex(/^[a-f\d]{24}$/i),
  tags: z.array(z.string()).optional(),
  status: z.enum(['draft', 'published']).default('draft'),
});
```

#### Error Handling Centralizado

```typescript
// utils/AppError.ts
class AppError extends Error {
  statusCode: number;
  isOperational: boolean;
  constructor(message: string, statusCode: number) { ... }
}

// middleware/error.middleware.ts — captura TODOS los errores
app.use((err, req, res, next) => {
  if (err instanceof AppError) { ... }
  // log + respuesta genérica para errores no controlados
});
```

Nunca hacer try/catch con `res.status(500).json({error})` suelto en controllers.

#### Environment Config Pattern

```typescript
// config/env.ts — validación con Zod al arrancar
const envSchema = z.object({
  PORT: z.coerce.number().default(4000),
  MONGODB_URI: z.string().url(),
  JWT_SECRET: z.string().min(32),
  CORS_ORIGIN: z.string().url(),
});
export const env = envSchema.parse(process.env);
// Si falta una variable, la app NO arranca
```

### Transversales

#### Barrel Exports
Cada carpeta tiene `index.ts` para imports limpios:

```typescript
// ✅ Correcto
import { Button, Input, Badge } from '@/components/atoms';
import { postService } from '@/services';

// ❌ Incorrecto
import { Button } from '@/components/atoms/Button/Button';
```

---

## Estructura Completa del Proyecto

```
eca-landing/
├── frontend/
│   ├── src/
│   │   ├── app/                    # Next.js App Router
│   │   │   ├── (landing)/          # Grupo: páginas de la landing
│   │   │   │   ├── page.tsx        # Home
│   │   │   │   ├── nosotros/
│   │   │   │   └── servicios/
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx        # Listado de posts
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx    # Detalle de post
│   │   │   ├── contacto/
│   │   │   │   └── page.tsx
│   │   │   ├── admin/              # Panel admin (protegido)
│   │   │   │   ├── layout.tsx      # AdminTemplate wrapper
│   │   │   │   ├── page.tsx        # Dashboard
│   │   │   │   ├── posts/
│   │   │   │   │   ├── page.tsx    # CRUD posts
│   │   │   │   │   └── [id]/
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── contacts/
│   │   │   │   └── login/
│   │   │   ├── layout.tsx          # Root layout
│   │   │   └── globals.css
│   │   ├── components/             # Atomic Design
│   │   │   ├── atoms/
│   │   │   ├── molecules/
│   │   │   ├── organisms/
│   │   │   └── templates/
│   │   ├── hooks/                  # Custom hooks globales
│   │   │   ├── useApi.ts
│   │   │   ├── useDebounce.ts
│   │   │   ├── useMediaQuery.ts
│   │   │   └── index.ts
│   │   ├── contexts/               # React Context providers
│   │   │   ├── AuthContext.tsx
│   │   │   └── index.ts
│   │   ├── lib/                    # Utilidades y API client
│   │   │   ├── api-client.ts
│   │   │   ├── api/
│   │   │   │   ├── posts.api.ts
│   │   │   │   ├── categories.api.ts
│   │   │   │   ├── contact.api.ts
│   │   │   │   ├── auth.api.ts
│   │   │   │   └── index.ts
│   │   │   ├── utils.ts
│   │   │   └── constants.ts
│   │   ├── types/                  # Tipos TypeScript globales
│   │   │   ├── post.types.ts
│   │   │   ├── category.types.ts
│   │   │   ├── contact.types.ts
│   │   │   ├── api.types.ts
│   │   │   └── index.ts
│   │   └── styles/
│   │       └── globals.css
│   ├── public/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.ts
│   │   │   ├── env.ts
│   │   │   └── index.ts
│   │   ├── models/
│   │   │   ├── Post.model.ts
│   │   │   ├── Category.model.ts
│   │   │   ├── User.model.ts
│   │   │   ├── Contact.model.ts
│   │   │   └── index.ts
│   │   ├── repositories/
│   │   │   ├── post.repository.ts
│   │   │   ├── category.repository.ts
│   │   │   ├── user.repository.ts
│   │   │   ├── contact.repository.ts
│   │   │   └── index.ts
│   │   ├── services/
│   │   │   ├── post.service.ts
│   │   │   ├── category.service.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── contact.service.ts
│   │   │   ├── upload.service.ts
│   │   │   └── index.ts
│   │   ├── controllers/
│   │   │   ├── post.controller.ts
│   │   │   ├── category.controller.ts
│   │   │   ├── auth.controller.ts
│   │   │   ├── contact.controller.ts
│   │   │   ├── upload.controller.ts
│   │   │   └── index.ts
│   │   ├── routes/
│   │   │   ├── post.routes.ts
│   │   │   ├── category.routes.ts
│   │   │   ├── auth.routes.ts
│   │   │   ├── contact.routes.ts
│   │   │   ├── upload.routes.ts
│   │   │   └── index.ts
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts
│   │   │   ├── validate.middleware.ts
│   │   │   ├── error.middleware.ts
│   │   │   ├── rateLimiter.middleware.ts
│   │   │   ├── cors.middleware.ts
│   │   │   └── index.ts
│   │   ├── dtos/
│   │   │   ├── post.dto.ts
│   │   │   ├── auth.dto.ts
│   │   │   ├── contact.dto.ts
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   ├── AppError.ts
│   │   │   ├── slugify.ts
│   │   │   ├── jwt.ts
│   │   │   ├── logger.ts
│   │   │   └── index.ts
│   │   └── server.ts
│   ├── uploads/                # Imágenes subidas (multer)
│   ├── tsconfig.json
│   └── package.json
│
├── docker-compose.yml          # MongoDB + servicios
├── nginx.conf                  # Proxy reverso config
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD al VPS
├── .gitignore
├── INSTRUCTIONS.md             # Este archivo
└── README.md
```

---

## Variables de Entorno

### Frontend (`frontend/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_WHATSAPP=51923341098
```

### Backend (`backend/.env`)

```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/eca_landing
JWT_SECRET=<generar-con-openssl-rand-base64-64>
JWT_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:3000
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=5242880
```

---

## Secciones de la Landing (desde Figma)

| # | Sección | Componente (Organism) | Contenido |
|---|---------|----------------------|-----------|
| 1 | Hero / Slider | HeroSlider | "Deja tu contabilidad con..." + CTA |
| 2 | Servicios | ServicesSection | "Conoce nuestro servicio en acción" |
| 3 | Servicios empresa | BusinessServices | "Conoce nuestros servicios para ayudar a tu empresa" |
| 4 | Objetivos | ObjectivesSection | "Trabajamos en tus objetivos empresariales" |
| 5 | Testimonios | TestimonialsSection | "Lo que nuestros clientes dicen de nosotros" |
| 6 | Partners | PartnersSection | "Marcas con las que crecemos" + logos |
| 7 | Blog | BlogPreview | Últimos posts dinámicos desde MongoDB |
| 8 | Contacto | ContactSection | Formulario + mapa + datos + redes |
| 9 | Footer | Footer | Links, redes, WhatsApp, copyright |

---

## API Endpoints

### Públicos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | /api/posts | Listar posts publicados (paginado) |
| GET | /api/posts/:slug | Detalle de post por slug |
| GET | /api/posts/category/:slug | Posts por categoría |
| GET | /api/categories | Listar categorías |
| POST | /api/contact | Enviar formulario de contacto |

### Protegidos (JWT requerido)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | /api/auth/login | Login admin |
| POST | /api/admin/posts | Crear post |
| PUT | /api/admin/posts/:id | Editar post |
| DELETE | /api/admin/posts/:id | Eliminar post |
| POST | /api/admin/upload | Subir imagen |
| GET | /api/admin/contacts | Ver mensajes de contacto |

---

## Animaciones y Motion Design

### Stack de Animaciones

| Librería | Uso | Alcance |
|----------|-----|---------|
| **GSAP 3** | Animaciones complejas, timelines, morphing | Motor principal de animación |
| **GSAP ScrollTrigger** | Animaciones al hacer scroll | Reveal de secciones, parallax, pinning |
| **Lenis** | Smooth scroll global | Scroll suave en toda la landing |
| **Swiper.js** | Hero Slider / Carousels | Transiciones del slider principal |
| **Tailwind CSS** | Transiciones simples y hover states | Micro-interacciones básicas (hover, focus) |

### Reglas de Animación

1. **GSAP es el motor principal.** Toda animación que involucre scroll, timelines, secuencias o efectos complejos usa GSAP. No usar CSS @keyframes para esto.
2. **Tailwind solo para micro-interacciones.** Hovers de botones, transiciones de color, focus states. Usar clases como `transition-all duration-300 hover:scale-105`.
3. **No mezclar motores.** No usar Framer Motion ni react-spring. Un solo motor (GSAP) evita conflictos y reduce bundle size.
4. **Lenis + ScrollTrigger juntos.** Configurar Lenis como el scroller de GSAP para que el smooth scroll y las animaciones scroll-triggered estén sincronizados.

### Estructura de Animaciones

```
frontend/src/
├── lib/
│   ├── animations/
│   │   ├── gsap.ts              # Registro de plugins (ScrollTrigger, etc.)
│   │   ├── lenis.ts             # Configuración de Lenis + integración GSAP
│   │   ├── presets.ts           # Animaciones reutilizables (fadeInUp, staggerReveal, etc.)
│   │   └── index.ts
│   └── ...
├── hooks/
│   ├── useGSAP.ts               # Hook wrapper para GSAP con cleanup automático
│   ├── useScrollAnimation.ts    # Hook para animaciones scroll-triggered
│   ├── useLenis.ts              # Hook para acceder a la instancia de Lenis
│   └── ...
```

### Hook useGSAP (patrón obligatorio)

Toda animación GSAP en componentes React DEBE usar el hook `useGSAP` con contexto y cleanup para evitar memory leaks:

```typescript
// hooks/useGSAP.ts
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function useGSAP(callback: (ctx: gsap.Context) => void, deps: any[] = []) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(ctx);
    }, containerRef);
    
    return () => ctx.revert(); // Cleanup automático
  }, deps);
  
  return containerRef;
}
```

### Presets de Animación Reutilizables

```typescript
// lib/animations/presets.ts
export const fadeInUp = {
  from: { opacity: 0, y: 60 },
  to: { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
};

export const staggerReveal = {
  from: { opacity: 0, y: 40 },
  to: { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
};

export const scaleIn = {
  from: { opacity: 0, scale: 0.8 },
  to: { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
};

export const slideInLeft = {
  from: { opacity: 0, x: -100 },
  to: { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' },
};

export const slideInRight = {
  from: { opacity: 0, x: 100 },
  to: { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' },
};

export const parallaxBg = {
  scrollTrigger: { scrub: 1 },
  yPercent: -20,
};
```

### Animaciones por Sección

| Sección | Efecto | Implementación |
|---------|--------|----------------|
| Hero Slider | Transiciones entre slides + text reveal | Swiper.js + GSAP timeline por slide |
| Servicios | Cards aparecen con stagger al scroll | ScrollTrigger + staggerReveal preset |
| Servicios empresa | Slide-in alternado (izq/der) | ScrollTrigger + slideInLeft/slideInRight |
| Objetivos | Counter animado + fade in | ScrollTrigger + GSAP .to() para números |
| Testimonios | Carousel con fade transition | Swiper.js fade effect |
| Partners | Scroll infinito de logos | GSAP timeline loop horizontal |
| Blog preview | Cards scale-in con stagger | ScrollTrigger + scaleIn preset |
| Contacto | Formulario slide-up + mapa fade | ScrollTrigger + fadeInUp |
| Navbar | Shrink on scroll + blur background | ScrollTrigger con pin/unpin |
| WhatsApp FAB | Bounce on load + pulse continuo | GSAP timeline repeat |

### Configuración Inicial de GSAP + Lenis

```typescript
// lib/animations/gsap.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Defaults globales
gsap.defaults({
  ease: 'power3.out',
  duration: 0.8,
});
```

```typescript
// lib/animations/lenis.ts
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  // Sincronizar Lenis con GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  return lenis;
}
```

### Performance de Animaciones

- Animar solo propiedades GPU-accelerated: `transform` (x, y, scale, rotation) y `opacity`. Nunca animar `width`, `height`, `top`, `left`, `margin`, `padding`.
- Usar `will-change: transform` en elementos que se animarán (Tailwind: `will-change-transform`).
- Lazy-load animaciones pesadas: no registrar ScrollTriggers para secciones fuera del viewport inicial.
- Deshabilitar animaciones complejas en dispositivos con `prefers-reduced-motion`.

```typescript
// Respetar preferencias de accesibilidad
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  gsap.globalTimeline.timeScale(0); // Deshabilitar animaciones
}
```

---

## Estilos con Tailwind CSS

### Configuración del Theme

```typescript
// tailwind.config.ts — colores personalizados ECA
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#012D6A',
          50: '#E6EDF5',
          100: '#CCDAEB',
          200: '#99B5D7',
          300: '#6690C3',
          400: '#336BAF',
          500: '#012D6A',
          600: '#012455',
          700: '#011B40',
          800: '#00122B',
          900: '#000916',
        },
        accent: { /* definir desde Figma */ },
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
    },
  },
};
```

### Reglas de Estilos

1. **Tailwind utility-first.** No crear CSS custom salvo variables globales y fuentes.
2. **No usar `@apply` en exceso.** Si un grupo de clases se repite mucho, crear un componente atom, no una clase CSS.
3. **Responsive mobile-first.** Diseñar para mobile, escalar con `md:`, `lg:`, `xl:`.
4. **Dark mode (opcional).** Si se implementa, usar `dark:` variant de Tailwind.
5. **Extraer colores del diseño Figma.** No inventar colores. Usar la paleta del diseño.

---

## Convenciones de Código

### Nomenclatura

- **Componentes React:** PascalCase (`HeroSlider.tsx`)
- **Hooks:** camelCase con prefijo `use` (`usePosts.ts`)
- **Archivos de tipos:** kebab-case + `.types.ts` (`post.types.ts`)
- **Backend archivos:** kebab-case + sufijo de capa (`post.service.ts`, `post.repository.ts`)
- **Variables CSS/Tailwind:** kebab-case (`--color-primary`)
- **Rutas API:** kebab-case plural (`/api/posts`, `/api/categories`)
- **MongoDB colecciones:** plural lowercase (`posts`, `categories`)

### TypeScript

- Strict mode habilitado
- Interfaces para shapes de datos, Types para unions y utilidades
- No usar `any` — usar `unknown` si el tipo es incierto
- Exportar tipos desde archivos `.types.ts`

### Imports

- Path aliases con `@/` para frontend (`@/components/atoms`)
- Barrel exports (`index.ts`) en cada carpeta
- Orden de imports: 1) externos, 2) internos, 3) tipos, 4) estilos

### Git

- Branch principal: `main`
- Feature branches: `feature/nombre-feature`
- Commits: Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`)
- PR obligatorio para merge a main (si trabaja más de 1 dev)