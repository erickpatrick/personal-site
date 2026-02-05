import Divider from "@/components/home/divider";
import PageTitle from "@/components/page-title";
import ProjectsList from "@/components/projetos/projects-list";
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
  keywords.push(...dictionary.pages.projects.keywords);

  return {
    title: dictionary.pages.projects.title,
    description: dictionary.pages.projects.description,
    keywords: keywords,
  };
}

export default async function ProjectsRoot(props: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await props.params;
  const dictionary = await getDictionary(locale);
  return (
    <>
      <PageTitle
        title={dictionary.pages.projects.title}
        description={dictionary.pages.projects.description}
      />

      <Divider />

      <ProjectsList locale={locale} />
    </>
  );
}
