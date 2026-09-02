export const SITE_URL = "https://www.elevaplus.com.ar";

export const PHONE_RAW = "+5491132765635";
export const PHONE_DISPLAY = "+54 9 11 3276-5635";
export const PHONE_TEL_HREF = `tel:${PHONE_RAW}`;

export const WHATSAPP_NUMBER = PHONE_DISPLAY;
export const WHATSAPP_URL =
  "https://wa.me/5491132765635?text=" +
  encodeURIComponent("Hola ELEVAPLUS, quiero consultar por un alquiler de equipos.");

export const INSTAGRAM_URL = "https://instagram.com/elevaplus_";
export const INSTAGRAM_HANDLE = "@elevaplus_";

// Google Tag ID: configured via VITE_GTAG_ID or default Google Ads/GA4 ID
export const GTAG_ID =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_GTAG_ID) || "AW-XXXXXXXXX";
