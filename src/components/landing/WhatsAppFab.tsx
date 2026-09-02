import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./constants";
import { trackWhatsAppClick } from "@/lib/analytics";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("fab_floating_button")}
      id="whatsapp-fab-button"
      data-tracking="whatsapp_conversion"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/40 transition-transform hover:scale-105 sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.2} />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40" />
    </a>
  );
}
