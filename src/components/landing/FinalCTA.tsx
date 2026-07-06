import { ArrowRight, Instagram, MessageCircle } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_NUMBER, WHATSAPP_URL } from "./constants";
import { useFadeIn } from "@/hooks/use-fade-in";

export function FinalCTA() {
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
          ¿Necesitás alquilar{" "}
          <span className="relative inline-block">
            un equipo?
            <span className="absolute inset-x-0 -bottom-1 h-2 bg-accent/70" aria-hidden />
          </span>
        </h2>
        <p className="mt-6 max-w-2xl text-base font-light text-muted-foreground sm:text-lg">
          Contanos qué necesitás y te asesoramos para elegir el equipo justo para tu trabajo.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
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
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 border border-border bg-background p-6 text-foreground transition-colors hover:border-accent sm:p-8"
          >
            <div className="flex min-w-0 flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Seguinos en
              </span>
              <span className="flex items-center gap-3 text-2xl font-black sm:text-3xl">
                <Instagram className="h-7 w-7 shrink-0" />
                Instagram
              </span>
              <span className="truncate text-sm font-medium text-muted-foreground">
                {INSTAGRAM_HANDLE}
              </span>
            </div>
            <ArrowRight className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
