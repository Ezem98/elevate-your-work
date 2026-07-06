import { Instagram, MapPin, Phone } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_NUMBER, WHATSAPP_URL } from "./constants";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 bg-accent" />
              <span className="text-lg font-black tracking-tight">
                ELEVA<span className="text-accent">PLUS</span>
              </span>
            </div>
            <p className="max-w-sm text-sm font-light text-primary-foreground/70">
              Alquiler de maquinaria de elevación. Autoelevadores, plataformas, zorras y escaleras.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
              Contacto
            </span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-accent"
            >
              <Phone className="h-4 w-4" />
              {WHATSAPP_NUMBER}
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin className="h-4 w-4" />
              Zona sur, Buenos Aires · Envíos a todo el país
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
              Redes
            </span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-accent"
            >
              <Instagram className="h-4 w-4" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 ELEVAPLUS. Todos los derechos reservados.</span>
          <span>Alquiler de maquinaria de elevación · Argentina</span>
        </div>
      </div>
    </footer>
  );
}