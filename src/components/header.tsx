import Link from "next/link";
import Navigation from "./navigation";
import { Locale } from "@/i18n-config";

export default function Header({ locale }: { locale: Locale }) {
  return (
    <div className="p-4 flex justify-between align-center">
      <Link href={`/${locale}`} className="group">
        <div className="flex justify-center">
          <div className="flex flex-col text-4xl font-black uppercase origin-center -rotate-6 border-4 border-gray-200 group-hover:border-white transition duration-100 ease-out">
            <h1 className="p-2 bg-transparent text-gray-800 rotate-6 group-hover:bg-gray-800 group-hover:text-white transition duration-200 ease-out delay-100">
              EP
            </h1>
          </div>
        </div>
      </Link>

      <Navigation className="hidden sm:flex" locale={locale} />

      <a
        className="sm:hidden flex p-4 underline underline-offset-8"
        href="#footer-menu"
      >
        Menu
      </a>
    </div>
  );
}
