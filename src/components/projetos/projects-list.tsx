import projects from "@/app/projects.json";
import Image from "next/image";

export default function ProjectsList() {
  return (
    <div className="py-16 md:py-24">
      <dl className="mx-auto grid grid-cols-1 gap-x-6 gap-y-10 text-xl leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        {projects.map((project) => (
          <div className="relative pl-9" key={project.name}>
            <dt className="inline font-semibold text-gray-900">
              <Image
                src={`/assets/${project.icon}`}
                alt={project.name}
                width={24}
                height={24}
                className="absolute left-1 top-1 h-6 w-6 text-blue-600"
              />
              <a
                href={project.link}
                className="text-blue-600 hover:underline hover:underline-offset-8 decoration-2 decoration-wavy decoration-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </a>
              &nbsp;
            </dt>

            <dd className="inline text-gray-600">{project.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
