import Divider from "@/components/home/divider";
import PersonalTraits from "@/components/home/personal-traits";
import PageTitle from "@/components/page-title";
import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";

export const metadata = {
  title: "Sobre mim",
  description: "Saiba mais sobre minha trajetória, habilidades e experiências.",
};

export default async function AboutRoot(props: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await props.params;
  const dictionary = await getDictionary(locale);
  return (
    <>
      <PageTitle
        title={dictionary.pages.about.title}
        description={dictionary.pages.about.description}
      />
      <Divider />
      <PersonalTraits locale={locale} />
    </>
  );
}
