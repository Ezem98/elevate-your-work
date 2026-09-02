import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-forklift.jpg";
import { WHATSAPP_URL } from "./constants";
import { trackWhatsAppClick } from "@/lib/analytics";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-end lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            <span className="h-px w-10 bg-accent" />
            <span>01 — Alquiler industrial</span>
          </div>
          <h1 className="text-4xl font-black leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[5.25rem]">
            Alquiler de maquinaria de{" "}
            <span className="relative inline-block">
              elevación
              <span className="absolute inset-x-0 -bottom-1 h-2 bg-accent/70" aria-hidden />
            </span>{" "}
            para tu obra o depósito.
          </h1>
          <p className="max-w-xl text-base font-light text-muted-foreground sm:text-lg">
            Autoelevadores, plataformas, zorras y escaleras. Equipos confiables, entrega rápida y
            cobertura en Zona Sur y todo el país.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("hero_primary_cta")}
              id="hero-whatsapp-button"
              data-tracking="whatsapp_conversion"
              className="group inline-flex items-center gap-3 bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Consultar por WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              id="hero-view-services-link"
              className="text-sm font-medium uppercase tracking-wider text-foreground underline-offset-8 hover:underline"
            >
              Ver equipos →
            </a>
          </div>
          <dl className="mt-4 grid grid-cols-3 gap-6 border-t border-border pt-8 text-left">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Cobertura</dt>
              <dd className="mt-1 text-2xl font-bold">Nacional</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Base</dt>
              <dd className="mt-1 text-2xl font-bold">Zona Sur</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Equipos</dt>
              <dd className="mt-1 text-2xl font-bold">+4 tipos</dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 bg-accent/10" aria-hidden />
          <img
            src={heroImage}
            alt="Autoelevador industrial en depósito de elevaplus"
            width={1600}
            height={1100}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-primary px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
            <span className="h-1.5 w-1.5 bg-accent" /> Equipos operativos
          </div>
        </div>
      </div>
    </section>
  );
}
