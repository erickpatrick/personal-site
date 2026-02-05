import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";
import NavigationLink from "./navigation-link";
import LanguageSwitcher from "./language-switcher";

export default async function Navigation({
  className,
  locale,
}: {
  className?: string;
  locale: Locale;
}) {
  const activeClass =
    "p-2 hover:underline hover:underline-offset-8 decoration-2 decoration-wavy decoration-blue-600 font-bold underline underline-offset-8";
  const innactiveClass =
    "p-2 hover:underline hover:underline-offset-8 decoration-2 decoration-wavy decoration-blue-600";

  const dictionary = await getDictionary(locale);
  return (
    <nav className={`flex justify-center sm:space-x-6 ${className}`}>
      <NavigationLink
        activeClass={activeClass}
        innactiveClass={innactiveClass}
        href={`/${locale}`}
        text={dictionary.nav.home}
      />
      <NavigationLink
        activeClass={activeClass}
        innactiveClass={innactiveClass}
        href={`/${locale}/artigos`}
        text={dictionary.nav.blog}
      />
      <NavigationLink
        activeClass={activeClass}
        innactiveClass={innactiveClass}
        href={`/${locale}/projetos`}
        text={dictionary.nav.projects}
      />
      <NavigationLink
        activeClass={activeClass}
        innactiveClass={innactiveClass}
        href={`/${locale}/sobre`}
        text={dictionary.nav.about}
      />
      <NavigationLink
        activeClass={activeClass}
        innactiveClass={innactiveClass}
        href={`/${locale}/contato`}
        text={dictionary.nav.contact}
      />
      <LanguageSwitcher locale={locale} />
    </nav>
  );
}
