import { sanityFetch } from "@/sanity/lib/fetch";
import { getProjects } from "@/sanity/lib/queries";

import ProjectCard, { Project } from "./_components/ProjectCard";

const ProjectPage = async () => {
  const sanityProjects = await sanityFetch<Project[]>({ query: getProjects });

  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <div className="container flex min-w-full flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Projects
        </h1>
        <p className="max-w-6xl sm:text-lg sm:leading-8 lg:px-48">
          Check out what I&apos;ve been up to
        </p>
        <div className="flex flex-1 pt-2">
          <div className="container flex flex-wrap justify-center gap-9">
            {sanityProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
