"use client";

import { useState } from "react";

import { LanguageToggle } from "@/components/i18n/language-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import type { Locale } from "@/lib/i18n/config";
import type { AriaCopy, LanguageCopy, NavLinkContent } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

interface HeaderProps {
  locale: Locale;
  navLinks: NavLinkContent[];
  secureLink: string;
  language: LanguageCopy;
  aria: AriaCopy;
}

export function Header({
  locale,
  navLinks,
  secureLink,
  language,
  aria,
}: HeaderProps) {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 500);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-900 brutal-border-b">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-stretch w-full mx-auto max-w-7xl">
        {/* flex on Link lets the logo cell stretch to full header height */}
        <a href="#hero" className="flex">
          <div className="bg-brutal-yellow font-display text-2xl font-bold uppercase tracking-tighter p-4 max-md:brutal-border-b md:brutal-border-r md:text-3xl flex items-center">
            Web_Dev
          </div>
        </a>

        {/* w-full keeps the border-segmented cells continuous across the header */}
        <nav className="hidden lg:flex flex-1 min-w-0 items-stretch bg-brutal-black text-brutal-white">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleClick(index)}
              className={cn(
                "relative flex flex-1 min-w-0 items-center justify-center font-mono text-xs font-bold uppercase px-2 py-4 transition-colors zoom-burst hover:text-brutal-yellow xl:text-sm",
                clickedIndex === index && "zoom-burst-active",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-stretch bg-brutal-black">
          <div className="flex items-center px-3">
            <LanguageToggle locale={locale} copy={language} />
          </div>
          <a
            href="#contact"
            className="flex items-center justify-center bg-green-800 px-3 py-6 font-display text-lg font-bold uppercase text-brutal-white brutal-border-l transition-colors hover:bg-brutal-yellow hover:text-brutal-black md:min-w-[240px] md:whitespace-nowrap"
          >
            {secureLink}
          </a>
        </div>

        <MobileNav
          locale={locale}
          navLinks={navLinks}
          secureLink={secureLink}
          language={language}
          aria={aria}
        />
      </div>
    </header>
  );
}
