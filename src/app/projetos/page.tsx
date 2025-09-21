import PageTitle from "@/components/page-title";
import ProjectsList from "@/components/projetos/projects-list";

export default function ProjectsRoot() {
  return (
    <div className="container mx-auto p-4 py-8">
      <PageTitle
        title="Projetos"
        description="Alguns projetos paralelos em que tenho trabalhado: RPG de Mesa, Vídeo Games, YouTube, e muito mais..."
      />

      <ProjectsList />
    </div>
  );
}
