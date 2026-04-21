# Corredor de Seguros Julieth

Portfolio profesional para corredora de seguros con captura de leads, panel de administración y notificaciones por email.

## Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Base de Datos**: PostgreSQL + Prisma ORM
- **Email**: Nodemailer
- **Validación**: Zod
- **Contenedores**: Docker + docker-compose

## Características

- ✅ Landing page con hero, servicios, testimonios y formulario CTA
- ✅ Páginas: Inicio, Servicios, Sobre Nosotros, Blog, Contacto, Gracias
- ✅ Formulario de captura de leads con validación
- ✅ API REST para gestión de leads (`/api/leads`)
- ✅ Panel de administración en `/admin`
- ✅ Botón flotante de WhatsApp
- ✅ SEO optimizado con metadatos y sitemap
- ✅ Notificaciones por email (Nodemailer)
- ✅ Diseño responsive (mobile-first)
- ✅ Docker + docker-compose para deployment

## Inicio Rápido

### 1. Clonar e instalar dependencias

```bash
git clone <repo>
cd portfolio-Corredor-seguros-Julieth
npm install
```

### 2. Configurar variables de entorno

```bash
cp .env.example .env
# Editar .env con tus credenciales
```

### 3. Iniciar base de datos con Docker

```bash
docker-compose up postgres -d
```

### 4. Migrar base de datos

```bash
npx prisma migrate dev --name init
```

### 5. Iniciar servidor de desarrollo

```bash
npm run dev
```

Visita http://localhost:3000

## Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `DATABASE_URL` | URL de conexión PostgreSQL | `postgresql://...` |
| `NEXT_PUBLIC_BASE_URL` | URL pública del sitio | `https://juliethperezseguros.com` |
| `SMTP_HOST` | Servidor SMTP | `smtp.gmail.com` |
| `SMTP_PORT` | Puerto SMTP | `587` |
| `SMTP_USER` | Usuario SMTP | `tu@gmail.com` |
| `SMTP_PASS` | Contraseña SMTP | `app-password` |
| `NOTIFICATION_EMAIL` | Email de notificaciones | `julieth@email.com` |
| `ADMIN_PASSWORD` | Contraseña panel admin | `password-segura` |

## API Endpoints

### POST /api/leads
Crear un nuevo lead.

**Body:**
```json
{
  "name": "María García",
  "email": "maria@email.com",
  "phone": "+57 300 000 0000",
  "insuranceType": "vida",
  "message": "Necesito información sobre seguros de vida"
}
```

### GET /api/leads
Obtener todos los leads (requiere autenticación).

**Headers:** `Authorization: Bearer <ADMIN_PASSWORD>`

## Panel de Administración

Accede en `/admin`. Se abrirá un formulario de login; la contraseña se valida en el servidor y se establece una cookie de sesión `httpOnly` (válida 8 horas). La URL nunca expone la contraseña.

## Deployment con Docker

```bash
# Construir y levantar todos los servicios
# El servicio 'migrate' ejecuta las migraciones automáticamente antes de iniciar 'app'
docker-compose up --build -d

# Ver logs
docker-compose logs -f app

# Ejecutar migraciones manualmente (si es necesario)
docker-compose run --rm migrate
```

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal con hero y formulario CTA |
| `/services` | Detalle de todos los seguros |
| `/about` | Historia y valores de Julieth |
| `/blog` | Artículos sobre seguros |
| `/contact` | Formulario de contacto |
| `/thank-you` | Página de confirmación post-formulario |
| `/admin` | Panel de administración de leads |
| `/sitemap.xml` | Sitemap automático |

## Licencia

© 2024 Corredor de Seguros Julieth. Todos los derechos reservados.
