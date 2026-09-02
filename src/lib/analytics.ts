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

export function trackWhatsAppClick(location: string) {
  trackEvent("whatsapp_click", {
    event_category: "Lead",
    event_label: location,
  });
  // Google Ads conversion event standard hook (can also be mapped via GTM or Google Ads conversion tag)
  trackEvent("generate_lead", {
    source: "whatsapp",
    location,
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
}
