export const locales = ["en", "id"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Cookie written only when the visitor switches language manually. */
export const localeCookieName = "portfolio-locale";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  id: "ID",
};

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" && (locales as readonly string[]).includes(value)
  );
}
