import { projectSelection } from "../types";
import CombinedImage from "@/app/_components/CombinedImage";
import { runQuery } from "@/sanity/lib/fetch";
import { Button } from "@nextui-org/button";
import { q } from "groqd";
import { ArrowLeft } from "lucide-react";
import { groq } from "next-sanity";
import NextLink from "next/link";

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

  const { title, body, languageIcon, language } = project;

  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <div className="container flex min-w-full flex-col gap-4 px-6 sm:px-12 md:px-24 lg:px-48">
        <div className="flex flex-col items-start">
          <Button
            as={NextLink}
            href="/projects"
            color="danger"
            variant="light"
            startContent={<ArrowLeft />}
            className="p-0 data-[hover=true]:bg-transparent"
          >
            Projects
          </Button>
          <div className="flex w-full items-center gap-2">
            <h1 className="text-xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h1>
              <CombinedImage
                alt={`${language} logo`}
                radius="none"
                src={languageIcon?.asset.url}
                width={32}
                height={32}
                className="h-full w-auto"
              />
          </div>
        </div>
        <div>
          <p className="max-w-6xl sm:text-lg sm:leading-8">{body}</p>
        </div>
      </div>
      {/* <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-6xl sm:text-lg sm:leading-8 lg:px-48">{body}</p>
        <div className="flex flex-1 pt-2">
          <div>{JSON.stringify(project, null, 2)}</div>
        </div> */}
    </section>
  );
};

export default ProjectPage;
