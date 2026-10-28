"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localeCookieName, localeLabels, type Locale } from "@/lib/i18n/config";
import type { LanguageCopy } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  locale: Locale;
  copy: LanguageCopy;
  className?: string;
}

/** Seconds the manual language choice stays remembered. */
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

/**
 * Single-button language switch. It shows the active language and links to the
 * other locale. Being a real link keeps it working without JavaScript and lets
 * Next.js prefetch the other locale for an instant switch.
 *
 * The width is fixed so the label swap (EN ⇄ ID) never moves surrounding layout.
 */
export function LanguageToggle({
  locale,
  copy,
  className,
}: LanguageToggleProps) {
  const pathname = usePathname();
  const nextLocale: Locale = locale === "en" ? "id" : "en";

  const segments = pathname.split("/");
  segments[1] = nextLocale;
  const href = segments.join("/") || `/${nextLocale}`;

  const rememberChoice = () => {
    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=${ONE_YEAR_SECONDS}; samesite=lax`;
    document.documentElement.lang = nextLocale;
  };

  return (
    <Link
      href={href}
      onClick={rememberChoice}
      scroll={false}
      aria-label={
        nextLocale === "en" ? copy.switchToEnglish : copy.switchToIndonesian
      }
      className={cn(
        "flex h-[44px] w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-full border-4 border-brutal-black bg-brutal-yellow font-mono text-sm font-bold uppercase text-brutal-black",
        "focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brutal-white",
        className,
      )}
    >
      {localeLabels[locale]}
    </Link>
  );
}
