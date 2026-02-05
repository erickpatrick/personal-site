"use client";

import { Locale } from "@/i18n-config";
import { createContext } from "react";

export const LocaleContext = createContext<Locale | undefined>(undefined);

export default function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}
