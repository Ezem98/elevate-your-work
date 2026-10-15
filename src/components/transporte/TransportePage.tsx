import heroImg from "@/assets/services/service-transport.jpg";
import imgMudanza from "@/assets/gallery/gallery-mudanza-maquinaria.jpg";
import imgVehiculo from "@/assets/gallery/gallery-transporte-vehiculo.jpg";
import imgModulo from "@/assets/gallery/gallery-transporte-modulo.jpg";
import imgAutoelevador from "@/assets/gallery/gallery-forklift-traslado.jpg";
import {
  ArrowRight,
  BrickWall,
  Car,
  Container,
  Factory,
  FileText,
  Forklift,
  HardHat,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Tractor,
  Truck,
} from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";
import {
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  WHATSAPP_NUMBER,
  WHATSAPP_TRANSPORTE_URL,
} from "@/components/landing/constants";

const cargas = [
  { icon: Car, title: "Autos y utilitarios" },
  { icon: Tractor, title: "Maquinaria vial" },
  { icon: Forklift, title: "Autoelevadores" },
  { icon: Container, title: "Módulos y estructuras" },
  { icon: BrickWall, title: "Materiales de obra" },
  { icon: Factory, title: "Equipos industriales" },
];

// Solo se muestran especificaciones confirmadas por ELEVAPLUS. Completar cuando estén los datos.
const equipos: { title: string; desc: string; specs: { label: string; valor: string }[] }[] = [
  {
    title: "Camión plataforma",
    desc: "Para vehículos, utilitarios, autoelevadores, módulos y equipos medianos.",
    specs: [],
  },
  {
    title: "Trailer",
    desc: "Para maquinaria vial, cargas largas y equipos de mayor porte.",
    specs: [],
  },
];

const motivos = [
  {
    icon: FileText,
    title: "Factura A",
    desc: "Proveedor formal para empresas, obras e industrias.",
  },
  { icon: HardHat, title: "ART", desc: "Personal con cobertura para ingresar a planta u obra." },
  {
    icon: ShieldCheck,
    title: "Seguro de carga",
    desc: "Tu equipo viaja asegurado de punto a punto.",
  },
  { icon: Truck, title: "Equipos propios", desc: "Camión plataforma y trailer de nuestra flota." },
  {
    icon: PackageCheck,
    title: "Carga y descarga",
    desc: "Coordinamos la carga en origen y la descarga en destino.",
  },
];

const fotos = [
  { img: imgMudanza, alt: "Traslado de maquinaria industrial pesada" },
  { img: imgVehiculo, alt: "Transporte de vehículo utilitario en camión plataforma" },
  { img: imgModulo, alt: "Transporte de módulo y estructura sobre camión plataforma" },
  { img: imgAutoelevador, alt: "Traslado de autoelevador en camión con acoplado" },
];

function Encabezado({ n, etiqueta, titulo }: { n: string; etiqueta: string; titulo: string }) {
  return (
    <div className="mb-12 grid gap-6 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
      <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
        <span className="h-px w-10 bg-accent" />
        <span>
          {n} — {etiqueta}
        </span>
      </div>
      <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
        {titulo}
      </h2>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-end lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            <span className="h-px w-10 bg-accent" />
            <span>Transporte</span>
          </div>
          <h1 className="text-4xl font-black leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Transporte de Maquinaria, Vehículos y Carga Pesada
          </h1>
          <p className="max-w-xl text-base font-light text-muted-foreground sm:text-lg">
            Traslados en camión plataforma y trailer propios. Buenos Aires y todo el país. Factura
            A, ART y seguro de carga.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_TRANSPORTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("transporte_hero_cta")}
              id="transporte-hero-whatsapp-button"
              data-tracking="whatsapp_conversion"
              className="group inline-flex items-center gap-3 bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Cotizar traslado por WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 bg-accent/10" aria-hidden />
          <img
            src={heroImg}
            alt="Camión plataforma ELEVAPLUS transportando un vehículo utilitario"
            width={1600}
            height={1100}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function QueTrasladamos() {
  const fade = useFadeIn<HTMLUListElement>();
  return (
    <section id="que-trasladamos" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Encabezado
          n="01"
          etiqueta="Qué trasladamos"
          titulo="Movemos cargas pesadas y de gran porte."
        />
        <ul
          ref={fade.ref}
          className={`grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 ${fade.className}`}
        >
          {cargas.map(({ icon: Icon, title }) => (
            <li key={title} className="flex items-center gap-4 bg-background p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-accent text-accent-foreground">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="text-lg font-bold tracking-tight">{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Equipos() {
  const fade = useFadeIn<HTMLDivElement>();
  return (
    <section id="equipos" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Encabezado
          n="02"
          etiqueta="Nuestros equipos"
          titulo="Flota propia para cada tipo de carga."
        />
        <div ref={fade.ref} className={`grid gap-6 md:grid-cols-2 ${fade.className}`}>
          {equipos.map((e) => (
            <article key={e.title} className="flex flex-col gap-4 border border-border p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Truck className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-black tracking-tight">{e.title}</h3>
              </div>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">{e.desc}</p>
              {e.specs.length > 0 ? (
                <dl className="grid divide-y divide-border border-t border-border">
                  {e.specs.map((s) => (
                    <div key={s.label} className="flex justify-between gap-4 py-3 text-sm">
                      <dt className="text-muted-foreground">{s.label}</dt>
                      <dd className="font-semibold">{s.valor}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="border-t border-border pt-4 text-sm text-muted-foreground">
                  Consultanos capacidad y medidas según tu carga.
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cobertura() {
  return (
    <section id="cobertura" className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:gap-12 md:px-10 md:py-20">
        <MapPin className="h-10 w-10 shrink-0 text-accent" />
        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-primary-foreground/60">
            03 — Cobertura
          </span>
          <p className="max-w-3xl text-2xl font-black leading-tight tracking-tight sm:text-3xl">
            CABA, todo el GBA y viajes a cualquier punto del país. Cotización por viaje.
          </p>
        </div>
      </div>
    </section>
  );
}

function PorQue() {
  const fade = useFadeIn<HTMLDivElement>();
  return (
    <section id="por-que" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Encabezado
          n="04"
          etiqueta="Por qué nosotros"
          titulo="Un proveedor formal para tu traslado."
        />
        <div
          ref={fade.ref}
          className={`grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5 ${fade.className}`}
        >
          {motivos.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col gap-4 bg-background p-8">
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-accent text-accent-foreground">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h3 className="text-lg font-bold tracking-tight">{title}</h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const fade = useFadeIn<HTMLDivElement>();
  return (
    <section id="trabajos" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Encabezado
          n="05"
          etiqueta="Trabajos realizados"
          titulo="Traslados reales de nuestra flota."
        />
        <div ref={fade.ref} className={`grid grid-cols-2 gap-3 sm:gap-4 ${fade.className}`}>
          {fotos.map((f) => (
            <div key={f.alt} className="group relative aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={f.img}
                alt={f.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  const fade = useFadeIn<HTMLDivElement>();
  return (
    <section id="contacto" className="border-b border-border">
      <div
        ref={fade.ref}
        className={`mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 ${fade.className}`}
      >
        <div className="mb-10 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
          <span className="h-px w-10 bg-accent" />
          <span>06 — Contacto</span>
        </div>
        <h2 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Cotizá tu traslado.
        </h2>
        <p className="mt-6 max-w-2xl text-base font-light text-muted-foreground sm:text-lg">
          Contanos qué hay que trasladar, origen y destino, y te enviamos la cotización del viaje.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={WHATSAPP_TRANSPORTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("transporte_final_cta_whatsapp")}
            id="transporte-final-cta-whatsapp"
            data-tracking="whatsapp_conversion"
            className="group flex items-center justify-between gap-4 bg-accent p-6 text-accent-foreground transition-transform hover:-translate-y-0.5 sm:p-8"
          >
            <div className="flex min-w-0 flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-70">
                Escribinos por
              </span>
              <span className="flex items-center gap-3 text-2xl font-black sm:text-3xl">
                <MessageCircle className="h-7 w-7 shrink-0" />
                WhatsApp
              </span>
              <span className="truncate text-sm font-medium">{WHATSAPP_NUMBER}</span>
            </div>
            <ArrowRight className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href={PHONE_TEL_HREF}
            onClick={() => trackPhoneClick("transporte_final_cta_phone")}
            id="transporte-final-cta-phone"
            data-tracking="phone_click"
            className="group flex items-center justify-between gap-4 border border-border bg-background p-6 text-foreground transition-colors hover:border-accent sm:p-8"
          >
            <div className="flex min-w-0 flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Llamanos directo
              </span>
              <span className="flex items-center gap-3 text-2xl font-black sm:text-3xl">
                <Phone className="h-7 w-7 shrink-0 text-accent" />
                Teléfono
              </span>
              <span className="truncate text-sm font-medium text-muted-foreground">
                {PHONE_DISPLAY}
              </span>
            </div>
            <ArrowRight className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function TransporteSecciones() {
  return (
    <>
      <Hero />
      <QueTrasladamos />
      <Equipos />
      <Cobertura />
      <PorQue />
      <Galeria />
      <Contacto />
    </>
  );
}
