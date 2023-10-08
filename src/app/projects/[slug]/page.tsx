import { runQuery } from "@/sanity/lib/fetch";
import { q } from "groqd";
import { groq } from "next-sanity";
import { projectSelection } from "../types";

interface Props {
  params: {
    slug: string;
  };
}

const ProjectPage = async ({ params }: Props) => {
  const { slug } = params;

  const project = await runQuery(
    q(groq`*[_type == "project" && slug.current == "${slug}"][0]`).grab(
      projectSelection,
    ),
  );

  const { title, body } = project

  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <div className="container flex min-w-full flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-6xl sm:text-lg sm:leading-8 lg:px-48">
          {body}
        </p>
        <div className="flex flex-1 pt-2">
          <div>{JSON.stringify(project, null, 2)}</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
