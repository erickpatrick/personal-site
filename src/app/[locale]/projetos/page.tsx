import Divider from "@/components/home/divider";
import PageTitle from "@/components/page-title";
import ProjectsList from "@/components/projetos/projects-list";
import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";

export const metadata = {
  title: "Projetos",
  description:
    "Listagem com alguns projetos paralelos em que tenho trabalhado: RPG de Mesa, Vídeo Games, YouTube, e muito mais...",
};

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
