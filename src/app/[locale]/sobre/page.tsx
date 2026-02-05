import Divider from "@/components/home/divider";
import PersonalTraits from "@/components/home/personal-traits";
import PageTitle from "@/components/page-title";
import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";
import { Metadata, ResolvingMetadata } from "next";

type MetadataProps = {
  params: Promise<{ slug: string; locale: Locale }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentMetadata = await parent;
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  let keywords = [...(parentMetadata.keywords || [])];
  keywords.push(...dictionary.pages.about.keywords);

  return {
    title: dictionary.pages.about.title,
    description: dictionary.pages.about.description,
    keywords: keywords,
  };
}

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
