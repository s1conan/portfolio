import { defaultLocale, type Locale } from "./config";

/**
 * Resolve the default locale from the request.
 *
 * Vercel exposes the visitor's country in `x-vercel-ip-country`, derived from
 * their IP. Indonesian visitors get Indonesian; everyone else gets English.
 * Local development has no geo header, so it safely falls back to English.
 */
export function detectLocaleFromHeaders(headers: Headers): Locale {
  const country = headers.get("x-vercel-ip-country")?.trim().toUpperCase();

  return country === "ID" ? "id" : defaultLocale;
}
