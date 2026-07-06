- Landing page ELEVAPLUS

Landing single-page, mobile-first, estética industrial minimalista (negro/gris + acento amarillo industrial sobre blanco), con el copy provisto.

## Diseño

- Paleta: fondo `#ffffff` / `#f5f5f5`, texto `#0a0a0a` / `#1a1a1a`, acento amarillo industrial `#FACC15` (hover `#EAB308`).
- Tipografía: Inter (o similar sans moderna) vía `<link>` en `__root.tsx`. Titulares muy bold y grandes, tracking ajustado; cuerpo liviano.
- Mucho whitespace, bordes finos, detalles tipo "industrial" (números de sección 01/02/03, líneas divisorias, uppercase labels).
- Imágenes grandes de maquinaria generadas con `generate_image` (hero + 4 servicios).
- Animaciones sutiles fade-in on scroll con IntersectionObserver (sin librerías pesadas).

## Estructura (todo en `src/routes/index.tsx` + componentes en `src/components/landing/`)

1. **Nav** — logo "ELEVAPLUS" + botón WhatsApp.
2. **Hero** — imagen grande de autoelevador, título H1, subtítulo, CTA WhatsApp.
3. **Servicios** — grid 4 tarjetas (Autoelevadores, Plataformas, Zorras, Escaleras) con imagen + descripción.
4. **Por qué elegirnos** — 4 puntos con íconos lucide (Truck, Wrench, Zap, Handshake).
5. **Zona de cobertura** — bloque con mapa estilizado / silueta de Argentina y copy.
6. **CTA final** — bloque oscuro con botón WhatsApp grande + link Instagram.
7. **Footer** — datos, redes, año.
8. **Botón flotante WhatsApp** — fixed bottom-right, siempre visible.

## Enlaces

- WhatsApp: `https://wa.me/5491163916614`
- Instagram: `https://instagram.com/elevaplus_`

## Técnico

- Actualizar `src/routes/__root.tsx`: title/description/OG con "ELEVAPLUS — Alquiler de maquinaria de elevación", `<link>` para fuente.
- Actualizar `src/styles.css`: tokens semánticos (background, foreground, accent amarillo) en `:root`, sin hardcodear colores en componentes.
- Reemplazar placeholder de `src/routes/index.tsx` con la landing.
- Generar 5 imágenes en `src/assets/`: hero (autoelevador en depósito), autoelevador, plataforma tijera, zorra, escalera industrial.
- Componentes pequeños: `Nav`, `Hero`, `Services`, `WhyUs`, `Coverage`, `FinalCTA`, `Footer`, `WhatsAppFab`, más un hook `useFadeIn` para animaciones.
- Responsive con grid + `min-w-0` / `shrink-0` según patrones del stack.

Al aprobar el plan lo construyo directamente.