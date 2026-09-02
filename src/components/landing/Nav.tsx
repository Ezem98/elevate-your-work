import { MessageCircle, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL_HREF, WHATSAPP_URL } from "./constants";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        <a href="#top" className="flex min-w-0 items-center gap-2" id="nav-brand-logo">
          <span className="inline-block h-2.5 w-2.5 shrink-0 bg-accent" aria-hidden />
          <span className="truncate text-lg font-black tracking-tight">
            ELEVA<span className="text-accent">PLUS</span>
          </span>
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={PHONE_TEL_HREF}
            onClick={() => trackPhoneClick("nav_header")}
            id="nav-phone-call"
            data-tracking="phone_click"
            className="hidden items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
            aria-label={`Llamar a ${PHONE_DISPLAY}`}
          >
            <Phone className="h-3.5 w-3.5 text-accent" />
            <span>{PHONE_DISPLAY}</span>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("nav_header")}
            id="nav-whatsapp-cta"
            data-tracking="whatsapp_conversion"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/85 sm:text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Consultar</span>
          </a>
        </div>
      </div>
    </header>
  );
}
