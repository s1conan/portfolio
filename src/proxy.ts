import { NextResponse, type NextRequest } from "next/server";

import { isLocale, localeCookieName } from "@/lib/i18n/config";
import { detectLocaleFromHeaders } from "@/lib/i18n/detect";

/**
 * Resolves the initial language for visitors without a locale-prefixed URL.
 *
 * Precedence: manual choice (cookie) → IP-based country → English.
 * The cookie is only written by the language toggle, so automatic detection
 * never overrides a visitor's explicit choice on later visits.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (isLocale(firstSegment)) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get(localeCookieName)?.value;
  const locale = isLocale(cookieLocale)
    ? cookieLocale
    : detectLocaleFromHeaders(request.headers);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)",
  ],
};
