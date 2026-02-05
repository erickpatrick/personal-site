import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n, Locale } from "./i18n-config";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.endsWith(".svg")) {
    return;
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale: Locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/pt-br${pathname}`, request.url));
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml).*)"],
};
