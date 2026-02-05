"use client";
import { i18n, Locale } from "@/i18n-config";
import Link from "next/link";
import { usePathname } from "next/navigation";

function generateLanguageLinks(locale: Locale, pathname: string) {
  const activeClass =
    "p-2 md:px-0 hover:underline hover:underline-offset-8 decoration-2 decoration-wavy decoration-blue-600 font-bold underline underline-offset-8";
  const innactiveClass =
    "p-2 md:px-0 hover:underline hover:underline-offset-8 decoration-2 decoration-wavy decoration-blue-600";

  return i18n.locales.map((baseLocale) => {
    const alternativeHref = pathname.replace(locale, baseLocale);
    const text = baseLocale === "pt-br" ? "🇧🇷" : "🇺🇸";
    return pathname.includes(baseLocale) ? (
      <p key={baseLocale} className={activeClass}>
        {text}
      </p>
    ) : (
      <Link className={innactiveClass} href={alternativeHref} key={baseLocale}>
        {text}
      </Link>
    );
  });
}

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return generateLanguageLinks(locale, pathname);

  //   return (
  //     <span>
  //       {pathname.includes(locale) ? (
  //         <p className={activeClass}>{locale.toLocaleUpperCase()}</p>
  //       ) : (
  //         <Link className={innactiveClass} href={alternativeHref}>
  //           {locale === "en-us" ? "pt-br" : "en-us"}
  //         </Link>
  //       )}
  //     </span>
  //   );
}
