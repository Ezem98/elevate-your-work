import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { GTAG_ID, INSTAGRAM_URL, PHONE_RAW, SITE_URL } from "../components/landing/constants";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que estás buscando no existe o ha sido movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          No se pudo cargar la página
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ocurrió un error inesperado. Podés intentar recargar o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

const schemaLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "ELEVAPLUS",
  alternateName: "Eleveplus",
  description:
    "Alquiler de maquinaria de elevación, autoelevadores, plataformas de elevación tijera y articuladas, zorras, escaleras, servicio de transporte de carga pesada y mantenimiento en Zona Sur y toda la Argentina.",
  url: SITE_URL,
  telephone: PHONE_RAW,
  priceRange: "$$",
  image: `${SITE_URL}/assets/hero-forklift.jpg`,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
    addressLocality: "Zona Sur",
  },
  areaServed: [
    { "@type": "City", name: "Avellaneda" },
    { "@type": "City", name: "Lanús" },
    { "@type": "City", name: "Quilmes" },
    { "@type": "City", name: "Berazategui" },
    { "@type": "City", name: "Almirante Brown" },
    { "@type": "City", name: "Lomas de Zamora" },
    { "@type": "City", name: "La Plata" },
    { "@type": "AdministrativeArea", name: "Gran Buenos Aires" },
    { "@type": "Country", name: "Argentina" },
  ],
  sameAs: [INSTAGRAM_URL],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Elevación y Maquinaria",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Alquiler de Autoelevadores",
          description:
            "Alquiler de autoelevadores a combustión y eléctricos para industrias, obras y depósitos.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Alquiler de Plataformas de Elevación",
          description:
            "Plataformas tijera y articuladas para trabajos en altura seguros y eficientes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transporte de Maquinaria y Carga Pesada",
          description: "Traslado especializado de equipos industriales, módulos y maquinarias.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mantenimiento y Reparación de Maquinaria",
          description:
            "Servicio técnico preventivo y correctivo para flotas de autoelevadores y equipos de elevación.",
        },
      },
    ],
  },
};

const SITE_TITLE = "Alquiler de Autoelevadores y Plataformas | Zona Sur — ELEVAPLUS";
const SITE_DESCRIPTION =
  "Alquiler de autoelevadores, plataformas de elevación, zorras y escaleras en Zona Sur (Avellaneda, Lanús, Quilmes, Berazategui, Brown, Lomas, La Plata) y todo el país. Cotizá por WhatsApp.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: "ELEVAPLUS" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "es_AR" },
      { property: "og:site_name", content: "ELEVAPLUS" },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/gcwehiSKImZ1CYx7xH1w77H9Qff2/social-images/social-1783433234229-93590.webp",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/gcwehiSKImZ1CYx7xH1w77H9Qff2/social-images/social-1783433234229-93590.webp",
      },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        <HeadContent />
        {/* Google tag (gtag.js) for Google Ads & Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTAG_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* LocalBusiness Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaLocalBusiness),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
