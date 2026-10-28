"use client";

import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";

import { LanguageToggle } from "@/components/i18n/language-toggle";
import type { Locale } from "@/lib/i18n/config";
import type {
  AriaCopy,
  LanguageCopy,
  NavLinkContent,
} from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  locale: Locale;
  navLinks: NavLinkContent[];
  secureLink: string;
  language: LanguageCopy;
  aria: AriaCopy;
}

export function MobileNav({
  locale,
  navLinks,
  secureLink,
  language,
  aria,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 400);
    setOpen(false);
  };

  // Close the panel on Escape; listener only lives while the panel is open.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden flex items-stretch">
      <div className="flex items-center px-2">
        <LanguageToggle locale={locale} copy={language} />
      </div>
      <button
        type="button"
        aria-label={open ? aria.closeMenu : aria.openMenu}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((previous) => !previous)}
        className="bg-brutal-white p-6 brutal-border-l transition-colors hover:bg-brutal-yellow"
      >
        {open ? (
          <X size={32} aria-hidden="true" />
        ) : (
          <Menu size={32} aria-hidden="true" />
        )}
      </button>

      {open && (
        <nav
          id="mobile-nav-panel"
          className="absolute left-0 right-0 top-full z-40 bg-brutal-white brutal-border-b"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleClick(index)}
              className={cn(
                "block font-mono text-lg font-bold uppercase p-6 brutal-border-t transition-colors hover:bg-brutal-black hover:text-white zoom-burst",
                clickedIndex === index && "zoom-burst-active",
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block bg-brutal-black p-6 text-center font-display text-lg font-bold uppercase text-brutal-yellow brutal-border-t transition-colors hover:bg-brutal-yellow hover:text-brutal-black"
          >
            {secureLink}
          </a>
        </nav>
      )}
    </div>
  );
}
