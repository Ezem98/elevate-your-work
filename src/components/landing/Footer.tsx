import { Instagram, MapPin, Phone } from "lucide-react";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "./constants";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

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
              Transporte de carga pesada y mantenimiento técnico.
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
              onClick={() => trackWhatsAppClick("footer_whatsapp")}
              id="footer-whatsapp-link"
              data-tracking="whatsapp_conversion"
              className="inline-flex items-center gap-2 text-sm hover:text-accent"
            >
              <Phone className="h-4 w-4" />
              <span>WhatsApp: {WHATSAPP_NUMBER}</span>
            </a>
            <a
              href={PHONE_TEL_HREF}
              onClick={() => trackPhoneClick("footer_phone")}
              id="footer-phone-call"
              data-tracking="phone_click"
              className="inline-flex items-center gap-2 text-sm hover:text-accent"
              aria-label={`Llamar al teléfono ${PHONE_DISPLAY}`}
            >
              <Phone className="h-4 w-4 text-accent" />
              <span>Llamadas: {PHONE_DISPLAY}</span>
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin className="h-4 w-4" />
              Zona Sur, Buenos Aires · Envíos a todo el país
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
              id="footer-instagram-link"
              className="inline-flex items-center gap-2 text-sm hover:text-accent"
            >
              <Instagram className="h-4 w-4" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 ELEVAPLUS. Todos los derechos reservados.</span>
          <span>Alquiler de maquinaria de elevación · Zona Sur · Argentina</span>
        </div>
      </div>
    </footer>
  );
}
