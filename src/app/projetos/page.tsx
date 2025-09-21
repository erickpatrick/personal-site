import PageTitle from "@/components/page-title";
import ProjectsList from "@/components/projetos/projects-list";

export default function ProjectsRoot() {
  return (
    <>
      <PageTitle
        title="Projetos"
        description="Alguns projetos paralelos em que tenho trabalhado: RPG de Mesa, Vídeo Games, YouTube, e muito mais..."
      />

      <ProjectsList />
    </>
  );
}
