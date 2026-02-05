import Divider from "@/components/home/divider";
import Hero from "@/components/home/hero";
import LaterstPosts from "@/components/home/latests-posts";
import Projects from "@/components/home/projects";
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
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const parentMetadata = await parent;
  let keywords = [...(parentMetadata.keywords || [])];
  keywords.push(...dictionary.pages.home.keywords);

  return {
    title: parentMetadata.title,
    description: parentMetadata.description,
    keywords: keywords,
  };
}

export default async function Home(props: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await props.params;
  return (
    <>
      <div className="container mx-auto p-4 py-8">
        <Hero locale={locale} />
        <Divider />
      </div>
      <Projects locale={locale} />
      <Divider />
      <LaterstPosts locale={locale} />
    </>
  );
}
