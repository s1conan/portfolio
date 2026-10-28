import { defaultLocale, isLocale, type Locale } from "./config";
import { en } from "./en";
import { id } from "./id";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = { en, id };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Normalize an untrusted route/cookie value into a supported locale. */
export function resolveLocale(value: unknown): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export * from "./config";
export * from "./detect";
export * from "./types";
