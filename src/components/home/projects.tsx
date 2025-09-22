import projects from "@/app/projects.json";
export default function Projects() {
  return (
    <div className="text-center">
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black">
        Alguns dos projetos que tenho trabalhado
      </h3>
      <div className="bg-white py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            {projects.map((project) => (
              <div className="bg-blue-600/5 p-8 sm:p-10" key={project.name}>
                <a
                  href={project.link}
                  title={project.name}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center"
                >
                  <span className="inline-block">
                    <span className="block text-xl font-semibold -mb-2 mt-2">
                      {project.top}
                    </span>
                    <span className="block text-2xl font-black">
                      {project.bottom}
                    </span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
