import ProjectCard from "./_components/ProjectCard";
import { projectSummarySelection } from "./types";
import { runQuery } from "@/sanity/lib/fetch";
import { q } from "groqd";
import { groq } from "next-sanity";

const ProjectPage = async () => {
  const projects = await runQuery(
    q(
      groq`*[_type == "project"]{
        _id,
        title,
        slug,
        language,
        languageIcon,
        subtitle,
    } | order(releaseDate desc)`,
      { isArray: true },
    ).grab(projectSummarySelection),
  );

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
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
