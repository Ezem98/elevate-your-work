import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";
import { TransporteSecciones } from "@/components/transporte/TransportePage";
import {
  PHONE_RAW,
  SITE_URL,
  TRANSPORTE_PATH,
  WHATSAPP_TRANSPORTE_URL,
} from "@/components/landing/constants";

const URL_PAGINA = `${SITE_URL}${TRANSPORTE_PATH}`;
const TITULO = "Transporte de Maquinaria y Vehículos | ELEVAPLUS";
const DESCRIPCION =
  "Traslado de maquinaria, vehículos y carga pesada en camión y trailer propios. Buenos Aires y todo el país. Factura A, ART y seguro. Cotizá por WhatsApp.";

const schemaServicio = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL_PAGINA}#servicio`,
  name: "Transporte de Maquinaria, Vehículos y Carga Pesada",
  serviceType: "Transporte de maquinaria y carga pesada",
  description: DESCRIPCION,
  url: URL_PAGINA,
  areaServed: { "@type": "Country", name: "Argentina" },
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "ELEVAPLUS",
    telephone: PHONE_RAW,
    url: SITE_URL,
  },
};

export const Route = createFileRoute("/transporte-de-maquinaria")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRIPCION },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRIPCION },
      { property: "og:url", content: URL_PAGINA },
      { name: "twitter:title", content: TITULO },
      { name: "twitter:description", content: DESCRIPCION },
      { "script:ld+json": schemaServicio },
    ],
    links: [{ rel: "canonical", href: URL_PAGINA }],
  }),
  component: TransporteDeMaquinaria,
});

function TransporteDeMaquinaria() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav whatsappUrl={WHATSAPP_TRANSPORTE_URL} />
      <main>
        <TransporteSecciones />
      </main>
      <Footer
        whatsappUrl={WHATSAPP_TRANSPORTE_URL}
        zona="Transporte: Buenos Aires y todo el país"
      />
      <WhatsAppFab href={WHATSAPP_TRANSPORTE_URL} />
    </div>
  );
}
