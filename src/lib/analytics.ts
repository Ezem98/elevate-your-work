// Safe analytics helper for SSR and Google Ads / GA4 tracking

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

const WA_CONVERSION_LABEL = "AW-18326519357/oJ1JCM6agvkcEL384aJE";
const PHONE_CONVERSION_LABEL = "AW-18326519357/hqhACNGagvkcEL384aJE";

export function trackWhatsAppClick(location: string) {
  trackEvent("whatsapp_click", {
    event_category: "Lead",
    event_label: location,
  });

  trackEvent("generate_lead", {
    source: "whatsapp",
    location,
  });

  // Disparo directo a Google Ads
  trackEvent("conversion", {
    send_to: WA_CONVERSION_LABEL,
  });
}

export function trackPhoneClick(location: string) {
  trackEvent("phone_call_click", {
    event_category: "Lead",
    event_label: location,
  });

  trackEvent("generate_lead", {
    source: "phone_call",
    location,
  });

  // Disparo directo a Google Ads
  trackEvent("conversion", {
    send_to: PHONE_CONVERSION_LABEL,
  });
}
