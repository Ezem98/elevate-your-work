import forkliftImg from "@/assets/services/service-forklift-real.jpg";
import platformImg from "@/assets/service-platform.jpg";
import palletImg from "@/assets/service-pallet.jpg";
import ladderImg from "@/assets/service-ladder.jpg";
import transportImg from "@/assets/services/service-transport.jpg";
import maintenanceImg from "@/assets/services/service-maintenance.jpg";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";
import { trackWhatsAppClick } from "@/lib/analytics";
import { MINIMO_HORAS, PRECIO_HORA, TRANSPORTE_PATH, WHATSAPP_URL } from "./constants";

type Servicio = {
  n: string;
  title: string;
  img: string;
  alt: string;
  desc: string;
  link?: { to: typeof TRANSPORTE_PATH; label: string };
};

const services: Servicio[] = [
  {
    n: "01",
    title: "Alquiler de autoelevadores (clark / sampi)",
    img: forkliftImg,
    alt: "Autoelevador eléctrico ELEVAPLUS en depósito",
    desc: "Alquilamos autoelevadores, también conocidos como clark, sampi o montacargas, por hora, día, semana o mes. Equipos de distintas capacidades para carga y descarga en obra, depósito o industria.",
  },
  {
    n: "02",
    title: "Alquiler de plataformas elevadoras tipo tijera (tijeras elevadoras)",
    img: platformImg,
    alt: "Plataforma elevadora tipo tijera",
    desc: "La tijera elevadora, que muchos buscan como grúa elevadora, para trabajos en altura: mantenimiento, montaje, pintura o construcción. Alquiler por día, mínimo 1 día.",
  },
  {
    n: "03",
    title: "Zorras (transpaletas)",
    img: palletImg,
    alt: "Transpaleta industrial",
    desc: "Para el traslado de cargas dentro de depósitos y locales. Prácticas, resistentes y fáciles de operar.",
  },
  {
    n: "04",
    title: "Escaleras",
    img: ladderImg,
    alt: "Escalera industrial",
    desc: "Escaleras de distintas alturas para trabajos que requieren acceso rápido y seguro a zonas elevadas.",
  },
  {
    n: "05",
    title: "Transporte de vehículos y maquinaria",
    img: transportImg,
    alt: "Camión plataforma ELEVAPLUS transportando un vehículo utilitario",
    desc: "Trasladamos vehículos, maquinaria pesada y equipos industriales con camión plataforma, cuidando cada carga de punto a punto en Zona Sur y CABA.",
    link: { to: TRANSPORTE_PATH, label: "Ver transporte" },
  },
  {
    n: "06",
    title: "Mantenimiento y reparación",
    img: maintenanceImg,
    alt: "Técnico de ELEVAPLUS realizando un service en la vía pública",
    desc: "Service técnico especializado en autoelevadores: mantenimiento preventivo y reparaciones para que tu equipo esté siempre operativo.",
  },
];

export function Services() {
  const fade = useFadeIn<HTMLDivElement>();
  return (
    <section id="servicios" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-14 grid gap-6 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            <span className="h-px w-10 bg-accent" />
            <span>02 — Equipos</span>
          </div>
          <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Todo lo que necesitás para mover, elevar y trabajar en altura.
          </h2>
        </div>
        <div
          ref={fade.ref}
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${fade.className}`}
        >
          {services.map((s) => (
            <article
              key={s.n}
              className="group flex flex-col border border-border bg-background transition-colors hover:border-accent"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 bg-accent px-2 py-1 text-[10px] font-bold tracking-widest text-accent-foreground">
                  {s.n}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-lg font-bold tracking-tight">{s.title}</h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">{s.desc}</p>
                {s.link && (
                  <Link
                    to={s.link.to}
                    id="services-transporte-link"
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-2 text-sm font-semibold uppercase tracking-wider text-foreground underline-offset-8 hover:underline"
                  >
                    {s.link.label}
                    <ArrowRight className="h-4 w-4 text-accent" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border border-border bg-background">
          <div className="flex flex-col gap-3 border-b border-border p-6 md:flex-row md:items-end md:justify-between md:p-8">
            <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
              Precios de alquiler de autoelevadores y sampi
            </h3>
            <p className="text-sm font-light text-muted-foreground">Autoelevadores y sampi.</p>
          </div>
          <dl className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="flex flex-col gap-2 bg-accent/10 p-6 md:p-8">
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Por hora
              </dt>
              <dd className="text-3xl font-black tracking-tight">{PRECIO_HORA}</dd>
              <dd className="text-sm text-muted-foreground">
                {MINIMO_HORAS}. Autoelevadores y sampi.
              </dd>
            </div>
            <div className="flex flex-col gap-2 bg-background p-6 md:p-8">
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Por día
              </dt>
              <dd className="text-3xl font-black tracking-tight">Consultanos</dd>
            </div>
            <div className="flex flex-col gap-2 bg-background p-6 md:p-8">
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Por mes
              </dt>
              <dd className="text-3xl font-black tracking-tight">Consultanos</dd>
            </div>
          </dl>
          <p className="border-t border-border px-6 py-4 text-sm text-muted-foreground md:px-8">
            Plataformas elevadoras: alquiler por día (mínimo 1 día). Consultanos.
          </p>
          <div className="flex flex-col gap-5 border-t border-border p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <p className="max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
              Zona Sur y CABA, con traslado en camión plataforma propio. Factura A, ART y seguro de
              carga.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("services_pricing_cta")}
              id="services-pricing-whatsapp-button"
              data-tracking="whatsapp_conversion"
              className="group inline-flex w-fit items-center gap-3 bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Cotizá por WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
